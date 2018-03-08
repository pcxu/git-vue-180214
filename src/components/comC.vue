<template>
	<div id="comC">
		<p>{{msg}}</p>
		<button @click="addP">5+</button>
		<button @click="delP">5-</button>
	</div>
</template>

<script>
export default {
	name: 'comC',
	data: function() {
		return {
			msg: 'this is comC!',
			price: 5
		}
	},
	methods: {
		addP() {
				// 01282121 这是第一种方法，状态集+mutations
				// commit 数据提交，提交给store里面的mutations
				this.$store.commit('increment', this.price)
				//  01282121 这是第二种方法，引入actions
				// dispatch 数据调度  给store里面的actions 与上面效果一样，一个通过计算，一个加入过程（中介）
				// this.$store.dispatch('increase', this.price)
			},
			delP() {
				this.$store.commit('decrement', this.price)
			}
		}
	}
	</script>

	<style>

	</style>