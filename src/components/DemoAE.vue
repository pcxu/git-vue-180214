<template>

	<div id="DemoAE">
		<input v-model="newtitle" v-on:keyup.enter="addNew" placeholder="增加选项">
		<!-- <p v-for="it in list"> {{ it}} </p> -->
		<ul>
			<li is="AEzizujian" v-for="(it,index) in list" v-bind:key="it.id" v-bind:title="it.title" v-bind:index="index" v-bind:id="it.id" v-on:remove="list.splice(index, 1)"></li>
		</ul>
		<ul>
			<li v-for="(it,index) in list" v-bind:key="it.id" v-bind:title="it.title" v-bind:index="index" v-bind:id="it.id" v-on:remove="list.splice(index, 1)">{{it.title}}</li>
		</ul>
	</div>

</template>

</script>

<script>
import Vue from 'vue'

Vue.component('AEzizujian',{
	template:'<li> {{index}} {{id}} {{title}} <button v-on:click="$emit(\'remove\')">X</button> </li>',
	props:['index','id','title'],
})

export default {
	name: 'DemoAE',
	data: function() {
		return {
			list:[{
				id:1,title:'第一行'
			},{
				id:2,title:'第二行'
			},{
				id:3,title:'第三行'
			}],
			newid:4,
			newtitle:''
		}
	},
	methods:{
		addNew:function(){
			this.list.push({
				id: this.newid++,
				title: this.newtitle
			})
			this.newtitle= ''
		}
	}
}
</script>

<style>

</style>