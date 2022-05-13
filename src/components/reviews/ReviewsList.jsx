import { useContext } from 'react';
import { ReviewsContext } from '../../context/reviews-context';
import ReviewItem from './ReviewItem';
import { ReviewsContainer } from '../../styles/styledComponents';

const ReviewsList = () => {
  const reviewList = useContext(ReviewsContext).reviews;
  return (
    <ReviewsContainer>
      {reviewList.map((review, idx) =>
        review.response ? (
          <ReviewItem
            key={review.id}
            id={review.id}
            author={review.author}
            place={review.place}
            published_at={review.published_at}
            rating={review.rating}
            content={review.content}
            response={review.response}
          />
        ) : (
          <ReviewItem
            key={review.id}
            id={review.id}
            author={review.author}
            place={review.place}
            published_at={review.published_at}
            rating={review.rating}
            content={review.content}
          />
        )
      )}
    </ReviewsContainer>
  );
};

export default ReviewsList;
