import './assets/css/paper-kit.css?v=2.1.0'
import './assets/js/paper-kit.js?v=2.1.0'

import fogLow from './assets/img/fog-low.png'
import creativeTimWhiteSlim2 from './assets/img/creative-tim-white-slim2.png'
import soroushKarimi from './assets/img/soroush-karimi.jpg'
import federicoBeccari from './assets/img/federico-beccari.jpg'
import joshuaStannard from './assets/img/joshua-stannard.jpg'
import wordcrush from './assets/img/wordcrush.jpg'
import clouds from './assets/img/clouds.png'


export default class AppBaseSecuredCtrl {
	constructor() {
		'ngInject'
	}

	fogLow() {
		return fogLow
	}

	creativeTimWhiteSlim2() {
		return creativeTimWhiteSlim2
	}

	soroushKarimi() {
		return soroushKarimi
	}

	federicoBeccari() {
		return federicoBeccari
	}

	joshuaStannard() {
		return joshuaStannard
	}

	getBackgroundImageBrigadeiro() {
		return wordcrush
	}

	getClouds() {
		return clouds
	}
}
