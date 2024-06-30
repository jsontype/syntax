<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul id="sidebar-menu" class="navbar-nav iq-main-menu">
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.dashboard')" :route="{ to: 'dashboard.home' }">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.rating')" :route="{ to: 'dashboard.rating' }">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z"
                fill="currentColor"></path>
              <path
                d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.comments')" :route="{ to: 'dashboard.comment' }">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M11.9805 13.2901C11.2705 13.2801 10.7005 12.7101 10.7005 12.0001C10.7005 11.3001 11.2805 10.7201 11.9805 10.7301C12.6905 10.7301 13.2605 11.3001 13.2605 12.0101C13.2605 12.7101 12.6905 13.2901 11.9805 13.2901ZM7.3701 13.2901C6.6701 13.2901 6.0901 12.7101 6.0901 12.0101C6.0901 11.3001 6.6601 10.7301 7.3701 10.7301C8.0801 10.7301 8.6501 11.3001 8.6501 12.0101C8.6501 12.7101 8.0801 13.2801 7.3701 13.2901ZM15.3103 12.0101C15.3103 12.7101 15.8803 13.2901 16.5903 13.2901C17.3003 13.2901 17.8703 12.7101 17.8703 12.0101C17.8703 11.3001 17.3003 10.7301 16.5903 10.7301C15.8803 10.7301 15.3103 11.3001 15.3103 12.0101Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.users')" :route="{ to: 'user.user-list' }">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                fill="currentColor"></path>
              <path
opacity="0.4"
                d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
      </side-menu>
      <!-- <side-menu is-tag="router-link" title="Category List" icon="fa-solid fa-list" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'special-pages.billing' }"></side-menu> -->
      <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.movie_list')" :icon-size="10" icon-type="solid"
        mini-title="B" :route="{ to: 'dashboard.movie-list' }">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                fill="currentColor"></path>
              <path
                d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                fill="currentColor"></path>
            </svg>
          </i> </template></side-menu>

      <side-menu
:router-link-title="$t('sidebar.tv_shows')" toggle-id="tv-shows" :caret-icon="true"
        :route="{ popup: 'false', to: 'tv-shows' }" :active="currentRoute.includes('tv-shows')" @on-click="toggle">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M13.7505 9.70303V7.68318C13.354 7.68318 13.0251 7.36377 13.0251 6.97859V4.57356C13.0251 4.2532 12.764 4.00049 12.4352 4.00049H5.7911C3.70213 4.00049 2 5.653 2 7.68318V10.1155C2 10.3043 2.07737 10.4828 2.21277 10.6143C2.34816 10.7449 2.53191 10.8201 2.72534 10.8201C3.46035 10.8201 4.02128 11.3274 4.02128 11.9944C4.02128 12.6905 3.45068 13.2448 2.73501 13.2533C2.33849 13.2533 2 13.5257 2 13.9203V16.3262C2 18.3555 3.70213 19.9995 5.78143 19.9995H12.4352C12.764 19.9995 13.0251 19.745 13.0251 19.4265V17.3963C13.0251 17.0027 13.354 16.6917 13.7505 16.6917V14.8701C13.354 14.8701 13.0251 14.5497 13.0251 14.1655V10.4076C13.0251 10.0224 13.354 9.70303 13.7505 9.70303Z"
                fill="currentColor"></path>
              <path
                d="M19.9787 11.9948C19.9787 12.69 20.559 13.2443 21.265 13.2537C21.6615 13.2537 22 13.5262 22 13.9113V16.3258C22 18.3559 20.3075 20 18.2186 20H15.0658C14.7466 20 14.4758 19.7454 14.4758 19.426V17.3967C14.4758 17.0022 14.1567 16.6921 13.7505 16.6921V14.8705C14.1567 14.8705 14.4758 14.5502 14.4758 14.1659V10.4081C14.4758 10.022 14.1567 9.70348 13.7505 9.70348V7.6827C14.1567 7.6827 14.4758 7.36328 14.4758 6.9781V4.57401C14.4758 4.25366 14.7466 4 15.0658 4H18.2186C20.3075 4 22 5.64406 22 7.6733V10.0407C22 10.2286 21.9226 10.4081 21.7872 10.5387C21.6518 10.6702 21.4681 10.7453 21.2747 10.7453C20.559 10.7453 19.9787 11.31 19.9787 11.9948Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="tv-shows" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('tv-shows')">
          <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.show_list')" icon="fa-solid fa-film"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'tv-shows.show-list' }"></side-menu>
          <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.seasons')" icon="fa-solid fa-film"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.seasons' }"></side-menu>
          <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.episodes')" icon="fa-solid fa-film"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.episodes' }"></side-menu>
        </b-collapse>
      </side-menu>

      <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.pricing')" :icon-size="10" icon-type="solid"
        mini-title="B" :route="{ to: 'special-pages.pricing' }">
        <template #icon>
          <i
class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                fill="currentColor"></path>
              <path
