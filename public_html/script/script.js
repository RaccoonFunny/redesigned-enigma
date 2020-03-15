let exit = document.querySelector('[name="exit"]'),
    donload = document.querySelector('[name="donload"]'),
    buttonBox = document.querySelector('#buttonbox');

console.log(exit,donload,buttonBox);

exit.addEventListener("click",(e)=>{
  buttonBox.style.display= "none";
})

let deferredPrompt;

donload.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  })
});

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
  buttonBox.style.display= "none";
});
