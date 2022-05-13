import star from '../../images/star.png';
import messageIcon from '../../images/message-icon.png';
import _ from 'lodash';
import { CardContainer } from '../../styles/styledComponents';

const ReviewCard = (props) => {
  const {
    id,
    author,
    place,
    published_at,
    rating,
    content,
    listView,
    response,
  } = props;

  const mapNumberToStars = (num) => {
    return (
      <span>
        {_.times(num, () => (
          <img
            key={id + Math.random()}
            src={star}
            className="review-item__rating"
            alt="Review Rating"
            data-testid="review-item-rating"
          />
        ))}
      </span>
    );
  };

  const convertDateFormat = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <CardContainer className="review-card" listView={listView}>
      <h3 className="review-card__place">{place}</h3>
      <span>{mapNumberToStars(rating)}</span>
      <p className="review-card__content">{content}</p>
      <div className="review-card__footer">
        <p className="review-card__footer-author">{author}</p>
        <p className="review-card__footer-date">
          {convertDateFormat(published_at)}
        </p>
      </div>
      {response && listView && (
        <img
          className="review-card__footer-icon"
          src={messageIcon}
          alt="Message Icon"
        />
      )}
    </CardContainer>
  );
};

export default ReviewCard;
