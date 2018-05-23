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
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessID.$error }">
							 	<span class="mc">商家编号</span>
								 <el-input @blur="test" v-model="bussinessID" @change="selectFlag('1')" class="name1" clearable>
								 </el-input>
								 </div>
								<span class="form-group__message" v-if="!$v.bussinessID.required">不能为空</span>
								</div>
							 </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessName.$error }">
							  	<span class="mc">商户名称：</span>
								 <el-input @blur="test" v-model="bussinessName" class="name1"  @change="selectFlag('2')" clearable>
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
							  <el-col :span="7" class="gutterspan">
							  <div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessLinkPerson.$error }">
							  	<span class="mc">商户联系人：</span>
								<el-input @blur="test" v-model="bussinessLinkPerson" class="name1" clearable>
								 </el-input>
								  </div>
								<span class="form-group__message" v-if="!$v.bussinessLinkPerson.required">不能为空</span>
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.phoneNum.$error }">
							  	<span class="mc">联系电话：</span>
								<el-input  @blur="test" v-model="phoneNum" class="name1" clearable>
								 </el-input>
								  </div>
								<span class="form-group__message" v-if="!$v.phoneNum.required">不能为空</span>
								<span class="form-group__message" v-if="!$v.phoneNum.numeric">只能输入数字</span>
								<span class="form-group__message" v-if="!$v.phoneNum.minLength">请输入正确手机号</span>
								<span class="form-group__message" v-if="!$v.phoneNum.maxLength">能超过11位数字</span>
								<!--<span class="form-group__message" v-if="!$v.phoneNum.or">请输入正确手机号</span>-->
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.scopeId.$error }">
							  	<span class="mc">经营类型：</span>
								<el-select  @blur="test" class="xl" v-model="scopeId">
									<el-option v-for="item in accountlist" :key="item.scope" :label="item.scopeName" :value="item.scope"></el-option>
								</el-select>
								</div>
								<span class="form-group__message" v-if="!$v.scopeId.required">不能为空</span>								
								</div>
							  </el-col>	
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.isFormal.$error }">
							  	<span class="mc">商户类型：</span>
								<el-select  @blur="test" class="xl" v-model="isFormal" @change="checkFlag($event)">
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
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.durationTime.$error }">
							  	<span class="mc">开始使用时间：</span>
								<el-date-picker @blur="test" class="xl"
										@change="timeCalculate($event)"
									      v-model="durationTime"
									      type="date"
									      placeholder="选择日期">
									   </el-date-picker>
								</div>
								<span class="form-group__message" v-if="!$v.durationTime.required">不能为空</span>								
								</div>
							  </el-col>	
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.renewTime.$error }">
							 	<span class="mc">结束使用时间：</span>
								 <el-input @blur="test" v-model="renewTime" class="name1" clearable>
								 </el-input>
								 </div>
								<span class="form-group__message" v-if="!$v.renewTime.required">不能为空</span>								
								</div>
							 </el-col>
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
								<select  @blur="test" class="xl" v-model="citys" v-on:change="areacity($event)">
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
								<select   @blur="test" class="xl" v-model="diqu" v-on:change="xianqus($event)">
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
							<el-col :span="7" class="gutterspan" >
								<div class="box">
							  <!-- 	<div class="form-group" v-bind:class="{'form-group--error': $v.wxappid.$error }">-->
							 	<span class="mc">微信appid：</span>
								<el-input @blur="test" v-model="wxappid" class="name1" clearable>
								 </el-input>
								<!-- </div>-->
							<!--	<span class="form-group__message" v-if="!$v.wxappid.required">不能为空</span>			-->					
								</div>
							</el-col>							 
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   <!--	<div class="form-group" v-bind:class="{'form-group--error': $v.wxtoken.$error }">-->
							 	<span class="mc">微信token：</span>
								<!--<el-select class="xl" v-model="wxtoken">
									<el-option v-for="item in businessScopes" :key="item.scope" :label="item.scopeNamew" :value="item.scope"></el-option>
								</el-select>-->
								<el-input @blur="test" v-model="wxtoken" class="name1" clearable>
								 </el-input>
								  <!--</div>
								<span class="form-group__message" v-if="!$v.wxtoken.required">不能为空</span>								-->
								</div>
							 </el-col>
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							   	<!--<div class="form-group" v-bind:class="{'form-group--error': $v.wxmch_id.$error }">-->
							 	<span class="mc">微信支付ID：</span>
								<el-input  @blur="test"  v-model="wxmch_id" class="name1" clearable>
								 </el-input>
								 <!--</div>
								<span class="form-group__message" v-if="!$v.wxmch_id.required">不能为空</span>								-->
								</div>
							 </el-col>
							 <!--上传文件-->
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   <!--	<div class="form-group" v-bind:class="{'form-group--error': $v.wxcert.$error }">-->
							 	<span class="mc">微信证书：</span>	
							 	<el-input @blur="test" v-model="wxcert" class="name1" >
								 </el-input>
								 <i class="el-icon-document sc" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer"></i>
								<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
									<div class="iconde" v-show="iconshows">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg('0')"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="wxcert" class="DISnone" name="wxsecret" @change="update($event,'0')" capture="camera" />
									</div>
								</div>
								 <!--</div>
								<span class="form-group__message" v-if="!$v.wxcert.required">不能为空</span>								-->
								</div>
							 </el-col>
							 <el-col class="row shangchuan" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="weixin">
									<h5>商户图片<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5></div>
								<div class="z_file" @click="clickme1" @mouseenter="enterpointer1" @mouseleave="exportpointer1">
									<img :src="uploadfile" class="bai100">
									<div class="iconde" v-show="iconshow">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg('1')"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="inputfile"  class="DISnone" name="aaaa" @change="update($event,'1')" capture="camera">
									</div>
								</div>
							</el-col>
							  <!--end上传文件-->
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform"> 
									<h5>支付宝<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
							   <!--	<div class="form-group" v-bind:class="{'form-group--error': $v.zfbapp_id.$error }">-->
							 	<span class="mc">支付宝号pid：</span>
								<el-input @blur="test" v-model="zfbapp_id" class="name1" clearable>
								 </el-input>
								  <!--</div>
								<span class="form-group__message" v-if="!$v.zfbapp_id.required">不能为空</span>								-->
								</div>
							 </el-col>
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							   	<!--<div class="form-group" v-bind:class="{'form-group--error': $v.zfbprivateKey.$error }">-->
							 	<span class="mc">支付密钥：</span>
								<el-input @blur="test" v-model="zfbprivateKey" class="name1" clearable>
								 </el-input>
								 <!--</div>
								<span class="form-group__message" v-if="!$v.zfbprivateKey.required">不能为空</span>								-->
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
	import { required,numeric,minLength,maxLength,or} from 'vuelidate/lib/validators'
	export default {
		props: [ 'accountlist'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				listCity:this.$storage.fetch("listCity"),
				bussinessID: '',
				bussinessName: '',
				bussinessLinkPerson: '',
				wxappid: '',
				wxtoken: '',
				wxmch_id: '',
				wxcert:'',
                durationTime:'',
                renewTime:'',
				zfbapp_id: '',
				zfbprivateKey: '',
				phoneNum: '',
				scopeId: '',
				provs:[],
				prov: '',
				city: '',
				district: '东城区',
				cityArr: [],
				districtArr: [],
				
				diqu: '',
				proves: '120000',
				citys: '',
				upload: '',
				uploadfile: '',
				uploadpic: '',
				uploadimg: '',
				COMiMAGE:this.$delurl,
				iconshow:false,
				iconshows:false,
				isFormal:'',
				businessType: [{
					value: '20',
					label: '试用'
				}, {
					value: '365',
					label: '正式'
				}],
			}
		},
		validations: {   
		    bussinessID: {  
		      required 
		    } , 
		    bussinessName: {  
		      required  
		    },  
		    bussinessLinkPerson: {  
		      required  
		    },
		    phoneNum: {  
		      required,
		      numeric,
		     minLength: minLength(11),
		      maxLength: maxLength(11),
		      //or:or(/^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/)
		    },
		     durationTime: {  
		      required  
		    },
		     renewTime: {  
		      required  
		    },
//		     wxappid: {  
//		      required  
//		    },
//		     wxtoken: {  
//		      required  
//		    },
//		      wxcert: {  
//		      required  
//		    },
//		      wxmch_id: {  
//		      required  
//		    },
//		      zfbapp_id: {  
//		      required  
//		    },
		      scopeId: {  
		      required  
		    },
		      citys: {  
		      required  
		    },
		     diqu: {  
		      required  
		    }, 
//		    zfbprivateKey: {
//		      required  
//		    },
		    isFormal: {
		      required  
		    },
		    
		    proves: {  
		      required  
		    },
    },
		mounted: function() {			
			this.uploadfile = this.COMiMAGE;
			this.wxcert= this.COMiMAGE;
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
			test(){
				this.$v.bussinessID.$touch()
             	if(this.$v.bussinessID.$error){
					return false;
				}
             	this.$v.bussinessName.$touch()
             	if(this.$v.bussinessName.$error){
					return false;
				}
             	this.$v.bussinessLinkPerson.$touch()
             	if(this.$v.bussinessLinkPerson.$error){
					return false;
				}
             	this.$v.phoneNum.$touch()
             	if(this.$v.phoneNum.$error){
					return false;
				}
             	this.$v.durationTime.$touch()
             	if(this.$v.durationTime.$error){
					return false;
				}
             	this.$v.renewTime.$touch()
             	if(this.$v.renewTime.$error){
					return false;
				}
//           	this.$v.wxappid.$touch()
//           	if(this.$v.wxappid.$error){
//					return false;
//				}
//           	this.$v.wxtoken.$touch()
//           	if(this.$v.wxtoken.$error){
//					return false;
//				}
//           	this.$v.wxcert.$touch()
//           	if(this.$v.wxcert.$error){
//					return false;
//				}
//           	this.$v.wxmch_id.$touch()
//           	if(this.$v.wxmch_id.$error){
//					return false;
//				}
//           	this.$v.zfbapp_id.$touch()
//           	if(this.$v.zfbapp_id.$error){
//					return false;
//				}
             	this.$v.isFormal.$touch()
             	if(this.$v.isFormal.$error){
					return false;
				}
             	this.$v.citys.$touch()
             	if(this.$v.citys.$error){
					return false;
				}
             	this.$v.scopeId.$touch()
             	if(this.$v.scopeId.$error){
					return false;
				}
             	this.$v.diqu.$touch()
             	if(this.$v.diqu.$error){
					return false;
				}
//           	this.$v.zfbprivateKey.$touch()
//           	if(this.$v.zfbprivateKey.$error){
//					return false;
//				}
             	this.$v.proves.$touch()
             	if(this.$v.proves.$error){
					return false;
				}
             	return true;
			},
//			checkeds(){
//				   //保存点击验证
//				let tip = this.$message.error;
//				let tipyu = "请输入商家编号";
//				if(this.bussinessID == ""){
//  	        	this.$storage1.UserName(this.bussinessID, tip, tipyu);
//  	        	
//  	        	return false;
//  	        }
//				tipyu = "请输入商家名称";
//				if (this.bussinessName == "") {
//  				//this.$message.error("请输入查询的内容");
//	    		    this.$storage1.UserName(this.bussinessName, tip, tipyu);					
//  				return false;
//  	       } 
//  	       tipyu = "请输入联系人";
//  	        if(this.bussinessLinkPerson == ""){
//  	        	this.$storage1.UserName(this.bussinessLinkPerson, tip, tipyu);
//  	        	return false;
//  	        }
//  	        tipyu = "请输入手机号";
//  	        if(this.phoneNum == ""){
//  	        	this.$storage1.UserName(this.phoneNum, tip, tipyu);
//  	        	return false;
//  	        }else{
//  	        	//验证手机号格式
//  	        	let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
//  	        	if(!r.test(this.phoneNum)) {
//					   this.$message({
//							type: 'error',
//							message: '请填写正确的手机号码!'
//						});
//					return false;
//				   }
//  	        }
//  	        tipyu = "请输入商户类型";
//  	         if(this.isFormal == ""){
//  	        	this.$storage1.UserName(this.isFormal, tip, tipyu);
//  	        	return false;
//  	        }
//  	        tipyu = "请输入经营类型";
//  	         if(this.scopeId == ""){
//  	        	this.$storage1.UserName(this.scopeId, tip, tipyu);
//  	        	
//  	        	return false;
//  	        }
//  	        tipyu = "请输入使用开始时间";
//				if (this.durationTime == "") {
//  				//this.$message.error("请输入查询的内容");
//	    		    this.$storage1.UserName(this.durationTime, tip, tipyu);					
//  				return false;
//  	       } 
//  	       tipyu = "请选择所在省份";
//  	        if(this.proves== ""){
//  	        	this.$storage1.UserName(this.proves, tip, tipyu);
//  	        	return false;
//  	        }
//  	        tipyu = "请选择所在城市";
//  	        if(this.citys == ""){
//  	        	this.$storage1.UserName(this.citys, tip, tipyu);
//  	        	return false;
//  	        }
//  	        tipyu = "请选择所在区域";
//  	         if(this.diqu == ""){
//  	        	this.$storage1.UserName(this.diqu, tip, tipyu);
//  	        	return false;
//  	        }
//  	         return true;
//			},
			selectFlag(flag){
				 //封装参数
    	         var dataMap = {};
    	         
				
				let bussinessID='';
				if(flag == 2){
					if(this.bussinessID == '' ){
						this.$message({
							type: 'error',
							message: '商户编号不能空!'
						});
						this.bussinessName='';
						return false
					}
					
					 dataMap['bussinessName'] = this.bussinessName;
					  dataMap['bussinessID'] = '';
					//查询名称
				}else{
					dataMap['bussinessName'] = '';
				    dataMap['bussinessID'] = this.bussinessID;
				
				}
				
				     
				     
				      var jsonData = JSON.stringify(dataMap);
				//请求 后台返回数据
				this.$ajax.post(`${this.$url}/bussiness/selectBussinessByNameAndID.html`, { jsonData:jsonData }).then(data => {
							if(data.data == true){
						          this.$message({
							         type: 'success',
							         message: data.data
						          });
//									alert(data.data)
								}else{
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
			checkFlag(e){
				//this.e.target.value
				this.durationTime='';
				this.renewTime='';
				//this.isFormal='';
			},
			timeCalculate(e){
				if(this.isFormal == ''){
					this.$message({
							type: 'error',
							message: '请先选中商户类型!'
						});
						this.durationTime='';
					return false
				}
				//alert(e)
				 // var AddDayCount=20;
				
				  var dd = new Date(e);   //Wed Apr 04 2018 00:00:00 GMT+0800 (中国标准时间)
				 // alert(dd.getDate())
						   dd.setDate(dd.getDate()+Number(this.isFormal));//获取AddDayCount天后的日期    
						   var y = dd.getFullYear();     
						   var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0    
						   var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0    
						  this.renewTime=y+"-"+m+"-"+d
						   //alert(y+"-"+m+"-"+d)
			},
			clickme() {
				this.$storage1.getid("wxcert");
			},
			clickme1() {
				this.$storage1.getid("inputfile");
			},
			deleteimg(myindex) {
				let paths='';
				if(myindex == '0'){
					paths=this.wxcert
				}else{
					paths=this.uploadfile
				}
				this.$ajax.post(`${this.$url}/bussiness/deleteUpload.html`, {
						servicePath: paths,
						chunk: myindex
					}).then(data => {
						if(data.data.flag == true) {
							if(myindex == '0'){
								this.wxcert= this.COMiMAGE
								}else{
								this.uploadfile = this.COMiMAGE
								}
							this.$message.error('删除成功');
							this.iconshow = false;
							
						}
					})
					.catch((error) => {
						console.log(error)
					})
			},
			enterpointer() {
				if(this.uploadfile == this.COMiMAGE) {} else {
					this.iconshows = true;
				}
			},
			exportpointer() {
				this.iconshows = false;
			},
			enterpointer1() {
				if(this.uploadfile == this.COMiMAGE) {} else {
					this.iconshow = true;
				}
			},
			exportpointer1() {
				this.iconshow = false;
			},
			update(e,flag) {
				alert(flag)
				let file = e.target.files[0];
				let param = new FormData(); //创建form对象
				param.append('file', file, file.name); //通过append向form对象添加数据
				param.append('chunk', flag); //上传的第一个 类型0 文本类型  第二个1图片类型 第三个 2 图片类型
				if(flag == '1'){
				if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(file.name)){
					
					this.$message({
					type: 'success',
					message: '请传正确的图片格式!'
				});
					return false
				}
				let size = Math.floor(file.size / 1024);
		            if (size > 5000) {
		                this.$message({
					type: 'success',
					message: '您上传的图片太大请限制在100k内!'
		                
		                });
		                return false
		            }
		           }else if(flag == '0'){
		           	if(!/.(p12|java)$/.test(file.name)){
		           		this.$message({
					type: 'success',
					message: '请传正确的文件类型!'
				});
					return false
		           }
		           }
				//console.log(param.); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				const instance = this.$ajax.create({
					withCredentials: true
				})
				instance.post(`${this.$url}/bussiness/upload.html`, param)
					.then(response => {
						console.log(response.data);
						if(flag == '0'){
							this.wxcert = this.$imgurl + response.data.content
							console.log(this.wxcert)
						}else{
							this.uploadfile = this.$imgurl + response.data.content
							console.log(this.uploadfile)
						}
							
						

					})
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
				this.districtArr=[];
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
				 if(!this.test()){
					return false;
				}
//				let flags=this.checkeds()
//             if(flags){
               	let areaname='';
				for(let i=0;i <this.listCity.length; i++){
					if(this.proves == this.listCity[i].ID || this.citys == this.listCity[i].ID || this.diqu == this.listCity[i].ID){
						if(areaname == ''){
							areaname=this.listCity[i].areaName
						}else{
							areaname=areaname+','+this.listCity[i].areaName
						}
						
					}
				}
				
				 this.durationTime = this.GMTToStr(this.durationTime);
				this.$ajax.post(`${this.$url}/bussiness/insertBussiness.html`, { 
					bussinessID: this.bussinessID,
					bussinessName: this.bussinessName, 
					bussinessLinkPerson: this.bussinessLinkPerson, 
					phoneNum: this.phoneNum, 
					isFormal: this.isFormal,
					scopeId: this.scopeId, 
					durationTime: this.durationTime,
					renewTime: this.renewTime, 
					provinceID: this.proves,
					cityID: this.citys,
					countyID: this.diqu,
					wxappid: this.wxappid,
					wxtoken:this.wxtoken,
					wxmch_id: this.wxmch_id, 
//					wxcert: this.wxcert,
					zfbapp_id: this.zfbapp_id, 
					zfbprivateKey: this.zfbprivateKey,
					address:areaname,
//					wxlogo:this.uploadfile
					
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
				this.bussinessID='';
				this.bussinessName='';
				this.bussinessLinkPerson='';
				this.phoneNum ='';
				this.isFormal='';
				this.scopeId ='';
				this.durationTime='';
				this.renewTime ='';
				this.proves='';
				this.citys='';
				this.diqu='';
				this.wxappid='';
				this.wxtoken='';
				this.wxmch_id ='';
				this.wxcert='';
				this.zfbapp_id='' ;
				this.zfbprivateKey='';
				this.uploadfile='';
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