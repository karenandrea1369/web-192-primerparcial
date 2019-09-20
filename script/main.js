function handleLoad(){

    function handleRandom(){
        var numRan = Math.floor(Math.random()*(360));
        var arro = document.querySelector('.poten__arrow');
        arro.style.transform = 'rotate(' + numRan + 'deg)';
        console.log(numRan);
    }

    setInterval(handleRandom, 2000);

}



window.addEventListener('load', handleLoad);
