# API Reference v2(推荐):

> 工具类调用流程框架,直接调用对应类的构造函数即可 static/js/util/statusFlowMethod.ts

## 类型说明(为了方便维护,详见代码注释@ static/js/util/statusFlowMethod.ts)

## 发起 StatusFlowStartUI

```javascript
new statusFlowMethod.StatusFlowStartUI({
                            processKey: '6c_defect',
                            businessTasks: [row],
                            extraDialogConfig: {
                                closeThen: function () {
                                    table.reload()
                                }
                            }
                        })
```

## 办理 StatusFlowHandleUI

```javascript
new statusFlowMethod.StatusFlowHandleUI({
                                processKey: '6c_defect',
                                businessTasks: [row],
                                extraDialogConfig: {
                                    title: '缺陷审核',
                                    closeThen: function () {
                                        table.reload()
                                    }
                                }
                            })
```

## 历史(表格内状态点击展示页面) StatusFlowTrackUI

```javascript
new statusFlowMethod.StatusFlowTrackUI({
                            processKey: '6c_defect',
                            businessTasks:[row],
                            extraDialogConfig: {
                                title: '流程历史'
                            }
                        })
```

## 详情(包含流程信息的详情) StatusFlowDetailUI

```javascript
new statusFlowMethod.StatusFlowDetailUI({
                                processKey: '6c_plan_section',
                                businessTasks: [row],
                                extraDialogConfig: {
                                    title: '计划详情'
                                }
                            })
```

## 自定义内嵌页面通信(自定义业务表单,自定义流程追踪页面,自定义流程数据页面)

```javascript
 //通过window获取框架参数
window.parent.window.shareInfoWithChildren();
 //参数形式,可能发生扩展,以static/js/module/workflow/statusHandle/index.js为准
window.shareInfoWithChildren = function () {
    return {
        //只读数据
        rows: _.cloneDeep(vm.rows),// 流程数据列表
        layout: _.cloneDeep(vm.layout),//当前页面布局参数透传
        nodeList: _.cloneDeep(vm.nodeList),//节点列表
        currentNodeConfig: _.cloneDeep(vm.currentNodeConfig),//当前节点配置
        progressList: _.clone(vm.progressList),
        //当前选择的路径
        userFormData: _.cloneDeep(vm.userFormData),
        //服务方法
        getHisTaskList: vm.getHisTaskList.bind(vm), //获取流程历史
        //关闭流程窗口
        closeStatusFlowDialog: params.closeStatusFlowDialog
    };
};
```
