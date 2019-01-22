<template>
	<div class="index">
		<div class="banner">

		</div>
	</div>
</template>

<script>
	import {banner,baseImgUrl} from './api/api'
	import Swiper from 'swiper';
	export default {
		data(){
			return{
				'list':[],
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

		}
	}
</script>

<style lang="scss" scoped>
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
}
</style>
