Webcam.set({
    width : 350,
    height : 400,
    image_format : "jpeg",
    jpeg_quality : 90
});
    
camera = document.getElementById("cam");

Webcam.attach("#cam");

function pic(){
    Webcam.snap(function (data_uri){
document.getElementById("output").innerHTML = '<img id="HOORAH" src="'+data_uri+'">';
    });
}