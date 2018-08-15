<template>
  <div class="vuex">
    <button @click="minus">减</button>{{num}}<button @click="add">加</button>
  </div>
</template>
<script>
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    num:0,
  },
  mutations:{
    add:state => state.num ++,
    minus:state => state.num --,
  }
})
export default {
  name:'WE',
  computed:{
    num(){
      return store.state.num;
    },
  },
  methods:{
    add(){
      store.commit('add');
    },
    minus(){
      store.commit('minus');
    }
  }
}
</script>
<style lang="less" scoped>
.vuex{
  button{
    width: 50px;
  }
}
</style>
