function Bubble(x, y) {
	this.x = x;
	this.y = y;
	this.size = 36;

	this.display = function() {
	 	stroke("rgba(00, 00, 255, 0.8)");
	   	fill("rgba(00, 00, 255, 0.3)");
	   	//rectMode(CENTER);
	   	//rect(this.x, this.y, this.size, this.size);
		ellipse(this.x, this.y, this.size);
	}

	this.move = function() {
		this.x += random(-1, 1);
		this.y += random(-1, 1);
		// Stay on the screen
		this.x = constrain(this.x, this.size/2, width - this.size/2);
		this.y = constrain(this.y, this.size/2, height - this.size/2);
   	}
}