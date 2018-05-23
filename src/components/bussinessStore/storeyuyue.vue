<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>{{storenames}}门店预约</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10" style="height: 300px;overflow-y: auto;">
							<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<div class="ti">
								
							<!--	<h4 class="input-group-addon">营业时间</h4>-->
							
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<h4  class="input-group-property">营业时间</h4>
								<p class="s" v-for="i in times">{{i}}</p>
						    </el-col>
							</div>
							
							<div class="ti">
								<!--<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
									<h4 class="input-group-addon">预约人数</h4>
								</el-col>	-->
								<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
									<h4  class="input-group-property">预约人数</h4>
								<input class="time"  name="aa" v-for="i in renshus">{{i}}</input>
								</el-col>
							</div>
							</el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary queding" @click="save">确定</button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['times', 'renshus','storeids','storenames'],
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
				this.$ajax.post(`${this.$url}/bussinessStore/insertYuYueSet.html`, {yuYueNumberArr: arrs, id: this.storeids }).then(data => {
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
