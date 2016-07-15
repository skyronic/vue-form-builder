# vue-form-builder
## Form builder library

### Features

* Build a full form using a JavaScript object. No fiddling with HTML
* Extremely flexible, add new components or modify existing ones with ease
* Pluggable validation. Use joi validation library or write a wrapper for your own.

### TODO:

- [ ] Extract proof of concept into re-usable library
- [ ] Support multiple templates (bootstrap/foundation/etc)

* Validaton
** async validation
** realtime validation
** validation on submit

### Usage

```
npm install --save vue-form-builder
```

In your JS:

```js
import { VueForm } from 'vue-form-builder';

new Vue({
  components: {
    VueForm
  },
  data: {
      myFormOptions: {
        name: "My Form",
        template: "bootstrap3"
      },
      myModel: {
        name: "Bobby Tables",
        address: ""
      },
      myFormFields: [
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
      :fields="myFormFields"
      :options="myFormOptions"
      :model.sync="myModel"
      @submit="onFormSubmitted"
      id="myCoolForm" />
```

### Custom components

You can easily add a custom component like this:

```
// Import the form registry
import FormRegistry from 'vue-form-builder/Registry';

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
    myFormFields: [
      {key: 'name', label: "Name", type: "text"},
      {key: 'address', label: "Address", type: "textarea"},
      {key: 'subscribed', label: "Subscribed", type: "switch"},
    ]
```

## Validation

The library doesn't do direct validation but rather uses a pluggable external library to handle validation.

### Validation on submit

### Real-time validation

### Async validation