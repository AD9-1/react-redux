import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { userSlice } from "../UserReducer";

const Edit = () => {
  const users = useSelector((state) => state.userss);
  const { id } = useParams();
  const [findUser, setFindUser] = useState(
    users.find((item) => {
      return item.id === parseInt(id);
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFindUser({ ...findUser, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSlice.actions.updateUser({
      id: parseInt(id),
      name: findUser.name,
      age: findUser.age,
    }));
    navigate("/");
  };
  return (
    <div className="container vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="w-50 border p-5">
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="name"
              value={findUser.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputAge1" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={findUser.age}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
