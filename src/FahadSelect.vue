<template>
    <div>
        <VueMultiselect
            v-model="selectedOption"
            :options="data"
            track-by="id"
            @search-change="onSearchChange"
            :label=label
            :placeholder="placeholder"
            :loading="loading"
            :multiple="multiple"
            :custom-label="renderOption"
        >
            <template #option="{ option }">
                <div v-html="renderOption(option)"></div>
            </template>

            <template #singleLabel="{ option }">
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
                    <i class="multiselect__tag-icon" @click.prevent @mousedown.prevent.stop="remove(option, $event)" />
                </div>
            </template>

        </VueMultiselect>
    </div>

</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import VueMultiselect from 'vue-multiselect';
import { debounce } from 'lodash';  // Changed from 'lodash/debounce'
const renderOption = (option) => {
    return option.html || `<span>${option[props.label]}</span>`;
};
const props = defineProps({
    modelValue: Object,
    searchRoute: {
        type: String,
        required: true,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    param: {
        type: [Object, Boolean],
        default: false,
    },
    placeholder: {
        type: String,
        default: 'Select an option'
    },
    label: {
        type: String,
        default: 'name'
    },
});


const emit = defineEmits(['update:modelValue', 'triggerChange','reload']);

const data = ref([]);
const loading = ref(false);
const selectedOption = ref(props.modelValue || []);
watch(selectedOption, (newValue) => {
    emit('update:modelValue', newValue);
    emit('triggerChange', newValue);
});

onMounted(()=>{
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
        data.value = response.data.results.map(item => ({
            id: item.id,
            html: item.html || `<span>${item[props.label]}</span>` // Fallback to plain text in <span>
        }));
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const reload = async () => {
    await nextTick();
    await fetchData('');
    selectedOption.value = null
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
    color: #000; /* Match single-select text color */
    border: 1px solid #ccc; /* Optional border for visibility */
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
}

.multiselect__selection {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 4px;
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
