function handleLoad(){

    function handleRandom(){
        var numRan = Math.floor(Math.random()*(360));
        var arro = document.querySelector('.poten__arrow');
        var text = document.querySelector('.grades');
        arro.style.transform = 'rotate(' + numRan + 'deg)';
        text.textContent = numRan;
    }

    setInterval(handleRandom, 2000);

}



window.addEventListener('load', handleLoad);
