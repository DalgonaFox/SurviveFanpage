// document.addEventListener("DOMContentLoaded", function () {
//   window.scrollTo(0, 0);
// });

//Constantes
const sidebar = document.querySelector('.sidebar');
const dialog = document.querySelector('dialog');
const faders = document.querySelectorAll('.fade-in');
const faderscomeco = document.querySelectorAll('.fade-comeco');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const mensagem = document.querySelector('dialog p');
const navmobile = document.querySelectorAll('.sidebar li a');
const fechanav = document.querySelector('#fechanav');
const menubtn = document.querySelector('#menu');
const fechamodalbtn = document.querySelector('#fechaModal');
const limpar = document.querySelector('#limpar');
const enviar = document.querySelector('#enviar');
const titulocard = document.querySelector('.titulos h4');
const embedcard = document.querySelector('.frames iframe');
const membroContainer = document.querySelector('#container-membros');
const tabela = document.querySelector('table');
const musicasContainer = document.querySelector('#musicas-container');
const animesContainer = document.querySelector('.animes');
const videosContainer = document.querySelector('.carrossel')

let scrollAntes = window.scrollY;
let direcaoScroll = 'baixo';

//Listeners
navmobile.forEach(nav => {
    nav.addEventListener("click", fecharMenu);
})
fechanav.addEventListener("click", fecharMenu);
menubtn.addEventListener("click", mostrarMenu);
fechamodalbtn.addEventListener("click", fechar);
limpar.addEventListener("click", LimpaForm);
enviar.addEventListener("click", EnviaForm);


//Funções
function mostrarMenu() {
    sidebar.style.transform = 'translateX(0)';
}

function fecharMenu() {
    sidebar.style.transform = 'translateX(100%)';
}

function EnviaForm() {
    inputs.forEach(input => {
        if (input.value != '' && textarea.value != '') {
            mensagem.innerHTML = 'Formulário enviado com sucesso!';
        } else {
            mensagem.innerHTML = 'Preencha o formulário antes de enviar...';
        }
    })
    dialog.showModal();
    dialog.style.display = 'flex';
}

function fechar() {
    dialog.close();
    dialog.style.display = 'none';
}

function LimpaForm() {
    inputs.forEach(input => {
        input.value = '';
    })
    textarea.value = '';
}

membros.forEach(membro => {
    const membrodiv = document.createElement('div');
    membrodiv.classList.add('membro');

    membrodiv.innerHTML = `
    <div class="membroimg">
        <img src="imagens/${membro.imagem}" alt="${membro.alt}">
    </div>
    <div class="membrotxt">
        <div class="membrotitle">
            <h3>${membro.nome}</h3>
            <div>
                <a href="https://x.com/SSTPofficial" target="_blank">
                    <svg class="icon">
                        <use xlink:href="#twitter"></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com/survivesaidtheprophet/" target="_blank">
                    <svg class="icon">
                        <use xlink:href="#instagram"></use>
                    </svg>
                </a>
            </div>
        </div>
        <h4>${membro.papel}</h4>
        <p>${membro.descricao}</p>
        <button> Veja mais </button>
    </div>`

    membroContainer.appendChild(membrodiv);
})  

shows.forEach(show => {
    const tabelarow = document.createElement('tr');

    tabelarow.innerHTML = `
    <td>${show.data}</td>
    <td>${show.titulo}</td>
    <td>${show.palco}</td>
    <td>${show.local}</td>
    <td>
        <a href="${show.link}"
            target="_blank">
            <svg class="icon">
                <use xlink:href="#link"></use>
            </svg>
        </a>
        <a href="${show.ticket}" target="_blank">
            <svg class="icon">
                <use xlink:href="#ticket"></use>
            </svg>
        </a>
    </td>`

    tabela.appendChild(tabelarow);
}) 

