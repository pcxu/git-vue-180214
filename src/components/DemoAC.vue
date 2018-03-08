<template>

	<div id="DemoAC">
		<button v-on:click="btn">设置数组值</button><br>
		1.{{duixiang}} 2.{{duixiang.xm}} 3.{{duixiang.nianling}} 4.{{duixiang.aa}} 5.{{duixiang.bb}} 6.{{duixiang.cc}}
	</div>

</template>

</script>

<script>
import Vue from 'vue'

export default {
	name: 'DemoAC',
	data: function() {
		return {
			duixiang: {
				xm: 'chenlan',
				nianling: 21,
				sanwei: {
					x: 28,
					y: 36,
					t: 28
				}
			},
		}
	},
	methods:{
		btn:function(){
			Vue.set(this.duixiang, 'aa', 'aa')
			//对象中插入多条数据
			this.duixiang = Object.assign({}, this.duixiang, {
				bb: 'bb',
				cc: 'cc'
			})
			}
		}
	}
	</script>

	<style>

	</style>