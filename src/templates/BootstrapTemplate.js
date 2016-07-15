var bootstrap  = {
  renderForm (h, formState, config, items) {
    return (<div>
      <form class="form form-horizontal">
      {items.map((item) => {
        return item;
      })}
      </form>
    </div>);
  },
  helpers: {
    makeFormGroup (h, field, core, validation) {
      var className = ["form-group"];
      var helpNode = null;
      if (validation) {
        className.push ('has-error');
        helpNode = <span class="help-block">{validation[0]}</span>;
      }

      return (<div class={className}>
        <label for={field.key} class="col-sm-2 control-label">{field.label}</label>
          <div class="col-sm-10">
            {core}
            {helpNode}
          </div>
        </div>)
    }
  },
  fields: {
    text (h, field, value, onUpdate, validation) {
      var handleChange = (e) => {
        onUpdate (e.target.value);
      };
      var inputCore = <input type="text" name={field.key}
        id={field.key} value={value}
        class='form-control'
        on-keyup={handleChange} />;
      return bootstrap.helpers.makeFormGroup (h, field, inputCore, validation);
    },
    textarea (h, field, value, onUpdate, validation) {
      var handleChange = (e) => {
        onUpdate (e.target.value);
      };
      var inputCore = <textarea name={field.key} id={field.key}
        class='form-control'
        on-keyup={handleChange}>{value}</textarea>;
      return bootstrap.helpers.makeFormGroup (h, field, inputCore, validation);
    },
    number (h, field, value, onUpdate) {

    }
  },
  buttons: {
    submit (h, onClick) {
      return <button on-click={onClick}>Submit</button>;
    }
  },
  elements: {
    title (h, name) {
      return <h3>{name}</h3>
    }
  }

}

export default bootstrap;
