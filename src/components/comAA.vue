<template>
	<div id="comAA">

		<div class="comAA-area">
			<p>{{msg}}</p>
		</div>

	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'demo',
	data: function() {
		return {
			msg: 'this is comAA!'
		}
	},
	props: {

	},
	methods: {

	}
}
</script>

<style>	
.comAA-area {
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid paleturquoise;
}
</style>