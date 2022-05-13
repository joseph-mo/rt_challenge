import { useState, createContext } from 'react';
import { reviewsData } from '../reviewsData';

export const ReviewsContext = createContext({
  reviews: [],
  addEditResponse: (reviewId, reviewAuthor, response) => {},
  deleteResponse: (reviewId) => {},
});

export default (props) => {
  const [reviewsList, setReviewsList] = useState(reviewsData);

  const addEditResponse = (id, author, responseText) => {
    setReviewsList((currentReviewsList) => {
      const updatedReviews = [...currentReviewsList];
      const reviewIndex = currentReviewsList.findIndex(
        (review) => review.id === id
      );
      const responseObj = {
        response: {
          author,
          responseText,
        },
      };
      updatedReviews[reviewIndex] = {
        ...currentReviewsList[reviewIndex],
        ...responseObj,
      };
      return updatedReviews;
    });
  };

  const deleteResponse = (id) => {
    setReviewsList((currentReviewsList) => {
      const updatedReviews = [...currentReviewsList];
      const reviewIndex = currentReviewsList.findIndex(
        (review) => review.id === id
      );
      delete updatedReviews[reviewIndex].response;
      return updatedReviews;
    });
  };

  return (
    <ReviewsContext.Provider
      value={{ reviews: reviewsList, addEditResponse, deleteResponse }}
    >
      {props.children}
    </ReviewsContext.Provider>
  );
};
