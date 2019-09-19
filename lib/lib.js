const fs = require('fs');

//Load image file async.
const loadFile = async (file)=>{

	return new Promise((resolve,reject)=>{

  	fs.readFile(file, (err, data) => {
    	
    	if (err)
    		reject(err);
    	else
    		resolve(data);

  	});

	});

};

module.exports = {
	loadFile
};