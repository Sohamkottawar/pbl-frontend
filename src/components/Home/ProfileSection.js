import React from "react";

function ProfileSection() {
  return (
    <div className="flex flex-col items-center ">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full h-24 w-24 object-cover mb-2"
      />

      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">John Doe</h1>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-1">
        Software Developer
      </h2>

      {/* Username */}
      <p className="text-sm text-gray-500">@johndoe</p>
    </div>
  );
}

export default ProfileSection;