musicas.forEach(musica => {
    const musicacard = document.createElement('div');
    musicacard.classList.add('albumcard')

    musicacard.innerHTML = `
    <div class="albumcontent">
    <div class="albumimg">
        <img src="imagens/${musica.imagem}" alt="${musica.alt}">
    </div>
    <div class="albuminfo">
        <div class="albumtxt">
            <h6>${musica.nome}</h6>
            <p>${musica.data}</p>
            <p>${musica.visualizacoes}</p>
        </div>
        <div class="albumbotoes">
            <a href="${musica.youtube}" target="_blank">
                <svg class="icon fa-youtube-play">
                    <use xlink:href="#youtube"></use>
                </svg>
            </a>
            <a href="${musica.spotify}"
                target="_blank">
                <svg class="icon fa-spotify">
                    <use xlink:href="#spotify"></use>
                </svg>
            </a>
            <a href="${musica.comprar}" target="_blank">
                <button>Comprar</button>
            </a>
        </div>
    </div>
    </div>
    <audio src="audio/${musica.audio}.mp3" controls></audio>`

    musicasContainer.appendChild(musicacard);
})  

animes.forEach(anime => {
    const animecard = document.createElement('div');
    animecard.classList.add('membro')

    animecard.innerHTML = `
    <div class="membroimg">
        <img src="imagens/${anime.imagem}"
            alt="">
    </div>
    <div class="membrotxt">
        <h4>${anime.titulo}</h4>
        <p>${anime.musica1}</p>
        <p>${anime.musica2}</p>
    </div>`

    animesContainer.appendChild(animecard);
})  


videoclipes.forEach(video => {
    const item = document.createElement('div');
    item.classList.add('item')

    item.innerHTML = `
    <div class="item">
        <iframe src="https://www.youtube.com/embed/${video.embed}" frameborder="0"></iframe>
        <h4>${video.titulo}</h4>
    </div>`

    videosContainer.appendChild(item);
})

const carrossel = document.querySelector('.videos');
  const btnEsquerda = document.querySelector('.seta.esq');
  const btnDireita = document.querySelector('.seta.dir');

  let scroll = 0;
  const passo = 320; // largura dos vídeos + espaçamento

  btnDireita.addEventListener('click', () => {
    const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
    scroll = Math.min(scroll + passo, maxScroll);
    carrossel.style.transform = `translateX(-${scroll}px)`;
  });

  btnEsquerda.addEventListener('click', () => {
    scroll = Math.max(scroll - passo, 0);
    carrossel.style.transform = `translateX(-${scroll}px)`;
});


// const appearOptions = { 
//     threshold: 0.01 
// }

// window.addEventListener('scroll', () => {
//     const scrollAgora = window.scrollY;
//     direcaoScroll = (scrollAgora > scrollAntes) ? 'baixo' : 'cima';
//     scrollAntes = scrollAgora;
// })

// const appearOnScroll = new IntersectionObserver(function (entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && direcaoScroll === 'baixo') {
//             entry.target.classList.add('appear');
//             entry.target.classList.remove('disappear');
//         }
//     })
// }, appearOptions);

// const disappearOnScroll = new IntersectionObserver(function (entries) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting && direcaoScroll === 'cima') {
//             entry.target.classList.remove('appear');
//             entry.target.classList.add('disappear');
//         }
//     })
// }, appearOptions);

// const appearComeco = new IntersectionObserver(function (entries) {
//     entries.forEach(entry => {
//         entry.target.classList.add('appear');
//     })
// }, appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
//     disappearOnScroll.observe(fader);
// })

// faderscomeco.forEach(comeco => {
//     appearComeco.observe(comeco);
// })

function carrossel(par_ind) {
    embedcard.setAttribute('src', 'https://www.youtube.com/embed/' + videoclipes[par_ind]['embed'])
    titulocard.setAttribute('alt', videoclipes[par_ind]['titulo'])
    titulocard.innerHTML = videoclipes[par_ind]['titulo']
}

// carrossel(0)

function proximaMusica() { 
    num_card++
    if (num_card == videoclipes.length) {
        num_card = 0
    }
    carrossel(num_card)
}

function musicaAnterior() {
    num_card--
    if (num_card < 0) {
        num_card = (videoclipes.length - 1)
    }
    carrossel(num_card)
}