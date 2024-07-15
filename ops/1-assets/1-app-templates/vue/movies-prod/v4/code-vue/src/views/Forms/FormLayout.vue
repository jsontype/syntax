<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Form</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-1>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-1">
                    <code>
 &lt;b-form&gt;
  &lt;b-form-group label="Email address:" label-for="email1"&gt;
    &lt;b-form-input id="email1" type="email"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Password:" label-for="pwd"&gt;
    &lt;b-form-input id="pwd" type="password" &gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-checkbox class="mb-3"&gt;
    Remember me
  &lt;/b-form-checkbox&gt;
  &lt;b-button type="submit" variant="primary"&gt;Submit&lt;/b-button&gt;
  &lt;b-button type="submit" variant="none" class="bg-danger ml-3"&gt;Cancel&lt;/b-button&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-form-group label="Email address:" label-for="email1">
                <b-form-input id="email1" type="email"></b-form-input>
              </b-form-group>
              <b-form-group label="Password:" label-for="pwd">
                <b-form-input id="pwd" type="password" ></b-form-input>
              </b-form-group>
              <b-form-checkbox class="mb-3">
                Remember me
              </b-form-checkbox>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="submit" variant="none" class="bg-danger ml-3">Cancel</b-button>
            </b-form>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Form Grid</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-2>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-2">
                    <code>
&lt;b-form&gt;
  &lt;b-row&gt;
    &lt;b-col&gt;
      &lt;b-form-input type="text" placeholder="First Name"&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
    &lt;b-col&gt;
      &lt;b-form-input type="text" placeholder="Last Name"&gt;&lt;/b-form-input&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-row>
                <b-col>
                  <b-form-input type="text" placeholder="First Name"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input type="text" placeholder="Last Name"></b-form-input>
                </b-col>
              </b-row>
            </b-form>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Input</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-3>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-3">
                    <code>