opacity="0.4"
                d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                fill="currentColor"></path>
              <circle cx="18" cy="11.8999" r="1" fill="currentColor"></circle>
            </svg>
          </i> </template></side-menu>
      <side-menu
:router-link-title="$t('sidebar.authentication')" toggle-id="menu-style" :caret-icon="true"
        :route="{ popup: 'false', to: 'menu-style' }" :active="currentRoute.includes('menu-style')" @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                fill="currentColor"></path>
              <path
                d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="menu-style" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('menu-style')">
          <side-menu
:router-link-title="$t('sidebar.login')" icon="fa-solid fa-arrow-right-to-bracket" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'auth.login' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.register')" icon="fa-regular fa-registered" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'auth.register' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.recover_password')" icon="fa-solid fa-voicemail " :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'auth.reset-password' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.confirm_mail')" icon="fa-regular fa-file" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'auth.varify-email' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.two_factor_authentication')" icon="fa-solid fa-fingerprint"
            :icon-size="10" icon-type="solid" mini-title="TFA" :route="{ to: 'auth.two-factor' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.account_deactivated')" icon="fa-solid fa-user-xmark"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.account-deactivated' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.lock_screen')" icon="fa-solid fa-lock" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'auth.lock-screen' }"></side-menu>
        </b-collapse>
      </side-menu>

      <side-menu
:router-link-title="$t('sidebar.utilities')" toggle-id="utilities" :caret-icon="true"
        :route="{ popup: 'false', to: 'errors' }" :active="currentRoute.includes('errors')" @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="utilities" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('errors')">
          <side-menu
:router-link-title="$t('sidebar.error_404')" icon="fa-solid fa-circle-exclamation" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'error.404' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.error_500')" icon="fa-solid fa-circle-exclamation" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'error.500' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.maintenance')" icon="fa-solid fa-box-archive" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'error.maintenance' }"></side-menu>
          <side-menu
:router-link-title="$t('sidebar.coming_soon')" icon="fa-solid fa-clock" :icon-size="10"
            icon-type="solid" mini-title="" :route="{ to: 'error.coming-soon' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.blank_page')"
        :route="{ to: 'dashboard.blank-page' }">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z"
                fill="currentColor"></path>
            </svg>
          </i> </template></side-menu>
      <!-- <side-menu title="ELEMENTS" :static-item="true"></side-menu> -->
      <side-menu
:router-link-title="$t('sidebar.ui_elements')" toggle-id="ui-elements" :caret-icon="true"
        :route="{ popup: 'false', to: 'ui-elements' }" :active="currentRoute.includes('ui-elements')"
        @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z"
                fill="currentColor"></path>
              <path
                d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="ui-elements" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('ui-elements')">
          <side-menu
is-tag="router-link" icon="fa-regular fa-user" :router-link-title="$t('sidebar.avatars')"
            :icon-size="10" icon-type="solid" mini-title="A" :route="{ to: 'ui-elements.avatars' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-regular fa-bell" :router-link-title="$t('sidebar.alerts')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.alerts' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-brands fa-atlassian" :router-link-title="$t('sidebar.badge')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.badge' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-bars" :router-link-title="$t('sidebar.bread_crumb')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.breadcrumb' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-ticket-simple" :router-link-title="$t('sidebar.buttons')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.buttons' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-server" :router-link-title="$t('sidebar.buttons_group')"
            :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.buttonsgroup' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-expand" :router-link-title="$t('sidebar.offcanavas')"
            :icon-size="10" icon-type="solid" mini-title="O" :route="{ to: 'ui-elements.offcanvas' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-palette" :router-link-title="$t('sidebar.colors')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.ui-color' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-regular fa-address-card" :router-link-title="$t('sidebar.cards')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.cards' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-sliders" :router-link-title="$t('sidebar.carousel')"
            :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'ui-elements.carousel' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-table-cells-large" :router-link-title="$t('sidebar.grid')"
            :icon-size="10" icon-type="solid" mini-title="G" :route="{ to: 'ui-elements.grid' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-image" :router-link-title="$t('sidebar.images')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.images' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-list-check" :router-link-title="$t('sidebar.list_group')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.listgroup' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-table-columns" :router-link-title="$t('sidebar.modal')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.modal' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-bell" :router-link-title="$t('sidebar.notifications')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.notifications' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-ellipsis" :router-link-title="$t('sidebar.pagination')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.pagination' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-eraser" :router-link-title="$t('sidebar.popovers')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.popovers' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-keyboard" :router-link-title="$t('sidebar.typography')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.typography' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-layer-group" :router-link-title="$t('sidebar.tabs')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.tabs' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-magnet fa-rotate-180"
            :router-link-title="$t('sidebar.tooltips')" :icon-size="10" icon-type="solid" mini-title=""
            :route="{ to: 'ui-elements.tooltips' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-video" :router-link-title="$t('sidebar.video')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.video' }"></side-menu>
        </b-collapse>
      </side-menu>
      <!-- <side-menu is-tag="router-link" title="Colors" icon="ticket" :route="{ to: 'default.ui-color' }"></side-menu> -->
      <side-menu
