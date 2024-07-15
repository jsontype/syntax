<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-sm-12 col-lg-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Basic Form</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="form-group">
                          <label for="email">Email address:</label>
                          <input type="email" class="form-control" id="email1">
                       </div>
                       <div class="form-group">
                          <label for="pwd">Password:</label>
                          <input type="password" class="form-control" id="pwd">
                       </div>
                       <div class="checkbox mb-3">
                          <label><input type="checkbox"> Remember me</label>
                       </div>
                       <button type="submit" class="btn btn-primary">Submit</button>
                       <button type="submit" class="btn btn-danger">Cancel</button>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Form Grid</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="row">
                          <div class="col">
                             <input type="text" class="form-control" placeholder="First name">
                          </div>
                          <div class="col">
                             <input type="text" class="form-control" placeholder="Last name">
                          </div>
                       </div>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Input</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="form-group">
                          <label for="exampleInputText1">Input Text </label>
                          <input type="text" class="form-control" id="exampleInputText1" value="Mark Tech" placeholder="Enter Name">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputEmail3">Email Input</label>
                          <input type="email" class="form-control" id="exampleInputEmail3" value="markTech@gmail.com" placeholder="Enter Email">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputurl">Url Input</label>
                          <input type="url" class="form-control" id="exampleInputurl" value="https://getbootstrap.com" placeholder="Enter Url">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputphone">Teliphone Input</label>
                          <input type="tel" class="form-control" id="exampleInputphone" value="1-(555)-555-5555">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputNumber1">Number Input</label>
                          <input type="number" class="form-control" id="exampleInputNumber1" value="2356">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputPassword3">Password Input</label>
                          <input type="password" class="form-control" id="exampleInputPassword3" value="markTech123" placeholder="Enter Password">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputdate">Date Input</label>
                          <input type="text" class="form-control date-input basicFlatpickr" id="exampleInputdate" value="2020-12-18">
                       </div>                              
                       <div class="form-group">
                          <label for="inputWeek">Week Input</label>
                          <input type="text" class="form-control date-input basicFlatpickr" id="inputWeek" value="2020-01-01">
                       </div>
                       <div class="form-group">
                          <label for="inputTime">Time Input</label>
                          <input type="text" class="form-control date-input basicFlatpickr" id="inputTime" value="11:45">
                       </div>
                       <div class="form-group">
                          <label for="inputDatetime">Date and Time Input</label>
                          <input type="text" class="form-control date-input basicFlatpickr" id="inputDatetime" value="2019-12-19T13:45:00">
                       </div>
                       <div class="form-group">
                          <label for="exampleFormControlTextarea1">Example textarea</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                       </div>
                       <button type="submit" class="btn btn-primary">Submit</button>
                       <button type="submit" class="btn btn-danger">Cancel</button>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Input Size</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="form-group">
                          <label for="colFormLabelSm">Small</label>
                          <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="form-control-sm">
                       </div>
                       <div class="form-group">
                          <label for="colFormLabel">Default</label>
                          <input type="email" class="form-control" id="colFormLabel" placeholder="form-control">
                       </div>
                       <div class="form-group mb-0">
                          <label for="colFormLabelLg" class="pb-0">Large</label>
                          <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="form-control-lg">
                       </div>
                    </form>
                 </div>
              </div>
           </div>
           <div class="col-sm-12 col-lg-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Horizontal Form</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form class="form-horizontal" action="/action_page.php">
                       <div class="form-group row">
                          <label class="control-label col-sm-2 align-self-center mb-0" for="email">Email:</label>
                          <div class="col-sm-10">
                             <input type="email" class="form-control" id="email" placeholder="Enter Your  email">
                          </div>
                       </div>
                       <div class="form-group row">
                          <label class="control-label col-sm-2 align-self-center mb-0" for="pwd1">Password:</label>
                          <div class="col-sm-10">
                             <input type="password" class="form-control" id="pwd1" placeholder="Enter Your password">
                          </div>
                       </div>
                       <div class="form-group">
                          <div class="checkbox">
                             <label><input type="checkbox"> Remember me</label>
                          </div>
                       </div>
                       <div class="form-group">
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <button type="submit" class="btn btn-danger">Cancel</button>
                       </div>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Form row</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="form-row">
                          <div class="col">
                             <input type="text" class="form-control" placeholder="First name">
                          </div>
                          <div class="col">
                             <input type="text" class="form-control" placeholder="Last name">
                          </div>
                       </div>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Input</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <form>
                       <div class="form-group">
                          <label for="exampleInputDisabled1">Disabled Input</label>
                          <input type="text" class="form-control" id="exampleInputDisabled1" disabled="" value="Mark Tech">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputPlaceholder">Placeholder</label>
                          <input type="text" class="form-control" id="exampleInputPlaceholder" placeholder="This is Placeholder">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputReadonly">Readonly</label>
                          <input type="text" class="form-control" id="exampleInputReadonly" readonly="" value="Mark Tech">
                       </div>
                       <div class="form-group">
                          <label for="exampleInputcolor">Input Color </label>
                          <input type="color" class="form-control" id="exampleInputcolor" value="#e20e02">
                       </div>
                       <div class="form-group">
                          <label for="exampleFormControlSelect1">Select Input</label>
                          <select class="form-control" id="exampleFormControlSelect1">
                             <option selected="" disabled="">Select your age</option>
                             <option>0-18</option>
                             <option>18-26</option>
                             <option>26-46</option>
                             <option>46-60</option>
                             <option>Above 60</option>
                          </select>
                       </div>
                       <div class="form-group">
                          <label for="exampleFormControlSelect2">Example multiple select</label>
                          <select multiple="" class="form-control" id="exampleFormControlSelect2">
                             <option>select-1</option>
                             <option>select-2</option>
                             <option>select-3</option>
                             <option>select-4</option>
                             <option>select-5</option>
                             <option>select-6</option>
                             <option>select-7</option>
                             <option>select-8</option>
                          </select>
                       </div>
                       <div class="form-groupp">
                          <label for="customRange1">Range Input</label>
                          <input type="range" class="custom-range" id="customRange1">
                       </div>
                       <div class="form-group">
                          <div class="custom-control custom-checkbox">
                             <input type="checkbox" class="custom-control-input" id="customCheck1">
                             <label class="custom-control-label" for="customCheck1">Default checkbox</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                             <input type="checkbox" class="custom-control-input" id="customCheck2" Checked="">
                             <label class="custom-control-label" for="customCheck2">Checked</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                             <input type="checkbox" class="custom-control-input" id="customCheck3"  disabled="">
                             <label class="custom-control-label" for="customCheck3">Disabled checkbox</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                             <input type="checkbox" class="custom-control-input" id="customCheck4"  checked="" disabled="">
                             <label class="custom-control-label" for="customCheck4">Disabled checkbox</label>
                          </div>
                       </div>
                       <div class="form-group">
                          <div class="custom-control custom-checkbox custom-control-inline">
                             <input type="checkbox" class="custom-control-input" id="customCheck5">
                             <label class="custom-control-label" for="customCheck5">Default checkbox</label>
                          </div>
                          <div class="custom-control custom-checkbox custom-control-inline">
                             <input type="checkbox" class="custom-control-input" id="customCheck6" Checked="">
                             <label class="custom-control-label" for="customCheck6">Checked</label>
                          </div>
                          <div class="custom-control custom-checkbox custom-control-inline">
                             <input type="checkbox" class="custom-control-input" id="customCheck7"  disabled="">
                             <label class="custom-control-label" for="customCheck7">Disabled checkbox</label>
                          </div>
                          <div class="custom-control custom-checkbox custom-control-inline">
                             <input type="checkbox" class="custom-control-input" id="customCheck8"  checked="" disabled="">
                             <label class="custom-control-label" for="customCheck8">Disabled checkbox</label>
                          </div>
                       </div>
                       <div class="form-group">
                          <div class="form-check">
                             <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="customRadio1"> Default radio</label>
                             </div>
                             <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="customRadio2"> Default radio</label>
                             </div>
                             <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio3" class="custom-control-input" checked="">
                                <label class="custom-control-label" for="customRadio3"> Selected radio</label>
                             </div>
                             <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio4" name="customRadio4" class="custom-control-input" disabled="">
                                <label class="custom-control-label" for="customRadio4"> disabled radio</label>
                             </div>
                             <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio5" name="customRadio5" class="custom-control-input" disabled="" checked="">
                                <label class="custom-control-label" for="customRadio5"> Selected and  disabled radio</label>
                             </div>
                          </div>
                       </div>
                       <div class="form-group">
                          <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" id="customRadio6" name="customRadio1" class="custom-control-input">
                             <label class="custom-control-label" for="customRadio6"> Default radio</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" id="customRadio7" name="customRadio1" class="custom-control-input">
                             <label class="custom-control-label" for="customRadio7"> Default radio</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" id="customRadio8" name="customRadio6" class="custom-control-input" checked="">
                             <label class="custom-control-label" for="customRadio8"> Selected radio</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" id="customRadio9" name="customRadio7" class="custom-control-input" disabled="">
                             <label class="custom-control-label" for="customRadio9"> disabled radio</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" id="customRadio10" name="customRadio8" class="custom-control-input" disabled="" checked="">
                             <label class="custom-control-label" for="customRadio10"> Selected and  disabled radio</label>
                          </div>
                       </div>
                       <div class="form-group">
                          <div class="custom-control custom-switch">
                             <input type="checkbox" class="custom-control-input" id="customSwitch1">
                             <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                          </div>
                          <div class="custom-control custom-switch">
                             <input type="checkbox" class="custom-control-input" id="customSwitch2" checked="">
                             <label class="custom-control-label" for="customSwitch2">Toggle this switch element</label>
                          </div>
                          <div class="custom-control custom-switch">
                             <input type="checkbox" class="custom-control-input" disabled id="customSwitch3">
                             <label class="custom-control-label" for="customSwitch3">Disabled switch element</label>
                          </div>
                       </div>
                       <div class="form-group">
                          <label for="exampleFormControlFile1">Example file input</label>
                          <input type="file" class="form-control-file" id="exampleFormControlFile1">
                       </div>
                       <div class="form-group">
                          <div class="custom-file">
                             <input type="file" class="custom-file-input" id="customFile">
                             <label class="custom-file-label" for="customFile">Choose file</label>
                          </div>
                       </div>
                       <button type="submit" class="btn btn-primary">Submit</button>
                       <button type="submit" class="btn btn-danger">Cancel</button>
                    </form>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Select Size</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                    <div class="form-group">
                       <label>Small</label>
                       <select class="form-control form-control-sm mb-3">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                       </select>
                    </div>
                    <div class="form-group">
                       <label>Default</label>
                       <select class="form-control mb-3">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                       </select>
                    </div>
                    <div class="form-group">
                       <label>Large</label>
                       <select class="form-control form-control-lg">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                       </select>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>