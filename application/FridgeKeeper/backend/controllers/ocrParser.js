const formidable = require('formidable');
const ocrSpaceApi = require('ocr-space-api');

module.exports = function(req, res) {  
    new formidable.IncomingForm().parse(req, function (err, fields, files) {
      console.log(files.uploadedFile.path)
      ocrSpaceApi.parseImageFromLocalFile(files.uploadedFile.path, { 
        apikey: '52ef70f39888957',
        imageFormat: 'image/' + req.params.ext.substr(1),
        isOverlayRequired: true
      })
      .then(function (parsedResult) {
          console.log('parsedText: \n', parsedResult.parsedText);
          res.end(parsedResult.parsedText)
      }).catch(function (err) {
          console.log('ERROR:', err);
      });
  });
  }