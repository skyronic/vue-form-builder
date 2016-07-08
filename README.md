# vue-form-builder
## Form builder library

### Progress:

- [ ] Extract proof of concept into re-usable library

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
        name: "My Form"
      },
      myModel: {
        name: "Bobby Tables",
        address: ""
      },
      myFormFields: [
        {key: 'name', label: "Name", type: "text"},
        {key: 'address', label: "Address", type: "text"},
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