'use client'

import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/lib/react-query'

export default function ClientProviders({ children }: { children: ReactNode }) {
  const queryClient = useQueryClientInstance()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}