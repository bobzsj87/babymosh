var fs = require('fs');
var ejs = require("ejs");
var exec = require('child_process').exec;
var cmd = 'lessc css/less/creative.less css/creative.css';
exec(cmd, function(error) {
	if (error) console.error(error);
	else console.log("finished creative.css")
});

var qiniu = "//o42spgxwl.qnssl.com/img/";

var template = ejs.compile(fs.readFileSync("./template/_template.html", 'utf8'));
var files = fs.readdirSync("./template");
var exclude = [".DS_Store", "_template.html"];
for (var i in files){
	if (exclude.indexOf(files[i]) == -1) {
		var filename = files[i];
		var body = fs.readFileSync("./template/"+filename, 'utf8');
		fs.writeFileSync(filename, template({body: body.replace(/\/img\//g, qiniu)}));
		console.log(filename);
	}
}