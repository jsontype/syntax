<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-1 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="default-buttons" class="text-white">
                    <code>
&lt;b-button variant="primary" class="mb-3 mr-1"&gt;Primary&lt;/b-button&gt;
&lt;b-button variant="secondary" class="mb-3 mr-1"&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant="success" class="mb-3 mr-1"&gt;Success&lt;/b-button&gt;
&lt;b-button variant="danger" class="mb-3 mr-1"&gt;Danger&lt;/b-button&gt;
&lt;b-button variant="warning" class="mb-3 mr-1"&gt;Warning&lt;/b-button&gt;
&lt;b-button variant="info" class="mb-3 mr-1"&gt;Info&lt;/b-button&gt;
&lt;b-button variant="light" class="mb-3 mr-1"&gt;Light&lt;/b-button&gt;
&lt;b-button variant="dark" class="mb-3 mr-1"&gt;Dark&lt;/b-button&gt;
&lt;b-button variant="link" class="mb-3 mr-1"&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="primary" class="mb-3 mr-1">
              Primary
            </b-button>
            <b-button variant="secondary" class="mb-3 mr-1">
              Secondary
            </b-button>
            <b-button variant="success" class="mb-3 mr-1">
              Success
            </b-button>
            <b-button variant="danger" class="mb-3 mr-1">
              Danger
            </b-button>
            <b-button variant="warning" class="mb-3 mr-1">
              Warning
            </b-button>
            <b-button variant="info" class="mb-3 mr-1">
              Info
            </b-button>
            <b-button variant="light" class="mb-3 mr-1">
              Light
            </b-button>
            <b-button variant="dark" class="mb-3 mr-1">
              Dark
            </b-button>
            <b-button variant="link" class="mb-3 mr-1">
              Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Buttons Rounded Shape
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-2 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="default-buttons-round-shape" class="text-white">
                    <code>
&lt;b-button pill variant="primary" class="mb-3 mr-1"&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant="secondary" class="mb-3 mr-1"&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant="success" class="mb-3 mr-1"&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant="danger" class="mb-3 mr-1"&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant="warning" class="mb-3 mr-1"&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant="info" class="mb-3 mr-1"&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant="light" class="mb-3 mr-1"&gt;Light&lt;/b-button&gt;
&lt;b-button pill variant="dark" class="mb-3 mr-1"&gt;Dark&lt;/b-button&gt;
&lt;b-button pill variant="link" class="mb-3 mr-1"&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button pill variant="primary" class="mb-3 mr-1">
              Primary
            </b-button>
            <b-button pill variant="secondary" class="mb-3 mr-1">
              Secondary
            </b-button>
            <b-button pill variant="success" class="mb-3 mr-1">
              Success
            </b-button>
            <b-button pill variant="danger" class="mb-3 mr-1">
              Danger
            </b-button>
            <b-button pill variant="warning" class="mb-3 mr-1">
              Warning
            </b-button>
            <b-button pill variant="info" class="mb-3 mr-1">
              Info
            </b-button>
            <b-button pill variant="light" class="mb-3 mr-1">
              Light
            </b-button>
            <b-button pill variant="dark" class="mb-3 mr-1">
              Dark
            </b-button>
            <b-button pill variant="link" class="mb-3 mr-1">
              Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Outline Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-3 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="outline-buttons" class="text-white">
                    <code>
&lt;b-button variant="outline-primary" class="mb-3 mr-1"&gt;Primary&lt;/b-button&gt;
&lt;b-button variant="outline-secondary" class="mb-3 mr-1"&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant="outline-success" class="mb-3 mr-1"&gt;Success&lt;/b-button&gt;
&lt;b-button variant="outline-danger" class="mb-3 mr-1"&gt;Danger&lt;/b-button&gt;
&lt;b-button variant="outline-warning" class="mb-3 mr-1"&gt;Warning&lt;/b-button&gt;
&lt;b-button variant="outline-info" class="mb-3 mr-1"&gt;Info&lt;/b-button&gt;
&lt;b-button variant="outline-dark" class="mb-3 mr-1"&gt;Dark&lt;/b-button&gt;
&lt;b-button variant="outline-link" class="mb-3 mr-1"&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="outline-primary" class="mb-3 mr-1">
              Primary
            </b-button>
            <b-button variant="outline-secondary" class="mb-3 mr-1">
              Secondary
            </b-button>
            <b-button variant="outline-success" class="mb-3 mr-1">
              Success
            </b-button>
            <b-button variant="outline-danger" class="mb-3 mr-1">
              Danger
            </b-button>
            <b-button variant="outline-warning" class="mb-3 mr-1">
              Warning
            </b-button>
            <b-button variant="outline-info" class="mb-3 mr-1">
              Info
            </b-button>
            <b-button variant="outline-dark" class="mb-3 mr-1">
              Dark
            </b-button>
            <b-button variant="outline-link" class="mb-3 mr-1">
              Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Rounded Outline Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-4 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="round-outlines-buttons" class="text-white">
                    <code>
