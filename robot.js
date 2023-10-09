




const STEP = 36
let robotUpDown = 0


function render(){

gameMap.innerHTML = `
<div class="robot" 
style='transform:translateY(${STEP * robotUpDown}px)'>
</div>`

}
render()


const STEP2 = 36
let robotLeft = 0

function render2(){
    gameMap.innerHTML = `<div class="robot" 
    style='transform:translateX(${STEP * robotLeft}px)'>
    </div>`
}
render2()