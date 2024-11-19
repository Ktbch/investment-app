import React from 'react'
import AllRoutes from './routes/AllRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserContextProvider } from './context/userContext/UserContext'

function App () {
  const queryClient = new QueryClient()
  return (
    <div className='bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <AllRoutes />
        </UserContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
