import { useEffect } from 'react';

import {
  MIN_WIDTH_DESKTOP,
  MIN_WIDTH_TABLET,
  DESKTOP_OPTIONS,
  TABLET_OPTIONS,
  MOBILE_OPTIONS,
} from './constants';

export default function useMoviesLimiter(setLimiterOptions) {
  useEffect(() => {
    function changeOptions() {
      const width = window.innerWidth;

      if (width > MIN_WIDTH_DESKTOP) {
        setLimiterOptions(DESKTOP_OPTIONS);
      } else if (width > MIN_WIDTH_TABLET) {
        setLimiterOptions(TABLET_OPTIONS);
      } else {
        setLimiterOptions(MOBILE_OPTIONS);
      }
    }

    const limitWithDelay = () => {
      setTimeout(() => {
        changeOptions();
      }, 600);
    };

    changeOptions();

    window.addEventListener('resize', limitWithDelay);

    return () => {
      window.removeEventListener('resize', limitWithDelay);
    };
  }, [setLimiterOptions]);
}
