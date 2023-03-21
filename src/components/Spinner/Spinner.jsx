import { MutatingDots } from 'react-loader-spinner';
import Spinner from 'react-bootstrap/Spinner';

export const SpinnerMutatingDots = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#00aeff"
      secondaryColor="#00aeff"
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
