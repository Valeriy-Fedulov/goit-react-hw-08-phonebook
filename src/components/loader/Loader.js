import Loader from 'react-loader-spinner';

export const Loading = () => (
  <Loader
    className="Loader"
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
  />
);
