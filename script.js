let bar = document.querySelector('.fa-bars');
let nav = document.querySelector('.main_nav');
let bar2 = document.querySelector('.main_nav_cat_bars');
let features = document.querySelector('.features');
let company = document.querySelector('.company');

let links1;
let links2;

bar.addEventListener('click',(e)=>{
    nav.classList.add('show_nav');
    bar2.classList.add('span_show')
})

bar2.addEventListener('click',(e)=>{
    nav.classList.remove('show_nav');
    features.classList.remove('showlinks');

    bar2.classList.remove('span_show')

  if(links1){
    links1.classList.remove("showlinks")
  }
  if(links2){
    links2.classList.remove("showlinks")
  }
    
})

// features
features.addEventListener('click',function(e){
     links1 = e.currentTarget.children[1].children[0]

     links1.classList.toggle('showlinks')

    let up = e.currentTarget.children[0]
    up.classList.toggle("showlinks");
    
})
company.addEventListener('click',function(e){
     links2 = e.currentTarget.children[1].children[0]

     links2.classList.toggle('showlinks')
    let up = e.currentTarget.children[0]
    up.classList.toggle("showlinks");
})