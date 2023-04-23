new FinisherHeader({
  "count": 100,
  "size": {
    "min": 2,
    "max": 8,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.4
    },
    "y": {
      "min": 0,
      "max": 0.6
    }
  },
  "colors": {
    "background": "#201e30",
    "particles": [
      "#fbfcca",
      "#d7f3fe",
      "#ffd0a7"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 1,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});
  var modelo = null;
  //Cargamos el modelo entrenado
  (async() =>{
      console.log("Cargando el modelo...");
      modelo = await tf.loadLayersModel("model.json");
      console.log("Modelo cargado!");
  })();

  const btn = document.getElementById("btn");

  btn.onclick = () =>{
      var ciudad = document.getElementById('ciudad').value;
      var ban  = document.getElementById('ban').value;
      var m2 = document.getElementById('m2').value;
      var hab = document.getElementById('hab').value;
      var planta = document.getElementById('planta').value;
      var ascensor = document.getElementById('ascensor').value;
      var ext = document.getElementById('ext').value;
      var amb = document.getElementById('amb').value;
      var cent = document.getElementById('cent').value;
      var verde = document.getElementById('verde').value;
      var gim = document.getElementById('gimnasio').value;
      var park = document.getElementById('parqueo').value;
      var pisc = document.getElementById('piscina').value;
      var sec =  document.getElementById('seguridad').value
      
      
      if(modelo != null){
          var tensor = tf.tensor2d([[parseInt(ciudad), parseInt(m2), parseInt(hab), parseFloat(ban),parseInt(planta), parseInt(ascensor), parseInt(ext), parseInt(amb), parseInt(cent),parseInt(verde),parseInt(gim),parseInt(park),parseInt(pisc),parseInt(sec)]]);
          var prediccion = modelo.predict(tensor).dataSync();
          prediccion = Math.round(prediccion, 2)
          document.getElementById("resultado").innerHTML = "Precio: " + prediccion + "$/mes";
      }else{
          document.getElementById("resultado").innerHTML = "Intenta de nuevo en un rato...";
      }
  }

    function reiniciarFormulario() {
      document.getElementById("m2").value = "";
      document.getElementById("hab").value = "";
      document.getElementById("planta").value = "";
      document.getElementById("parqueo").value = "";
      document.getElementById("ascensor").selectedIndex = 0;
      document.getElementById("ext").selectedIndex = 0;
      document.getElementById("est").selectedIndex = 0;
      document.getElementById("cent").selectedIndex = 0;
      document.getElementById("area").selectedIndex = 0;
      document.getElementById("gimnasio").selectedIndex = 0;
      document.getElementById("picsina").selectedIndex = 0;
      document.getElementById("seguridad").selectedIndex = 0;
      document.getElementById("mantenimiento").selectedIndex = 0;
      document.getElementById("resultado").innerHTML = "";
    }
  