import { Hexchange,RGBchange,HSLchange,HSVchange } from "./conversions";
// to limit the input range by user
let elementArray=document.querySelectorAll('.range');
console.log(elementArray)
for (let i=0;i<elementArray.length;i++){
    elementArray[i].addEventListener('input',function(){
        
        val=parseInt(elementArray[i].value)
        mi=elementArray[i].min
        ma=elementArray[i].max
        if (val<mi){

            elementArray[i].value=mi
        }else if (val>ma){
            console.log('hi')
            elementArray[i].value=ma
        }  
    })
}

// all different forms of color code
let rgb=document.querySelectorAll("RGB")
let hex= document.querySelectorAll("hex")
let hsl=document.querySelectorAll("HSL")
let hsv=document.querySelectorAll("HSV")
hex.forEach(element => {
    element.addEventListener('input',function(){
        Hexchange()
    })
});
rgb.forEach(element => {
    element.addEventListener('input',function(){
        RGBchange()
    })
});
hsl.forEach(element => {
    element.addEventListener('input',function(){
        HSLchange()
    })
});
hsv.forEach(element => {
    element.addEventListener('input',function(){
        HSVchange()
    })
});