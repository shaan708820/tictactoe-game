console.log("welcome");
let music=new Audio("music.mp3");
let gameover=new Audio("gameover.mp3");
let AudioTurn=new Audio("ting.mp3");
let turn="X";
let isgameover=false;
const changeTurn = ()=>{
    return turn === "X"? "0":"X";
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    let wins;
        if (mediaQuery.matches) {
             wins=[
                [0,1,2,5,10,0],
                [3,4,5,5,30,0],
                [6,7,8,5,50,0],
                [0,3,6,-15,30,90],
                [1,4,7,5,30,90],
                [2,5,8,25,30,90],
                [0,4,8,5,30,45],
                [2,4,6,5,30,135],
            ]
        } 
        else {
             wins=[
                [0,1,2,5,5,0],
                [3,4,5,5,15,0],
                [6,7,8,5,25,0],
                [0,3,6,-5,15,90],
                [1,4,7,5,15,90],
                [2,5,8,15,15,90],
                [0,4,8,5,15,45],
                [2,4,6,5,15,135],
            ]
        }
      
    //let wins=[
      //  [0,1,2,5,5,0],
        //[3,4,5,5,15,0],
        //[6,7,8,5,25,0],
        //[0,3,6,-5,15,90],
        //[1,4,7,5,15,90],
      //  [2,5,8,15,15,90],
        //[0,4,8,5,15,45],
        //[2,4,6,5,15,135],
    //]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px";
            //gameover.play();
            music.play();
            if(mediaQuery.matches){
                document.querySelector(".line").style.width="50vw";
            }
            else{
                document.querySelector(".line").style.width="20vw";
            }
            
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            AudioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
        //gameover.pause();
        music.pause();
        turn="X";
        isgameover=false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector(".line").style.width="0";
    });
})
  