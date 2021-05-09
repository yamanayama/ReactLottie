import React, { useState, createContext } from "react";

export const AnimationContext = createContext([false, () => {}]);

export function AnimationContextProvider(props) {
  const [visible, setVisible] = useState(false);
  return (
    <AnimationContext.Provider value={[visible, setVisible]}>
      {props.children}
    </AnimationContext.Provider>
  );
}
