<template>
	<div class="center">
		<div class="title">
				<img src="./assets/pulic/header.jpg" alt="">
		</div>
		<div class="content">
			<div class="navItem" v-for="item in center_nav">
				 <router-link :to="{path:item.router}">
					 <div>
						 <img :src="item.src" alt="">
						 <span>{{item.name}}</span>
					 </div>
					 <img src="./assets/center/right-c.png" alt="">
				 </router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				'center_nav':[
					{src:require('./assets/center/card.png'),name:'我的卡包',router:'coupon'},
					{src:require('./assets/center/order.png'),name:'我的订单',router:'aaaaaa'},
					{src:require('./assets/center/car.png'),name:'购物车',router:'aaaaaa'},
					{src:require('./assets/center/address.png'),name:'收货地址',router:'aaaaaa'},
					{src:require('./assets/center/collect.png'),name:'我的收藏',router:'aaaaaa'},
				]
			}
		},
		created() {
			this.$store.state.showBottomNav = true
		},
		watch:{
			'$route' (to, from,next) {
				console.log(to.fullPath)
// 				if(to.fullPath === '/coupon'){
// 					sessionStorage.setItem('previous',2)
// 				}
// 				this.$store.state.navlist.map((item,x,array) => {
// 					 return{
// 						 is_on:item.is_on = false
// 					 }
// 				})
// 				this.$store.state.navlist[2].is_on = true
			}
		}
	}
</script>

<style lang="scss" scoped>
a{
	text-decoration: none;
	color: #000;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 0.4rem;
	height: 1rem;
}
.center{
	display: flex;
	flex-direction: column;
	.title {
		height: 3.2rem;
		background: url(assets/center/user_bj.png);
		img{
			display: flex;
			width: 1.8rem;
			height: 1.8rem;
			border-radius: 100%;
			margin: 0 auto;
			margin-top: 0.6rem;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		.navItem{
			display: flex;
			justify-content: space-between;
			background: #fff;
			    border-top: 0.03rem solid #eee;
			div{
				display: flex;
				img{
					display: flex;
					width:0.6rem;
					height: 0.6rem;
					margin-right: 0.2rem;
					margin-top: 0.2rem;
				}
				span{
					font-size: 0.26rem;
					line-height: 1rem;
				}
			}
			img{
				width: 0.2rem;
				height: 0.4rem;
				margin-top: 0.3rem;
			}
		}
	}
}
</style>
