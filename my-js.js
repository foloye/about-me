
document.addEventListener("DOMContentLoaded", function() {
    // all of your code goes here


    alert("Hello World!");
    console.log("JEUUU");

    let myPhoto = document.getElementById("project")

    myPhoto.addEventListener("click", changeImage)

    "bodyshaming.png" = bodys

    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == bodys){
        myPhoto.src = "bs.png"
    } else {
        myPhoto.src = "bodyshaming.png"
    }


}

}) // End of Dom content loaded
