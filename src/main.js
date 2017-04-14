// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import VueGitHubButtons from 'vue-github-buttons';
import App from './App';

import components from './components';

Vue.config.productionTip = false;

// Styles
import 'highlight.js/styles/monokai.css';
import 'vue-github-buttons/dist/vue-github-buttons.css';
import './scss/main.scss';

// Plugins
Vue.use(VueHighlightJS);
Vue.use(VueGitHubButtons);

// Components
Object.keys(components).forEach(key => {
	Vue.component(key, components[key]);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
