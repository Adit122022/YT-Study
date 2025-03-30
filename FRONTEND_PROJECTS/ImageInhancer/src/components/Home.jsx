import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImgaeUpload from './ImgaeUpload'
import Loading from './Loading'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)
     const uploadImageHandler = (image) => {
        setUploadImage(URL.createObjectURL(image))
        // console.log(URL.createObjectURL(image)) 
        setLoading(true)
        // call the image enhancer API 
     }

  return (
    <div className="w-full flex flex-col items-center h-full space-y-6">
        <ImgaeUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} uploadImage={uploadImage} enhancedImage={enhancedImage} />
    </div>
  )
}

export default Home