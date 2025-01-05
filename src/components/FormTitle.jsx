import React from 'react'

function FormTitle({ icon, title }) {
    return (
        <div className='form-title'>
            <div className='form-img'>
                <img src={icon} alt="image" />
            </div>
            <p className='form-header'>{title}</p>
        </div>
    )
}

export default FormTitle