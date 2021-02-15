//General Game Object
const thePlayerGame = {

	round: 1,

	//Function to Attach player on log
	attachLog(logSpeed){
		player.x += logSpeed;
		
	},
	gameOver(){
		control = false;
		ctx.font = '100px Arial';
		ctx.fillStyle = 'rgb(255,0,0)'
		ctx.fillText('Game Over',(canvas.width/2)-250, canvas.height/2);
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
		player.life  =  5;
		player.score = 0;	
		this.round = 1;
		scene.drawScene();
		player.drawFrog();
		scene.street.vehicleFactory()
		scene.water.logFactory()
		scene.water.crocFactory()
		//this.generateBug()

		lives.innerText = 'Lives: ' + player.life ;
		score.innerText = 'Score: ' + player.score;
		round.innerText = 'Round: ' + thePlayerGame.round;
	},
	changeRound(){
		this.round += 1;

	}
};

//Add an evnt listener to DOC
document.addEventListener('keydown',(e)=>{
	const key = e.key;

	if(player.alive) {
		switch(key){
			
			case 'ArrowRight':
				player.sx = 65;
				player.sy = 150;
				player.x +=  player.speed;
				setTimeout(()=>{
					player.sx = 130;
				}, 100);
				setTimeout(()=>{
					player.sx = 200;
				}, 200);
				setTimeout(()=>{
					player.sx = 0;
				}, 300);
				break;

			case 'ArrowLeft':
				player.sx = 65;
				player.sy = 75;
				player.x -= player.speed;
				setTimeout(()=>{
					player.sx = 130;
				}, 100);
				setTimeout(()=>{
					player.sx = 200;
				}, 200);
				setTimeout(()=>{
					player.sx = 0;
				}, 300);
				break;
			
			case 'ArrowUp':
				player.sx = 65;	
				player.sy = 225;	
				player.y -= player.speed;
				if(player.y < 80){
					player.increaseScore();
				};
				setTimeout(()=>{
					player.sx = 130;
				}, 100);
				setTimeout(()=>{
					player.sx = 200;
				}, 200);
				setTimeout(()=>{
					player.sx = 0;
				}, 300);
				break;
			
			case 'ArrowDown':
				player.sx = 65;	
				player.sy = 0;	
				player.y += player.speed;
				setTimeout(()=>{
					player.sx = 130;
				}, 100);
				setTimeout(()=>{
					player.sx = 200;
				}, 200);
				setTimeout(()=>{
					player.sx = 0;
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
		this.sx = 20;
		this.sy = 30;
		this.sw = 770;
		this.sh = 260;
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


const animate = ()=>{
	//Draw Scene
	scene.drawScene();
	//Let's assume player is not on log
	let frogOnLog = false;

	// Draw Each Log 
	for(let i = 0, r = scene.water.rows.length; i < r ; i ++){
	
		for(let j = 0, v = scene.water.rows[i].logs.length ; j < v ; j ++){
			//Move Each Log
			scene.water.rows[i].logs[j].move();
			
			//Detect Collision For Each Log
			if(scene.water.rows[i].logs[j].detectCollision() === true && player.alive === true){
				//player is on log, set to true.
				frogOnLog = true;
				//Attach the player to the log
				thePlayerGame.attachLog(scene.water.rows[i].logs[j].speed);
			};
		};

		for(let j = 0, v = scene.water.rows[i].crocs.length ; j < v ; j ++){
			//Move each croc
			scene.water.rows[i].crocs[j].move();

			if(scene.water.rows[i].crocs[j].detectCollision() === true && player.alive === true){
				//player is on log, set to true.
				frogOnLog = true;
				//Attach the player to the log
				thePlayerGame.attachLog(scene.water.rows[i].crocs[j].speed);
			};
			
		};	

	};

	// If player is in water area, we only need to check if on log to determine safety. Anything other than logs resets game.
	if (player.y > 100 && player.y < 300){
		if(frogOnLog === false && player.alive === true){
			player.die();
		}
	}
	
	//Draw Each Car
	for(let i = 0, r = scene.street.rows.length; i < r ; i ++){
		for(let j = 0, v = scene.street.rows[i].vehicles.length ; j < v ; j ++){
			//Move Each Car
			scene.street.rows[i].vehicles[j].move();
			//Detect Collision For each Car
			if(scene.street.rows[i].vehicles[j].detectCollision() === true && player.alive === true){
				player.die();
			};
		};
	};

	player.drawFrog();

	lives.innerText = 'Lives: ' + player.life ;
	score.innerText = 'Score: ' + player.score;
	round.innerText = 'Round: ' + thePlayerGame.round;

	if(control === true){

		window.requestAnimationFrame(animate);
	}

	frame++;
		
};



thePlayerGame.initialize();
animate();




