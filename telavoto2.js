let voteInput = document.querySelectorAll('.numero input');
let currentInput = 0;

const candidateInfo2 = document.getElementById('candidate-info2');
const candidatePhoto2 = document.getElementById('candidate-photo2');
const candidateName2 = document.getElementById('candidate-name2');
const candidateNumber2 = document.getElementById('candidate-number2');




var pedroVoto = 0;
var helderVoto =0;
var mossmannVoto=0;
var pietroVoto= 0;
var heirotVoto= 0;



var curioVoto = 0;
var otavioVoto = 0;
var rafaelVoto = 0;
var cachorroPietroVoto = 0;
var welVoto = 0;


function pressKey(key) {
  if (currentInput < voteInput.length) {
    voteInput[currentInput].value = key;
    currentInput++;
  }
}

function whiteVote() {
  candidateName2.textContent = "Votou em branco";
  setTimeout(() => {
  window.location.href = "votos.html"; // Redireciona para a segunda tela após 5 segundos
}, 5000); // 5000 milissegundos = 5 segundos
  resetInput();
  
}

function correct() {
  resetInput();
}


function confirmAndRedirect() {
  confirm(); // Chama a função de confirmação para mostrar os dados do candidato
  
  setTimeout(() => {
    window.location.href = "votos.html"; // Redireciona para a segunda tela após 5 segundos
  }, 5000); // 5000 milissegundos = 5 segundos
}



function confirm() {

  
  let vote = Array.from(voteInput).map(input => input.value).join('');

  if (vote.length === 2) {
    switch (vote) {
      case "13":
        candidatePhoto2.src = "img/curio.jpg"; // Substitua pelo caminho correto da imagem
        candidateName2.textContent = "Votou no Curió";
        candidateNumber2.textContent = "Número: 13";
        break;
      case "11":
        candidatePhoto2.src = "img/rafael.jpg"; // Substitua pelo caminho correto da imagem
        candidateName2.textContent = "Votou no sad Rafael";
        candidateNumber2.textContent = "Número: 11";
        break;
      case "99":
        candidatePhoto2.src = "img/ovario.jfif"; // Substitua pelo caminho correto da imagem
        candidateName2.textContent = "Votou no Otavio";
        candidateNumber2.textContent = "Número: 99";
        break;
      case "38":
        candidatePhoto2.src = "img/dog.jfif"; // Substitua pelo caminho correto da imagem
        candidateName2.textContent = "Votou no Cachorro do Pietro";
        candidateNumber2.textContent = "Número: 38";
        break;
      case "24":
        candidatePhoto2.src = "img/well well.jpg"; // Substitua pelo caminho correto da imagem
        candidateName2.textContent = "Votou no Wel Wel";
        candidateNumber2.textContent = "Número: 24";
        break;
      default:
        alert("Número de candidato inválido. Voto nulo.");
        candidatePhoto2.style.display = "none";
        candidateName2.textContent = "Voto nulo";
        candidateNumber2.textContent = "";
        return;
    }


    candidatePhoto2.style.display = "block";
    resetInput();
  } else {
    alert("Por favor, insira os dois dígitos.");
  }
  resetInput();

}

function resetInput() {
  voteInput.forEach(input => input.value = '');
  currentInput = 0;
}