&lt;b-button pill variant="outline-primary" class="mb-3 mr-1"&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant="outline-secondary" class="mb-3 mr-1"&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant="outline-success" class="mb-3 mr-1"&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant="outline-danger" class="mb-3 mr-1"&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant="outline-warning" class="mb-3 mr-1"&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant="outline-info" class="mb-3 mr-1"&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant="outline-dark" class="mb-3 mr-1"&gt;Dark&lt;/b-button&gt;
&lt;b-button pill variant="outline-link" class="mb-3 mr-1"&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button pill variant="outline-primary" class="mb-3 mr-1">
              Primary
            </b-button>
            <b-button pill variant="outline-secondary" class="mb-3 mr-1">
              Secondary
            </b-button>
            <b-button pill variant="outline-success" class="mb-3 mr-1">
              Success
            </b-button>
            <b-button pill variant="outline-danger" class="mb-3 mr-1">
              Danger
            </b-button>
            <b-button pill variant="outline-warning" class="mb-3 mr-1">
              Warning
            </b-button>
            <b-button pill variant="outline-info" class="mb-3 mr-1">
              Info
            </b-button>
            <b-button pill variant="outline-dark" class="mb-3 mr-1">
              Dark
            </b-button>
            <b-button pill variant="outline-link" class="mb-3 mr-1">
              Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-5 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="default-buttons-icon" class="text-white">
                    <code>
&lt;b-button variant="primary" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Primary&lt;/b-button&gt;
&lt;b-button variant="secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill"&gt;&lt;/i&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant="success" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Success&lt;/b-button&gt;
&lt;b-button variant="danger" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill"&gt;&lt;/i&gt;Danger&lt;/b-button&gt;
&lt;b-button variant="warning" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Warning&lt;/b-button&gt;
&lt;b-button variant="info" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill"&gt;&lt;/i&gt;Info&lt;/b-button&gt;
&lt;b-button variant="light" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Light&lt;/b-button&gt;
&lt;b-button variant="dark" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill"&gt;&lt;/i&gt;Dark&lt;/b-button&gt;
&lt;b-button variant="link" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="primary" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Primary
            </b-button>
            <b-button variant="secondary" class="mb-3 mr-1">
              <i class="ri-heart-fill" />Secondary
            </b-button>
            <b-button variant="success" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Success
            </b-button>
            <b-button variant="danger" class="mb-3 mr-1">
              <i class="ri-heart-fill" />Danger
            </b-button>
            <b-button variant="warning" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Warning
            </b-button>
            <b-button variant="info" class="mb-3 mr-1">
              <i class="ri-heart-fill" />Info
            </b-button>
            <b-button variant="light" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Light
            </b-button>
            <b-button variant="dark" class="mb-3 mr-1">
              <i class="ri-heart-fill" />Dark
            </b-button>
            <b-button variant="link" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Buttons Rounded Shape
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-6 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="default-buttons-round-shape-icon" class="text-white">
                    <code>
