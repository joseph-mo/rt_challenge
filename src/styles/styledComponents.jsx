import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  position: relative;
  width: ${(props) => (props.listView ? '23rem' : '80vw')};
  height: 25rem;
  margin: ${(props) => (props.listView ? '25px' : '40px auto')};
  padding: ${(props) => (props.listView ? '20px' : '50px')};
  color: black;
  background-color: #fbfcfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;

  &:hover {
    transform: ${(props) => (props.listView ? 'scale(1.02, 1.02)' : '')};
    box-shadow: ${(props) =>
      props.listView ? '0px 10px 50px rgba(0, 0, 0, 0.2)' : ''};
  }

  @media (max-width: 676px) {
    width: 300px;
    margin: 10px auto;
    padding: 30px;
  }
`;

export const FormContainer = styled.div`
  width: 30rem;
  height: 25rem;
  margin: 40px auto;
  padding: 50px;
  background-color: #fbfcfd;
  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 676px) {
    width: 300px;
    padding: 30px;
  }
`;

export const ResponseContainer = styled.div`
  position: relative;
  width: 80vw;
  margin: 40px auto;
  padding: 50px;
  color: black;
  background-color: #fbfcfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 676px) {
    width: 300px;
    margin: 20px auto;
    padding: 30px;
  }
`;
