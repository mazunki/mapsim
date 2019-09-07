let map;
let tile_size=20, border_size=1;
let rows=20, cols=20;
let green=[90,200,90], purple=[150,50,200];

function setup(){
	createCanvas(rows*tile_size, cols*tile_size);
	background(green);
	map = new Array(cols);
	for (let i=0; i<cols; i++){
		map[i] = new Array(rows);
	}
}

function draw() {
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[i].length; j++) {
			//check data

			// draw tile
			noStroke();
			fill(purple);
			rect(i*tile_size+border_size, j*tile_size+border_size, tile_size-2*border_size, tile_size-2*border_size);
		}
	}
}