<template>
	<div class="uploadimage">
		<div id="buttonfile" @mouseenter="enterpointer" @mouseleave="exportpointer">
			<div class="moren bai100 " @click="clickme">
				<img class="bai100 isImage" :src="uptest" alt="添加图片">
				<p class="isFiles bai100">{{uptest}}</p>
			</div>
			<div class="xiugai bai100" v-show="isflag">
				<div class="xiugaileft" @click.stop="deleteimg">删除</div>
				<div class="xiugairight" @click.stop="setimg">修改</div>
			</div>
		</div>
		<input type="file" @change="update($event,'0')" accept="image/*" capture="camera" name="inputfile" class="filehidden" />
	</div>
</template>
<script>
	export default {
		props: ["childmessage", "arr"],
		data() {
			return {
				isflag: false,
				uptestfile: '',
				uptest: "../../static/tjzp.png",
			}
		},
		mounted: function() {
			this.ifimage();
			console.log(this.uptest);
		
		},
		watch: {},
		methods: {
			acceptfather(FROMFA){
				this.uptest = FROMFA;
			    console.log(this.uptest);
				
			},
			ifimage() {
				let isfilearr = document.getElementsByClassName("moren");
				console.log(isfilearr);
				if(this.childmessage == 1) {
					isfilearr[parseInt(this.arr)].children[0].style.display = "block";
					isfilearr[parseInt(this.arr)].children[1].style.display = "none";
				   console.log(isfilearr[parseInt(this.arr)].children[0]);
					
				} else if(this.childmessage == 0) {
					isfilearr[parseInt(this.arr)].children[0].style.display = "none";
					isfilearr[parseInt(this.arr)].children[1].style.display = "block";
				   console.log(isfilearr[parseInt(this.arr)].children[1]);
					
				}

			},
			clickme() {
				let array = document.getElementsByName("inputfile");
				array[parseInt(this.arr)].click();
			},
			enterpointer() {
				if(this.uptest == "../../static/tjzp.png") {
					this.isflag = false;
				} else {
					this.isflag = true;
				}
			},
			exportpointer() {
				this.isflag = false;
			},
			deleteimg() {
				this.$ajax.post(`${this.$url}/bussiness/deleteUpload.html`, {
						servicePath: this.uptest,
						chunk: "0"
					}).then(data => {
						if(data.data.flag == true) {
							this.$message.error('删除成功');
							this.isflag = false;
							this.uptest = "../../static/tjzp.png";
						}
					})
					.catch((error) => {
						console.log(error)
					})
			},
			setimg() {
				this.deleteimg();
				this.clickme();
			},
			update(e, flag) {
				flag = this.childmessage;
				let file = e.target.files[0];
				let param = new FormData(); //创建form对象
				param.append('file', file, file.name); //通过append向form对象添加数据
				console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				param.append('chunk', flag); //上传的第一个 类型0 文本类型  第二个1图片类型 第三个 2 图片类型
				if(flag == '1') {
					if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(file.name)) {

						this.$message({
							type: 'success',
							message: '请传正确的图片格式!'
						});
						return false
					}
					let size = Math.floor(file.size / 1024);
					if(size > 5000) {
						this.$message({
							type: 'success',
							message: '您上传的图片太大请限制在100k内!'

						});
						return false
					}
				} else if(flag == '0') {
					if(!/.(p12|txt)$/.test(file.name)) {
						this.$message({
							type: 'success',
							message: '请传正确的文件类型!'
						});
						return false
					}
				}
				const instance = this.$ajax.create({
					withCredentials: true
				})
				console.log(param);
				instance.post(`${this.$url}/bussiness/upload.html`, param)
					.then(response => {
						console.log(response.data);
						if(response.data.flag == true && response.data.status == 1) {
							if(flag == 0) {
								this.uptest = response.data.content;
							} else {
								this.uptest = "http://ykttest.oss-cn-beijing.aliyuncs.com/" + response.data.content;
							}
							this.$emit('tofather', this.uptest);
						}
					})
			},
		}
	}
</script>
<style scoped>
	.uploadimage{
		width:100px;
		float:left;
		margin-right:10px;
	}
	.filehidden {
	 display: none;
	}
	
	.isFiles {
		border: 2px solid #C0CCDA;
		display: none;
	}
	
	#buttonfile {
		width: 100px;
		height: 60px;
		font-size: 0px;
		position: relative;
	}
	
	.bai100 {
		width: 100%;
		height: 100%;
	}
	
	.moren,
	.xiugai {
		border: 1px solid #C0CCDA;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.xiugai {
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.xiugaileft,
	.xiugairight {
		float: left;
		width: 48%;
		height: 100%;
		border: 1px solid #C0CCDA;
		text-align: center;
		line-height: 60px;
		color: red;
		font-size: 14px;
		
	}
</style>