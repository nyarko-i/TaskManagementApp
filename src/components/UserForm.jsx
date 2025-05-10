import React from "react";

/**
 * UserForm Component
 * - Handles form inputs to add a new user (email + role)
 * - Props:
 *   - newUser: Object { email, role }
 *   - handleChange: Function to update input values
 *   - addUser: Function to add user to the list
 */
const UserForm = ({ newUser, handleChange, addUser }) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4 ">
      {/* Email input */}
      <input
        className="border p-2 w-full sm:w-auto dark:border-gray-300 dark:text-black"
        type="email"
        name="email"
        placeholder="User Email"
        value={newUser.email}
        onChange={handleChange}
      />

      {/* Role selector */}
      <select
        className="border cursor-pointer  border-gray-300 bg-white  text-black dark:text-black p-2 mb-2  rounded"
        name="role"
        value={newUser.role}
        onChange={handleChange}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      {/* Add user button */}
      <button
        className="bg-blue-500 text-white p-2 mb-2 rounded sm:w-auto cursor-pointer"
        onClick={addUser}
      >
        Add User
      </button>
    </div>
  );
};

export default UserForm;
