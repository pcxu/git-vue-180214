<template>
	<div id="DemoAJ">
		<label for="AJcheckone">AJ的第一个check</label>
		<AJinput v-bind:bdMsgOne="MsgOne" v-model="MsgOne"></AJinput>
		{{MsgOne}} <br>
		<label for="AJchecktwo">AJ的第二个check</label>
		<AJcheck v-bind:bdCodeTwo="CodeTwo" v-model="MsgTwo" @AJeventtwo="AJeventtwoi"></AJcheck>
		<!-- <AJcheck v-bind:bdMsgTwo="MsgTwo" v-model="MsgTwo"></AJcheck> -->
		{{MsgTwo}} {{CodeTwo}}
	</div>
</template>

</script>

<script>
import Vue from 'vue'
import $ from 'jquery'

Vue.component('AJinput',{
	props:['bdMsgOne'],
	model:{
		prop: 'bdMsgOne',
		event: 'AJeventone'
	},
	template:'<input id="AJcheckone" v-bind:checked="bdMsgOne" type="checkbox" v-on:change="$emit(\'AJeventone\', $event.target.checked)" />'
})

Vue.component('AJcheck',{
	props:{
		bdCodeTwo: String,
		MsgTwo: Boolean
	},
	model:{
		prop: 'MsgTwo',
		// event: 'AJeventtwo'
	},
	// template:'<input id="AJchecktwo" v-bind:checked="MsgTwo" type="checkbox" v-on:change="$emit(\'AJeventtwo\', $event.target.checked)" />',
	template:'<input id="AJchecktwo" v-bind:checked="MsgTwo" type="checkbox" v-on:change="changeevent()" />',
	methods:{
		changeevent:function(){
			var i = $(event.target).prop("checked")
			this.$emit('AJeventtwo', i)
			console.log(this.bdCodeTwo)
		}
	}
})

export default {
	name: 'DemoAJ',
	data: function() {
		return {
			MsgOne: true,
			MsgTwo: true,
			CodeTwo: '222'
		}
	},
	methods:{
		AJeventtwoi:function(i){
			console.log(i)
		}
	}

}
</script>

<style>

</style>