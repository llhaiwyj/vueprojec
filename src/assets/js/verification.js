// 使用此组件需要引入el-ui
export default {
	/**
	 * [UserName description] 验证用户名
	 * @param {[type]} UserN [description]
	 * @param {[type]} TipY  [description]
	 */
	UserName: function(UserN, tishi, yu) {
		if(UserN == "") {
			tishi(yu);
			return false;
		};
	},
	// keyup时判断禁止输入空格
	KeyupUN: function(UserN, tishi, yu) {
		var regu = /^ +| +$/g; // 匹配空格
		var result;
		if(regu.test(UserN)) {
			tishi(yu);
			result = UserN.replace(/^\s+|\s+$/g, '');
		} else {
			result = UserN
		}
		return result;
	},
	// 判断密码输入框
	PassWord: function(PassW, tishi, Fyu, pass, Syu) {
		if(PassW == "") {
			tishi(Fyu);
			return false;
		};
		if(pass.test(PassW, Syu)) {
			tishi(Syu);
			return false;
		};

	},
	// 判断手机号
	PhoneNum: function(phonenum, Fyu) {
		if(phonenum == "") {
			tishi(Fyu);
			return false;
		};
	},
	getid: function(argument) {
		document.getElementById(argument).click();
	},
	permission(MyAjax, MyUrl, myid,role) {
		MyAjax.post(MyUrl, { menuID: myid }).then(data => {
				if(data.data.m01 == "1") {
					role.isShowAdd = true;
				}
				if(data.data.m02 == "1") {
					role.isShowDel = true;
				}
				if(data.data.m03 == "1") {
					role.isShowUpdate = true;
				}
			})
			.catch((error) => {
				console.log(error)
			})
	},
};	