// const TypeWriter = function (txtElement, words, wait = 3000) {

//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';

//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // TYPE METHOD
// TypeWriter.prototype.type = function () {

//     //current index of word
//     const current = this.wordIndex % this.words.length;
//     //get full text of current word
//     const fulltxt = this.words[current];

//     //Check if Deleting
//     if (this.isDeleting) {

//         //remove a character
//         this.txt = fulltxt.substring(0, this.txt.length - 1);


//     } else {

//         //add a character
//         this.txt = fulltxt.substring(0, this.txt.length + 1);


//     }

//     // Insert txt into  element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // //initial Type Speed
//     // let typeSpeed = 300;
//     // if(this.isDeleting){
//     //     typeSpeed /= 2;
//     // }
//     // //if word is complete
//     // if(!this.isDeleting && this.txt == fulltxt){

//     //     // Make a pause at end
//     //     typeSpeed = this.wait;
//     //     //Set delete to true
//     //     this.isDeleting = true;
//     // }else if(this.isDeleting && this.txt === ''){

//     //     this.isDeleting = false;
//     //     //move to next word
//     //     this.wordIndex++;

//     //     typeSpeed = 500;


//     // }

//     //set inital speed
//     let typeSpeed = 300;
//     if (this.Deleting) {
//         //if deleting do it fast, i.e reduce the type speed time
//         typeSpeed /= 2;
//     }

//     //if typing is complete and we reached the completing of else block then we need to restart

//     if (!this.isDeleting && this.txt == fulltxt) {

//         typeSpeed = this.wait;
//         // now we move to next word

//         this.isDeleting = true;

//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.wordIndex++;
//         typeSpeed = 500;

//     }


//     setTimeout(() => this.type(), typeSpeed);
//     // console.log('Hello');
// }




//ES6 class

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {

        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';

        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;

    }

    type() {

        //current index of word
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fulltxt = this.words[current];

        //Check if Deleting
        if (this.isDeleting) {

            //remove a character
            this.txt = fulltxt.substring(0, this.txt.length - 1);


        } else {

            //add a character
            this.txt = fulltxt.substring(0, this.txt.length + 1);


        }

        // Insert txt into  element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // //initial Type Speed
        // let typeSpeed = 300;
        // if(this.isDeleting){
        //     typeSpeed /= 2;
        // }
        // //if word is complete
        // if(!this.isDeleting && this.txt == fulltxt){

        //     // Make a pause at end
        //     typeSpeed = this.wait;
        //     //Set delete to true
        //     this.isDeleting = true;
        // }else if(this.isDeleting && this.txt === ''){

        //     this.isDeleting = false;
        //     //move to next word
        //     this.wordIndex++;

        //     typeSpeed = 500;


        // }

        //set inital speed
        let typeSpeed = 300;
        if (this.Deleting) {
            //if deleting do it fast, i.e reduce the type speed time
            typeSpeed /= 2;
        }

        //if typing is complete and we reached the completing of else block then we need to restart

        if (!this.isDeleting && this.txt == fulltxt) {

            typeSpeed = this.wait;
            // now we move to next word

            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;

        }


        setTimeout(() => this.type(), typeSpeed);

    }
}


// Init on DOM LOAD
document.addEventListener('DOMContentLoaded', init);

//init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));

    const wait = txtElement.getAttribute('data-wait');
    //initialize type writer
    new TypeWriter(txtElement, words, wait);
}
