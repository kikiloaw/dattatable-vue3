# datatable-vue3

**datatable-vue3** is a Vue 3 wrapper for DataTables.net that provides a ready-to-use datatable component with all the features of DataTables.net including sorting, searching, pagination, and more.

## Features

- **Ready to Use**: No complex setup required - just import and use
- **Full DataTables.net Support**: All DataTables.net features including sorting, searching, pagination
- **Vue 3 Compatible**: Built specifically for Vue 3 with Composition API
- **Export Capabilities**: Built-in support for PDF, CSV, copy, and print and now excelHtml5, excel
- **Responsive Design**: Mobile-friendly responsive tables
- **Fixed Columns/Headers**: Support for fixed columns and headers
- **Row Selection**: Built-in row selection functionality
- **Server-side Processing**: AJAX data loading support

## Installation

```bash
npm install @kikiloaw/datatable-vue3@latest
```


## New Export added
now excelHtml5, excel


## Basic Usage

```vue
<template>
  <DatatableVue3 
      ref="table" 
      :ajaxUrl="route('Users.List')" 
      :options="options" 
      :parameters="campus" 
      :max="5">
    <!-- Custom Table Headers -->
    <template #table-headers>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>password</th>
      <th>Actions</th>
    </template>
    <!-- Custom Actions Column -->
    <template #column-5="{ rowData }">
      <ButtonNew types="settings" tooltips="password" @click="changePass(rowData[5])" />
    </template>

  </DatatableVue3>

</template>

<script setup>
import { ref } from 'vue';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import DatatableVue3 from '@kikiloaw/datatable-vue3';

const table = ref();

const options = {
  processing: true,
  serverSide: true,
  select: true,
  pageLength: 10,
  responsive:false,
  ordering: false,
  lengthMenu: [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: '500', value: 500 },
    { label: '1000', value: 1000 }
  ],
  columnDefs: [
    {
      target: 4,
      visible: false
    }
  ],
  scrollX: true,
  pagingType: 'full_numbers',
};
</script>
```

## Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `options` | Object | Yes | DataTables configuration options |
| `ajaxUrl` | String | No | API endpoint for fetching data |
| `parameters` | Object | No | Additional parameters to send with requests |
| `max` | Number | Yes | Maximum number of columns |

## Template Slots

The component uses template slots for flexible table structure:

- **`#table-headers`**: Define your table headers using `<th>` elements
- **`#column-{index}`**: Custom content for specific columns (0-indexed)
- **`rowData`**: Access row data by index in column templates

## Available Methods

The component exposes useful methods through the ref:

```javascript
const table = ref();

// Reload the table data
const reload = () => {
  if (table.value) {
    table.value.reload();
  }
};

```

## Available DataTables.net Features

This wrapper supports all DataTables.net features including:

- **Core Features**: Processing, paging, ordering, searching, info
- **Extensions**: Buttons, ColReorder, RowReorder, FixedColumns, FixedHeader
- **Responsive**: Mobile-friendly responsive tables
- **Internationalization**: Multi-language support
- **Export**: Copy, CSV, Excel, PDF, Print
- **Selection**: Row and column selection
- **Keyboard Navigation**: Keyboard shortcuts and navigation

## Styling

The component automatically includes DataTables.net CSS. You can customize the appearance by adding your own CSS:

```css
/* Custom styling */
.display {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.display thead th {
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
}

.display tbody tr:hover {
  background-color: #f5f5f5;
}
```

## Dependencies

This package includes all necessary DataTables.net dependencies:
- `datatables.net-vue3` - Core DataTables.net for Vue 3
- `datatables.net-dt` - DataTables.net styling
- `datatables.net-buttons-dt` - Export buttons
- `datatables.net-fixedcolumns-dt` - Fixed columns
- `datatables.net-fixedheader-dt` - Fixed headers
- `datatables.net-responsive-dt` - Responsive tables
- `datatables.net-select-dt` - Row/column selection

## License

This project is licensed under the MIT License.

## DataTables.net Documentation

For more advanced features and configuration options, visit the official DataTables.net documentation:
- [DataTables.net Documentation](https://datatables.net/manual/)
- [DataTables.net Examples](https://datatables.net/examples/)
- [DataTables.net API Reference](https://datatables.net/reference/)