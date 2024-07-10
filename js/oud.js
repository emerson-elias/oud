console.log("======= HELLO CURIOUS DEVELOPER, WELCOME ;) =======")

//====================================================================================//

              /* SCRIPT PARA EXIBIR/OCUTAR A NAVBAR AO CLICAR */

let li = [...document.querySelectorAll('li')]

li.map((elementos) => {
    const menu_bar = document.getElementById('active-bars')
    const burgue = document.getElementById('bars')

    elementos.addEventListener("click", () => {
        menu_bar.classList.toggle('collapse-true')
        burgue.classList.toggle('burguer-ocult')
    })
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

                /* EFEITO DE CIRCULO QUE SEGUE O CURSOR DO MOUSE */

const cursor = document.getElementById('cursor')

    document.addEventListener('mousemove', (e)=> {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })


//====================================================================================//

                /* SCRIPT PARA ACESSO RÁPIDO AO EMAIL */

const ancora_email = document.getElementById('email')

ancora_email.addEventListener('click', () => {
        const email = 'emersonees808@gmail.com'
        const subject = 'Vamos trabalhar juntos :)'
        const body = 'Olá Emerson Elias.\n\nVi seus projetos no seu portifólio e gostaria de saber mais sobre suas habilidades, vamos trabalhar juntos?.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
        
        window.location.href = mailtoLink
    })