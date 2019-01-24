<template>
	<div class="navBar">
		<div class="navBar-item" v-for="(item,index) in navBar" :key="index"  @click="toLink(index)">
			<img :src="item.is_on?item.is_src:item.on_src" alt="">
			<span :class="item.is_on?'is_text':''">{{item.text}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				'navBar':[
					{on_src:require('../assets/pulic/index_logo_t.png'),is_src:require('../assets/pulic/index_logo_t1.png'),is_on:false,text:'听一听'},
					{on_src:require('../assets/pulic/index_logo_s.png'),is_src:require('../assets/pulic/index_logo_s1.png'),is_on:true,text:'商城'},
					{on_src:require('../assets/pulic/index_logo_h.png'),is_src:require('../assets/pulic/index_logo_h1.png'),is_on:false,text:'好礼'},
					{on_src:require('../assets/pulic/index_logo_r.png'),is_src:require('../assets/pulic/index_logo_r1.png'),is_on:false,text:'个人'}
				],                //记录上一次点击
			}
		},
		created(){
			this.navBar.map((item,x,array) => {
				 return{
					 is_on:item.is_on = false
				 }
			})
			this.navBar[this.$store.state.previous].is_on = true
		},
		methods: {
			toLink:function(index){
				if(this.previous !== index){
					let list_navBar = this.navBar.map((item,x,array) => {
						 return{
							 is_on:item.is_on = false
						 }
					})
					this.navBar[index].is_on = true
					localStorage.setItem('previous',index)
					console.log(this.$store.state.previous)
					if(index == 1){
						this.$router.replace({name:'Index'})
					}else if(index == 2){
						this.$router.replace({name:'Coupon'})
					}else if(index == 3){
						this.$router.replace({name:'Center'})
					}
				}else{
					console.log('不能重复选择')
				}
			}
		},
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
