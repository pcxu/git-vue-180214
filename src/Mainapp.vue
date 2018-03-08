<template>

	<div id="Mainapp">
		<div>
			<button v-on:click="qiehuan()">pc/mob</button>
		</div>
		<app v-if="aaa"></app>
		<home v-if="!aaa"></home>
	</div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'

import App from '@/App.vue'
import Home from '@/views/Home.vue'


export default {
	name: 'Mainapp',
	components: {
		app: App,
		home: Home
	},
	data: function() {
		return {
			aaa:true,
		}
	},
	methods:{
		qiehuan:function(){
			this.aaa = !this.aaa
		}
	}
}
</script>

<style>
*{
	margin: 0 0 0 0;
	padding: 0 0 0 0;
	font-family: '微软雅黑';
	font-size: 14px;
	cursor:pointer;
	letter-spacing:1px;
}
</style>
