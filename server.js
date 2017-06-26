/**
 * Created by Jonathan.Greener on 25-Apr-17.
 */
var express = require('express');
var fs = require('fs');
var ffmpeg = require('ffmpeg');
// Initialize http server
const app = express();
const PORT = process.env.PORT || 3000;
// Handle / route
app.get('/', (req, res) =>
    res.send('Server Running!')
)


// Handle / route
app.get('/videotest', (req, res) => {

    try {
      var process = new ffmpeg('./output.mp4');
      process.then(function (video) {
        //console.log('The video is ready to be processed');
        console.log('The video is ready to be processed');
        fs.unlinkSync('./video-com-watermark.mp4');

        var watermarkPath = 'image.png',
            newFilepath = './video-com-watermark.mp4',
            settings = {
              position        : "SE"      // Position: NE NC NW SE SC SW C CE CW
              , margin_nord     : null      // Margin nord
              , margin_sud      : null      // Margin sud
              , margin_east     : null      // Margin east
              , margin_west     : null      // Margin west
            };
        var callback = function (error, files) {
          if(error){
            console.log('ERROR: ', error);
          }
          else{
            console.log('Finished Converting!', files);
            //res.send(files + " was created")
            res.set('Content-Disposition', 'attachment; filename=video-com-watermark.mp4');
            res.sendFile( __dirname + "/video-com-watermark.mp4" );

          }
        }
        //add watermark
        video.fnAddWatermark(watermarkPath, newFilepath, settings, callback)

       // res.send('The video is ready to be processed')
      }, function (err) {
        res.send('error')
        //console.log('Error: ' + err);
      });
    } catch (e) {
      res.send('error' + e.msg)
    }
}
)

// Launch the server on port 3000
const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});