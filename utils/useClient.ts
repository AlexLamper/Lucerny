// utils/useClient.ts

import { useEffect } from 'react';

export const useClient = (): void => {
  useEffect(() => {
    // Simulate marking the component as a client entry point
    console.log('Marked as client-side component');
  }, []);
};
