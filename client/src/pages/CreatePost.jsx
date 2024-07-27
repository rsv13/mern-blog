import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app } from '../firebase';

export default function CreatePost() {
    
    const [file,setFile] = useState({});
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});

    const handleUploadImage = async () => {
        try {
            if(!file){
                setImageUploadError('Please select an image');
                return;
            }
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                  setImageUploadError('Image upload failed');
                  setImageUploadProgress(null);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUploadProgress(null);
                    setImageUploadError(null);
                    setFormData({ ...formData, image: downloadURL });
                  });
                }
              );  
        } catch (error) {
            setImageUploadError('Image Upload Failed');
            setImageUploadProgress(null);
            console.log(error);
    }

}

  return (
    <div className='p-3 max-w-3xl mx-aut min-h-screen'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Create Post</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-center'>
                <TextInput type='text' placeholder='Title Required' id='title' className='flex-1'/>
                <Select>
                    <option value='uncategorised'>Select Category</option>
                    <option value='wellbeing'>Well-Being</option>
                    <option value='nhs'>NHS Updates</option>
                    <option value='primewales'>Prime Wales</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>
                <Button type='button' gradientDuoTone='purpleToBlue' size={'sm'} outline onClick={handleUploadImage} >
                {imageUploadProgress ? (
                    <div className='h-16 w-16'>
                        <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress}%`} />
                    </div>
                ): (
                    'Upload Image'
                )}
            </Button>
            </div>
            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
                {formData.image && (
                    <img src={formData.image} alt='upload' className='w-full h-72 object-cover rounded-lg'/>
            )}
             
            <ReactQuill theme='snow' placeholder='Write something amazing...' className='h-72 mb-12' required/>
            <Button type='submit' gradientDuoTone='purpleToPink' >Publish</Button> 
        </form>    
    </div>
  )
}