//==========  Quando a página for carregada, rola para o topo  =======================//

window.onload = () => { 
    window.scrollTo(0, 0)
}

//====================================================================================//

              /* SCRIPT PARA EXIBIR/OCUTAR A NAVBAR AO CLICAR */

const elements = {
    ancora: document.getElementById('ancora'),
    b1: document.getElementById('b-one'),
    b2: document.getElementById('b-dwo'),
    b3: document.getElementById('b-there'),
    animate_one: document.getElementById('animate-one'),
    animate_dwo: document.getElementById('animate-dwo'),
    animate_there: document.getElementById('animate-there'),
    animate_four: document.getElementById('animate-four'),
    burguer: document.getElementsByClassName('burguer')[0],
    liItems: [...document.querySelectorAll('li')],
}

function toggleClasses() {
    const { ancora, b1, b2, b3, animate_one, animate_dwo, animate_there, animate_four, burguer } = elements

    ancora.classList.toggle('collapse-true')
    b1.classList.toggle('b-one')
    b2.classList.toggle('b-dwo')
    b3.classList.toggle('b-there')
    animate_one.classList.toggle('animate-link-bar')
    animate_dwo.classList.toggle('animate-link-bar')
    animate_there.classList.toggle('animate-link-bar')
    animate_four.classList.toggle('animate-link-bar')
    burguer.classList.toggle('burguer-aux')
}

elements.liItems.forEach((item) => {
    item.addEventListener("click", toggleClasses)
})

//====================================================================================//

                /* EFEITO DE BLUR NA NAVBAR AO ROLAR O SCROLL DO MOUSE */

window.addEventListener("scroll", () => {
    const scroll_Y = window.scrollY
    const header = document.getElementById('header')
    const navbar = document.getElementById('nav')
    const topo = document.getElementById('topo')

    navbar.classList.toggle('navbar_aux', scroll_Y > 100)
    header.classList.toggle('header_aux', scroll_Y > 150)

    if (scroll_Y > 250){
        topo.style.opacity = '1'
        
        topo.addEventListener('click', () => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })

    }else{
        topo.style.opacity = '0'
    }

})

//====================================================================================//

                /* EFEITO DE SUAVIDADE AO CLICAR NOS LIKES "LI" */

document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (el) {
        el.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


//====================================================================================//

     /* EFEITO DE CIRCULO QUE SEGUE O CURSOR DO MOUSE E OCULTA QUANDO SAI DA TELA */

const cursor = document.getElementById('cursor')

    document.addEventListener('mousemove', (e)=> {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
            cursor.style.display = 'none'
        }
    })

    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block'
    })
    
//=== Esconde o cursor quando o mouse passa sobre um elemento <a> ====================//
    
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('mouseover', () => {
             cursor.style.display = 'none'
        })

        anchor.addEventListener('mouseout', () => {
            cursor.style.display = 'block'
        })
    })

//====================================================================================//

                /* SCRIPT PARA ACESSO RÁPIDO AO EMAIL OU TEL*/

const ancora_email = document.getElementById('email')

    ancora_email.addEventListener('click', () => {
        const email = 'emersonees808@gmail.com'
        const subject = 'Vamos trabalhar juntos :)'
        const body = 'Olá Emerson Elias.\n\nVi seus projetos no seu portifólio e gostaria de saber mais sobre suas habilidades, vamos trabalhar juntos?.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
        
        window.location.href = mailtoLink
    })

const ancora_tel = document.getElementById('tel')

    ancora_tel.addEventListener('click', () => {
        window.location.href = "tel:+5594991171807"
    })

//====================================================================================//

            /* EASTER EGGS AO CLICAR */
            
const easter_eggs = document.getElementsByClassName('click')[0];

    easter_eggs.addEventListener('click', () => {
        Swal.fire({
            imageUrl: 'img/cookie.jpg',
            imageWidth: 500,
            imageHeight: 500, 
        })
    })

//====================================================================================//

            /* PAUSE PARA ANIMAÇÃO */

const pauseElements = document.querySelectorAll('.tools-links')

    pauseElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            pauseElements.forEach(el => el.classList.add('paused'))
        })

        element.addEventListener('mouseleave', () => {
            pauseElements.forEach(el => el.classList.remove('paused'))
        })
    })

//====================================================================================//

            /* SCRIPT PARA EXIBIR O GIF */

const tools = {
    bodyAnimate: document.querySelector('.tecnology-animate'),   
    tecnologyButton: document.getElementById('tecnology-button'),
    roll: document.getElementById('roll'),
    textTool: document.getElementById('tools-text'),
    gif: document.getElementById('gif')
}

function Classes_ON() {
    tools.roll.classList.toggle('roll-aux')
    tools.tecnologyButton.classList.toggle('tecnology-button-aux')
    tools.bodyAnimate.classList.toggle('tecnology-animate-aux')
    tools.textTool.classList.toggle('tools-text-aux')
    tools.gif.classList.toggle('gif-aux')
}

tools.tecnologyButton.addEventListener('click', Classes_ON)
