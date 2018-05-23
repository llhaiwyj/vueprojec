<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>门店设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" style="width:80%;height:550px">
					<slot name="body">
						<el-row :gutter="40">
							<el-col :span="14" style="padding: 5;">
								<el-select v-model="type" placeholder="商品类型">
									<el-option v-for="item in types" :label="item.label" :value="item.value"></el-option>
								</el-select>
								<el-select v-model="scopeId" placeholder="经营范围类型">
									<el-option v-for="se in scope" :label="se.scopeNamew" :value="se.uuid"></el-option>
								</el-select>
								<el-input placeholder="商品名称" v-model="goodsName" class="name1" clearable></el-input>
								<el-input placeholder="商品简拼" v-model="goodsNamePy" class="name1" clearable></el-input>
								<el-input placeholder="商品进货价" v-model="goodsBidPrice" class="name1" clearable></el-input>
								<el-input placeholder="商品售价" v-model="goodsPrice" class="name1" clearable></el-input>
								<el-input placeholder="商品会员价" v-model="goodsSalesPrice" class="name1" clearable></el-input>
								<el-input placeholder="规格" v-model="size" class="name1" clearable></el-input>
								<el-input placeholder="排序" v-model="goodsOrder" class="name1" clearable></el-input>
							    <el-select v-model="unit" placeholder="单位">
									<el-option v-for="se in units" :label="se.label" :value="se.value"></el-option>
								</el-select>
								<el-select v-model="categoryID" placeholder="类别">
									<el-option v-for="se in categorys" :label="se.categoryName" :value="se.categoryID"></el-option>
								</el-select>
								<el-select v-model="supplierID" placeholder="供货商">
									<el-option v-for="se in suppliers" :label="se.supplierName" :value="se.supplierID"></el-option>
								</el-select>
								<el-select  v-model="state"  placeholder="状态">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
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
		
		data() {
			return{
				scope:'',
				scopeId:'',
				type:'',
				types:[{
					value:'1',
					label:'商品类'
				}],
				state:'',
				options:[{
					value:'0',
					label:'启用'
				},
				{
					value:'1',
					label:'停用'
				}],
				unit:'',
				units:[{
					value:'瓶',
					label:'瓶'
				},
				{
					value:'个',
					label:'个'
				},
				{
					value:'对',
					label:'对'
				},
				{
					value:'袋',
					label:'袋'
				},
				{
					value:'箱',
					label:'箱'
				},
				{
					value:'桶',
					label:'桶'
				}],
				categorys:'',
				categoryID:'',
				suppliers:'',
				supplierID:''
			}
		},
		//初始化门店的经营类别
		mounted:function(){
			this.$ajax.post(`${this.$url}/shop_xyykt_manager/selectBusinessScope.html`, {}).then(res => {
				console.log(res)
				this.scope=res.data.data
				console.log(this.scope)
				this.categorys=res.data.data1
				console.log(this.categorys)
				this.suppliers=res.data.data2
				console.log(this.suppliers)
					
			}) 
		},
		methods: {
			//调用父组建的方法
			close: function() {
				this.$emit('close');

			},
			getCheckedNodes(){
				console.log(this.scopeId)
				this.$ajax.post(`${this.$url}/shop_xyykt_manager/insertShop.html`, { goodsName:this.goodsName,supplierID:this.supplierID,goodsNamePy:this.goodsNamePy,goodsBidPrice:this.goodsBidPrice,
					goodsPrice: this.goodsPrice,goodsSalesPrice:this.goodsSalesPrice,goodsUnit:this.unit,state:this.state,goodsOrder:this.goodsOrder,goodsSize:this.size,categoryID:this.categoryID
					,scopeId:this.scopeId}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})                                                                                                                                                                                                                                                                                                            
			},
		
		}
	}
</script>

<style>
	.el-col-12 {
		width: 92%;
		margin-left: 2%;
	}
	
	.modal-body .el-input {
		width: 47%;
		float: left;
		margin-right: 3%;
		margin-bottom: 10px;
	}
	
	.modal-body .back {
		width: 47%;
		float: left;
		margin-right: 3%;
		margin-bottom: 10px;
	}
	
	.modal-body .around {
		width: 47%;
		margin-bottom: 10px;
		display: block;
	}
	
	.city {
		width: 30%;
		float: left;
		margin-right: 3%;
		margin-bottom: 10px;
		position: relative;
	}
	
	.citys {
		width: 30%;
		float: left;
		margin-right: 3%;
		margin-bottom: 10px;
		position: relative;
	}
	
	.city option {
		position: absolute;
		top: 20px;
	}
	
	.citys option {
		position: absolute;
		top: 20px;
	}
	
	.el-select {
		display: inline-block;
		position: relative;
		width: 74%;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	
	.el-select .el-input__inner {
		border-color: #409EFF;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	
	.radiolist {
		height: 40px;
		line-height: 40px;
	}
	
	.el-date-editor.el-input__inner {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	
	.modal-backdrop {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.modal {
		width: 50%;
		background-color: #fff;
		box-shadow: 2px 2px 20px 1px;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
	}
	
	.modal-footer {
		padding: 15px;
		display: flex;
	}
	
	.modal-header {
		border-bottom: 1px solid #eee;
		color: #4aae9b;
		justify-content: space-between;
		line-height: 40px;
		background: #00bafc !important;
	}
	
	.modal-header h2 {
		font-size: 16px;
		margin: 0 0 0 10px;
		color: #fff;
	}
	
	.modal-footer {
		border-top: 1px solid #eee;
		justify-content: flex-end;
	}
	
	.modal-body {
		position: relative;
		padding: 20px 10px;
	}
	
	.btn-close {
		border: none 0;
		font-size: 20px;
		padding: 20px;
		cursor: pointer;
		font-weight: bold;
		color: #4aae9b;
		background-color: transparent;
	}
	
	.btn-green {
		color: #fff;
		background-color: #4aae9b;
		border: 1px solid #4aae9b;
		border-radius: 2px;
	}
	
	.modal-fade-leave-active {
		opacity: 0;
	}
	
	.modal-fade-leave-active {
		transition: opacity .5s ease
	}
	
	.city {
		padding: 0 !important;
	}
	
	.up {
		background: #f5f7fa;
		padding: 15px 0;
		font-size: 14px;
		text-align: center;
	}
	
	.uppoto .el-collapse-item {
		margin: 10px auto;
	}
	
	.uppoto .el-collapse-item__header {
		height: 40px !important;
		line-height: 40px !important;
	}
	
	.upload .upload-demo {
		margin: 10px auto;
	}
	
	.upload .el-upload-list--picture .el-upload-list__item {
		overflow: hidden;
		z-index: 0;
		background-color: #fff;
		border: 1px solid #c0ccda;
		border-radius: 6px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-top: 10px;
		padding: 10px 10px 10px 90px;
		height: 92px;
		width: 48%;
		float: left;
		margin: 10px 1%;
	}
	
	.modal-backdrop {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		overflow-y: scroll;
		height: 100%;
	}
</style>