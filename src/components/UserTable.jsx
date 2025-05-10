import React from "react";

/**
 * UserTable Component
 * - Displays users in a table (for desktop)
 * - Props:
 *   - users: Array of user objects
 *   - updateRole: Function to change user role
 *   - deleteUser: Function to delete user
 */
const UserTable = ({ users, updateRole, deleteUser }) => {
  return (
    <div className="hidden sm:block overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400 dark:border-gray-400 dark:text-black">
        <thead>
          <tr className="bg-gray-300">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                {/* Role selector */}
                <select
                  className="border cursor-pointer  border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 mb-2  rounded"
                  value={user.role}
                  onChange={(e) => updateRole(user.id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                {/* Delete user button */}
                <button
                  className="bg-red-500 text-white p-2 mb-2 cursor-pointer rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
