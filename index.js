let question_display = document.querySelector('#question')
let result = document.querySelector('#result')
let response_input = document.querySelector('#response')
let verify_response = document.querySelector('#verify_response')
let restart = document.querySelector('#restart')

let The_question = [
    ['Quelle est la capitale de Madagascar', 'tananarivo'],
    ['Quelle est les provinces les plus grands a Madagascar','toliara'],
    ['Donnez la capitale de commerce a Madagascar','tamatave'],
    ['Le province le plus des meuilleurs universités' , 'fianarantsoa' ],
    ['Quel est le plus grand parc national de Madagascar ?', 'isalo'],
    ['Quelle est la plus grande île de Madagascar ?', 'nosy be'],
    ['Quel est le plat traditionnel malgache à base de viande et de riz ?', 'romazava'],
    ['Quel est le nom de la danse traditionnelle de Madagascar ?', 'salegy'],
    ['Quel est le nom du roi traditionnel de Madagascar ?', 'malagasy'],
    ['Quel est le célèbre baobab emblématique de Madagascar ?', "baobab d'ampanihy"],
    ['Quelle est la capitale de Madagascar ?', 'antananarivo'],
    ['Quelle est la deuxième plus grande ville de Madagascar ?', 'toamasina'],
    ['Quelle est la monnaie utilisée à Madagascar ?', 'ariary'],
    ['Quel est le plus grand lac naturel de Madagascar ?', 'lac alaotra'],
    ['Quelle est la période de l\'année où se déroule le festival des baleines à bosse à Madagascar ?', 'juillet à septembre'],
    ['Quel est le surnom donné à Madagascar en raison de sa biodiversité exceptionnelle ?', 'l\'île aux orchidées'],
    ['Quel est le plus grand groupe ethnique de Madagascar ?', 'les merina'],
    ['Quel est le nom de la langue officielle parlée à Madagascar ?', 'malagasy'],
    ['Quel est le célèbre parc national abritant des lémuriens à Madagascar ?', 'parc national d\'andasibe-mantadia'],
    ['Quelle est la boisson traditionnelle malgache fabriquée à partir de riz fermenté ?', ' ranonapango']
];



let questionCount = 0
var score = 0
verify_response.addEventListener('click' , resultQuizz)
// restart.addEventListener('click' , restartQuizz)
let questionIndex = Math.floor(Math.random() * The_question.length)
     let quiz = The_question[questionIndex][0]
      question_display.textContent = quiz
askQuestion()//appelle de fonction pour commencer le premiere question

function resultQuizz(){
      
    if((response_input.value) === The_question[questionIndex][1]){
       
       result.textContent = "Bonne reponse "

        askQuestion()     
}else{
  result.textContent = "Mauvaise reponse"
  askQuestion()
}
        response_input.value = ''
       
       
}


function askQuestion() {
 
    let questionIndex = Math.floor(Math.random() * The_question.length);
    let quiz = The_question[questionIndex][0];
    question_display.textContent = quiz;
}




function restartQuizz(){
    askQuestion()
   score = 0
    questionCount = 0
    response_input.value = ''

}



 