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
