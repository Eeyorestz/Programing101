function fill_tetrahedron(num) {
	return (Math.pow(num,3)/(6*Math.sqrt(2)))/1000
}

alert(Math.round((fill_tetrahedron(100))*100)/100);