var fs = require('fs'),
    directoryName = process.argv[2],
    fileExtension = process.argv[3],
    re = new RegExp("(.*?."+fileExtension+")");
function listDir(){
    fs.readdir(directoryName, function(error, content){
      var contentParts = content.toString().split(',')
      for(var i = 0; i < contentParts.length; i++){
        reContent = re.exec(contentParts[i]);
        if(reContent !== null){
          console.log(reContent[0]);
        }
      }
    });
}
listDir();
