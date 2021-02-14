//Global Variables

//H3 Tag to input score and Lives
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let round = document.getElementById('round');

//Controls Animation function
let control = true;
let level = "easy";

const firstPart = ["images/road.jpg","images/desert.jpg","images/darkroad.jpeg"];
const secondPart = ["images/water.png","images/fire.jpg","images/volcano.jpeg"];
const firstPartChar = ["images/cars.png","images/cobra1.png","images/ghost.png"];
const secondPartChar = {
                    scene1:["images/spritemap.png","images/parrot.png","images/parrot2.png"],
                    scene2:["images/spritemap.png","images/parrot.png","images/parrot2.png"],
                    scene3:["images/spritemap.png","images/parrot.png","images/parrot2.png"]
                };
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


const roadImg= new Image();
roadImg.src = "images/desert.jpg"


const middle= new Image();
middle.src = "images/road3.jpg"



const carSprite= new Image();
carSprite.src = "images/cobra1.png"



const duck= new Image();
duck.src = "images/duck.png"



const bird= new Image();
bird.src = "images/h.png"



const frog= new Image();
frog.src = "images/2.png"


const collision= new Image();
collision.src = "images/collisions.png"


const dragon= new Image();
dragon.src = "images/parrot2.png"


let frame = 0;


// const obj = [{
//             car1: [0, 0, 800, 350],
//             cobra1: [161, 0, 319, 81],
//             ghost1:[]
//         },
//         {
//             car2: [ 0, 360, 800, 350],
//             cobra2: [0, 0, 150, 80],
//             ghost2:[]
//         },
//         {
//             car3: [0, 745, 800, 350],
//             cobra3: [0, 0, 150, 80],
//             ghost3:[]
//         },
//          {
//             car4: [ 0, 360, 800, 350],
//             cobra4: [0, 0, 150, 80],
//             ghost4:[]
//         },
//          {
//             car4: [ 0, 360, 800, 350],
//             cobra4: [0, 0, 150, 80],
//             ghost4:[]
//         }
// ];
