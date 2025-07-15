import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef((
  { highlight, className, width = 46, height = 29, ...props },
  ref
) => {
  const id = useId();
  const clipId = `${id}-monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width={width}
      height={height}
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Clip path shaped as a capital “H” */}
          <path d="M0 0 H8 V29 H16 V16 H30 V29 H38 V0 H30 V13 H16 V0 H8 Z" />
        </clipPath>
      </defs>

      {/* Base fill */}
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />

      {/* Optional highlight overlay */}
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

Monogram.displayName = 'Monogram';