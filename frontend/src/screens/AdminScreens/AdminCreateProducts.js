import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../../redux/actions/productActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';
import Axios from 'axios';

const AdminCreateProducts = ({ history }) => {
  const dispatch = useDispatch();
  //==============GET THE FILE UPLOADED AFTER ACTION
  const productImageUploaded = useSelector(state => state.productImageUploaded);
  const { loading, file, error } = productImageUploaded;
  //File upload

  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  console.log(image);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProductAction({ age: age, image: image }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='file'
          type='file'
          onChange={e => setImage(e.target.files)}
        />
        <input
          placeholder='age'
          onChange={e => setAge(e.target.value)}
          value={age}
          type='text'
        />
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default AdminCreateProducts;
