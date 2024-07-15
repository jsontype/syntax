<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Validation
            </h4>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <form action="#">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input id="validationDefault01" type="text" class="form-control" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input id="validationDefault02" type="text" class="form-control" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefaultUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span id="inputGroupPrepend2" class="input-group-text">@</span>
                    </div>
                    <input id="validationDefaultUsername" type="text" class="form-control" aria-describedby="inputGroupPrepend2" required>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">City</label>
                  <input id="validationDefault03" type="text" class="form-control" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault04">State</label>
                  <select id="validationDefault04" class="form-control" required>
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault05">Zip</label>
                  <input id="validationDefault05" type="text" class="form-control" required>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="invalidCheck2" class="form-check-input" type="checkbox" value="" required>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Custom Validation
            </h4>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <form class="needs-validation" novalidate action="#">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input id="validationCustom01" type="text" class="form-control" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustom02">Last name</label>
                  <input id="validationCustom02" type="text" class="form-control" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustomUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span id="inputGroupPrepend" class="input-group-text">@</span>
                    </div>
                    <input id="validationCustomUsername" type="text" class="form-control" aria-describedby="inputGroupPrepend" required>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustom03">City</label>
                  <input id="validationCustom03" type="text" class="form-control" required>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustom04">State</label>
                  <select id="validationCustom04" class="form-control" required>
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustom05">Zip</label>
                  <input id="validationCustom05" type="text" class="form-control" required>
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="invalidCheck" class="form-check-input" type="checkbox" value="" required>
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Supported elements
            </h4>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <form class="was-validated" action="#">
              <div class="mb-3">
                <label for="validationTextarea">Textarea</label>
                <textarea id="validationTextarea" class="form-control is-invalid" placeholder="Required example textarea" required />
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input id="customControlValidation1" type="checkbox" class="custom-control-input" required>
                <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
                <div class="invalid-feedback">
                  Example invalid feedback text
                </div>
              </div>
              <div class="custom-control custom-radio">
                <input id="customControlValidation2" type="radio" class="custom-control-input" name="radio-stacked" required>
                <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
              </div>
              <div class="custom-control custom-radio mb-3">
                <input id="customControlValidation3" type="radio" class="custom-control-input" name="radio-stacked" required>
                <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
                <div class="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
              <div class="form-group">
                <select class="custom-select" required>
                  <option value="">
                    Open this select menu
                  </option>
                  <option value="1">
                    One
                  </option>
                  <option value="2">
                    Two
                  </option>
                  <option value="3">
                    Three
                  </option>
                </select>
                <div class="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>
              <div class="custom-file">
                <input id="validatedCustomFile" type="file" class="custom-file-input" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </form>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tooltip
            </h4>
          </template>
          <template v-slot:body>
            <p />
            <form class="needs-validation" novalidate action="#">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip01">First name</label>
                  <input id="validationTooltip01" type="text" class="form-control" value="Mark" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip02">Last name</label>
                  <input id="validationTooltip02" type="text" class="form-control" value="Jhon" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltipUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span id="validationTooltipUsernamePrepend" class="input-group-text">@</span>
                    </div>
                    <input id="validationTooltipUsername" type="text" class="form-control" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                      Please choose a unique and valid username.
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip03">City</label>
                  <input id="validationTooltip03" type="text" class="form-control" required>
                  <div class="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip04">State</label>
                  <select id="validationTooltip04" class="form-control" required>
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                  <div class="invalid-tooltip">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip05">Zip</label>
                  <input id="validationTooltip05" type="text" class="form-control" required>
                  <div class="invalid-tooltip">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { core } from '../../../assets/app/app'

export default {
  layout: 'BackendLayout',
  name: 'FormValidates',
  mounted () {
    core.index()
  }
}
</script>
