import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useFormik } from "formik";
import { createPost } from "../../features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';

export default function NewPost() {

  const history = useHistory()
  const dispatch = useDispatch()
  // const [errorMessage, setErrorMessage] = useState('')

  // const handleOnSubmit = () => {
  //   const title = "abc"
  //   history.push(`/post/${title}`)
  // }
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      description: "",
      tagList: "",

    },
    onSubmit: (values) => {
      const params = {
        article: clean(values)
    }

      dispatch(createPost(params))
      if(values){
        history.push(`/post/${values.title}`)
      }
      
    }
    
  })
  


  const clean = (obj) => {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
        delete obj[propName];
      }
    }
    return obj
  }

  return (
    <div className="flex justify-center items-center">
      <form className="w-1/2 mt-6" onSubmit={formik.handleSubmit}>
        <input
          name='title'
          id='title'
          type="text"
          className="input-field"
          placeholder="Article Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          required
        />
        <input
          name='description'
          id='description'
          type="text"
          placeholder="What's this  article about?"
          className="input-field"
          value={formik.values.description}
          onChange={formik.handleChange}
          required
        />
        <textarea
          name='body'
          id = 'body'
          rows="5"
          type="text"
          placeholder="Write your article (in markdown) "
          className="input-field"
          value={formik.values.body}
          onChange={formik.handleChange}
          required
        />
        <input 
        name='tagList'
        id='tagList'
        type="text" 
        placeholder="Enter tags" 
        className="input-field" 
        value={formik.values.tagList}
        onChange={formik.handleChange}
        />
        <div className="text-right">
          <button
            type="submit"
            className="rounded-md border text-white border-secondary bg-secondary hover:bg-secondary-hover hover:border-secondary-hover text-lg py-2 px-5"

          >
            Publish Article
          </button>
        </div>
      </form>
    </div>
  );
}
