// var first = prompt("Write Your First Name ");
// var last = prompt("Write Your last Name");
// var fullName= first +  last;
// document.write("Full Name" + fullName)


// var first = prompt("Write Your Mobile Model");
// var a = first.length
// document.write("My Favrate Mobile Is" + " " + first + "<br>" + "Your Value Length is" + " " +  a)




// var cities = prompt("Write City Names");
// var arr = ["Karachi", "Peshawar", "Islamabad", "Faisalabad", "Gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         document.write("city has found")
//     }
//     else{
//         alert("City not Found")
//         break
//     }
// }



// var cities = prompt("Write City Names");
// cities = cities.toLowerCase()
// var arr = ["karachi", "peshawar", "islamabad", "faisalabad", "gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         alert("City has found")
//         break
//     }else{
//         alert("City has not found")
//         break
//     }

// }




// var cities = prompt("Write City Names");
// var first = cities.slice(0,1)
// first = first.toUpperCase()
// var other = cities.slice(1)
// other = other.toLowerCase()
// cities = first+other
// document.write(cities)

// var arr = ["Karachi", "Peshawar", "Islamabad", "Faisalabad", "Gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         alert("City has found")
//         break
//     }else{
//         alert("City has not found")
//         break
//     }

// }


// var str = prompt("Enter some text"); 
// var numChars = str.length; 
// for (var i = 0; i < numChars; i++) { 
//     if (str.slice(i, i + 2) === "  ") { 
//     alert("No double spaces!"); 
//     break;

//     } 
// }


// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"
// var index = text.indexOf("World War II");
// var first = text.slice(0,index)
// var replace = "the second world war"
// var third = text.slice(index+12);
// console.log(index + replace + third);


// var a = "Sheharyar";
// console.log(a.charAt(3));


// var a = "This is Example";
// var b = a.replace("/Example/g","Text");
// document.write(b)

// var a = 3.5;
// var b = Math.round(a);
// document.write(b)


// var a = prompt("Enter Your value");
// var b = Math.round(a);
// document.write(b)

// var a = 3.5;
// var b = Math.ceil(a);
// document.write(b)


// var a = 3.5;
// var b = Math.floor(a);
// document.write(b)


// var heads = prompt("Enter Heads User Name");
// var tails = prompt("Enter tails User Name");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     alert(heads + " " + "Win the Toss")
// }else{
//     alert(tails + " " + "Win the Toss")
// }


// var a = 10;
// console.log(a.toString())

// var a = Math.random() * 2;
// var b = a.toFixed(2)
// document.write(b)

// var bod = new Date(prompt("Enter your Date of Bith","Apr 18, 1999"));
// var dobmili = bod.getTime()
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write(accuage);
