import React, { useEffect, useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

function PagesGallery() {
	const context = useContext(AppSettings);
	
	useEffect(() => {
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-0');
		context.setAppSidebarCollapsed(true);
		
		var lightbox;
		
		if (!lightbox) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery-image-list',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    }
    
    return function cleanUp() {
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
			context.setAppSidebarCollapsed(false);
		
			if (lightbox) {
				lightbox.destroy();
				lightbox = null;
			}
    }
    
    // eslint-disable-next-line
	}, []);

	return (
		<div className="d-block d-md-flex align-items-stretch h-100">
			<div className="gallery-menu-container">
				<PerfectScrollbar className="h-100">
					<div className="gallery-menu">
						<div className="p-3 d-flex align-items-center">
							<Link to="/pages/order-details" className="btn btn-outline-default text-nowrap btn-sm px-3 rounded-pill"><i className="fa fa-arrow-left me-1 ms-n1"></i> Back</Link>
						</div>
						<div className="gallery-menu-header">Main</div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link active"><i className="fa fa-fw fa-image me-1"></i> Photos</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-heart me-1"></i> Memories</a></div>
						<div className="gallery-menu-header">Shared</div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-cloud me-1"></i> Activity</a></div>
						<div className="gallery-menu-header">Albums</div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-camera me-1"></i> All Photos</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-user me-1"></i> People</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-map-pin me-1"></i> Places</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-camera-retro me-1"></i> Selfies</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-video me-1"></i> Panaromas</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-star me-1"></i> Depth Effect</a></div>
						<div className="gallery-menu-item"><a href="#/" className="gallery-menu-link"><i className="fa fa-fw fa-mobile me-1"></i> Screenshots</a></div>
					</div>
				</PerfectScrollbar>
			</div>
			<div className="gallery-content-container">
				<PerfectScrollbar className="h-100">
					<div className="gallery-content">
						<div className="gallery">
							<div className="d-flex align-items-center mb-3">
								<div className="gallery-title mb-0">
									<a href="#/">
									Wedding <i className="fa fa-chevron-right"></i> 
									<small>May 11, 2024</small>
									</a>
								</div>
								
								<div className="ms-auto btn-group">
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-play"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-plus"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-upload"></i></a>
								</div>
							</div>
							
							<div className="gallery-image">
								<ul className="gallery-image-list">
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-42.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-42.jpg" alt="Wedding Img 1" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-43.jpg" data-pswp-width="752" data-pswp-height="442"><img src="/assets/img/gallery/gallery-43.jpg" alt="Wedding Img 2" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-44.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-44.jpg" alt="Wedding Img 3" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-45.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-45.jpg" alt="Wedding Img 4" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-46.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-46.jpg" alt="Wedding Img 5" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-47.jpg" data-pswp-width="752" data-pswp-height="532"><img src="/assets/img/gallery/gallery-47.jpg" alt="Wedding Img 6" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-48.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-48.jpg" alt="Wedding Img 7" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-49.jpg" data-pswp-width="752" data-pswp-height="1130"><img src="/assets/img/gallery/gallery-49.jpg" alt="Wedding Img 8" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-50.jpg" data-pswp-width="752" data-pswp-height="1128"><img src="/assets/img/gallery/gallery-50.jpg" alt="Wedding Img 9" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-51.jpg" data-pswp-width="752" data-pswp-height="866"><img src="/assets/img/gallery/gallery-51.jpg" alt="Wedding Img 10" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-52.jpg" data-pswp-width="752" data-pswp-height="752"><img src="/assets/img/gallery/gallery-52.jpg" alt="Wedding Img 11" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-53.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-53.jpg" alt="Wedding Img 12" className="img-portrait" /></a></li>
								</ul>
							</div>
						</div>
						<div className="gallery">
							<div className="d-flex align-items-center mb-3">
								<div className="gallery-title mb-0">
									<a href="#/">
									Collections #339 <i className="fa fa-chevron-right"></i> 
									<small>May 8, 2024</small>
									</a>
								</div>
								
								<div className="ms-auto btn-group">
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-play"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-plus"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-upload"></i></a>
								</div>
							</div>
							
							<div className="gallery-image">
								<ul className="gallery-image-list">
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-21.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-21.jpg" alt="Collection #145 Img 1" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-22.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-22.jpg" alt="Collection #145 Img 2" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-23.jpg" data-pswp-width="752" data-pswp-height="486"><img src="/assets/img/gallery/gallery-23.jpg" alt="Collection #145 Img 3" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-24.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-24.jpg" alt="Collection #145 Img 4" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-25.jpg" data-pswp-width="752" data-pswp-height="1128"><img src="/assets/img/gallery/gallery-25.jpg" alt="Collection #145 Img 5" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-26.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-26.jpg" alt="Collection #145 Img 6" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-27.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-27.jpg" alt="Collection #145 Img 7" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-28.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-28.jpg" alt="Collection #145 Img 8" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-29.jpg" data-pswp-width="752" data-pswp-height="1128"><img src="/assets/img/gallery/gallery-29.jpg" alt="Collection #145 Img 9" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-30.jpg" data-pswp-width="752" data-pswp-height="940"><img src="/assets/img/gallery/gallery-30.jpg" alt="Collection #145 Img 10" /></a></li>
								</ul>
							</div>
						</div>
						<div className="gallery">
							<div className="d-flex align-items-center mb-3">
								<div className="gallery-title mb-0">
									<a href="#/">
									Collections #144 <i className="fa fa-chevron-right"></i> 
									<small>May 4, 2024</small>
									</a>
								</div>
								
								<div className="ms-auto btn-group">
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-play"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-plus"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-upload"></i></a>
								</div>
							</div>
							
							<div className="gallery-image">
								<ul className="gallery-image-list">
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-31.jpg" data-pswp-width="752" data-pswp-height="752"><img src="/assets/img/gallery/gallery-31.jpg" alt="Collection #144 Img 1" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-32.jpg" data-pswp-width="752" data-pswp-height="1128"><img src="/assets/img/gallery/gallery-32.jpg" className="img-portrait" alt="Collection #144 Img 2" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-33.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-33.jpg" alt="Collection #144 Img 3" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-34.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-34.jpg" alt="Collection #144 Img 4" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-35.jpg" data-pswp-width="752" data-pswp-height="1136"><img src="/assets/img/gallery/gallery-35.jpg" alt="Collection #144 Img 5" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-36.jpg" data-pswp-width="752" data-pswp-height="1128"><img src="/assets/img/gallery/gallery-36.jpg" alt="Collection #144 Img 6" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-37.jpg" data-pswp-width="752" data-pswp-height="480"><img src="/assets/img/gallery/gallery-37.jpg" alt="Collection #144 Img 7" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-38.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-38.jpg" alt="Collection #144 Img 8" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-39.jpg" data-pswp-width="752" data-pswp-height="422"><img src="/assets/img/gallery/gallery-39.jpg" alt="Collection #144 Img 9" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-40.jpg" data-pswp-width="752" data-pswp-height="464"><img src="/assets/img/gallery/gallery-40.jpg" alt="Collection #144 Img 10" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-41.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-41.jpg" alt="Collection #144 Img 11" className="img-portrait" /></a></li>
								</ul>
							</div>
						</div>
						<div className="gallery">
							<div className="d-flex align-items-center mb-3">
								<div className="gallery-title mb-0">
									<a href="#/">
									Collection #143 <i className="fa fa-chevron-right"></i> 
									<small>May 3, 2024</small>
									</a>
								</div>
								
								<div className="ms-auto btn-group">
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-play"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-plus"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-upload"></i></a>
								</div>
							</div>
							
							<div className="gallery-image">
								<ul className="gallery-image-list">
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-1.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-1.jpg" alt="Collection #143 Img 1" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-2.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-2.jpg" alt="Collection #143 Img 2" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-3.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-3.jpg" alt="Collection #143 Img 3" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-4.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-4.jpg" alt="Collection #143 Img 4" /></a></li>
								</ul>
							</div>
						</div>
						<div className="gallery">
							<div className="d-flex align-items-center mb-3">
								<div className="gallery-title mb-0">
									<a href="#/">
										Random <i className="fa fa-chevron-right"></i> 
										<small>May 1, 2024</small>
									</a>
								</div>
								
								<div className="ms-auto btn-group">
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-play"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-plus"></i></a>
									<a href="#/" className="btn btn-outline-default btn-sm"><i className="fa fa-upload"></i></a>
								</div>
							</div>
							
							<div className="gallery-image">
								<ul className="gallery-image-list">
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-5.jpg" data-pswp-width="752" data-pswp-height="500"><img src="/assets/img/gallery/gallery-5.jpg" alt="Random Img 1" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-6.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-6.jpg" alt="Random Img 2" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-7.jpg" data-pswp-width="752" data-pswp-height="476"><img src="/assets/img/gallery/gallery-7.jpg" alt="Random Img 3" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-8.jpg" data-pswp-width="752" data-pswp-height="472"><img src="/assets/img/gallery/gallery-8.jpg" alt="Random Img 4" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-9.jpg" data-pswp-width="752" data-pswp-height="504"><img src="/assets/img/gallery/gallery-9.jpg" alt="Random Img 5" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-10.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-10.jpg" alt="Random Img 6" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-11.jpg" data-pswp-width="752" data-pswp-height="564"><img src="/assets/img/gallery/gallery-11.jpg" alt="Random Img 7" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-12.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-12.jpg" alt="Random Img 8" className="img-portrait" /></a></li>
									<li><a href="#/" data-pswp-src="/assets/img/gallery/gallery-13.jpg" data-pswp-width="752" data-pswp-height="502"><img src="/assets/img/gallery/gallery-13.jpg" alt="Random Img 9" className="img-portrait" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>
		</div>
	)
}

export default PagesGallery;