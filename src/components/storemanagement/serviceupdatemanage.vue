<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>门店服务--修改</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
							<el-row :gutter="10">
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group">
											<span class="mc">适用商家</span>
											<el-input v-model="shujus.bussinessName" class="name1" :disabled="true">
											</el-input>
										</div>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group">
											<span class="mc">服务分组</span>
											<el-input v-model="shujus.groupingName" class="name1" :disabled="true">
											</el-input>
										</div>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group">
											<span class="mc">服务名称</span>
											<el-input v-model="shujus.serviceName" class="name1" :disabled="true">
											</el-input>
										</div>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group">
											<span class="mc">适用门店</span>
											<el-input v-model="shujus.storeName" class="name1" :disabled="true">
											</el-input>
										</div>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.shujus.servicePrice.$error }">
											<span class="mc">服务售价</span>
											<el-input @blur="test" v-model="shujus.servicePrice" class="name1">
											</el-input>
										</div>
										<span class="form-group__message" v-if="!$v.shujus.servicePrice.required">不能为空</span>
										<span class="form-group__message" v-if="!$v.shujus.servicePrice.aa">只能填写数字或小数</span>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.shujus.servicePushMoney.$error }">
											<span class="mc">服务提成</span>
											<el-input @blur="test" v-model="shujus.servicePushMoney" class="name1">
											</el-input>
										</div>
										<span class="form-group__message" v-if="!$v.shujus.servicePushMoney.required">不能为空</span>
										<span class="form-group__message" v-if="!$v.shujus.servicePushMoney.aa">只能填写数字或小数</span>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.shujus.unit.$error }">
											<span class="mc">单位</span>
											<select @blur="test" class="xl" v-model="shujus.unit">
												<option v-for="se in units" :value="se.value">{{se.text}}</option>
											</select>
										</div>
										<span class="form-group__message" v-if="!$v.shujus.unit.required">不能为空</span>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.shujus.sort.$error }">
											<span class="mc">排序</span>
											<el-input @blur="test" v-model="shujus.sort" class="xl" clearable>
											</el-input>
										</div>
										<span class="form-group__message" v-if="!$v.shujus.sort.required">不能为空</span>
									</div>
								</el-col>
								 <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.shujus.state.$error }">
											<span class="mc">是否上架</span>
											<select @blur="test" class="xl" v-model="shujus.state">
												<option v-for="sel in states" :value="sel.value">{{sel.text}}</option>
											</select>
										</div>
										<span class="form-group__message" v-if="!$v.shujus.state.required">不能为空</span>
									</div>
								</el-col>
							</el-row>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button @click="submit" class="el-button el-button--primary queding">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
						<!--<button type="button" class="el-button el-button--primary" @click="close">确 定</button>-->
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { required, numeric, minLength, maxLength, or } from 'vuelidate/lib/validators'
	export default {
		props: ['shujus'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				units: [{
					value: '次',
					text: '次'
				}],
				states: [{
						value: '0',
						text: '停用'
					},
					{
						value: '1',
						text: '启用'
					}
				],
			}
		},
		validations: {
			shujus: {
				servicePrice: {
					required,
					aa: value => {
					if(value.split(".").length == 2) {

						var p1 = /^(((\d*).\d+)|(\d+.(\d*)|\d+))$/;

						return p1.test(value);
					} else {
						var p = /[^\d]/g;
						return !p.test(value);
					}

				}
				},
				servicePushMoney: {
					required,
					aa: value => {
					if(value.split(".").length == 2) {

						var p1 = /^(((\d*).\d+)|(\d+.(\d*)|\d+))$/;

						return p1.test(value);
					} else {
						var p = /[^\d]/g;
						return !p.test(value);
					}

				}
				},
				unit: {
					required
				},
				sort: {
					required
				},
				state: {
					required
				}
			}
		}, //获取树形菜单
		mounted: function() {

//			console.log(this.shujus)
		},
		methods: {
			test() {
				this.$v.shujus.servicePrice.$touch()
				if(this.$v.shujus.servicePrice.$error) {
					return false;
				}
				this.$v.shujus.servicePushMoney.$touch()
				if(this.$v.shujus.servicePushMoney.$error) {
					return false;
				}
				this.$v.shujus.unit.$touch()
				if(this.$v.shujus.unit.$error) {
					return false;
				}
				this.$v.shujus.sort.$touch()
				if(this.$v.shujus.sort.$error) {
					return false;
				}
				this.$v.shujus.state.$touch()
				if(this.$v.shujus.state.$error) {
					return false;
				}
				return true;
			},
			submit() {
				if(!this.test()) {
					return false;
				}
				
				this.$ajax.post(`${this.$url}/storeService/updateStoreService.html`, {
						serviceName: this.shujus.serviceName,
						serviceID: this.shujus.serviceID,
						servicesID:this.shujus.servicesID,
						bussinessID: this.shujus.bussinessID,
						storeID: this.shujus.storeID,
//						businessScope: this.shujus.businessScope,
						groupingId: this.shujus.groupingId,
						servicePrice: this.shujus.servicePrice,
						state: this.shujus.state,
						servicePushMoney: this.shujus.servicePushMoney,
						sort: this.shujus.sort,
						unit: this.shujus.unit
					}).then(data => {
						console.log(data)
						this.$emit('closes');
					})
					.catch((error) => {
						this.$message.error('获取数据失败');
					})
			},
			close: function() {
				this.$emit('close');
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
					}
				})
			},

		}
	}
</script>