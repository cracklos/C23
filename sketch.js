//creamos constantes: una máquina, un mundo y un cuerpo. 
//Y decimos que van a pertenecer 
//1 Cambiamos el nombre largo a uno corto para escribir más fácil
//namespacing
const Engine = Matter.Engine; //crea un motor físico
const World = Matter.World    //crea un mundo
const Bodies = Matter.Bodies; //crea los objetos físicos que habitan en el mundo

//2 creamos variables para alojar el motor y el mundo
var motor, mundo;
//3 creamos variables para los objetos en nuestro mundo
var caja1, caja2;
var ground;

function setup() {
  var canvas = createCanvas(400, 400);

  //4 creamos un motor y agregamos al mundo nuestro motor
  motor = Engine.create();
  mundo = motor.world;

  caja1 = new Box(200,100,50,50);
  caja2 = new Box(100,50,50,100);
  ground = new Ground(200,390,400,20);
}

function draw() {
  background(0);
  Engine.update(motor); //actualiza nuestro motor
  
  caja1.display();
  caja2.display();
  ground.display();
}