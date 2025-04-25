  function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
    background('#68DB57');
    fill('rgb(114,8,8)')
    circle(200, 200, 300);  //cabeça
    fill('white') 
    circle(150, 150, 60); //olho esquerdo
    circle(250, 150, 60); //olho direito
    line(150, 270, 250, 250); //boca
    fill('brown')
    triangle(170, 205, 170, 235, 140, 220); //nariz
    line(120, 120, 180, 116) //sombrancelha esquerda
    line(225, 116, 280, 120) // sombrancelha direita
    fill('black')
    //circle(150, 150, 10) //pupila esquerda 
    //circle(250, 150, 10) //pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX+100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
        console.log(mouseX, mouseY);
    }
}