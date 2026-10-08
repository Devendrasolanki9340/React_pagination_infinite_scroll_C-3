import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import TanStack from '../src/TanSack.jsx'
import Infinite from '../src/infinite.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Infinite/>
        {/* <TanStack/> */}
    </QueryClientProvider>
)
