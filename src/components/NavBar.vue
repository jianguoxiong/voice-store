<template>
	<div class="navBar">
		<div class="navBar-item" v-for="(item,index) in navBar" :key="index"  @click="toLink(index)">
			<img :src="item.is_on?item.is_src:item.on_src" alt="">
			<span :class="item.is_on?'is_text':''">{{item.text}}</span>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
                
			}
		},
		created(){
			this.$store.state.navlist.map((item,x,array) => {
				 return{
					 is_on:item.is_on = false
				 }
			})
			this.$store.state.navlist[this.$store.state.previous].is_on = true
		},
		computed:{
			navBar(){
				return this.$store.state.navlist
			},
		},
		methods: {
			toLink:function(index){
				this.$store.commit('toLink',index)
			},
// 			...mapActions([
// 				"toLink"
// 			])
		},
		updated: function () {
			let index = sessionStorage.getItem('previous')
				if(index == 1){
					this.$router.replace({name:'Index'})
				}else if(index == 2){
					this.$router.replace({name:'Coupon'})
				}else if(index == 3){
					this.$router.replace({name:'Center'})
				}
		}
	}
</script>

<style lang="scss" scoped>
	.navBar{
		display: flex;
		justify-content: space-around;
		background-color: #f7f7fa;
		padding-top: 0.1rem;
		.navBar-item{
			display: flex;
			flex-direction: column;
			img{
				width: 0.4rem;
				height: 0.4rem;
				margin: 0 auto;
				margin-bottom: 0.05rem;
			}
			span{
				font-size: 0.26rem;
			}
		}
	}
	.is_text{
		color: #ff7200;
	}
</style>
