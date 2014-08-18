//测试两点之间的距离函数
//返回distance
function distance(m1, n1, m2, n2) {
	var m1,
	m2,
	n1,
	n2;
	var distance = 0;
	this.m1 = m1;
	this.m2 = m2;
	this.n1 = n1;
	this.n2 = n2;

	distance = Math.sqrt(((this.m1 - this.m2) * (this.m1 - this.m2)) + ((this.n1 - this.n2) * (this.n1 - this.n2)));
	return distance;
	console.warn(distance);
}