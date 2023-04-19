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
      var m2 = document.getElementById('m2').value;
      var hab = document.getElementById('hab').value;
      var planta = document.getElementById('planta').value;
      var ascensor = document.getElementById('ascensor').value;
      var ext = document.getElementById('ext').value;
      var est = document.getElementById('est').value;
      var cent = document.getElementById('cent').value;

      if(modelo != null){
          var tensor = tf.tensor2d([[0, parseInt(m2), parseInt(hab), parseInt(planta), parseInt(ascensor), parseInt(ext), parseInt(est), parseInt(cent)]])
          var prediccion = modelo.predict(tensor).dataSync();
          prediccion = Math.round(prediccion, 2)
          document.getElementById("resultado").innerHTML = "Precio: " + prediccion + "€/mes";
      }else{
          document.getElementById("resultado").innerHTML = "Intenta de nuevo en un rato...";
      }
  }