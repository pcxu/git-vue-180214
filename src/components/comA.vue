<template>
	<div id="comA">

		<div class="comA-area">
			<p>{{msg}}</p>
			<!--路由传值，传来的都是页面属性，可以直接打印。-->
			<p>{{$route.params.color}}</p>
			<button @click="getParam">获取路由传值</button>
		</div>

		<div class="comA-area">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'demo',
	data: function() {
		return {
			msg: 'this is comA!'
		}
	},
	created: function() {
		console.log(this.$route.params)
	},
	methods: {
		getParam() {
			console.log(this.$route.params)
		}
	}
}
</script>

<style>
.comA-area {
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid paleturquoise;
}
</style>