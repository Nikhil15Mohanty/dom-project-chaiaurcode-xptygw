const buttons = document.querySelectorAll('.button');

buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    switch(e.target.id){
      case 'grey':
        document.body.style.backgroundColor = e.target.id;
        document.body.style.color="#fff";
        break;
      case 'white':
        document.body.style.backgroundColor = e.target.id;
        document.body.style.color="#212121";
        break;
      case 'blue':
        document.body.style.backgroundColor = e.target.id;
        document.body.style.color="#fff";
        break;
      case 'yellow':
        document.body.style.backgroundColor = e.target.id;
        document.body.style.color="#212121";
    }
  })
})
