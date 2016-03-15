var fs = require('fs');
var ejs = require("ejs");

var template = ejs.compile(fs.readFileSync("./template/_template.html", 'utf8'));
var files = fs.readdirSync("./template");
var exclude = [".DS_Store", "_template.html"];
for (var i in files){
	if (exclude.indexOf(files[i]) == -1) {
		var filename = files[i];
		fs.writeFileSync(filename, template({body: fs.readFileSync("./template/"+filename, 'utf8')}));
	}
}