import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
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
                <FileInput type='file' accept='image/*' />
                <Button type='button' gradientDuoTone='purpleToBlue' size={'sm'} outline>Upload Image</Button> 
            </div>
            <ReactQuill theme='snow' placeholder='Write something amazing...' className='h-72 mb-12' required/>
            <Button type='submit' gradientDuoTone='purpleToPink' >Publish</Button> 
        </form>    
    </div>
  )
}
