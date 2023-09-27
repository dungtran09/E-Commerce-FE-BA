import React, { useState } from "react";
import icons from "../../utils/icons";
import Button from "../Button/Button";
import Star from "./Star";
import UserRatings from "./UserRatings";
import VoteBar from "./VoteBar";
import { PortalToggle } from "../";
import { apiRatings } from "../../apis";

const CustomerReview = ({ product }) => {
  const { BiSolidImageAdd, GrAttachment, GiPositionMarker } = icons;

  const [reviews, setReviews] = useState([]);
  const [updateReviews, setUpdateReviews] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [review, setReview] = useState({});

  const [rating, setRating] = React.useState(0);
  const [selection, setSelection] = React.useState(0);

  const [isError, setIsError] = useState(false);

  const showError = () => {
    setIsError(true);
  };
  const hideError = () => {
    setIsError(false);
  };

  const onClickHandler = (e) => {
    setRating(e?.target.getAttribute("star-id"));
    setSelection(e?.target.getAttribute("star-id"));
    setReview({ ...review, star: e?.target.getAttribute("star-id") });
  };
  // status, message, showError, hideError

  const onDoubleClickHandler = (e) => {
    setSelection(selection - 1);
    setRating(rating - 1);
  };
  const handlerReviewText = ({ target: { value } }) => {
    setReview({ ...review, text: value });
  };

  const handlerOnSubmit = async () => {
    if (!review.text || !review.star) {
      setIsError(true);
      return;
    }
    if (review.text && review.star && product?._id) {
      const res = await apiRatings(review, product?._id);
      console.log(res);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <VoteBar />
        <div className="w-full mt-4">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full p-2 text-sm text-gray-900 bg-white border-0"
                  placeholder="Write a comment..."
                  required
                  onChange={handlerReviewText}
                ></textarea>
              </div>
              <div className="flex flex-col justify-center items-center my-4">
                <div className="flex items-center mb-2 gap-3 rounded-lg p-2 bg-gray-50 text-[25px] text-yellow-400">
                  <div
                    onClick={(e) => onClickHandler(e)}
                    onDoubleClick={(e) => onDoubleClickHandler(e)}
                  >
                    {Array.from({ length: 5 }, (v, i) => (
                      <Star
                        starId={i + 1}
                        key={`star_${i + 1} `}
                        marked={
                          selection ? selection >= i + 1 : rating >= i + 1
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Review this item
                </p>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                {isError && (
                  <PortalToggle
                    showStatus={showError}
                    hideStatus={hideError}
                    message="Please write comment and ratings."
                    status="Error"
                  />
                )}
                <Button
                  name="Post Comment"
                  style="inline-block rounded-lg bg-main hover:opacity-70 text-white font-semibold p-2"
                  onClickHandler={handlerOnSubmit}
                />
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
        <UserRatings />
      </div>
    </>
  );
};

export default CustomerReview;
