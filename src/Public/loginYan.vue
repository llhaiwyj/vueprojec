<template>
	<div class="main">
		<input class="UserName" type="text" placeholder="请输入用户名" v-model="UserName" v-on:keyup="RemoveSpaces" v-show="isfalse"/>
		<input class="PhoneNum" type="tel" placeholder="请输入手机号" v-model="PhoneNum" v-on:keyup="RemoveSpacesP" v-show="isfalseP"/>
		<input class="email" type="text" placeholder="请输入邮箱" v-model="Email" v-on:keyup="RemoveSpacesE" v-show="isfalseE"/>
		<input class="IDcard" type="text" placeholder="请输入身份证号" v-model="CardID" v-on:keyup="RemoveSpacesC" v-show="isfalseC"/>
		<input class="password" type="password" placeholder="请输入密码" v-model="Password" v-on:keyup="RemoveSpacesPs" v-show="isfalsePs"/>
		<input class="yanzhengma" type="text" placeholder="请输入验证码" v-model="YanZheng" v-on:keyup="RemoveSpacesY" v-show="isfalseY"/>
		<input class="sendyan" type="button" :value=sendcode @click="sendyan" v-bind="{'disabled':disabled}">    
		<button class="login" @click="login">登陆验证</button>
	</div>
	
</template>
<script>
var regust = /^ +| +$/g,
phone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
passw = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/,
card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export default{
	name:"loginyan",
	components:{

	},
	data(){
		return{
			UserName:'',
			PhoneNum:'',
			Email:'',
			CardID:'',
			Password:'',
			YanZheng:'',
			sendcode:'点击发送验证码',
			Num:0,
			disabled:false,
			// 在父组件决定该控件是否要显示
			isfalse:true,
			isfalseP:true,
			isfalseE:true,
			isfalseC:true,
			isfalseY:true,
			isfalsePs:true,  
		}
	},
	methods:{
    		// 禁止输入空格
    		RemoveSpaces(){
    			if (regust.test(this.UserName)) {
    				this.UserName=this.UserName.replace(/\s/gi,'');
    			}
    		},
    		RemoveSpacesP(){
    			if (regust.test(this.PhoneNum)) {
    				this.PhoneNum=this.PhoneNum.replace(/\s/gi,'');
    			}
    		},
    		RemoveSpacesE(){
    			if (regust.test(this.Email)) {
    				this.Email=this.Email.replace(/\s/gi,'');
    			}
    		},
    		RemoveSpacesC(){
    			if (regust.test(this.CardID)) {
    				this.CardID=this.CardID.replace(/\s/gi,'');
    			}
    		},
    		RemoveSpacesY(){
    			if (regust.test(this.YanZheng)) {
    				this.YanZheng=this.YanZheng.replace(/\s/gi,'');
    			}
    		},
    		RemoveSpacesPs(){
    			if (regust.test(this.Password)) {
    				this.Password=this.Password.replace(/\s/gi,'');
    			}
    		},
    		login(){
    			if (this.UserName == "") {
    				this.$message.error("请输入用户名");
    				return false;
    			};
    			if (this.PhoneNum == "") {
    				this.$message.error("请输入手机号");
    				return false;
    			};
    			if (!phone.test(this.PhoneNum)) {
    				this.$message.error("请输入正确格式的手机号");
    				return false;
    			};
    			if (this.Email == "") {
    				this.$message.error("请输入邮箱");
    				return false;
    			};
    			if (!email.test(this.Email)) {
    				this.$message.error("请输入正确格式的邮箱号");
    				return false;
    			};
    			if (this.CardID == "") {
    				this.$message.error("请输入身份证号");
    				return false;
    			};
    			if (!card.test(this.CardID)) {
    				this.$message.error("请输入正确格式的身份证号");
    				return false;
    			};
    			if (this.Password == "") {
    				this.$message.error("请输入密码");
    				return false;
    			};
    			if (!passw.test(this.Password)) {
    				this.$message.error("请输入正确格式的密码");
    				return false;
    			};
    			if (this.YanZheng == "") {
    				this.$message.error("请输入验证码");
    				return false;
    			};
    			// 需要在父组件中调用子组件的方法
    			this.$emit('refreshList',[this.UserName]);
    		},
    		sendyan(){
    			if (this.PhoneNum == "") {
    				this.$message.error("请先输入手机号");
    			}else if(!phone.test(this.PhoneNum)){
    				this.$message.error("请输入正确格式的手机号");
    			}else{
    				this.Num = 60;
    				this.timer();
    			}
    		},
    		timer(){
    			if(this.Num>0){
    				this.Num--;
    				this.sendcode = this.Num+"s后重新获取";
    				this.disabled = true;
    				var timer = setTimeout(this.timer,1000);
    			}else if(this.Num == 0){
    				this.sendcode = "点击发送验证码";
    				clearTimeout(timer);
    				this.disabled = false;

    			}
    		},
    		showchild(){
    			this.isfalse = false;
    			this.UserName = "123466";
    		}

    	}
    }
    </script>
    <style scoped>
    .main{
    	width: 1000px;
    	height: 500px;
    	border: 1px solid red;
    }
    </style>