//Global Variables


let level = localStorage.getItem('level');
let selectedChar = localStorage.getItem('selectedChar');

console.log("level : "+level+"  selectedChar : "+selectedChar)




//H3 Tag to input score and Lives
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let round = document.getElementById('round');

//Controls Animation function
let control = true;

//Get Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//Image Object for Sprites
const sprites = new Image();
sprites.src = 'images/spritemap.png';
const sprites2 = new Image();
sprites2.src = 'images/croc.png';
const sprites3 = new Image();
sprites3.src = 'images/bug.png';

const waterImg= new Image();
waterImg.src = "images/images/background.png"


const sand= new Image();
sand.src = "images/sand.png"


const roadImg= new Image();
roadImg.src = "images/road.jpg"


const grass= new Image();
grass.src = "images/grass.png"



const middle= new Image();
middle.src = "images/road3.jpg"



const carSprite= new Image();
carSprite.src = "images/cars.png"





const bird= new Image();
bird.src = "images/bird.png"



const bird_flip= new Image();
bird_flip.src = "images/flip_bird.png"




const character_1= new Image();
character_1.src = "images/1.png"


const character_2= new Image();
character_2.src = "images/2.png"



const character_3= new Image();
character_3.src = "images/3.png"




const character_4= new Image();
character_4.src = "images/4.png"



const character_5= new Image();
character_5.src = "images/5.png"









const collision= new Image();
collision.src = "images/collisions.png"


const dragon= new Image();
dragon.src = "images/parrot2.png"


const dragon_flip= new Image();
dragon_flip.src = "images/parrot3.png"



const cats= new Image();
cats.src = "images/cats.png"



const cobra_red= new Image();
cobra_red.src = "images/cobra-red.png"



const cobra_blue= new Image();
cobra_blue.src = "images/cobra-blue.png"

const log= new Image();
log.src = "images/log.png"




const steel= new Image();
steel.src = "images/steel.png"


const stone= new Image();
stone.src = "images/stone.png"


const dolphin= new Image();
dolphin.src = "images/dolphin.png"


const lava= new Image();
lava.src = "images/lava.png"


const flame= new Image();
flame.src = "images/flame.jpg"


let frame = 0;




const drawObj = [
	{
		source: carSprite ,
		sx:0,
		sy:0,
		sw:800,
		sh:350
	},
		{
		source: carSprite ,
		sx:0,
		sy:360,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:745,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:1415,
		sw:800,
		sh:350
				
	},
	{
		source: carSprite ,
		sx:0,
		sy:2150,
		sw:800,
		sh:350
				
	},
	{
		source: cats ,
		sx:285,
		sy:130,
		sw:100,
		sh:70
	},
		{
		source: cats ,
		sx:580,
		sy:220,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:580,
		sy:600,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:570,
		sy:510,
		sw:100,
		sh:70
				
	},
	{
		source: cats ,
		sx:860,
		sy:510,
		sw:100,
		sh:70
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
	},
		{
		source: cobra_red ,
		sx:0,
		sy:64,
		sw:60,
		sh:60
				
	},
	{
		source: cobra_red ,
		sx:0,
		sy:64,
		sw:60,
		sh:60
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
				
	},
	{
		source: cobra_blue ,
		sx:0,
		sy:187,
		sw:60,
		sh:63
				
	}
]


const drawobject2 = [
	{
		source: dolphin ,
		sx:570,
		sy:600,
		sw:100,
		sh:50
	},
		{
		source: dolphin ,
		sx:290,
		sy:519,
		sw:100,
		sh:50
				
	},
	{

		source: dragon_flip ,
		sx:0,
		sy:370,
		sw:167,
		sh:100
		
				
	},
	{
		source: dragon ,
		sx:0,
		sy:370,
		sw:167,
		sh:100
				
	},
	{
		
		source: bird ,
		sx:0,
		sy:0,
		sw:160,
		sh:130
				
	},
	{
		source: bird_flip ,
		sx:0,
		sy:0,
		sw:160,
		sh:130
	}
]



