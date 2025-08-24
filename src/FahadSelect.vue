<template>
    <div>
        <VueMultiselect
            v-model="selectedOption"
            :options="data"
            :track-by="'id'"
            @search-change="onSearchChange"
            :label=label
            :placeholder="placeholder"
            :loading="loading"
            :multiple="multiple"
            :custom-label="renderOption"
            class="custom-multiselect"
            :internal-search="false"
            :group-values="isGrouped ? 'data' : undefined"
            :group-label="isGrouped ? 'group' : undefined"
            :group-select="isGrouped ? multiple : false"
        >

            <template #option="{ option, selectable }">
                <div
                    v-if="option.$isLabel"
                    class="multiselect__option--group"
                    :selectable="isGrouped"
                    @mousedown.prevent
                    @mouseup.prevent
                    @click.prevent
                >
                    {{ option.$groupLabel }}
                </div>
                <div v-else v-html="renderOption(option)" :selectable="isGrouped">
                </div>
            </template>


            <template #singleLabel="{ option, remove }">
                <span v-html="renderOption(option)"></span>
            </template>

            <template #selection="{ values, isOpen }">
                <span v-if="values.length && !isOpen" class="multiselect__selection">

                    <template v-for="value in values" :key="value.id">
                        <span v-html="renderOption(value)" class="multiselect__tag"></span>
                    </template>
                </span>
            </template>

            <template v-slot:tag="{ option, remove }">
                <div class="multiselect__tag">
                    <span v-html="renderOption(option)"></span>
                    <i class="multiselect__tag-icon" @click.prevent @mousedown.prevent.stop="remove(option, $event)"/>
                </div>
            </template>

        </VueMultiselect>
    </div>

</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import VueMultiselect from 'vue-multiselect';
import { debounce } from 'lodash'; // Changed from 'lodash/debounce'
const renderOption = (option) => {
    return option.label || `<span>${option[props.label]}</span>`;
};

const props = defineProps({
    modelValue: {
        type: [Object, Boolean, String, Array, Number],
        default: false,
    },
    searchRoute: {
        type: String,
        required: true,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    param: {
        type: [Object, Boolean, String, Array, Number],
        default: false,
    },
    placeholder: {
        type: String,
        default: 'Select an option'
    },
    label: {
        type: String,
        default: 'label'
    },
});


const emit = defineEmits(['update:modelValue', 'triggerChange', 'reload']);
const isGrouped = ref(false);
const data = ref([]);
const loading = ref(false);
const selectedOption = ref(props.modelValue || []);
watch(selectedOption, (newValue) => {
    emit('update:modelValue', newValue);
    emit('triggerChange', newValue);
});

watch(() => props.modelValue, (newVal) => {
    if (!newVal) return;

    if (props.multiple) {
        if (!Array.isArray(newVal)) return;

        newVal.forEach(val => {
            const exists = data.value.some(item => item.id === val.id);
            if (!exists) {
                data.value.push(val);
            }
        });

        selectedOption.value = newVal;

    } else {
        const exists = data.value.some(item => item.id === newVal.id);
        if (!exists) {
            data.value.push(newVal);
        }

        selectedOption.value = newVal;
    }

}, {immediate: true});


onMounted(() => {
    fetchData('')
})

const fetchData = async (search) => {
    loading.value = true;
    try {
        const response = await axios.get(route(props.searchRoute), {
            params: {
                query_: search,
                param: props.param
            },
        });
        data.value = response.data.results.flatMap(item => {
            if (item.group) {
                isGrouped.value = true;
                if (Array.isArray(item.data)) {
                    return [{ group: item.group, data: item.data }];
                } else if (item.data) {
                    return [{ group: item.group, data: [item.data] }];
                }
                return [];
            } else {
                isGrouped.value = false;
                const labelValue = props.label && item[props.label] ? item[props.label] : (item.label || 'No Label');
                return {
                    ...item,
                    id: item.id,
                    label: labelValue
                };
            }
        }).map(item => {
            if (item.group && Array.isArray(item.data)) {
                return {
                    group: item.group,
                    data: item.data.map(innerItem => {
                        const labelValue = props.label && innerItem[props.label] ? innerItem[props.label] : innerItem.label;
                        return {
                            ...innerItem, // Include ALL properties of the original 'innerItem'
                            label: labelValue,
                            category: item.group
                        };
                    })
                };
            } else {
                return item;
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
    }
};

watch(data, (newData) => {
    isGrouped.value = newData.some(item => item.group);
}, { deep: true, immediate: true });

const reload = async () => {
    await nextTick();
    await fetchData('');
    selectedOption.value = props.multiple ? [] : null;
};

defineExpose({
    reload
});

emit('reload', reload);

const debouncedFetchUsers = debounce((search) => {
    fetchData(search);
}, 300);

const onSearchChange = (search) => {
    if (selectedOption.value?.name === search) {
        return;
    }
    debouncedFetchUsers(search);
};

</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>

.multiselect__option--selected {
  background: #3ed15e !important;
  color: white  !important;
}

.multiselect__single {
    max-width: 100%; /* Match the parent container's width */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.custom-multiselect .multiselect__option {
    text-transform: none !important;
}


.multiselect__content-wrapper {
    max-height: 300px !important;
    overflow-y: auto;
}

.multiselect__search-wrapper {
    padding: 8px;
    border-top: 1px solid #ccc;
}

.multiselect__input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
}

.multiselect__tag {
    display: inline-block;
    padding: 4px 8px;
    margin-right: 4px;
    background: transparent;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
    /* Ensure text doesn't overflow the tag */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px; /* Adjust this value based on your design */
}

.multiselect__selection {
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 4px;
    /* Prevent overflow of the container */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%; /* Ensure it stays within parent bounds */
}

.custom-tag {
    display: inline-flex;
    align-items: center;
    background-color: #42b983;
    color: white;
    padding: 4px 8px;
    margin: 2px;
    border-radius: 12px;
    font-size: 14px;
}

.remove-btn {
    margin-left: 6px;
    cursor: pointer;
    font-weight: bold;
}

.remove-btn:hover {
    color: #ff4d4f;
}

</style>
