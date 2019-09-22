let map;
const rows=20, cols=20;

function setup(){
	my_area = createCanvas(rows*tile_size, cols*tile_size);  // define an area for the html
	my_area.mousePressed(clickListener);

	background(gray);
	map = new Array(cols);
	for (let i=0; i<cols; i++){
		map[i] = new Array(rows);
		for (let j=0; j<rows; j++)
			map[i][j] = new Tile(i, j);
	}

	roberto = new NPC("Roberto");
	my_npc = [[5,5], [5,6], [6,6], [6,5], [7,6]];
	for (let tile of my_npc){
		roberto.children.push(tile);
	}
	for (let i=0; i<map.length; i++){
		for (let j=0; j<map[i].length; j++){
			for (let npctile of my_npc){
				if ((npctile[0] == map[i][j].coords[0])
				&& (npctile[1] == map[i][j].coords[1])){
					map[i][j].daddy = roberto;
					map[i][j].newColor(red);
				}
			} 
		}
	}
	draw();

}

function draw() {
	for (let row of map) {
		for (let tile of row) {
			tile.draw();
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
		download( JSON.stringify(map.map(row => row.map(item => item.color))), "mapdata.json", "json" );
	}
	else if (key == "o"){
		load(map);
	}
}

function mouseMoved(){
	for (let row of map){
		for (let item of row){
			item.hover();
		}
	}
}