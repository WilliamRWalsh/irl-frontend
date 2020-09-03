import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./flipcard.scss";

const FlipCard = props => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 80 },
  });
  return (
    <div>
      <button onClick={() => set(state => !state)}>Other side</button>
      <a.div
        className="c front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {props.front}
      </a.div>
      <a.div
        className="c back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        {props.back}
      </a.div>
    </div>
  );
};

export default FlipCard;
