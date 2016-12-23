### 做一个图表

#### 画布

* HTML 5 提供两种‘画布’:SVG 和 Canvas

   - SVG 可缩放适量图形，使用XML格式来定义图形
   	 - 矢量图，不会因为放大而是真
   	 - 基于XML，可以为每个元素添加JavaScript时间处理器
   	 - 每个图形均视为对象，更改对象的属性，图形也会改变
   	 - 不适用于游戏应用

   - Canvas 用于绘制2D图形
   	 - 会指的是位图，图像放大后会失真
   	 - 不支持时间处理器
   	 - 能够以.png .jpg格式保存图像
   	 - 适合于游戏应用

D3.js一般使用SVG

```
svg.selectAll('rect')   // 选择其中的所有矩形
.data(dataset)  // 绑定数组
.enter()  // 指定选择集的enter部分
.append("rect")  // 根据dataset的长度添加足够的矩形
```	