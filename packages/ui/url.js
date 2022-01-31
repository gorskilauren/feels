import React from "react";
const https = require('https');
import './App.css';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const analyze = async (url) => {
    const result = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
        httpsAgent
    });
    return  (await result.json())['score'];
}

export const Url = () => {
    const [url, setUrl] = React.useState('');
    const [urlScore, setUrlScore] = React.useState('');
    return (<div>
        <p>
            <label style={{fontSize: "22px"}}htmlFor="url">URL to analyze</label>
        </p>
        <p><input type="text" id="url" value={url} onChange={(event) => { setUrl(event.target.value) }} /></p>
        <button type="button" onClick={async () => setUrlScore(await analyze(url))}>Analyze!</button>
        <p style={{fontSize: "22px"}}>Score: {urlScore}</p>

    </div>)
}