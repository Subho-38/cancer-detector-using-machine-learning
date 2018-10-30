var express = require('express')
var app = express()
var path = require('path')
  


app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/test'))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname + '/des-form/login.html'))
})

app.get('/hospitals.html',(req,res)=>{
    res.sendFile(path.join(__dirname + '/hospitals.html'))
})


app.get('/user', (req,res)=>{
    console.log(req.query)
    var spawn = require('child_process').spawn;
    var process = spawn('python', ['./Cancer_Detection_Classifier.py',
      req.query.Id,
      req.query.Radius_mean,
      req.query.Texture_mean,
      req.query.Perimeter_mean,
      req.query.Area_mean,
      req.query.Smoothness_mean,
      req.query.Compactness_mean,
      req.query.Concavity_mean,
      req.query.Concave_Points_mean,
      req.query.Symmetry_mean,
      req.query.Fractal_Dimension_mean,
      req.query.Radius_error,
      req.query.Texture_error,
      req.query.Perimeter_error,
      req.query.Area_error,
      req.query.Smoothness_error,
      req.query.Compactness_error,
      req.query.Concavity_error,
      req.query.Concave_Points_error,
      req.query.Symmetry_error,
      req.query.Fractal_Dimension_error,
      req.query.Radius_worst,
      req.query.Texture_worst,
      req.query.Perimeter_worst,
      req.query.Area_worst,
      req.query.Smoothness_worst,
      req.query.Compactness_worst,
      req.query.Concavity_worst,
      req.query.Concave_Points_worst,
      req.query.Symmetry_worst,
      req.query.Fractal_Dimension_worst
    ]);
  
    // process.stdout.on('data', function (data) {
    //   res.send(data.toString());
    // });
    process.stdout.on('data', data => console.log(data));
})


app.listen('3000',()=>{
    console.log('App is listening at port 3000')
})