&lt;b-button pill variant="primary" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant="secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant="success" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant="danger" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant="warning" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant="info" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant="light" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Light&lt;/b-button&gt;
&lt;b-button pill variant="dark" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Dark&lt;/b-button&gt;
&lt;b-button pill variant="link" class="mb-3 mr-1"&gt;&lt;i class="ri-bill-fill"&gt;&lt;/i&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button pill variant="primary" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Primary
            </b-button>
            <b-button pill variant="secondary" class="mb-3 mr-1">
              Secondary
            </b-button>
            <b-button pill variant="success" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Success
            </b-button>
            <b-button pill variant="danger" class="mb-3 mr-1">
              Danger
            </b-button>
            <b-button pill variant="warning" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Warning
            </b-button>
            <b-button pill variant="info" class="mb-3 mr-1">
              Info
            </b-button>
            <b-button pill variant="light" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Light
            </b-button>
            <b-button pill variant="dark" class="mb-3 mr-1">
              Dark
            </b-button>
            <b-button pill variant="link" class="mb-3 mr-1">
              <i class="ri-bill-fill" />Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Outline Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-7 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-7" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="outline-buttons-icons" class="text-white">
                    <code>
&lt;b-button variant="outline-primary" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Primary&lt;/b-button&gt;
&lt;b-button variant="outline-secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant="outline-success" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Success&lt;/b-button&gt;
&lt;b-button variant="outline-danger" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Danger&lt;/b-button&gt;
&lt;b-button variant="outline-warning" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Warning&lt;/b-button&gt;
&lt;b-button variant="outline-info" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Info&lt;/b-button&gt;
&lt;b-button variant="outline-dark" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Dark&lt;/b-button&gt;
&lt;b-button variant="outline-link" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="outline-primary" class="mb-3 mr-1">
              <i class="ri-heart-line" />Primary
            </b-button>
            <b-button variant="outline-secondary" class="mb-3 mr-1">
              <i class="ri-alert-line" />Secondary
            </b-button>
            <b-button variant="outline-success" class="mb-3 mr-1">
              <i class="ri-heart-line" />Success
            </b-button>
            <b-button variant="outline-danger" class="mb-3 mr-1">
              <i class="ri-alert-line" />Danger
            </b-button>
            <b-button variant="outline-warning" class="mb-3 mr-1">
              <i class="ri-heart-line" />Warning
            </b-button>
            <b-button variant="outline-info" class="mb-3 mr-1">
              <i class="ri-alert-line" />Info
            </b-button>
            <b-button variant="outline-dark" class="mb-3 mr-1">
              <i class="ri-alert-line" />Dark
            </b-button>
            <b-button variant="outline-link" class="mb-3 mr-1">
              <i class="ri-heart-line" />Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Rounded Outline Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-8 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-8" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="round-outlines-buttons-icons" class="text-white">
                    <code>
&lt;b-button pill variant="outline-primary" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant="outline-secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant="outline-success" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant="outline-danger" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant="outline-warning" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant="outline-info" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant="outline-dark" class="mb-3 mr-1"&gt;&lt;i class="ri-alert-line"&gt;&lt;/i&gt;Dark&lt;/b-button&gt;
&lt;b-button pill variant="outline-link" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-line"&gt;&lt;/i&gt;Link&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button pill variant="outline-primary" class="mb-3 mr-1">
              <i class="ri-heart-line" />Primary
            </b-button>
            <b-button pill variant="outline-secondary" class="mb-3 mr-1">
              <i class="ri-alert-line" />Secondary
            </b-button>
            <b-button pill variant="outline-success" class="mb-3 mr-1">
              <i class="ri-heart-line" />Success
            </b-button>
            <b-button pill variant="outline-danger" class="mb-3 mr-1">
              <i class="ri-alert-line" />Danger
            </b-button>
            <b-button pill variant="outline-warning" class="mb-3 mr-1">
              <i class="ri-heart-line" />Warning
            </b-button>
            <b-button pill variant="outline-info" class="mb-3 mr-1">
              <i class="ri-alert-line" />Info
            </b-button>
            <b-button pill variant="outline-dark" class="mb-3 mr-1">
              <i class="ri-alert-line" />Dark
            </b-button>
            <b-button pill variant="outline-link" class="mb-3 mr-1">
              <i class="ri-heart-line" />Link
            </b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Button Tags
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-9 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-9" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-tags" class="text-white">
                    <code>
