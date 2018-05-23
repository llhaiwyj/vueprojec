<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商家设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body">
					<slot name="body">
						<el-row :gutter="24">
							<el-col :span="12" style="padding: 0;">
								<el-input placeholder="会员id" v-model="member.customerID"  class="name1" clearable></el-input>
								<el-input placeholder="姓名" v-model="member.username" class="name1" clearable></el-input>
								<el-input placeholder="账户余额" v-model="member.balance" class="name1" clearable></el-input>	
								<el-input placeholder="积分" v-model="member.score" class="name1" clearable></el-input>	
								<el-input placeholder="电话" v-model="member.phone"  class="name1" clearable></el-input>	
								<el-input placeholder="注册时间" v-model="member.createTime"  class="name1" clearable></el-input>	
								<el-input placeholder="最后到店时间" v-model="member.phoneNum"  class="name1" clearable></el-input>	
								<el-date-picker placeholder="生日"  v-model="member.birthday" format="yy-MM-dd" type="date"></el-date-picker >
								<el-input placeholder="未到店的天数"  v-model="member.lastDay"  class="name1" clearable></el-input>
								<!--<select placeholder="所属商家" v-model="member.bussinessName">
									<option v-for="bussiness in bussinesss" v-bind:value="bussiness.value">{{bussiness.text}}</option>
								</select>
								<select placeholder="所属门店"  v-model="member.storeName">
									<option  v-for="store in stores" v-bind:value="store.value">{{store.text}}</option>
								</select>-->
								<select placeholder="性别"  v-model="member.sex">
									<option  v-for="sexId in sexs" v-bind:value="sexId.value">{{sexId.text}}</option>
								</select>
								<select placeholder="是否为老会员"  v-model="member.isOldSys">
									<option  v-for="customer in isOldCus" v-bind:value="customer.value">{{customer.text}}</option>
								</select>
								<!--<el-input placeholder="头像" v-model="member.headImg"  class="name1" clearable></el-input>-->	
							</el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary" @click="getUpdateMember">确定</button>
						<button type="button" class="el-button el-button--default" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['member'],
		data() {
			return {
				sexs:[{
					value:'0',
					text:'男'
				},
				{
					value:'1',
					text:'女'
				}],
				isOldCus:[{
					value:'0',
					text:'否'
				},
				{
					value:'1',
					text:'是'
				}],
			}
		},
		methods: {
			//调用父组建的方法
			close: function() {
				this.$emit('close');

			},
			getUpdateMember:function(){
				console.log(this.member.birthday)
				this.$ajax.post(`${this.$url}/member/updateCustomerInformation.html`, {customerID:this.member.customerID,name: this.member.username, blance: this.member.balance, 
					score: this.member.score,phone: this.member.phone,isOldSys:this.member.isOldSys,birthday:this.member.birthday}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})   
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleNodeClick(data) {
				console.log(data);
			}
		}
		
	}
</script>

<style>
	.modal-body{
		width:97% !important;
	}
	.el-col-14{
		width:97% !important;
	}
</style>