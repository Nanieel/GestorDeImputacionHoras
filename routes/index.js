exports.index = function(req, res){
	res.render('index');
};

exports.partials = function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
};

exports.pages = function (req, res) {
	var path = req.params.path;
	var name = req.params.name;
	res.render('pages/' +path + '/' + name);
};