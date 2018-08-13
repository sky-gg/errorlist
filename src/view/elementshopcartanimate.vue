<template>
  <div class="mine"
       @touchmove="touchmove"
       @touchend="touchend">
    <div :class="['backtotop',{'fadeInRight':isshow},{'fadeOutRight':ishide}]">
      <!--  -->
      <img src="@/assets/img/backtotop.png"
           alt="">
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabs, TabPane, Input, Select, Option } from "element-ui";
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
export default {
  name: "RNG",
  data() {
    return {
      isshow: false,
      ishide: false,
      timeout: null
    };
  },
  methods: {
    touchmove(e) {
      // alert('手机拖拽')
      console.log(e);
      this.isshow = false;
      this.ishide = true;
    },
    touchend(e) {
      // alert('手指抬起')
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        console.log(e);
        this.isshow = true;
        this.ishide = false;
      }, 800);
    }
  }
};
</script>
<style lang='less' scoped>
.mine {
  height: 1000px;
  .backtotop {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation: fadeInRight 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0.5;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation: fadeOutRight 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      opacity: 0.5;
      transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
    }
  }
}
</style>
