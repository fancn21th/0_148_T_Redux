# Redux 培训

## 核心概念

- 单一不可变状态树
- 唯一改变状态树的方式是 分发一个 action
- 纯函数
  - 同样参数 同样输出
  - 不修改参数
- UI
  - 描述成 纯函数
  - 参数 是 app state
- Reducer
  - last state
  - next state

## 摘录

- [UI as pure function](https://egghead.io/lessons/react-redux-the-reducer-function)
  - You might have heard that the UI or the view layer is most predictable when it is described as a pure function of the application state. This approach was pioneered by React but is now being picked up by other frameworks, such as Ember and Angular.
  - [翻译: 你可能听说过如果把 UI 或者视图层描述成纯函数 它的输出会变得可预测. 这最早是 React 提出来的方法论, 现在普遍被其他框架采纳, 例如 Ember 和 Angular]

## 分支摘要

- 01

  - counter 案例
    - createStore
    - state.getState
    - state.dispatch
    - state.subscribe

- 02

  - 简单实现 createStore

- 03

  - 将 Counter 按照 高级 vue 设计模式 的风格 实现
    - 有状态组件
    - 无状态组件

- 04

  - 通过 Jest 的测试/断言 以及 deep-Freeze 锁定对象 功能 来体验 数组与对象 不可变与可变 的区别
  - 简单介绍了 不可变特性在 UI 框架中用来 判断 部分刷新 的关系
