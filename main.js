Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera = document.getElementById("webcamera");
Webcam.attach("#webcamera");
function picture(){
   Webcam.snap(function(data_uri){
    document.getElementById("captured_img").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

   });
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/RByV0mJtJ/model.json",modelLoaded);
function modelLoaded(){

}
