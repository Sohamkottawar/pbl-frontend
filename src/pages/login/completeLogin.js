import React, { useState } from 'react';
import APti from "./skillCheckbox";
function Form() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeCity, setCollegeCity] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleCollegeCityChange = (event) => {
    setCollegeCity(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleOpenChatChange = (event) => {
    setOpenChat(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      title &&
      about &&
      phone &&
      dob &&
      collegeName &&
      collegeCity &&
      year &&
      branch &&
      gender &&
      skills.length > 0
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center  w-2/3 mx-auto mt-24 bg-gray-300 p-4 text-left"
    >
      <label className="text-gray-800 font-semibold text-left ">Title:</label>
      <input
        type="text"
        onChange={handleTitleChange}
        value={title}
        required
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />

      <label className="text-gray-800 font-semibold">About me:</label>
      <textarea
        onChange={handleAboutChange}
        value={about}
        required
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />

      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-800 font-semibold">Phone No.:</label>
          <input
            type="text"
            onChange={handlePhoneChange}
            value={phone}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-gray-800 font-semibold">D.O.B:</label>
          <input
            type="date"
            onChange={handleDobChange}
            value={dob}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-800 font-semibold">College Name:</label>
          <input
            type="text"
            onChange={handleCollegeNameChange}
            value={collegeName}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-gray-800 font-semibold">College City:</label>
          <input
            type="text"
            onChange={handleCollegeCityChange}
            value={collegeCity}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-800 font-semibold">Current year:</label>
          <select
            onChange={handleYearChange}
            value={year}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select year</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-gray-800 font-semibold">Branch:</label>
          <select
            onChange={handleBranchChange}
            value={branch}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select branch</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Agricultural Engineering">
              Agricultural Engineering
            </option>
            <option value="Automobile Engineering">
              Automobile Engineering
            </option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science Engineering">
              Computer Science Engineering
            </option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Electronics and Communication Engineering">
              Electronics and Communication Engineering
            </option>
            <option value="Environmental Engineering">
              Environmental Engineering
            </option>
            <option value="Geological Engineering">
              Geological Engineering
            </option>
            <option value="Industrial Engineering">
              Industrial Engineering
            </option>
            <option value="Instrumentation Engineering">
              Instrumentation Engineering
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Marine Engineering">Marine Engineering</option>
            <option value="Materials Engineering">Materials Engineering</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Mining Engineering">Mining Engineering</option>
            <option value="Nuclear Engineering">Nuclear Engineering</option>
            <option value="Petroleum Engineering">Petroleum Engineering</option>
            <option value="Production Engineering">
              Production Engineering
            </option>
            <option value="Textile Engineering">Textile Engineering</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-800 font-semibold">Gender:</label>
          <select
            onChange={handleGenderChange}
            value={gender}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Prefer Not to Say">Prefer Not to Say</option>
          </select>
        </div>
        
          <APti/>
          
    
      </div>

      <div className="w-full flex flex-col md:flex-row mb-4">
        <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
          <span className="block font-medium text-gray-700 mb-2">
            Do you want to openly chat to others?
          </span>
          <div className="flex items-center">
            <label htmlFor="yes" className="mr-2">
              <input
                type="radio"
                id="yes"
                name="openChat"
                value="yes"
                checked
                required
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label htmlFor="no" className="mr-2">
              <input type="radio" id="no" name="openChat" value="no" required />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;


