const fs = require('fs');

//Decode file from base64 and save it.
const getFileFromBase64 = (bitmap)=>{

  bitmap = bitmap.replace('data:image/png;base64,','');

  let image = {
    Image: {
      Bytes: new Buffer(bitmap, 'base64')
    },
    Attributes: ['ALL']
  };

  return image;

}

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
	loadFile,
  getFileFromBase64
};