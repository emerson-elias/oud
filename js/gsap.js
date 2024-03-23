
const box_1 = document.getElementById('box-1')


const div_pai = document.getElementById('pai')


gsap.to(box_1,{
    x:250,
    duration:5,
 

    scrollTrigger:{
        trigger: div_pai,
        start: '100px 200px',
        end: 'botton center',
        markers: true,
        scrub: true
    }
    

})