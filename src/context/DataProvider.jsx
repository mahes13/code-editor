import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
  <body>
  <h1 id="h1"><marquee>CodeEditor by Mahesh</marquee></h1>
 <div class="container">
        <div class="left">
            <h1>Left Side</h1>
        </div>
        <div class="right">
            <h1>Right Side</h1>
        </div>
    </div>
    <div class="button-container">
        <button onclick="changeColors()">Change Colors</button>
    </div>
  </body>
</html>`);
    const [js, setJs] = useState(`function changeColors() {
            // Get the left and right div elements
            const leftDiv = document.querySelector('.left');
            const rightDiv = document.querySelector('.right');

            // Generate random colors
            const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
            const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);

            // Set the new background colors
            leftDiv.style.backgroundColor = randomColor1;
            rightDiv.style.backgroundColor = randomColor2;
        }
    `);
    const [css, setCss] = useState(`body {
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        #h1{color:rgb(136, 136, 222)}
        .container {
            display: flex;
            flex: 1;
        }
        .left, .right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .left {
            background-color: #f0f0f0;
        }
        .right {
            background-color: #d0d0d0;
        }
        .button-container {
            padding: 20px;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }`);

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
