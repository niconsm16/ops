import { ResponsiveProvider } from '../context/ResponsiveContext'
import { Home } from '../components/Home/Home'

export const App = () => {

    return (
        <ResponsiveProvider>
            <Home />
        </ResponsiveProvider>
    )
}

