import Lottie from 'react-lottie';
import animationData from '../assets/loader.json';

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 200;

const Loader = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="tc pa5">
      <Lottie options={defaultOption} height={DEFAULT_HEIGHT} width={DEFAULT_WIDTH} />
    </div>
  );
};

export default Loader;