const drawLog = [
	{
		source: log ,
		sx:20,
		sy:30,
		sw:770,
		sh:260
	},
		{
		source: steel ,
		sx:0,
		sy:130,
		sw:635,
		sh:130
				
	},
	{

		source: stone ,
		sx:0,
		sy:0,
		sw:900,
		sh:400
		
				
	}
]



const drawCharacter = [
	{
		source: character_1 ,	
	},
		{
		source: character_2 ,			
	},
	{

		source: character_3 ,			
	}
	,
	{

		source: character_4 ,			
	}
	,
	{

		source: character_5 ,			
	}
]



const drawfirstLane = [
	{ 
		source: roadImg ,
		sx:0 ,
		sy:0 ,
		sw:852 ,
		sh: 480	
	},
		{
		source: grass ,
		sx:0 ,
		sy:340 ,
		sw:900 ,
		sh:160 			
	}
	,
	{

		source: sand ,
		sx:0 ,
		sy:200 ,
		sw:840 ,
		sh:260 			
	}
	
]



const drawSecondLane = [
	{ 
		source: waterImg ,
		sx:0 ,
		sy:0 ,
		sw:600 ,
		sh: 250	
	},
		{
		source: lava ,
		sx:20 ,
		sy:50 ,
		sw:900 ,
		sh:300 			
	}
	,
	{

		source: flame ,
		sx:0 ,
		sy:210 ,
		sw:620 ,
		sh:390 			
	}
	
]




let i;

let displacement ;

let displacement2 ;

let j;

let k;

let m;

let g;

let flag;

if(selectedChar == 'char1'){
	m=0;
}
else if(selectedChar == 'char2')
{
	m=1;
}
else if(selectedChar == 'char3')
{
	m=2;
}
else if(selectedChar == 'char4')
{
	m=3;
}
else if(selectedChar == 'char5')
{
	m=4;
}





if (level == 'easy'){
	g=0;
	i=0;
	j=0;
	k=0;
	flag=false;
	displacement=0;
	displacement2 = 95;

}
else if(level == 'medium'){
	g=1;
	i=5;
	j=2;
	k=2;
	flag=true;
	displacement= 95;
	displacement2 = 170;

}

else if(level == 'hard'){

	g=2;
	i=10;
	j=4;
	k=1;
	flag=true;
	displacement= 63;
	displacement2 = 160;
	
}














