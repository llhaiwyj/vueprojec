/*import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

const dictionary = {
  en: {
    messages: {
      // <input type="text" v-model="phoneNumber" name="phone" v-validate="'required|phone'">
      // 不满足required条件时，显示的提示对应下面的设置
      required: (field) => `${field} is necessary!`,
    },
    attributes: {
      // <input type="text" v-model="phoneNumber" name="phone" v-validate="'required|phone'">
      // 上述messages提示信息中field显示的内容在此设置，对应标签的name属性
      phone: 'Phone Number',
    }
  }
}
 
// 引用上述设置
Validator.localize(dictionary)
 
// 自定义验证规则,取名为phone, 通过该方式使用v-validate="'required|phone'"
Validator.extend('phone', {
  // 验证规则，符合规则通过，否则不通过 (规则为美国电话号码)
  validate: (value, ref) => {
    return /^(\d3|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/.test(value)
  },
  // 提示信息，不符合规则提示语
  // <span v-show="errors.has('phone')" class="error-message"> {{ errors.first('phone') }} </span>
  getMessage: (field) => 'The ' + field + ' is invalid.'
})
 
// 事件触发规则，在输入框中输入后点击事件触发验证，默认为实时验证
Vue.use(VeeValidate, { events: 'blur' })*/