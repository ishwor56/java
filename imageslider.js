
const image_array = ["one.jpg", "two.jpg", "three.jpg", "four.jpg"]

let array_length = image_array.length

i = 0

let set = setInterval(slider, 5000)

function slider() {
    i++
    i= i%array_length
    document.getElementById("image").src = `images/${image_array[i]}`
}



function prev(){
    i--
    // 5-1=4
    if(i<0){
        i = array_length-1 
    }
    document.getElementById('image').src = `images/${image_array[i]}`

}


function next(){

i++
if(i<5){
    i = array_length+1 
}

document.getElementById('image').src = `images/${image_array[i]}`

}









function stops(){

clearInterval(set)
}   


function starts(){

    set = setInterval(slider.length, 2000)
}