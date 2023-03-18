import React from "react";
import ProfileSection from "../components/Home/ProfileSection";
import PostFeedSection from "../components/Home/PostFeedSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";

function Home() {
  return (
    <div className="flex flex-row">
      {/* Profile Section on the left */}
      <div className="w-1/4 bg-red-400 p-4 ">
        <ProfileSection />
      </div>

      {/* Post and Feed Section in the center */}
      <div className="w-1/2 bg-gray-700 p-4">
        <PostFeedSection />
      </div>

      {/* Recommendations Section on the right */}
      <div className="w-1/4 bg-blue-700 p-4">
        <RecommendationsSection />
      </div>
    </div>
  );
}

export default Home;
