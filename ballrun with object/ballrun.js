var ballObject = {}
var ballObject2 = {}

function constructBall() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  ballObject.radius=200;
  ballObject.position= {x:250,y:250}
  ballObject.color="yellow";
  ballObject.velocity={x:10, y:0}
  ballObject.domElement=document.querySelector(".ball");


 ballObject.domElement.style.width=ballObject.radius +"px";
 ballObject.domElement.style.height=ballObject.radius +"px";
 ballObject.domElement.style.backgroundColor=ballObject.color;
 ballObject.domElement.style.top=ballObject.position.y +"px";
 ballObject.domElement.style.left=ballObject.position.x+"px";


  // Add the following starting styles to the domElement:
  //  - width = radius + "px"
  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
}
function constructBall2() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  ballObject.radius=200;
  ballObject.position= {x:250,y:250}
  ballObject.color="yellow";
  ballObject.velocity={x:10, y:0}
  ballObject.domElement=document.querySelector(".ball");


 ballObject.domElement.style.width=ballObject.radius +"px";
 ballObject.domElement.style.height=ballObject.radius +"px";
 ballObject.domElement.style.backgroundColor=ballObject.color;
 ballObject.domElement.style.top=ballObject.position.y +"px";
 ballObject.domElement.style.left=ballObject.position.x+"px";

  ballObject2.radius=200;
  ballObject2.position= {x:100,y:100}
  ballObject2.color="red";
  ballObject2.velocity={x:10, y:0}
  ballObject2.domElement=document.querySelector(".ball2");


 ballObject2.domElement.style.width=ballObject2.radius +"px";
 ballObject2.domElement.style.height=ballObject2.radius +"px";
 ballObject2.domElement.style.backgroundColor=ballObject2.color;
 ballObject2.domElement.style.top=ballObject2.position.y +"px";
 ballObject2.domElement.style.left=ballObject2.position.x+"px";


  // Add the following starting styles to the domElement:
  //  - width = radius + "px"
  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
}
function construct2ball(){
  constructBall();
  constructBall2();
}
function move() {
  setPosition();
  drawPosition();
}
function move2() {
  setPosition2();
  drawPosition2();
}

function setPosition() {
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
// The position of the ball should be the current position plus the velocity.
ballObject.position.x=ballObject.position.x+parseInt(document.querySelector(".xvelocity").value);
ballObject.position.y=ballObject.position.y+parseInt(document.querySelector(".yvelocity").value);

}
function setPosition2() {
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
// The position of the ball should be the current position plus the velocity.
ballObject.position.x=ballObject.position.x+parseInt(document.querySelector(".xvelocity").value);
ballObject.position.y=ballObject.position.y+parseInt(document.querySelector(".yvelocity").value);

ballObject2.position.x=ballObject2.position.x+parseInt(document.querySelector(".xvelocity").value);
ballObject2.position.y=ballObject2.position.y+parseInt(document.querySelector(".yvelocity").value);

}



function drawPosition() {
  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballObject.domElement.style.top=ballObject.position.y +"px";
  ballObject.domElement.style.left=ballObject.position.x+"px";
}
function drawPosition2() {
  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballObject.domElement.style.top=ballObject.position.y +"px";
  ballObject.domElement.style.left=ballObject.position.x+"px";

  ballObject2.domElement.style.top=ballObject2.position.y +"px";
  ballObject2.domElement.style.left=ballObject2.position.x+"px";
}
