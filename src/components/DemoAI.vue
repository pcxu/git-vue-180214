<template>
	<div id="DemoAI">
		正常使用input + v-model：
		<input type="text" v-model="MsgOne" style="width:100%"><br>
		<input type="text" v-bind:value="MsgOne" v-on:input=" MsgOne = $event.target.value" style="width:100%"><br>
		<span>{{MsgOne}}</span><br>
		组件使用input + v-model：
		<AIinput v-bind:bdMsgTwo="MsgTwo" v-model="MsgTwo"></AIinput>
		<DemoAII v-bind:bdMsgTwo="MsgTwo" v-model="MsgTwo"></DemoAII>
		<span>{{MsgTwo}}</span><br>
		正常使用input + checkbox：
		<label for="AIcheckboxone">AI第一个选项</label>
		<input type="checkbox" id="AIcheckboxone" v-bind:checked="MsgThree" v-on:change=" MsgThree = $event.target.checked">
		{{MsgThree}} <br>
		组件使用input + checkbox：
		<label for="AIcheckboxtwo">AI第二个选项</label>
		<AIcheckbox v-bind:bdMsgFour="MsgFour" v-model="MsgFour"></AIcheckbox>
		{{MsgFour}}
	</div>
</template>

</script>

<script>
import Vue from 'vue'
import DemoAII from './DemoAII'

Vue.component('AIinput',{
	template:'<input ref="input" v-bind:value="bdMsgTwo" v-on:input="$emit(\'input\',$event.target.value)" style="width:100%">',
	props:['bdMsgTwo']
})

Vue.component('AIcheckbox',{
	template:'<input <input type="checkbox" id="AIcheckboxtwo" v-bind:checked="bdMsgFour" v-on:change="$emit(\'input\',$event.target.checked)">',
	props:['bdMsgFour']
})

export default {
	name: 'DemoAI',
	components:{
		DemoAII
	},
	data: function() {
		return {
			MsgOne: '这是DEMOAI的第一个值。',
			MsgTwo: '这是DEMOAI的第二个值。',
			MsgThree: true,
			MsgFour: true,
		}
	}
}
</script>

<style>

</style>