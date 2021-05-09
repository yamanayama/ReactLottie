import React, { useContext } from 'react';
import Animation from './Animation';
import { AnimationContext }  from './AnimationContext';

const RabbitJump = () => {
  const [visible, setVisible] = useContext(AnimationContext);

  // すべてチェックされていて、コンテキストのvisibleがfalaseなら表示切替を行う
  const handleClick = () => { setVisible(!visible) };

  return (
    <>
      <button onClick={handleClick}>1回再生</button>
      {visible === true ? <Animation /> : null}
    </>
  );
}

export default RabbitJump;
