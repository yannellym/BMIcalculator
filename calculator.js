//jshint esversion:6

const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var total = num1 + num2;

    res.send("The result of the calculation is " + total);

});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let heightFeet = parseFloat(req.body.heightFeet);
    let heightInches = parseFloat(req.body.heightInches);

    let userWeight = Math.round(weight * 0.45359237);
    let heightFeetToInches = heightFeet *12;
    let totalHeightInInches = heightInches + heightFeetToInches;
    let heightInCentimeters = totalHeightInInches * 2.54;
    let heightInMeters = heightInCentimeters *0.01;
    let bmi= Math.round((userWeight/(heightInMeters*heightInMeters)));

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});


