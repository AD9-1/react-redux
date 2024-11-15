import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => {
    return state.userss;
  });

  return (
    <div className="container">
      <h2>Welcome to the list of Users</h2>
      <button type="button" class="btn btn-primary mb-3 mt-4">
        Add User
      </button>
      <table class="table table-striped">
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
          
                  <button className="btn btn-sm btn-danger ms-2">Delete</button>
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
