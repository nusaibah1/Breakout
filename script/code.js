
const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const bordWidth = 560
const ballDiameter = 20
let timerID
let xDirection = 2
let yDirection = 2
const userStartPosition = [230, 10]
let currentPosition = userStartPosition
const ballStart = [270, 40]
let ballCurrentPosition = ballStart
// 
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth , yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
// All my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
    

]
console.log(blocks[0])
// Draw all my Blocks
function addBlocks(){

for(let i = 0; i <  blocks.length; i++) {
const  block = document.createElement('div')

block.classList.add('block')
block.style.left = blocks[i].bottomLeft[0] + 'px'
block.style.bottom = blocks[i].bottomLeft[1] + 'px'
grid.appendChild(block)
}
}
addBlocks()

// add User
const user = document.createElement('div')
user.classList.add('user')
user.style.left = currentPosition + 'px'
user.style.bottom = currentPosition[1] + 'px'
grid.appendChild(user)

// Draw User
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'  
}

// Draw Ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px' 
}


// move user

function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft': 
        if(currentPosition[0] > 0) {
            currentPosition[0] -= 10
            user.style.left = currentPosition[0] + 'px'
            drawUser()
        }
      
        break;
         case 'ArrowRight' :
            if(currentPosition[0] < bordWidth - blockWidth  ) {
                currentPosition[0] +=10
                drawUser()
            }
      break;
        }
}

document.addEventListener('keydown', moveUser)


// Add ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

// Move Ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
}
timerID = setInterval(moveBall, 30)


// Check for collisions
function checkForCollisions () {
    // check for wall collisions
    if(ballCurrentPosition[0] >= (bordWidth - ballDiameter)) {
        changeDirection() 
    }
}
 function changeDirection() {
  if(xDirection === 2 && yDirection === 2) {
    xDirection = -2
    return
  }
  
 }

