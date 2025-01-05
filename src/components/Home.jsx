import React from 'react'
import UploadInvoice from './UploadInvoice';
import InvoiceForm from './InvoiceForm';

function Home() {
  return (
    <div className='invoice-container'>
        <UploadInvoice />
        <InvoiceForm />
    </div>
  )
}

export default Home