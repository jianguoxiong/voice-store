<template>
	<div class="index">
		<!--轮播-->
		<div class="banner">
		   <swiper :options="swiperOption">
			  <swiper-slide v-for="item in list" :key="item.ad_id" ><a :href="item.ad_link"><img :src="item.ad_logo" alt=""></a></swiper-slide>
			</swiper>
			<!--以下看需要添加-->
			<div class="swiper-pagination"></div>
		</div>
		<!--导航-->
		<div class="nav">
			<div class="nav-item" v-for="item in navList" :key="item.cate_id">
				<img :src="baseImgUrl + item.cate_logo" alt="">
				<span>{{item.cate_name}}</span>
			</div>
		</div>
		<!--分类商品-->
		<div class="main_box">
			<div class="main_box_item" v-for="item in classify" >
				<div class="main-title">
					<span>{{item.cate_name}}</span>
					<span><a href="#">查看更多 〉</a></span>
				</div>
				<div class="main_item">
					<div class="list_item" v-for="items in item.goods">
						<a href="#">
							<img :src="baseImgUrl + items.default_image" alt="">
							<span>{{items.goods_name}}</span>
							<span>¥{{items.price}}</span>
						</a>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {banner,baseImgUrl,indexNav,classify} from './api/api'
	export default {
		data(){
			return{
			    'list':[],				  //轮播
				'baseImgUrl':baseImgUrl,  //图片域名
				'navList':[],             //导航
				'classify':[],            //分类商品
			    swiperOption: {
			    autoplay: 3000,
			    speed: 2000,
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				type: "bullets",
				},
				autoplay: {
				delay: 4000,
				stopOnLastSlide: false,
				disableOnInteraction: false
				}
			  }
			}
		},
		created() {
			document.getElementById('Loading').style.display="none";
		},
		mounted:function(){
			let  mstr = sessionStorage.getItem('mstr')
			banner(mstr).then((res) => {
				  let listArray = res.data.map(item => {
					 return {
						 ad_logo:baseImgUrl +item.ad_logo,
						 ad_link:item.ad_link,
					 }
				  })
				  this.list = listArray
                });
			indexNav(mstr).then((res) => {
				let  context = []
				res.data.forEach(function(value, index, array){
					if(index < 4){
						 context.push(array[index])	
					}
				})
				this.navList = context				
			});
			classify(mstr).then((res) => {
				console.log(res.data)
				this.classify = res.data
			})
		}
	}
</script>

<style lang="scss">
*{
	box-sizing: border-box;
}
.index{
	width: 100%;
	.swiper-container{
		width: 100%;
		.swiper-slide{
			width: 100%!important;
			height: 3rem;
			font-size: 0.3rem;
			a{
				display: block;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.swiper-pagination{
		top:1.6rem;
		right:0.2rem;
		span{
			margin: 0 0.05rem;
		}
		.swiper-pagination-bullet-active {
			opacity: 1;
			background: #ff7200;
		}
	}
	/***** 导航 ******/
	.nav{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0.2rem 0.5rem;
		height: auto;
		margin-bottom: 0.3rem;
		box-shadow: 0 0.02rem 0.1rem 0.02rem #999;
		background: #fff;
		.nav-item{ 
			display:flex;
			flex-direction:column;
			img{
				width: 0.8rem;
				height: 0.8rem;
			}
			span{
				font-size: 0.26rem;
				text-align:center;
				margin-top: 0.1rem
			}
		}
	}
	/**********分类商品*************/
	.main_box{
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		.main_box_item{
			box-shadow: 0 0.02rem 0.1rem 0.02rem #999;
			margin-bottom: 0.2rem;
			@extend .main_box;
			.main-title{
				display: flex;
				justify-content: space-between;
				height: 0.8rem;
				padding: 0 0.4rem;
				span:nth-child(1){
					font-size: 0.34rem;
					font-weight: bold;
					line-height: 0.8rem;
				}
				span:nth-child(2){
					display: flex;
					a{
						text-decoration: none;
						font-size: 0.25rem;	
						color: #a5a5a5;
						line-height: 0.8rem;
					}
				}
			}
			.main_item{
				display: flex;
				padding: 0 0.34rem;
				.list_item{
					display: flex;
					margin-right: 0.1rem;
					a{
						display: flex;
						text-decoration: none;
						flex-direction: column;
						img{
							width:2.2rem;
							border: 1px solid #eee;
						}
						span:nth-child(2){
							width: 2.2rem;
							font-size: 0.24rem;
							margin-bottom: 0.1rem;
							color: #000;
							margin-top: 0.1rem;
							overflow: hidden;    
							text-overflow:ellipsis;    
							white-space: nowrap;
						}
						span:nth-child(3){
							font-size: 0.28rem;
							color: #ff5050;
							margin-bottom: 0.3rem;
						}
					}
				}
			}
		}
	}
}
</style>
