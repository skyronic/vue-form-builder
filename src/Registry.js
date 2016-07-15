var templates = {};
var customComponents = {};
var validators = {};

export default {
  registerTemplate (key, template) {
    templates[key] = template;
    customComponents[key] = {};
  },
  registerCustomComponent (template, key, func) {
    customComponents[template][key] = func;
  },
  getComponent (templateKey, componentKey) {
    var template = templates[templateKey];
    var templateCustom = customComponents[templateKey];

    if (templateCustom.hasOwnProperty (componentKey)) {
      return templateCustom[componentKey];
    }
    else {
      return template.fields[componentKey];
    }
  },
  getTemplate (key) {
    return templates[key];
  },
  registerValidationProvider (validatorKey, validator) {
    validators[validatorKey] = validator;
  },
  getValidator (validatorKey) {
    return validators[validatorKey];
  }
}
