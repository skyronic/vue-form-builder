import Bootstrap from '../../../../src/templates/BootstrapTemplate'

export default function (h, field, value, onUpdate) {
  var changeValue = () => {
    // Set the new value to the reverse of current value
    onUpdate (!value);
  };

  return Bootstrap.helpers.makeFormGroup(h, field,
    <a href="#" on-click={changeValue}>{value ? "On" : "Off"}</a>);
}
