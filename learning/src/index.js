import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />

        {/* <HelloWorld></HelloWorld> */}
    </div>
);