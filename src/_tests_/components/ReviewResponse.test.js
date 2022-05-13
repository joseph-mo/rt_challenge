import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewReponse from '../../components/reviews/ReviewResponse';

const setup = () => {
  const utils = render(<ReviewReponse />);
  const authorInput = utils.getByPlaceholderText('Your name...');
  const responseInput = utils.getByPlaceholderText('Add Response...');
  const submitBtn = screen.getByDisplayValue('Submit');
  return {
    authorInput,
    responseInput,
    submitBtn,
    ...utils,
  };
};

test('Renders the component with empty form', () => {
  render(<ReviewReponse />);
  expect(screen.getByText(/Add Response/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your name...'));
  expect(screen.getByPlaceholderText('Add Response...'));
});

test('It should allow a user to type in the input for Your name...', () => {
  const { authorInput } = setup();
  fireEvent.change(authorInput, { target: { value: 'Joe' } });
  expect(authorInput.value).toBe('Joe');
});

test('It should allow a user to type in the input for Your Response...', () => {
  const { responseInput } = setup();
  fireEvent.change(responseInput, { target: { value: 'Dummy Response' } });
  expect(responseInput.value).toBe('Dummy Response');
});
