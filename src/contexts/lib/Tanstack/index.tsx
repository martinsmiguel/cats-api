import React from 'react';

import { ReactQueryProviderProps } from './types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
};

export default ReactQueryProvider;
