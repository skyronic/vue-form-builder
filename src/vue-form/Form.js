import Vue from 'vue';



export default Vue.extend ({
  props: ['fields', 'id', 'options', 'model'],
  render (h) {
    var titleNode = null;
    var self = this;
    if(this.options.name) {
      titleNode = <h3>{this.options.name}</h3>;
    };
    var model = this.model;
    var submitButtonClicked = function () {
      self.$emit('submit', {});
    };
    var submitButton = <button on-click={submitButtonClicked}>Submit</button>

    var formItems = this.fields.map((field) => {
      var setValue = null;
      if (model.hasOwnProperty (field.key)) {
        setValue = model[field.key];
      }

      var clickHandler = (e) => {
        // console.log ("The field with key ", field.key, " was updated")
        // console.log (e.target.value)
        self.model[field.key] = e.target.value
      };

      return (<div class="fieldItem">
        <label for={field.key}>{field.label}</label>
        <input type="text" name={field.key} id={field.key} value={setValue} on-keyup={clickHandler} />
      </div>);
    })

    return (<div>
      {titleNode}
      {formItems}
        {submitButton}
    </div>)
  }
})