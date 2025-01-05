import React from 'react'
import invoiceIcon from '../assets/invoice.png';
import dateIcon from '../assets/date.png';
import { Field } from 'formik';
import FormTitle from './FormTitle';
import { PURCHASE_ORDER_NUMBERS, VENDOR_OPTIONS } from '../constants/data';

function InvoiceDetails({ touched, errors }) {
    return (
        <div>
            <FormTitle icon={invoiceIcon} title={"Invoice Details"} />
            <div>
                <p className='vendor-form-title'>General Information</p>
                <div className='input'>
                    <label htmlFor="orderNumber" className='label'>Purchase Order Number <span className='required'>*</span> </label>
                    <Field name="orderNumber" component="select" className="input-field" placeholder="Select PO number">
                        <option value="" disabled>Select PO Number</option>
                        {PURCHASE_ORDER_NUMBERS.map((item, index) => {
                            return (
                                <option value={item} key={index}>{item}</option>
                            )
                        })}
                    </Field>
                    {touched.orderNumber && errors.orderNumber && (
                        <div className='error'>{errors.orderNumber}</div>
                    )}
                </div>
                <div>
                    <p className='vendor-form-title'>Invoice Details</p>
                    <div className='input-container'>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="InvoiceNumber" className='label'>Invoice Number <span className='required'>*</span> </label>
                            <Field name="invoiceNumber" component="select" className="input-field">
                                <option value="" disabled>Select vendor</option>
                                {VENDOR_OPTIONS.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                            </Field>
                            {touched.invoiceNumber && errors.invoiceNumber && (
                                <div className='error'>{errors.invoiceNumber}</div>
                            )}
                        </div>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="InvoiceDate" className='label'>Invoice Date <span className='required'>*</span> </label>
                            <Field name="invoiceDate" type="date" className="input-field" placeholder="Invoice Date" />
                            {touched.invoiceDate && errors.invoiceDate && (
                                <div className='error'>{errors.invoiceDate}</div>
                            )}
                        </div>
                    </div>
                    <div className='input-container'>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="TotalAmount" className='label'>Total Amount <span className='required'>*</span> </label>
                            <div className='input-total-amount'>
                                <div>
                                    <div className='symbol'>$</div>
                                    <Field type="text" name="totalAmount" placeholder="total amount" className="input-total-amount-field" />
                                </div>
                                <span>USD</span>
                            </div>
                            {touched.totalAmount && errors.totalAmount && (
                                <div className='error'>{errors.totalAmount}</div>
                            )}
                        </div>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="PaymentTerms" className='label'>Payment Terms<span className='required'>*</span> </label>
                            <Field name="paymentTerms" component="select" className="input-field" placeholder="Payment Terms">
                                <option value="" disabled selected>Select</option>
                                {VENDOR_OPTIONS.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                            </Field>
                            {touched.paymentTerms && errors.paymentTerms && (
                                <div className='error'>{errors.paymentTerms}</div>
                            )}
                        </div>
                    </div>
                    <div className='input-container'>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="InvoiceDueDate" className='label'>Invoice Due Date<span className='required'>*</span> </label>
                            <Field name="invoiceDueDate" type="date" className="input-field" placeholder="Invoice Due Date" />
                            {touched.invoiceDueDate && errors.invoiceDueDate && (
                                <div className='error'>{errors.invoiceDueDate}</div>
                            )}
                        </div>
                        <div className='input' style={{ flex: 1 }}>
                            <label htmlFor="GLPostDate" className='label'>GL Post Date<span className='required'>*</span> </label>
                            <Field name="glPostDate" type="date" className="input-field" placeholder="Gl Post Date" />
                            {touched.glPostDate && errors.glPostDate && (
                                <div className='error'>{errors.glPostDate}</div>
                            )}
                        </div>
                    </div>
                    <div className='input'>
                        <label htmlFor="InvoiceDescription" className='label'>Invoice Description<span className='required'>*</span> </label>
                        <Field name="invoiceDescription" type="text" className="input-field" placeholder="Invoice Description" />
                        {touched.invoiceDescription && errors.invoiceDescription && (
                            <div className='error'>{errors.invoiceDescription}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails