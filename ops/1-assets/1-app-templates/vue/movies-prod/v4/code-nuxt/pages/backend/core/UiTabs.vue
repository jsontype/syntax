<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Basic Tabs
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-1 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-1" class="text-white">
                    <code>
&lt;tab-nav :tabs="true" id="myTab-1"&gt;
  &lt;tab-nav-items :active="true" id="home-tab" ariaControls="home" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="profile-tab" ariaControls="profile" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="contact-tab" ariaControls="contact" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="myTabContent"&gt;
  &lt;tab-content-item :active="true" id="home" aria-labelled-by="home-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="profile" aria-labelled-by="profile-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="contact" aria-labelled-by="contact-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="myTab-1" :tabs="true">
              <tab-nav-items
                id="home-tab"
                :active="true"
                aria-controls="home"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="profile-tab"
                :active="false"
                aria-controls="profile"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="contact-tab"
                :active="false"
                aria-controls="contact"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="myTabContent">
              <tab-content-item id="home" :active="true" aria-labelled-by="home-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="profile" :active="false" aria-labelled-by="profile-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="contact" :active="false" aria-labelled-by="contact-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Basic Tabs Style 3
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-2 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-2" class="text-white">
                    <code>
&lt;tab-nav :tabs="true" id="myTab-two"&gt;
  &lt;tab-nav-items :active="true" id="home-tab-two" ariaControls="home" href="#home-two" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="profile-tab-two" ariaControls="profile" href="#profile-two" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="contact-tab-two" ariaControls="contact" href="#contact-two" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="myTabContent-1"&gt;
  &lt;tab-content-item :active="true" id="home-two" aria-labelled-by="home-tab-two"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="profile-two" aria-labelled-by="profile-tab-two"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="contact-two" aria-labelled-by="contact-tab-two"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="myTab-two" :tabs="true">
              <tab-nav-items
                id="home-tab-two"
                :active="true"
                aria-controls="home"
                href="#home-two"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="profile-tab-two"
                :active="false"
                aria-controls="profile"
                href="#profile-two"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="contact-tab-two"
                :active="false"
                aria-controls="contact"
                href="#contact-two"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="myTabContent-1">
              <tab-content-item id="home-two" :active="true" aria-labelled-by="home-tab-two">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="profile-two" :active="false" aria-labelled-by="profile-tab-two">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="contact-two" :active="false" aria-labelled-by="contact-tab-two">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tabs Vertical Pills
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-3 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-3" class="text-white">
                    <code>
&lt;b-row&gt;
  &lt;b-col sm="3"&gt;
    &lt;tab-nav :pills="true" :vertical="true" class="text-center" id="v-pills-tab"&gt;
      &lt;tab-nav-items :active="true" id="v-pills-home-tab" href="#v-pills-home" ariaControls="v-pills-home" role="tab" :ariaSelected="true" title="Home" /&gt;
      &lt;tab-nav-items :active="false" id="v-pills-profile-tab" href="#v-pills-profile" ariaControls="v-pills-profile" role="tab" :ariaSelected="false" title="Profile" /&gt;
      &lt;tab-nav-items :active="false" id="v-pills-messages-tab" href="#v-pills-messages" ariaControls="v-pills-messages" role="tab" :ariaSelected="false" title="Messages" /&gt;
      &lt;tab-nav-items :active="false" id="v-pills-settings-tab" href="#v-pills-settings" ariaControls="v-pills-settings" role="tab" :ariaSelected="false" title="Settings" /&gt;
    &lt;/tab-nav&gt;
  &lt;/b-col&gt;
  &lt;b-col sm="9"&gt;
    &lt;tab-content id="v-pills-tabContent" class="mt-0"&gt;
      &lt;tab-content-item :active="true" id="v-pills-home" aria-labelled-by="v-pills-home-tab"&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
      &lt;/tab-content-item&gt;
      &lt;tab-content-item :active="false" id="v-pills-profile" aria-labelled-by="v-pills-profile-tab"&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
      &lt;/tab-content-item&gt;
      &lt;tab-content-item :active="false" id="v-pills-messages" aria-labelled-by="v-pills-messages-tab"&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
      &lt;/tab-content-item&gt;
        &lt;tab-content-item :active="false" id="v-pills-settings" aria-labelled-by="v-pills-settings-tab"&gt;
          &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
      &lt;/tab-content-item&gt;
    &lt;/tab-content&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-row>
              <b-col sm="3">
                <tab-nav id="v-pills-tab" :pills="true" :vertical="true" class="text-center">
                  <tab-nav-items
                    id="v-pills-home-tab"
                    :active="true"
                    href="#v-pills-home"
                    aria-controls="v-pills-home"
                    role="tab"
                    :aria-selected="true"
                    title="Home"
                  />
                  <tab-nav-items
                    id="v-pills-profile-tab"
                    :active="false"
                    href="#v-pills-profile"
                    aria-controls="v-pills-profile"
                    role="tab"
                    :aria-selected="false"
                    title="Profile"
                  />
                  <tab-nav-items
                    id="v-pills-messages-tab"
                    :active="false"
                    href="#v-pills-messages"
                    aria-controls="v-pills-messages"
                    role="tab"
                    :aria-selected="false"
                    title="Messages"
                  />
                  <tab-nav-items
                    id="v-pills-settings-tab"
                    :active="false"
                    href="#v-pills-settings"
                    aria-controls="v-pills-settings"
                    role="tab"
                    :aria-selected="false"
                    title="Settings"
                  />
                </tab-nav>
              </b-col>
              <b-col sm="9">
                <tab-content id="v-pills-tabContent" class="mt-0">
                  <tab-content-item id="v-pills-home" :active="true" aria-labelled-by="v-pills-home-tab">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </tab-content-item>
                  <tab-content-item id="v-pills-profile" :active="false" aria-labelled-by="v-pills-profile-tab">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </tab-content-item>
                  <tab-content-item id="v-pills-messages" :active="false" aria-labelled-by="v-pills-messages-tab">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </tab-content-item>
                  <tab-content-item id="v-pills-settings" :active="false" aria-labelled-by="v-pills-settings-tab">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </tab-content-item>
                </tab-content>
              </b-col>
            </b-row>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tabs Justify Center
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-4 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Centered with <code>.justify-content-center</code></p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-4" class="text-white">
                    <code>
&lt;tab-nav :tabs="true" id="myTab-2" align="center"&gt;
  &lt;tab-nav-items :active="true" id="home-tab-justify" href="#home-justify" ariaControls="home" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="profile-tab-justify" href="#profile-justify" ariaControls="profile" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="contact-tab-justify" href="#contact-justify" ariaControls="contact" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="myTabContent-3"&gt;
  &lt;tab-content-item :active="true" id="home-justify" aria-labelled-by="home-tab-justify"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="profile-justify" aria-labelled-by="profile-tab-justify"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="contact-justify" aria-labelled-by="contact-tab-justify"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="myTab-2" :tabs="true" align="center">
              <tab-nav-items
                id="home-tab-justify"
                :active="true"
                href="#home-justify"
                aria-controls="home"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="profile-tab-justify"
                :active="false"
                href="#profile-justify"
                aria-controls="profile"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="contact-tab-justify"
                :active="false"
                href="#contact-justify"
                aria-controls="contact"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="myTabContent-3">
              <tab-content-item id="home-justify" :active="true" aria-labelled-by="home-tab-justify">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="profile-justify" :active="false" aria-labelled-by="profile-tab-justify">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="contact-justify" :active="false" aria-labelled-by="contact-tab-justify">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Basic Tabs Style 2
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-5 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-5" class="text-white">
                    <code>
&lt;tab-nav :pills="true" id="pills-tab" class="mb-3"&gt;
  &lt;tab-nav-items :active="true" id="pills-home-tab" href="#pills-home" ariaControls="pills-home" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="pills-profile-tab" href="#pills-profile" ariaControls="pills-profile" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="pills-contact-tab" href="#pills-contact" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="pills-tabContent-2"&gt;
  &lt;tab-content-item :active="true" id="pills-home" aria-labelled-by="pills-home-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="pills-profile" aria-labelled-by="pills-profile-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="pills-contact" aria-labelled-by="pills-contact-tab"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="pills-tab" :pills="true" class="mb-3">
              <tab-nav-items
                id="pills-home-tab"
                :active="true"
                href="#pills-home"
                aria-controls="pills-home"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="pills-profile-tab"
                :active="false"
                href="#pills-profile"
                aria-controls="pills-profile"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="pills-contact-tab"
                :active="false"
                href="#pills-contact"
                aria-controls="pills-contact"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="pills-tabContent-2">
              <tab-content-item id="pills-home" :active="true" aria-labelled-by="pills-home-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="pills-profile" :active="false" aria-labelled-by="pills-profile-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="pills-contact" :active="false" aria-labelled-by="pills-contact-tab">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Basic Tabs Style 4
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-6 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-6" class="text-white">
                    <code>
