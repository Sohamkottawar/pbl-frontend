import Left from "../components/Messages/Message_left"
import Middle from "../components/Messages/Message_middle";
import Right from "../components/Messages/Message_right";
 function Message() {
  return (
    <div className="flex flex-row">
      {/* Profile Section on the left */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block ">
        <Left />
      </div>

      {/* Post and Feed Section in the center */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4">
        <Middle />
      </div>

      {/* Recommendations Section on the right */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block">
        <Right />
      </div>
    </div>
  );
}
    export default Message;

