let quizdata = [
  {
    'question': "What is your name?",
    'a': 'M ali',
    'b': 'Umer',
    'c': 'abdu',
    'd': 'areeb',
    'corrent': 'b',
  },
  {
    'question': "Age?",
    'a': '21',
    'b': '22',
    'c': '23',
    'd': '25',
    'corrent': 'a',
  },
];


let Question_Tag = document.getElementById('Question-Tag');
let a = document.getElementById('aa');
let b = document.getElementById('bb');
let c = document.getElementById('cc');
let d = document.getElementById('dd');
const tbtn = document.getElementById('butt')
const box = document.getElementById('ans-pro')
const answers = document.querySelectorAll('.ans');
let aa = 0;
function getSelected() {
   
}
loadedQuiz();
function loadedQuiz() {
  Question_Tag.innerHTML = quizdata[aa]['question'];
  a.innerHTML = quizdata[aa]['a'];
  b.innerHTML = quizdata[aa]['b'];
  c.innerHTML = quizdata[aa]['c'];
  d.innerHTML = quizdata[aa]['d'];
  getSelected();
}



tbtn.addEventListener("click", () => {
  let i=0;
  answers.forEach((ans)=> {
     if(ans.checked===true){
       console.log(ans.id, quizdata[aa]['corrent'])
       if(ans.id==quizdata[aa]['corrent']){
         box.classList.remove('ans-pro-false')
         box.classList.add('ans-pro-correct')
       }
       else {
         box.classList.remove('ans-pro-correct')
         box.classList.add('ans-pro-false')
       }
       aa++
       aa=aa%quizdata.length;
       loadedQuiz();
       answers.forEach((ans)=> {
       ans.checked = false;
       })
     }
    i++
  })
})