import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const ReviewItem = (props) => {
  const { id } = props;

  return (
    <Link
      className="text-decoration-none"
      to={`/review/${id}`}
      data-testid="review-card-link"
    >
      <ReviewCard {...props} listView={true} />
    </Link>
  );
};

export default ReviewItem;
