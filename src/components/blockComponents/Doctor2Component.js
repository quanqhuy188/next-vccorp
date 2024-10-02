import React from 'react';

const Doctor2Component = ({ className, color, width, height, opacity, src, widthImg, heightImg, children }) => {
  return (
    <div className={className}>
      <svg
        width={width || 366}
        height={height || 415}
        viewBox="0 0 366 415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M350.722 97.0057L352.224 94.4086L350.722 97.0058C354.184 99.0073 357.06 101.886 359.061 105.353C361.061 108.82 362.115 112.753 362.117 116.758V297.939C362.117 301.945 361.064 305.881 359.063 309.35C357.063 312.819 354.186 315.699 350.722 317.702L194.006 408.291C190.542 410.292 186.612 411.346 182.613 411.346C178.614 411.346 174.685 410.292 171.221 408.291C171.221 408.291 171.22 408.291 171.22 408.291L14.5123 317.702C11.0485 315.699 8.17159 312.819 6.17117 309.35C4.17072 305.881 3.11734 301.945 3.11719 297.939V116.769C3.11734 112.762 4.17072 108.827 6.17117 105.358C8.1716 101.889 11.0485 99.0082 14.5123 97.0058L14.5125 97.0057L171.22 6.40073C171.22 6.40056 171.221 6.40039 171.221 6.40022C174.685 4.39903 178.614 3.3457 182.613 3.3457C186.612 3.3457 190.542 4.39921 194.006 6.40073L350.722 97.0057Z"
          stroke="#07F9FE"
          stroke-width="6"
          fill="url(#pattern1)"
        />
        <defs>
          <pattern id="pattern1" patternUnits="userSpaceOnUse" width={widthImg} height={heightImg}>
            <image href={src} width={widthImg} height={heightImg} preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>
      </svg>
      {children}
    </div>
  );
};

export default Doctor2Component;
