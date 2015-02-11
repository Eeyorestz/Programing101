function tetrahedron_filled(tetrahedrons, water) {
    var count = 0;
    var value = null;
 
    if (tetrahedrons.length === 0) {
        return 0;
    }
 
    while (water > 0) {
        value = tetrahedrons[count];
        water -= (Math.pow(value,3)/(6*Math.sqrt(2)))/1000;
        count++;
    }
 
    return --count;
};
 
var water = 10;
var tetrahedrons = [ 100, 20, 30 ].sort(function(a, b){return a-b});
 
var result = tetrahedron_filled(tetrahedrons, water);
console.log('Result:', result);