&lt;b-button variant="primary" href="#"&gt;Link&lt;/b-button&gt;
&lt;b-button type="submit" variant="success"&gt;Button&lt;/b-button&gt;
&lt;input class="btn btn-danger" type="button" value="Input"&gt;
&lt;input class="btn btn-warning" type="submit" value="Submit"&gt;
&lt;input class="btn btn-info" type="reset" value="Reset"&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="primary" class="mr-1" type="button">
              Link
            </b-button>
            <b-button variant="success" class="mr-1" type="button">
              Button
            </b-button>
            <b-button variant="danger" class="mr-1" type="button">
              Input
            </b-button>
            <b-button variant="warning" class="mr-1" type="button">
              Submit
            </b-button>
            <b-button variant="info" class="mr-1" type="button">
              Reset
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Button Sizes
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-10 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-10" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-sizes" class="text-white">
                    <code>
&lt;b-button size="sm" variant="primary" class="mr-2"&gt;Small Button&lt;/b-button&gt;
&lt;b-button variant="success" class="mr-2"&gt;Button&lt;/b-button&gt;
&lt;b-button size="lg" variant="info"&gt;Large Button&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button size="sm" variant="primary" class="mr-2">
              Small Button
            </b-button>
            <b-button variant="success" class="mr-2">
              Button
            </b-button>
            <b-button size="lg" variant="info">
              Large Button
            </b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Block Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-11 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-11" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="block-buttons-21" class="text-white">
                    <code>
&lt;b-button block variant="primary"&gt;Block level button&lt;/b-button&gt;
&lt;b-button block variant="success"&gt;Block level button&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button block variant="primary">
              Block level button
            </b-button>
            <b-button block variant="success">
              Block level button
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Icons Buttons
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-12 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-12" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="block-buttons" class="text-white">
                    <code>
&lt;b-button variant="primary" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-star-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="success" class="mb-3 mr-1"&gt;&lt;i class="ri-settings-4-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="danger" class="mb-3 mr-1"&gt;&lt;i class="ri-radio-button-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="warning" class="mb-3 mr-1"&gt;&lt;i class="ri-delete-bin-2-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="info" class="mb-3 mr-1"&gt;&lt;i class="ri-lock-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="light" class="mb-3 mr-1"&gt;&lt;i class="ri-time-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="dark" class="mb-3 mr-1"&gt;&lt;i class="ri-sun-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant="link" class="mb-3 mr-1"&gt;&lt;i class="ri-moon-fill pr-0"&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;div class="d-inline-block w-100 mt-3"&gt;
  &lt;b-button variant="primary" class="mb-3 mr-1"&gt;&lt;i class="ri-heart-fill"&gt;&lt;/i&gt;Buttons&lt;/b-button&gt;
  &lt;b-button variant="secondary" class="mb-3 mr-1"&gt;&lt;i class="ri-star-fill"&gt;&lt;/i&gt;Buttons&lt;/b-button&gt;
  &lt;b-button variant="success" class="mb-3 mr-1"&gt;&lt;i class="ri-settings-4-fill"&gt;&lt;/i&gt;Buttons&lt;/b-button&gt;
  &lt;b-button variant="danger" class="mb-3 mr-1"&gt;&lt;i class="ri-radio-button-fill"&gt;&lt;/i&gt;Buttons&lt;/b-button&gt;
  &lt;b-button variant="info" class="mb-3 mr-1"&gt;&lt;i class="ri-lock-fill"&gt;&lt;/i&gt;Buttons&lt;/b-button&gt;
