let exit = document.getElementsByName('exit'),
    donload = document.getElementsByName('donload'),
    buttonBox = document.getElementById('buttonbox');

console.log(exit,donload,buttonBox);

exit.addEventListener("click",(e)=>{
  buttonBox.style.display= none;
})
