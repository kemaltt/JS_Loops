//LOOPS============================================

//Lev1===========================

//Lev1_1--------------------

let num = 0
for (let i = 1; i < 11; i++) {
    // console.log('hello World', num = i);
}

//Lev1_2--------------------

let arr = [];
for (let i = 0; i < 11; i++) {
    arr.push(i)
}
// console.log(arr);

//Lev1_4--------------------

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}

//Lev1_6--------------------

const retArray = [];
for (let i = 1; i < 101; i++) {
    retArray.push(`image_00${i}.jpg`)
}
// console.log(retArray);


//Lev1_7--------------------

// let index = 1;

// do {
//     console.log('The number is', index);
//     index++;
// } while (index < 6)

//Lev1_8--------------------

let index1 = 0;

do {
    // console.log('The number is', index1);
    index1 += 2;
} while (index1 < 20)


//Lev1_9-------------------

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

const input = document.getElementById('input_text')
const output = document.getElementById('output')

const print = () => {
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        if (words[i].length == input.value) {
            output.innerHTML += `<p>${ words[i]}</p>`
        }
    }
}


//Lev2===========================

//Lev2_1------------------

const imageArray = () => {
    const returnArray = [];
    for (let i = 1; i < 101; i++) {

        if (i < 10) {
            returnArray.push(`image_00${i}.jpg`)
        } else {
            returnArray.push(`image_00${i}.jpg`)
        }

    }
    // console.log(returnArray);

}
imageArray();

//Lev2_2------------------

// const input2 = document.getElementById('input_number')
// const output2 = document.getElementById('output_loop')

// const loopMe = () => {

//     if (input2.value == 0) {
//         output2.innerHTML = 'Lp'
//     } else {

//         let arr = '';
//         for (let i = 1; i < input2.value; i++) {
//             arr += 'o'
//         }
//         output2.innerHTML = `<p>L${arr}p</p>`
//     }

// }


//Lev3===========================

//Lev3_1-----
let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil",`

const trennen = () => {
    const arr = [];
    for (let i = 0; i < text.length; i += 100) {
        arr.push(text.slice(i, i + 100))
    }
    // console.log(arr);
}

trennen()

//Lev3_2-------------------------
const output3 = document.getElementById('output_teil')
let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
    // console.log(numArr[i]);
    for (let n = 0; n < 100; n++) {
        if (numArr[i] % n == 0 && n != 1 && n != numArr[i]) {
            output3.innerHTML += `<p>${numArr[i]} lässt sich durch ${n} teilen! Das Ergebnis ist ${numArr[i]/n}.</p>`
        }
    }
}

//Lev3_3-------------------------
const input2 = document.getElementById('input_number')
const output2 = document.getElementById('output_loop')

const loopMe = () => {

    if (input2.value == 0) {
        output2.style.color = 'red'
        output2.innerHTML = 'ERROR'
    } else if (input2.value % 2 == 0) {
        let arr = '';
        for (let i = 0; i < input2.value; i++) {
            arr += 'o'
        }
        output2.style.color = 'green'
        output2.innerHTML = `<p>L${arr}p</p>`
    } else if (input2.value % 2 == 1) {
        arr = '';
        for (let i = 0; i < input2.value; i++) {
            if (i % 2 == 0) {
                arr += 'o'
            } else {
                arr += '0'
            }
        }
        output2.style.color = 'green'
        output2.innerHTML = `<p>L${arr}p</p>`
    }

}

//Lev3_4-------------------------

const inputNum = document.getElementById('number')
const inputErste = document.getElementById('erste_zahl')
const inputZweite = document.getElementById('zweite_zahl')
const summe = document.getElementById('summe')

const count = () => {


    if (inputNum.value == '') {
        alert('Gib bitte eine Zahl ein!')
    } else if (inputErste.value == inputZweite.value) {
        alert(' Dieselbe Zahl wurde gewählt')
    } else {
        let count = 0;
        for (let i = 1; i < inputNum.value; i++) {
            // console.log(i);
            if (i % inputErste.value == 0 || i % inputZweite.value == 0) {
                console.log(i);
                count += i
            }
        }
        summe.innerHTML = count

    }

}