let map;
const rows=20, cols=20;

// Function to download data to a file
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

function parseAndSaveContents(content){
	mapValues = JSON.parse(content);

	map = new Array(mapValues.length);
	for (let i=0; i<mapValues.length; i++){
		map[i] = new Array(map.length);
		for (let j=0; j<mapValues[i].length; j++){
			map[i][j] = new Tile(i, j);
			map[i][j].newColor(mapValues[i][j]);
		}
	}
	//draw();
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


function setup(){
	my_area = createCanvas(rows*tile_size, cols*tile_size);  // define an area for the html
	my_area.mousePressed(clickListener);

	background(gray); // default background
	// generate tiles for all positions
	map = new Array(cols);
	for (let i=0; i<cols; i++){
		map[i] = new Array(rows);
		for (let j=0; j<rows; j++)
			map[i][j] = new Tile(i, j);
	}
}

function draw() {
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j].changed) {
				map[i][j].draw();
			}
		}
	}
}

function clickListener(){
	let estimateX, estimateY;
	index_x = floor(mouseX/tile_size);
	index_y = floor(mouseY/tile_size);

	map[index_x][index_y].newColor(orange);
}


function keyPressed(){
	if (key == "s"){
		download( JSON.stringify(map.map(row => row.map(item => item.color))), "mapdata.json", "json");
	}
	else if (key == "o"){
		load(map);
	}
}