&lt;/div&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="primary" class="mb-3 mr-1">
              <i class="ri-heart-fill pr-0" />
            </b-button>
            <b-button variant="secondary" class="mb-3 mr-1">
              <i class="ri-star-fill pr-0" />
            </b-button>
            <b-button variant="success" class="mb-3 mr-1">
              <i class="ri-settings-4-fill pr-0" />
            </b-button>
            <b-button variant="danger" class="mb-3 mr-1">
              <i class="ri-radio-button-fill pr-0" />
            </b-button>
            <b-button variant="warning" class="mb-3 mr-1">
              <i class="ri-delete-bin-2-fill pr-0" />
            </b-button>
            <b-button variant="info" class="mb-3 mr-1">
              <i class="ri-lock-fill pr-0" />
            </b-button>
            <b-button variant="light" class="mb-3 mr-1">
              <i class="ri-time-fill pr-0" />
            </b-button>
            <b-button variant="dark" class="mb-3 mr-1">
              <i class="ri-sun-fill pr-0" />
            </b-button>
            <b-button variant="link" class="mb-3 mr-1">
              <i class="ri-moon-fill pr-0" />
            </b-button>
            <div class="d-inline-block w-100 mt-3">
              <b-button variant="primary" class="mb-3 mr-1">
                <i class="ri-heart-fill" />Buttons
              </b-button>
              <b-button variant="secondary" class="mb-3 mr-1">
                <i class="ri-star-fill" />Buttons
              </b-button>
              <b-button variant="success" class="mb-3 mr-1">
                <i class="ri-settings-4-fill" />Buttons
              </b-button>
              <b-button variant="danger" class="mb-3 mr-1">
                <i class="ri-radio-button-fill" />Buttons
              </b-button>
              <b-button variant="info" class="mb-3 mr-1">
                <i class="ri-lock-fill" />Buttons
              </b-button>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Social Disabled State
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-13 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-13" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="social-disabled-state" class="text-white">
                    <code>
&lt;b-button disabled variant="primary"&gt;Primary button&lt;/b-button&gt;
&lt;b-button disabled variant="success"&gt;Button&lt;/b-button&gt;
&lt;b-button disabled variant="outline-primary"&gt;Button&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button disabled variant="primary" class="mr-1">
              Primary button
            </b-button>
            <b-button disabled variant="success" class="mr-1">
              Button
            </b-button>
            <b-button disabled variant="outline-primary" class="mr-1">
              Button
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Buttons Toggle States
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-14 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-14" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-toggle-states" class="text-white">
                    <code>
&lt;button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"&gt;Single toggle&lt;/button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
              Single toggle
            </button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Default Buttons Active
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-15 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-15" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-active" class="text-white">
                    <code>
&lt;b-button variant="primary" class="active mb-3"&gt;Active&lt;/b-button&gt;
&lt;b-button variant="secondary" class="active mb-3"&gt;Active&lt;/b-button&gt;
&lt;b-button variant="warning" class="active mb-3"&gt;Active&lt;/b-button&gt;
&lt;b-button variant="accent" class="mb-3 mr-1" disabled&gt;Disabled&lt;/b-button&gt;
&lt;b-button variant="primary" class="mb-3 mr-1" disabled&gt;Disabled&lt;/b-button&gt;
&lt;b-button variant="outline-primary" class="mb-3 mr-1" disabled&gt;Disabled&lt;/b-button&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button variant="primary" class="active mb-3 mr-1">
              Active
            </b-button>
            <b-button variant="secondary" class="active mb-3 mr-1">
              Active
            </b-button>
            <b-button variant="warning" class="active mb-3 mr-1">
              Active
            </b-button>
            <b-button variant="accent" class="mb-3 mr-1" disabled>
              Disabled
            </b-button>
            <b-button variant="primary" class="mb-3 mr-1" disabled>
              Disabled
            </b-button>
            <b-button variant="outline-primary" class="mb-3 mr-1" disabled>
              Disabled
            </b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Button Group Sizing
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-16 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-16" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="button-group-sizing" class="text-white">
                    <code>
&lt;b-button-group size="lg"&gt;
  &lt;b-button variant="primary"&gt;Left&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Middle&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;

&lt;b-button-group class="mt-3"&gt;
  &lt;b-button variant="primary"&gt;Left&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Middle&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;

&lt;b-button-group size="sm" class="mt-3"&gt;
  &lt;b-button variant="primary"&gt;Left&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Middle&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <div class="d-block">
              <b-button-group size="lg">
                <b-button variant="primary">
                  Left
                </b-button>
                <b-button variant="primary">
                  Middle
                </b-button>
                <b-button variant="primary">
                  Right
                </b-button>
              </b-button-group>
            </div>
            <div class="d-block">
              <b-button-group class="mt-3">
                <b-button variant="primary">
                  Left
                </b-button>
                <b-button variant="primary">
                  Middle
                </b-button>
                <b-button variant="primary">
                  Right
                </b-button>
              </b-button-group>
            </div>
            <div class="d-block">
              <b-button-group size="sm" class="mt-3">
                <b-button variant="primary">
                  Left
                </b-button>
                <b-button variant="primary">
                  Middle
                </b-button>
                <b-button variant="primary">
                  Right
                </b-button>
              </b-button-group>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Buttons Group
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-17 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-17" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-group" class="text-white">
                    <code>
