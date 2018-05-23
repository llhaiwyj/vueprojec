<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>服务库设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">服务类</span>
									<select>
										<option selected="selected">服务类</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">经营类别</span>
									<select placeholder="经营类别" v-model="businessScopeID">
										<option v-for="se in businessScopes" v-bind:value="se.scope">{{se.scopeNamew}}</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input v-model="serviceName" class="name1" clearable>
									<template class="biaoti" slot="prepend">服务名称</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input v-model="servicePrice" class="name1" clearable>
									<template class="biaoti" slot="prepend">服务售价</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input v-model="serviceSalesPrice" class="name1" clearable>
									<template class="biaoti" slot="prepend">服务会员价</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input v-model="serviceNamePy" class="name1" clearable>
									<template class="biaoti" slot="prepend">服务简拼</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input v-model="sort" class="name1" clearable>
									<template class="biaoti" slot="prepend">排序</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">单位</span>
									<select placeholder="单位" v-model="unit">
										<option v-for="se in units" :value="se.value">{{se.text}}</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">服务分组</span>
									<select v-on:change="fuwufenzu($event)">
										<option v-for="se in lists" :value="se.groupingId">{{se.groupingName}}</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">是否启用</span>
									<select placeholder="是否启用" v-model="stat">
										<option v-for="sel in states" v-bind:value="sel.value">{{sel.text}}</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<el-tree :data="bussTrees" node-key="id" show-checkbox accordion highlight-current ref="tree" :props="defaultProps">
								</el-tree>
							</el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--default" @click="close">关闭</button>
						<button type="button" class="el-button el-button--primary" @click="getCheckedNodes">确 定</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['bussTrees', 'lists', 'businessScopes'],
		data() {
			return {
				units: [{
					value: '次',
					text: '次'
				}],
				unit: '',
				states: [{
						value: '0',
						text: '启用'
					},
					{
						value: '1',
						text: '停用'
					}
				],
				defaultProps: {
					children: 'children',
					label: 'name'
				},
				assar: '',
				categoryID: '',
				businessScopeID: '',
				serviceName: '',
				servicePrice: '',
				serviceSalesPrice: '',
				serviceNamePy: '',
				sort: '',
				unit: '',
				stat: '',
				fuwu:'',
			};
		},
		//初始化门店的经营类别
		mounted: function() {

		},
		methods: {
			//调用父组建的方法
			close: function() {

				this.$emit('close');

			},
			fuwufenzu(event){
				this.fuwu = event.target.value
			},
			getCheckedNodes() {
				this.assar = JSON.stringify(this.$refs.tree.getCheckedNodes());
				//				let listTree=[].concat(this.$refs.tree.getCheckedKeys(), this.$refs.tree.getHalfCheckedKeys())
				//				let treeList=[];
				//				for(var i=0;i < listTree.length; i++){
				//					let obj=this.$ref.tree.getNode(listTree[i]).data
				//					    delete obj.childNodes;
				//					treeList.push(obj)
				//				}
				//				console.log(treeList)
				//				this.assar = JSON.stringify(treeList);
				this.$ajax.post(`${this.$url}/service_xyykt_manager/validService.html`, { addServiceName: this.serviceName }).then(data => {
						console.log(data)
						if(data.data.flag == true) {
							this.$ajax.post(`${this.$url}/service_xyykt_manager/insertService.html`, {
								businessScope: this.businessScopeID,
								serviceName: this.serviceName,
								serviceNamePy: this.serviceNamePy,
								servicePrice: this.servicePrice,
								serviceSalesPrice: this.serviceSalesPrice,
								serviceUnit: this.unit,
								state: this.stat,
								serviceOrder: this.sort,
								bussCheckedarr: this.assar,
								categoryID: this.fuwu,
							}).then(restaurants => {
								console.log(restaurants)
								if(restaurants.data.flag == true) {
									this.$message(restaurants.data.message);
									this.$emit('close');
								} else {
									this.$message.error(restaurants.data.message);
								}

							})
						}else{
							this.$message(restaurants.data.message);
						}

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					});

			},

		}
	}
</script>