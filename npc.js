class NPC {
	constructor(name){
		this.name = name;
		this.type = "NPC";
		this.children = [];
	}

	dialogue(){
		console.log(this.name + ": HEY CLOWN!");
	}

	markChildren(child){
		child.newTempColor(yellow);
	}
	hover(){
		this.dialogue();
		this.children.forEach(this.markChildren);
	}
	unmarkChildren(child){
		child.oldTempColor();
	}
	unhover(){
		this.dialogue();
		this.children.forEach(this.unmarkChildren);
	}

}