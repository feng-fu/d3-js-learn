#### 一、元素的增删改查

* 选择集

- d3.select() // 选择指定元素的第一个
- d3.selectAll() // 选择指定的全部

* 绑定元素

datum() 绑定一个数据到选择集上

data() 绑定一个数组到选择集上；其各项值分别与选择即的各元素绑定

- 匿名函数
function(d,i){
	return '第一个参数代表绑定的数据' + d + '第二个参数代表索引号' + i;
}

data() 传入数组后，数组索引号与元素索引号一一对应

* 元素增删

- append() 末尾添加元素

- insert() 在指定元素前插入

- remove() 删除元素

