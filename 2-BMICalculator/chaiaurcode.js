const form = document.querySelector('form');
const bmiGuide = document.querySelectorAll('.wt-guide')



form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  bmiGuide.forEach((bmi)=>bmi.style.color='black');
  //condition
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please eneter valid Height`;
  }
  else  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please eneter valid Weight`;
  }
  else{
    const result = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${result}</span>` ;
    
    yourWeightGuid(result);
  }
})

const yourWeightGuid = (result)=>{
  if(result <= 18.6){
      document.querySelector('#underWeight').style.color='green';
  }
  else if(result > 18.6 && result<=24.9){
    document.querySelector('#normalRange').style.color='green';
  }
  else{
    document.querySelector('#overWeight').style.color='green';
  }
}
