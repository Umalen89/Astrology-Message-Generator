// Arrays created with different sections of the random sentence.

const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius',  'Capricorn', 'Aquarius', 'Pisces'];
const date = ['March 21 to April 19', 'April 20 to May 20', 'May 21 to Jun 20', 'Jun 21 to Jul 22', 'Jul 23 to Aug 22', 'Aug 23 to Sep 22', 'Sep 23 to Oct 22', 'Oct 23 to Nov 21', 'Nov 22 to Dec 21', 'Dec 22 to Jan 19', 'Jan 20 to Feb 18', 'Feb 19 to March 20'];
const link = ['is predicted to be for newborns between ', 'for people born between the dates ', 'is speculated to be from ', 'will affect people born from ', 'most likely but no accuratly from ', 'could be , not science in it, for people born from '];
const ending = ['lucky people.', 'if you believe on this stuff anyway.', 'what a load of bull***.', ' this is based on the lunar calendar.', ' so be responsible and plan ahead your baby!.', 'what a great thing to be!!.']

// arrays created to register the history of used Zodiac signs and end sentence
let lastNumb = [];

// funtions to ensure there is a different Zodiac sign and end of sentence
const randNumCheck = () =>{
    do {
        newNumb = Math.floor(Math.random() * 12);
    } while ((lastNumb.indexOf(newNumb)) != -1)
    lastNumb.push(newNumb);
    return newNumb;
}

const randomMessage = () =>{
    const signNumb = randNumCheck();
    const randlink = Math.floor(Math.random() * 6);
    const randEnd = Math.floor(Math.random() * 6);

    const message = sign[signNumb] + ' ' + link[randlink] + ' ' + date[signNumb] + ' ' + ending[randEnd];
    return message;
}

console.log(randomMessage());
console.log(' ----============---');
console.log(randomMessage());
console.log(' ----============---');
console.log(randomMessage());
console.log(' ----============---');
console.log(randomMessage());
console.log(' ----============---');