# try my best for a good day

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
#### vue-cli 常见问题

1. 组件 注册：命名规则(驼峰)
  * html中：v-head  
  * js中：vHead  
  * html中：v-head-tap  
  * js中：vHeadTap 
  > 不这样写会报 <b style='color:red'>'did you register the component correctly'</b>

  引入：import vHead from 'com/vHead' components:{vHead}

2. 自定义路径名
  * 使用@代替src  或者 com 代替 'src/components/' 等
  * 设置地点在 build/webpack.base.conf.js下的module.exports/resolve

3. less编译
  npm i less less-loader --save-dev 先安装
  再去 build/webpack.base.conf.js 下的module/rules 复制追加一份
    ```js
    {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader",
    }
    ```
4. 修改过config与build文件夹中的内容后需重新跑一次项目
---
#### 父子组件传参 子组件修改父组件数据

  a. 父组件引入子组件并注册
  > <b style='color:red'>先注册再使用</b>
    props:['num'] 记得引号
  ```
  html
    <v-heads></v-heads>
  js
    import vHeads from 'com/vHeads';
    components: {
      vHeads
    }
  ```
  b. 父组件通过 :a = a 的方式将自己的a传给子组件
  ```
  html
    <v-heads :a='a'></v-heads>
  js
    data(){
      return{
        a = 0,
      }
    }
  ```
  c. 子组件通过props属性进行接收
  ```
  props: {
    a: {
      type: Number,
      required: true
    }
  },
  ```
  d. 子组件使用该数据
  ```
  html
    <b>{{a}}</b>
  ```
  e. 子组件有修改数据的需求 调用自身方法 在方法中使用 "this.$emit('自定义方法名','要传的参数')"传给父组件 例如："this.$emit('fn',this.a)"
  ```
  需求a++
    html
      <button @click="numadd">加1</button>
    
    js
      methods: {
        numadd() {
          this.$emit("fn", this.a);
        }
      }
  ```
  f. 父组件 通过v-on:fn=fn2($event) 绑定自身方法fn2 在fn2 中将接收的数据进行修改
  ```
  html
    <v-heads :a='a'
              v-on:fn="fn2($event)"></v-heads>
  js
    methods: {
      fn2(a) {
        console.log(a);
        a++;
        this.a = a;
      }
    },
  ```
---
#### 新技能GET
1. 不知宽高的物体左右居中（ios独特的bug解决方案）
```
  left:50%;
  transform:translate(50%,0)
```

2. 剩余空间自动分配

  a. 宽：
  ```css
    div{
      width:calc(100% - 100px);
      /*  100% 当前窗口宽 100px */
    }
  ```
  b. 高
  ```css
    div{
      height:calc(100% - 10vh)
      /* 100% 当前窗口高 100vh=当前窗口高  */
    }
  ```
3. ios input框禁用后出现默认样式
  3.1 解决方法：
        将disabled更换成readonly :readonly = 'flag'


---
#### 轻量级web富文本框使用需注意问题
1. z-index 尤其是和element-ui中的信息提示框（alert、confirm）等弹窗同时出现时  ```editor.customConfig.zIndex = 1```
2. 图片 上传地址不得为空 且需要后端定制 不然会出现上传失败、隐藏网络图片对话框隐藏不完全


---
#### element table 表头合并
```html
<el-table-column align='center'
                  label="入离日期">
  <template slot-scope="scope">
    <span>{{scope.row.check_in_date }} / {{scope.row.check_out_date }}</span>
  </template>
</el-table-column>
```

