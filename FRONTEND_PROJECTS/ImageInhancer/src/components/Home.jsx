import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImgaeUpload from './ImgaeUpload'
import Loading from './Loading'
import { enhancedImageApi } from '../utils/enhancedImageApi'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)


     const uploadImageHandler =async  (image) => {
        setUploadImage(URL.createObjectURL(image))
        // console.log(URL.createObjectURL(image)) 
        setLoading(true)
        // call the image enhancer API 


        try{
            const enhanceURL = await enhancedImageApi(image)
            setEnhancedImage(enhanceURL)
            setLoading(false)
        }catch(er){
            console.error('Error while uploading image', er)
            alert('Error while uploading image');
            setLoading(false)
        }
     }

  return (
    <div className="w-full flex flex-col items-center h-full space-y-6">
        <ImgaeUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} uploadImage={uploadImage} enhancedImage={enhancedImage} />
    </div>
  )
}

export default Home