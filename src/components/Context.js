import { createContext, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
export const AppContext = createContext();
export default function Context() {
    const [user, setUser] = useState(undefined);
    const [theme, setTheme] = useState('light');
    return <>
        <AppContext.Provider value={{user, setUser, theme, setTheme}}>
            <Header/>
            <Body/>
            <Footer/>
        </AppContext.Provider>
    </>
}