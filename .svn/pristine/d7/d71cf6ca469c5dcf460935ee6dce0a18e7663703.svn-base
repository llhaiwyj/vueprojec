<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>用户管理---修改</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>用户信息<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.employee.empName.$error }">
										<span class="mc">账号名称：</span>
										<el-input @blur="test" v-model="employee.empName" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.employee.empName.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.employee.empPassword.$error }">
										<span class="mc">用户密码：</span>
										<el-input v-model="employee.empPassword" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.employee.empPassword.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.employee.contacts.$error }">
										<span class="mc">联系人：</span>
										<el-input @blur="test" v-model="employee.contacts" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.employee.contacts.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.employee.empPhone.$error }">
										<span class="mc">手机号码：</span>
										<el-input @blur="test" v-model="employee.empPhone" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.employee.empPhone.required">不能为空</span>
									<span class="form-group__message" v-if="!$v.employee.empPhone.numeric">请填写正确手机号</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan" v-show="RoleType">
								<div class="box">
									<span class="mc">角色类型：</span>
									<select class="xl" v-model="employee.state" v-on:change="changeType($event)">
										<option v-for="se in sel" :value="se.value">{{ se.text }}</option>
									</select>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan" v-show="RoleTypes">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.employee.state.$error }">
										<span class="mc">角色类型：</span>
										<select @blur="test" class="xl" v-model="employee.state" v-on:change="changeType($event)">
											<option v-for="se in sel" v-bind:value="se.value">{{ se.text }}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.employee.state.required">不能为空</span>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.roleID.$error }">
										<span class="mc">全部角色：</span>
										<select class="xl" @blur="test" v-model="roleID">
											<option v-for="se in arrs" v-bind:value="se.id">{{ se.name }}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.roleID.required">不能为空</span>
								</div>
							</el-col>
							<!--<el-col :span="7" class="gutterspan">
							  	<span class="mc">系统管理角色：</span>
							    <select class="xl" v-model="employee.state" v-on:change="changeType($event)" >
									<option  v-for="se in sel" v-bind:value="se.value" >{{ se.text }}</option>								
								</select>
							  </el-col>	-->
							<el-col :span="7" class="gutterspan">
								<span class="mc">状态：</span>
								<select class="xl" v-model="employee.empState" @change="changeHandler">
									<option :value="1">启用</option>
									<option :value="2">停用</option>
								</select>
							</el-col>
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>角色及门店<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="ss">
									<el-col class="row" :xs="5" :sm="5" :md="5" :lg="5" :xl="7">
										<el-input clearable style="opacity: 0;">
											<template class="biaoti" slot="prepend"></template>
										</el-input>
									</el-col>
									<el-col class="row " :xs="12" :sm="10" :md="10" :lg="10" :xl="10">
										<div class="input-group">
											<span class="input-group-btn">
							        <el-button class="search" @click="treeLoad" icon="el-icon-search">搜索</el-button>
							      </span>
											<el-input v-model="bussName" class="name1 shuru" clearable></el-input>
										</div>
									</el-col>
									<el-col class="row " :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
										<div class="weixin">
											<h5>上传用户头像<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
										</div>
									</el-col>
								</div>
							</el-col>
							<!--<el-col class="row " :xs="10" :sm="7" :md="7" :lg="7" :xl="7">								
								<el-tree  default-expand-all :data="arrs" 
									 node-key="id"
									 @check-change="checkForm()" 
									 show-checkbox 
									 accordion 
									 highlight-current 
									 ref="tree" 
									 :default-checked-keys="dataId" 
									 :props="defaultProps">
								</el-tree>
								</el-col>	-->
							<el-col class="row " :xs="14" :sm="10" :md="10" :lg="10" :xl="10">
								<el-tree default-expand-all :data="bussarrs" node-key="id" show-checkbox accordion highlight-current ref="tre" :default-checked-keys="bussdataId" :props="defaultProps">
								</el-tree>
							</el-col>
							<el-col class="row shangchuan" :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
								<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
									<img :src="uploadfil" class="bai100">
									<div class="iconde" v-show="iconshow">
										<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
										<div class="righticon" @click.stop="deleteimg()"><i class="el-icon-delete deleteicon"></i></div>
										<input type="file" id="inputfil" class="DISnone" name="wxsecret" @change="update($event)" capture="camera">
									</div>
								</div>
							</el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button @click="getUpdateCheckedNodes" class="el-button el-button--primary queding">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>
			</div>z
		</div>
	</transition>
