import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSlice } from "../UserReducer";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.userss;
  });

const handleClick=(id)=>{
  const userA=users.find(user => user.id === id);
dispatch(userSlice.actions.deleteUser({id: id,name:userA.name,age:userA.age}))
}
  return (
    <div className="container">
      <h2>Welcome to the list of Users</h2>
      <Link to="/create" className="btn btn-primary mb-3 mt-4">
        Add User
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                {" "}
                <Link to={`/edit/${user.id}`}>
                  <button className="btn-sm btn btn-primary">Edit</button>
                </Link>
          
                  <button onClick={()=>handleClick(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
