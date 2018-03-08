<template>
	<div id="DemoAH">
		<slot> no slot </slot>
		<slot name="top"> no slot </slot>
		<slot name="footer"> no slot </slot>

		<slot name="AHzujiana" text="1.23 a 第一个 "> no slot </slot>
	</div>
</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAH',
	data: function() {
		return {
			msg: 'Demo！'
		}
	}
}
</script>

<style>

</style>