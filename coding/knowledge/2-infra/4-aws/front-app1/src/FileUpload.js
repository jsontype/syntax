import React, { useState } from 'react'

export default function FileUploadDownload() {
  const [file, setFile] = useState(null)
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleFileUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('http://your-ec2-url/upload', {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    setDownloadUrl(data.url)
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload</button>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download>
            Download File
          </a>
        </div>
      )}
    </div>
  )
}
