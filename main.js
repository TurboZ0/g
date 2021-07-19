Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_format: 90
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function  snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
    }) ;
   }

   console.log("ml5 version" ,ml5.version);

   classifier=ml5.imageClassifier("",modelloaded);
   function modelloaded() {
       console.log("Model has been loaded!");
   }

   function gotResult(error,result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("spain").innerHTML=result[0].label;
        document.getElementById("spain1").innerHTML=result[0].confidence.toFixed(4);
    
    }
    }