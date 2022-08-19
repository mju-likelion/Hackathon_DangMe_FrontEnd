import BottomNav from '../BottomNav';
import Lottie from 'react-lottie';
import animationData from '../lottie/Animation.json';
import { LottieBox, ReadyText } from '../styles/LottieStyle';

const ReservationHistory = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <LottieBox>
        <Lottie options={defaultOptions} width={150} height={150} />
        <ReadyText>아직 준비중입니다</ReadyText>
      </LottieBox>
      <BottomNav />
    </div>
  );
};

export default ReservationHistory;
