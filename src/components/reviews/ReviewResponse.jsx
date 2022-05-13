import { useState, useEffect, useContext } from 'react';
import { ReviewsContext } from '../../context/reviews-context';
import { Link } from 'react-router-dom';
import { ResponseContainer } from '../../styles/styledComponents';
import ReviewForm from './ReviewForm';
import responseIcon from '../../images/response-icon.png';
import menuIcon from '../../images/menu-icon.png';

const ReviewResponse = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [formInProgress, setFormInProgress] = useState(true);
  const review = props.currentReview;
  let responseText = '';
  let responseAuthor = '';
  if (review && review.response) {
    responseText = review.response.responseText;
    responseAuthor = review.response.author;
  }
  const currentDate = new Date().toLocaleDateString();
  const deleteResponse = useContext(ReviewsContext).deleteResponse;

  const hideFormHandler = () => {
    setFormInProgress(false);
  };

  const editResponseHandler = () => {
    setFormInProgress(true);
    setShowDropdown(false);
  };

  const deleteResponseHandler = () => {
    deleteResponse(review.id);
    setFormInProgress(true);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (props.currentReview?.response?.responseText) {
      setFormInProgress(false);
    }
  }, []);

  return (
    <>
      {!formInProgress ? (
        <ResponseContainer className="review-response">
          <Link to="/">
            <img
              className="review-response__icon"
              src={responseIcon}
              alt="Response Icon"
            />
          </Link>
          <p className="review-response__text">{responseText}</p>
          <div className="review-response__menu">
            <img
              className="review-response__menu-icon"
              src={menuIcon}
              alt="Menu Icon"
              onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
            />
            {showDropdown && (
              <div className="review-response__menu-options">
                <span onClick={editResponseHandler}>Edit</span>
                <span onClick={deleteResponseHandler}>Delete</span>
              </div>
            )}
          </div>

          <div className="review-response__footer">
            <p className="review-response__footer-author">{responseAuthor}</p>
            <p className="review-response__footer-date">{currentDate}</p>
          </div>
        </ResponseContainer>
      ) : (
        <ReviewForm
          id={review?.id}
          hideForm={hideFormHandler}
          existingResponse={responseText}
          existingAuthor={responseAuthor}
        />
      )}
    </>
  );
};

export default ReviewResponse;
