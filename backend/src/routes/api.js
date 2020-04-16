
//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Bulletin = require('../models/boletim');
var Student = require('../models/student');

//Routes
router.route('/boletim/:code')
    .get(function (req, res) {
        Bulletin.findOne({code: req.params.code}, function(err, bulletin){
            if (err)
                res.send(err);
            res.send(bulletin);
        })
    });

router.route('/boletim')
	.get(function (req, res) {
		Bulletin.find(function(err, bulletins) {
            console.log(bulletins);
            if (err)
                res.send(err);
            res.send(bulletins);
        });
	})
	.post(function (req, res) {
        var bulletin = new Bulletin();
        var students = [];

    	var student = new Student();
        student.name = req.body.name1;
        student.note = req.body.note1;
        students.push(student);

        var student = new Student();
        student.name = req.body.name2;
        student.note = req.body.note2;
        students.push(student);

        var student = new Student();
        student.name = req.body.name3;
        student.note = req.body.note3;
        students.push(student);

        var student = new Student();
        student.name = req.body.name4;
        student.note = req.body.note4;
        students.push(student);

        var student = new Student();
        student.name = req.body.name5;
        student.note = req.body.note5;
        students.push(student);

        var generateCode = function(){
			var code ="";
			for (var x = 6; x >= 0; x--) {
				var ascii = [[48, 57],[64,90]];
				var i = Math.floor(Math.random()*ascii.length);
				code += String.fromCharCode(Math.floor(Math.random()*(ascii[i][1]-ascii[i][0]))+ascii[i][0]);
			}
			return code;
		}
        

        function verificador(){
        	var code = generateCode();
        	Bulletin.findOne({code:code}, function(err, b){
        		if(b){
        			verificador();
        		}else{
					bulletin.code = code;
			        bulletin.matter = req.body.matter;
			        bulletin.team = req.body.team;

			        bulletin.students = students;

			        bulletin.save(function(err) {
			            if (err){
			                console.log("Erro: "+err);
			                res.send({code: 0});
			            }

			            res.send(code);
			        });
        		}
        	});
        }

        verificador();

    });

//Return router
module.exports = router;