&lt;b-form&gt;
  &lt;b-form-group label="Input Text " label-for="exampleInputText1"&gt;
    &lt;b-form-input id="exampleInputText1" type="text" placeholder="Enter Name" value="Mark Jhon"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Email Input " label-for="exampleInputText3"&gt;
    &lt;b-form-input id="exampleInputText3" type="email" value="markjhon@gmail.com" placeholder="Enter Email"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Url Input" label-for="exampleInputurl"&gt;
    &lt;b-form-input id="exampleInputurl" type="url" value="https://getbootstrap.com" placeholder="Enter Url"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Telephone Input" label-for="exampleInputphone"&gt;
    &lt;b-form-input id="exampleInputphone" type="tel" value="1-(555)-555-5555"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Number Input" label-for="exampleInputNumber1"&gt;
    &lt;b-form-input id="exampleInputNumber1" type="number" value="2356"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Password Input" label-for="exampleInputPassword3"&gt;
    &lt;b-form-input id="exampleInputPassword3" type="password" value="markjhon123" placeholder="Enter Password" &gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Date Input" label-for="exampleInputdate"&gt;
    &lt;flat-pickr :config="dateInput" value="2020-12-18" id="exampleInputdate" class="form-control date-input basicFlatpickr" /&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Week Input" label-for="exampleInputweek"&gt;
    &lt;flat-pickr :config="weekInput" value="2020-01-01" id="exampleInputweek" class="form-control date-input basicFlatpickr" /&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Time Input" label-for="exampleInputtime"&gt;
    &lt;flat-pickr :config="timeInput" value="11-45" id="exampleInputtime" class="form-control date-input basicFlatpickr" /&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Date and Time Input" label-for="exampleInputdatetime"&gt;
    &lt;flat-pickr :config="dateTimeInput" value="2019-12-19T13:45:00" id="exampleInputdatetime" class="form-control date-input basicFlatpickr" /&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Example textarea" label-for="exampleFormControlTextarea1"&gt;
    &lt;b-form-textarea id="exampleFormControlTextarea1" rows="5"&gt;&lt;/b-form-textarea&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-checkbox class="mb-3"&gt;
    Remember me
  &lt;/b-form-checkbox&gt;
  &lt;b-button type="submit" variant="primary"&gt;Submit&lt;/b-button&gt;
  &lt;b-button type="submit" variant="none" class="bg-danger ml-3"&gt;Cancel&lt;/b-button&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-form-group label="Input Text " label-for="exampleInputText1">
                <b-form-input id="exampleInputText1" type="text" placeholder="Enter Name" value="Mark Jhon"></b-form-input>
              </b-form-group>
              <b-form-group label="Email Input " label-for="exampleInputText3">
                <b-form-input id="exampleInputText3" type="email" value="markjhon@gmail.com" placeholder="Enter Email"></b-form-input>
              </b-form-group>
              <b-form-group label="Url Input" label-for="exampleInputurl">
                <b-form-input id="exampleInputurl" type="url" value="https://getbootstrap.com" placeholder="Enter Url"></b-form-input>
              </b-form-group>
              <b-form-group label="Telephone Input" label-for="exampleInputphone">
                <b-form-input id="exampleInputphone" type="tel" value="1-(555)-555-5555"></b-form-input>
              </b-form-group>
              <b-form-group label="Number Input" label-for="exampleInputNumber1">
                <b-form-input id="exampleInputNumber1" type="number" value="2356"></b-form-input>
              </b-form-group>
              <b-form-group label="Password Input" label-for="exampleInputPassword3">
                <b-form-input id="exampleInputPassword3" type="password" value="markjhon123" placeholder="Enter Password" ></b-form-input>
              </b-form-group>
              <b-form-group label="Date Input" label-for="exampleInputdate">
                <flat-pickr :config="dateInput" value="2020-12-18" id="exampleInputdate" class="form-control date-input basicFlatpickr" />
              </b-form-group>
              <b-form-group label="Week Input" label-for="exampleInputweek">
                <flat-pickr :config="weekInput" value="2020-01-01" id="exampleInputweek" class="form-control date-input basicFlatpickr" />
              </b-form-group>
              <b-form-group label="Time Input" label-for="exampleInputtime">
                <flat-pickr :config="timeInput" value="11-45" id="exampleInputtime" class="form-control date-input basicFlatpickr" />
              </b-form-group>
              <b-form-group label="Date and Time Input" label-for="exampleInputdatetime">
                <flat-pickr :config="dateTimeInput" value="2019-12-19T13:45:00" id="exampleInputdatetime" class="form-control date-input basicFlatpickr" />
              </b-form-group>
              <b-form-group label="Example textarea" label-for="exampleFormControlTextarea1">
                <b-form-textarea id="exampleFormControlTextarea1" rows="5"></b-form-textarea>
              </b-form-group>
              <b-form-checkbox class="mb-3">
                Remember me
              </b-form-checkbox>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="submit" variant="none" class="bg-danger ml-3">Cancel</b-button>
            </b-form>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Input Size</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-4>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-4">
                    <code>
&lt;b-form&gt;
  &lt;b-form-group label="Small" label-for="colFormLabelSm"&gt;
    &lt;b-form-input type="email" size="sm" id="colFormLabelSm" placeholder="form-control-sm"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Default" label-for="colFormLabel" class="mb-0"&gt;
    &lt;b-form-input type="email" id="colFormLabel" placeholder="form-control"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group label="Large" label-for="colFormLabelLg"&gt;
    &lt;b-form-input type="email" size="lg" id="colFormLabelLg" placeholder="form-control-lg"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-form-group label="Small" label-for="colFormLabelSm">
                <b-form-input type="email" size="sm" id="colFormLabelSm" placeholder="form-control-sm"></b-form-input>
              </b-form-group>
              <b-form-group label="Default" label-for="colFormLabel" class="mb-0">
                <b-form-input type="email" id="colFormLabel" placeholder="form-control"></b-form-input>
              </b-form-group>
              <b-form-group label="Large" label-for="colFormLabelLg">
                <b-form-input type="email" size="lg" id="colFormLabelLg" placeholder="form-control-lg"></b-form-input>
              </b-form-group>
            </b-form>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Horizontal Form</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-5>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-5">
                    <code>
