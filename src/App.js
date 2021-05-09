import React, {useState} from 'react';
import Lottie from "react-lottie";
import './App.css';
import walk from './modules/walk.json';
import repop from './modules/60279-success-state.json'
import flower from './modules/61174-rose-planter.json'
import bell from './modules/61394-bell.json'
import jumping from './modules/59662-jumping-partners.json'
import RabbitJump from "./RabbitJump";
import { AnimationContextProvider} from "./AnimationContext";

function App() {
  const RabbitWalk = {
    loop: true,
    autoplay: true,
    animationData: walk,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Repop = {
    loop: true,
    autoplay: true,
    animationData: repop,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Flower = {
    loop: true,
    autoplay: true,
    animationData: flower,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Jumping = {
    loop: true,
    autoplay: true,
    animationData: jumping,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Bell = {
    loop: false,
    autoplay: false,
    animationData: bell,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [open, setOpen] = useState(true);
  const handleToggle = () => { setOpen(!open) };

  const [next, setNext] = useState(true);
  const handleClick = () => { setNext(!next) };

  return (
    <div className="App">
      <h1>ボタンを押すとアニメーションが出る</h1>
      <Lottie options={RabbitWalk} height={500} width="100%" />
      <AnimationContextProvider>
        <RabbitJump />
      </AnimationContextProvider>
<br/>

<h1>toggleアニメーション</h1>
      <p>↓を押してね</p>

      <button onClick={handleToggle}>{open ? 'きらーん' : 'フラワー'}</button>
      {open ? (
        <Lottie options={Repop}
          height={500}
          width="100%"
        />
      ) : (
          <Lottie options={Flower} height={500} width="100%"
            eventListeners={[
              {
                eventName: 'complete',
                callback: obj => {
                  if (next === false) {
                    console.log(obj);
                    setNext(!next);
                  }
                }
              }
            ]}
          />
        )
      }

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <h1>Aを再生後、Bを自動再生する</h1>
      <button onClick={handleClick}>Aを再生</button>
      {next ? (
        <Lottie options={Bell}
          height={500}
          width="100%"
          eventListeners={[
            {
              eventName: 'complete',
              callback: obj => {
                if (next === true) {
                  console.log(obj);
                  setNext(!next);
                }
              }
            }
          ]}
        />
      ) : (
          <Lottie options={Jumping} height={500} width="100%"
            eventListeners={[
              {
                eventName: 'complete',
                callback: obj => {
                  if (next === true) {
                    console.log(obj);
                    setNext(!next);
                  }
                }
              }
            ]}
          />
        )
      }
    </div>
  );
}

export default App;
