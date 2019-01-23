<template>
  <div id="app">
    <router-view/>
	<nav-bar></nav-bar>
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
