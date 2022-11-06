---
title: 响应缓存-恢复模式
order: 27
---

> 以vue3为例，但你还可以在react、svelte中使用alova，详细请阅读 [入门指南](/zh/overview/);

:::info 示例说明
缓存恢复模式是将响应数据持久化，当请求命中缓存时将持久化缓存数据返回，不再发出请求。它一般用于一些需要服务端管理，但在一定时间内不变的数据，以下是节假日信息的恢复模式示例。

*操作引导：*
1. 点击`Reload page`刷新页面，你不再看到Loading状态，而会使用缓存数据并立即渲染到页面中，也不再发送请求；
2. 点击`Invalidate the data of placeholder`让缓存数据失效，此时你将重新看到Loading状态；
:::

@include(../../example-code/storage-restore.md)

在 [StackBlitz](https://stackblitz.com/edit/alova-example-storage-restore?file=src/App.vue) 中运行此项目