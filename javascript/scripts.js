const sidebar = document.querySelector('.sidebar');
const dialog = document.querySelector('dialog')
const faders = document.querySelectorAll('.fade-in')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const mensagem = document.querySelector('dialog p')

function mostrarMenu() {
    sidebar.style.transform = 'translateX(0)';
}

function fecharMenu() {
    sidebar.style.transform = 'translateX(100%)';
}

function EnviaForm() {
    inputs.forEach(input => {
        if (input.value != '' && textarea.value != '') {
            mensagem.innerHTML = 'Formulário enviado com sucesso!'
        } else {
            mensagem.innerHTML = 'Preencha o formulário antes de enviar...'
        }
    })
    dialog.showModal()
    dialog.style.display = 'flex'
}

function fechar() {
    dialog.close()
    dialog.style.display = 'none'
}

function LimpaForm() {
    inputs.forEach(input => {
        input.value = ''
    })
    textarea.value = ''
}

const appearOptions = {
    threshold: 0.01
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})
