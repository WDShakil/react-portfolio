import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svgHover}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="-9 -12 100 100"
    >
      <defs>
        <clipPath id="6a20aae007">
          <path
            fill="#000000"
            className="cls-1"
            d="M 24 9.238281 L 61.765625 9.238281 L 61.765625 56 L 24 56 Z M 24 9.238281 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="1ccf8daac6">
          <path
            className="cls-1"
            d="M 13.015625 19 L 51 19 L 51 65.488281 L 13.015625 65.488281 Z M 13.015625 19 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#6a20aae007)" id="Layer_2" data-name="Layer 2">
        <path
          className="cls-1"
          d="M 31.800781 20.117188 L 37.496094 16.828125 L 61.96875 30.957031 L 61.96875 23.367188 L 37.496094 9.238281 L 24.574219 16.699219 L 24.574219 24.613281 L 55.394531 42.40625 L 55.394531 55.421875 L 61.96875 51.625 L 61.96875 37.539062 Z M 31.800781 20.117188 "
        />
      </g>
      <g clip-path="url(#1ccf8daac6)" id="Layer_5" data-name="Layer 5">
        <path
          className="cls-1"
          d="M 43.195312 54.875 L 37.496094 58.164062 L 13.027344 44.035156 L 13.027344 51.625 L 37.496094 65.757812 L 50.421875 58.292969 L 50.421875 50.378906 L 19.601562 32.589844 L 19.601562 19.570312 L 13.027344 23.367188 L 13.027344 37.457031 Z M 43.195312 54.875 "
        />
      </g>
    </svg>
  );
};
