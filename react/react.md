## REACT的学习
1. react是什么
> 是一个声明式的，高效且灵活的用于构建用户界面的JavaScript库。使用React可以将一些独立简短的代码片段组成复杂的ui界面，代码片段就是组件
> 通过jsx语法，一个组件都可以通过props传参，转换成dom结构显示。
```
// 官网的代码示例
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// 用法示例: <ShoppingList name="Mark" />
```
2. react的jsx语法