import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  async function fetchData(value) {
      try {
          const response = await fetch("https://cakeback-rahuls-projects-44dfd132.vercel.app/api/add-product", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(value),
          });

          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setData(data)
          return data; // Return the data for further use
      } catch (error) {
          console.error('Error:', error);
          throw error; // Re-throw the error for the caller to handle
      }
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      flavor: '',
      description: '',
      category: '',
      urlImage: 'https://clapboard-s3.s3.amazonaws.com/images/b0ca1c62-8449-4632-8aac-53d5c320df47_production.png',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
      flavor: Yup.string()
        .required('Flavor is required'),
      description: Yup.string()
        .required('Description is required'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: (values,{resetForm}) => {
      fetchData(values)
      resetForm();
    },
  });
  if(!token){
    navigate('/login')
  }
  return (
    <div className="add-product-container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={formik.handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter product title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={formik.touched.title && formik.errors.title ? 'input-error' : ''}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="flavor">Flavor</label>
          <input
            type="text"
            id="flavor"
            name="flavor"
            placeholder="Enter flavor"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.flavor}
            className={formik.touched.flavor && formik.errors.flavor ? 'input-error' : ''}
          />
          {formik.touched.flavor && formik.errors.flavor && (
            <div className="error">{formik.errors.flavor}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={formik.touched.description && formik.errors.description ? 'input-error' : ''}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className={formik.touched.category && formik.errors.category ? 'input-error' : ''}
          >
            <option value="">Select a category</option>
            <option value="Pastries">Pastries</option>
            <option value="Cakes">Cakes</option>
          </select>
          {formik.touched.category && formik.errors.category && (
            <div className="error">{formik.errors.category}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="urlImage">Image URL</label>
          <input
            type="url"
            id="urlImage"
            name="urlImage"
            placeholder="Enter image URL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.urlImage}
            className={formik.touched.urlImage && formik.errors.urlImage ? 'input-error' : ''}
          />
          {formik.touched.urlImage && formik.errors.urlImage && (
            <div className="error">{formik.errors.urlImage}</div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
