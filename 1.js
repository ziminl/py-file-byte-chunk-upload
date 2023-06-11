




function uploadFile(url, file) {
  var chunkSize = 1024;
  var offset = 0;

  function uploadChunk() {
    var chunk = file.slice(offset, offset + chunkSize);
    var reader = new FileReader();

    reader.onload = function(e) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          console.log("Chunk uploaded successfully");
          offset += chunkSize;
          if (offset < file.size) {
            uploadChunk();
          } else {
            console.log("File upload complete");
          }
        } else {
          console.log("Error uploading chunk: ", xhr.status);
        }
      };

      xhr.send(e.target.result);
    };

    reader.readAsArrayBuffer(chunk);
  }

  uploadChunk();
}

var fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", function(event) {
  var file = event.target.files[0];
  var url = "https://127.0.0.1/upload";
  uploadFile(url, file);
});




