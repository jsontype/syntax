<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">
              Account Setting
            </h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="acc-edit">
            <form>
              <div class="form-group">
                <label for="uname">User Name:</label>
                <input id="uname" type="text" class="form-control" value="Bni@01">
              </div>
              <div class="form-group">
                <label for="email">Email Id:</label>
                <input id="email" type="email" class="form-control" value="Bnijohn@gmail.com">
              </div>
              <div class="form-group">
                <label for="altemail">Alternate Email:</label>
                <input id="altemail" type="email" class="form-control" value="designtheme@gmail.com">
              </div>
              <div class="form-group">
                <label class="d-block">Language Known:</label>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="english" type="checkbox" class="custom-control-input" checked="">
                  <label class="custom-control-label" for="english">English</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="french" type="checkbox" class="custom-control-input" checked="">
                  <label class="custom-control-label" for="french">French</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="hindi" type="checkbox" class="custom-control-input">
                  <label class="custom-control-label" for="hindi">Hindi</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="spanish" type="checkbox" class="custom-control-input" checked="">
                  <label class="custom-control-label" for="spanish">Spanish</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="arabic" type="checkbox" class="custom-control-input">
                  <label class="custom-control-label" for="arabic">Arabic</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input id="italian" type="checkbox" class="custom-control-input">
                  <label class="custom-control-label" for="italian">Italian</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button type="reset" class="btn iq-bg-danger">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">
              Social Media
            </h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="acc-edit">
            <form>
              <div class="form-group">
                <label for="facebook">Facebook:</label>
                <input id="facebook" type="text" class="form-control" value="www.facebook.com">
              </div>
              <div class="form-group">
                <label for="twitter">Twitter:</label>
                <input id="twitter" type="text" class="form-control" value="www.twitter.com">
              </div>
              <div class="form-group">
                <label for="google">Google +:</label>
                <input id="google" type="text" class="form-control" value="www.google.com">
              </div>
              <div class="form-group">
                <label for="instagram">Instagram:</label>
                <input id="instagram" type="text" class="form-control" value="www.instagram.com">
              </div>
              <div class="form-group">
                <label for="youtube">You Tube:</label>
                <input id="youtube" type="text" class="form-control" value="www.youtube.com">
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button type="reset" class="btn iq-bg-danger">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { core } from '../../../assets/app/app'
export default {
  layout: 'BackendLayout',
  name: 'AccountSetting',
  mounted () {
    // core.index()
  }
}
</script>
