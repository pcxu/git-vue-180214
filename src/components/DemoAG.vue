<template>
	<div id="DemoAG">
		{{msg}}
		<AGbtn v-on:AGzujiansj="AGcount"></AGbtn>
		<AGbtn v-on:AGzujiansj="AGcount"></AGbtn>
		<!-- <button v-on:click="AGcount">111</button> -->
	</div>
</template>

</script>

<script>
import Vue from 'vue'

Vue.component('AGbtn',{
	template:'<button v-on:click="AGzizujiansj">{{msgzi}}</button>',
	data:function(){
		return{
			msgzi:0,
		}
	},
	methods:{
		AGzizujiansj:function(){
			this.msgzi = this.msgzi + 1
			this.$emit('AGzujiansj',2)
		}
	}
})

export default {
	name: 'DemoAG',
	data: function() {
		return {
			msg: 0,
		}
	},
	methods:{
		AGcount:function(x){
			this.msg = this.msg + x
		}
	}
}
</script>

<style>

</style>