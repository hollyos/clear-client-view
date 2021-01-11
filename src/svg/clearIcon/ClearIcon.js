import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61">
    <g fill="#0074EE">
      <g transform="translate(5 5)">
        <circle cx="19.1" cy="1.7" r="1.4"/>
        <circle cx="31.8" cy="1.7" r="1.4"/>
        <circle cx="42.8" cy="8.1" r="1.4"/>
        <circle cx="49.1" cy="19.1" r="1.4"/>
        <circle cx="49.1" cy="31.8" r="1.4"/>
        <circle cx="42.8" cy="42.8" r="1.4"/>
        <circle cx="31.8" cy="49.1" r="1.4"/>
        <circle cx="19.1" cy="49.1" r="1.4"/>
        <circle cx="8.1" cy="42.8" r="1.4"/>
        <circle cx="1.7" cy="31.8" r="1.4"/>
        <circle cx="1.7" cy="19.1" r="1.4"/>
        <circle cx="8.1" cy="8.1" r="1.4"/>
      </g>
      <g transform="translate(8 8)">
        <circle cx="4.3" cy="12" r="1.4"/>
        <circle cx="12" cy="4.3" r="1.4"/>
        <circle cx="22.4" cy="1.6" r="1.4"/>
        <circle cx="32.9" cy="4.4" r="1.4"/>
        <circle cx="40.5" cy="12" r="1.4"/>
        <circle cx="43.3" cy="22.4" r="1.4"/>
        <circle cx="40.5" cy="32.9" r="1.4"/>
        <circle cx="32.9" cy="40.5" r="1.4"/>
        <circle cx="22.4" cy="43.3" r="1.4"/>
        <circle cx="12" cy="40.5" r="1.4"/>
        <circle cx="4.3" cy="32.9" r="1.4"/>
        <circle cx="1.6" cy="22.4" r="1.4"/>
      </g>
      <g transform="translate(11 11)">
        <circle cx="6.8" cy="6.8" r="1.4"/>
        <circle cx="2.2" cy="14.8" r="1.4"/>
        <circle cx="2.2" cy="24" r="1.4"/>
        <circle cx="6.8" cy="32.1" r="1.4"/>
        <circle cx="14.8" cy="36.7" r="1.4"/>
        <circle cx="24" cy="36.7" r="1.4"/>
        <circle cx="32" cy="32" r="1.4"/>
        <circle cx="36.7" cy="24" r="1.4"/>
        <circle cx="36.7" cy="14.8" r="1.4"/>
        <circle cx="32.1" cy="6.8" r="1.4"/>
        <circle cx="14.8" cy="2.2" r="1.4"/>
        <circle cx="24" cy="2.2" r="1.4"/>
      </g>
      <circle cx="1.4" cy="30.4" r="1.4"/>
      <circle cx="5.3" cy="15.9" r="1.4"/>
      <circle cx="15.9" cy="5.3" r="1.4"/>
      <circle cx="30.4" cy="1.4" r="1.4"/>
      <circle cx="44.9" cy="5.3" r="1.4"/>
      <circle cx="55.5" cy="15.9" r="1.4"/>
      <circle cx="59.4" cy="30.4" r="1.4"/>
      <circle cx="55.5" cy="44.9" r="1.4"/>
      <circle cx="44.9" cy="55.5" r="1.4"/>
      <circle cx="30.4" cy="59.4" r="1.4"/>
      <circle cx="15.9" cy="55.5" r="1.4"/>
      <circle cx="5.3" cy="44.9" r="1.4"/>
    </g>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Clear Icon');
Icon.Svg = Svg;

export default Icon;