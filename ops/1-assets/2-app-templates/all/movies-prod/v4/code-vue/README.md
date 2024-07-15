https://v5.getbootstrap.com/docs/5.0/components/navs/#events

# streamit Vue Dashboard

## Project setup
Open terminal or CMD and go the root directory of the template
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
Visit URL: http://localhost:8080
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

### Components
#### All Components List
- BreadCrumb (Layout)
- iq-card (Global)
- AmChart (Plugin)
- ApexChart (Plugin)
- HighChart (Plugin)
- nested-draggable (Plugin)
- MiniFooter (Layout)
- Loader (Layout)
- Lottie (Animation Plugin)
- CollapseMenu (Core)
- HoverMenu (Core)
- DefaultNavBar (Layout)
- MenuNavbar (Layout)
- NoResults (Algolia)
- Global Search (DefaultNavBar)
- Sidebar (Layout)
- SmallSidebar (Layout)
- RightSideBar (Layout)
- Swiper (Global)
- tab-nav (Global)
- tab-nav-items (Global)
- tab-content (Global)
- tab-content-item (Global)
- TimeLine (Global)
- TreeView (Global)
- ChatItem (Chat)
- ToggleButton (Chat)
- ToggleContent (Chat)

#### Component Usage WIP
- ##### BreadCrumb

BreadCrumb Item Set With Setting/activePage this state
sr/config/plugininit.js => activeRoute 
example of book mark state

```
activePage: {
    name: 'Dashboard',
    breadCrumb: [
      {
        html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
        to: { name: 'dashboard.home-1' }
      },
      {
        text: '',
        href: '#'
      }
    ]
  }
``` 

- ##### iq-card (global)

iq-card is global component this card use is in many times there has following props and slots

##### ***props***

className: Type(String), Default(''), Append in main div - iq-card + className
bodyClass: Type(String), Default(''), Append in card body div - iq-card-body + bodyClass 
headerClass: Type(String), Default(''), Append in card header div - iq-card-header + headerClass
footerClass: Type(String), Default(''), Append in card footer div - card-footer + footerClass

##### ***slots***
***If there is slot not use div not show***

default: Append without body

cardImage: Before card header append slot content

headerTitle: Before Body card header append in left side

headerAction:  Before Body card header append in right side

body: Before Card Footer append main content in card body div

footer: After Body Append bottom of card in card-footer div 


- ##### MiniFooter
MiniFooter Has 2 slots left & right to append content

- ##### Lottie
##### ***props***
option: Type(Object), Required(true), Animation Json Object to plugin init

className: Type(String), Default('bodymovin'), for extra style add this class

- ##### CollapseMenu
This menu is use with collapse functionality with accordian
##### ***props***
items: Type(Array), Menu Children Array

className: Type(String), Default('iq-menu'), Append in main ul

open: Type(Boolean), Default(false), Hide Show children list

idName: Type(String), Default('sidebar'), For every ul and there child assign unique id

accordianName: Type(String), Default('sidebar'), For open single collapse at the time 

sidebarGroupTitle: Type(Boolean), Default(true), For Menu group title hide and show


- ##### HoverMenu
This menu is use with mouse hover
##### ***props***
items: Type(Array), Menu Children Array

className: Type(String), Default('iq-menu'), Append in main ul

open: Type(Boolean), Default(false), Hide Show children list

idName: Type(String), Default('sidebar'), For every ul and there child assign unique id 

sidebarGroupTitle: Type(Boolean), Default(true), For Menu group title hide and show 

- ##### DefaultNavBar

##### ***props***
homeURL: Type(Object), Default({ name: 'dashboard.home-1' })

logo: Type(String), Default(require('../../../assets/images/logo.png'))

horizontal: Type(Boolean), Default(false), 

items: Type(Array), Menu Array, Sidebar Json

sidebarGroupTitle: Type(Boolean), Default(true), For Menu group title hide and show
##### ***slots***

There has 2 slots
responsiveRight: This slot content hide on mobile device
right: This Slot content show in every device

- ##### HoverNavBar

##### ***props***
homeURL: Type(Object), Default({ name: 'dashboard.home-1' })

logo: Type(String), Default(require('../../../assets/images/logo.png'))

horizontal: Type(Boolean), Default(false), 

items: Type(Array), Menu Array, Sidebar Json

sidebarGroupTitle: Type(Boolean), Default(true), For Menu group title hide and show
##### ***slots***

There has 2 slots
responsiveRight: This slot content hide on mobile device
right: This Slot content show in every device


#### Layout Setting
- Dashboard 1

```
meta: { auth: true, name: 'Home 1', layout: 'mini-sidebar-right-fix' }
```
- Dashboard 2 (Default)

```
meta: { auth: true, name: 'Home 1' }
```
- Menu Design / Horizontal Menu

```
meta: { auth: true, name: 'Home 1', layout: 'nav-with-menu' }
```
- Menu Design / Horizontal Top Menu

```
meta: { auth: true, name: 'Home 1', layout: 'nav-bottom-menu' }
```
- Menu Design / Two Sidebar

```
meta: { auth: true, name: 'Home 1', layout: 'two-sidebar' }
```
- Menu Design / Icon With Text

```
meta: { auth: true, name: 'Home 1', layout: 'icon-with-text' }
``` 

#### Optimization Points
- Define New Route 

```
const Dashboard1 = () => import('../views/Dashboards/Dashboard1.vue')
```

- For Dynamic Import user arrow function to when needed then import usage (Router, Components, Functions)
- Global Component Import When Component Usage More Then 5 except (Charts, Dependent Component)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Style Change every style replace

Swiper Slider Changes
- #post-slider .slick-arrow { top: 14px; }

ltr
- #post-slider .slick-arrow.left { left: auto; right: 70px; }
- #post-slider .slick-arrow.right { left: auto; right: 35px; }

rtl
- #post-slider .slick-arrow.left { right: auto; left: 35px; }
- #post-slider .slick-arrow.right { right: auto; left: 70px; }