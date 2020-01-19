
//keymap for pads
const drumPads = [
    //key values
    '49', '50', '51', '52',
    '81', '87', '69', '82',
    '65', '83', '68', '70',
    '90', '88', '67', '86',
];

//load all pad divs into table
const drums = document.querySelectorAll('.pad');

const obj = []; // helper table to check loop values

//add mouse event to all pads
drums.forEach(drumElem =>{
    drumElem.addEventListener('click', () => playDrum(drumElem))
    obj.push(drumElem);//checking if everything is working
})

//play selected pad sample
playDrum = (drumElem) => {
    const drumSrc = document.getElementById(drumElem.dataset.drum);
    drumSrc.currentTime = 0;
    drumSrc.play();

}

//keyboard mapping
document.addEventListener('keydown', drumKey => {
    //reading keypressed code
    let key = event.keyCode || event.which;
    let keyVal = key.toString();
    //geting index value of selected pad in drumPads keymap table
    let keyIndex = drumPads.indexOf(keyVal);

    //console.log(`naciśnięto ${keyVal}`); // helper
    //console.log(`index ${keyVal}: ${keyIndex}`); // helper
    drums.forEach(pad =>{
        if(pad.classList!='pad')
        pad.classList="pad"
        })
    //comparing index value of pressed key with drums table

    for(i=0; i<drums.length; i++) {
        if(keyIndex==i){
            x=drums[i]; //helper variable for setting class style

            //setting pad class style for pressed key
            x.classList.add('active');

            //selecting proper sample
            const drumSrc = document.getElementById(drums[i].dataset.drum);
            drumSrc.currentTime = 0;
            drumSrc.play();

            //console.log(x);
            window.addEventListener('keyup', padOff =>{
            x.classList.remove('active');
            //console.log(x);

            })

        }


    }
}
);