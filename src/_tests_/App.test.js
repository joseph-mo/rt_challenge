import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../components/App';
import { ReviewsContext } from '../context/reviews-context';
import ReviewsList from '../components/reviews/ReviewsList';

test('Full app rendering', () => {
  const history = createMemoryHistory();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});

const customRender = (ui, { providerProps, history, ...renderOptions }) => {
  return render(
    <BrowserRouter>
      <ReviewsContext.Provider history={history} {...providerProps}>
        {ui}
      </ReviewsContext.Provider>
    </BrowserRouter>,
    renderOptions
  );
};

const providerProps = {
  value: {
    reviews: [
      {
        id: '5d707203b65083001e956f0a',
        author: 'Weeks Duran',
        place: 'Big Johns Burgers',
        published_at:
          'Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)',
        rating: 5,
        content: 'Some Test Content',
      },
    ],
  },
};

test('ReviewsList renders review correctly given data from provider', () => {
  customRender(<ReviewsList />, { providerProps });
  expect(screen.getByText('Big Johns Burgers')).toBeInTheDocument();
  expect(screen.getByText('Some Test Content')).toBeInTheDocument();
  expect(screen.getByText('Weeks Duran')).toBeInTheDocument();
  expect(screen.getByText('6/27/1974')).toBeInTheDocument();
  expect(screen.getAllByTestId('review-item-rating').length).toEqual(5);
});

test('ReviewsList rendered review is clickable and should navigate to different path', () => {
  const history = createMemoryHistory();
  customRender(<ReviewsList />, { providerProps, history });
  const cardLink = screen.getByTestId('review-card-link');
  userEvent.click(cardLink);
  const newPath = 'review/' + providerProps.value.reviews[0].id;
  expect(cardLink.href).toMatch(newPath);
});
