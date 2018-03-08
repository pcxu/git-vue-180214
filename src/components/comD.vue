<template>
	<div id="comD">
		<p>{{msg}}</p>
		<button @click="addP">10+</button>
		<button @click="delP">10-</button>
	</div>
</template>

<script>
export default {
	name: 'comD',
	data: function() {
		return {
			msg: 'this is comD!',
			price: 10
		}
	},
	methods: {
		addP() {
			this.$store.commit('increment', this.price)
		},
		delP() {
			this.$store.commit('decrement', this.price)
		}
	}
}
</script>

<style>
.comB-area {
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid paleturquoise;
}
</style>