import { Card, CardBody } from './../../components/card/card.jsx';
import { Icon } from '@iconify/react';

function PagesPricing() {
	return (
		<div>
			<h1 className="page-header">Pricing Page <small>page header description goes here...</small></h1>
			<Card>
				<div className="row gx-0">
					<div className="col-xl-7 position-relative">
						<div className="p-5">
						<div className="display-5 fw-bold mb-3">Web Hosting Plan</div>
						<div className="fs-13px mb-4 font-monospace">
							Discover the <b className="text-theme d-inline-flex border-bottom border-1 border-gray-500">perfect plan</b> for your online presence. In a digital landscape where your website is the gateway to your brand, we offer an array of meticulously crafted hosting plans to suit every ambition and requirement.
						</div>
						<div className="row mb-n3">
							<div className="col-lg-6">
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:cup-star-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										Robust Performance
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:cpu-bolt-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										Scalability Options
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:shield-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										Security First
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:headphones-round-sound-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										24/7 Support
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:monitor-smartphone-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										User-Friendly Control Panel
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:mouse-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										One-Click Installations
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:gift-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										Value-Added Features
									</div>
								</div>
								<div className="d-flex align-items-center mb-3">
									<Icon className="iconify fs-30px text-theme" icon="solar:dollar-bold-duotone" />
									<div className="flex-1 ps-2 fs-13px fw-bold">
										Money-Back Guarantee
									</div>
								</div>
							</div>
						</div>
						</div>
					</div>
					<div className="col-xl-5 d-xl-block d-none">
						<div className="ms-n5 h-100 d-flex align-items-center justify-content-center p-3">
							<img src="/assets/img/pricing/img-1.svg" alt="" height="360" />
						</div>
					</div>
				</div>
			</Card>
			
			<div className="row gx-4 py-5">
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="h-100">
						<CardBody className="p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h6 font-monospace">Starter Plan</div>
									<div className="display-6 fw-bold mb-0">$5<small className="h6 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-body text-opacity-50 rounded-3" icon="solar:usb-bold-duotone" />
								</div>
							</div>
							<hr className="my-20px" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">10 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">100 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">1</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body"> Shared</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body"> 5</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body"> Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body"> 99.9%</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body"> Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body"> cPanel</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body"> No</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body"> No</b></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="h-100">
						<CardBody className="p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h6 font-monospace">Booster Plan</div>
									<div className="display-6 fw-bold mb-0">$10<small className="h6 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-body text-opacity-50 rounded-3" icon="solar:map-arrow-up-bold-duotone" />
								</div>
							</div>
							<hr className="my-20px" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">20 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">200 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">2</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body"> Free</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body"> 10</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body"> Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body"> 99.9%</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body"> Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body"> cPanel</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body"> No</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body"> No</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="col-xl-3 col-md-6 py-3 py-xl-0">
					<Card className="h-100 border-theme">
						<CardBody className="p-30px h-100 d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h6 font-monospace">Premium Plan</div>
									<div className="display-6 fw-bold mb-0 text-theme">$15 <small className="h6 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-3 text-theme rounded-3" icon="solar:cup-first-bold-duotone" />
								</div>
							</div>
							<hr className="my-20px" />
							<div className="mb-5 text-body flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Storage:</span> <b className="text-body">50 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Bandwidth:</span> <b className="text-body">500 GB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Domain Names:</span> <b className="text-body">Unlimited</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">SSL Certificate:</span> <b className="text-body">Free</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Email Accounts:</span> <b className="text-body">Unlimited</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">24/7 Support:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Backup:</span> <b className="text-body">Daily</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Uptime Guarantee:</span> <b className="text-body">99.9%</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">FTP Access:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Control Panel:</span> <b className="text-body">cPanel</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Free Domain:</span> <b className="text-body">No</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Firewall:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">E-commerce Support</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<a href="#/" className="btn btn-theme btn-lg w-100 text-black font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
						</CardBody>
					</Card>
				</div>
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="h-100">
						<CardBody className="p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h6 font-monospace">Business Plan</div>
									<div className="display-6 fw-bold mb-0">$99<small className="h6 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-body text-opacity-50 rounded-3" icon="solar:buildings-bold-duotone" />
								</div>
							</div>
							<hr className="my-20px" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">1 TB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">20 TB</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">Unlimited</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body">Free</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body">Unlimited</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-theme"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body">99.9%</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body">cPanel</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body">Yes</b></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">E-commerce Support</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-theme fa-lg"></i> 
									<div className="flex-1 ps-3"><span className="font-monospace small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default PagesPricing;