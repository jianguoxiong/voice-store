import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const localPrevious = sessionStorage.getItem('previous')
const state = {
	showBottomNav : false,
	previous:localPrevious?localPrevious:'1',
	navlist:[
		{on_src:require('../assets/pulic/index_logo_t.png'),is_src:require('../assets/pulic/index_logo_t1.png'),is_on:false,text:'听一听'},
		{on_src:require('../assets/pulic/index_logo_s.png'),is_src:require('../assets/pulic/index_logo_s1.png'),is_on:true,text:'商城'},
		{on_src:require('../assets/pulic/index_logo_h.png'),is_src:require('../assets/pulic/index_logo_h1.png'),is_on:false,text:'好礼'},
		{on_src:require('../assets/pulic/index_logo_r.png'),is_src:require('../assets/pulic/index_logo_r1.png'),is_on:false,text:'个人'}
	]
};
const  mutations = {
		toLink:(state,payload) => {		
			if(state.previous !== payload){
				state.navlist.forEach(item => {
						 item.is_on = false
				})
				state.navlist[payload].is_on = true
				sessionStorage.setItem('previous',payload)
			}else{
				console.log('不能重复选择')
			}
		}
};
const actions = {
	toLink:(context,payload) => {
		context.commit("toLink",payload)		
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})