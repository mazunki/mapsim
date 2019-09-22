class NPC {
	constructor(name){
		this.name = name;
		this.type = "NPC";
		this.children = [];
	}

	dialogue(){
		console.log(this.name + ": HEY CLOWN!");
	}
}