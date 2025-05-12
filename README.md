# vue-backend-select

**fahad-select** is a Vue.js component built using `vue-multiselect`, designed for seamless integration with backend systems such as Laravel. It functions as a dynamic, API-driven select dropdown similar to `Select2`, but customized for Vue applications.


## Important!
this only works on laravel inertia vue. will update later for vue only components
just contact for more question


## Big Update Fix
importing to vue has an error
now you can simply
```bash
    import FahadSelect from 'fahad-select';
    import 'fahad-select/dist/style.css';

    //added an isntruction for relaoding select
    formref.value.reload()
````

```bash
   now you can assign pre selected value using like this for single mode
   form.value.member_id = {
     id: 1,
     label: 'label'
   }
   
  for multiple mode
  form.value.member_id.push({
     id: 1,
     label: 'label'
  })
  form.value.member_id.push({
     id: 2,
     label: 'label 2'
  })
   
````



## Features
- **Vue.js based**: Laravel Inertia.
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
use the latest version always
npm install fahad-select@latest
```

## Basic Usage

Here is the new basic example of how to use `fahad-select` in your Vue component:
added line on how to import the fahad-select properly


## latest fix
the option and selected option gets the original text format in backend
the text now don't wrap so that the selected long text won't destroy your input filed size
also the multiple selected fix

## latest fix 4/17/2025
you can now use group data. using this format and enable :multiple="true" so you can select a single group. no need to select individually
group data works even if :multiple="false" is disabled, but you cannot select by group only individual.
not only you can use the label and id. but you can add more data to the options. and try to  console.log the selected option. you can see the others data if you console log.
so you can that to other means

## latest fix 5/12/2025
fix assigning data after calling reload(). the problem is that when reload is not done immediately but the assign the data is done already, data is being cleared. for short the assigning data is being done before reload


```php
return = [
    [
        'group' => 'Sedans',
        'data' => [
            [
                'id' => rand(1000, 9999),
                'label' => 'Toyota Camry',
                'model' => 'Camry',
                'make' => 'Toyota',
                'year' => 2023,
                'color' => 'Silver',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Honda Civic',
                'model' => 'Civic',
                'make' => 'Honda',
                'year' => 2024,
                'color' => 'Blue',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Nissan Sentra',
                'model' => 'Sentra',
                'make' => 'Nissan',
                'year' => 2023,
                'color' => 'White',
            ],
        ],
    ],
    [
        'group' => 'SUVs',
        'data' => [
            [
                'id' => rand(1000, 9999),
                'label' => 'Ford Explorer',
                'model' => 'Explorer',
                'make' => 'Ford',
                'year' => 2022,
                'color' => 'Black',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Toyota RAV4',
                'model' => 'RAV4',
                'make' => 'Toyota',
                'year' => 2023,
                'color' => 'Red',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Honda CR-V',
                'model' => 'CR-V',
                'make' => 'Honda',
                'year' => 2024,
                'color' => 'Gray',
            ],
        ],
    ],
    [
        'group' => 'Sports Cars',
        'data' => [
            [
                'id' => rand(1000, 9999),
                'label' => 'Chevrolet Corvette',
                'model' => 'Corvette',
                'make' => 'Chevrolet',
                'year' => 2025,
                'color' => 'Yellow',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Porsche 911',
                'model' => '911',
                'make' => 'Porsche',
                'year' => 2024,
                'color' => 'Silver',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'BMW Z4',
                'model' => 'Z4',
                'make' => 'BMW',
                'year' => 2023,
                'color' => 'Blue',
            ],
        ],
    ],
    [
        'group' => 'Trucks',
        'data' => [
            [
                'id' => rand(1000, 9999),
                'label' => 'Ford F-150',
                'model' => 'F-150',
                'make' => 'Ford',
                'year' => 2023,
                'color' => 'White',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Toyota Tacoma',
                'model' => 'Tacoma',
                'make' => 'Toyota',
                'year' => 2024,
                'color' => 'Red',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Chevrolet Silverado',
                'model' => 'Silverado',
                'make' => 'Chevrolet',
                'year' => 2022,
                'color' => 'Black',
            ],
        ],
    ],
    [
        'group' => 'Electric Vehicles',
        'data' => [
            [
                'id' => rand(1000, 9999),
                'label' => 'Tesla Model 3',
                'model' => 'Model 3',
                'make' => 'Tesla',
                'year' => 2024,
                'color' => 'Pearl White',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Hyundai IONIQ 5',
                'model' => 'IONIQ 5',
                'make' => 'Hyundai',
                'year' => 2023,
                'color' => 'Cyber Gray',
            ],
            [
                'id' => rand(1000, 9999),
                'label' => 'Ford Mustang Mach-E',
                'model' => 'Mustang Mach-E',
                'make' => 'Ford',
                'year' => 2024,
                'color' => 'Grabber Blue',
            ],
        ],
    ],
];

```


```vue

<template>
    <FahadSelect
        ref="formref"
        v-model="form.member_id"
        @triggerChange="callMe"
        searchRoute="list.dropdownSearch.address"
        :param="{municipality: form.municipality, brgy: form.brgy}"
        // you can pass directly the param
        :param="optionalParams" // you can pass also the ref. just choose one of the param you prefered
        :multiple="true" //remove this line for single selection
        :placeholder="''"
        :label="'first_name'"  // if your back end has label key. you can remove this line, use only when you have other names
    /> //if you are using different key in the back end. Example: name
</template>

<script setup>

    import FahadSelect from 'fahad-select';
    import 'fahad-select/dist/style.css';

    const formref = ref(null)
    const callMe = selectedData => {

    }
    const selectedOption = ref(null);
    const optionalParams = {key: 'value'};  // Optional parameters to send along with the API request

    //reload the select normally used for cascaded select when you want to change the option of the other select passing the paramaters
    const reloadSelect = () => {
        formref.value.reload()
    }

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

