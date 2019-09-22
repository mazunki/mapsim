const tile_size=20, border_size=0;
const green=[90,200,90], purple=[150,50,200], gray=[100,100,100], poop=[128,0,0], red=[255,0,0], orange=[255,165,0];


class Tile {
	constructor(pos_x, pos_y, color="checkers"){
		this.coords = [pos_x, pos_y]
		this.x = [this.x1, this.x2] = [tile_size*pos_x, tile_size*pos_x+tile_size];
		this.y = [this.y1, this.y2] = [tile_size*pos_y, tile_size*pos_y+tile_size];
		this.border_size = border_size;
		this.daddy = undefined;

		if (color == "checkers"){
			if ((pos_x+pos_y)%2 == 0){
				this.color = [200,200,200];
			} else {
				this.color = [250,250,250];
			}
		} else {
			this.color = color;
		}
		this.changed = true;
	}

	newColor(color){
		this.changed = true;
		this.color = color;
	}

	draw(){
		noStroke();
		if (this.changed) {
			fill(this.color);
			this.rect = rect(this.x1+border_size, this.y1+border_size, (this.x2-this.x1)-2*border_size, (this.y2-this.y1)-2*border_size);
			this.changed = false;
		}
	}


	mouseClicked(){
		this.newColor(orange);
	}
	hover(){
		if ((this.x1 <= mouseX) && (mouseX <= this.x2)
		&& (this.y1 <= mouseY) && (mouseY <= this.y2)){
			if (this.daddy){
				this.daddy.dialogue();
			}
		}
	}
}