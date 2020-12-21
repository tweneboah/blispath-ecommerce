import React from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
const FileUpload = () => {
  return (
    <div>
      <h1>File Upload</h1>

      <Formik
        initialValues={{
          files: [],
        }}
        onSubmit={values => console.log(values)}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <input
                type='text'
                placeholder='Name'
                value={props.values.files}
              />
              <Dropzone
                accept='image/jpeg, image/png'
                maxFiles='4'
                onDrop={acceptedFiles => {
                  // if (acceptedFiles.length === 0) {
                  //   return;
                  // }

                  props.setFieldValue(
                    'files',
                    props.values.files.concat(acceptedFiles)
                  );
                }}>
                {({ getRootProps, getInputProps }) => (
                  <div className='container'>
                    <div
                      {...getRootProps({
                        className: 'dropzone',
                        onDrop: event => event.stopPropagation(),
                      })}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
              <button type='submit'>Send</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FileUpload;