---
#### element table 表头部分修改样式
![element table 表头实现如图效果](https://segmentfault.com/img/bVbe3u7?w=198&h=108)

  使用:before 、:after 伪类元素
```css
    /* 由于scoped属性的存在，不能直接修改原有的element样式，建议使用一个class类名将其包裹，写在最终的渲染页面index.html中 */

.roomlist th:nth-child(5) .cell:after {
      content: "（ 剩余/全部 ）";
      display: inline-block;
      color: #ccc;
      font-size: 12px;
      margin-left: 4px;
      font-weight: 100;
    }
```
---
#### git上传本地项目
1.	pwd查看当前路径
2.	cd + 本地项目文件地址（将地址栏中的 \换成 / ）
3.	git init 初始化
4.	git add . 添加项目至暂存区
5.	git commit -m "描述" 添加至本地版本库
6.	git remote add origin url[url为你github上仓库的地址]
7.	git push origin master 推送至远程版本库
---
8.  git branch -a 查看远程分支
![采用下图方式可以省去1.2两步](src/assets/img/a.png)
---
#### 拉取仓库项目
1. 推荐使用sourcetree，傻瓜式操作。

---
#### element-ui 使用常见问题
* 先引入 再use
``` js
import {Button,Input} from 'element-ui';
Vue.use(Button);
Vue.use(Input);
``` 
* 方法要使用
Vue.prototype.$msgbox = MessageBox;

* 属性使用 :attribute = ''  方法使用 @change = 'fn'
* 在单页文件中 scoped 会限制样式只对当前.vue文件有效
---
#### 两个数组合并成一个
* 使用ES6新方法 ```[...arr1,...arr2]```
---
#### 其它注意事项
1. 常量大写
2. 学会使用less变量
3. async fn(){  try{ }catch(e){} } 获取数据的函数如果接口相同，仅参数不同，将参数写全，传入，只使用这一个函数获取数据。
4. 组件使用基础薄弱 多加练习
5. ES6多瞅瞅 尤其是async 箭头函数 解构赋值 Promise
6. 动画animation
7. vuex
8. vue-router
9. BEM 命名规范
10. init()
11. 沟通
12. learn English as soon as quickly
---
#### watch属性
> watch 能直接获取 data和props上的数据，当数据发生变化时，该函数会执行。其后是一个对象或数组。禁止在watch中使用箭头函数
```
  watch:{
    a:function(new,old){
      console.log('新的'+new,'旧的'+old);
      console.log('a was changed')
    },
    //方法
    b:numAdd;
    //深度监听
    c:{
      handler:function(new,old){},
      deep:true
    },
    //该回调将会在侦听开始之后被立即调用
    d:{
      handler: function(new,old){},
      immediate:true
    },
    e:[
      function handle1(new,old){},
      function handle2(new,old){},
    ],
    //监听data1下的a
    'data1.a':function(new,old){}
  }
```

#### export 暴露出去

#### import 引入进来
> 引进来的数据就是个常量不许改,对象除外。<br/>
> 可以使用as重命名 eg：import {a as num} from '' 给a改名叫num 不建议这样做<br/>
> from 后面是路径，绝对、相对都行，后缀如果是js,可以不写<br/>
* 通过 export var a = 1;export var b = 12;暴露出来的 通过 import {a,b} from '' 引入
* 通过 export default {name:'vHead'} 暴露出来的 通过import vHead from '' 引入

#### 解构赋值
* let [a,b,c] = [1,2,3]   结果：a = 1, b=2,c=3
* 填坑

#### ES6函数扩展
1. 函数参数默认值(函数体内部不可以再申明相同名字的参数，形参名字不可相同)
  * function fn(x,y){console.log(x,y)}; fn(2) // 2 underfined
  * function fn(x,y=9){console.log(x,y)};fn(2) //2 9

#### 箭头函数
```
  var f = v => v;
  //等同于
  var f = function(v){return v;}
  //--------
  var f = () => 5;
  //等同于
  var f = function(){return 5;}
  //--------
  var sum = (a,b) => a+b;
  //等同于
  var sum = function(a,b){return a+b;}
```
1. 箭头函数与普通函数的区别
  * this指向
  * 箭头函数不能new
  * 箭头函数没有arguments，有rest

```
  //rest
  function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10
```
