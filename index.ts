import express from "express";
import QRcode from "qrcode";
import path from "path";

const filePath = path.join(__dirname, "/public/qrcode.png"); 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// to save in local
QRcode.toFile(filePath, 'https://google.com', {
    errorCorrectionLevel: 'H',
  }, function(err: any) {
    if (err) throw err;
    console.log('QR code saved!');
});
const data = "example text"
// not to save but just show
QRcode.toString(data, {
    errorCorrectionLevel: 'H',
  }, function(err: any) {
    if (err) throw err;
    console.log('QR code saved!');
});

app.get('/', (req, res) => {
    res.send(`
      <div>
      <h2>Please scan this!</h2>
      <div>
      <img src="/qrcode.png" alt="scanner">
      </div>
      </div>
    `);
})

app.listen(8000, ()=>{
  console.log('listening at 8000')
})