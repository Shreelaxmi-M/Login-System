import React from 'react'
import uploadImage from '../assets/upload.png';
import { useNavigate } from 'react-router';

function UploadInvoice() {
    const redirect = useNavigate();
    function handleLogout() {
        //remove email from localstorage
        localStorage.removeItem("email");
        redirect("/");
    }
    return (
        <div className='upload'>
            <div className='upload-header'>
                <p className='upload-title'>Create New Invoice</p>
            </div>
            <div className='upload-body'>
                <p className='upload-body-title'>Upload your Invoice</p>
                <p className='upload-body-subtitle'>To auto-populate fields and save time</p>
                <img src={uploadImage} alt="UploadImage" width={200} height={200} />
                <button className='upload-button'>Upload File</button>
                <div>
                    <button className='upload-btn'>click to upload</button>
                    <span>or</span>
                    <button className='drag-drop'>Drag and drop</button>
                </div>
            </div>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UploadInvoice