// var qoute=[

//     {qoute: " “Be yourself; everyone else is already taken.” ",
//     Author: "<-- Oscar Wilde>"},

//     {qoute: " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
//     Author: "<-- Marilyn Monroe>"},

//        {
//         qoute: " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",

//         Author: "<-- Bernard M. Baruch>"
//     },
//        {
//         qoute: " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",

//         Author: "<--― Dr. Seuss>"
//     },
// ]
// function getQoutes() {

//     var num = Math.floor(Math.random() * qoute.length)
//     console.log(num);

//      document.getElementById("qoute").innerHTML = qoute[num].qoute;
//     document.getElementById("auther").innerHTML = qoute[num].Author ;

// } 

 

// ===================================================================================


var qoute = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        Auther: "-- Oscar Wilde"
    },

    {
        qoute: "'“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”'",
        Auther: "-- Marilyn Monroe"
    },
    {
        qoute: "'“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”'",
        Auther: "-- Bernard M. Baruch"
    },
    {
        qoute: " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        
        Author: "<--― Dr. Seuss>"
    },

]


function getRandomQuote() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}





// var quotes = [
//     "Quote 1",
//     "Quote 2",
//     "Quote 3",
//     "Quote 4",
//     "Quote 5"
//   ];
  
//   var previousIndex = -1;
  
//   function getRandomQuote() {
//     var index = Math.floor(Math.random() * quotes.length);
//     while (index === previousIndex) {
//       index = Math.floor(Math.random() * quotes.length);
//     }
//     previousIndex = index;
//     return quotes[index];
//   }
  
//   function displayQuote() {
//     var quote = getRandomQuote();
//     console.log(quote);
//   }
  
//   document.getElementById("my-button").addEventListener("click", displayQuote);
  
  