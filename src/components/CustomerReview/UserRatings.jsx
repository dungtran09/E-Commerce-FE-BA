import React from "react";
import icons from "../../utils/icons";

const UserRatings = () => {
  const { BiSolidImageAdd, GrAttachment, GiPositionMarker } = icons;
  return (
    <>
      <div className="bg-white duration-500">
        <div className="flex flex-col">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full p-2 text-sm text-gray-900 bg-white border-0"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-main rounded-lg">
                  Post comment
                </button>
                <div className="flex pl-0 space-x-1 sm:pl-2">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <GrAttachment size={17} />
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <GiPositionMarker size={20} />
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <BiSolidImageAdd size={20} />
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 border p-2">
          <div className="flex mt-2">*****</div>
          <p className="mt-4 text-md text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-6">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                John Lucas • <span className="font-normal"> 5 minutes ago</span>
              </div>
            </div>
            <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
              +
            </div>
          </div>
        </div>
        <div className="mt-4 border p-2">
          <div className="flex mt-2">*****</div>
          <p className="mt-4 text-md text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-6">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                John Lucas • <span className="font-normal"> 5 minutes ago</span>
              </div>
            </div>
            <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRatings;
