<template>
  <div class="bd-example">
    <form>
      <fieldset aria-label="Disabled fieldset example " disabled>
        <div class="mb-3">
          <b-form-group label="Disabled input" label-for="disabledTextInput">
            <b-form-input id="disabledTextInput" placeholder="Disabled input" disabled></b-form-input>
          </b-form-group>
        </div>
        <div class="mb-3">
          <label for="disabledSelect" class="form-label">Disabled select menu</label>
          <select id="disabledSelect" class="form-select">
            <option>Disabled select</option>
          </select>
        </div>
        <div class="mb-3">
          <b-form-checkbox disabled>Can't check this</b-form-checkbox>
        </div>
        <fieldset class="mb-3">
          <legend>Disabled radios buttons</legend>
          <b-form-radio name="radios" value="A" disabled>Default radio </b-form-radio>
          <b-form-radio name="radios" value="B" disabled>Another radio </b-form-radio>
        </fieldset>
        <div class="mb-3">
          <label class="form-label" for="disabledCustomFile">Upload</label>
          <input id="disabledCustomFile" type="file" class="form-control" disabled />
        </div>
        <div class="mb-3 form-check form-switch">
          <input id="disabledSwitchCheckChecked" class="form-check-input" type="checkbox" checked disabled />
          <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
        </div>
        <div class="mb-3">
          <label for="disabledRange" class="form-label">Disabled range</label>
          <b-form-input id="range6" type="range" min="0" max="5" disabled></b-form-input>
        </div>
        <b-button variant="primary">Submit</b-button>
      </fieldset>
    </form>
  </div>
</template>
