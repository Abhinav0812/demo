console.log(" hi this is sencond largest element in array")
let a=[23,4,56,3,9,43,7];
function second(a){
	let secondMax=Number.MIN_VALUE;
	let max=Number.MIN_VALUE;
	let len=a.length;
	for(let i=0; i<len; i++){
		if(max<a[i]){
			secondMax=max;
			max=a[i];
		}
		else if(secondMax<a[i] && max!=a[i]){
			secondMax=a[i];
		}
	}
	return secondMax;
}
let num=second(a);
console.log(num);