//General Game Object
const theFroggerGame = {

	round: 1,

	//Where the bugs will be stored
	bugArray:[],

	//Get random position for life bug
	randomPosition(coor){

		return coor === 'x' ?  Math.floor(Math.random() * 700) + 100 : (Math.floor(Math.random() * 10) + 3) * 45;
 		//100 - 800//100 - 550

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

		// setTimeout(()=>{
		// 	this.initialize();
		// 	control = true;
		// },2500)

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



//Make Frog Object
const frogger = {
	
	// Score 
	score: 0,
	//How Many Lives our Hero will Have
	life: 5,
	//The Value to increment/Decrement X,Y when Moving Frog
	speed: 43,
	//The x position of the frogger sprite in the sheet
	sx:0,
	//The y position of the frogger sprite in the sheet 
	sy:225,
	//The width of the frogger sprite in the sheet
	sw:65,
	//The height of the frogger sprite in the sheet
	sh:75,
	//Dead or alive
	alive: true,
	//Position hero in center of width of canvas
	x: (canvas.width/2),
	// x: ((canvas.width/2) -20),
	// y: ((canvas.height - 95)),
	y: (canvas.height - 75),
	w: 45,
	h: 45,
	r: 10,
	source: drawCharacter[m].source,
	//Color of Body
	// color: 'rgb(102,153,0)',
	//Function to draw body
	drawFrog(){ 	
		

		
		ctx.drawImage(this.source, this.sx, this.sy, this.sw, this.sh, this.x - 20 /*this.x*/, this.y - 20/* this.y*/, this.w, this.h);
	
	},
	decrementLives(){
		this.life -= 1;
		if(this.life === 0){
			theFroggerGame.gameOver();
		};
	},
	increaseScore(){
		this.score += 100;
		control = false;
		theFroggerGame.changeRound();


		setTimeout(()=>{
			this.x = canvas.width/2;
			this.y = canvas.height - 75;
			theFroggerGame.generateBug();
			control = true;
			animate();
		},150);
			
	},
	decrementScore(){
		if(this.score > 0){
			this.score -= 100;
		};

	},
	die(){
		this.alive = false;

		
		
		this.decrementLives();
		this.decrementScore();
		
		this.source=collision;
			this.sx= 0;
			this.sy= 110;
			this.sw= 100;
			this.sh= 90;
		
		// setTimeout(()=>{
		// },800)
		// setTimeout(()=>{
		// 	this.source=collision;
		// 	this.sx= 0;
		// 	this.sy= 110;
		// 	this.sw= 100;
		// 	this.sh= 90;
			
			
		// },500)
		
		setTimeout(()=>{
			this.source=drawCharacter[m].source;
			this.sy=225,
			this.sw=65,
	
			this.sh=75,
			this.sx = 0;
			this.x = canvas.width/2;
			this.y = canvas.height -75;
			this.alive = true;
			theFroggerGame.generateBug()
		},1000)

	}


	
};



//Make Scene Object
const scene = {
	x: 0,
	y: [canvas.height/7, 400],//Where to draw from
	w: canvas.width,
	h: [canvas.height/7, canvas.height/3.5], //Two Times bigger than land
	color: ['#3498DB','#566573','#A569BD'],


	//Draw Everything in Scene
	drawScene(){
		this.land.drawLand();
		this.water.drawWater();
		this.street.drawStreet();
	},
	
	land:{
		
		drawLand(){ //Draw 3 Peices of land
			for(let i = 0; i < 3; i ++){
				// ctx.beginPath();
				// ctx.rect(scene.x, i * 300, scene.w, scene.h[0]);
				// ctx.fillStyle = scene.color[2];
				// ctx.fill();
				// ctx.closePath();
				ctx.drawImage(middle,0,0,500,200,0,i * 300,900,100);
						
			};

		}

	},
	
	water:{
			
		//Water Object
			
		//Rows In The Water
		rows: 
		[ 
			{
				name:'row1',
				x:0,
				y:260,
				speed:2.5,
				speedFactor: 1.5,
				'log count': 3,
				'croc count': 2,
				space: 300,
				logs:[],
				logImg:'log1',
				crocImg: 'croc1',
				crocs:[]
			},
			{	
				name:'row2',
				x:0,
				y:220,
				speed:-3,
				speedFactor: -1.75,
				'log count': 2,
				'croc count': 3,
				space:275,
				logs:[],
				logImg:'log1',
				crocImg:'croc2',
				crocs:[]

			},
			{
				name:'row3',
				x:0,
				y:180,
				speed:3,
				speedFactor: 1.75,
				'log count': 2,
				'croc count': 1,
				space:375, 
				logs:[],
				logImg:'log1',
				crocImg:'croc1',
				crocs:[]
			},
			{
				name:'row4Water',
				x:0,
				y:140,
				speed:-2,
				speedFactor: -1.25,
				'log count': 1,
				'croc count': 2,
				space:250, 
				logs:[],
				logImg:'log1',
				crocImg:'croc2',
				crocs:[]
			},
			{
				name:'row5',
				x:0,
				y:100,
				speed:3,
				speedFactor: 1.75,
				'log count': 2,
				'croc count': 2,
				space:270, 
				logs:[],
				logImg:'log1',
				crocImg:'croc1',
				crocs:[]
			}
		],
		//Draw Water
		drawWater(){ 
			// ctx.beginPath();
			// ctx.rect(scene.x , scene.y[0] , scene.w, scene.h[1])
			// ctx.fillStyle = scene.color[0];
			// ctx.fill();
			// ctx.closePath();
			// Reset the value of y for next time
			// scene.y[1] = canvas.height/7;


		//	ctx.drawImage(waterImg,0,0,600,250,0,100,900,200);

		//ctx.drawImage(lava,20,50,900,300,0,100,900,200);
		ctx.drawImage(drawSecondLane[g].source,drawSecondLane[g].sx,drawSecondLane[g].sy,drawSecondLane[g].sw,drawSecondLane[g].sh,0,100,900,200);

		},
		//Generate Logs And Push To Each Row
		logFactory(){	
			for(let i = 0, len = this.rows.length; i < len; i ++){
				for(let j = 0, lc = this.rows[i]['log count'] ; j < lc; j ++){
					const newLog = new Log(this.rows[i].x + (j * this.rows[i].space) , this.rows[i].y, this.rows[i].speed, this.rows[i].name, this.rows[i].logImg, this.rows[i].speedFactor);
					this.rows[i].logs.push(newLog);
					this.rows[i].logs[j].drawVehicle();
				};
			};
		},
		crocFactory(){
			for(let i = 0, len = this.rows.length; i < len ; i ++){
				for(let j = 0, cc = this.rows[i]['croc count']; j < cc; j ++){
					const newCroc = new Croc(this.rows[i].x + (this.rows[i]['log count'] * this.rows[i].space) + (j * 180), this.rows[i].y, this.rows[i].speed, this.rows[i].name, this.rows[i].crocImg, this.rows[i].speedFactor)
					this.rows[i].crocs.push(newCroc);
					this.rows[i].crocs[j].drawVehicle();
				};
			};
		}
	},	
	//Street Object
	street:{
		//Rows In the Street
		rows: 
		[ 
			{
				name:'row1',
				x:100,
				y:560,
				speed:1,
				speedFactor: .75,
				'vehicle count': 4,
				space: 400,
				vehicleImg:['car2', 'car3'],
				vehicles:[]
			},
			{	
				name:'row2',
				x:150,
				y:520,
				speed:-2,
				speedFactor: -1.25,
				'vehicle count': 3,
				space: 400,
				vehicleImg:['car1', 'car4', 'car5'],
				vehicles:[]
			},
			{
				name:'row3',
				x:170,
				y:480,
				speed:2.5,
				speedFactor: 1.5,
				'vehicle count': 3,
				space: 350,
				vehicleImg:['car2', 'car3'],
				vehicles:[]
			},
			{
				name: 'row4',
				x: 160,
				y: 440,
				speed: 1.5,
				speedFactor: 1,
				'vehicle count':5,
				space:200,
				vehicleImg:['car2', 'car3'],
				vehicles:[]
			},
			{
				name: 'row5',
				x: 130,
				y: 400,
				speed: -2,
				speedFactor: -1.25,
				'vehicle count':3,
				space: 300,
				vehicleImg:['car1', 'car4', 'car5'],
				vehicles:[]
			}
		],
		//Draw Street
		drawStreet(){
			// ctx.beginPath();
			// ctx.rect(scene.x , scene.y[1], scene.w, scene.h[1]);
			// ctx.fillStyle = scene.color[1];
			// ctx.fill();
			// ctx.closePath();
			// reset the value of y for next time
		
			ctx.drawImage(drawfirstLane[g].source,drawfirstLane[g].sx,drawfirstLane[g].sy,drawfirstLane[g].sw,drawfirstLane[g].sh,0,400,900,200);
			//ctx.drawImage(sand,0,0,600,350,0,400,900,200);

		
			// scene.dangerZone.y = canvas.height/7;
		},
		//Generate Vehicles And Push To Each Row
		vehicleFactory(){
			for(let i = 0, len = this.rows.length; i < len ; i ++){
				for(let j = 0, vc = this.rows[i]['vehicle count']; j < vc; j++){
					//(x,y,l,h,color,speed, row name)
					const newVehicle = new Vehicle(this.rows[i].x + (this.rows[i].space * j), this.rows[i].y,this.rows[i].speed, this.rows[i].name, this.rows[i].vehicleImg[Math.floor( Math.random() * this.rows[i].vehicleImg.length)], this.rows[i].speedFactor);
					this.rows[i].vehicles.push(newVehicle);
					this.rows[i].vehicles[j].drawVehicle();
				};
			};
		}
	}				
}	


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
			if(level == 'medium'){
				this.speed = this.speed * 1.5;
				this.speedFactor = this.speedFactor * 1.1;
			}
			if(level == 'hard'){
				this.speed = this.speed * 2;
				this.speedFactor = this.speedFactor * 1.1;
			}

		}
		drawVehicle(){
			

			switch(this.img){
				case 'car1':
					if(frame % this.randomise === 0 && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					
					ctx.drawImage(drawObj[0+i].source, drawObj[0+i].sx + this.counter *displacement, drawObj[0+i].sy, drawObj[0+i].sw, drawObj[0+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car2':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[1+i].source, drawObj[1+i].sx  + this.counter *displacement, drawObj[1+i].sy, drawObj[1+i].sw, drawObj[1+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car3':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[2+i].source, drawObj[2+i].sx  + this.counter *displacement, drawObj[2+i].sy, drawObj[2+i].sw, drawObj[2+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car4':
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[3+i].source, drawObj[3+i].sx  + this.counter *displacement, drawObj[3+i].sy, drawObj[3+i].sw, drawObj[3+i].sh, this.x, this.y, this.w, this.h);
					break;

				case 'car5':
					//this.w = 130;
					if(frame % this.randomise === 0  && flag){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
					ctx.drawImage(drawObj[4+i].source, drawObj[4+i].sx  + this.counter *displacement, drawObj[4+i].sy, drawObj[4+i].sw, drawObj[4+i].sh, this.x, this.y, this.w, this.h);
					break;
				case 'log1':

					ctx.drawImage(drawLog[k].source, drawLog[k].sx  , drawLog[k].sy, drawLog[k].sw, drawLog[k].sh, this.x, this.y, this.w, this.h);
					//ctx.drawImage(log, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;
				case 'croc1':
					if(frame % this.randomise === 0){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}
						
					
					ctx.drawImage(drawobject2[0+j].source,drawobject2[0+j].sx + (displacement2 * this.counter), drawobject2[0+j].sy, drawobject2[0+j].sw, drawobject2[0+j].sh, this.x, this.y, this.w, this.h);
					
					break;
				case 'croc2':
					if(frame % this.randomise === 0){
						if(this.counter >= 2){
							this.counter = 0;
						} else{
							this.counter++;
						}
					}

					ctx.drawImage(drawobject2[1+j].source,drawobject2[1+j].sx + (displacement2 * this.counter), drawobject2[1+j].sy, drawobject2[1+j].sw, drawobject2[1+j].sh, this.x, this.y, this.w, this.h);

					//ctx.drawImage(dragon,this.counter * 170 , 200 , 167 ,100, this.x, this.y, this.w,this.h);
					break;
				case 'bug':
					ctx.drawImage(sprites3, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
					break;
								


				// case 'log2':
				// 	this.w = 392;
				// 	ctx.drawImage(sprites, 248, 160, 392, 80, this.x, this.y, this.w, this.h);
				// 	break;
				// case 'log3':
				// 	this.w = 256;
				// 	ctx.drawImage(sprites, 0, 240, 256, 80, this.x, this.y, this.w, this.h);
				// 	break;									

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
	




		
	
	//Draw Frogger
	
	





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




