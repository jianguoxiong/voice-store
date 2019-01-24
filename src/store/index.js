import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const localPrevious = localStorage.getItem('previous')
const state = {
	showBottomNav : false,
	previous:localPrevious?localPrevious:'1'
};

export default new Vuex.Store({
	state
})