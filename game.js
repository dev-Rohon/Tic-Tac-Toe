let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    trunO=true;
    enablebtns();
    msg_container.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });

});

const disablebtns = () =>{
    for(let box of boxes){
        box.disabled=true;
    };
};

const enablebtns = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const show_winner=(winner) => {
    msg.innerText=`congratulations, winner is ${winner}`;
    msg_container.classList.remove("hide");
    disablebtns();
};

const checkwinner=() => {
    for(let pattern of winpatterns){
   let pos1= boxes[pattern[0]].innerText;
   let pos2= boxes[pattern[1]].innerText;
   let pos3= boxes[pattern[2]].innerText;
   
   if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1===pos2 && pos2===pos3){
        console.log("winner" , pos1);
        show_winner(pos1);
    };
   };
    };
};

reset_btn.addEventListener("click",resetGame);

