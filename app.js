document.addEventListener('DOMContentLoaded', function(){

  const jsConfetti = new JSConfetti();
  
  const yes_btn = document.querySelector('#siBtn');

  const confettiValues = { 
    emojis: ['🌈', '💋', '😘', '😍', '🥰', '💖', '💗'],
    emojiSize: 100,
    confettiNumber: 70,
  }



  yes_btn.addEventListener('click', repitConfetti);

  function repitConfetti() {
    yesEvents();
    setInterval(yesEvents, 2500)
  }


  function yesEvents() {
    if(screen.width > 430) {
      confettiValues.emojiSize = 40;
    } else {
      confettiValues.emojiSize = 100;
    }
    jsConfetti.addConfetti(confettiValues);
  }





})