export default function appForMedia(){
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




