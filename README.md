#### 使用前，请确保你已经学习并熟练使用过 [uni-app](https://uniapp.dcloud.io/)

# [mtui-uni 文档](https://static-ab398308-a8d9-41bf-9e5e-0129499ef255.bspapp.com/#/)

### 方式一 ：通过 npm 安装

使通过 npm 安装，需要先通过 vue-cli 创建 uni-app 项目，[详见](https://uniapp.dcloud.io/quickstart-cli)

```bash
npm install mtui-uni --save
```

```javascript
//在 main.js 中引入组件库
import Vue from 'vue'

import mtui from "mtui-uni";

Vue.use(mtui);
```

```scss
//在 App.vue 中引入字体图标
@import "mtui-uni/src/static/font/iconfont.css";
```

```scss
//在 uni.scss 中引入组件样式
@import "mtui-uni/src/components/mt-theme/index.scss";
```
