<template>
	<div id="DemoAII">
		<input type="text" v-bind:value="bdMsgTwo" style="width:100%">
	</div>
</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAII',
	data: function() {
		return {

		}
	},
	props:['bdMsgTwo'],
	created(){
		console.log(this.bdMsgTwo)
	}
}
</script>

<style>

</style>