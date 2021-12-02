


function validFname() {



    let frist_name = document.getElementById('fristname').value


    if (frist_name == "") {

        displayFun('please fill the form frist', 'fnameMsg', 'red')
        return false
    }

    else if (frist_name.length < 3) {

        displayFun('please fill the form frist', 'fnameMsg', 'red')
        return false

    }

            

    else{

        displayFun('Hey Man this valid', 'fnameMsg', 'green')
        return true

    }


}   







// ? => it means position of string doesnt matter

// . =>matches single character

// * => matches precedence character

// {minimm , maximum} => {8, 20}










function validEmail() {



    let email = document.getElementById('email').value


    if (email == "") {

        displayFun('please fill the form frist', 'emailMsg', 'red')
        return false
    }

    else if (email.length < 3) {

        displayFun('please inter more than two character', 'emailMsg', 'red')
        return false

    }



else if(!email.match (/^ ([a-z0-9]) [a-z0-9\_\-\.]+\@+ (([a-z])+\.) +$/)){

    displayFun('Envilid Email', 'emailMsg', 'red')
}            




    else{

        displayFun('Hey Man this valid', 'emailMsg', 'green')
        return true

    }


}






function validPassword() {



    let password = document.getElementById('password').value


    if (password == "") {

        displayFun('please fill the form frist', 'passwordMsg', 'red')
        return false
    }

    else if (password.length < 3) {

        displayFun('please inter more than two character', 'passwordMsg', 'red')
        return false

    }





else if(!password.match (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&*]).{8,50}$/)){

       displayFun('must contain one Uppercase,one lowercase, one numeric, one special characters and must be more than 8 characters','passwordMsg','red')
    return false


}           


    else{

        displayFun('Hey Man this valid', 'passwordMsg', 'green')
        return true

    }


}











function validForm(){

if(validFname()&& validEmail() && validPassword()){
return true
}

else{
return false
}





}






function displayFun(message, allfid, idcolor){

    document.getElementById(allfid).innerHTML = message
    document.getElementById(allfid).style.color = idcolor

}























// function validFname(){

// let frist_name = document.getElementById('fristname').value


// if(frist_name == ""){

// displayfun('hey you musty ebter the fristname', 'fnameMsg', 'red')

// return false
// }

// else if(frist_name.length <3){

// displayfun('You must have more than three character', 'fnameMsg', 'red')
// return false

// }


// else{

// displayfun('your form is valid', 'fnameMsg', 'green' )

// }

// }




// function displayfun(message, idvalid, validcolor){

// document.getElementById(idvalid).innerHTML = message

// document.getElementById(idvalid).style.color = validcolor


// }

























