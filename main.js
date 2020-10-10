
const name = 'John';
const age = 18;

//Concatenation//
console.log("My name is "+ name +" and I am "+ age);

const s = "Computer, Technology, AI, Electronics, Embeded Systems";
console.log(s.split(","));

//arrays//
const fruits=['Apples', 'Mangoes', 'Peach', 'Lemons'];
fruits.push('Dragon fruit');
fruits.unshift('Oranges');
console.log(fruits);

const person = {
    Firstname: 'Durgesh',
    Lastname: 'Jadhav',
    Age: 18,
}
console.log(person);

var mystr = "Learning code is ";
var code = "fun and interesting ";
mystr += code;
console.log(mystr);

var firstname = "Rohit";
var lastletteroffirstname = firstname[firstname.length - 1];
console.log(lastletteroffirstname);

var lastname = "Patel";
var lastletteroflastname = lastname[lastname.length - 1];
console.log(lastletteroflastname);         //37:57//

var myarr = [[2, 3, 1], [4, 5, 6], [[12, 3, 5]]];
var mydata = myarr[1][0];
console.log(mydata);

var ar = ["Simon", 23];
ar.push (["Jade", 15]);
console.log(ar);

function fistfunction(){
    console.log("Heello World!");
}
fistfunction();

var myglobal = 5;
function fun1(){
    oopsglobal=10;
}

function fun2(){
    var output = "";
    if(typeof myglobal != "undefined"){
        output += "myglobal: " + myglobal;
    }
    if(typeof oopsglobal != "undefined"){
        output += "oopsglobal: " + oopsglobal;
    }
    console.log(output);
}
fun1();
fun2();

var outerwear = "T-shirt";
function myoutfit(){
    return outerwear;
}
console.log(myoutfit());    //1:02:21;

function minusseven(num){
    return num-3;
}
console.log(minusseven(10));

function calculation(numm1, num2){
    return numm1-num2;
}
console.log(calculation(10, 4));

function trueorfalse(isittrue){
    if(isittrue){
        return "Yes, it is true";
    }
    return "No, it is false";
}
console.log(trueorfalse(true));

function equality(marks){
    if(marks > 50 && marks <= 50){
        return "Yes";
    }
    return "No";
} //1:20:41
console.log(equality(30));

function oroperator(val){
    if(val > 20 || val< 10){
        return "Inside";
    }
    return "outside";
}
oroperator(40);
console.log(oroperator(40));

function answeers(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
            case 2: 
            answer = "Beta";
            break;
            case 3:
                answer = "Gamma";
                case 4:
                    answer = "Sai";
                    break;
                    default:
                        answer = "Wrong choice made";
    }
    return answer;
}
console.log(answeers(5));   //1:42:22

var count = 0;
function cc(cards){
    switch(cards){
        case 2:
            case 3:
                case 5:
                    case 6:
                        count++;
                        break;
                        case 10:
                            case "K":
                                case "Q":
                                case "J":
                                    case "A":
                                        count--;
                                        break;
    }
    return count;
}
console.log(cc(3));

//Java Script Objects
var dogname = {
    "name": "Rocky",
    "legs": 4,
    "Tails": 1,
    "friends": ["Everything!"],
    "Hobbies": ["Eating", "Sleeping", "Walking"]
};
dogname.name = "Salam Rocky";
dogname.bark = "Bow-Bow";
dogname.iscool = true;
var namevalue = dogname.name;
var friends = dogname.friends;
var sound = dogname.bark;
var iscool = dogname.iscool;
delete dogname.friends; 
console.log(namevalue);
console.log(sound);
console.log(iscool);       //1:55:53

var mymusic = {
    "artist": "DJ Snake",
    "title": "Magenta Riddim",
    "release_year": 2019,
    "formats": ["CD", "PD", "Online"],
    "gold": true 
};
var myartist = mymusic.artist;
console.log(myartist);

var myname = {
    16: "Durgesh",
    17: "Jadhav",
};
var playername = 16;
var player = myname[16];
console.log(player);

var myplants = [
    {
        "type": "flowers",
        "list": ["rose","Tulip","Sunfllower"]
    },
    {
        "type": "trees",
        "list": ["Oak","Peeple","Rubber"]
    }
];
var second = myplants[1].list[1];
console.log(second);

var mystorage = {
    "car": {
        "inside": {
            "glovebox": "maps",
            "passengers seat": "crumbs"
        },
        "outside" : {
            "color": "red"
        }
    }
};
console.log(mystorage.car.inside);

var ar = []
var i = 0;
while(i < 5) {
    ar.push(i);
    i++;
}
console.log(ar);

var ourarr = [9, 7, 5];
var myarr = 0;
for(var i=0; i<ourarr.length; i++) {
    myarr += ourarr[i];
}
console.log(myarr);  //2:19:43

var contacts = [
    {
        "firstname": "Durgesh",
        "lastname": "Jadhav",
        "Likes": "Playing games"
    },
    {
        "firstname": "Amey",
        "lastname": "Bhavsar",
        "Likes": "Competitive Programming"
    },
    {
        "firstname": "Avdhoot",
        "lastname": "Jadhav",
        "Likes": "playing E-sports"
    }
];
function lookupprofile(name, prop){
    for(var i=0; i < contacts.length; i++){
        if(contacts[i].firstname === name){
            return contacts[i][prop];
        }

    }
    return "No such contacts";
}
var data = lookupprofile("Avdhoot", "Likes");
console.log(data);

//Random Function
var randomnum = Math.floor(Math.random() * 20)
function random() {
    return Math.floor(Math.random() * 12);
}
console.log(random());

//parseInt
function converttoInt(str) {
    return parseInt(str);
}
converttoInt("99");

//terenary
function check(a, b) {
    return a==b ? true : false;
}
console.log(check(1, 2));

function checksign(num) {
    return num>0 ? "positive" : num<0 ? "negative" : "Zero" 
}
console.log(checksign(10));

//const
const c=[1, 2, 3];
function mylist() {
    c[2] = 5;
    c[1] = 9;
}
mylist();
console.log(c);

const magic = () => new Date;
var concat = (arr1, arr2) => arr1.concat(arr2);
console.log(concat([1, 2, 3], [4, 6, 9]));   //2:51:26