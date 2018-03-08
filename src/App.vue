<template>

	<div id="app">

		<div class="app-area-1" v-on:click="zhushi(1)" biaoshima="1">
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['1']" key="show">
					<img src="./assets/img/logo.png">
					<p>{{AppMsg}}</p>
				</div>
				<div v-else key="none">
					1.用v-if变化需要设置key。 <br>
					2.先引入jq，再引入其他插件。 <br>
					3.event.target：当前点击的元素。event.currentTarget：绑定事件的元素。 <br>
					4.对数组操作用set方法。 <br>
					5.biaoshima="1" + attr("biaoshima") 获取标签内自定义的属性。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-2" v-on:click="zhushi(2)">
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['2']" key="show">
					通过单文件引入：<demo></demo><br>
					通过默认路由引入：<router-view></router-view>
				</div>
				<div v-else key="none">
					1.Demo 等同于 demo : Demo 标签大小写没区别。采用缩写的话，大小写有区别。 <br>
					2.单文件引入，是及时渲染模式，这种模式下，支持大小写对应。 <br>
					3.横线+小写=大写 这个ok：Demo-apple-bananal <br>
					<!-- <Demo-apple-bananal></Demo-apple-bananal> -->
					vue2.0直接写 这个ok：DemoAppleBananal <br>
					<!-- <DemoAppleBananal></DemoAppleBananal> -->
					大小写不敏感 这个不行：demoapplebananal <br>
					<!-- <demoapplebananal></demoapplebananal> -->

					用is绑定这个ok：DemoAppleBananal <br>
					<!-- <p :is="DemoAppleBananal"></p> -->
					这个不行，is绑定不能拆分：Demo-apple-bananal <br>
					<!-- <p :is="Demo-apple-bananal"></p> -->
					这个不行：demoapplebananal <br>
					<!-- <p :is="demoapplebananal"></p> -->
				</div>
			</transition>
		</div>

		<div class="app-area-3" v-on:click="zhushi(3)">
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['3']" key="show">
					<demoAA></demoAA>
				</div>
				<div v-else key="none">
					1.export default内的name是组件内容的编写区域的id。 <br>
					2.Object.freeze(obj)将内部的冰冻，阻止修改现有属性的特性和值，并阻止添加新属性。 <br>
					3.因为冰冻所以会报错 Error in created hook: "ReferenceError: list is not defined"。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-4">
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['4']" key="show">
					<demoAB v-on:fzdysjfour="zhushi(4)"></demoAB>
				</div>
				<div v-else key="none" v-on:click="zhushi(4)">
					1.监听属性，涉及的值必须都是存在的。 <br>
					2.调用{{fullName}}能够显示值，但这不是data里面的属性，用input绑定没用，还会报错。 <br>
					3.getter 页面刷新之后，会第一时间调用getter，获取属性的最新值。+ setter 属性的值变化后，会调用setter。 <br>
					4.虽然设置了函数去改变改变值，但是还是计算属性的getter为主。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-5">
			<button v-on:click="zhushi(5)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['5']" key="show">
					<demoAC></demoAC>
				</div>
				<div v-else key="none">
					1.set全局方法，插入一条数据。 <br>
					2.Object.assign 方法，为属性插入多条数据。 <br>
					3.属性内没有的值，不会显示不会报错。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-6">
			<button v-on:click="zhushi(6)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['6']" key="show">
					<input v-model="AppMsg"><br>
					父组件展示：{{AppMsg}}<br>
					子组件部分：<demoAD v-bind:czsix="AppMsg"></demoAD>
				</div>
				<div v-else key="none">
					1.props是向子组件传值 <br>
					2.当触发子组件内函数时，会影响组组件展示，但不影响父组件，并报错。 <br>
					3. .sync 并没有想象中的作用，子组件修改传递父组件可以用watch+emit方法。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-7">
			<button v-on:click="zhushi(7)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['7']" key="show">
					<demoAE></demoAE>
				</div>
				<div v-else key="none">
					1.v-on:remove="list.splice(index, 1)" remove是函数名，list是data属性名，自己设定的没法用。 <br>
					2.key不能作为传值。 <br>
					3.\' \' 单引号需要\来转义。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-8">
			<button v-on:click="zhushi(8)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['8']" key="show">
					<demoAF></demoAF>
				</div>
				<div v-else key="none">
					1.不同子组件（.vue）内定义的全局组件会通用，注意组件名。 <br>
					2.父组件绑定btn的值，没法分离。 <br>
					3.全局组件btn效果可以区分。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-9">
			<button v-on:click="zhushi(9)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['9']" key="show">
					<demoAG></demoAG>
				</div>
				<div v-else key="none">
					1.this.$emit('AGzujiansj') 向父组件传值的关键。 <br>
					2.this.msg + 1 or this.msg++ ++并不能起到加值得效果。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-10" v-on:click="zhushi(10)">
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['10']" key="show">
					<demoAH>
						<span>父组件内容</span>
						<span slot="top">父组件内容-top</span>
						<span slot="footer">父组件内容-footer</span>
						<br>
						<div slot="AHzujiana" slot-scope="AHprops">
							<span>AH的组件 第一个</span> ||
							<span>{{AHprops.text}}</span>
						</div>
					</demoAH>
					<br>
					<demoAH inline-template>
						<div>
							<p>这些将作为组件自身的模板。</p>
							<p>而非父组件透传进来的内容。</p>
						</div>
					</demoAH>
				</div>
				<div v-else key="none" >
					1.slot 插槽 具名/不具名 <br>
					2.slot-scope 可以接受从子组件传递过来的值。 <br>
					3.inline-template 内联模板，相当于写在template内。 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-11">
			<button v-on:click="zhushi(11)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['11']" key="show">
					<demoAI></demoAI>
				</div>
				<div v-else key="none" >
					1.v-model 就是提供一个input事件，让值可以反馈上来。 <br>
					2.组件使用input + v-model中，v-bind:bdMsgTwo="MsgTwo" 负责将值传递到子组件中，v-model="MsgTwo"负责相应子组件emit和$event.target.value,v-on:input="$emit(\'input\',$event.target.value)"子组件触发函数。 <br>
					3.v-bind:checked="MsgThree"为input绑定值，v-on:change=" MsgThree = $event.target.checked"将变化返回。 <br>
					4.$event.target.checked or value input用value，check用checked。 <br>
					5.以上论点有误，单文件子件和全局组件有区别。
				</div>
			</transition>
		</div>

		<div class="app-area-12">
			<button v-on:click="zhushi(12)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['12']" key="show">
					<demoAJ></demoAJ>
				</div>
				<div v-else key="none" >
					1.model:{ prop: 'bdMsgOne', event: 'AJeventone' } 定组件可使用的值中，那个是绑定值，那个是事件名称。<br>
					2.v-bind:bdCodeTwo="CodeTwo"才是将值传入子组件的值， v-model="MsgTwo"只是接受input事件响应变化的，值没有直接传入。 <br>
					3.var i = $(event.target).prop("checked") jq获取子组件的checked属性的值。 <br>
					4.v-model 本身有v-bind传值+接收的功能，多余的传值可以进行其他操作。想将值返回到父组件，要用emit方法。
				</div>
			</transition>
		</div>

		<div class="app-area-13">
			<button v-on:click="zhushi(13)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['13']" key="show">
					<demoAK></demoAK>
				</div>
				<div v-else key="none">
					1.mixins 混入 <br>
					2.自定义指令 <br>
					3.render 函数 <br>
				</div>
			</transition>
		</div>

		<div class="app-area-14">
			<button v-on:click="zhushi(14)" style="width:100%">注释</button>
			<transition name="fade" mode="out-in">
				<div v-if="Appdefault['14']" key="show">
					<router-view></router-view>
					<!--单纯的点击 TO comA ，comAA里面的内容不会被加载，很自觉。-->
					<!--用这样办法的，里面都是对象，可以设置属性。-->
					<router-link v-bind:to="{path:'comA'}"> TO comA</router-link><br />
					<router-link v-bind:to="{path:'comA/qqq'}"> TO comA + 参数1</router-link><br />
					<!--这种传值方法不行，没找到原因-->
					<router-link v-bind:to="{ path:'comA',params:{color:'rrr'} }"> TO comA + 参数2</router-link><br />
					<router-link v-bind:to="{path:'comB/www/detail/111'}"> TO comB + 参数 + 页面 +类型</router-link><br />
					<router-link v-bind:to="{path:'comA/comAA'}"> TO comA + comAA</router-link><br />
					<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>
					<!--to 和  :to 是有很大区别的
					加：，代表绑定的是一个属性（:to="aaa"）会这样是一个属性，可以变化。（:to="'aaa'"）加''变成字符串，避免这个问题。
					1.v-bind:to，存在路由叠加的问题，先点v-bind:to="{path:'comB/www/detail/111'}"，再点v-bind:to="{path:'comA'}"，
					会变成/comB/www/detail/comA，直接加在后面。
					2.to不会，是理想状态。
					/comA 与 comA 也有区别
					不加/，表示从当前目录找页面。加/，表示从子文件夹内找页面。
				-->
				<router-link to="/comA"> TO comA</router-link><br />
				<router-link to="/comB/eee/detail/222"> TO comB + 参数 + 页面 +类型</router-link><br />
				<div style="height: 5px;width: 90%;margin:10px auto;background-color: #B6B6B6;"></div>
					<!--replace 一个布尔类型，默认为false。如果replace设置为true，
						那么导航不会留下history记录，点击浏览器回退按钮不会再回到这个路由。-->
						<router-link to="/comA" replace></router-link>
						<!--具名路由-->
						<!--tag 声明式的导航，可以指定这是什么表情 tag="a" or tag="li" -->
						<router-link v-bind:to="{name:'comA'}"> TO comA +具名路由</router-link><br />
						<!--具名视图-->
						<!--这也不管用啊...-->
						<router-view name="viewA"></router-view>
						<router-view name="viewB"></router-view>
					</div>

					<div v-else key="none" >
						1.path这个写法会使路由覆盖，本来有comA，只想写comB什么的，会直接加在后面，不会清除。 <br>
						2.获取路由传值 $route.params ，需要路由js配合，一开始需要限定好。路由传值，传来的都是页面属性，可以直接打印。 <br>
					</div>
				</transition>
			</div>

			<div class="app-area-15">
				<button v-on:click="zhushi(15)" style="width:100%">注释</button>
				<transition name="fade" mode="out-in">
					<div v-if="Appdefault['15']" key="show">
						{{totalPrice}}
						<comC></comC>
						<comD></comD>
					</div>
					<div v-else key="none">
						vuex
					</div>
				</transition>
			</div>

			<div class="app-area-16">
				<button v-on:click="zhushi(16)" style="width:100%">注释</button>
				<transition name="fade" mode="out-in">
					<div v-if="Appdefault['16']" key="show">
						<ul>
							<li v-for="item in axioslist">{{item}}</li>
						</ul>
						{{axioslist}}
					</div>
					<div v-else key="none">
						1.axios内回调函数要定义var _this = this
					</div>
				</transition>
			</div>

		</div>
	</template>

	<script>
	import Vue from 'vue'
	import $ from 'jquery'

	import Demo from '@/components/Demo.vue'
	import DemoAA from '@/components/DemoAA.vue'
	import DemoAB from '@/components/DemoAB.vue'
	import DemoAC from '@/components/DemoAC.vue'
	import DemoAD from '@/components/DemoAD.vue'
	import DemoAE from '@/components/DemoAE.vue'
	import DemoAF from '@/components/DemoAF.vue'
	import DemoAG from '@/components/DemoAG.vue'
	import DemoAH from '@/components/DemoAH.vue'
	import DemoAI from '@/components/DemoAI.vue'
	import DemoAJ from '@/components/DemoAJ.vue'
	import DemoAK from '@/components/DemoAK.vue'
	import comC from '@/components/comC.vue'
	import comD from '@/components/comD.vue'

	export default {
		name: 'app',
		components: {
			demo: Demo,
			demoAA: DemoAA,
			demoAB: DemoAB,
			demoAC: DemoAC,
			demoAD: DemoAD,
			demoAE: DemoAE,
			demoAF: DemoAF,
			demoAG: DemoAG,
			demoAH: DemoAH,
			demoAI: DemoAI,
			demoAJ: DemoAJ,
			demoAK: DemoAK,
			comC: comC,
			comD: comD,
		},
		data: function() {
			return {
				AppMsg: 'Vue 基础语法练习',
				Appdefault:[,true,true,true,true,true,true,true,true,true,true,
				true,true,true,true,true,true,true,true,true,true],
				axioslist: {},
			}
		},
		created(){
			var _this = this
			this.$axios.get('../static/data.json')
			.then(function(res){
				_this.axioslist = res.data.getNewsList
				console.log(res.data.getNewsList)
			}).catch(function(err){
				console.log(err)
			})
		},
		computed: {
			totalPrice(){
				// return this.$store.state.totalPrice
				// 01282121 这是第三种方法，引入getters
				return this.$store.getters.getTotal
			}
		},
		methods:{
			zhushi: function(i){
				// var i = $(event.currentTarget).attr("biaoshima");
				Vue.set(this.Appdefault, i, !this.Appdefault[i])
				if (this.Appdefault[i]) {
					$(event.currentTarget).css('border','3px dotted #DBDBDB')
				}else{
					$(event.currentTarget).css('border','3px dotted #B2DFEE')
				}
			},
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
	p{
		text-align: center;
	}
	#app{
		width: 100%;
		height: 100%;
		margin: 10px 10px;
	}
	#app > div {
		display: inline-block;
		float: left;
		border: 3px dotted #DBDBDB;
		padding: 5px 10px 5px 10px;
		margin: 0 5px 5px 0;
		box-sizing: border-box;
		overflow: hidden;
		word-wrap:break-word;
		word-break:break-all;
		height: auto;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	</style>