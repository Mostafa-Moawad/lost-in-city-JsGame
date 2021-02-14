//Make A Vehicle Class
class Vehicle {
		constructor(x, y, speed, row, img, speedFactor){
			this.x = x;
			this.y = y;
			this.w = 80;
			this.h = 38;
			this.speed = speed;
			this.row = row;
			this.img = img;
			this.speedFactor = speedFactor;
			this.counter = 0;
			this.randomise = Math.floor(Math.random() * 15 + 15);

		}
		drawVehicle(){
			switch(this.img){
				case 'car1':

					//ctx.drawImage(carSprite, 0, 0, 800, 350, this.x, this.y, this.w, this.h);
					ctx.drawImage(carSprite, 0, 0, 319, 81, this.x, this.y, this.w, this.h);
					//console.log(ctx.drawImage(carSprite, 161, 0, 319, 81, this.x, this.y, this.w, this.h));
					break;

				case 'car2':
					//ctx.drawImage(carSprite, 0, 360, 800, 350, this.x, this.y, this.w, this.h);
					ctx.drawImage(carSprite, 0, 0, 150, 80, this.x, this.y, this.w, this.h);
					break;

				case 'car3':
					ctx.drawImage(carSprite, 0, 745, 800, 350, this.x, this.y, this.w, this.h);
					break;

				case 'car4':
					ctx.drawImage(carSprite, 0, 1415, 800, 350, this.x, this.y, this.w, this.h);
					break;

				case 'car5':
					this.w = 130;
					ctx.drawImage(carSprite, 0, 2150, 800, 350, this.x, this.y, this.w, this.h);
					break;
				case 'log1':
					ctx.drawImage(sprites, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;
				case 'croc1':
					if(frame % this.randomise === 0){
						if(this.counter >= 4){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
						
					
					ctx.drawImage(bird, 160 * this.counter, 0, 160, 130, this.x, this.y, this.w, this.h);
					
					break;
				case 'croc2':
					if(frame % this.randomise === 0){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}

					
					ctx.drawImage(dragon,this.counter * 170 , 200 , 167 ,100, this.x, this.y, this.w,this.h);
					break;
				case 'bug':
					ctx.drawImage(sprites3, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;								
			}	
		}
		move(){	
			//Conditionals to bring back vehicles on canvas

			if(this.x > (canvas.width + 150)){
				this.x = -150;
			}
			//If vehicle is moving in Reverse
			else if(this.x < -150 && (this.row === 'row2' || this.row === 'row5' || this.row === 'row4Water' )){
				this.x = canvas.width + 150 ; 
			}
			
			if(theFroggerGame.round > 1){
				this.speed = (theFroggerGame.round * this.speedFactor);
			}

			this.x += this.speed;
			
			this.drawVehicle();

				
		}
		//Detect Collision To Frog
		detectCollision(){
			let left = this.x;
			let right = this.x + this.w;
			let top = this.y;
			let bottom = this.y + this.h;
			let frogLeft = frogger.x;
			let frogRight = frogger.x + frogger.r; 
			// frogger.r;
			let frogTop = frogger.y;
			let frogBottom = frogger.y + frogger.r; 
			// frogger.r;
			//If any one of these are true , returns true, meaning not colliding.!(True), meaning colliding.
			return !(left >= frogRight || right <= frogLeft || top >= frogBottom || bottom <= frogTop)

		}
	
};
