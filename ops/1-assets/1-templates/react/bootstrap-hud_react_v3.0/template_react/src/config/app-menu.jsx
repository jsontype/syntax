const Menu = [
	{ is_header: true, title: 'Navigation' },
	{ path: '/dashboard', icon: 'bi bi-cpu', title: 'Dashboard' },
	{ path: '/analytics', icon: 'bi bi-bar-chart', title: 'Analytics' },
	{ path: '/email', icon: 'bi bi-envelope', title: 'Email',
		children: [
			{ path: '/email/inbox', title: 'Inbox' }, 
			{ path: '/email/compose', title: 'Compose' }, 
			{ path: '/email/detail', title: 'Detail' }
		]
	}, 
	{ is_divider: true }, 
	{ is_header: true, title: 'Components' }, 
	{ path: '/widgets', icon: 'bi bi-columns-gap', title: 'Widgets' }, 
	{ path: '/pos', icon: 'bi bi-bag-check', title: 'POS System',
		highlight: true,
		children: [
			{ path: '/pos/customer-order', title: 'Customer Order' }, 
			{ path: '/pos/kitchen-order', title: 'Kitchen Order' }, 
			{ path: '/pos/counter-checkout', title: 'Counter Checkout' }, 
			{ path: '/pos/table-booking', title: 'Table Booking' }, 
			{ path: '/pos/menu-stock', title: 'Menu Stock' }
		]
	}, 
	{ path: '/ui', icon: 'fa fa-heart', title: 'UI Kits',
		children: [
			{ path: '/ui/bootstrap', title: 'Bootstrap' }, 
			{ path: '/ui/buttons', title: 'Buttons' }, 
			{ path: '/ui/card', title: 'Card' }, 
			{ path: '/ui/icons', title: 'Icons' }, 
			{ path: '/ui/modal-notifications', title: 'Modal & Notifications' }, 
			{ path: '/ui/typography', title: 'Typography' }, 
			{ path: '/ui/tabs-accordions', title: 'Tabs & Accordions' }
		]
	}, 
	{ path: '/form', icon: 'bi bi-pen', title: 'Forms',
		children: [
			{ path: '/form/elements', title: 'Form Elements' }, 
			{ path: '/form/plugins', title: 'Form Plugins' }, 
			{ path: '/form/wizards', title: 'Wizards' }
		]
	}, 
	{ path: '/table', icon: 'bi bi-grid-3x3', title: 'Tables',
		children: [
			{ path: '/table/elements', title: 'Table Elements' },
			{ path: '/table/plugins', title: 'Table Plugins' }
		]
	}, 
	{ path: '/chart', icon: 'bi bi-pie-chart', title: 'Charts',
		children: [
			{ path: '/chart/chart-js', title: 'Chart.js' },
			{ path: '/chart/chart-apex', title: 'Apexcharts.js' }
		]
	}, 
	{ path: '/map', icon: 'bi bi-compass', title: 'Map' }, 
	{ path: '/layout', icon: 'bi bi-layout-sidebar', title: 'Layout',
		children: [
			{ path: '/layout/starter-page', title: 'Starter Page' }, 
			{ path: '/layout/fixed-footer', title: 'Fixed Footer' }, 
			{ path: '/layout/full-height', title: 'Full Height' }, 
			{ path: '/layout/full-width', title: 'Full Width' }, 
			{ path: '/layout/boxed-layout', title: 'Boxed Layout' }, 
			{ path: '/layout/collapsed-sidebar', title: 'Collapsed Sidebar' }, 
			{ path: '/layout/top-nav', title: 'Top Nav' }, 
			{ path: '/layout/mixed-nav', title: 'Mixed Nav' }, 
			{ path: '/layout/mixed-nav-boxed-layout', title: 'Mixed Nav Boxed Layout' }
		]
	}, 
	{ path: '/pages', icon: 'bi bi-collection', title: 'Pages',
		children: [
			{ path: '/pages/scrum-board', title: 'Scrum Board' }, 
			{ path: '/pages/products', title: 'Products' }, 
			{ path: '/pages/product-details', title: 'Product Details' }, 
			{ path: '/pages/orders', title: 'Orders' }, 
			{ path: '/pages/order-details', title: 'Order Details' }, 
			{ path: '/pages/gallery', title: 'Gallery' }, 
			{ path: '/pages/search-results', title: 'Search Results' }, 
			{ path: '/pages/coming-soon', title: 'Coming Soon Page' }, 
			{ path: '/pages/error', title: 'Error Page' }, 
			{ path: '/pages/login', title: 'Login' }, 
			{ path: '/pages/register', title: 'Register' }, 
			{ path: '/pages/messenger', title: 'Messenger' }, 
			{ path: '/pages/data-management', title: 'Data Management' },
			{ path: '/pages/file-manager', title: 'File Manager' }, 
			{ path: '/pages/pricing', title: 'Pricing Page' }
		]
	}, 
	{ path: '/landing', icon: 'bi bi-diagram-3', title: 'Landing' }, 
	{ is_divider: true }, 
	{ is_header: true, title: 'Users' }, 
	{ path: '/profile', icon: 'bi bi-people', title: 'Profile' }, 
	{ path: '/calendar', icon: 'bi bi-calendar4', title: 'Calendar' }, 
	{ path: '/settings', icon: 'bi bi-gear', title: 'Settings' }, 
	{ path: '/helper', icon: 'bi bi-gem',	title: 'Helper' }
];

export default Menu;