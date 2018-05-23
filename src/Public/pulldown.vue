<!-- 下拉选 -->
<template>
	<div class="pulldown">
		<el-select v-model="value" placeholder="请选择">
			<el-option
			v-for="item in firts"
			:key="item.value"
			:label="item.label"
			:value="item.label">
		</el-option>
	</el-select>

	<el-select v-model="secondsvalue"  v-bind:placeholder="seplace">
		<el-option
		v-for="item in seconds"
		:key="item.secondsvalue"
		:label="item.secondslabel"
		:value="item.secondslabel">
	</el-option>
</el-select>

<!-- <select v-on:change="areaprov($event)">
	<option disabled="disabled" selected="selected">请选择</option>
	<option v-for="(k,index) in firts" :value="k.label">{{k.label}}</option>
</select>
<select>
	<option disabled="disabled" selected="selected">{{seplace}}</option>
	<option v-for="k  in seconds" >{{k.secondslabel}}</option>
</select> -->
</div>
</template>
<script>
export default {
	props:["message","secondselect"],
	name:"pulldown",
	data() {
		return {
			firts: [],
			seconds: [],
			value: '',
			secondsvalue:'',
			seplace:'请选择1'
		}
	},
	mounted:function () {
		console.log(this.message);
		this.firts = this.message;
	},
	watch:{
		value(){
			console.log(this.value);
			this.$emit("listenchild",this.value);
			this.seconds = this.secondselect;
			console.log(this.seconds);
			console.log(this.seconds[0]);
			this.seplace = this.seconds[0].secondslabel;
		}
	},
	methods:{
		// areaprov(event) {
		// 	console.log(event.target.value);
		// 	this.$emit("listenchild",event.target.value);
		// 	this.seconds = this.secondselect;
		// 	console.log(this.secondselect)
		// 	this.seplace = this.seconds[0].secondslabel;
		// }
	}
}


</script>
<style scoped lang="less">
*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}
.pulldown{
	width: 1000px;
	height: 100px;
	border: 1px solid red;
	z-index: 99999;
}
</style>