&lt;b-form&gt;
  &lt;b-form-group
    class="row"
    label-cols-sm="2"
    label="Email:"
    label-for="email"
  &gt;
    &lt;b-form-input id="email" placeholder="Enter Your email"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    class="row"
    label-cols-sm="2"
    label="Password:"
    label-for="pwd1"
  &gt;
    &lt;b-form-input id="pwd1" placeholder="Enter Your password"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-checkbox&gt;Remember me&lt;/b-form-checkbox&gt;
  &lt;/b-form-group&gt;
  &lt;b-button type="submit" variant="primary"&gt;Submit&lt;/b-button&gt;
  &lt;b-button type="submit" variant="none" class="bg-danger ml-3"&gt;Cancel&lt;/b-button&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-form-group
                class="row"
                label-cols-sm="2"
                label="Email:"
                label-for="email"
              >
                <b-form-input id="email" placeholder="Enter Your email"></b-form-input>
              </b-form-group>
              <b-form-group
                class="row"
                label-cols-sm="2"
                label="Password:"
                label-for="pwd1"
              >
                <b-form-input id="pwd1" placeholder="Enter Your password"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="submit" variant="none" class="bg-danger ml-3">Cancel</b-button>
            </b-form>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Form row</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-6>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-6">
                    <code>
&lt;b-form-row&gt;
  &lt;b-col&gt;
    &lt;b-form-input type="text" placeholder="First Name"&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
  &lt;b-col&gt;
    &lt;b-form-input type="text" placeholder="Last Name"&gt;&lt;/b-form-input&gt;
  &lt;/b-col&gt;
&lt;/b-form-row&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form-row>
              <b-col>
                <b-form-input type="text" placeholder="First Name"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input type="text" placeholder="Last Name"></b-form-input>
              </b-col>
            </b-form-row>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Input</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-7>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-7" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-7">
                    <code>
&lt;b-form&gt;
  &lt;b-form-group
    label-for="exampleInputDisabled1"
    label="Disabled Input"&gt;
    &lt;b-form-input type="text" id="exampleInputDisabled1" value="Mark Jhon" disabled&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleInputPlaceholder"
    label="Placeholder"&gt;
    &lt;b-form-input type="text" id="exampleInputPlaceholder" placeholder="This is Placeholder"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleInputReadonly"
    label="Readonly"&gt;
    &lt;b-form-input type="text" id="exampleInputReadonly" value="Mark Jhon" readonly&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleInputcolor"
    label="Input color"&gt;
    &lt;b-form-input type="color" id="exampleInputcolor" value="#e20e02"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleFormControlSelect1"
    label="Select Input"&gt;
    &lt;b-form-select plain v-model="selected" :options="options1" id="exampleFormControlSelect1"&gt;
      &lt;template v-slot:first&gt;
        &lt;b-form-select-option :value="null" disabled&gt;Select your age&lt;/b-form-select-option&gt;
      &lt;/template&gt;
    &lt;/b-form-select&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleFormControlSelect2"
    label="Example multiple select"&gt;
    &lt;b-form-select plain v-model="selected" multiple :options="options2" id="exampleFormControlSelect2"&gt;
    &lt;/b-form-select&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="customRange1"
    label="Range Input"&gt;
    &lt;b-form-input id="customRange1" type="range"&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-checkbox&gt;Default checkbox&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model="checked1"&gt;Checked&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox disabled&gt;Disabled checkbox&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model="checked2" disabled &gt;Disabled checkbox&lt;/b-form-checkbox&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-checkbox inline&gt;Default checkbox&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model="checked3" inline&gt;Checked&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox disabled inline&gt;Disabled checkbox&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model="checked2" disabled inline&gt;Disabled checkbox&lt;/b-form-checkbox&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-radio v-model="radio1" name="customRadio"&gt;Default radio&lt;/b-form-radio&gt;
    &lt;b-form-radio v-model="radio1" name="customRadio"&gt;Default radio&lt;/b-form-radio&gt;
    &lt;b-form-radio v-model="radio3" name="customRadio3"&gt;Selected radio&lt;/b-form-radio&gt;
    &lt;b-form-radio disabled name="customRadio4"&gt;disabled radio&lt;/b-form-radio&gt;
    &lt;b-form-radio disabled v-model="radio5" name="customRadio5"&gt;Selected and  disabled radio&lt;/b-form-radio&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-radio inline v-model="radio2" name="customRadio1"&gt;Default radio&lt;/b-form-radio&gt;
    &lt;b-form-radio inline v-model="radio2" name="customRadi1"&gt;Default radio&lt;/b-form-radio&gt;
    &lt;b-form-radio inline v-model="radio6" name="customRadio6"&gt;Selected radio&lt;/b-form-radio&gt;
    &lt;b-form-radio inline v-model="radio7" disabled name="customRadio7"&gt;disabled radio&lt;/b-form-radio&gt;
    &lt;b-form-radio inline disabled v-model="radio8" name="customRadio8"&gt;Selected and  disabled radio&lt;/b-form-radio&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group&gt;
    &lt;b-form-checkbox name="check-button" switch&gt;Toggle this switch element&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model="switch1" name="check-button" switch&gt;Toggle this switch element&lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox disabled name="check-button" switch&gt;Disabled switch element&lt;/b-form-checkbox&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="exampleFormControlFile1"
    label="Example file input"
  &gt;
    &lt;b-form-file plain id="exampleFormControlFile1"&gt;&lt;/b-form-file&gt;
  &lt;/b-form-group&gt;
  &lt;b-form-group
    label-for="customFile"
  &gt;
    &lt;b-form-file
      placeholder="Choose a file"
      id="customFile"
    &gt;&lt;/b-form-file&gt;
  &lt;/b-form-group&gt;
  &lt;b-button type="submit" variant="primary"&gt;Submit&lt;/b-button&gt;
  &lt;b-button type="submit" variant="none" class="bg-danger ml-3"&gt;Cancel&lt;/b-button&gt;
