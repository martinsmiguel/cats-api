import React from 'react'
import ReactQueryProvider from './lib/Tanstack'
import { AuthProvider } from './lib/Auth'

export interface ProvidersProps {
    children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
    const { children } = props;

    return (
        <ReactQueryProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ReactQueryProvider>
    )
}

export default Providers