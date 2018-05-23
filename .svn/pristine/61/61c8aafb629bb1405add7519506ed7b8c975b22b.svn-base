<template>
	<div>
		<select v-on:change="indexSelect($event)">
		<option v-for="(i,index) in bussiness" :value="i.bussinessId">{{i.bussinessName}}</option>
	</select>
	<select v-on:change="indexSelects($event)">
		<option v-for="(j,index) in mendian" :value="j.id">{{j.storeName}}</option>
	</select>
	<el-tree :data="arrs"
		 show-checkbox 
		 accordion 
		 highlight-current 
		 ref="tree"
		 :props="defaultProps">
	</el-tree>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				admin: this.$storage.fetch("isAdmin"),
				bussId:this.$storage.fetch("buss"),
				bussiness:this.$storage.fetch("bussiness"),
				bussinessStore:this.$storage.fetch("bussinessstore"),
				arrs: '',
				roleID: '',
				rolename: '',
				remarks: '',
				bussinessId: '',
				storeId: '',
				assar: '',
				shoplistmen:'',
				bid:'',
				stid:'',
				bh:this.$storage.fetch("bianhao"),
				mendian:[],
				defaultProps: {
					children: 'children',
					label: 'name'
				},
			}
		},
		//获取树形菜单
		mounted: function() {
				if(this.admin==1){
					if(this.bid!=''){
						this.$ajax.post('http://172.19.66.15:8080/new-xyykt-manager/role/loadMenuTree.html',{bussinessId:this.stid}).then(res => {
					console.log(res)
					this.arrs = res.data
					console.log(this.arrs)
				    })
			        .catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				    });
					}else{
						this.$ajax.post('http://172.19.66.15:8080/new-xyykt-manager/role/loadMenuTree.html').then(res => {
					console.log(res)
					this.arrs = res.data
					console.log(this.arrs)
				    })
			        .catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				    });
					}
				}else if(this.admin==2){
					this.$ajax.post('http://172.19.66.15:8080/new-xyykt-manager/role/loadMenuTree.html',{bussinessId:this.stid}).then(res => {
					console.log(res)
					this.arrs = res.data
					console.log(this.arrs)
				})
				.catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				});
				}else{
					console.log("您没有权限")
				}
			

		},
		methods: {
			indexSelect(event) {
                console.log(event.target.value)
                this.stid=event.target.value
                this.$storage.save("bianhao",this.stid);
                console.log(this.bh)
//              console.log(this.bussinessStore.length)
                if(this.bh!=event.target.value){
                	this.mendian= [];
                	for(let j=0;j<this.bussinessStore.length;j++){
                	if(event.target.value==this.bussinessStore[j].bussinessId){
                	
                		this.mendian.push(this.bussinessStore[j])
                		console.log(this.mendian)
                		
                	}
                }
                }else{
                	
                }
			},
			indexSelects(val) {
			   console.log(val.target.value)
               this.bid=val.target.value
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleNodeClick(data) {
				console.log(data);
			}
		}
	}
</script>

<style>

</style>