import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('<h1 id="h1"><marquee>React Code Editor by Mahesh</marquee></h1><h2>Start Your Practice...</h2>');
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
