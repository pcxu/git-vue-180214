<template>
	<div id="DemoAF">
		三个同级btn（无法分离）：
		<button v-on:click="msg += 1">{{ msg }}</button>
		<button v-on:click="msg += 1">{{ msg }}</button>
		<button v-on:click="msg += 1">{{ msg }}</button>
		<br>三个子组件（可以分离）：
		<AFzizujian></AFzizujian>
		<AFzizujian></AFzizujian>
		<AFzizujian></AFzizujian>
	</div>
</template>

</script>

<script>
import Vue from 'vue'

//1.分别显示
// Vue.component('AFzizujian',{
// 	template:'<button v-on:click="counter += 1">{{ counter }}</button>',
// 	data:function(){
// 		return{
// 			counter:0
// 		}
// 	}
// })

//2.集体显示
// var count = { counter: 0 }
Vue.component('AFzizujian',{
	template:'<button v-on:click="counter += 1">{{ counter }}</button>',
	data:function(){
		return {
			counter : 0
		}
	}
})


// var data = {msg:0}
export default {
	name: 'DemoAF',
	// 1.
	data: function() {
		return {
			msg: 0
		}
	}

	//2.
	// data: function() {
	// 	return data
	// }
}

</script>

<style>

</style>