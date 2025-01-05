import React from 'react'
import VendorDetails from './VendorDetails'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import InvoiceDetails from './InvoiceDetails';
import Comments from './Comments';

const VendorFormSchema = yup.object().shape({
  vendor: yup
    .string()
    .required('Vendor is required'),
  orderNumber: yup
    .string()
    .required('order number is required'),
  invoiceNumber: yup
    .string()
    .required('invoice number is required'),
  invoiceDate: yup
    .date()
    .required('invoice date is required'),
  totalAmount: yup.number()
    .required('total Amount is required')
    .typeError('total Amount must be a valid number')
    .positive('total Amount must be a positive number')
    .integer('total Amount must be an integer')
    .min(1, 'total Amount must be at least 1')
    .max(10000, 'total Amount must be less than or equal to 10,000'),
  paymentTerms: yup
    .string()
    .required("select payment terms"),
  invoiceDueDate: yup
    .date()
    .required('invoice due date is required'),
  glPostDate: yup
    .date()
    .required('GL post date is required'),
  invoiceDescription: yup
    .string()
    .required('invoice description is required'),
  comment: yup
    .string()
    .required('comment is required'),
});

function InvoiceForm() {
  return (
    <div className='vendor-details'>
      <p className='upload-title'>Vendor Details</p>
      <Formik
        initialValues={{ vendor: '', orderNumber: '', invoiceNumber: '', invoiceDate: '', totalAmount: 0, paymentTerms: "", invoiceDueDate: '', glPostDate: '', invoiceDescription: '', comment: '' }}
        validationSchema={VendorFormSchema}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched,isValid, dirty, isSubmitting }) => (
          <Form>
            <VendorDetails touched={touched} errors={errors} />
            <InvoiceDetails touched={touched} errors={errors} />
            <Comments touched={touched} errors={errors} />
            <div className='submit'>
              <button className='save'>Save as Draft</button>
              <button className='submit-btn' disabled={errors} style={{opacity: !(isValid && dirty) || isSubmitting ?0.5:1}}>Submit & New</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InvoiceForm