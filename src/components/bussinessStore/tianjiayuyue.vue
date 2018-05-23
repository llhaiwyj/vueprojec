<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>门店设置---修改</h2>
					</slot>
				</div>
				<div class="modal-body">
					<slot name="body">
						<el-row :gutter="10">
						<div class="content">
							<div class="ti">
								<p v-for="i in times">{{i}}</p>
							</div>
							<div class="ti">
								<input name="aa" v-for="i in renshus">{{i}}</input>
							</div>
						</div>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary" @click="save">保存</button>
						<button type="button" class="el-button el-button--default" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['times', 'renshus',],
		data() {
			return {
                arr:[],
			}
		},
		//获取树形菜单
		mounted: function() {

		},
		methods: { 
			close: function() {
				this.$emit('close');
			},
			save() {
				var luckElements = document.getElementsByName("aa");
				alert(luckElements.length)
				
				 /*for(let i in luckElements){
				 	if(luckElements[i].value==''){
				 		luckElements[i].value=0
				 	}
				 	arr.push(luckElements[i].value)
				 }*/
				 for(let i=0; i<luckElements.length; i++){
				 	if(luckElements[i].value==''){
				 		luckElements[i].value=0
				 	}
				 	this.arr.push(luckElements[i].value)
				 }
				 
				 let arrs=this.arr.join(',')
//				 console.log(arr)
				// alert(luckElements)
				//			    console.log(luckElements)
				this.$ajax.post(`${this.$url}/bussinessStore/insertYuYueSet.html`, {yuYueNumberArr: arrs}).then(data => {
						console.log(data)
                         this.$emit('close');
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			}
		}

	}
</script>

<style>
	.ti {
		width: 45%;
		float: left;
		margin-right: 2%;
		margin-bottom: 2%;
	}
	
	.ti p {
		line-height: 20px;
		margin-bottom: 2%;
	}
	
	.ti input {
		display: block;
		margin-bottom: 2%;
		margin-top: 1px;
	}
	
	/*.content{
		height:60%;
		
	}*/
	/*.shijian{
    	
    	
    
    	display:inline;
    	
    }
    .geshu{
    	width:45%;
    	height:20px;
    	margin-bottom:10px;
    	float:left;
    	margin-right:2%;
    }*/
</style>