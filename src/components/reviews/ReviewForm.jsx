import { useState, useContext } from 'react';
import { ReviewsContext } from '../../context/reviews-context';
import { FormContainer } from '../../styles/styledComponents';

const ReviewForm = (props) => {
  const { id, hideForm, existingResponse, existingAuthor } = props;
  const [author, setAuthor] = useState(existingAuthor || '');
  const [response, setResponse] = useState(existingResponse || '');
  const addEditResponse = useContext(ReviewsContext).addEditResponse;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addEditResponse(id, author, response);
    hideForm();
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const responseChangeHandler = (event) => {
    setResponse(event.target.value);
  };

  return (
    <FormContainer className="review-form" onSubmit={onSubmitHandler}>
      <h2 className="review-form__title">
        {existingResponse ? 'Edit Response' : 'Add Response'}
      </h2>
      <form className="review-form__body">
        <input
          required
          className="review-form__author"
          type="text"
          placeholder="Your name..."
          onChange={authorChangeHandler}
          value={author}
        />
        <textarea
          required
          className="review-form__response"
          type="text"
          placeholder="Add Response..."
          value={response}
          onChange={responseChangeHandler}
        ></textarea>
        <input className="review-form__submit" type="submit" value="Submit" />
      </form>
    </FormContainer>
  );
};

export default ReviewForm;
