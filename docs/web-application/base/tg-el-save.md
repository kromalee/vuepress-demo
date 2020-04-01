# TgElSave表单
## APIs
###  PROPS

| 属性         | 说明         | 类型                                                   | 默认值       |
| ------------ | ------------ | ------------------------------------------------------ | ------------ |
| fieldConfig  | 表单配置     | Object(formMethod.createElFormResourceData 生成的数据) | {}           |
| dictData     | 字典配置     | Array                                                  | []           |
| layoutConfig | 表单布局配置 | Object                                                 | 详见补充说明 |

```javascript
//layoutConfig补充说明
//默认配置
{
numberOfColumns: 2, //表格列数 
labelWidth: '150px', //label宽度 
size: 'medium', //表单项尺寸 可选:'medium / small / mini'
labelPosition: 'right' //label的位置 'right/left/top'
}
```





### EVENT

| 事件名             | 说明                   | 回调参数           |
| ------------------ | ---------------------- | ------------------ |
| dict-init-complete | 字典数据获取完毕时触发 | 字典数据配置的引用 |

### EVENT BUS

> 在vue实例的mounted生命周期: `this.$root.eventBus.$on('中划线命名的事件名',callback)`

| 事件名                                 | 说明                            | 回调参数                          |
| -------------------------------------- | ------------------------------- | --------------------------------- |
| 组件配置里指定的changeMethod | 定义的changeMethod触发          | `{data:,eventName:,field:,node:}` |
| xxx(filedName)-field-change            | 某个fieldName的组件change时触发 | `{data:,eventName:,field:,node:}` |

### 实例属性

| 属性名         | 说明                               | 类型   |
| -------------- | ---------------------------------- | ------ |
| oldFieldConfig | 获取表单当前所有信息(一般用于提交) | Object |
### 实例方法

| 方法名      | 说明                                             |
| ----------- | ------------------------------------------------ |
| clearFields | 清空当前表单所有项目(注:与elementUI重置表单不同) |

