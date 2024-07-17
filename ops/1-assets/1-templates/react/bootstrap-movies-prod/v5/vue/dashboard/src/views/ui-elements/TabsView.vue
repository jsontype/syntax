<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Tabs</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following
            examples include the class, mainly to demonstrate that this particular class does not trigger any special
            styling.</p>

          <b-tabs>
            <b-tab title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Tabs Style 3</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.
          </p>
          <b-tabs>
            <b-tab id="home-two" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-two" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-two" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tabs Vertical Pills</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>
          <div class="row">
            <b-tabs pills vertical nav-class="align-items-center">
              <b-tab id="home-three" title="Home" active no-body>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.</p>
              </b-tab>
              <b-tab id="profile-three" title="Profile">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.</p>
              </b-tab>
              <b-tab id="contact-three" title="Messages">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.</p>
              </b-tab>
              <b-tab id="stetting-three" title="Settings">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.</p>
              </b-tab>
            </b-tabs>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tabs Justify Center</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Centered with <code>.justify-content-center</code></p>
          <b-tabs align="center">
            <b-tab id="home-four" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-four" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-four" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Tabs Style 2</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
          <b-tabs content-class="mt-3" pills>
            <b-tab id="home-five" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-five" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-five" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body></b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Tabs Style 4</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.
          </p>
          <b-tabs>
            <b-tab id="home-six" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-six" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-six" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body></b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tabs Fill and justify</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To
            proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>.
            Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
          <b-tabs content-class="mt-3" pills justified>
            <b-tab id="home-seven" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-seven" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-seven" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body></b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tabs Justify Right</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Right-aligned with <code>.justify-content-end</code>.</p>
          <b-tabs align="end">
            <b-tab id="home-eight" title="Home" active>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="profile-eight" title="Profile">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
            <b-tab id="contact-eight" title="Contact">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </b-tab>
          </b-tabs>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
