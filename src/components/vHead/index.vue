<template>
  <div class="v-heads">
    <header>
      <div class="box1">左</div>
      <div class="box2">右</div>
    </header>
    <div class="box">
      <input type="text"
             v-model="calc">
      <button @click="numadd">加1</button>
      <button @click="minus">减1</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "vHeads",
  props: {
    calc: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    numadd() {
      this.$emit("add", this.calc);
    },
    minus() {
      this.$emit("minus", this.calc);
    }
  }
  // computed:{
  //   fn:function(){
  //     return this.$emit(calc,this.calc)
  //   }
  // }
};
</script>
<style lang="less" scoped>
.v-heads {
  height: 50px;
  width: 100%;
  .box1.box2 {
    font-size: 30px;
    color: #faa;
    width: 50px;
  }
  .box1 {
    float: left;
  }
  .box2 {
    float: right;
  }
}
</style>
