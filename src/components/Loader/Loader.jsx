import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <BallTriangle
        height={50}
        width={50}
        radius={4}
        color="#3f51b9"
        ariaLabel="ball-triangle-loading"
        visible={true}
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
      />
    </>
  );
};
