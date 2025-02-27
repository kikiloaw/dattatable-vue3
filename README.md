# vue-backend-select

**fahad-select** is a Vue.js component built using `vue-multiselect`, designed for seamless integration with backend systems such as Laravel. It functions as a dynamic, API-driven select dropdown similar to `Select2`, but customized for Vue applications.

## Features

- **Vue.js based**: Built with Vue.js for easy integration with Vue applications.
- **API-Driven**: Fetch data asynchronously from a backend (e.g., Laravel) using API calls.
- **Customizable**: Supports dynamic placeholders, labels, and multiple selection.
- **Debounced Search**: Built-in debounced search to optimize API requests.
- **Loading State**: Displays a loading spinner while fetching data.
- **Supports Multiple Selection**: Can be configured for single or multiple selections.
- **Event Handlers**: Includes customizable event handlers for better control over selections.
- **Tagging**: Supports adding custom tags if the option doesn't exist.

## Installation

To install the package, use the following command:

```bash
npm install fahad-select
```

## Basic Usage

Here is the new basic example of how to use `fahad-select` in your Vue component:
added line on how to import the fahad-select properly

```vue
<template>
 <FahadSelect
 v-model="form.member_id"
 @triggerChange="callMe"
 searchRoute="list.dropdownSearch.address"
 :param="{municipality: form.municipality, brgy: form.brgy}"  // you can pass directly the param
 :param="optionalParams"  // you can pass also the ref. just choose one of the param you prefered
 :multiple="true"  //remove this line for single selection
 :placeholder="''"
 :label="'first_name'" /> //if you are using different key in the back end. Example: name 
</template>

<script setup>

import FahadSelect from 'fahad-select';
import 'fahad-select/dist/style.css';


const callMe = selectedData => {

}
const selectedOption = ref(null);
const optionalParams = { key: 'value' };  // Optional parameters to send along with the API request
</script>
```

### Laravel Route

```php
Route::get('/search-resident/with-address', [ResidentController::class, 'dropdownSearch_address'])->name('list.dropdownSearch.address');
```

### Laravel Controller

```php
use App\Models\Resident;
use Illuminate\Http\Request;

public function dropdownSearch_address(Request $request){
    //access all the data from param in the fron end using the request.
    $param = $request->all(); // this will get all the params you sent fron the front end
    //if using label match the labelname and the text for option

    $query = null;
    if(!empty($request->query_)){
       // search sample for a model for laravel
       // you make a all of your query here. anything you like
       $query = Model::where('first_name','like','%'.$request->query_.'%')->limit(30);
    } else {
      //you can send initial 30 results without serching.
      $query = Model::limit(30);
    }

    $mappedData = $query->get()->map(function ($d) {
        return [
            'id' => $d->id,
            'first_name' => ucfirst($d->last_name).', '.ucfirst($d->first_name),
        ];
    });

    //if not using label match the labelname. just use name as key
    $mappedData = $query->get()->map(function ($d) {
        return [
            'id' => $d->id,
            'name' => ucfirst($d->last_name).', '.ucfirst($d->first_name),
        ];
    });

    //you can add html inside the name. even image. to have its icon. and it will work.
    $mappedData = $query->get()->map(function ($d) {
        return [
            'id' => $d->id,
            'name' => '<strong>'.ucfirst($d->last_name).'</strong>, '.ucfirst($d->first_name),
        ];
    });

     //you can add html inside the name. even image. to have its icon. and it will work.
    $mappedData = $query->get()->map(function ($d) {
        return [
            'id' => $d->id,
            'name' => '<img src="/icon.png" width="15" height="15" />'.ucfirst($d->last_name).', '.ucfirst($d->first_name),
        ];
    });


    //dont forget to return the maps data  inside the results.
    return json_encode([
        'results' => $mappedData,
    ]);
}
```

## License

This project is licensed under the MIT License.

---

Feel free to customize this `README.md` as needed!
