function appForMedia(){
  const menu = document.querySelector('.scrollBtn')
  const aside = document.querySelector('.aside')
  menu.addEventListener('click',function(){
    if(aside.style.display === "none"){
      aside.style.display = 'flex'
    }else{
      aside.style.display = 'none'
    }
  })
}


function closeAside(){
  const aside = document.querySelector('.aside')
  const screenWidth = window.innerWidth;
  if(screenWidth<767 ){
    aside.style.display = 'none'
  }
}

export {appForMedia,closeAside}



