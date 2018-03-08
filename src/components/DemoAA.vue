<template>

	<div id="DemoAA">
		<p v-for="it in list"> {{ it }} </p>
	</div>

</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAA',
	data: function() {
		return {
			list:{
				value1:'list1',value2:'list2',value3:'list3',value4:'list4',value5:'list5',
			}
		}
	},
	created(){
		// 不注释会报错
		// Object.freeze(list)
		this.list.value5 = 'list'
	}
}
</script>

<style>

</style>