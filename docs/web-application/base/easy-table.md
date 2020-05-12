# 业务组件:表格 EasyTable

## 常见问题

### 1.EasyTable 调整窗口后宽高自适应问题

#### 方法 1: 设置为自适应的宽高值

```javascript
new EasyTable({
  //其他代码省略
  tableOptions: {
    width: "auto",
    height: "100%",
  },
  //其他代码省略
});
```

#### 方法 2: 确实需要设置为某具体值(auto/100%不满足要求),监听 window 的 resize 事件,修改 dom 的宽高

```javascript
window.addEventListener("resize", function(evt) {
  table.dom.datagrid("resize", {
    height: document.documentElement.clientHeight - 10, //具体要设置的值
    width: document.documentElement.clientWidth - 20, //具体要设置的值
  });
});
```
