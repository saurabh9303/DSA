//Reverseastring
//letstring=prompt("Enterastring")
//if(!isNaN(string)){
//console.log("Youenteredanumber,Pleaseenterstring")
//}else{
//varreversed=""
//for(leti=string.length-1;i>=0;i--){
//reversed=reversed+string[i]
//}
//}
//console.log(reversed)

//varcheckIfPangram=function(sentence){
//letarr=sentence.split("").reverse().join("")
//if(arr===sentence){
//console.log("True")
//}else{
//console.log("False")
//}
//};

//checkIfPangram("mam")

//letset=newSet()
//set.add(5)
//set.add(5)
//set.add(4)
//console.log(set)


//letfrequencyOfCharacter=function(s){
//letobj={};
//for(constcharofs){
//if(obj[char]){
//obj[char]++;
//}else{
//obj[char]=1
//}
//}
//returnobj;
//}
//console.log(frequencyOfCharacter("saurabh"))


//firstnonrepeatingcharacterintheword
//letcheckNonRepeatingWord=function(word){
//for(leti=0;i<word.length;i++){
//letcount=0
//for(letj=0;j<word.length;j++){
//if(word[i]===word[j]){
//count++
//}
//}
//if(count==1){
//console.log(`${word[i]}isthefirstnonrepeatingcharacter`)
//return`${word[i]}isthefirstnonrepeatingcharacter`;
//}

//}
//console.log(`Thereisnononrepeatingcharacter`)
//}

//document.querySelector('button').addEventListener("click",()=>{
//constdiv=document.querySelector('div')
//div.innerText=checkNonRepeatingWord("saurabh")
//div.style.color='red'

//})

//checkanagram
//letstr1="abhishek"
//letstr2="aaaaaaaa"

//functioncheckAnagram(string1,string2){
//constobj={};
//if(string1.length!=string2.length){
//return`Stringsshouldbeequalforanagram`
//}
//for(letcharofstring1){

//obj[char]=(obj[char]||0)+1
////console.log(obj)
//}
//for(letcharofstring2){
////console.log(char)
//if(!obj[char]){
//returnfalse;
//}

//obj[char]--

//}
//returntrue;
//}
//console.log(checkAnagram(str1,str2))

//*****************Maximumoccurringcharacterinastring
let str = "helloee"
let obj = {};
let max = "";
for (let i = 0; i < str.length; i++) {
    //console.log(str[i])
    if (!obj[str[i]]) {
        obj[str[i]] = 0;
    }
    obj[str[i]]++
    //console.log(obj)
    if (max == "" || obj[str[i]] > obj[max]) {
        max = str[i]
    }
}
console.log(max)
console.log(obj)
console.log(obj[max])