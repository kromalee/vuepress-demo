# 培训
##  系统整体框架介绍

- springboot框架：路由控制等
- requirejs：js模块化AMD规范
- easyui：主要使用datagrid、dialog组件
- vue：
- elementui：

## 系统介绍

- 系统通过菜单-权限-人员做权限控制，给不同的角色分配不同的权限，给相关人员配置角色；
- 基于元数据管理，实现表格、表单、详情、搜索的配置化管理

## 前端架构

- 基于iframe多页面
- springboot控制路由及打包jar包
- requirejs作为前端代码AMD模块化方案
- 页面基于vue
- 组件框架使用easyui（主要使用表格组件）和elementui

## 完整的开发流程
- 创建菜单及权限点
- 配置权限
- 重新登陆到此菜单
- 根据模块划分，在相关位置创建路由
- 创建js和html文件夹及文件
- 编写相关业务代码；

## 组件说明
- EasyTable
  ***主要关注如下几点***
    1. 自定义列显示格式，例如，将某个时间字段格式化为YYYY-MM
    2. 自定义列点击事件，例如，在流程步骤列点击显示流程历史信息
    3. 操作列的实现方式
    4. toolbar的实现方式
    5. easyui-dialog 原始属性扩展方式 在tableOptions中
- EasyDialog
  ***主要关注点如下***
  	1. 自定义弹出框按钮
   	2. 弹出框按钮点击出发事件的方式
   	3. 弹出框扩展样式
- TgElSave
  ***主要关注点***
    1. fieldConfig
    2. dictData
    3. layoutConfig
    4. select、tree-select、date组件可传入的参数
- TgElSearch
  - 业务配置
  - 布局配置
- TgCompDetail
  - 公共路由

## 工具
- handleMethod		 	处理业务方法集合
  - 导入
  - 导出
  - window传参
  - 详情框
- statusFlowMethod.ts	    状态工作流方法
  - 发起
  - 办理
  - 详情
  - 历史
- formMethod		       表单处理方法
  - 组件默认处理有哪些

## 具体业务详解
### page页
- 表格初始化
  
- 资源自定义格式化

- 按钮控制

- 功能编写


- 自定义列事件


### 新增/编辑
- 初始化
  - 新增、编辑时的初始化
  - 默认值处理
- 业务处理
  - 如何处理联动业务
  - 如何处理回填业务
  - 如何处理默认值业务
  - 如何表单验证
  - 如何提交表单


- 事件监听

  - 如何处理回填业务


### 导入/导出



