import { useEffect } from 'react';

export default function useAdditionalClose(isOpen, close, blockSelector) {
  useEffect(() => {
    if (isOpen) {
      function handleEscClose(evt) {
        if (evt.key === 'Escape') {
          close();
        }
      }

      function handleOverlayClose(evt) {
        if (evt.target.classList.contains(blockSelector)) {
          close();
        }
      }

      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('mousedown', handleOverlayClose);

      return () => {
        document.removeEventListener('keydown', handleEscClose);
        document.removeEventListener('mousedown', handleOverlayClose);
      };
    }
  }, [isOpen, close, blockSelector]);
}
