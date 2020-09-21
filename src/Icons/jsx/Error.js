import * as React from 'react';

function SvgError(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          d="M13.565 2.464a3 3 0 01.994.994l7.324 11.977A3 3 0 0119.323 20H4.676a3 3 0 01-2.56-4.565L9.442 3.458a3 3 0 014.124-.994zm-2.418 2.038L3.823 16.478A1 1 0 004.676 18h14.647a1 1 0 00.854-1.522L12.853 4.502a1 1 0 00-1.706 0zM12 14a1 1 0 110 2 1 1 0 010-2zm0-6a1 1 0 011 1v3a1 1 0 01-2 0V9a1 1 0 011-1z"
          id="error_svg__a"
        />
      </defs>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask id="error_svg__b" fill="#fff">
          <use xlinkHref="#error_svg__a" />
        </mask>
        <g mask="url(#error_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgError;
