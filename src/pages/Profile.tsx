import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { updateUserProfile } from "../redux/actions/userActions"; // Update the path based on your project structure

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  role: string;
  username: string;
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>({ ...user });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdateProfile = () => {
    // dispatch(updateUserProfile(updatedUser));
    setEditMode(false);
  };

  return (
    <>
      <div className="header ">
        <h1 className="header-txt text-2xl font-bold text-shadow-md text-yellow-600">
          Profile: {user.firstName}
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <div className="w-2/5 h-1/3 p-10 mx-auto rounded-md overflow-hidden shadow-md shadow-slate-400">
          <div className="p-6">
            <h2 className="text-2xl text-gray-400 font-bold mb-4">{`${user.firstName} ${user.lastName}`}</h2>
            {editMode ? (
              <form className="grid grid-cols-2 gap-12">
                <div>
                  <label htmlFor="firstName" className="text-white">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updatedUser.firstName}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-white">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updatedUser.lastName}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-white">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={updatedUser.phoneNumber || ""}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="text-white">
                    Role:
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={updatedUser.role}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="text-white">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={updatedUser.username}
                    onChange={handleInputChange}
                    className="mb-2 p-1 rounded-md"
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="button"
                    onClick={handleUpdateProfile}
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <table className="table-fixed w-full">
                <tbody>
                  <tr className="mb-4">
                    <td
                      className="text-white text-xl font-semibold"
                      colSpan={2}
                    >
                      User Information
                    </td>
                  </tr>
                  <tr className="mb-4">
                    <td className="text-white border-b border-gray-700">
                      <strong>Email:</strong>
                    </td>
                    <td className="text-white border-b border-gray-700 ">
                      {user.email}
                    </td>
                  </tr>
                  {user.phoneNumber && (
                    <tr>
                      <td className="text-white border-b border-gray-700">
                        <strong>Phone Number:</strong>
                      </td>
                      <td className="text-white border-b border-gray-700">
                        {user.phoneNumber}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="text-white border-b border-gray-700">
                      <strong>Role:</strong>
                    </td>
                    <td className="text-white border-b border-gray-700">
                      {user.role}
                    </td>
                  </tr>
                  <tr className="mb-4">
                    <td className="text-white border-b border-gray-700 mb-5">
                      <strong>Username:</strong>
                    </td>
                    <td className="text-white border-b border-gray-700">
                      {user.username}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="p-4">
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
                      >
                        Edit Profile
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
