<template>
	<div id="DemoAK">
		<p>{{hello()}}</p>

		<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>

		<input v-AKdirOne>

		<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>

		<div id="hook-arguments-example" v-AKdirTwo:foo.a.b="message"></div>

		<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>

		<div v-AKdirThree="{ color: 'white', text: 'hello!' }"></div>

		<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>
		
		<anchored-heading :level="AKLevel">111</anchored-heading>
	</div>
</template>

</script>

<script>
import Vue from 'vue'
import $ from 'jquery'

//全局组合 混入
var AKMixinOne = {
	created: function(){
		this.hello()
	},
	methods:{
		hello:function(){
			console.log('hello from AKMixinOne')
			return 'hello from AKMixinOne return'
		}
	}
}

Vue.directive('AKdirOne',{
	inserted:function(el){
		el.focus()
	}
})

Vue.directive('AKdirTwo', {
	bind: function(el, binding, vnode) {
		var s = JSON.stringify
		el.innerHTML =
		'name: ' + s(binding.name) + '<br>' +
		'value: ' + s(binding.value) + '<br>' +
		'expression: ' + s(binding.expression) + '<br>' +
		'argument: ' + s(binding.arg) + '<br>' +
		'modifiers: ' + s(binding.modifiers) + '<br>' +
		'vnode keys: ' + Object.keys(vnode).join(', ')
	}
})

//在 bind 和 update 时触发相同行为，而不关心其它的钩子。
Vue.directive('AKdirThree', function(el, binding) {
	var s = JSON.stringify
	el.innerHTML = 'value.color:' + s(binding.value.color) + '|| value.text' + s(binding.value.text)
})

//render 函数
Vue.component('anchored-heading', {
	render: function(createElement) {
		return createElement(
				'h' + this.level, // tag name 标签名称
				this.$slots.default // 子组件中的阵列
				)
	},
	props: {
		level: {
			type: Number,
			required: true
		}
	}
})

export default {
	name: 'DemoAK',
	mixins:[AKMixinOne],
	data: function() {
		return {
			message: '自定义指令!',
			AKLevel: 1,
		}
	}

}
</script>

<style>

</style>