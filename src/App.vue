<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

<style lang="scss">
	html,body{
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
		min-height: 100vh;
	#app{
		width: 100%;
		display: flex;
	}
	}
</style>
