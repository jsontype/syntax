<template>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb With Icon</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with icon</p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item active" aria-current="page">
                  <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item">
                  <a href="#">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-soft-light">
                <li class="breadcrumb-item">
                  <a href="#">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary</code></p>
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb bg-primary">
                <li class="breadcrumb-item active text-white" aria-current="page">Home</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary">
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">Home</a>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary mb-0">
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">Library</a>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb With Icon</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary">
                <li class="breadcrumb-item active text-white" aria-current="page">
                  <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary">
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary mb-0">
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" class="text-white">Library</a>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb With Icon</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary-subtle</code></p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle">
                <li class="breadcrumb-item active" aria-current="page">
                  <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle">
                <li class="breadcrumb-item">
                  <a href="#">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle mb-0">
                <li class="breadcrumb-item">
                  <a href="#">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Breadcrumb With Icon</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-danger-subtle</code></p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle">
                <li class="breadcrumb-item active" aria-current="page">
                  <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle">
                <li class="breadcrumb-item">
                  <a href="#" class="text-danger">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle mb-0">
                <li class="breadcrumb-item">
                  <a href="#" class="text-danger">
                    <svg width="14" height="14" class="me-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" class="text-danger">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
