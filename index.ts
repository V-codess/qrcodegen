import express from "express";
import QRcode from "qrcode";
import path from "path";

const filePath = path.join(__dirname, "/public/qrcode.png"); // Specify the file path
const app = express();

// to save in local
QRcode.toFile(filePath, 'Pakkaki dobbey', {
    errorCorrectionLevel: 'H',
  }, function(err: any) {
    if (err) throw err;
    console.log('QR code saved!');
});

// not to save but just show
QRcode.toString('Pakkaki dobbey ehe', {
    errorCorrectionLevel: 'H',
  }, function(err: any) {
    if (err) throw err;
    console.log('QR code saved!');
});