console.log("======= HELLO CURIOUS DEVELOPER, WELCOME ;) =======")

let li = [...document.querySelectorAll('li')]

li.map((elementos) => {
    const menu_bar = document.getElementById('active-bars')
    const burgue = document.getElementById('bars')

    elementos.addEventListener("click", () => {
        menu_bar.classList.toggle('collapse-true')
        burgue.classList.toggle('burguer-ocult')
    })
})


const know = document.getElementById('know')

know.addEventListener('click',()=>{
    console.log(know)
})


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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
