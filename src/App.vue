<template>
  <div id="app">
    <h2>Form:</h2>
    <vue-form 
      :fields="myFormFields"
      :options="myFormOptions"
      :model.sync="myModel"
      @submit="onFormSubmitted"
      id="myCoolForm" />
      <h2>Model:</h2>
      <pre>
{{ myModel }}
      </pre>
      <h2>Fields</h2>
      <pre>
{{ myFormFields }}
      </pre>

    </div>
</template>

<script>
import VueForm from './vue-form/Form';

export default {
  components: {
    VueForm
  },
  methods: {
    onFormSubmitted () {
      alert ("Form is submitted: " + JSON.stringify(this.myModel))
    }
  },
  data () {
    return {
      myFormOptions: {
        name: "My Form"
      },
      myModel: {
        name: "Anirudh",
        address: ""
      },
      myFormFields: [
        {key: 'name', label: "Name", type: "text"},
        {key: 'address', label: "Address", type: "text"},
      ]
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
