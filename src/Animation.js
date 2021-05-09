import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import { AnimationContext } from './AnimationContext';
import animationData from './modules/jump.json';
import './Animation.css'

export default function Animation() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [visible, setVisible] = useContext(AnimationContext);

  return (
    <>
      <div className="visibleArea">
        <Lottie
          className="visibleItem"
          options={defaultOptions}
          width={400}
          height="100%"
          eventListeners={[
            {
              eventName: 'complete',
              callback: obj => {
                if (visible === true) {
                  console.log(obj);
                  setVisible(!visible);
                }
              }
            }
          ]}
        />
      </div>
    </>
  );
}
