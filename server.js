/**
 * Created by Jonathan.Greener on 25-Apr-17.
 */
import express from 'express';
var ffmpeg = require('ffmpeg');
// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
    res.send('Hello World!')
)


// Handle / route
app.get('/bla', (req, res) => {

    try {
      var process = new ffmpeg('./output.mp4');
      process.then(function (video) {
        //console.log('The video is ready to be processed');
        console.log('The video is ready to be processed');

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
            console.log('TERMINOU', files);
          }
        }
        //add watermark
        video.fnAddWatermark(watermarkPath, newFilepath, settings, callback)

        res.send('The video is ready to be processed')
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
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});