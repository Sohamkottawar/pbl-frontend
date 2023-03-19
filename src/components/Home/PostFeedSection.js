import PostModal from "../Post/Modal";
import { useGetPosts } from "../../hooks/posts.hook";

function PostFeedSection() {
  const { isLoading, data } = useGetPosts()
  const posts = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer at XYZ Corp",
      postTitle: "My thoughts on the latest tech trends",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 15,
      comments: 30,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Manager at ABC Inc",
      postTitle: "Tips for creating engaging social media content",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 8,
      comments: 1,
    },
    {
      id: 3,
      name: "Bob Johnson",
      title: "Project Manager at LMN Corp",
      postTitle: "How to manage remote teams effectively",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 12,
      comments: 5,
    },
    {
      id: 4,
      name: "Jane Smith",
      title: "Marketing Manager at ABC Inc",
      postTitle: "Tips for creating engaging social media content",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 8,
      comments: 1,
    },
    {
      id: 5,
      name: "Bob Johnson",
      title: "Project Manager at LMN Corp",
      postTitle: "How to manage remote teams effectively",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 12,
      comments: 5,
    },
  ];

  return (
    <div className="">
      <PostModal />
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Feed</h3>

      {/* Post Cards */}
      <div className="grid grid-cols-1 gap-4 overflow-y-scroll h-[90vh]  ">
        {!isLoading ? posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/150"
                alt={post.name}
                className="rounded-full h-8 w-8 object-cover mr-2"
              />

              {/* Name and Title */}
              <div>
                <h4 className="text-base font-semibold text-gray-800">
                  {post.name}
                </h4>
                <p className="text-sm text-gray-500">{post.title}</p>
              </div>
            </div>

            {/* Post Title */}
            <h5 className="text-base font-semibold text-gray-800 mb-2">
              {post.postTitle}
            </h5>

            {/* Post Description */}
            <p className="text-sm text-gray-600 mb-4">{post.postDescription}</p>

            {/* Likes and Comments */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                </svg>
                {post.likes}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />{" "}
                </svg>
                {post.comments}
              </span>
            </div>

            {/* Like and Comment Section */}
            {/* <div className="flex items-center text-sm text-gray-500">
              <button className="bg-transparent rounded-md p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <span className="mr-4">
                {post.likes} {post.likes === 1 ? "Like" : "Likes"}
              </span>
              <button className="bg-transparent rounded-md p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5h4a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4m6 0l2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7l-2-2z"
                  />
                </svg>
              </button>
              <span>
                {post.comments} {post.comments === 1 ? "Comment" : "Comments"}
              </span>
            </div> */}

            {/* Comment Section */}
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  <img
                    src="https://source.unsplash.com/random/400x400"
                    alt="User"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full border border-gray-200 rounded-md p-2"
                  ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Post
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {/* Comment Card */}
                <div className="flex space-x-4">
                  <div className="w-10 h-10">
                    <img
                      src="https://source.unsplash.com/random/401x401"
                      alt="User"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">John Doe</span>
                      <span className="text-gray-500 text-xs">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas modi debitis dolore voluptatem quidem tempore nam
                      quae aperiam. Modi expedita eum unde fuga debitis saepe
                      nobis itaque, ea aspernatur recusandae?
                    </p>
                  </div>
                </div>

                {/* Comment Card */}
                <div className="flex space-x-4">
                  <div className="w-10 h-10">
                    <img
                      src="https://source.unsplash.com/random/402x402"
                      alt="User"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">Jane Doe</span>
                      <span className="text-gray-500 text-xs">5 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas modi debitis dolore voluptatem quidem tempore nam
                      quae aperiam. Modi expedita eum unde fuga debitis saepe
                      nobis itaque, ea aspernatur recusandae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center text-gray-500 text-xl font-bold">
            Loading...
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default PostFeedSection;