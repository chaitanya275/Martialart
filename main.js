let password1="chaitu@321"
let password2="chaitu@3210"
let ismatch= password1===password2
let isrequiredlength=password1.length>=8
let isfinal=ismatch&&isrequiredlength
if(isfinal)
{
   console.log("this password is valid")
}else{
    console.log("this password is invalid")
}