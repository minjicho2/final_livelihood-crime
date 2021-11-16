
let boxCnt = 100; // 박스 만들 개수
let initNum = 0; // 시작 카운트

let randomBox = document.querySelector('#randomBox');
let boxes;

let myInterval = setInterval(makeBox, 200);
let boxPos;

let targetY;
let myAni;



function makeBox()

{
    let tempBox = document.createElement('div');
    tempBox.classList.add('randomBox');
    tempBox.style.transform = 'rotateZ(' + Math.random()*360 +'deg)';
    tempBox.style.left = Math.random()*window.innerWidth - 200 + 'px'; //기준점 보정값. 랜덤박스 넓이의 절반정도.
    tempBox.style.top = Math.random()*window.innerHeight + 'px';
    tempBox.innerHTML = "생계형범죄"

    randomBox.appendChild(tempBox);
    initNum++ 

    {
        let tempBox = document.createElement('div');
        tempBox.classList.add('randomBox');
        tempBox.style.transform = 'rotateZ(' + Math.random()*360 +'deg)';
        tempBox.style.left = Math.random()*window.innerWidth - 200 + 'px'; //기준점 보정값. 랜덤박스 넓이의 절반정도.
        tempBox.style.top = Math.random()*window.innerHeight + 'px';
        tempBox.innerHTML = "장발장"
    
        randomBox.appendChild(tempBox);
        initNum++ 
    }

    {
        let tempBox = document.createElement('div');
        tempBox.classList.add('randomBox');
        tempBox.style.transform = 'rotateZ(' + Math.random()*360 +'deg)';
        tempBox.style.left = Math.random()*window.innerWidth - 200 + 'px'; //기준점 보정값. 랜덤박스 넓이의 절반정도.
        tempBox.style.top = Math.random()*window.innerHeight + 'px';
        tempBox.innerHTML = "계란"
    
        randomBox.appendChild(tempBox);
        initNum++ 
    }

    {
        let tempBox = document.createElement('div');
        tempBox.classList.add('randomBox');
        tempBox.style.transform = 'rotateZ(' + Math.random()*360 +'deg)';
        tempBox.style.left = Math.random()*window.innerWidth - 200 + 'px'; //기준점 보정값. 랜덤박스 넓이의 절반정도.
        tempBox.style.top = Math.random()*window.innerHeight + 'px';
        tempBox.innerHTML = "특가법"
    
        randomBox.appendChild(tempBox);
        initNum++ 
    }

    {
        let tempBox = document.createElement('div');
        tempBox.classList.add('randomBox');
        tempBox.style.transform = 'rotateZ(' + Math.random()*360 +'deg)';
        tempBox.style.left = Math.random()*window.innerWidth - 200 + 'px'; //기준점 보정값. 랜덤박스 넓이의 절반정도.
        tempBox.style.top = Math.random()*window.innerHeight + 'px';
        tempBox.innerHTML = "참치캔"
    
        randomBox.appendChild(tempBox);
        initNum++ 
    }



    if(initNum >= boxCnt)
    {
        clearInterval(myInterval);
        makeArr();
        targetY = window.innerHeight *2.5;
        myAni = requestAnimationFrame(moveOut);
    }
}



function makeArr()
{
    boxes = document.querySelectorAll('.randomBox');
    boxPos = new Array(boxes.length);
    console.log( boxes[2].offsetTop);

    for(let i = 0; i < boxPos.length; i++)
    {
        boxPos[i] = boxes[i].offsetTop;
    }
}

let a = 0.01;
let v = 0;

function moveOut()
{
    for(let j = 0; j < boxPos.length; j++)
    {
        boxPos[j] += v;
        boxes[j].style.top = boxPos[j]+'px';
        v += a;
    }

    if(targetY < boxPos[0])
    {
        console.log("end!!");
        cancelAnimationFrame(myAni);
    }
    else{
        requestAnimationFrame(moveOut);
    }
}


