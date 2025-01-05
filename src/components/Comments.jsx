import React from 'react'
import FormTitle from './FormTitle'
import commentIcon from '../assets/comment.png';
import sendIcon from '../assets/send.png';
import { Field } from 'formik';

function Comments({ touched, errors }) {
    return (
        <div>
            <FormTitle icon={commentIcon} title={"Comments"} />
            <div className='input'>
                <div className='input-comment'>
                    <Field type="text" name="comment" className="input-field-comment" placeholder="Add a comment and use @Name to tag someone" />
                    <img src={sendIcon} alt="CommentHeaderIcon" />
                </div>
                {touched.comment && errors.comment && (
                    <div className='error'>{errors.comment}</div>
                )}
            </div>
        </div>

    )
}

export default Comments