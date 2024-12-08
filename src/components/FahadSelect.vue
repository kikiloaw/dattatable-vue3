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
        />
    </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import VueMultiselect from 'vue-multiselect';
import debounce from 'lodash/debounce';

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
const selectedOption = ref(props.modelValue);

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
        data.value = response.data.results;
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
</style>