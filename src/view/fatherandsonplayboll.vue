<template>
  <div>
    <h1> {{ new Date().toLocaleString()}}</h1>
    <v-heads :calc='calc'
             v-on:add="fn1($event)"
             v-on:minus="fn2($event)"></v-heads>
  </div>
</template>
<script>
import Vue from "vue";
import vHeads from "com/vHead/index";
export default {
  name: "OMG",
  data() {
    return {
      calc: 0
    };
  },
  methods: {
    fn1(a) {
      console.log(a);
      a++;
      this.calc = a;
      console.log(this.fn1.name)
    },
    fn2(a) {
      console.log(a);
      a--;
      this.calc = a;
    }
  },
  components: {
    vHeads
  }
};
</script>
<style scoped>
</style>
