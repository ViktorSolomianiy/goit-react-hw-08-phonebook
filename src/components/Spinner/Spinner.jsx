import { MutatingDots } from 'react-loader-spinner';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SpinnerMutatingDots = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#ff9900"
      secondaryColor="#ff9900"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export const SpinnerBorder = () => {
  return <Spinner animation="border" size="sm" />;
};
