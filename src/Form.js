import BootStrapTemplate from './templates/BootstrapTemplate';
import DefaultValidator from './validator/DefaultValidator';
import Registry from './Registry';

Registry.registerTemplate ('bootstrap', BootStrapTemplate);
Registry.registerValidationProvider ('default', DefaultValidator);

var makeFormComponent = function (Vue) {
  return Vue.extend ({
    props: ['fields', 'id', 'options', 'model', 'validation'],
    name: "Form",
    data () {
      return {
        validationResults: null
      }
    },
    methods: {
      runValidation () {
        if (!this.validation) {
          return null;
        }
        var values = this.model;
        var constraints = this.validation.constraints;
        var validator = Registry.getValidator ('default');

        return validator.validate (constraints, values)
      },
    },
    render (h) {
      var titleNode = null;
      var self = this;
      var templateName = this.options.template;
      var template = Registry.getTemplate(templateName);

      if(this.options.name) {
        titleNode = template.elements.title (h, this.options.name);
      }

      var model = this.model;
      var submitButtonClicked = function () {
        self.$emit('submit', {});
      };
      var submitButton = template.buttons.submit (h, submitButtonClicked)
      var validationResults = this.runValidation ();

      var formItems = this.fields.map((field) => {
        var setValue = null;
        if (model.hasOwnProperty (field.key)) {
          setValue = model[field.key];
        }

        var updateValue = (newValue) => {
          self.model[field.key] = newValue;
        }

        var fieldRenderer = Registry.getComponent (templateName, field.type)
        var validation = null;
        if (validationResults && validationResults.hasOwnProperty(field.key)) {
          validation = validationResults[field.key];
        }
        return fieldRenderer (h, field, setValue, updateValue, validation)
      })


      var formState = {
      };

      return template.renderForm (h, formState, this.options, [
        titleNode,
        formItems,
        submitButton
        ]);
    }
  })
};

export default makeFormComponent;
