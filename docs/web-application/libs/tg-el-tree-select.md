# TgElTreeSelect 树形选择器

## APIs

### PROPS

| 属性                    | 说明                                     | 类型                    | 默认值 |
| ----------------------- | :--------------------------------------- | ----------------------- | ------ |
| value                   | 当前选择值                               | [Array, String, Number] | ''     |
| dataList                | 待选数据源                               | [Array, Object]         |        |
| selectField             | 选择提交的字段                           | [String]                | 'id'   |
| labelField              | 显示的字段                               | [String]                | 'name' |
| defaultExpandLevel      | 默认展开层级                             | [String, Number]        |        |
| multiple                | 是否多选                                 | [Boolean]               | false  |
| flat                    | 平铺模式(上下级无关联)                   | [Boolean]               | true   |
| autoDeselectAncestors   | 自动取消选择其祖先,仅适用于 flat 为 true | [Boolean]               | false  |
| autoSelectAncestors     | 自动选择其祖先,仅适用于 flat 为 true     | [Boolean]               | false  |
| autoDeselectDescendants | 自动选择其后代,仅适用于 flat 为 true     | [Boolean]               | false  |
| autoSelectDescendants   | 自动取消选择其后代,仅适用于 flat 为 true | [Boolean]               | false  |
| disabled                | 是否禁用                                 | [Boolean]               | false  |

### EVENT

| 事件名                   | 说明         | 回调参数                                     |
| ------------------------ | ------------ | -------------------------------------------- |
| input                    | 用于 v-model | value                                        |
| tg-el-tree-select-change | 改变时触发   | {value:当前选中值,node:已选中的节点完整信息} |

### SLOT

| 名称 | 说明 |
| ---- | ---- |
|      |      |

### EVENTBUS(内部接口,开发组件库使用)

| 事件名               | 说明                                                 | 回调参数     |
| -------------------- | ---------------------------------------------------- | ------------ |
| on-tg-component-init | 组件初始化时回调,可以用来添加级联监听                | 当前组件实例 |
| on-tg-comp-change    | 组件 vlue 改变时回调,可以用来触发级联事件,表单校验等 | 当前组件实例 |

### 实例属性(内部接口,开发组件库使用)

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
|        |      |      |        |

### 实例方法(内部接口,开发组件库使用)

| 方法名 | 说明 |
| ------ | ---- |
|        |      |
