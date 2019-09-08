let map;
const tile_size=20, border_size=1;
const rows=20, cols=20;
const green=[90,200,90], purple=[150,50,200], gray=[100,100,100], poop=[128,0,0], red=[255,0,0];

function setup(){
	createCanvas(rows*tile_size, cols*tile_size);
	background(gray);
	map = new Array(cols);
	for (let i=0; i<cols; i++){
		map[i] = new Array(rows).fill(green);
	}
	//eyes
	for (var i = 5; i < 10; i++) {
		map[6][i] = poop;
		map[13][i] = poop;
	}
	//mouth
	for (var i = 5; i < 15; i++) {
		map[i][13] = red;
	}
	//cute smile
	map[4][12] = red;
	map[15][12] = red;

}

function draw() {
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			//check data
			color_to_add = map[i][j];

			// draw tile
			noStroke();
			fill(color_to_add);
			rect(i*tile_size+border_size, j*tile_size+border_size, tile_size-2*border_size, tile_size-2*border_size);
		}
	}
}