//==========  Quando a página for carregada, rola para o topo  =======================//
/*
window.onload = () => { 
    window.scrollTo(0, 0)
}*/

//====================================================================================//

              /* SCRIPT PARA EXIBIR/OCUTAR A NAVBAR AO CLICAR */

const elements = {
    ancora: document.getElementById('ancora'),
    b1: document.getElementById('b-one'),
    b2: document.getElementById('b-dwo'),
    b3: document.getElementById('b-there'),
    animate: [...document.querySelectorAll('#animate')],
    burguer: document.getElementsByClassName('burguer')[0],
    liItems: [...document.querySelectorAll('li')],
}

function toggleClasses() {
    const { ancora, b1, b2, b3, animate, burguer } = elements

    ancora.classList.toggle('collapse-true')
    b1.classList.toggle('b-one')
    b2.classList.toggle('b-dwo')
    b3.classList.toggle('b-there')
    animate.map((el) =>{
        el.classList.toggle('animate-aux')
    })
    burguer.classList.toggle('burguer-aux')
}

elements.liItems.forEach((item) => {
    item.addEventListener("click", toggleClasses)
})

//====================================================================================//

                /* EFEITO DE BLUR NA NAVBAR AO ROLAR O SCROLL DO MOUSE */

window.addEventListener("scroll", () => {
    const scroll_Y = window.scrollY
    const header = document.getElementsByTagName('header')[0]
    const topo = document.getElementById('topo')

    header.classList.toggle('header_aux', scroll_Y > 100)

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

     document.addEventListener('mousemove', (e) => {
         
         gsap.to(cursor, {
             duration: 0.3,
             x: e.clientX - cursor.offsetWidth / 2,
             y: e.clientY - cursor.offsetHeight / 2,
             ease: "power2.out"
         })
     })

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
            cursor.style.opacity = '0'
            cursor.style.transition = '0.1s ease'
        }else{
            cursor.style.opacity = '1'
            cursor.style.transition = '0.1s ease'
        }
    })

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1'
    })
    
//=== Esconde o cursor quando o mouse passa sobre um elemento <a> ====================//
    
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('mouseover', () => {
            gsap.to(cursor, {
                duration: 0.5,
                scale: '4',
                ease: "power2.out"
            })
        })

        anchor.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                duration: 0.5,
                scale: '1',
                ease: "power2.out"
            })
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
            imageUrl: 'assets/img/cookie.jpg',
            imageWidth: 400,
            imageHeight: 400, 
        })
    })

//====================================================================================//

            /* PAUSE PARA ANIMAÇÃO */
/*

            CÓDIGO AINDA EM TESTE, ESTÁ TENDO UNS TRAVAMENTOS NOS EVENTOS DE MOUSELEAVER COM O DOR CURSOR

const pauseElements = document.querySelectorAll('.tools-links')

    pauseElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            pauseElements.forEach(el => el.classList.add('paused'))
        })

        element.addEventListener('mouseleave', () => {
            pauseElements.forEach(el => el.classList.remove('paused'))
        })
    })
*/
//====================================================================================//

            /* SCRIPT PARA EXIBIR O GIF */

const tools = {
    bodyAnimate: document.querySelector('.tecnology-animate'),   
    tecnologyButton: document.getElementById('tecnology-button'),
    roll: document.getElementById('roll'),
    textTool: document.getElementById('tools-text'),
    gif: document.getElementById('gif'),
    svg: document.getElementsByClassName('animate-svg')[0]
}

function Classes_ON() {
    tools.roll.classList.toggle('roll-aux')
    tools.tecnologyButton.classList.toggle('tecnology-button-aux')
    tools.bodyAnimate.classList.toggle('tecnology-animate-aux')
    tools.textTool.classList.toggle('tools-text-aux')
    tools.gif.classList.toggle('gif-aux')
    tools.svg.classList.toggle('animate-svg-aux')
}

tools.tecnologyButton.addEventListener('click', Classes_ON)


//====================================================================================//

            /* SCRIPT PARA REPRODUZIR E CONTROLAR A MÚSICA   */

const sound = document.getElementsByClassName('sound')[0]
const audio = document.getElementById('audio')
const controls = document.getElementById('sound-controls')

    sound.addEventListener('click', () => {
        if(audio.paused){
            audio.play()
            controls.innerHTML = 'ON'
        }else{
            audio.pause()
            controls.innerHTML = 'OFF'
        }
    })

//====================================================================================//

             /* ANIMAÇÃO DOS ELEMENTOS CONFORME O CURSOR SE MOVIMENTA */

function animix_follow_cursor(container, el_first, el_second) {
    if (container && el_first && el_second) {
    // Movimentação do cursor
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect()

            const Width1 = el_first.offsetWidth / 2
            const Height1 = el_first.offsetHeight / 2

            const Width2 = el_second.offsetWidth / 2
            const Height2 = el_second.offsetHeight / 2

            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Primeira div segue o cursor imediatamente
            gsap.to(el_first, {
                duration: 0.3, 
                x: x - Width1,
                y: y - Height1,
                ease: "power1.out"
            })

            // Segunda div segue o cursor com atraso
            gsap.to(el_second, {
                duration: 0.6, 
                x: x - Width2,
                y: y - Height2,
                ease: "power1.out"
            })
        })

        // Reset da posição das imagens ao sair do contêiner
        container.addEventListener('mouseleave', () => {
            // Garantindo que ambas as divs voltem para (0, 0)
            gsap.to(el_first, {
                duration: 0.3, 
                x: 0,
                y: 0,
                ease: "power1.out"
            })

            // Adiciona um delay para o reset da segunda div, igual ao delay da animação de seguir
            gsap.to(el_second, {
                duration: 0.6, 
                x: 0,
                y: 0,
                ease: "power1.out"
            })
        })
    }
}


const layer_3 = document.getElementsByClassName('layer-3')[0]
const element_first = document.getElementById('magnect-1')
const element_second = document.getElementById('magnect-2')

animix_follow_cursor(layer_3, element_first, element_second)


const about_container = document.getElementsByClassName('btn-sobre-mim')[0]
const btn_one = document.getElementById('a_one')
const btn_dwo = document.getElementById('a_dwo')


animix_follow_cursor(about_container, btn_one, btn_dwo)
/* USEI ESSE SCRIPT PORQUE O <a href="#contatos"></a> NÃO ESTAVA FUNCIONANDO POR CONTA DA ANIMAÇÃO DO BOTÃO */

layer_3.addEventListener('click', () => {
    document.getElementById('contatos').scrollIntoView({ behavior: 'smooth' })
}) 