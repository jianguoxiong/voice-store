<template>
  <div id="app">
	<!-- keep-alive 缓存数据 -->
	<keep-alive>
		<router-view/>
	</keep-alive>
	<nav-bar v-if="$store.state.showBottomNav"></nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
	name: 'App',
	components:{
		"nav-bar":NavBar
	},
	data(){
		return{
			isLoading:true,
		}
	},
	created() {
		document.getElementById('Loading').style.display="none";
	},
	watch:{
		// console.log('父子组🗡'+this.$store.state.previous)
	}
}
</script>

<style lang="scss" scoped>
	html,body{
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
		min-height: 100vh;
	#app{
		width: 100%;
		display: flex;
		flex-direction:column;
		.navBar{
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
	}
</style>
