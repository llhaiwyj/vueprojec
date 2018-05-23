<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商城商品设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
					      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8">
					      	<el-select v-model="scopeId" placeholder="商户经营类别" >
								<el-option v-for="item in  commerciasort" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					      </el-col>
					      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8">
					      	<el-select v-model="scopeId" placeholder="商品类别" >
								<el-option v-for="item in  goodssort" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					      </el-col>
					       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8">
					      	<el-select v-model="scopeId" placeholder="商品品牌" >
								<el-option v-for="item in  commerciabrand" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					      </el-col>
					        <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8">
					      	<el-select v-model="scopeId" placeholder="单位" >
								<el-option v-for="item in  unit" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					      </el-col>
					      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="商品名称"class="name1" clearable></el-input></el-col>
					      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="商品非会员售价"class="name1" clearable></el-input></el-col>
					       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="商品会员价"class="name1" clearable></el-input></el-col>
					       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="商品进货价"class="name1" clearable></el-input></el-col>
					       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="排序"class="name1" clearable></el-input></el-col>
					        <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8"><el-input placeholder="商品简拼"class="name1" clearable></el-input></el-col>
					      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="8">
							<el-select v-model="scopeId" placeholder="属性状态" >
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
					      </el-col>	
					      <div class="xuanz">
						      	<el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品简介" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								        <textarea class="textarea" v-model="storeAddress" placeholder="商品简介"></textarea>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
						      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品首页图片" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
						        <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品banner图片" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
						      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品详情图片1" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
						      <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品详情图片2" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
						        <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
							      <el-collapse v-model="activeNames" @change="handleChange">
							      	<el-collapse-item title="商品详情图片3" name="2" id="lie">
								       <el-col class="row" :xs="6" :sm="5" :md="5" :lg="5" :xl="24">
								         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
								        </el-col>
							        </el-collapse-item>
							      </el-collapse>
						      </el-col>
					      </div>				   
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--default" @click="close">关闭</button>
						<button type="button" class="el-button el-button--primary" @click="getUpdateStore">保存</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		data() {
			return {
				options: [{
				value: '0',
				label: '启用'
			},
			{
				value: '1',
				label: '停用'
			}],	
			goodssort:[{
				value: '0',
				label: '商品类别属性'
			}],
			commerciasort:[{
				value:'0',
				label:'商户经营类别'
			}],
			commerciabrand:[{
				value:'0',
				label:'商品品牌'
			}],
			unit:[{
				value:'0',
				lable:'瓶'
			},{
				value:'1',
				lable:'个'
			}],
			 fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
			};
		},
		methods: {
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
			//上传图片
			 handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		      handlePreview(file) {
		        console.log(file);
		      }
       }
	}
</script>
<style>
	@import "../assets/css/shopcategory.css"
</style>

