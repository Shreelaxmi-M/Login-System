import React from 'react'
import FormTitle from './FormTitle'
import vendorIcon from '../assets/vendor.png';
import { Field } from 'formik';
import { VENDOR_OPTIONS } from '../constants/data';

function VendorDetails({ touched, errors }) {
    return (
        <div>
            <FormTitle icon={vendorIcon} title={"Vendor Details"} />
            <div>
                <p className='vendor-form-title'>Vendor Information</p>
                <div className='input'>
                    <label htmlFor="vendor" className='label'>Vendor <span className='required'>*</span> </label>
                    <Field name="vendor" component="select" className="input-field">
                        <option value="" disabled selected>Select a Vendor</option>
                        {VENDOR_OPTIONS.map((item, index)=>{
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })}
                    </Field>
                    {touched.vendor && errors.vendor && (
                        <div className='error'>{errors.vendor}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VendorDetails