:router-link-title="$t('sidebar.widgets')" toggle-id="widget" :caret-icon="true"
        :route="{ popup: 'false', to: 'widget' }" :active="currentRoute.includes('widget')" @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                fill="currentColor"></path>
              <path
                d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="widgets" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('widget')">
          <side-menu
is-tag="router-link" icon="fa-solid fa-box" :router-link-title="$t('sidebar.widgets_basic')"
            :icon-size="10" icon-type="solid" mini-title="WB" :route="{ to: 'widget.widget-basic' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-box" :router-link-title="$t('sidebar.widgets_chart')"
            :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-chart' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-box" :router-link-title="$t('sidebar.widgets_card')"
            :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-card' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu
:router-link-title="$t('sidebar.form')" toggle-id="form" :caret-icon="true"
        :route="{ popup: 'false', to: 'form' }" :active="currentRoute.includes('form')" @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                fill="currentColor"></path>
              <path
fill-rule="evenodd" clip-rule="evenodd"
                d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                fill="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="form" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('form')">
          <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.elements')" icon="fa-solid fa-book"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'form.elements' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-wand-magic-sparkles"
            :router-link-title="$t('sidebar.wizard')" :icon-size="10" icon-type="solid" mini-title=""
            :route="{ to: 'form.wizard' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-pen-to-square" :router-link-title="$t('sidebar.validation')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'form.validation' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu
:router-link-title="$t('sidebar.table')" toggle-id="table" :caret-icon="true"
        :route="{ popup: 'false', to: 'table' }" :active="currentRoute.includes('table')" @on-click="toggle">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none">
              <path
d="M2 5C2 4.44772 2.44772 4 3 4H8.66667H21C21.5523 4 22 4.44772 22 5V8H15.3333H8.66667H2V5Z"
                fill="currentColor" stroke="currentColor"></path>
              <path
                d="M6 8H2V11M6 8V20M6 8H14M6 20H3C2.44772 20 2 19.5523 2 19V11M6 20H14M14 8H22V11M14 8V20M14 20H21C21.5523 20 22 19.5523 22 19V11M2 11H22M2 14H22M2 17H22M10 8V20M18 8V20"
                stroke="currentColor"></path>
            </svg>
          </i>
        </template>
        <b-collapse
id="table" tag="ul" class="sub-nav" accordion="sidebar-menu"
          :visible="currentRoute.includes('table')">
          <side-menu
is-tag="router-link" icon="fa-brands fa-bootstrap"
            :router-link-title="$t('sidebar.bootstrap_table')" :icon-size="10" icon-type="solid" mini-title=""
            :route="{ to: 'table.bootstrap-table' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-table-list" :router-link-title="$t('sidebar.data_table')"
            :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'table.data-table' }"></side-menu>
          <side-menu
is-tag="router-link" icon="fa-solid fa-table-list"
            :router-link-title="$t('sidebar.bordered_table')" :icon-size="10" icon-type="solid" mini-title=""
            :route="{ to: 'table.border-table' }"></side-menu>
          <!-- <side-menu is-tag="router-link" icon="fa-solid fa-table-list" title="Fancy Table" :icon-size="10" icon-type="solid" mini-title="FT" :route="{ to: 'table.fancy-table' }"></side-menu> -->
          <side-menu
is-tag="router-link" icon="fa-solid fa-table-cells" :router-link-title="$t('sidebar.fixed_table')"
            :icon-size="10" icon-type="solid" mini-title="FT" :route="{ to: 'table.fixed-table' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.fontawesome')" :icon-size="10" icon-type="solid"
        mini-title="B" :route="{ to: 'icons.font-awesome' }">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
opacity="0.4"
                d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                fill="currentColor"></path>
              <path
                d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                fill="currentColor"></path>
              <path
opacity="0.4"
                d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                fill="currentColor"></path>
            </svg>
          </i> </template></side-menu>
      <side-menu
is-tag="router-link" :router-link-title="$t('sidebar.access_control')" :icon-size="10"
        icon-type="solid" mini-title="B" :route="{ to: 'icons.access-control' }">
        <template #icon>
          <i
class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard"
            data-bs-original-title="Dashboard">
            <i class="fas fa-user-lock"></i>
          </i>
        </template>
      </side-menu>
      <br>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from '../custom/sidebar/DefaultSidebar.vue';
import SideMenu from '../custom/nav/SideMenu.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const currentRoute = ref('');
const route = useRoute();
const toggle = (route) => {
  if (route === currentRoute.value && route.includes('.')) {
    const menu = currentRoute.value.split('.');
    return (currentRoute.value = menu[menu.length - 2]);
  }
  if (route !== currentRoute.value && currentRoute.value.includes(route)) {
    return (currentRoute.value = '');
  }
  if (route !== currentRoute.value) {
    return (currentRoute.value = route);
  }
  if (route === currentRoute.value) {
    return (currentRoute.value = '');
  }
  return (currentRoute.value = '');
};
toggle(route.name);
</script>
