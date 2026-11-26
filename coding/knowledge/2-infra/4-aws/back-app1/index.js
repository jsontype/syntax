const express = require('express')
const multer = require('multer')
const AWS = require('aws-sdk')
const app = express()

const s3 = new AWS.S3({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
  region: 'your-region',
})

const upload = multer({ storage: multer.memoryStorage() })

app.post('/upload', upload.single('file'), (req, res) => {
  const params = {
    Bucket: 'your-s3-bucket-name',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  }

  s3.upload(params, (err, data) => {
    if (err) return res.status(500).send(err)
    res.send({ url: data.Location })
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
