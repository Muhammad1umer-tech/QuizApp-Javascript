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
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
const tbtn = document.getElementById('butt')

let aa = 0;
loadedQuiz();
function loadedQuiz() {
  Question_Tag.innerHTML = quizdata[aa]['question'];
  a.innerHTML = quizdata[aa]['a'];
  b.innerHTML = quizdata[aa]['b'];
  c.innerHTML = quizdata[aa]['c'];
  d.innerHTML = quizdata[aa]['d'];
}



tbtn.addEventListener("click", () => {
  aa++

  
  loadedQuiz();
})