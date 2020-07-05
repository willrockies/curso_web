/* 

<img class="passaro" src="imgs/passaro.png" alt="passaro">
        <div class="par-de-barreiras">
            <div class="barreira">
                <div class="corpo"></div>
                <div class="borda"></div>
            </div>
            <div class="barreira">
                <div class="borda"></div>
                <div class="corpo"></div>
            </div>
        </div>
        <div class="progresso">100</div>
*/
function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira");

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}
// const b = new Barreira(true);
// b.setAltura(200);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function PardeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };
  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

//  const b = new PardeBarreiras(700, 200, 400);
//  document.querySelector('[wm-flappy]').appendChild(b.elemento);
/*
 *
 * altura das barreiras
 * largura do jogo
 * abertura da barreira para que o passaro possa passar
 * espaco entre cada par de barreira
 * notificar o ponto evento de pontuação quando a barra passar o ponro central
 *
 */
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
  this.pares = [
    new PardeBarreiras(altura, abertura, largura),
    new PardeBarreiras(altura, abertura, largura + espaco),
    new PardeBarreiras(altura, abertura, largura + espaco * 2),
    new PardeBarreiras(altura, abertura, largura + espaco * 3),
  ];

  const deslocamento = 3;
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      // quando o elemento sair da area do jogo
      /* 
      Essa parte do código checa se a posição x atual da barreira é menor
      do que o negativo da sua largura,
      ou seja, checa se uma barreira já saiu totalmente da área do jogo.

      A extremidade esquerda do jogo tem o x como sendo 0. 
      Suponha que a barreira tem como largura 100.
      Se ela estiver 50 para fora do jogo (lado esquerdo),
      então o seu x será -50. O if acima dará falso, 
      pois -50 não é menor que -100 . Já se estiver, 
      por exemplo, -101 para fora, quer dizer que desapareceu totalmente da tela do jogo,
      pois -101 é menos que -100. Nesse caso, o if acima será verdadeiro, como queríamos.

      Se ela tiver saído, como o intuito de reutilizá-la,
      será preciso colocá-la no lado direito, ou seja, no final. 
      Nessa parte é sorteada novamente a abertura. Com isso, as barreiras ficam em loop.
      */
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length);
        par.sortearAbertura();
      }

      const meio = largura / 2;
      const cruzouOMeio =
        par.getX() + deslocamento >= meio && par.getX() < meio;
      if (cruzouOMeio) notificarPonto();
    });
  };
}

function Passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "passaro");
  this.elemento.src = "imgs/passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px")[0]);
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  window.onkeydown = (e) => (voando = true);
  window.onkeyup = (e) => (voando = false);

  this.animar = () => {
    // se ele estiver voando "true" sobe 8px para cima, se voando for falso ele decrementa 5px para baixo
    const novoY = this.getY() + (voando ? 8 : -5);
    const alturaMaxima = alturaJogo - this.elemento.clientHeight;

    if (novoY <= 0) {
      this.setY(0);
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else {
      this.setY(novoY);
    }
  };

  // estou definindo a altura inicial do passaro no jogo
  this.setY(alturaJogo / 2);
}

/*
 *
 * Definindo o progresso do jogo
 *
 */

function Progresso() {
  this.elemento = novoElemento("span", "progresso");
  this.atualizarPontos = (pontos) => {
    this.elemento.innerHTML = pontos;
  };
  this.atualizarPontos(0);
}

// const barreiras = new Barreiras(700, 1200, 200, 400);
// const passaro = new Passaro(700);

// const areaDoJogo = document.querySelector("[wm-flappy]");
// areaDoJogo.appendChild(passaro.elemento);
// areaDoJogo.appendChild(new Progresso().elemento);
// barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.elemento));

// setInterval(() => {
//   barreiras.animar();
//   passaro.animar();
// }, 20);

/*
 *
 * colisão dos objetos
 *
 */
function estaoSobrepostos(elementoA, elementoB) {
  const a = elementoA.getBoundingClientRect();
  const b = elementoB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

  return horizontal && vertical;

}

function colidiu(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach(pardeBarreiras => {
    if(!colidiu) {
      const superior = pardeBarreiras.superior.elemento;
      const inferior = pardeBarreiras.inferior.elemento;
      colidiu = estaoSobrepostos(passaro.elemento, superior) 
        || estaoSobrepostos(passaro.elemento, inferior);

    }
  })
  return colidiu
}


function FlappyBird() {
  let pontos = 0;

  const areaDoJogo = document.querySelector('[wm-flappy]');
  const altura = areaDoJogo.clientHeight;
  const largura = areaDoJogo.clientWidth;

  const progresso = new Progresso()
  const barreiras = new Barreiras(altura, largura, 200, 400, 
      () => progresso.atualizarPontos(++pontos));
  const passaro = new Passaro(altura)

  areaDoJogo.appendChild(progresso.elemento);
  areaDoJogo.appendChild(passaro.elemento)
  barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

  this.start = () => {
    // loop do jogo

    const temporizador = setInterval(() => {
      barreiras.animar();
      passaro.animar();

      if(colidiu(passaro, barreiras)) {
        clearInterval(temporizador);
        
      }
    }, 20)
  }
}

new FlappyBird().start();