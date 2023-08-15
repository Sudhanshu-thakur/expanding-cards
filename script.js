const panels = document.querySelectorAll('.panel')
// console.log(panels[0])
panels.forEach(  hello=>{
    hello.addEventListener( 'click',()=>{
        removeActiveClasses()
        hello.classList.add('active')

    }

    )

}
)
function removeActiveClasses() {
    panels.forEach( (hello) => {
        hello.classList.remove('active');
    }
    )
}

const menu = document.querySelector('.menu');
const menuReveal = document.querySelector('.menu-click');

menu.addEventListener('click', revealMenu);

function revealMenu() {
    if (menuReveal.classList.contains('reveal')) {
        menuReveal.classList.remove('reveal');
    } else {
        menuReveal.classList.add('reveal');
    }
}


