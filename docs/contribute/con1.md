# demo组件使用示例

::: demo-code vue
<template>
    <button @click="onClick">Click me!</button>
</template>    

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>
:::