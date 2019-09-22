const tile_size=20, border_size=0;
const green=[90,200,90], purple=[150,50,200], gray=[100,100,100], poop=[128,0,0], red=[255,0,0], orange=[255,165,0];


class Tile {
	constructor(pos_x, pos_y){
		this.x = pos_x;
		this.y = pos_y;
		// checkers!
		if ((pos_x+pos_y)%2 == 0){
			this.color = [200,200,200];
		} else {
			this.color = [250,250,250];
		}
		this.changed = true;
	}

	newColor(color){
		this.changed = true;
		this.color = color;
		//console.log(this.x + "," + this.y + " new color " + color)
	}

	mouseClicked(){
		this.newColor(orange);
	}
	mouseDragged(){
		mouseClicked();
	}

	draw(){
		noStroke();
		if (this.changed) {
			fill(this.color);
			this.rect = rect(this.x*tile_size+border_size, this.y*tile_size+border_size, tile_size-2*border_size, tile_size-2*border_size);
			this.changed = false;
		}	
	}

}