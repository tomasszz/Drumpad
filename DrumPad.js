const drumPads = [
    //key values
    '49', '50', '51', '52',
    '81', '87', '69', '82',
    '65', '83', '68', '70',
    '90', '88', '67', '86',
];

const drums = document.querySelectorAll('.pad');
const obj = [];
drums.forEach(drumElem =>{
    drumElem.addEventListener('click', () => playDrum(drumElem))
    obj.push(drumElem);
})

document.addEventListener('keydown', drumKey => {
    let key = event.keyCode || event.which;
    let keyVal = key.toString();
    let keyIndex = drumPads.indexOf(keyVal);
    console.log(`naciśnięto ${keyVal}`);
    console.log(`index ${keyVal}: ${keyIndex}`);

    for(i=0; i<drums.length; i++) {
        if(keyIndex==i){
            const drumSrc = document.getElementById(drums[i].dataset.drum);
            drumSrc.currentTime = 0;
            drumSrc.play();
        }
    }1
}

)

//console.log(drums)

    playDrum = (drumElem) => {
    const drumSrc = document.getElementById(drumElem.dataset.drum);
    drumSrc.currentTime = 0;
    drumSrc.play();



}