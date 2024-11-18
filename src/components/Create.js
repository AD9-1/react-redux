import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const[name,setName]=useState();
  const[age, setAge]=useState();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const users = useSelector((state) => {
    return state.userss;
  });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const id=users[users.length-1].id+1
        dispatch(userSlice.actions.addUser({id,name,age}));
        navigate("/")
      };
  return (
    <div className="container vh-100 vw-100 d-flex justify-content-center align-items-center" > 
    <div className="w-50 border p-5">
    <h3>Add New User</h3>
      <form  onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            aria-describedby="emailHelp" onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputAge1" className="form-label">
            Age
          </label>
          <input
            type="text"
            value={age}
            className="form-control"onChange={e=>setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}
export default Create
