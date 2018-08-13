<template>
  <div class="v-heads">
    <header>
      <div class="box1">左</div>
      <div class="box2">右</div>
    </header>
    <div class="calcbox">
      <el-input type="number"
                v-model="calc"></el-input>
      <el-button type='primary'
                 @click="numadd">加1</el-button>
      <el-button type='primary'
                 @click="minus">减1</el-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Input, Button, InputNumber } from "element-ui";
Vue.use(Input);
Vue.use(Button);
Vue.use(InputNumber);
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
  },
  watch: {
    calc: function() {
      console.log("你变了");
    }
  },
  fnd() {
    this.count = 0;
    this.timer2 = setInterval(function() {
      $("#query_ticket").click();
      this.timer1 = setInterval(function() {
        count++;
        this.a =
          $("#ZY_6i000G292602").attr("class") ||
          $("#ZY_6j000G634302").attr("class");
        console.log(this.a);
        if (a) {
          console.log("共查询：" + count + "次！");
          clearInterval(this.timer1);
          clearInterval(this.timer2);
          alert("有票，快买");
        }
      }, 3999);
    }, 4000);
  }
};
</script>
<style lang="less" scoped>
.v-heads {
  height: 50px;
  width: 100%;
  header {
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
  .calcbox {
    .el-input {
      width: 10%;
    }
  }
}
</style>
