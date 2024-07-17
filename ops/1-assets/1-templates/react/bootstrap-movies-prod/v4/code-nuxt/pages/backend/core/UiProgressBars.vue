<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Examples
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-1 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
            <ul>
              <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
              <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
              <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
              <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
            </ul>
            <p>Put that all together, and you have the following examples.</p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="examples-1" class="text-white">
                    <code>
&lt;b-progress :value="0" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="25" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="50" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="100" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="0" max="100" class="mb-3" />
            <b-progress :value="25" max="100" class="mb-3" />
            <b-progress :value="50" max="100" class="mb-3" />
            <b-progress :value="75" max="100" class="mb-3" />
            <b-progress :value="100" max="100" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Heights
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-2 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="heights-1" class="text-white">
                    <code>
&lt;b-progress :value="25" show-progress max="100" height="3px" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="50" show-progress max="100" height="10px" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" show-progress max="100" height="15px" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="100" show-progress max="100" height="20px" &gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="25" show-progress max="100" height="3px" class="mb-3" />
            <b-progress :value="50" show-progress max="100" height="10px" class="mb-3" />
            <b-progress :value="75" show-progress max="100" height="15px" class="mb-3" />
            <b-progress :value="99" show-progress max="100" height="20px" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Animated stripes
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-3 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="animated-stripe-1" class="text-white">
                    <code>
&lt;b-progress :value="75" animated max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" variant="success" animated max="100"&gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="75" animated max="100" class="mb-3" />
            <b-progress :value="75" variant="success" animated max="100" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Labels
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-4 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="labels-1" class="text-white">
                    <code>
&lt;b-progress :value="25" show-progress max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="50" show-progress max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" show-progress max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="100" show-progress max="100"&gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="25" show-progress max="100" class="mb-3" />
            <b-progress :value="50" show-progress max="100" class="mb-3" />
            <b-progress :value="75" show-progress max="100" class="mb-3" />
            <b-progress :value="99" show-progress max="100" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Backgrounds
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-5 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Use background utility classes to change the appearance of individual progress bars.</p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="backgrounds-1" class="text-white">
                    <code>
&lt;b-progress :value="25" variant="success" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="50" variant="info" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" variant="warning" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="100" variant="danger" max="100"&gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="25" variant="success" max="100" class="mb-3" />
            <b-progress :value="50" variant="info" max="100" class="mb-3" />
            <b-progress :value="75" variant="warning" max="100" class="mb-3" />
            <b-progress :value="100" variant="danger" max="100" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Multiple bars
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-6 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Include multiple progress bars in a progress component if you need.</p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="multiple-bars-1" class="text-white">
                    <code>
&lt;b-progress max="100"&gt;
  &lt;b-progress-bar variant="primary" :value="15"&gt;&lt;/b-progress-bar&gt;
  &lt;b-progress-bar variant="success" :value="30"&gt;&lt;/b-progress-bar&gt;
  &lt;b-progress-bar variant="info" :value="20"&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress max="100">
              <b-progress-bar variant="primary" :value="15" />
              <b-progress-bar variant="success" :value="30" />
              <b-progress-bar variant="info" :value="20" />
            </b-progress>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Striped
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-7 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>
            <b-collapse id="collapse-7" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="striped-1" class="text-white">
                    <code>
&lt;b-progress :value="10" striped max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="25" striped variant="success" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="50" striped variant="info" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="75" striped variant="warning" max="100" class="mb-3"&gt;&lt;/b-progress&gt;
&lt;b-progress :value="100" striped variant="danger" max="100"&gt;&lt;/b-progress&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-progress :value="10" striped max="100" class="mb-3" />
            <b-progress :value="25" striped variant="success" max="100" class="mb-3" />
            <b-progress :value="50" striped variant="info" max="100" class="mb-3" />
            <b-progress :value="75" striped variant="warning" max="100" class="mb-3" />
            <b-progress :value="100" striped variant="danger" max="100" />
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
  name: 'UiProgressBars',
  mounted () {
    core.index()
  }
}
</script>