</template>

<script>
	import { required, numeric, minLength, maxLength, between } from 'vuelidate/lib/validators'
	export default {
		props: ['uploadfil', 'arrs', 'bussarrs', 'employee', 'dataId', 'bussdataId','roleID'],
		data() {
			return {
//				roleType:this.$storage.fetch("roleTypes"),
				sel: '',
				imag: '',
				empState: '',
				bussCheckedarr: '',
				state: '1',
				assar: '',
				bussName: '',
				upload: '',

				uploadpic: '',
				uploadimg: '',
				empPassword: '',
				COMiMAGE: this.$delurl,
				iconshow: false,
				defaultProps: {
					children: 'children',
					label: 'name'
				},
				RoleType: false,
				RoleTypes: false,
			}
		},
		validations: {
			roleID: {
					required
			},
			employee: {
				empName: {
					required
				},
				empPassword: {
					required
				},
				contacts: {
					required
				},
				empPhone: {
					required,
					numeric,
					minLength: minLength(11),
					maxLength: maxLength(11)
				},
				state: {
					required
				},
			}
		},
		//获取树形菜单
		mounted: function() {

			//  this.uploadfil = this.COMiMAGE;

			//判断系统管理员还是商户管理员，来动态展示下拉选的内容
			//this.$storage.save("isAdmin","0")
			let admin = this.$storage.fetch("isAdmin")
			if(admin > 1) {
				this.RoleType = true;
				this.sel = [{ value: 2, text: '商家类型' }]
				this.state = 2
				//						this.sel=[{ value: 2, text: '商户管理员' },{ value: 3, text: '门店管理员' }]
			} else {
				this.RoleTypes = true;
				this.sel = [{ value: 1, text: '系统类型' }, { value: 2, text: '商家类型' }]
				//						this.sel=[{ value: 1, text: '系统管理员' },{ value: 2, text: '商户管理员' },{ value: 3, text: '门店管理员' },]
			}

		},
		methods: {
			test() {
				this.$v.employee.empName.$touch()
				if(this.$v.employee.empName.$error) {
					return false;
				}
				this.$v.employee.empPassword.$touch()
				if(this.$v.employee.empPassword.$error) {
					return false;
				}
				this.$v.employee.contacts.$touch()
				if(this.$v.employee.contacts.$error) {
					return false;
				}
				this.$v.employee.empPhone.$touch()
				if(this.$v.employee.empPhone.$error) {
					return false;
				}
				this.$v.employee.state.$touch()
				if(this.$v.employee.state.$error) {
					return false;
				}
				this.$v.roleID.$touch()
				if(this.$v.roleID.$error) {
					return false;
				}
				//				this.$v.employee.empState.$touch()
				//				if(this.$v.employee.empState.$error) {
				//					return false;
				//				}
				return true;
			},
			clickme() {
				this.$storage1.getid("inputfil");
			},
			deleteimg() {
				this.$ajax.post(`${this.$url}/employee/deleteUpload.html`, {
						servicePath: this.uploadfil

					}).then(data => {
						if(data.data.flag == true) {
							this.$message.error('删除成功');
							this.iconshow = false;
							this.uploadfil = this.COMiMAGE
						}
					})
					.catch((error) => {
						console.log(error)
					})
			},
			enterpointer() {
				if(this.uploadfil == this.COMiMAGE) {} else {
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
				if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(file.name)) {

					this.$message({
						type: 'success',
						message: '请传正确的图片格式!'
					});
					return false
				}
				let size = Math.floor(file.size / 1024);
				if(size > 100) {
					this.$message({
						type: 'success',
						message: '您上传的图片太大请限制在100k内!'

					});
					return false
				}
				//console.log(param.); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				const instance = this.$ajax.create({
					withCredentials: true
				})
				instance.post(`${this.$url}/employee/upload.html`, param)
					.then(response => {
						console.log(response.data);

						this.uploadfil = this.$imgurl + response.data.content
						this.imag = response.data.content
						console.log(this.uploadfil)

					})
			},
			updateLoadTree: function() {
				this.$ajax.post(`${this.$url}/employee/loadUpdateTree.html`, {
						empId: this.employee.empId,
						bussNam: this.bussName,
						state: this.state
					}).then(res => {

						this.arrs = res.data.roleTree
						this.bussarrs = res.data.bussTree

						this.employee = res.data.employee[0]
//						console.log(res.data.employee)
//						console.log(res.data.employee[0].bussinessId)
//						this.dataId = [];
//						for(var i = 0; i < this.arrs.length; i++) {
//							let list = this.arrs[i].children
//							for(var y = 0; y < list.length; y++) {
//
//								if(list[y].checked) {
//									this.dataId.push(list[y].id)
//								}
//							}
//						}
						this.bussdataId = [];
						for(var i = 0; i < this.bussarrs.length; i++) {
							let list = this.bussarrs[i].children
							for(var y = 0; y < list.length; y++) {
								let lists = list[y].children
								for(var z = 0; z < lists.length; z++) {
									if(lists[z].checked) {
										this.bussdataId.push(lists[z].id)
									}

								}
							}
						}
						console.log(this.bussarr)

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			getUpdateCheckedNodes() {
				if(!this.test()) {
					return false;
				}
				//				this.assar = JSON.stringify(this.$refs.tree.getCheckedNodes());
				//this.bussCheckedarr = JSON.stringify([].concat(this.$refs.tre.getCheckedKeys(), this.$refs.tre.getHalfCheckedKeys()));
				let listTree = [].concat(this.$refs.tre.getCheckedKeys(), this.$refs.tre.getHalfCheckedKeys())
				if(listTree.length == 0) {
					this.$message.error('请选择商户门店');
					return false;
				}
				let treeList = [];
				for(var i = 0; i < listTree.length; i++) {
					let obj = this.$refs.tre.getNode(listTree[i]).data
					delete obj.childNodes;
					treeList.push(obj)
				}
				console.log(treeList)
				this.bussCheckedarr = JSON.stringify(treeList);
				//alert(this.uploadfile)
				if(this.uploadfile == this.COMiMAGE) {
					this.uploadfil = '';
				}
				this.$ajax.post(`${this.$url}/employee/updateEmp.html`, {
					empId: this.employee.empId,
					empName: this.employee.empName,
					empPassword: this.empPassword,
					empPhone: this.employee.empPhone,
					contacts: this.employee.contacts,
					roleID: this.roleID,
					//					arr: this.assar,
					bussCheckedarr: this.bussCheckedarr,
					empState: this.empState,
					state: this.state,
					uploadfile: this.imag
				}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})
			},
			//			checkForm() {
			//				let obj = this.$refs.tree.getCheckedNodes();
			//
			//				if(obj.length == 2) {
			//					console.log(obj)
			//
			//					if(obj[0].id == obj[1].pId) {
			//
			//					} else {
			//						if(obj.length > 1) {
			//							//取出最后一个对象
			//							let trobj = obj[obj.length - 1]
			//							//console.log(trobj)
			//							//取消勾选的子项
			//							this.$refs.tree.setChecked(trobj, false)
			//
			//							this.$message.error('只能选择一个角色');
			//						}
			//					}
			//				}
			//				//console.log(this.$refs.tree.getCheckedNodes())
			//			},
			changeHandler(value) {
				this.empState = value
				console.log('改变之后的值是:' + value)
			},
			changeType(val) {
//				alert(val.target.value)
				this.state = val.target.value
				this.$ajax.post(`${this.$url}/employee/loadAddTree.html`, {state:this.state }).then(res => {
						console.log(res)
						this.arrs = res.data.roleTree
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					});
			},
			//调用父组建的方法
			close: function() {
				//				console.log(this.assar)
				this.$emit('close');

			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			getCheckedAll: function() {

				return this.bussarrs.filter(function(e) {
					if(e.node.indeterminate) {
						return e.node.indeterminate
					}
					return e.node.checked
				}).map(function(e) {
					return e.node
				})
			}
		}
	}
</script>