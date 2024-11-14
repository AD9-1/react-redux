import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => {
    return state.users;
  });
  return (
    <div className="container">
      <h2>Welcome to the list of Users</h2>
      <button type="button" class="btn btn-primary">
        Add User
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
          <tbody></tbody>
        </thead>
      </table>
    </div>
  );
};

export default Home;
