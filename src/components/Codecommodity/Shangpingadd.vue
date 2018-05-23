<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商户商品管理---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>商户商品信息<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.businessId.$error }">
								  	<span class="mc">商户：</span>
									<el-select @blur="test" class="xl" v-model="businessId" @change="changeBusinessId($event)" >
										<el-option v-for="item in bussiness" :key="item.bussinessID" :label="item.bussinessName" :value="item.bussinessID"></el-option>
									</el-select>
								</div>								
								<span class="form-group__message" v-if="!$v.businessId.required">不能为空</span>
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.supplierID.$error }">
								  	<span class="mc">供应商：</span>
									<el-select @blur="test" class="xl" v-model="supplierID" >
										<el-option v-for="item in supplier" :key="item.supplierID" :label="item.supplierName" :value="item.supplierID"></el-option>
									</el-select>
								</div>	
								<span class="form-group__message" v-if="!$v.supplierID.required">不能为空</span>
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.categoryID.$error }">
								  	<span class="mc">分组类别：</span>
									<el-select  @blur="test"  class="xl" v-model="categoryID" >
										<el-option v-for="item in categoryData" :key="item.groupingId" :label="item.groupingName" :value="item.groupingId"></el-option>
									</el-select>
								</div>
								<span class="form-group__message" v-if="!$v.categoryID.required">不能为空</span>
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							 	<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.goodsName.$error }">
							 	<span class="mc">商品名称：</span>
								<el-input  @blur="test"  v-model="goodsName" class="name1" clearable>
								</el-input>								   
								 </div>
								<span class="form-group__message" v-if="!$v.goodsName.required">不能为空</span>
								</div>
							 </el-col>							  
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							 		<div class="form-group" v-bind:class="{'form-group--error': $v.goodsPrice.$error }">
							 	<span class="mc">商品售价：</span>
								<el-input @blur="test"  v-model="goodsPrice" class="name1" clearable>
								</el-input>
								 </div>
								<span class="form-group__message" v-if="!$v.goodsPrice.required">不能为空</span>
								<span class="form-group__message" v-if="!$v.goodsPrice.numeric">只能填写数字</span>
								 </div>
							 </el-col>
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
								<div class="form-group" v-bind:class="{'form-group--error': $v.goodsSalesPushMoney.$error }">
							 	<span class="mc">商品销售提成：</span>
								<el-input  @blur="test"  v-model="goodsSalesPushMoney"  class="name1" clearable>
								</el-input>
								 </div>
								<span class="form-group__message" v-if="!$v.goodsSalesPushMoney.required">不能为空</span>
								 </div>
							 </el-col> 
							 <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.unit.$error }">
								  	<span class="mc">单位：</span>
									<el-select  @blur="test"  class="xl" v-model="unit" >
										<el-option v-for="item in optionunit" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select>
								</div>	
								<span class="form-group__message" v-if="!$v.unit.required">不能为空</span>
								 </div>
							  </el-col>
							 	<el-col :span="7" class="gutterspan">
							 		<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.state.$error }">
							  	<span class="mc">状态：</span>
								<el-select class="xl" v-model="state" >
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
								</div>
								<span class="form-group__message" v-if="!$v.state.required">不能为空</span>
								 </div>
							  </el-col>	
						</el-row>
						<el-row :gutter="10">
							<el-col class="row" :xs="24" :sm="14" :md="14" :lg="7" :xl="7">
								<div class="weixin">
									<h5>商品图片<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>							
							<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
								<img :src="uploadfile" class="bai100">
								<div class="iconde" v-show="iconshow">
									<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
									<div class="righticon" @click.stop="deleteimg()"><i class="el-icon-delete deleteicon"></i></div>
									<input type="file" id="inputfile" class="DISnone" name="wxsecret" @change="update($event)" capture="camera">
								</div>
							</div>
							</el-col>
							<el-col class="row " :xs="14" :sm="10" :md="10" :lg="10" :xl="10">	
								<div class="weixin">
									<h5>选择门店<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>	
								<el-tree default-expand-all :data="bussarrs" node-key="id" show-checkbox accordion highlight-current ref="tre" :props="defaultProps">
								</el-tree>
						    </el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary queding" @click="addGoods">确定</button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>						
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import { required,numeric} from 'vuelidate/lib/validators'
	export default {
		props: ['uuid','bussiness','supplier'],
		data() {
			return {
				options: [{
						value: '1',
						label: '启用'
					},
					{
						value: '2',
						label: '停用'
					}
				],
				
				bussarrs:[],
				defaultProps: {
					children: 'children',
					label: 'name'
				},
				categoryData:'',
				categoryID:'',
				businessId:'',
				supplierID:'',
				goodsName:'',
				goodsPrice:'',
				sort:'',
				unit:'',
				goodsSalesPushMoney:'',
				state: '',
				goodsURL:'',
				uploadimg:'',
				upload: '',
				uploadfile: '',
				uploadpic: '',
				COMiMAGE:this.$delurl,
				iconshow:false,
				optionunit: [{
						value: '1',
						label: '瓶'
					},
					{
						value: '2',
						label: '个'
					},
					{
						value: '3',
						label: '对'
					}
					,
					{
						value: '4',
						label: '袋'
					}
					,
					{
						value: '5',
						label: '箱'
					}
					,
					{
						value: '6',
						label: '桶'
					}
					,
					{
						value: '7',
						label: '升'
					}
					,
					{
						value: '8',
						label: '条'
					}
					,
					{
						value: '9',
						label: '台'
					}
					,
					{
						value: '10',
						label: '盒'
					}
					,
					{
						value: '11',
						label: '套'
					}
				],
			};
		},
		validations: {   
		    businessId: {  
		      required 
		    } , 
		    supplierID: {  
		      required  
		    },  
		    categoryID: {  
		      required  
		    },
		    goodsName:{
		      required
		    },
		     goodsPrice: {  
		      required,
		      numeric
		    },
		     goodsSalesPushMoney: {  
		      required  
		    },
		     unit: {  
		      required  
		    },
		     state: {  
		      required  
		    },
    },
		mounted: function() {
			this.uploadfile = this.COMiMAGE;
		},
		//初始化门店的经营类别
		methods: {
				test(){
				this.$v.businessId.$touch()
             	if(this.$v.businessId.$error){
					return false;
				}
             	this.$v.supplierID.$touch()
             	if(this.$v.supplierID.$error){
					return false;
				}
             	this.$v.categoryID.$touch()
             	if(this.$v.categoryID.$error){
					return false;
				}
             	this.$v.goodsName.$touch()
             	if(this.$v.goodsName.$error){
					return false;
				}
             	this.$v.goodsPrice.$touch()
             	if(this.$v.goodsPrice.$error){
					return false;
				}
             	this.$v.goodsSalesPushMoney.$touch()
             	if(this.$v.goodsSalesPushMoney.$error){
					return false;
				}
             	this.$v.unit.$touch()
             	if(this.$v.unit.$error){
					return false;
				}
             	this.$v.state.$touch()
             	if(this.$v.state.$error){
					return false;
				}
             	return true
            },
			clickme() {
				this.$storage1.getid("inputfile");
			},
			
			changeBusinessId(value){
				this.categoryData=[];
				//this.businessId=ev.target.value
				this.$ajax.post(`${this.$url}/bussinessGoods/selectCategorList.html`, {
						businessID:value,
					}).then(data => {
						this.categoryData = data.data.data
						this.bussarrs = data.data.bussTree
						console.log(this.categoryData)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
					
					
			},show(){},
		deleteimg(myindex) {
				this.$ajax.post(`${this.$url}/bussinessGoods/deleteUpload.html`, {
						servicePath: this.uploadfile,
						chunk: myindex
					}).then(data => {
						if(data.data.flag == true) {
							this.$message.error('删除成功');
							this.iconshow = false;
							this.uploadfile = this.COMiMAGE
						}
					})
					.catch((error) => {
						console.log(error)
					})
			},
			enterpointer() {
				if(this.uploadfile == this.COMiMAGE) {} else {
					this.iconshow = true;
				}
			},
			exportpointer() {
				this.iconshow = false;
			},
			update(e) {
				
				let file = e.target.files[0];
				let param = new FormData(); //创建form对象
				param.append('file', file, file.name); //通过append向form对象添加数据
				//param.append('chunk', index); //上传的第一个 类型0 文本类型  第二个1图片类型 第三个 2 图片类型
               if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(file.name)){
					
					this.$message({
					type: 'success',
					message: '请传正确的图片格式!'
				});
					return false
				}
				let size = Math.floor(file.size / 1024);
		            if (size > 500) {
		                this.$message({
					type: 'success',
					message: '您上传的图片太大请限制在100k内!'
		                
		                });
		                return false
		            }
				console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				const instance = this.$ajax.create({
					withCredentials: true
				})
				instance.post(`${this.$url}/bussinessGoods/upload.html`, param)
					.then(response => {
						console.log(response.data);
						
							this.uploadfile = this.$imgurl + response.data.content
							console.log(this.uploadfile)
						    this.goodsURL=response.data.content

					})
			},
			//调用父组建的方法
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
		  
			addGoods() {
				if(!this.test()){
					return false
				}
				//保存的方法	
				let storeId='';
				let listTree=[].concat(this.$refs.tre.getCheckedKeys());
				let ls=[].concat(this.$refs.tre.getHalfCheckedKeys());
				//alert(ls)
				if(ls == ''){
					listTree[0]='';
					//return false;
				}
				
				if(listTree.length > 0){
					for(let i= 0; i< listTree.length; i++){
						if(storeId == ''){
							storeId=listTree[i];
						}else{
							storeId=storeId+','+listTree[i];
						}
					}
				}
				
				//md5加密
				var dataMap = {};
				      dataMap['categoryID'] = this.categoryID;
				      dataMap['bussinessID'] = this.businessId;
				      dataMap['supplierID'] = this.supplierID;
				      dataMap['goodsName'] = this.goodsName;
				      dataMap['goodsPrice'] = this.goodsPrice;
				      dataMap['unit'] = this.unit;
				      dataMap['goodsSalesPushMoney'] = this.goodsSalesPushMoney;
				      dataMap['state'] = this.state;
				      dataMap['goodsURL'] = this.goodsURL;
				      dataMap['bussinessStoreId'] = storeId;
				      
				      var sign = this.$utilMd5s.md5Code(JSON.stringify(dataMap));
				      dataMap['sign'] = sign;
				       //防止重复提交
				       dataMap['uuid'] = this.uuid;
				      var jsonData = JSON.stringify(dataMap);
				this.$ajax.post(`${this.$url}/bussinessGoods/insertGoodsList.html`, { 
					/*categoryID:this.categoryID,
					bussinessID:this.businessId,
					supplierID:this.supplierID,
					goodsName:this.goodsName,
					goodsPrice:this.goodsPrice,
					unit:this.unit,
					goodsSalesPushMoney:this.goodsSalesPushMoney,
					state: this.state,
					goodsURL:this.goodsURL,
					bussinessStoreId:storeId*/
					jsonData:jsonData
				}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})                
			},
		}
	}
</script>
