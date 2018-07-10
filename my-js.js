
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

    let photoMy = document.getElementById("re")

    photoMy.addEventListener("click", imageChange)

    function imageChange(){
        console.log(photoMy.src);
        if (photoMy.src == "file:///Users/girlswhocode2018/development/aboutme/me.jpg"){
        photoMy.src = "iea.jpg"
    } else {
        photoMy.src = "me.jpg"
    }
}
}

}) // End of Dom content loaded
