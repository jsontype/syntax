import { slideUp } from './slideUp.js';
import { slideDown } from './slideDown.js';

export function slideToggle(elm, duration = 300) {
	if (window.getComputedStyle(elm).display === 'none') {
		slideDown(elm, duration);
	} else {
		slideUp(elm, duration);
	}
}
