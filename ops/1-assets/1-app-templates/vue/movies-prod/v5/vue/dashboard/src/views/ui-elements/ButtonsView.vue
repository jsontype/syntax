<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Default Buttons</h4>
          </div>
        </b-card-header>
        <div class="card-body">
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2 me-1">Primary</b-button>
          <b-button variant="secondary" class="mt-2 me-1">Secondary</b-button>
          <b-button variant="success" class="mt-2 me-1">Success</b-button>
          <b-button variant="danger" class="mt-2 me-1">Danger</b-button>
          <b-button variant="warning" class="mt-2 me-1">Warning</b-button>
          <b-button variant="info" class="mt-2 me-1">Info</b-button>
          <b-button variant="light" class="mt-2 me-1">Light</b-button>
          <b-button variant="dark" class="mt-2 me-1">Dark</b-button>
          <b-button variant="link" class="mt-2 me-1">Link</b-button>
        </div>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Default Buttons Rounded Shape</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2" rounded pill>Primary</b-button>{{ "" }}
          <b-button variant="secondary" class="mt-2" rounded pill>Secondary</b-button>{{ "" }}
          <b-button variant="success" class="mt-2" rounded pill>Success</b-button>{{ "" }}
          <b-button variant="danger" class="mt-2" rounded pill>Danger</b-button>{{ "" }}
          <b-button variant="warning" class="mt-2" rounded pill>Warning</b-button>{{ "" }}
          <b-button variant="info" class="mt-2" rounded pill>Info</b-button>{{ "" }}
          <b-button variant="light" class="mt-2" rounded pill>Light</b-button>{{ "" }}
          <b-button variant="dark" class="mt-2" rounded pill>Dark</b-button>{{ "" }}
          <b-button variant="link" class="mt-2" rounded pill>Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Outline Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="outline-primary" class="mt-2">Primary</b-button>{{ "" }}
          <b-button variant="outline-secondary" class="mt-2">Secondary</b-button>{{ "" }}
          <b-button variant="outline-success" class="mt-2">Success</b-button>{{ "" }}
          <b-button variant="outline-danger" class="mt-2">Danger</b-button>{{ "" }}
          <b-button variant="outline-warning" class="mt-2">Warning</b-button>{{ "" }}
          <b-button variant="outline-info" class="mt-2">Info</b-button>{{ "" }}
          <b-button variant="outline-dark" class="mt-2 text-dark">Dark</b-button>{{ "" }}
          <b-button variant="outline-link" class="mt-2">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Rounded Outline Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="outline-primary" class="mt-2" rounded pill>Primary</b-button>{{ "" }}
          <b-button variant="outline-secondary" class="mt-2" rounded pill>Secondary</b-button>{{ "" }}
          <b-button variant="outline-success" class="mt-2" rounded pill>Success</b-button>{{ "" }}
          <b-button variant="outline-danger" class="mt-2" rounded pill>Danger</b-button>{{ "" }}
          <b-button variant="outline-warning" class="mt-2" rounded pill>Warning</b-button>{{ "" }}
          <b-button variant="outline-info" class="mt-2" rounded pill>Info</b-button>{{ "" }}
          <b-button variant="outline-dark" class="mt-2 text-dark" rounded pill>Dark</b-button>{{ "" }}
          <b-button variant="outline-link" class="mt-2" rounded pill>Link</b-button>{{ "" }}
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Soft Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary-subtle" class="mb-1">Primary</b-button>{{ "" }}
          <b-button variant="secondary-subtle" class="mb-1">Secondary</b-button>{{ "" }}
          <b-button variant="success-subtle" class="mb-1">Success</b-button>{{ "" }}
          <b-button variant="danger-subtle" class="mb-1">Danger</b-button>{{ "" }}
          <b-button variant="warning-subtle" class="mb-1">Warning</b-button>{{ "" }}
          <b-button variant="info-subtle" class="mb-1">Info</b-button>{{ "" }}
          <b-button variant="dark-subtle" class="mb-1 text-dark">Dark</b-button>{{ "" }}
          <b-button variant="link-subtle" class="me-1">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Rounded Soft Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary-subtle" class="mb-1" rounded pill>Primary</b-button>{{ "" }}
          <b-button variant="secondary-subtle" class="mb-1" rounded pill>Secondary</b-button>{{ "" }}
          <b-button variant="success-subtle" class="mb-1" rounded pill>Success</b-button>{{ "" }}
          <b-button variant="danger-subtle" class="mb-1" rounded pill>Danger</b-button>{{ "" }}
          <b-button variant="warning-subtle" class="mb-1" rounded pill>Warning</b-button>{{ "" }}
          <b-button variant="info-subtle" class="mb-1" rounded pill>Info</b-button>{{ "" }}
          <b-button variant="dark-subtle" class="mb-1 text-dark" rounded pill>Dark</b-button>{{ "" }}
          <b-button variant="link-subtle" class="mb-1" rounded pill>Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Default Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2 me-1">
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Primary
          </b-button>
          <b-button variant="secondary" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Secondary
          </b-button>
          <b-button variant="success" class="mt-2 me-1">
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Success
          </b-button>
          <b-button variant="danger" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Danger
          </b-button>
          <b-button variant="warning" class="mt-2 me-1">
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Warning
          </b-button>
          <b-button variant="info" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Info
          </b-button>
          <b-button variant="light" class="mt-2 me-1">
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Light
          </b-button>
          <b-button variant="dark" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Dark
          </b-button>
          <b-button variant="link" class="mt-2 me-1">
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Default Buttons Rounded Shape</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2 me-1" rounded pill>
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Primary
          </b-button>
          <b-button variant="secondary" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Secondary
          </b-button>
          <b-button variant="success" class="mt-2 me-1" rounded pill>
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Success
          </b-button>
          <b-button variant="danger" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Danger
          </b-button>
          <b-button variant="warning" class="mt-2 me-1" rounded pill>
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Warning
          </b-button>
          <b-button variant="info" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Info
          </b-button>
          <b-button variant="light" class="mt-2 me-1" rounded pill>
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Light
          </b-button>
          <b-button variant="dark" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Dark
          </b-button>
          <b-button variant="link" class="mt-2 me-1" rounded pill>
            <svg width="15" height="16" class="me-1" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
