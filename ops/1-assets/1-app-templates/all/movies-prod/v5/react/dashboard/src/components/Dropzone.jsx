import React, { useEffect, useState } from 'react'; 
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css'; 

export const Dropzone1 =()=>  {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      console.log(uploadedFiles);
    }
  }, [uploadedFiles]);

  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove());
};
  const handleChangeStatus = ({ meta }, status) => {
    if (status === 'done') {
      setUploadedFiles((prevFiles) => [...prevFiles, meta]);
    }
    if (status === 'removed') {
      setUploadedFiles((prevFiles) =>
        prevFiles.filter((file) => file.name !== meta.name)
      );
    }
  };

  return (
    <div>
      <Dropzone   
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
      />
    </div>
  );
}; 
