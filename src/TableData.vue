<!-- TableData.vue -->
<template>
    <DataTable ref="table" :options="mergedOptions" :ajax="ajaxData" class="display" :columns="columns" width="100%">
        <thead>
        <tr>
            <slot name="table-headers">
            </slot>
        </tr>
        </thead>
        <!-- Dynamic Slot for Columns -->
        <template v-for="index in max" #[`column-${index}`]="props" :key="index">
            <slot :name="`column-${index}`" v-bind="props">
                {{ props.rowData[index] }}
            </slot>
        </template>
    </DataTable>
</template>

<style>
@import 'datatables.net-dt/css/dataTables.dataTables.css';
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
DataTable.use(DataTablesCore);

import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "./vfs_fonts";
pdfMake.vfs = pdfFonts.default;

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-fixedcolumns-dt';
import 'datatables.net-fixedheader-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-select-dt';

// ✅ Proper fix for JSZip
import JSZip from 'jszip';
window.JSZip = JSZip;

const table = ref();

// Define Props
const props = defineProps({
    ajaxUrl: {
        type: String,
        required: false, // Already optional
        default: null,
    },
    parameters: {
        type: Object,
        required: false,
        default: () => ({}),
    },
    data: { // New prop for local data
        type: Array,
        required: false,
        default: () => [],
    },
    options: {
        type: Object,
        default: () => ({
            processing: true,
            serverSide: true, // This will be overridden if no ajaxUrl
            pageLength: 10,
            responsive: false,
            scrollX: true,
            pagingType: 'full_numbers',
        }),
    },
    max: {
        type: Number,
        required: true,
    },
    columns: {
        type: Array,
        required: false,
        default: () => [],
    },
});
const emit = defineEmits(['data-loaded']); // Define the custom event
const ajaxData = computed(() => {
    if (props.ajaxUrl) {
        return {
            url: props.ajaxUrl,
            type: 'GET',
            data: (d: any) => ({
                ...d,
                ...props.parameters,
            }),
            dataFilter: function(d) {
                const parsedData = JSON.parse(d); // Assuming the data is JSON
                emit('data-loaded', parsedData); // Emit the data to the parent
                return d; // Return the data for DataTable
            },
            // dataSrc: props.dataSrc, // Use the dataSrc prop
        };
    }
    return null;
});

// Merge options dynamically based on whether AJAX is used
const mergedOptions = computed(() => {
    const defaultOptions = {
        ...props.options,
        data: props.data, // Add local data to options
    };

    // If no AJAX, disable serverSide and processing
    if (!props.ajaxUrl) {
        return {
            ...defaultOptions,
            serverSide: false,
            processing: false,
        };
    }
    return defaultOptions;
});

defineExpose({
    reload: () => {
        if (table.value?.dt) {
            if (props.ajaxUrl) {
                table.value.dt.ajax.reload(); // Reload AJAX data
            } else {
                table.value.dt.clear().rows.add(props.data).draw(); // Reload local data
            }
        } else {
            console.error("Table reference not found or not initialized.");
        }
    },
});

</script>

<style>
@import url('datatables.net-dt');
@import url('datatables.net-fixedcolumns-dt');
@import url('datatables.net-fixedheader-dt');
@import url('datatables.net-responsive-dt');


</style>
