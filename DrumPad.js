const drumPads = [
    '1', '2', '3', '4',
    'q', 'w', 'e', 'r',
    'a', 's', 'd', 'f',
    'z', 'x', 'c', 'v',
];

const drums = document.querySelectorAll('.pad');

drums.forEach(drumElem =>{
    drumElem.addEventListener('click', () => playDrum(drumElem))
})



//console.log(drums)

    playDrum = (drumElem) => {
    const drumSrc = document.getElementById(drumElem.dataset.drum);
    drumSrc.currentTime = 0;
    drumSrc.play();


}