import React, { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Name and email cannot be empty.");
      return;
    }
    setUserData({ ...formData });
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData({ ...userData });
    setEditMode(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Profile</h2>
      <div className="flex justify-center mb-6">
        <img
          src={userData.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
      </div>
      {!editMode ? (
        <div className="text-center">
          <p className="text-lg text-white font-semibold">
            <strong>Name:</strong> {userData.name}
          </p>
          <p className="text-lg text-white font-semibold">
            <strong>Email:</strong> {userData.email}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 px-6 py-2 bg-white text-purple-500 font-semibold rounded-full shadow hover:bg-purple-100 transition"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded shadow focus:outline-none focus:ring focus:ring-purple-300"
              />
            </label>
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded shadow focus:outline-none focus:ring focus:ring-purple-300"
              />
            </label>
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">
              Avatar URL:
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded shadow focus:outline-none focus:ring focus:ring-purple-300"
              />
            </label>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
