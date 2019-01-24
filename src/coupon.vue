<template>
	<div class="coupon">
		<div class="item">
			<div class="title"><img src="./assets/pulic/shanchu.png" alt=""></div>
			<div class="contentBox">
				<img src="./assets/pulic/coupon.png" alt="">
				<div>
					<span>新用户</span>
					<span>新用户即享10元优惠券</span>
					<span>有效期 2017-06-10 至 2019-10-08</span>
				</div>
				<div class="button">立即使用</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		created(){
			this.$store.state.showBottomNav = true
		}
	}
</script>

<style lang="scss" scoped>
	.public{
		display: flex;
		flex-direction: column;
	}
	.coupon{
		@extend .public;
		padding-top: 0.5rem;
		.item{
			@extend .public;
			width: 90%;
			margin: 0 auto;
			background: #fff;
			border-radius: 0.1rem;
			padding: 0.2rem 0.1rem;
			margin-bottom: 0.3rem;
			.title{
				display:flex;
				justify-content:flex-end;
				img{
					width: 0.4rem;
					height: 0.4rem;
				}
			}
		    .contentBox{
				display: flex;
				align-items:flex-end;
				justify-content: space-between;
				img{
					width: 1.2rem;
					height: 1.2rem;
				}
				div:nth-child(2){
					@extend .public;
					span:nth-child(1){
						font-size: 0.32rem;
						color: #ff7200;
						margin-bottom: 0.1rem;
					}
					span:nth-child(2){
						font-size: 0.26rem;
						color: #bec8e3;
						margin-bottom: 0.05rem;
					}
					span:nth-child(3){
						font-size: 0.22rem;
						color: #bec8e3;
					}
				}
				.button{
					font-size: 0.28rem;
					width: 1.4rem;
					height: 0.6rem;
					line-height: 0.6rem;
					text-align: center;
					color: #fff;
					background: #ff7200;
					border-radius: 0.1rem;
				}
			}
		}
	}
</style>
