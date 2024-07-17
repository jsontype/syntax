import React, { useState } from 'react';
import { Card, CardBody } from './../card/card.jsx';

function ThemePanel() {
	const [active, setActive] = useState(0);
	const [mode, setMode] = useState((localStorage && typeof localStorage.appMode !== 'undefined') ?  localStorage.appMode : 'dark');
	const [theme, setTheme] = useState((localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'theme-teal');
	const [cover, setCover] = useState((localStorage && typeof localStorage.appCover !== 'undefined') ?  localStorage.appCover : '');
	
	const toggleAppThemePanel = (event) => {
		event.preventDefault();
		
		setActive((active === 0) ? active + 1 : 0);
	}
	
	const setAppTheme = (event, theme) => {
		event.preventDefault();
		
		for (var x = 0; x < document.body.classList.length; x++) {
			if ((document.body.classList[x]).indexOf('theme-') > -1 && document.body.classList[x] !== theme) {
				document.body.classList.remove(document.body.classList[x]);
			}
		}
		
		if (theme) {
			document.body.classList.add(theme);
		}
		if (localStorage) {
			localStorage.appTheme = theme;
		}
		
		setTheme(theme);
		document.dispatchEvent(new Event('theme-reload'));
	}
	
	const setAppMode = (event, mode) => {
		event.preventDefault();
		
		document.documentElement.setAttribute('data-bs-theme', mode);
		
		if (localStorage) {
			localStorage.appMode = mode;
		}
		
		setMode(mode);
		document.dispatchEvent(new Event('theme-reload'));
	}
	
	
	const setAppCover = (event, cover) => {
		event.preventDefault();
		
		var htmlElm = document.querySelector('html');
		for (var x = 0; x < document.documentElement.classList.length; x++) {
			var targetClass = document.documentElement.classList[x];
			if (targetClass.search('bg-cover-') > -1) {
				htmlElm.classList.remove(targetClass);
			}
		}
		
		if (cover) {
			htmlElm.classList.add(cover);
		}
		if (localStorage) {
			localStorage.appCover = cover;
		}
		
		setCover(cover);
	}
	
	const modeList = [
		{ name: 'Dark', img: '/assets/img/mode/dark.jpg', value: 'dark'},
		{ name: 'Light', img: '/assets/img/mode/light.jpg', value: 'light'}
	];
	
	const themeList = [
	 { name: 'Pink', bgClass: 'bg-pink', themeClass: 'theme-pink' },
	 { name: 'Red', bgClass: 'bg-red', themeClass: 'theme-red' },
	 { name: 'Orange', bgClass: 'bg-warning', themeClass: 'theme-warning' },
	 { name: 'Yellow', bgClass: 'bg-yellow', themeClass: 'theme-yellow' },
	 { name: 'Lime', bgClass: 'bg-lime', themeClass: 'theme-lime' },
	 { name: 'Green', bgClass: 'bg-green', themeClass: 'theme-green' },
	 { name: 'Default', bgClass: 'bg-teal', themeClass: 'theme-teal' },
	 { name: 'Cyan', bgClass: 'bg-info', themeClass: 'theme-info' },
	 { name: 'Blue', bgClass: 'bg-primary', themeClass: 'theme-primary' },
	 { name: 'Purple', bgClass: 'bg-purple', themeClass: 'theme-purple' },
	 { name: 'Indigo', bgClass: 'bg-indigo', themeClass: 'theme-indigo' },
	 { name: 'Gray', bgClass: 'bg-gray-200', themeClass: 'theme-gray-200' }
	];

	const coverList = [
		{ name: 'Default', coverThumbImage: '/assets/img/cover/cover-thumb-1.jpg', coverClass: ''},
		{ name: 'Cover 2', coverThumbImage: '/assets/img/cover/cover-thumb-2.jpg', coverClass: 'bg-cover-2'},
		{ name: 'Cover 3', coverThumbImage: '/assets/img/cover/cover-thumb-3.jpg', coverClass: 'bg-cover-3'},
		{ name: 'Cover 4', coverThumbImage: '/assets/img/cover/cover-thumb-4.jpg', coverClass: 'bg-cover-4'},
		{ name: 'Cover 5', coverThumbImage: '/assets/img/cover/cover-thumb-5.jpg', coverClass: 'bg-cover-5'},
		{ name: 'Cover 6', coverThumbImage: '/assets/img/cover/cover-thumb-6.jpg', coverClass: 'bg-cover-6'},
		{ name: 'Cover 7', coverThumbImage: '/assets/img/cover/cover-thumb-7.jpg', coverClass: 'bg-cover-7'},
		{ name: 'Cover 8', coverThumbImage: '/assets/img/cover/cover-thumb-8.jpg', coverClass: 'bg-cover-8'},
		{ name: 'Cover 9', coverThumbImage: '/assets/img/cover/cover-thumb-9.jpg', coverClass: 'bg-cover-9'}
	]
	
	return (
		<div className={'app-theme-panel' + ((active) ? ' active' : '')}>
			<div className="app-theme-panel-container">
				<a href="#/" onClick={toggleAppThemePanel} className="app-theme-toggle-btn"><i className="bi bi-sliders"></i></a>
				<div className="app-theme-panel-content">
					<div className="small fw-bold text-inverse mb-1">Display Mode</div>
					<Card className="mb-3">
						<CardBody className="p-2">
							<div className="row gx-2">
								{modeList.length > 0 && modeList.map((m, index) => (
								<div className="col-6" key={index}>
									<a href="#/" onClick={(event) => setAppMode(event, m.value)} className={'app-theme-mode-link ' + ((mode === m.value) ? 'active' : '')}>
										<div className="img"><img src={m.img} className="object-fit-cover" height="76" width="76" alt=""></img></div>
										<div className="text">{m.name}</div>
									</a>
								</div>
								))}
							</div>
						</CardBody>
					</Card>
					<div className="small fw-bold text-inverse mb-1">Theme Color</div>
					<Card className="mb-3">
						<CardBody className="p-2">
							<div className="app-theme-list">
								{themeList.length > 0 && themeList.map((t, index) => (
									<div className={'app-theme-list-item ' + ((theme === t.themeClass) ? 'active' : '')} key={index}>
										<a href="#/" onClick={(event) => setAppTheme(event, t.themeClass)} className={'app-theme-list-link '+ t.bgClass} data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body">&nbsp;</a>
									</div>
								))}
							</div>
						</CardBody>
					</Card>
		
					<div className="small fw-bold text-inverse mb-1">Theme Cover</div>
					<Card>
						<CardBody className="p-2">
							<div className="app-theme-cover">
								{coverList.length > 0 && coverList.map((c, index) => (
									<div className={'app-theme-cover-item ' + ((cover === c.coverClass) ? 'active' : '')} key={index}>
										<a href="#/" onClick={(event) => setAppCover(event, c.coverClass)} className="app-theme-cover-link" style={{backgroundImage: 'url('+ c.coverThumbImage +')'}} data-cover-class={c.coverClass} data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body">&nbsp;</a>
									</div>
								))}
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ThemePanel;