&lt;tab-nav :tabs="true" id="myTab-three"&gt;
  &lt;tab-nav-items :active="true" id="home-tab-three" ariaControls="home" href="#home-three" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="profile-tab-three" ariaControls="profile" href="#profile-three" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="contact-tab-three" ariaControls="contact" href="#contact-three" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="myTabContent-4"&gt;
  &lt;tab-content-item :active="true" id="home-three" aria-labelled-by="home-tab-three"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="profile-three" aria-labelled-by="profile-tab-three"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="contact-three" aria-labelled-by="contact-tab-three"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="myTab-three" :tabs="true">
              <tab-nav-items
                id="home-tab-three"
                :active="true"
                aria-controls="home"
                href="#home-three"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="profile-tab-three"
                :active="false"
                aria-controls="profile"
                href="#profile-three"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="contact-tab-three"
                :active="false"
                aria-controls="contact"
                href="#contact-three"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="myTabContent-4">
              <tab-content-item id="home-three" :active="true" aria-labelled-by="home-tab-three">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="profile-three" :active="false" aria-labelled-by="profile-tab-three">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="contact-three" :active="false" aria-labelled-by="contact-tab-three">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tabs Fills and justify
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-7 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
            <b-collapse id="collapse-7" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-7" class="text-white">
                    <code>
&lt;tab-nav :pills="true" class="nav-fill mb-3" id="pills-tab-1"&gt;
  &lt;tab-nav-items :active="true" id="pills-home-tab-fill" href="#pills-home-fill" ariaControls="pills-home-fill" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="pills-profile-tab-fill" href="#pills-profile-fill" ariaControls="pills-profile-fill" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="pills-contact-tab-fill" href="#pills-contact-fill" ariaControls="pills-contact-fill" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="pills-tabContent-1" class="mt-0"&gt;
  &lt;tab-content-item :active="true" id="pills-home-fill" aria-labelled-by="pills-home-tab-fill"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="pills-profile-fill" aria-labelled-by="pills-profile-tab-fill"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="pills-contact-fill" aria-labelled-by="pills-contact-tab-fill"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="pills-tab-1" :pills="true" class="nav-fill mb-3">
              <tab-nav-items
                id="pills-home-tab-fill"
                :active="true"
                href="#pills-home-fill"
                aria-controls="pills-home-fill"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="pills-profile-tab-fill"
                :active="false"
                href="#pills-profile-fill"
                aria-controls="pills-profile-fill"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="pills-contact-tab-fill"
                :active="false"
                href="#pills-contact-fill"
                aria-controls="pills-contact-fill"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="pills-tabContent-1" class="mt-0">
              <tab-content-item id="pills-home-fill" :active="true" aria-labelled-by="pills-home-tab-fill">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </tab-content-item>
              <tab-content-item id="pills-profile-fill" :active="false" aria-labelled-by="pills-profile-tab-fill">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </tab-content-item>
              <tab-content-item id="pills-contact-fill" :active="false" aria-labelled-by="pills-contact-tab-fill">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </tab-content-item>
            </tab-content>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tabs Justify Center
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-8 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Right-aligned with <code>.justify-content-end</code>.</p>
            <b-collapse id="collapse-8" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="tabs-8" class="text-white">
                    <code>
&lt;tab-nav :tabs="true" id="myTab-4" align="end"&gt;
  &lt;tab-nav-items :active="true" id="home-tab-end" href="#home-end" ariaControls="home" role="tab" :ariaSelected="true" title="Home" /&gt;
  &lt;tab-nav-items :active="false" id="profile-tab-end" href="#profile-end" ariaControls="profile" role="tab" :ariaSelected="false" title="Profile" /&gt;
  &lt;tab-nav-items :active="false" id="contact-tab-end" href="#contact-end" ariaControls="contact" role="tab" :ariaSelected="false" title="Contact" /&gt;
&lt;/tab-nav&gt;
&lt;tab-content id="myTabContent-5"&gt;
  &lt;tab-content-item :active="true" id="home-end" aria-labelled-by="home-tab-end"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="profile-end" aria-labelled-by="profile-tab-end"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
  &lt;tab-content-item :active="false" id="contact-end" aria-labelled-by="contact-tab-end"&gt;
    &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;/p&gt;
  &lt;/tab-content-item&gt;
&lt;/tab-content&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <tab-nav id="myTab-4" :tabs="true" align="end">
              <tab-nav-items
                id="home-tab-end"
                :active="true"
                href="#home-end"
                aria-controls="home"
                role="tab"
                :aria-selected="true"
                title="Home"
              />
              <tab-nav-items
                id="profile-tab-end"
                :active="false"
                href="#profile-end"
                aria-controls="profile"
                role="tab"
                :aria-selected="false"
                title="Profile"
              />
              <tab-nav-items
                id="contact-tab-end"
                :active="false"
                href="#contact-end"
                aria-controls="contact"
                role="tab"
                :aria-selected="false"
                title="Contact"
              />
            </tab-nav>
            <tab-content id="myTabContent-5">
              <tab-content-item id="home-end" :active="true" aria-labelled-by="home-tab-end">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="profile-end" :active="false" aria-labelled-by="profile-tab-end">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
              <tab-content-item id="contact-end" :active="false" aria-labelled-by="contact-tab-end">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </tab-content-item>
            </tab-content>
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
  name: 'UiTabs',
  mounted () {
    core.index()
  }
}
</script>
