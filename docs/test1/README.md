
# API Reference:  test!!!


## 1.  发起框架:
- 使用场景:
	- 业务发起	
- 框架路由: `/workflow/statusStart`
- 传参规则:
```javascript
//方法:
method.sendParamsByWindow(params, window)

//参数:
{
	processDefKey:String,//流程定义的key
	//发起支持扩展配置
	rows:[
			{
				processName:String,//流程的名字(自定义)
				businessKey:String //业务里的id(row.id)
			}
		]
}
```


## 2. 办理框架
- 使用场景:
	- 业务单个/批量办理(业务数据直接加在rows里面可透传给办理和详情页面),
	- 流程历史(布局参数删掉办理标签即可)
	- 待办办理
- 框架路由: `/workflow/statusHandle`
- 传参规则:
```javascript
//方法:
method.sendParamsByWindow(params, window)
//参数:
{
	processDefKey:String,//流程定义key
	layout?:Object, //布局配置,可选,详见layout配置
	rows:[
			{
				prcocessInstanceId:String,//流程实例Id(row.processInstanceId)
				taskId:String, //任务Id(row.taskId)
				processName:String,//流程的名字(row.processName)
				businessKey:String //业务里的id(row.id)
			}
		]
}
```

```javascript
layout配置
{
   	tabContent: ['AUDIT', 'HISTORY', 'DETAIL'], 控制三个tab页的显示隐藏
   	tabName:['','','']
   
}


```
### 2.1 框架自带的默认审核页面


###  2.2 自定义办理中的审核页面

- 从办理框架接收参数
```javascript
//收参数方法:
window.parent.window.shareInfoWithChildren()
//参数:
{	
	rows:Array,                     //流程数据列表
	moveForwardProcesses:Function,  //boundFunction,推进流程,一般在业务办理页面内业务数据保存之后去推进流程
}
```
-  办理提交操作
```javascript
window.save=function(){
	//执行流程提交操作
}
```
### 2.3 自定义办理中的详情页面	

- 从办理框架接收参数
```javascript
//与办理相同
```

<Vssue title="Vssue Demo" />