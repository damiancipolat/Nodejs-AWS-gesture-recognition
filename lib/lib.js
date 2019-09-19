const fs = require('fs');

//Load image file async.
const loadFile = async (file)=>{

	return new Promise((resolve,reject)=>{

  	fs.readFile(file, (err, bitmap) => {
    	
    	if (err)
    		reject(err);
    	else{

        let image = {
          Image: {
            Bytes: new Buffer(bitmap)
          },
          Attributes: ['ALL']
        };

    		resolve(image);

      }

  	});

	});

};

module.exports = {
	loadFile
};