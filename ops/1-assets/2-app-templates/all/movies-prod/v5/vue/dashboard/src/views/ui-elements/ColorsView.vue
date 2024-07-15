<template>
  <b-template>
    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Color</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>
              Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong
              >, so in some cases you’ll want to use <code>.text-*</code> utilities.
            </p>
            <div class="row mt-4">
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-primary pt-5 pb-5 text-center rounded"></p>
                <h6>Primary</h6>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-secondary pt-5 pb-5 text-center rounded"></p>
                <h6>Secondary</h6>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-success pt-5 pb-5 text-center rounded"></p>
                <h6>Success</h6>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-danger pt-5 pb-5 text-center rounded"></p>
                <h6>Danger</h6>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-warning pt-5 pb-5 text-center rounded"></p>
                <h6>Warning</h6>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-info pt-5 pb-5 text-center rounded"></p>
                <h6>Info</h6>
              </b-col>
              <b-col lg="2" md="6" mt="4" class="text-center">
                <p class="bg-light pt-5 pb-5 text-center rounded"></p>
                <h6>Light</h6>
              </b-col>
              <b-col lg="2" md="6" mt="4" class="text-center">
                <p class="bg-dark pt-5 pb-5 text-center rounded"></p>
                <h6>Dark</h6>
              </b-col>
              <b-col lg="2" md="6" mt="4" class="text-center">
                <p class="bg-gray pt-5 pb-5 text-center rounded"></p>
                <h6>Gray</h6>
              </b-col>
            </div>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Color</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>
              Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong
              >, so in some cases you’ll want to use <code>.text-*</code> utilities.
            </p>
            <div class="row mt-4">
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-primary pt-5 pb-5 text-center rounded font-size-18">Primary</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-secondary pt-5 pb-5 text-center rounded font-size-18">Secondary</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-success pt-5 pb-5 text-center rounded font-size-18">Success</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-danger pt-5 pb-5 text-center rounded font-size-18">Danger</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-warning pt-5 pb-5 text-center rounded font-size-18">Warning</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center">
                <p class="bg-soft-info pt-5 pb-5 text-center rounded font-size-18">Info</p>
              </b-col>
              <b-col lg="2" md="6" class="text-center mt-4">
                <p class="bg-soft-dark pt-5 pb-5 text-center rounded font-size-18">Dark</p>
              </b-col>
              <div class="col-lg-2 col-md-6 text-center mt-4">
                <p class="bg-soft-gray pt-5 pb-5 text-center rounded font-size-18">Gray</p>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Text Color</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>
              Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong>
            </p>
            <p class="text-primary">.text-primary</p>
            <p class="text-secondary">.text-secondary</p>
            <p class="text-gray">.text-gray</p>
            <p class="text-success">.text-success</p>
            <p class="text-danger">.text-danger</p>
            <p class="text-warning">.text-warning</p>
            <p class="text-bg-info">.text-bg-info</p>
            <p class="text-light bg-dark">.text-light</p>
            <p class="text-dark">.text-dark</p>
            <p class="text-muted">.text-muted</p>
            <p class="text-white bg-dark">.text-white</p>
            <p class="text-black-50">.text-black-50</p>
            <p class="text-white-50 bg-dark mb-0">.text-white-50</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Text Color</h4>
            </div>
          </b-card-header>

          <div class="mt-2 d-flex flex-wrap gap-1">
            <b-card-body>
              <p>
                Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong>
              </p>
              <p><a href="#" class="text-primary">Primary link</a></p>
              <p><a href="#" class="text-secondary">Secondary link</a></p>
              <p><a href="#" class="text-success">Success link</a></p>
              <p><a href="#" class="text-danger">Danger link</a></p>
              <p><a href="#" class="text-warning">Warning link</a></p>
              <p><a href="#" class="text-gray">gray link</a></p>
              <p><a href="#" class="text-bg-info">bg-Info link</a></p>
              <p><a href="#" class="text-light bg-dark">Light link</a></p>
              <p><a href="#" class="text-dark">Dark link</a></p>
              <p><a href="#" class="text-muted">Muted link</a></p>
              <p class="mb-0"><a href="#" class="text-white bg-dark">White link</a></p>
            </b-card-body>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Text Color</h4>
            </div>
          </b-card-header>

          <div class="mt-2 d-flex flex-wrap gap-1">
            <b-card-body>
              <p>
                Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong>
              </p>
              <p class="bg-soft-primary ps-3 pe-3 pt-2 pb-2 rounded">Primary link</p>
              <p class="bg-soft-secondary ps-3 pe-3 pt-2 pb-2 rounded">Secondary link</p>
              <p class="bg-soft-success ps-3 pe-3 pt-2 pb-2 rounded">Success link</p>
              <p class="bg-soft-danger ps-3 pe-3 pt-2 pb-2 rounded">Danger link</p>
              <p class="bg-soft-warning ps-3 pe-3 pt-2 pb-2 rounded">Warning link</p>
              <p class="bg-soft-info ps-3 pe-3 pt-2 pb-2 rounded">bg-Info link</p>
              <p class="bg-soft-dark ps-3 pe-3 pt-2 pb-2 rounded">Dark link</p>
              <p class="bg-soft-gray ps-3 pe-3 pt-2 pb-2 rounded mb-0">Gray link</p>
            </b-card-body>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Qompac UI Text Color</h4>
            </div>
          </b-card-header>

          <div class="mt-2 d-flex flex-wrap gap-1">
            <b-card-body>
              <p>
                Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong>
              </p>
              <p><a href="#" class="bg-soft-primary ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Primary link</a></p>
              <p><a href="#" class="bg-soft-secondary ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Secondary link</a></p>
              <p><a href="#" class="bg-soft-success ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Success link</a></p>
              <p><a href="#" class="bg-soft-danger ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Danger link</a></p>
              <p><a href="#" class="bg-soft-warning ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Warning link</a></p>
              <p><a href="#" class="bg-soft-info ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">bg-Info link</a></p>
              <p class=""><a href="#" class="dark ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Dark link</a></p>
              <p class="mb-0"><a href="#" class="bg-soft-gray ps-3 pe-3 pt-2 pb-2 rounded d-inline-block">Gray link</a></p>
            </b-card-body>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-template>
</template>
