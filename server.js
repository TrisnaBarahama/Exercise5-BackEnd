const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk request body menggunakan body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware untuk file static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk file upload
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  // Lakukan sesuatu dengan file yang diunggah
  res.send('File berhasil diunggah');
});

// Middleware untuk penanganan CORS
app.use(cors());

// Contoh endpoint untuk pengujian
app.get('/', (req, res) => {
  res.send('Halo, API bekerja!');
});

// Contoh endpoint untuk menerima data POST
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Lakukan sesuatu dengan data yang diterima
  res.json({ message: 'Data diterima', data });
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
