<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商家设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>基本信息<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessID.$error }">
										<span class="mc">商家编号</span>
										<el-input @blur="test" v-model="bussinessID" @change="selectFlag('1')" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.bussinessID.required">不能为空</span>
									<span class="form-group__message" v-if="!$v.bussinessID.maxLength">能超过11位数字</span>
									<span class="form-group__message" v-if="!$v.bussinessID.aa">不能输入汉字</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessName.$error }">
										<span class="mc">商家名称：</span>
										<el-input @blur="test" v-model="bussinessName" class="name1" @change="selectFlag('2')" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.bussinessName.required">不能为空</span>
								</div>
							</el-col>
							<!--<el-col :span="7" class="gutterspan">
							  	<span class="mc">账户名称:</span>
								<el-input placeholder="" v-model="accountNumber" class="name1" clearable>
								 </el-input>
							  </el-col>-->
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessLinkPerson.$error }">
										<span class="mc">商家联系人：</span>
										<el-input @blur="test" v-model="bussinessLinkPerson" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.bussinessLinkPerson.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.phoneNum.$error }">
										<span class="mc">联系电话：</span>
										<el-input @blur="test" v-model="phoneNum" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.phoneNum.required">不能为空</span>
									<span class="form-group__message" v-if="!$v.phoneNum.numeric">只能输入数字</span>
									<span class="form-group__message" v-if="!$v.phoneNum.maxLength">不能超过11位数字</span>
									<!--  <span class="form-group__message" v-if="!$v.phoneNum.aa">手机号码输入有误</span>-->
									<!--<span class="form-group__message" v-if="!$v.phoneNum.or">请输入正确手机号</span>-->
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.scopeId.$error }">
										<span class="mc">经营类型：</span>
										<el-select @blur="test" class="xl" v-model="scopeId">
											<el-option v-for="item in accountlist" :key="item.scope" :label="item.scopeName" :value="item.scope"></el-option>
										</el-select>
									</div>
									<span class="form-group__message" v-if="!$v.scopeId.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.state.$error }">
										<span class="mc">商家状态：</span>
										<el-select @blur="test" class="xl" v-model="state">
											<el-option v-for="item in buss" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
									<span class="form-group__message" v-if="!$v.state.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.isFormal.$error }">
										<span class="mc">商家类型：</span>
										<el-select @blur="test" class="xl" v-model="isFormal" @change="checkFlag($event)">
											<el-option v-for="item in businessType" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
									<span class="form-group__message" v-if="!$v.isFormal.required">不能为空</span>
								</div>
							</el-col>
							<!--  <el-col :span="7" class="gutterspan">
							  	<span class="mc">使用时间：</span>
								<el-date-picker id="pick"  class="xl" v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
		                        </el-date-picker>
							  </el-col>	-->
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.durationTime.$error }">
										<span class="mc">开始使用时间：</span>
										<el-date-picker @blur="test" class="xl" @change="timeCalculate($event)" v-model="durationTime" type="date" placeholder="选择日期">
										</el-date-picker>
									</div>
									<span class="form-group__message" v-if="!$v.durationTime.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.renewTime.$error }">
										<span class="mc">结束使用时间：</span>
										<el-input @blur="test" v-model="renewTime" class="name1" clearable disabled="disabled">
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.renewTime.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
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
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
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
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
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
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>微信<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.wxappid.$error }">
										<span class="mc">微信appid：</span>
										<el-input @blur="test" v-model="wxappid" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.wxappid.maxLength">不能超过32位</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.wxtoken.$error }">
										<span class="mc">微信token：</span>
										<el-input @blur="test" v-model="wxtoken" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.wxtoken.aa">不能输入汉字</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.wxmchID.$error }">
										<span class="mc">微信支付ID：</span>
										<el-input @blur="test" v-model="wxmchID" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.wxmchID.aa">不能输入汉字</span>
								</div>
							</el-col>

							<!--上传文件-->
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<!-- <div class="form-group" v-bind:class="{'form-group--error': $v.wxcert.$error }">-->
									<span class="mc">微信证书：</span>
									<el-input v-model="wxcert" class="name1" disabled="disabled">
									</el-input>
									<addimg v-on:tofather="fromchild" :arr="0" :childmessage="0" style="float: right;"></addimg>
									<!--<i class="el-icon-document sc" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer"></i>
								<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
									<div class="iconde" v-show="iconshows">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg('0')"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="wxcert" class="DISnone" name="wxsecret" @change="update($event,'0')" capture="camera" />
									</div>
								</div>-->
									<!--</div>
								<span class="form-group__message" v-if="!$v.wxcert.required">不能为空</span>-->
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<!-- <div class="form-group" v-bind:class="{'form-group--error': $v.wxcert.$error }">-->
									<span class="mc" style="float: left;">商家图片：</span>
									<div v-model="uploadfile">
										<addimg v-on:tofather="fromchild1" :arr="1" :childmessage="1"></addimg>
									</div>
									<!--<i class="el-icon-document sc" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer"></i>
								<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
									<div class="iconde" v-show="iconshows">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg('0')"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="wxcert" class="DISnone" name="wxsecret" @change="update($event,'0')" capture="camera" />
									</div>
								</div>-->
									<!--</div>
								<span class="form-group__message" v-if="!$v.wxcert.required">不能为空</span>-->
								</div>
							</el-col>
							<!--<el-col class="row shangchuan" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="weixin">
									<h5>商家图片<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
								<div v-model="uploadfile">
									<addimg v-on:tofather="fromchild1" :arr="1" :childmessage="1"></addimg>
								</div>
							</el-col>-->

							<!--<addimg :tofather="fromchild2" :arr="2" :childmessage="1" ></addimg>-->
							<!--<div class="iconde" v-show="iconshow">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg('1')"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="inputfile"  class="DISnone" name="aaaa" @change="update($event,'1')" capture="camera">
									</div>-->
							<!--end上传文件-->
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>支付宝<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.zfbappID.$error }">
										<span class="mc">支付宝号pid：</span>
										<el-input @blur="test" v-model="zfbappID" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.zfbappID.aa">不能输入汉字</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.zfbprivateKey.$error }">
										<span class="mc">支付密钥：</span>
										<el-input @blur="test" v-model="zfbprivateKey" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.zfbprivateKey.aa">不能输入汉字</span>
								</div>
							</el-col>
						</el-row>

					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="submitAdd">确定</el-button>
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
		props: ['accountlist', 'uuid'],
		components: {
			addimg
		},
		data() {
			return {
				menuId: this.$route.query.menuIds,
				listCity: this.$storage.fetch("listCity"),
				bussinessID: '',
				bussinessName: '',
				bussinessLinkPerson: '',
				wxappid: '',
				wxtoken: '',
				wxmchID: '',
				wxcert: '',
				durationTime: '',
				renewTime: '',
				zfbappID: '',
				zfbprivateKey: '',
				phoneNum: '',
				scopeId: '',
				provs: [],
				prov: '',
				city: '',
				district: '东城区',
				cityArr: [],
				districtArr: [],
				state: '',
				diqu: '',
				proves: '120000',
				citys: '',
				upload: '',
				uploadfile: '',
				uploadpic: '',
				uploadimg: '',
				COMiMAGE: this.$delurl,
				iconshow: false,
				iconshows: false,
				isFormal: '',
				businessType: [{
					value: '30',
					label: '试用'
				}, {
					value: '365',
					label: '正式'
				}],
				buss: [{
						value: '0',
						label: '停用'
					},
					{
						value: '1',
						label: '启用'
					}
				]
			}
		},
		validations: {
			bussinessID: {
				required,
				maxLength: maxLength(11),
				aa: value => {
					if(!/[\u4E00-\u9FA5]/g.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			},
			bussinessName: {
				required
			},
			bussinessLinkPerson: {
				required
			},
			phoneNum: {
				required,
				numeric,
				maxLength: maxLength(11),
			},
			scopeId: {
				required
			},
			state: {
				required
			},
			isFormal: {
				required
			},
			durationTime: {
				required
			},
			renewTime: {
				required
			},
			proves: {
				required
			},
			citys: {
				required
			},
			diqu: {
				required
			},
			wxappid: {
				maxLength: maxLength(32),
			},
			wxtoken: {
				aa: value => {
					if(!/[\u4E00-\u9FA5]/g.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			},
			wxmchID: {
				aa: value => {
					if(!/[\u4E00-\u9FA5]/g.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			},
			zfbappID: {
				aa: value => {
					if(!/[\u4E00-\u9FA5]/g.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			},
			zfbprivateKey: {
				aa: value => {
					if(!/[\u4E00-\u9FA5]/g.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			},
		},
		mounted: function() {
			//			this.uploadfile = this.COMiMAGE;

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
		/*watch: {
			cityArr: {　
				handler: function(newVal, oldVal) {
					console.log('ssssss', newVal);
				},
				deep: true　　
			}
		},*/
		methods: {
			fromchild(childMsg) {
				console.log(childMsg)
				this.wxcert = childMsg
				console.log(this.wxcert)
			},
			fromchild1(childMsg) {
				console.log(childMsg)
				this.uploadfile = childMsg
				console.log(this.uploadfile)
			},
			test() {
				this.$v.bussinessID.$touch()
				if(this.$v.bussinessID.$error) {
					return false;
				}
				this.$v.bussinessName.$touch()
				if(this.$v.bussinessName.$error) {
					return false;
				}
				this.$v.bussinessLinkPerson.$touch()
				if(this.$v.bussinessLinkPerson.$error) {
					return false;
				}
				this.$v.phoneNum.$touch()
				if(this.$v.phoneNum.$error) {
					return false;
				}
				this.$v.scopeId.$touch()
				if(this.$v.scopeId.$error) {
					return false;
				}
				this.$v.state.$touch()
				if(this.$v.state.$error) {
					return false;
				}
				this.$v.isFormal.$touch()
				if(this.$v.isFormal.$error) {
					return false;
				}
				this.$v.durationTime.$touch()
				if(this.$v.durationTime.$error) {
					return false;
				}
				this.$v.renewTime.$touch()
				if(this.$v.renewTime.$error) {
					return false;
				}
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
				this.$v.wxappid.$touch()
				if(this.$v.wxappid.$error) {
					return false;
				}
				this.$v.wxtoken.$touch()
				if(this.$v.wxtoken.$error) {
					return false;
				}
				this.$v.wxmchID.$touch()
				if(this.$v.wxmchID.$error) {
					return false;
				}
				this.$v.zfbappID.$touch()
				if(this.$v.zfbappID.$error) {
					return false;
				}
				this.$v.zfbprivateKey.$touch()
				if(this.$v.zfbprivateKey.$error) {
					return false;
				}

				return true;
			},
			selectFlag(flag) {
				//封装参数
				var dataMap = {};

				let bussinessID = '';
				if(flag == 2) {
					if(this.bussinessID == '') {
						this.$message({
							type: 'error',
							message: '商户编号不能空!'
						});
						this.bussinessName = '';
						return false
					}

					dataMap['bussinessName'] = this.bussinessName;
					dataMap['bussinessID'] = '';
					//查询名称
				} else {
					dataMap['bussinessName'] = '';
					dataMap['bussinessID'] = this.bussinessID;

				}

				var jsonData = JSON.stringify(dataMap);
				//请求 后台返回数据
				this.$ajax.post(`${this.$url}/bussiness/selectBussinessByNameAndID.html`, {
						jsonData: jsonData
					}).then(data => {
						if(data.data == true) {} else {
							this.$message({
								type: 'error',
								message: '商家编号重复  请重新填写'
							});
							//									alert(data.data)

						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			},
			checkFlag(e) {
				console.log(e)
				this.renewTime = '';
				if(this.durationTime != '') {
					var dd = new Date(this.durationTime); //Wed Apr 04 2018 00:00:00 GMT+0800 (中国标准时间)
					// alert(dd.getDate())
					dd.setDate(dd.getDate() + Number(this.isFormal)); //获取AddDayCount天后的日期    
					var y = dd.getFullYear();
					var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0    
					var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0    
					this.renewTime = y + "-" + m + "-" + d
				}
				//this.e.target.value
				//				this.durationTime = '';

				//this.isFormal='';
			},
			timeCalculate(e) {
				if(this.isFormal == '') {
					this.$message({
						type: 'error',
						message: '请先选中商户类型!'
					});
					//					this.durationTime = '';
					return false
				}
				//alert(e)
				// var AddDayCount=20;

				var dd = new Date(e); //Wed Apr 04 2018 00:00:00 GMT+0800 (中国标准时间)
				// alert(dd.getDate())
				dd.setDate(dd.getDate() + Number(this.isFormal)); //获取AddDayCount天后的日期    
				var y = dd.getFullYear();
				var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0    
				var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0    
				this.renewTime = y + "-" + m + "-" + d
				//alert(y+"-"+m+"-"+d)
			},
			areaprov: function(even) {
				//this.$emit('areaprov', event.target.value);
				this.proves = even.target.value

				this.cityArr = [];
				for(let i in this.listCity) {
					if(this.proves == this.listCity[i].parentID) {
						//						this.cityArr = this.arr[i];
						//this.$set(this.cityArr, i, this.arrLists[i])
						//vue.set(this.cityArr, i, this.arrLists[i])
						//this.cityArr.push(this.arrLists[i])
						this.cityArr.push(this.listCity[i]);
					}
				}
				console.log(this.prov)
			},
			areacity: function(event) {
				//this.$emit('areaprovs', event.target.value)
				this.citys = event.target.value
				this.districtArr = [];
				for(let i in this.listCity) {
					if(this.citys == this.listCity[i].parentID) {

						this.districtArr.push(this.listCity[i]);
					}
				}
			},
			xianqus(event) {
				//				console.log(this.rangelist)
				this.diqu = event.target.value
			},

			accounts(event) {
				this.fanwei = event.target.value
			},

			submitAdd() {
				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
				if(!this.test()) {
					return false;
				}
				if(!r.test(this.phoneNum)) {
					this.$message.error('请填写正确的手机号码');
					return false;
				}
				//				let flags=this.checkeds()
				//             if(flags){
				let areaname = '';
				for(let i = 0; i < this.listCity.length; i++) {
					if(this.proves == this.listCity[i].ID || this.citys == this.listCity[i].ID || this.diqu == this.listCity[i].ID) {
						if(areaname == '') {
							areaname = this.listCity[i].areaName
						} else {
							areaname = areaname + ',' + this.listCity[i].areaName
						}

					}
				}

				this.durationTime = this.GMTToStr(this.durationTime);

				//md5加密
				var dataMap = {};
				dataMap['bussinessID'] = this.bussinessID;
				dataMap['bussinessName'] = this.bussinessName;
				dataMap['bussinessLinkPerson'] = this.bussinessLinkPerson;
				dataMap['phoneNum'] = this.phoneNum;
				dataMap['isFormal'] = this.isFormal;
				dataMap['scopeId'] = this.scopeId;
				dataMap['state'] = this.state;
				dataMap['provinceID'] = this.proves;
				dataMap['address'] = areaname;
				dataMap['wxappid'] = this.wxappid;

				var sign = this.$utilMd5s.md5Code(JSON.stringify(dataMap));
				dataMap['wxlogo'] = this.uploadfile;
				dataMap['zfbappID'] = this.zfbappID;
				dataMap['zfbprivateKey'] = this.zfbprivateKey;
				dataMap['wxcert'] = this.wxcert;
				dataMap['wxmchID'] = this.wxmchID;
				dataMap['wxtoken'] = this.wxtoken;

				dataMap['durationTime'] = this.durationTime;
				dataMap['renewTime'] = this.renewTime;

				dataMap['cityID'] = this.citys;
				dataMap['countyID'] = this.diqu;
				dataMap['sign'] = sign;
				//防止重复提交
				dataMap['uuid'] = this.uuid;

				var jsonData = JSON.stringify(dataMap);

				this.$ajax.post(`${this.$url}/bussiness/insertBussiness.html`, {
						jsonData: jsonData
					}).then(data => {

						console.log(data)
						this.$emit('closes');
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
				//             }

			},
			GMTToStr(time) {
				let date = new Date(time)
				let Str = date.getFullYear() + '-' +
					(date.getMonth() + 1) + '-' +
					date.getDate()
				return Str
			},
			close: function() {
				//				this.bussinessID='';
				//				this.bussinessName='';
				//				this.bussinessLinkPerson='';
				//				this.phoneNum ='';
				//				this.isFormal='';
				//				this.scopeId ='';
				//				this.durationTime='';
				//				this.renewTime ='';
				//				this.proves='';
				//				this.citys='';
				//				this.diqu='';
				//				this.wxappid='';
				//				this.wxtoken='';
				//				this.wxmchID ='';
				//				this.wxcert='';
				//				this.zfbapp_id='' ;
				//				this.zfbprivateKey='';
				//				this.uploadfile='';
				this.$emit('close');
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
					}
				})
			},
		},
	}
</script>