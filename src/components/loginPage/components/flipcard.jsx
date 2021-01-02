import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./flipcard.scss";

const handleFlip = set => {
  return set(state => !state);
};

const FlipCard = props => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 80 },
  });

  let zIndexFront = flipped ? 1 : 10;
  let zIndexBack = flipped ? 10 : 1;

  return (
    <div>
      <a.div
        className="c"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          zIndex: zIndexFront,
        }}
      >
        {React.cloneElement(props.front, {
          disabled: flipped,
          onFlip: () => {
            set(state => !state);
          },
        })}
      </a.div>
      <a.div
        className="c"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
          zIndex: zIndexBack,
        }}
      >
        {React.cloneElement(props.back, {
          disabled: !flipped,
          onFlip: () => {
            set(state => !state);
          },
        })}
      </a.div>
    </div>
  );
};

export default FlipCard;
