#### 比例尺的使用（Scale）

**当数组中数组大小不能直接用来作为px的时候**

- 线性比例尺

主要用于柱状图，它能将一个连续的区间，映射到另一个区间。

var dataset = [1.3,14,0.1,1,0.4]

要求将以上最小值映射为0，最大值映射为300

求数组的最大，最小值

var min = d3.min(dataset)
var max = d3.max(dataset)

- 序数比例尺

当定义域和值域不一定连续时，如：
var index = [0,1,2,3,4]

var color = ['red','orange','green','yellow','black']

这时，希望序列和颜色相对应

var ordinal = d3.scale.orinal()
.domain(index).range(color)