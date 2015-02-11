var tetrahedrons = [ 100, 20, 30 ];
tetrahedrons.sort(function(a, b){return a-b});
var water = 10;


function tetrahedron_filled(tetrahedrons,water) {
	
	return (Math.pow(value,3)/(6*Math.sqrt(2)))/1000;
};
var value = tetrahedrons[0];
var count = 0;

if (tetrahedrons.length === 0) { console.log(0)} 

else {
while (water >0 ) {
	value = tetrahedrons[count];
	water = water - tetrahedron_filled(value);
	count++;	
} ;
  
console.log(count - 1);
};