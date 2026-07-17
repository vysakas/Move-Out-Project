let mainCss = 'https://ikea-live.oriserve.com/chatbot-ae/static/css/main.c7f9d31f.css';
let runtimeJs = '';
let chunkJs = '';
let mainJs = 'https://ikea-live.oriserve.com/chatbot-ae/static/js/main.a4fa61c1.js';


function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); 
    script.src = url; 
    script.type = 'text/javascript';
    document.head.appendChild(script);
}

function dynamicallyLoadCss (css) {
    var link = document.createElement("link");
    link.href = css;
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

dynamicallyLoadCss(mainCss);
dynamicallyLoadScript(runtimeJs);
dynamicallyLoadScript(chunkJs);
dynamicallyLoadScript(mainJs);
