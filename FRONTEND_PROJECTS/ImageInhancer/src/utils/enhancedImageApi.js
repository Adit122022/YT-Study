import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;



// Call the API to get the enhanced image URL
export const enhancedImageApi = async (image) => {
  //  code to call the api and get enhanced image url
  try {
    const taskId = await uploadImage(image);
    console.log(taskId)
    const enhancedImageUrl = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image URL:", enhancedImageUrl);
    return enhancedImageUrl;
  } catch (e) {
    console.error("Error in API call", e);
    return null;
  }
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image_file", image);
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": API_KEY,
      },
    }
  );
//   console.log(data.data.task_id);
  if (!data?.data?.task_id) {
    throw new Error("Error in uploading image");
  }
  //  code to upload image
  // /api/tasks/visual/scale  --> post
  return data.data.task_id;
};
const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    { headers: {  "X-API-KEY": API_KEY } }
  );

//   console.log(data.data.image);
if(!data?.data) {
    throw new Error("Error in fetching enhanced image");
}
return data.data;
  //  code to fetch enhanced image url
  //  fetch enhanced image
  // /api/tasks/visual/scale/{task_id}  --> get

  // task_id
  // :
  // "aad8054f-1aa0-4e3b-bad1-86199d9d9948
};
const PollForEnhancedImage = async (taskId, reTries =0) => {
    const result = await fetchEnhancedImage(taskId);
    console.log(result)
    if (result.state === 4) {
        console.log("Image is still being processed");
        if (reTries > 10) {
            throw new Error("Image processing timed out");
        }
        await  new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
        return PollForEnhancedImage(taskId, reTries + 1);
    }
    return result.image;
}
