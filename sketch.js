let map;
const tile_size=20, border_size=1;
const rows=20, cols=20;
const green=[90,200,90], purple=[150,50,200], gray=[100,100,100];

function setup(){
	createCanvas(rows*tile_size, cols*tile_size);
	background(gray);
	map = new Array(cols);
	for (let i=0; i<cols; i++){
		map[i] = new Array(rows).fill("standard");
	}
	map[6][3] = "poop";
	map[6][4] = "poop";
	map[6][5] = "poop";
	map[6][6] = "poop";
	map[6][7] = "poop";
	map[13][3] = "poop";
	map[13][4] = "poop";
	map[13][5] = "poop";
	map[13][6] = "poop";
	map[13][7] = "poop";

	for (var i = 5; i < 15; i++) {
		map[i][13] = "poop";
	}
	map[4][12] = "poop";
	map[15][12] = "poop";

}

function draw() {
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			//check data
			if (map[i][j] == "standard") {
				color_to_add = green;
			} else {
				color_to_add = purple;
			};

			// draw tile
			noStroke();
			fill(color_to_add);
			rect(i*tile_size+border_size, j*tile_size+border_size, tile_size-2*border_size, tile_size-2*border_size);
		}
	}
}