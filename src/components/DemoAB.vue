<template>

	<div id="DemoAB">
		<input v-model="fullName">
		<button v-on:click="btn">设置姓名值</button><br>
		<div v-on:click="zzdysjfour">
		<span>{{ firstName }}</span><br>
		<span>{{ lastName }}</span><br>
		<span>{{ fullName }}</span><br>
		</div>
	</div>

</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAB',
	data: function() {
		return {
			firstName: 'xu',
			lastName: 'peng',
		}
	},
	computed:{
		fullName:{
			get:function(){
				return this.firstName + ' ' + this.lastName
			},
			set:function(newvalue){
				var name = newvalue.split(' ')
				this.firstName = name[0]
				this.lastName = name[name.length - 1]
			}
		}
	},
	methods:{
		btn:function(){
			this.fullName = 'xu peng cheng'
		},
		zzdysjfour:function(){
			this.$emit('fzdysjfour')
		},
	}
}
</script>

<style>

</style>