&lt;b-button-group&gt;
  &lt;b-button variant="primary"&gt;Left&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Middle&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-toolbar aria-label="Toolbar with button groups" class="mt-3"&gt;
  &lt;b-button-group class="mr-2"&gt;
    &lt;b-button variant="secondary"&gt;1&lt;/b-button&gt;
    &lt;b-button variant="secondary"&gt;2&lt;/b-button&gt;
    &lt;b-button variant="secondary"&gt;3&lt;/b-button&gt;
    &lt;b-button variant="secondary"&gt;4&lt;/b-button&gt;
  &lt;/b-button-group&gt;
  &lt;b-button-group class="mr-2"&gt;
    &lt;b-button variant="secondary"&gt;5&lt;/b-button&gt;
    &lt;b-button variant="secondary"&gt;6&lt;/b-button&gt;
    &lt;b-button variant="secondary"&gt;7&lt;/b-button&gt;
  &lt;/b-button-group&gt;
  &lt;b-button-group class="mr-2"&gt;
    &lt;b-button variant="secondary"&gt;8&lt;/b-button&gt;
  &lt;/b-button-group&gt;
&lt;/b-button-toolbar&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button-group>
              <b-button variant="primary">
                Left
              </b-button>
              <b-button variant="primary">
                Middle
              </b-button>
              <b-button variant="primary">
                Right
              </b-button>
            </b-button-group>
            <b-button-toolbar aria-label="Toolbar with button groups" class="mt-3">
              <b-button-group class="mr-2">
                <b-button variant="secondary">
                  1
                </b-button>
                <b-button variant="secondary">
                  2
                </b-button>
                <b-button variant="secondary">
                  3
                </b-button>
                <b-button variant="secondary">
                  4
                </b-button>
              </b-button-group>
              <b-button-group class="mr-2">
                <b-button variant="secondary">
                  5
                </b-button>
                <b-button variant="secondary">
                  6
                </b-button>
                <b-button variant="secondary">
                  7
                </b-button>
              </b-button-group>
              <b-button-group class="mr-2">
                <b-button variant="secondary">
                  8
                </b-button>
              </b-button-group>
            </b-button-toolbar>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Buttons Dropdown
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-18 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <b-collapse id="collapse-18" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="buttons-dropdown" class="text-white">
                    <code>
&lt;b-button-group class="mr-2"&gt;
  &lt;b-button variant="primary"&gt;1&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;2&lt;/b-button&gt;
  &lt;b-dropdown variant="primary" text="Dropdown"&gt;
    &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
  &lt;/b-dropdown&gt;
&lt;/b-button-group&gt;
&lt;div class="d-block mt-3"&gt;
  &lt;b-button-group vertical&gt;
    &lt;b-button variant="primary"&gt;1&lt;/b-button&gt;
    &lt;b-button variant="primary"&gt;2&lt;/b-button&gt;
    &lt;b-dropdown variant="primary" text="Dropdown"&gt;
      &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
  &lt;/b-button-group&gt;
&lt;/div&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-button-group class="mr-2">
              <b-button variant="primary">
                1
              </b-button>
              <b-button variant="primary">
                2
              </b-button>
              <b-dropdown variant="primary" text="Dropdown">
                <b-dropdown-item href="#">
                  Dropdown link
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  Dropdown link
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
            <div class="d-block mt-3">
              <b-button-group vertical>
                <b-button variant="primary">
                  1
                </b-button>
                <b-button variant="primary">
                  2
                </b-button>
                <b-dropdown variant="primary" text="Dropdown">
                  <b-dropdown-item href="#">
                    Dropdown link
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    Dropdown link
                  </b-dropdown-item>
                </b-dropdown>
              </b-button-group>
            </div>
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
  name: 'UiButtons',
  mounted () {
    core.index()
  }
}
</script>
