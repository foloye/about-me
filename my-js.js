
document.addEventListener("DOMContentLoaded", function() {
    // all of your code goes here


    alert("Hello World!");
    console.log("JEUUU");

    let myPhoto = document.getElementById("project")

    myPhoto.addEventListener("click", changeImage)


    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == "file:///Users/girlswhocode2018/development/aboutme/bodyshaming.png"){
        myPhoto.src = "bs.png"
    } else {
        myPhoto.src = "bodyshaming.png"
    }

}


}) // End of Dom content loaded