&lt;/b-form&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form>
              <b-form-group
                label-for="exampleInputDisabled1"
                label="Disabled Input">
                <b-form-input type="text" id="exampleInputDisabled1" value="Mark Jhon" disabled></b-form-input>
              </b-form-group>
              <b-form-group
                label-for="exampleInputPlaceholder"
                label="Placeholder">
                <b-form-input type="text" id="exampleInputPlaceholder" placeholder="This is Placeholder"></b-form-input>
              </b-form-group>
              <b-form-group
                label-for="exampleInputReadonly"
                label="Readonly">
                <b-form-input type="text" id="exampleInputReadonly" value="Mark Jhon" readonly></b-form-input>
              </b-form-group>
              <b-form-group
                label-for="exampleInputcolor"
                label="Input color">
                <b-form-input type="color" id="exampleInputcolor" value="#e20e02"></b-form-input>
              </b-form-group>
              <b-form-group
                label-for="exampleFormControlSelect1"
                label="Select Input">
                <b-form-select plain v-model="selectedAge" :options="options1" id="exampleFormControlSelect1">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled>Select your age</b-form-select-option>
                  </template>
                </b-form-select>
              </b-form-group>
              <b-form-group
                label-for="exampleFormControlSelect2"
                label="Example multiple select">
                <b-form-select plain v-model="selected" multiple :options="options2" id="exampleFormControlSelect2">
                </b-form-select>
              </b-form-group>
              <b-form-group
                label-for="customRange1"
                label="Range Input">
                <b-form-input id="customRange1" type="range"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox>Default checkbox</b-form-checkbox>
                <b-form-checkbox v-model="checked1">Checked</b-form-checkbox>
                <b-form-checkbox disabled>Disabled checkbox</b-form-checkbox>
                <b-form-checkbox v-model="checked2" disabled >Disabled checkbox</b-form-checkbox>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox inline>Default checkbox</b-form-checkbox>
                <b-form-checkbox v-model="checked3" inline>Checked</b-form-checkbox>
                <b-form-checkbox disabled inline>Disabled checkbox</b-form-checkbox>
                <b-form-checkbox v-model="checked2" disabled inline>Disabled checkbox</b-form-checkbox>
              </b-form-group>
              <b-form-group>
                <b-form-radio v-model="radio1" name="customRadio">Default radio</b-form-radio>
                <b-form-radio v-model="radio1" name="customRadio">Default radio</b-form-radio>
                <b-form-radio v-model="radio6" name="customRadio3" value="true">Selected radio</b-form-radio>
                <b-form-radio disabled name="customRadio4">disabled radio</b-form-radio>
                <b-form-radio disabled v-model="radio6" name="customRadio5" value="true">Selected and  disabled radio</b-form-radio>
              </b-form-group>
              <b-form-group>
                <b-form-radio inline v-model="radio2" name="customRadio1">Default radio</b-form-radio>
                <b-form-radio inline v-model="radio2" name="customRadio1">Default radio</b-form-radio>
                <b-form-radio inline v-model="radio6" name="customRadio6" value="true">Selected radio</b-form-radio>
                <b-form-radio inline v-model="radio7" disabled name="customRadio7">disabled radio</b-form-radio>
                <b-form-radio inline disabled v-model="radio8" name="customRadio8" value="dissel">Selected and  disabled radio</b-form-radio>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox name="check-button" switch>Toggle this switch element</b-form-checkbox>
                <b-form-checkbox v-model="switch1" name="check-button" switch>Toggle this switch element</b-form-checkbox>
                <b-form-checkbox disabled name="check-button" switch>Disabled switch element</b-form-checkbox>
              </b-form-group>
              <b-form-group
                label-for="exampleFormControlFile1"
                label="Example file input"
              >
                <b-form-file plain id="exampleFormControlFile1"></b-form-file>
              </b-form-group>
              <b-form-group
                label-for="customFile"
              >
                <b-form-file
                  placeholder="Choose a file"
                  id="customFile"
                ></b-form-file>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="submit" variant="none" class="bg-danger ml-3">Cancel</b-button>
            </b-form>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Select Size</h4>
          </template>
          <template v-slot:headerAction>
            <b-link class="text-primary float-right" v-b-toggle.collapse-8>
              <i class="ri-code-s-slash-line" />
            </b-link>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-collapse id="collapse-8" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="form-8">
                    <code>
