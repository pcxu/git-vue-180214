<template>
	<div id="comB">

		<div class="comB-area">
			<p>{{msg}}</p>
			<p>{{$route.params}}</p>
		</div>

	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'demo',
	data: function() {
		return {
			msg: 'this is comB!'
		}
	},
	props: {

	},
	methods: {

	}
}
</script>

<style>
.comB-area {
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid paleturquoise;
}
</style>