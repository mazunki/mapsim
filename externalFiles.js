
// output
	function download(data, filename, type) {
	    var file = new Blob([data], {type: type});
	    var a = document.createElement("a");
	    var url = URL.createObjectURL(file);

	    a.href = url;
	    a.download = filename;
	    document.body.appendChild(a);
	    a.click();
	    setTimeout(function() {
	        document.body.removeChild(a);
	        window.URL.revokeObjectURL(url); 
	    }, 0); 
	}


// input
	function parseAndSaveContents(content){
		mapValues = JSON.parse(content);

		map = new Array(mapValues.length);
		for (let i=0; i<mapValues.length; i++){
			map[i] = new Array(map.length);
			for (let j=0; j<mapValues[i].length; j++){
				map[i][j] = new Tile(i, j, mapValues[i][j]);
			}
		}
	}

	function load(map) {
		var a = document.createElement('input');
		a.type = 'file';
		a.onchange = function(source) { 
		   var file = source.target.files[0]; 
		   var reader = new FileReader();
		   reader.readAsText(file,'UTF-8');

		   let parsedMap;
		   reader.onload = function(readerEvent) {
		      var content = readerEvent.target.result;
		      parseAndSaveContents(content, map);
		   }
		}
		a.click();
	}