&lt;b-form-group label="small"&gt;
  &lt;b-form-select plain v-model="selected" :options="options3" size="sm" class="mb-3"&gt;
    &lt;template v-slot:first&gt;
      &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
    &lt;/template&gt;
  &lt;/b-form-select&gt;
&lt;/b-form-group&gt;
&lt;b-form-group label="Default"&gt;
  &lt;b-form-select plain v-model="selected" :options="options3" class="mb-3"&gt;
    &lt;template v-slot:first&gt;
      &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
    &lt;/template&gt;
  &lt;/b-form-select&gt;
&lt;/b-form-group&gt;
&lt;b-form-group label="Large"&gt;
  &lt;b-form-select plain v-model="selected" :options="options3" size="lg"&gt;
    &lt;template v-slot:first&gt;
      &lt;b-form-select-option :value="null"&gt;Open this select menu&lt;/b-form-select-option&gt;
    &lt;/template&gt;
  &lt;/b-form-select&gt;
&lt;/b-form-group&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-form-group label="small">
              <b-form-select plain v-model="selected3" :options="options3" size="sm" class="mb-3">
                <template v-slot:first>
                  <b-form-select-option :value="null">Open this select menu</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Default">
              <b-form-select plain v-model="selected3" :options="options3" class="mb-3">
                <template v-slot:first>
                  <b-form-select-option :value="null">Open this select menu</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Large">
              <b-form-select plain v-model="selected3" :options="options3" size="lg">
                <template v-slot:first>
                  <b-form-select-option :value="null">Open this select menu</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
export default {
  name: 'FormLayout',
  mounted () {
    core.index()
  },
  data () {
    return {
      selectedAge: '0-18',
      selected: ['select-1'],
      selected3: null,
      options1: [
        { value: '0-18', text: '0-18' },
        { value: '18-26', text: '18-26' },
        { value: '26-46', text: '26-46' },
        { value: '46-60', text: '46-60' },
        { value: 'Above 60', text: 'Above 60' }
      ],
      options2: [
        { value: 'select-1', text: 'select-1' },
        { value: 'select-2', text: 'select-2' },
        { value: 'select-3', text: 'select-3' },
        { value: 'select-4', text: 'select-4' },
        { value: 'select-5', text: 'select-5' },
        { value: 'select-6', text: 'select-6' },
        { value: 'select-7', text: 'select-7' },
        { value: 'select-8', text: 'select-8' }
      ],
      checked1: true,
      checked2: true,
      checked3: true,
      radio1: false,
      radio2: true,
      radio3: true,
      radio5: true,
      radio6: 'true',
      radio7: false,
      radio8: 'dissel',
      switch1: true,
      options3: [
        { value: '1', text: 'One' },
        { value: '2', text: 'Two' },
        { value: '3', text: 'Three' }
      ],
      dateInput: {
        dateFormat: 'Y-m-d'
      },
      weekInput: {
        weekNumbers: true
      },
      timeInput: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i'
      },
      dateTimeInput: {
        enableTime: true
      }
    }
  }
}
</script>
