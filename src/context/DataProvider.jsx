import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('<!DOCTYPE html><html lang="en"><body><h1 id="h1"><marquee>CodeEditor by Mahesh</marquee></h1><p>Practice here...</p></body></html>');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('#h1{color:rgb(136, 136, 222)}');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
