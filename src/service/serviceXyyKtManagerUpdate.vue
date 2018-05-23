<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>服务库设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
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
										<select v-model="shujus.businessScope">
											<!--<option disabled="disabled" selected value="">{{shujus.scopeNamew}}</option>-->
											<option v-for="se in businessScopes" :value="se.scope">{{se.scopeNamew}}</option>
										</select>
									</div>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<el-input v-model="shujus.serviceName" class="name1" clearable>
										<template class="biaoti" slot="prepend">服务名称</template>
									</el-input>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<el-input v-model="shujus.servicePrice" class="name1" clearable>
										<template class="biaoti" slot="prepend">服务售价</template>
									</el-input>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<el-input v-model="shujus.serviceSalesPrice" class="name1" clearable>
										<template class="biaoti" slot="prepend">服务会员价</template>
									</el-input>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<el-input v-model="shujus.serviceNamePy" class="name1" clearable>
										<template class="biaoti" slot="prepend">服务简拼</template>
									</el-input>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<el-input v-model="shujus.sort" class="name1" clearable>
										<template class="biaoti" slot="prepend">排序</template>
									</el-input>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<div class="input-group">
										<span class="input-group-addon">单位</span>
										<select placeholder="单位" v-model="shujus.unit">
											<option v-for="se in units" :value="se.value">{{se.text}}</option>
										</select>
									</div>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<div class="input-group">
										<span class="input-group-addon">服务分组</span>
										<select v-model="shujus.categoryID">
											<!--<option disabled="disabled" selected value="">{{shujus.groupingName}}</option>-->
											<option v-for="se in lists" :value="se.groupingId">{{se.groupingName}}</option>
										</select>
									</div>
								</el-col>
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<div class="input-group">
										<span class="input-group-addon">是否启用</span>
										<select v-model="shujus.state">
											<option v-for="sel in states" :value="sel.value">{{sel.text}}</option>
										</select>
									</div>
								</el-col>
								<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
									<el-tree :data="bussTrees" node-key="id" :default-checked-keys="bussdataids"  show-checkbox accordion highlight-current ref="tree" :props="defaultProps">
									</el-tree>
								</el-col>
							</el-row>
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
		props: ['shujus', 'bussTrees','bussdataids','businessScopes', 'ids', 'lists'],
		data() {
			return {
				//				businessScope: this.$storage.fetch("businessScope"),
				businessScope: '',
				units: [{
					value: '次',
					text: '次'
				}],
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
				state: '',
				Scope: '',
				assar: '',
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
//			fuwufenzu(event){
//				this.fuwu = event.target.value
//			},
//			zhuangtai(event) {
//				console.log(this.lists)
//				this.state = event.target.value
//			},
//			jingyinleibie(event) {
//				this.Scope = event.target.value
//			},
			getCheckedNodes() {
				this.assar = JSON.stringify(this.$refs.tree.getCheckedNodes());
				//				let listTree=[].concat(this.$refs.tree.getCheckedKeys(), this.$refs.tree.getHalfCheckedKeys())
				//				let treeList=[];
				//				for(var i=0;i < listTree.length; i++){
				//					let obj=this.$refs.tree.getNode(listTree[i]).data
				//					    delete obj.childNodes;
				//					treeList.push(obj)
				//				}
				//				console.log(treeList)
				//				this.assar = JSON.stringify(treeList);

				this.$ajax.post(`${this.$url}/service_xyykt_manager/valServiceName.html`, { serviceID: this.ids, serviceName: this.shujus.serviceName }).then(data => {
					console.log(data)
					if(data.data.flag == true) {
						this.$ajax.post(`${this.$url}/service_xyykt_manager/updateService.html`, {
								serviceID: this.ids,
								serviceName: this.shujus.serviceName,
								serviceNamePy: this.shujus.serviceNamePy,
								servicePrice: this.shujus.servicePrice,
								serviceSalesPrice: this.shujus.serviceSalesPrice,
								unit: this.shujus.unit,
								state: this.shujus.state,
								sort: this.shujus.sort,
								businessScope: this.shujus.businessScope,
								bussCheckedarr: this.assar,
								categoryID: this.shujus.categoryID,
							}).then(data => {
								console.log(data)
								this.$emit('close');
							})
							.catch((error) => {
								this.$message.error('获取数据失败');
							});
					}else{
						this.$message.error(data.data.message);
					}
				})

			},

		}
	}
</script>

<style>

</style>