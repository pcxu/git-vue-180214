<template>

	<div id="DemoAD">
		子组件展示：{{czsix}} <br>
		子组件修改：<button v-on:click="btn">修改props</button>
	</div>

</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAD',
	props:['czsix'],
	methods:{
		btn:function () {
			this.czsix =  "被修改后的props"
		}
	}
}
</script>

<style>

</style>