import PropTypes from "prop-types";
import { forwardRef, memo } from "react";

import eye from "./eye.svg";
import * as faceSvgs from "./faces";
import classes from "./logo.module.css";

const MINUS_FORTY_DEGREES = -0.6981;
const MINUS_FORTY_FIVE_DEGREES = -0.7854;
const STEP = 0.001;
const HALF = 0.5;

const Logo = memo(
  forwardRef(function Logo({ size, faces, x, y }, ref) {
    const [left, right] = faces;

    return (
      <div
        className={classes.logo}
        ref={ref}
        style={{
          "--size": `${size}px`,
          "--transform": `scaleY(1.2) translateZ(-${size}px) rotateX(${
            MINUS_FORTY_DEGREES - STEP * y
          }rad)
          rotateY(${MINUS_FORTY_FIVE_DEGREES + STEP * x}rad)`,
          "--z-translation": `${size * HALF}px`,
          "--left-face-flip": left.reverse ? "rotateY(180deg);" : "none",
          "--right-face-flip": right.reverse ? "rotateY(180deg);" : "none",
        }}
      >
        <div className={classes.cube}>
          <div className={`${classes.face} ${classes.left}`}>
            <img src={faceSvgs[left.image]} alt={left.image} />
            {left.eye && (
              <img className={classes.eye} src={eye} alt="left eye" />
            )}
          </div>
          <div className={`${classes.face} ${classes.right}`}>
            <img src={faceSvgs[right.image]} alt={right.image} />
            {right.eye && (
              <img className={classes.eye} src={eye} alt="right eye" />
            )}
          </div>
        </div>
      </div>
    );
  })
);

Logo.propTypes = {
  size: PropTypes.number.isRequired,
  faces: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOf([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ]),
      reverse: PropTypes.bool,
      eye: PropTypes.bool,
    })
  ).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

Logo.defaultProps = {
  size: 64,
  faces: [
    { image: "I", reverse: false, eye: true },
    { image: "C", reverse: false, eye: false },
  ],
  x: 0,
  y: 0,
};

export default Logo;
