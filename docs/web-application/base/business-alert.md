# 业务提醒

## Ⅰ.使用教程 guide

### 1. 配置菜单

- 在`工作台-业务提醒` 下增加菜单
- 菜单配置项
  - 前端路由: 组件javascript的地址(/js/module/)
  - 是否显示: 是
  - 是否使用: 是
  - 名称: 一个标识即可

### 2. 开发功能

- 写一个标准AMD模块的vue组件,语法限制ES5,

- 文件位置与菜单的前端路由一致(强烈建议写在关联的业务模块里)

- 文件内容即为首页提醒区域显示的内容

- 跳转至系统模块

  - 使用`location.href="目标路径"`或者a标签的href属性
  - 加参数`shutCart="目标模块权限码"` 将自动展开该菜单
  - 不要使用 `target="_blank"`打开新的标签页

- 隐藏无效的通知
  - 通知的业务组件务必有name, 
  - 在通知业务组件内部,触发事件'empty',且携带当前组件名 
  ```javascript
    //示例:如果请求结果为 0条 需要处理,则隐藏这条通知
    ajax.get(/*somthing*/)
        .then(function(res){
        if(res.count===0) {this.$emit('empty',/*当前组件名*/)}
        }.bind(this))
    
  ```

- 可以直接使用Element组件,无需依赖vue,Element

  ```javascript
  // 示例及模板
  define([], function () {
      return {
          template: '<div><a href="/portal/JCW?shutCart=JCW_QUESTIONNC_START"">点击跳转</a><div>',
          data: function () {
              return {};
          }
          ,
          computed: {}
          ,
          created: function () {
          },
          methods: {}
      };
  });
  ```

  

### 3. 测试

- 配置权限
- 重新登陆即可看到效果
- 不重新登陆调试
  - 注释代码 注释代码 `entry/index.js`里的   `window.localStorage.setItem('HAD_SHOW_WORKBENCH', '1'),`记得最后要恢复

