const question=[
    {
        "que":"What year was JS launched?",
        "a":"1996",
        "b":"1995",
        "c":"1994",
        "d":"None of the above",
        "correct":"b"
    },
    {
        "que":"Which of the following keywords is used to define a variable in Javascript?",
        "a":"var",
        "b":"let",
        "c":"Both A and B",
        "d":"None of the above",
        "correct":"c"
    },
    {
        "que":"Which of the following methods can be used to display data in some form using Javascript?",
        "a":"document.write()",
        "b":"console.log()",
        "c":"window.alert()",
        "d":"All of the above",
        "correct":"d"
    }
];

let index=0;
const que=$(".queBox");
const opt=document.querySelectorAll(".options");
let total=question.length;
let right=0;

const loadQue=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=question[index];
    que.text((index+1)+") "+data.que);
    opt[0].nextElementSibling.textContent=data.a;
    opt[1].nextElementSibling.textContent=data.b;
    opt[2].nextElementSibling.textContent=data.c;
    opt[3].nextElementSibling.textContent=data.d;

};

const submitQuiz=()=>{
    const data=question[index];
    const ans=getAns();
    if(ans===data.correct){
        right++;
    }
    index++;
    loadQue();
    return;
};

const getAns=()=>{
    let answ;
    opt.forEach(
        (input)=>{
            if(input.checked){
                answ=input.value;
            }
        }
    )
    return answ;
};

const reset=()=>{
    opt.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    $(".box").html(`<div class="correct"><h2>Thank You For Playing</h2><h2 class="queBox">${right}/${total} are correct</h2></div>`);
    
}

loadQue();

