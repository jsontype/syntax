import React from 'react';

function PagesSearchResults() {
	return (
		<div>
			<ul className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
				<li className="breadcrumb-item active">SEARCH RESULTS</li>
			</ul>
		
			<h1 className="page-header">
				Search Results <small>page header description goes here...</small>
			</h1>
			
			<div className="search-result">
				<div className="search-input">
					<form action="#" method="POST" name="search_form">
						<a href="#/" className="search-close" data-clear-form="#search">&times;</a>
						<input type="text" className="form-control form-control-lg" defaultValue="MacBook" />
					</form>
				</div>
			
				<div className="search-tab">
					<div className="search-tab-item"><a href="#/" className="search-tab-link active">Explore</a></div>
					<div className="search-tab-item"><a href="#/" className="search-tab-link">Accessories</a></div>
					<div className="search-tab-item"><a href="#/" className="search-tab-link">Support</a></div>
					<div className="search-tab-item"><a href="#/" className="search-tab-link">Store</a></div>
				</div>
			
				<div className="search-result">
					<div className="search-result-list">
						<div className="search-result-item">
							<div className="search-result-media">
								<a href="#/"><img src="/assets/img/product/product.png" alt="" /></a>
							</div>
							<div className="search-result-content">
								<h3><a href="#/">MacBook</a></h3>
								<p>
									MacBook features sixth-generation Intel Core processors, improved graphics performance, and up to 10 hours of battery life.
								</p>
								<a href="#/" className="me-4">Learn more</a>
								<a href="#/" className="me-4">MacBook Buy</a>
								<a href="#/">MacBook Support</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook - Apple</a></h3>
								<p>
									The incredibly thin and light MacBook features sixth-generation processors, improved graphics performance, and up to 10 hours of battery life....
								</p>
								<a href="#/">https://www.apple.com/macbook/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook Pro - macOS - Apple</a></h3>
								<p>
									MacBook Pro - macOS - Apple macOS. It’s why there’s nothing else like a Mac. macOS is the operating system that powers every Mac. It lets you do things you simply can’t with other computers. That’s...
								</p>
								<a href="#/">https://www.apple.com/macbook-pro/macos/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook Air - Design - Apple</a></h3>
								<p>
									MacBook Air is incredibly thin and light. But it’s also powerful, durable, and enjoyable to use. With enough battery life to get you through the day....
								</p>
								<a href="#/">https://www.apple.com/macbook-air/design/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook Air - Performance - Apple</a></h3>
								<p>
									MacBook Air is packed with powerful components that give you smoother graphics, faster storage, and all-around serious performance....
								</p>
								<a href="#/">https://www.apple.com/macbook-air/performance/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook Air - Technical Specifications - Apple</a></h3>
								<p>
									View the technical specifications for MacBook Air, see what comes in the box, explore configuration options, and get a list of accessories....
								</p>
								<a href="#/">https://www.apple.com/macbook-air/specs/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook - Design - Apple</a></h3>
								<p>
									MacBook is the thinnest and lightest Mac notebook ever — each detail refined for maximum efficiency and portability.
								</p>
								<a href="#/">https://www.apple.com/macbook/design/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook - Technical Specifications - Apple</a></h3>
								<p>
									View the technical specifications for MacBook. See what comes in the box and get a list of accessories.
								</p>
								<a href="#/">https://www.apple.com/macbook/specs/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook - Wireless - Apple</a></h3>
								<p>
									MacBook is designed to make the most of the wireless world. Share files, browse the web, print, and more — without being tied down to a cable....
								</p>
								<a href="#/">https://www.apple.com/macbook/wireless/</a>
							</div>
						</div>
						<div className="search-result-item">
							<div className="search-result-content">
								<h3><a href="#/">MacBook - macOS - Apple</a></h3>
								<p>
									MacBook - macOS - Apple macOS. It’s why there’s nothing else like a Mac. macOS is the operating system that powers every Mac. It lets you do things you simply can’t with other computers. That’s...
								</p>
								<a href="#/">https://www.apple.com/macbook/macos/</a>
							</div>
						</div>
					</div>
					
					<div className="text-center mt-4 mb-5">
						<div className="pagination justify-content-center">
							<div className="disabled page-item">
								<a href="#/" className="page-link">
									<span>«</span>
								</a>
							</div>
							<div className="active page-item"><a href="#/" className="page-link">1</a></div>
							<div className="page-item"><a href="#/" className="page-link">2</a></div>
							<div className="page-item"><a href="#/" className="page-link">3</a></div>
							<div className="page-item"><a href="#/" className="page-link">4</a></div>
							<div className="page-item"><a href="#/" className="page-link">5</a></div>
							<div className="page-item">
								<a href="#/" className="page-link">
									<span>»</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PagesSearchResults;