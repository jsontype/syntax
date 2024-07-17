import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/jsvectormap.min.css';

function Map() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
  const [map, setMap] = useState(null); // eslint-disable-line no-unused-vars
  
  var center = {
		lat: -3.745,
		lng: -38.523
  };
  
	var containerStyle = {
		width: '100%',
		height: '100%'
	};
	
	var { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(this.center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
	function renderMap() {
		var theme = (getComputedStyle(document.body).getPropertyValue('--bs-theme')).trim();
		var inverse = (getComputedStyle(document.body).getPropertyValue('--bs-inverse')).trim();
		var inverseRgb = (getComputedStyle(document.body).getPropertyValue('--bs-inverse-rgb')).trim();
		var bodyFontFamily = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-family')).trim();
		const map = document.getElementById('jvectorMap');
		const mapElm = document.querySelectorAll('.jvm-tooltip');
		
		if (map) {
			for (let i = 0; i < mapElm.length; i++) {
				mapElm[i].remove();
			}
			map.innerHTML = '';
		
			var markers = [
				{ name: "Egypt", coords: [26.8206, 30.8025] },
				{ name: "Russia", coords: [61.524, 105.3188] },
				{ name: "Canada", coords: [56.1304, -106.3468] },
				{ name: "Greenland", coords: [71.7069, -42.6043] },
				{ name: "Brazil", coords: [-14.235, -51.9253] }
			];
			new jsVectorMap({
				selector: '#jvectorMap',
				map: 'world',
				zoomButtons: true,
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.5,
				hoverColor: false,
				zoomOnScroll: false,
				series: {
					regions: [{
						normalizeFunction: 'polynomial'
					}]
				},
				labels: {
					markers: {
						render: (marker) => marker.name
					}
				},
				focusOn: {
					x: 0.5,
					y: 0.5,
					scale: 1
				},
				markers: markers,
				markerStyle: {
					initial: {
						fill: theme,
						stroke: 'none',
						r: 5,
					},
					hover: {
						fill: theme
					}
				},
				markerLabelStyle: {
					initial: {
						fontFamily: bodyFontFamily,
						fontSize: '12px',
						fill: 'rgba('+ inverseRgb +', .75)'
					},
				},
				regionStyle: {
					initial: {
						fill: inverse,
						fillOpacity: 0.15,
						stroke: 'none',
						strokeWidth: 0.4,
						strokeOpacity: 1
					},
					hover: {
						fillOpacity: 0.5
					}
				},
				backgroundColor: 'transparent',
			});
		}
	}
	
	useEffect(() => {
		fetch('/assets/data/map/code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/map/code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		
    // eslint-diable-next-line
    renderMap();
    
		document.addEventListener('theme-reload', () => {
			renderMap();
		});
	}, []);
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<h1 className="page-header">
								Map <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="jsVectorMap" className="mb-5">
								<h4>jsVectorMap</h4>
								<p>jsVectorMap is a lightweight Javascript library for creating interactive maps and pretty data visualization. Please read the <a href="https://github.com/themustafaomar/jsvectormap" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div id="jvectorMap" style={{height: '300px'}}></div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="googleMapReact" className="mb-5">
								<h4>Google Map React</h4>
								<p>Google Map React  is a component written over a small set of the Google Maps API. It allows you to render any React component on the Google Map. Please read the <a href="https://github.com/google-map-react/google-map-react" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										
										<div className="h-300px">
											{ isLoaded ? (
												<GoogleMap
													mapContainerStyle={containerStyle}
													center={center}
													zoom={10}
													onLoad={onLoad}
													onUnmount={onUnmount}
												>
												</GoogleMap>
											) : <></>
											}
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#jsVectorMap" data-toggle="scroll-to">jsVectorMap</a>
									<a className="nav-link" href="#googleMapReact" data-toggle="scroll-to">Google Map React</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Map;