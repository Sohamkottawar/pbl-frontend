import React, { useState } from "react";
import { SKILLS } from "./skills";
import { WithContext as ReactTags } from "react-tag-input";

const suggestions = SKILLS.map((skill) => {
  return {
    id: skill,
    text: skill,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Apti = () => {
  const [tags, setTags] = React.useState([
    // {
    //     id: "HTML", text: "HTML"
    // },
    // {
    //     id: "CSS", text: "CSS"
    // },
    // {
    //     id: "JavaScript", text: "JavaScript"
    // },
    // {
    //     id: "React", text: "React"
    // },
    // {
    //     id: "Node", text: "Node"
    // },
    // {
    //     id: "Express", text: "Express"
    // },
  ]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <div className="w-full sm:w-1/2 sm:mr-2">
      <h1 className="text-gray-800 font-semibold"> Skills:</h1>

      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
        editable
        classNames={{
          tagInputField:
            "w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500",
          tag: "bg-indigo-600  text-white font-medium py-1 px-2 rounded-md mr-2  ",
          remove:
            "text-white bg-gray-200 bg-opacity-40 px-[5px] text-sm mb-4 ml-2 hover:text-red-600 hover:bg-gray-100 hover:bg-opacity-90 rounded-full",
        }}
        placeholder="Add skills"
      />
    </div>
  );
};

export default Apti;
