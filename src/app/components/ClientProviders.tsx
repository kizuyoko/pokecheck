'use client'

import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/lib/react-query'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/stores/store'

export default function ClientProviders({ children }: { children: ReactNode }) {
  const queryClient = useQueryClientInstance()

  return (
    <ReduxProvider
      store={store}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  )
}