d="M12.7162 14.2236H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
d="M12.7162 10.0371H5.49622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
d="M8.25131 5.86035H5.49631" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Outline Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="outline-primary" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Primary
          </b-button>
          <b-button variant="outline-secondary" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Secondary
          </b-button>
          <b-button variant="outline-success" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Success
          </b-button>
          <b-button variant="outline-danger" class="btn btn-outline-danger mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Danger
          </b-button>
          <b-button variant="outline-warning" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Warning
          </b-button>
          <b-button variant="outline-info" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Info
          </b-button>
          <b-button variant="outline-dark" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Dark
          </b-button>
          <b-button variant="outline-link" class="mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Rounded Outline Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="outline-primary" class="btn btn-outline-primary rounded-pill mt-2 me-1">
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Primary
          </b-button>
          <b-button variant="outline-secondary" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Secondary
          </b-button>
          <b-button variant="outline-success" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Success
          </b-button>
          <b-button variant="outline-danger" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Danger
          </b-button>
          <b-button variant="outline-warning" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Warning
          </b-button>
          <b-button variant="outline-info" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Info
          </b-button>
          <b-button variant="outline-dark" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M11.0024 10.4147V7.3147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
d="M10.995 13.5H11.005" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Dark
          </b-button>
          <b-button variant="outline-link" class="mt-2 me-1" rounded pill>
            <svg width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Button Tags</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <a class="mt-2 btn btn-primary me-1" href="#" role="button">Link</a>
          <b-button variant="" class="mt-2 btn btn-success me-1" type="submit">Button</b-button>
          <input class="mt-2 btn btn-danger me-1" type="button" value="Input" />
          <input class="mt-2 btn btn-warning me-1" type="submit" value="Submit" />
          <input class="mt-2 btn btn-info me-1" type="reset" value="Reset" />
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Buttons Sizes</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="btn-sm me-2 mt-2">Small Button</b-button>
          {{ '' }}
          <b-button variant="success" class="me-2 mt-2">Button</b-button>
          {{ '' }}
          <b-button variant="info" class="btn-lg mt-2">Large Button</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Block Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="w-100 mb-2">Block level button</b-button>
          <b-button variant="success" class="w-100">Block level button</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Icons Buttons</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </b-button>
          <b-button variant="secondary" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </b-button>
          <b-button variant="success" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </b-button>
          <b-button variant="danger" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-video" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
              <rect x="3" y="6" width="12" height="12" rx="2" />
            </svg>
          </b-button>
          <b-button variant="warning" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </b-button>
          <b-button variant="info" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg>
          </b-button>
          <b-button variant="light" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
          </b-button>
          <b-button variant="dark" class="mt-2 me-1">
            <svg
xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          </b-button>
          <div class="d-inline-block w-100">
            <b-button variant="primary" class="mt-2 me-1">
              <svg
width="16" height="15" class="me-1" viewBox="0 0 22 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Buttons
            </b-button>
            <b-button variant="secondary" class="mt-2 me-1">
              <svg
class="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              Buttons
            </b-button>
            <b-button variant="success" class="mt-2 me-1">
              <svg
class="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Buttons
            </b-button>
            <b-button variant="danger" class="mt-2 me-1">
              <svg
class="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                <rect x="3" y="6" width="16" height="15" rx="2" />
              </svg>
              Buttons
            </b-button>
            <b-button variant="info" class="mt-2 me-1">
              <svg
class="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
              Buttons
            </b-button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Social Disabled State</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="mt-2" disabled>Primary button</b-button>{{ "" }}
          <b-button variant="success" class="mt-2" disabled>Button</b-button>{{ "" }}
          <b-button variant="outline-primary" class="mt-2" disabled>Button</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Buttons Toggle States</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" data-bs-toggle="button" aria-pressed="false">Single toggle</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Default Buttons Active</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button variant="primary" class="active mt-2 me-1">Active</b-button>
          <b-button variant="secondary" class="active mt-2 me-1">Active</b-button>
          <b-button variant="warning" class="active mt-2 me-1">Active</b-button>
          <b-button variant="accent" class="mt-2 me-1" disabled>Disabled</b-button>
          <b-button variant="primary" class="mt-2 me-1" disabled>Disabled</b-button>
          <b-button variant="outline-primary" class="mt-2 me-1" disabled>Disabled</b-button>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Button Group Sizing</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <div class="d-block">
            <b-button-group class="btn-group-lg" role="group" aria-label="Basic example">
              <b-button variant="primary" class="mt-2">Left</b-button>
              <b-button variant="primary" class="mt-2">Middle</b-button>
              <b-button variant="primary" class="mt-2">Right</b-button>
            </b-button-group>
            <div class="d-block">
              <b-button-group class="mt-2 btn-group-medium" role="group" aria-label="Basic example">
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="d-block">
              <b-button-group class="btn-group-sm mt-2" role="group" aria-label="Basic example">
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Button Group</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button-group class="btn-group-medium" role="group" aria-label="Basic example">
            <b-button variant="primary">Left</b-button>
            <b-button variant="primary">Middle</b-button>
            <b-button variant="primary">Right</b-button>
          </b-button-group>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <b-button-group class="btn-group-medium mt-2 me-2" role="group" aria-label="First group">
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button variant="primary">3</b-button>
              <b-button variant="primary">4</b-button>
            </b-button-group>
            <b-button-group class="btn-group-medium me-2 mt-2" role="group" aria-label="Second group">
              <b-button variant="secondary">5</b-button>
              <b-button variant="secondary">6</b-button>
              <b-button variant="secondary">7</b-button>
            </b-button-group>
            <b-button-group class="btn-group-medium mt-2" role="group" aria-label="Third group">
              <b-button variant="info">8</b-button>
            </b-button-group>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Button Dropdown</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever</p>
          <b-button-group class="btn-group-medium">
            <b-button variant="primary">1</b-button>
            <b-button variant="primary">2</b-button>
            <b-button-group class="btn-group-medium" role="group">
              <b-dropdown variant="primary" text="Dropdown ">
                <b-dropdown-item variant="none" href="#">Dropdown link</b-dropdown-item>
                <b-dropdown-item variant="none" href="#">Dropdown link</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-button-group>
          <div class="d-block mt-2">
            <b-button-group vertical>
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button-group>
                <b-dropdown variant="primary" text="Dropdown ">
                  <b-dropdown-item variant="none" href="#">Dropdown link</b-dropdown-item>
                  <b-dropdown-item variant="none" href="#">Dropdown link</b-dropdown-item>
                </b-dropdown>
              </b-button-group>
            </b-button-group>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</script>
