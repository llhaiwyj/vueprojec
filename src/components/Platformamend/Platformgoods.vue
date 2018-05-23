<template>
	<div class="conmmercial">
		<div id="sousuo">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
		  		<el-col class="row" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"><el-input  placeholder="商品名称" v-model="sj" class="name1" clearable></el-input></el-col>
	  			<el-col class="row" :xs="3" :sm="5" :md="5" :lg="5" :xl="5">
					<el-select v-model="scopeId" placeholder="状态">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-col>
				<el-col class="row" :xs="3" :sm="5" :md="5" :lg="5" :xl="5">
					<el-select v-model="scopeId" placeholder="商户经营类别">
						<el-option v-for="item in commercial" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-col>
				<el-col class="row" :xs="3" :sm="5" :md="5" :lg="5" :xl="5">
					<el-select v-model="scopeId" placeholder="商品类别">
						<el-option v-for="item in goods" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-col>
				<el-col class="row"  :xs="2" :sm="2" :md="2" :lg="2" :xl="2"><el-button class="find" @click="fined">查询</el-button></el-col>
				<el-col class="row" :xs="3" :sm="5" :md="5" :lg="5" :xl="5">
					<el-select v-model="scopeId" placeholder="商品品牌">
						<el-option v-for="item in brand" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-col>                
		   </el-row>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="tablist">
			<el-table ref="multipleTable" :data="merchantData" height="632" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="80">
		       </el-table-column>
				<el-table-column prop="bussinessName" label="商品名称"  show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessAcountNo" label="商户经营类别" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessAcountNo" label="商品类别" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessAcountNo" label="商品品牌" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessAcountNo" label="商品非会员售价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessAcountNo" label="商品会员价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button type="success" @click="currentstate(scope.row.state,scope.$index,merchantData)" v-if="scope.row.state==0" size="small">停用</el-button>
						<el-button type="success" @click="currentstate(scope.row.state,scope.$index,merchantData)" v-else-if="scope.row.state==1" size="small">启用</el-button>
					</template>
				</el-table-column>
				<el-table-column label="查看" >
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="showModals(scope.$index,merchantData)">详情</el-button>
					</template>
				</el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="showModals(scope.$index,merchantData)">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">			
			<el-button class="but" type="text" size="small" @click="showModal">添加</el-button>
			<el-button class="but" type="text" size="small" @click="deletes">删除</el-button>

			<el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
		<modal ref="c1" v-show="isModalVisible" @close="closeModal" ></modal>
		<modals v-show="isModalVisibles" @close="closeModals" v-on:close="serlf" v-bind:provs="provArr" v-bind:rangelist="ranges" v-bind:accountlist="accounts" v-bind:usinfor="userinformation"></modals>
	</div>
</template>
<style type="text/css">
	@import "../assets/css/shopcategory.css"
</style>
<script>
	import Modal from './Platformadd.vue'
    import Modals from './Platformamend.vue'
//import Modals from './motai.vue'
	export default {
		name:'conmmercial',
		components: {
			Modal,
			Modals
		},
    data() {
      return {
      	   merchantData:'',
      	   currentPage: 1,
			total: '',
		    length: 10,
  			options: [{
			value: '0',
			label: '全部'
			},
			{
			value: '1',
			label: '启用'
			},
			{
			value: '2',
			label: '停用'
			}],
			goods: [{
			value: '0',
			label: '商品类别'
			}],
			commercial:[{
				value:'0',
				label:'商户经营类别'
			}],
			brand:[{
				value:'0',
				label:'商品品牌'
			}],
        isModalVisible: false,
        isModalVisibles:false
      }
    },
    //初始化获取列表
	mounted: function() {
	let that = this
	this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, { start: this.currentPage, length: this.length }).then(data => {
			console.log(data)
			that.merchantData = (data.data.data.list)
			that.total = data.data.data.total
			that.length = data.data.data.size
			//					console.log(that.length)
			//					console.log(that.currentPage)
		})
		.catch((error) => {
			console.log(error)
			this.$message.error('获取数据失败');
		})
   },
	methods:{
		showModal:function(){
				this.isModalVisible=true
		},
		showModals:function(){
				this.isModalVisibles=true
		},
		closeModal:function(){
			this.isModalVisible=false
		},
	}
 };
</script>

