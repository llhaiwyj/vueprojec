<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>会员管理---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.username.$error }">
									<span class="mc">姓名</span>
									<el-input @blur="test" v-model="username" class="name1" clearable>
									</el-input>
								</div>
								<span class="form-group__message" v-if="!$v.username.required">不能为空</span>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.sex.$error }">
									<span class="mc">性别</span>
								    <el-select @blur="test" class="xl" v-model="sex">
										<el-option v-for="item in sexs" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select>
								</div>
								<span class="form-group__message" v-if="!$v.sex.required">不能为空</span>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.phone.$error }">
									<span class="mc">电话</span>
									<el-input @blur="test" v-model="phone" class="name1" clearable>
									</el-input>
								</div>
								<span class="form-group__message" v-if="!$v.phone.required">不能为空</span>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.birthday.$error }">
									<span class="mc">生日</span>
									<el-date-picker v-model="birthday" class="xl" @blur="test" type="date">
									</el-date-picker>
								</div>
								<span class="form-group__message" v-if="!$v.birthday.required">不能为空</span>
							</div>
						</el-col>
						<!--<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.createTime.$error }">
									<span class="mc">注册时间</span>
									<el-date-picker v-model="createTime" class="xl" @blur="test" type="date">
									</el-date-picker>
								</div>
								<span class="form-group__message" v-if="!$v.createTime.required">不能为空</span>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.lastTime.$error }">
									<span class="mc">最后到店时间</span>
									<el-date-picker v-model="lastTime" class="xl" @blur="test" type="date">
									</el-date-picker>
								</div>
								<span class="form-group__message" v-if="!$v.lastTime.required">不能为空</span>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.notStoreDay.$error }">
								<span class="mc">未到店天数</span>
								<el-input @blur="test" v-model="notStoreDay" class="name1">
								</el-input>
								</div>
								<span class="form-group__message" v-if="!$v.notStoreDay.required">不能为空</span>
							</div>
						</el-col>-->
						<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.proves.$error }">
										<span class="mc">所在省：</span>
										<select @blur="test" class="xl" v-model="proves" v-on:change="areaprov($event)">
											<option v-for="(k,index) in provs" :value="k.ID">{{k.areaName}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.proves.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.citys.$error }">
										<span class="mc">所在市：</span>
										<select @blur="test" class="xl" v-model="citys" v-on:change="areacity($event)">
											<option v-for="k  in cityArr" :value="k.ID">{{k.areaName}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.citys.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.diqu.$error }">
										<span class="mc">所在区：</span>
										<select @blur="test" class="xl" v-model="diqu" v-on:change="xianqus($event)">
											<option v-for="l in districtArr" :value="l.ID">{{l.areaName}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.diqu.required">不能为空</span>
								</div>
							</el-col>
					</slot>
					<addimg v-on:tofather="fromchild" :arr="0" :childmessage="1" class='imgs'></addimg>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { required, numeric, minLength, maxLength, or } from 'vuelidate/lib/validators'
	import addimg from '../../Public/uploadimg'
	export default {
		props: ['uuid'],
		components: {
			addimg
		},
		data() {
			return {
				menuId: this.$route.query.menuIds,
				listCity: this.$storage.fetch("listCity"),
				bussinessID: this.$storage.fetch("buss"),
				provs:[],
				cityArr:[],
				districtArr:[],
				proves:'',
				citys:'',
				diqu:'',
				sexs: [{
						value: '0',
						label: '男'
					},
					{
						value: '1',
						label: '女'
					}
				],
				username:'',
				sex:'',
				phone:'',
				birthday:'',
//				createTime:'',
//				lastTime:'',
//				notStoreDay:'',
				headImg:'',
			}
		},
		validations: {
			username: {
				required
			},
			sex: {
				required
			},
			phone: {
				required
			},
			birthday: {
				required
			},
//			createTime: {
//				required
//			},
//			lastTime: {
//				required
//			},
//			notStoreDay: {
//				required
//			},
			proves: {
				required
			},
			citys: {
				required
			},
			diqu: {
				required
			},

		},
		mounted: function() {
			for(let i in this.listCity) {
				if(this.listCity[i].parentID == '0') { 
					this.provs.push(this.listCity[i])
				}
			}
			for(let i in this.listCity) {
				if(this.listCity[i].parentID == this.proves) {
					this.cityArr.push(this.listCity[i])
				}
			}
		},
		methods: {
			test() {
				this.$v.username.$touch()
				if(this.$v.username.$error) {
					return false;
				}
				this.$v.sex.$touch()
				if(this.$v.sex.$error) {
					return false;
				}
				this.$v.phone.$touch()
				if(this.$v.phone.$error) {
					return false;
				}
				this.$v.birthday.$touch()
				if(this.$v.birthday.$error) {
					return false;
				}
//				this.$v.createTime.$touch()
//				if(this.$v.createTime.$error) {
//					return false;
//				}
//				this.$v.lastTime.$touch()
//				if(this.$v.lastTime.$error) {
//					return false;
//				}
//				this.$v.notStoreDay.$touch()
//				if(this.$v.notStoreDay.$error) {
//					return false;
//				}
				this.$v.proves.$touch()
				if(this.$v.proves.$error) {
					return false;
				}
				this.$v.citys.$touch()
				if(this.$v.citys.$error) {
					return false;
				}
				this.$v.diqu.$touch()
				if(this.$v.diqu.$error) {
					return false;
				}
				return true;
			},
			fromchild(childMsg) {
				this.headImg = childMsg
//				this.picurl.push(img)
			},
			areaprov: function(even) {
				this.proves = even.target.value

				this.cityArr = [];
				for(let i in this.listCity) {
					if(this.proves == this.listCity[i].parentID) {
						this.cityArr.push(this.listCity[i]);
					}
				}
				console.log(this.prov)
			},
			areacity: function(event) {
				this.citys = event.target.value
				this.districtArr = [];
				for(let i in this.listCity) {
					if(this.citys == this.listCity[i].parentID) {
						this.districtArr.push(this.listCity[i]);
					}
				}
			},
			xianqus(event) {
				this.diqu = event.target.value
			},
			close() {
				this.$emit('close');
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
					}
				})
			},
			closeModal() {
				this.listadd = false
			},
			determine(){
				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
				if(!this.test()) {
					return false;
				}
				if(!r.test(this.phone)) {
					this.$message.error('请填写正确的手机号码');
					return false;
				}
				this.birthday = this.formatDate(this.birthday);
//				this.createTime = this.formatDate(this.createTime);
//				this.lastTime = this.formatDate(this.lastTime);
				
//				var dd = new Date(); //Wed Apr 04 2018 00:00:00 GMT+0800 (中国标准时间)
//				
//				// alert(dd.getDate())
//				console.log(dd.toLocaleDateString())
//				console.log(this.lastTime)
//				dd.setDate(dd.toLocaleDateString() - Number(this.lastTime)); //获取AddDayCount天后的日期    
//				var y = dd.getFullYear();
//				var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0    
//				var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0    
//				this.notStoreDay = y + "-" + m + "-" + d
//				console.log(this.notStoreDay)
				//alert(y+"-"+m+"-"+d)
				
				this.$ajax.post(`${this.$url}/customer/insertCustomer.html`, {
					    uuid:this.uuid,
						username: this.username,
						sex: this.sex,
						phone: this.phone,
//						createTime:this.createTime,
//						lastTime:this.lastTime,
//						notStoreDay:this.notStoreDay,
						birthday: this.birthday,
						province: this.proves,
						city: this.citys,
						country: this.diqu,
						headImg:this.headImg,
						bussinessID:this.bussinessID
					}).then(restaurants => {
						this.$message('添加成功');
						this.$emit('closes');
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('添加失败,请核实您的信息');
					})
			},
			formatDate: function(time) {
				var y = time.getFullYear();
				var m = time.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				var d = time.getDate();
				d = d < 10 ? ('0' + d) : d;
				return y + '-' + m + '-' + d;
			},

		}
	}
</script>
<style>

</style>