<template>
	<div class="login">
		<p>音频商城</p>
		<div class="header">
			<img src="./assets/pulic/header.jpg" alt="" />
		</div>
		<div class="loading-box">
			<input type="text" placeholder="账号" v-model="admin">
			<input type="number" placeholder="密码" v-model="passWord"></input>
		</div>
		<div class="text">
			 {{text}}
		</div>
		<div class="btn" @click="login">
			登录
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				admin:'',
				passWord:'',
				text:'',
			};
		},
		created(){
			// this.$store.state.showBottomNav = false
		},
		methods:{
			login:function(){
				if(this.admin === 'admin' && this.passWord == "123456"){
					window.sessionStorage.setItem('mstr','6330781a32739733083416845e4a9e2f3c504f139b353e7a74326101393f8f0468542d0d2016343e4256170b91153036637252521188319320971709b4933e486e5232fffe48f25ffba0')
					this.$router.push('/')
					document.getElementById('Loading').style.display="block";
				}else{
					this.text = '账号或密码不正确!'
				}
			}
		}
	}
</script>

<style lang="scss">
.publicBg{
	background-size:.5rem .5rem!important;
	background-position: 0.1rem 0.1rem!important;
}
.login{
	width: 100%;
	height: 100vh;
	font-size: 0.3rem;
	background: url(assets/pulic/login.jpg) no-repeat;
	background-size: 100% 100%;
	p{
		line-height: 100%;
		text-align: center;
		color: #fff;
	}
	.header{
		display: flex;
		margin-top:2rem;
		img{
			width: 3rem;
			height: 3rem;
			border-radius: 100%;
			margin: 0 auto;
		}
	}
	.loading-box{ 
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		margin-top: 2rem;
		input{
			height: .6rem;
			border: none;
			outline:none;
			margin-bottom: .5rem;
			background:transparent;
			border-bottom: 1px solid #fff;
			padding:0.1rem;
			color: #fff;
			padding-left: 1rem;
			font-size: 0.3rem;
		}
		input:nth-child(1){
			background: url(assets/pulic/admin.png) no-repeat;
			@extend.publicBg;
		}
		input:nth-child(2){
			background:url(assets/pulic/passWord.png) no-repeat;
			@extend.publicBg;
		}
	}
	.text{
		color:#D52B2B;
		text-align: center;
		height: 0.3rem;
	}
	.btn{
		width: 80%;
		height:0.8rem;
		background: #ee611f;
		color:#fff;
		margin: 0 auto;
		font-size: 0.35rem;
		line-height: 0.8rem;
		text-align: center;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}
}
</style>
