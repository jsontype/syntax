import React from 'react';
import App from './../app.jsx';
import { Navigate } from 'react-router-dom';

import Dashboard from './../pages/dashboard/dashboard.js';
import Analytics from './../pages/analytics/analytics.js';
import EmailInbox from './../pages/email/inbox.js';
import EmailCompose from './../pages/email/compose.js';
import EmailDetail from './../pages/email/detail.js';
import Widgets from './../pages/widgets/widgets.js';
import PosCustomerOrder from './../pages/pos/customer-order.js';
import PosKitchenOrder from './../pages/pos/kitchen-order.js';
import PosCounterCheckout from './../pages/pos/counter-checkout.js';
import PosTableBooking from './../pages/pos/table-booking.js';
import PosMenuStock from './../pages/pos/menu-stock.js';
import UiBootstrap from './../pages/ui/bootstrap.js';
import UiButtons from './../pages/ui/buttons.js';
import UiCard from './../pages/ui/card.js';
import UiIcons from './../pages/ui/icons.js';
import UiModalNotifications from './../pages/ui/modal-notifications.js';
import UiTypography from './../pages/ui/typography.js';
import UiTabsAccordions from './../pages/ui/tabs-accordions.js';
import FormElements from './../pages/form/elements.js';
import FormPlugins from './../pages/form/plugins.js';
import FormWizards from './../pages/form/wizards.js';
import TableElements from './../pages/table/elements.js';
import TablePlugins from './../pages/table/plugins.js';
import ChartJs from './../pages/charts/js.js';
import ChartApex from './../pages/charts/apex.js';
import Map from './../pages/map/map.js';
import LayoutStarter from './../pages/layout/starter.js';
import LayoutFixedFooter from './../pages/layout/fixed-footer.js';
import LayoutFullHeight from './../pages/layout/full-height.js';
import LayoutFullWidth from './../pages/layout/full-width.js';
import LayoutBoxedLayout from './../pages/layout/boxed-layout.js';
import LayoutCollapsedSidebar from './../pages/layout/collapsed-sidebar.js';
import LayoutTopNav from './../pages/layout/top-nav.js';
import LayoutMixedNav from './../pages/layout/mixed-nav.js';
import LayoutMixedNavBoxedLayout from './../pages/layout/mixed-nav-boxed-layout.js';
import PagesScrumBoard from './../pages/pages/scrum-board.js';
import PagesProducts from './../pages/pages/products.js';
import PagesProductDetails from './../pages/pages/product-details.js';
import PagesOrders from './../pages/pages/orders.js';
import PagesOrderDetails from './../pages/pages/order-details.js';
import PagesGallery from './../pages/pages/gallery.js';
import PagesSearchResults from './../pages/pages/search-results.js';
import PagesComingSoon from './../pages/pages/coming-soon.js';
import PagesError from './../pages/pages/error.js';
import PagesLogin from './../pages/pages/login.js';
import PagesRegister from './../pages/pages/register.js';
import PagesMessenger from './../pages/pages/messenger.js';
import PagesDataManagement from './../pages/pages/data-management.js';
import PagesFileManager from './../pages/pages/file-manager.js';
import PagesPricing from './../pages/pages/pricing.js';
import Landing from './../pages/landing/landing.js';
import Profile from './../pages/profile/profile.js';
import Calendar from './../pages/calendar/calendar.js';
import Settings from './../pages/settings/settings.js';
import Helper from './../pages/helper/helper.js';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{ path: '', element: <Navigate to='/dashboard' /> },
    	{ path: 'dashboard', element: <Dashboard /> },
    	{ path: 'analytics', element: <Analytics /> },
    	{ path: 'email/*', 
    		children: [
					{ path: 'inbox', element: <EmailInbox /> },
					{ path: 'compose', element: <EmailCompose /> },
					{ path: 'detail', element: <EmailDetail /> }
				]
			},
    	{ path: 'widgets', element: <Widgets /> },
    	{ path: 'pos/*', 
    		children: [
					{ path: 'customer-order', element: <PosCustomerOrder /> },
					{ path: 'kitchen-order', element: <PosKitchenOrder /> },
					{ path: 'counter-checkout', element: <PosCounterCheckout /> },
					{ path: 'table-booking', element: <PosTableBooking /> },
					{ path: 'menu-stock', element: <PosMenuStock /> }
				]
			},
    	{ path: 'ui/*', 
    		children: [
					{ path: 'bootstrap', element: <UiBootstrap /> },
					{ path: 'buttons', element: <UiButtons /> },
					{ path: 'card', element: <UiCard /> },
					{ path: 'icons', element: <UiIcons /> },
					{ path: 'modal-notifications', element: <UiModalNotifications /> },
					{ path: 'typography', element: <UiTypography /> },
					{ path: 'tabs-accordions', element: <UiTabsAccordions /> },
				]
			},
    	{ path: 'form/*', 
    		children: [
					{ path: 'elements', element: <FormElements /> },
					{ path: 'plugins', element: <FormPlugins /> },
					{ path: 'wizards', element: <FormWizards /> }
				]
			},
    	{ path: 'table/*', 
    		children: [
					{ path: 'elements', element: <TableElements /> },
					{ path: 'plugins', element: <TablePlugins /> }
				]
			},
    	{ path: 'chart/*', 
    		children: [
					{ path: 'chart-js', element: <ChartJs /> },
					{ path: 'chart-apex', element: <ChartApex /> }
				]
			},
    	{ path: 'layout/*', 
    		children: [
					{ path: 'starter-page', element: <LayoutStarter /> },
					{ path: 'fixed-footer', element: <LayoutFixedFooter /> },
					{ path: 'full-height', element: <LayoutFullHeight /> },
					{ path: 'full-width', element: <LayoutFullWidth /> },
					{ path: 'boxed-layout', element: <LayoutBoxedLayout /> },
					{ path: 'collapsed-sidebar', element: <LayoutCollapsedSidebar /> },
					{ path: 'top-nav', element: <LayoutTopNav /> },
					{ path: 'mixed-nav', element: <LayoutMixedNav /> },
					{ path: 'mixed-nav-boxed-layout', element: <LayoutMixedNavBoxedLayout /> }
				]
			},
    	{ path: 'pages/*', 
    		children: [
					{ path: 'scrum-board', element: <PagesScrumBoard /> },
					{ path: 'products', element: <PagesProducts /> },
					{ path: 'product-details', element: <PagesProductDetails /> },
					{ path: 'orders', element: <PagesOrders /> },
					{ path: 'order-details', element: <PagesOrderDetails /> },
					{ path: 'gallery', element: <PagesGallery /> },
					{ path: 'search-results', element: <PagesSearchResults /> },
					{ path: 'coming-soon', element: <PagesComingSoon /> },
					{ path: 'error', element: <PagesError /> },
					{ path: 'login', element: <PagesLogin /> },
					{ path: 'register', element: <PagesRegister /> },
					{ path: 'messenger', element: <PagesMessenger /> },
					{ path: 'data-management', element: <PagesDataManagement /> },
					{ path: 'file-manager', element: <PagesFileManager /> },
					{ path: 'pricing', element: <PagesPricing /> }
				]
			},
    	{ path: 'map', element: <Map /> },
    	{ path: 'landing', element: <Landing /> },
    	{ path: 'profile', element: <Profile /> },
    	{ path: 'calendar', element: <Calendar /> },
    	{ path: 'settings', element: <Settings /> },
    	{ path: 'helper', element: <Helper /> },
    	{ path: '*', element: <PagesError /> }
		]
  }
];


export default AppRoute;