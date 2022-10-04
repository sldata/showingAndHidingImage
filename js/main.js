const item1 = document.querySelector(".item1")
const button = document.querySelector('button')
const arrow = document.querySelector('.fas')


const showImage = () =>{
    item1.classList.toggle('hide')
   if(item1.classList.contains('hide')){
    arrow.style.transform='rotate(180deg)'
} else{
    arrow.style.transform='rotate(0deg)'
  }

}

button.addEventListener('click', showImage)

