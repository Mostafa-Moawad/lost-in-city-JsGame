
//General Game Object
const theFroggerGame = {

	round: 1,

	//Where the bugs will be stored
	bugArray:[],

	//Get random position for life bug
	randomPosition(coor){

		return coor === 'x' ?  Math.floor(Math.random() * 700) + 100 : (Math.floor(Math.random() * 10) + 3) * 45;

	},
	//Generate life bug
	generateBug(){
		const newBug = new Bug (this.randomPosition('x'), this.randomPosition('y'), 0, undefined, 'bug');
		this.bugArray.push(newBug);
	},
	//Remove Bug
	removeBug(){

		this.bugArray = [];
	},

	//Function to Attach frog on log
	attachLog(logSpeed){
		frogger.x += logSpeed;
	},
	gameOver(){
		control = false;
		ctx.font = '100px Arial';
		ctx.fillStyle = 'rgb(255,0,0)'
		ctx.fillText('Game Over',(canvas.width/2)-250, canvas.height/2)
	},
	initialize() {
		// remove old things from array	
		// loop set street vehicles length to 0
		// loop set water vehicles (logs) lenght to 0
		// loop set crocs length to 0
		for(let i = 0, r = scene.street.rows.length; i < r ; i ++){
			scene.street.rows[i].vehicles.length = 0;
		};
		for(let i = 0, r = scene.water.rows.length; i < r ; i ++){
			scene.water.rows[i].logs.length = 0;
			scene.water.rows[i].crocs.length = 0;
		};	
		// set everything back to the way it is at the beginning
		// set round number back to zero, 
		// set lives back to 5	
		frogger.life  =  5;
		frogger.score = 0;	
		this.round = 1;
		scene.drawScene();
		frogger.drawFrog();
		scene.street.vehicleFactory()
		scene.water.logFactory()
		scene.water.crocFactory()
		//this.generateBug()

		lives.innerText = 'Lives: ' + frogger.life ;
		score.innerText = 'Score: ' + frogger.score;
		round.innerText = 'Round: ' + theFroggerGame.round;
	},
	changeRound(){
		this.round += 1;
	}
};

//Add an evnt listener to DOC
document.addEventListener('keydown',(e)=>{
	const key = e.key;

	if(frogger.alive) {
		switch(key){
			
			case 'ArrowRight':
				frogger.sx = 65;
				frogger.sy = 150;
				frogger.x +=  frogger.speed;
				setTimeout(()=>{
					frogger.sx = 130;
				}, 100);
				setTimeout(()=>{
					frogger.sx = 200;
				}, 200);
				setTimeout(()=>{
					frogger.sx = 0;
				}, 300);
				break;

			case 'ArrowLeft':
				frogger.sx = 65;
				frogger.sy = 75;
				frogger.x -= frogger.speed;
				setTimeout(()=>{
					frogger.sx = 130;
				}, 100);
				setTimeout(()=>{
					frogger.sx = 200;
				}, 200);
				setTimeout(()=>{
					frogger.sx = 0;
				}, 300);
				break;
			
			case 'ArrowUp':
				frogger.sx = 65;	
				frogger.sy = 225;	
				frogger.y -= frogger.speed;
				if(frogger.y < 80){
					frogger.increaseScore();
				};
				setTimeout(()=>{
					frogger.sx = 130;
				}, 100);
				setTimeout(()=>{
					frogger.sx = 200;
				}, 200);
				setTimeout(()=>{
					frogger.sx = 0;
				}, 300);
				break;
			
			case 'ArrowDown':
				frogger.sx = 65;	
				frogger.sy = 0;	
				frogger.y += frogger.speed;
				setTimeout(()=>{
					frogger.sx = 130;
				}, 100);
				setTimeout(()=>{
					frogger.sx = 200;
				}, 200);
				setTimeout(()=>{
					frogger.sx = 0;
				}, 300);
				break;	
		};
	};

})


//Make A log Class
class Log extends Vehicle{
	constructor(x, y, speed, row, img,  speedFactor){
		super(x, y, speed, row, img,  speedFactor);
		this.w = 180;
		this.sx = 8;
		this.sy = 160;
		this.sw = 180;
		this.sh = 80;
	}
}

//Make A Crocodile Class 
class Croc extends Vehicle{
	constructor(x, y, speed, row, img,  speedFactor){
		super(x, y, speed, row, img,  speedFactor);
		this.sx = 127;
		this.w = 127;
	}
}

//Make Life bug Class
class Bug extends Vehicle{
	constructor(x, y, speed, row, img){
		super(x, y, speed, row, img);

		this.w = 45;
		this.h = 25;
		this.sx = 0;
		this.sy = 0;
		this.sw = 600;
		this.sh = 400;
	}
}


const animate = ()=>{
	//Draw Scene
	scene.drawScene();
	//Let's assume frog is not on log
	let frogOnLog = false;

	//frogger.drawFrog();

	// Draw Each Log 
	for(let i = 0, r = scene.water.rows.length; i < r ; i ++){
	
		for(let j = 0, v = scene.water.rows[i].logs.length ; j < v ; j ++){
			//Move Each Log
			scene.water.rows[i].logs[j].move();
			
			//Detect Collision For Each Log
			if(scene.water.rows[i].logs[j].detectCollision() === true && frogger.alive === true){
				//Frog is on log, set to true.
				frogOnLog = true;
				//Attach the frog to the log
				theFroggerGame.attachLog(scene.water.rows[i].logs[j].speed);
			};
		};

		for(let j = 0, v = scene.water.rows[i].crocs.length ; j < v ; j ++){
			//Move each croc
			scene.water.rows[i].crocs[j].move();

			if(scene.water.rows[i].crocs[j].detectCollision() === true && frogger.alive === true){
				//Frog is on log, set to true.
				frogOnLog = true;
				//Attach the frog to the log
				theFroggerGame.attachLog(scene.water.rows[i].crocs[j].speed);
			};
			
		};	

	};


	// If frog is in water area, we only need to check if on log to determine safety. Anything other than logs resets game.
	if (frogger.y > 100 && frogger.y < 300){
		if(frogOnLog === false && frogger.alive === true){
			frogger.die();
		}
	}

	//Draw Each Car
	for(let i = 0, r = scene.street.rows.length; i < r ; i ++){
		for(let j = 0, v = scene.street.rows[i].vehicles.length ; j < v ; j ++){
			//Move Each Car
			scene.street.rows[i].vehicles[j].move();
			//Detect Collision For each Car
			if(scene.street.rows[i].vehicles[j].detectCollision() === true && frogger.alive === true){
				frogger.die();
			

			};
		};
	};

	frogger.drawFrog();

 
	//Draw Bug
	if(theFroggerGame.bugArray[0]){
		theFroggerGame.bugArray[0].drawVehicle();
		if(theFroggerGame.bugArray[0].detectCollision()){
			theFroggerGame.removeBug();
			frogger.score += 200;
		}
	}
	
	lives.innerText = 'Lives: ' + frogger.life ;
	score.innerText = 'Score: ' + frogger.score;
	round.innerText = 'Round: ' + theFroggerGame.round;
	
	if(control === true){

		window.requestAnimationFrame(animate);
	}

	frame++;
		
};



theFroggerGame.initialize();
animate();







