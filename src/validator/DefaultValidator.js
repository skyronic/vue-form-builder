import validate from 'validate.js';
var Validator = {
  validate (schema, values, options) {
    return validate (values, schema);
  }
};

export default Validator;
