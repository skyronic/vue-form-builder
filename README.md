# vue-form-builder
## Form builder library using VueJS 2 Virtual Dom

### Features

This is still currently in development as an early build.

* Build a full form using a JavaScript object. No fiddling with HTML
* Supports multiple output templates like bootstrap, 
* Extremely flexible, add new components or modify existing ones with ease
* Pluggable validation. The [validate.js](https://validatejs.org/) library is supported by default.


## Usage

```
npm install --save vue-form-builder
```

In your main file

```js
import VueFormBuilder from 'vue-form-builder';
import Vue from 'vue';

Vue.use (VueFormBuilder);

```

In your JS:

```js

new Vue({
  data: {
      myFormOptions: {
        name: "My Form",
        template: "bootstrap3"
      },
      myModel: {
        name: "Bobby Tables",
        address: ""
      },
      myFormSchema: [
        {key: 'name', label: "Name", type: "text"},
        {key: 'address', label: "Address", type: "textarea"},
      ]
    }
  }
})
```

In your template:

```
    <vue-form 
      :schema="myFormSchema"
      :options="myFormOptions"
      :model.sync="myModel"
      @submit="onFormSubmitted"
      id="myCoolForm" />
```

### Custom components

You can easily add a custom component like this:

```
// Import the form registry
import { FormRegistry } from 'vue-form-builder';

// Register the component
FormRegistry.registerCustomComponent('bootstrap', // template name
  'switch', // key
  function (h, field, value, onUpdate) {
    var changeValue = () => {
      // Set the new value to the reverse of current value
      onUpdate (!value);
    };

    return <div>
      {field.label}: <a href="#" on-click={changeValue}>{value ? "On" : "Off"}</a>
    </div>;
  });
```

In your schema:

```
    myFormSchema: [
      {key: 'name', label: "Name", type: "text"},
      {key: 'address', label: "Address", type: "textarea"},
      {key: 'subscribed', label: "Subscribed", type: "switch"},
    ]
```

## Validation

Add a validation attribute to the 

```
  <vue-form 
    :schema="myFormSchema"
    :options="myFormOptions"
    :model.sync="myModel"
    @submit="onFormSubmitted"
    :validation="myValidation"
    id="myCoolForm" />
```

In your data, you can set the `constraints` object. The keys should match the ones in your model/schema. This is powered by validate.js and you can [read the documentation of the constraints](https://validatejs.org/#constraints) for more advanced validiation.

```
  data () {
    return {
      /* ... schema and model omitted ... */

      myValidation: {
        constraints: {
          name: {
            presence: true,
            length: {minimum: 3}
          },
          address: {
            presence: true,
            length: {maximum: 5}
          },
          subscribed: {}
        }
      },
    }
```