function add(){
    var title = document.getElementById("name").value;
    var desc = document.getElementById("price").value;
    var imageInfo = document.getElementById("image").files[0].name;
    console.log(name)
    console.log(price);
    console.log(image);
    document.getElementById("name1").innerHTML=title;
    document.getElementById("price1").innerHTML=desc;
    document.getElementById("image1").src=imageInfo;
}