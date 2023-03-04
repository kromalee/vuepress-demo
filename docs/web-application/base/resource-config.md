# 平台服务:元数据配置

> 功能位置:系统设置->系统管理->元数据管理

## 1.概述

- 主要用途: 配置式,低代码的 CURD 业务开发
- 元数据涉及到后端的表字段,实体字段,类型等;
- 元数据管理着原始的未经再次代码配置的列表页,表单页,搜索页,详情页的 UI CURD 展示;
- 元数据使用的一般流程:
  1. 后端建表,确定实体之后导出基础的元数据配置(涉及字段,实体字段类型等)
  2. 前端 通过界面修改特定字段, 或者在代码修改特定字段自动渲染页面,使界面达到业务要求

## 2. 后端相关

> 导入导出等业务

## 3. 前端相关

> 列表页,表单页,搜索页,详情页的 UI CURD 展示
>
> **加粗字段** 代表元数据配置界面的字段

### 公共

- **是否启用**: 启用之后才可以进行之后的配置;

- **分组信息**: 以下是可选分组

  ![可选分组](./resource-config/1584669285867.png)

- 排序: 各个字段的顺序关系;

- 是否下拉可搜索: 下拉列表可以进行内容筛选;

- 是否搜索项,是否表格字段

- 字段相关: - **名称**: 向用户展示的字段名称 - **属性**:(关联字段): id 不便于展示,一般从这里取 name 展示 - **主键属性**:对于有 id 和 name 的数据,一般这里是 id - **表达式**: 聚合表达式,对于有 id 和 name 的数据,不会自动生成 name 时,需要后端配置聚合表达式正确生成 name

### 列表

![1584667755976](./resource-config/1584667755976.png)

### 详情

![1584667979147](./resource-config/1584667979147.png)

### 表单(新增编辑)

#### 1. 组件渲染类型

- 以下是所有可选类型
  ![可选组件类型](./resource-config/1584669364548.png)

- 基本类型(推荐使用):

  | 分类     | 组件                      | 备注                                                        |
  | -------- | ------------------------- | ----------------------------------------------------------- |
  | 文本     | 文本型,文本域,JSON 编辑器 |                                                             |
  | 数值     | 数值型                    | 1. 配置精度:**属性描述**->配置精度,配置数字代表保留几位小数 |
  | 下拉     | 下拉型,字典               | 1. 配置字典:**属性描述**->配置字典的编码; 2. 允许多值->多选 |
  | 下拉树   | 普通树型                  | 1. **允许多值**->多选                                       |
  | 日期时间 | 各种格式的日期时间选择    |                                                             |
  | 文件相关 | 图片型,文件型,大文件上传  |                                                             |
  | 弹窗选择 | 弹窗选择器,表格弹窗选择器 | 1. 配置表格选择器:**属性描述**->配置对应的编码              |

- 兼容老版类型(不推荐使用)

  - 布尔型 (此类型有逻辑问题不建议使用)
  - 其他与业务相关的选择器,都可以用基本组件类型+代码配置实现

- 有别的属性代替(不推荐使用)

  - 隐藏型: 用**字段状态**来设置,新增隐藏,编辑隐藏等
  - 只读型: 用**字段状态**来设置,新增只读,编辑只读等

#### 2. 字段的状态

- 正常
- 禁用: 完全不获取该字段相关的元数据信息,相当于没有这个字段;
- 只读:界面可见,但用户不能编辑, JS 可修改值;
- 隐藏:界面看不到,但 JS 里可操作该字段元数据;

#### 3. 提交相关

- **是否必填**:前端校验规则之一

- 时间格式导致的提交错误
  - **格式化器**: 配置与时间格式对应的格式化字符串:例如 `YYYY-MM-DD`
- 字段超长度可能导致提交错误

### 搜索

- 搜索本质上也是表单,所以配置与表单基本相同

  > 差异:搜索的表单分组,字段状态,必填配置无效

- 特殊配置

  - ![1584672293183](./resource-config/1584672293183.png)