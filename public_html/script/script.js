let exit = document.getElementsByName('exit'),
    donload = document.getElementsByName('donload'),
    buttonBox = document.getElementById('buttonbox');

exit.onclick = (event)=>{
  buttonBox.style.display = none;
}

console.log(CacheStorage.keys());
