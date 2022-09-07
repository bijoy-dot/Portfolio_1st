const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions(){
    // TODO: button click active class
    for (let i = 0; i <sectBtn.length; i++) {
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }
    // ! selection active btn
    // allSections.addEventListener('click', (e) =>{
    //     const id = e.target.dataset.id;
    //     if(id){
    //         sectBtns.forEach((btn) =>{
    //             btn.classList.remove('active');
    //         })
    //         e.target.classList.add('active')

    //         section.forEach((section) =>{
    //             section.classList.remove('active');
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })
    allSections.forEach((section) =>
    section.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        secBtns.forEach((btn) => {
        btn.classList.remove("active");
        });
        e.target.classList.add("active");
        section.forEach((section) => {
        section.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
    })
);
}
pageTransitions();