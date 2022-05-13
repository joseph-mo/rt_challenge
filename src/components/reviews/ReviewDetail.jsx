import { useContext } from 'react';
import { ReviewsContext } from '../../context/reviews-context';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import ReviewResponse from './ReviewResponse';

const ReviewDetail = () => {
  const reviewList = useContext(ReviewsContext).reviews;
  const params = useParams();
  const selectedReview = reviewList.filter(
    (review) => review.id === params.id
  )[0];
  return (
    <div className="review-detail">
      <ReviewCard {...selectedReview} />
      <ReviewResponse currentReview={selectedReview} />
    </div>
  );
};

export default ReviewDetail;
