#  TgElEjectIframe弹出选择器
## APIs
### 配置参数


| 其他参数    | 说明 | 类型 | 默认值 |
| :---------- | ---- | ---- | ------ |
| selectField |      |      |        |
| labelField  |      |      |        |


###  PROPS
> 可以复用的配置写在formMethod的switch中,不可以的每次根据环境手动设置

- (必填)remoteRouter 内嵌页面路由:
  - 控制器: common/ComponentController
    - 接收参数 CompIframeParamRequest entity 
  - 模板 static/template/component
  - 模板js  static/components/iframe
    - 要求reslove返回数据必须是对象
- (必填)remoteParams 内嵌页面路由参数:
   - otherParams 与表单无关的参数
   - cascadeParams 级联参数(不用自己配置)
- (必填)remoteTitle 选择器标题

| 其他参数    | 说明       | 类型     | 默认值 |
| :---------- | ---------- | -------- | ------ |
| selectField | 选择的字段 | String   | 'id'   |
| labelField  | 回显的字段 | [String] | 'name' |



####EVENT

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      |          |



### SLOT

| 名称 | 说明 |
| ---- | ---- |
|      |      |


### 实例属性

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
|        |      |      |        |



### 实例方法

| 方法名 | 说明 |
| ------ | ---- |
|        |      |
