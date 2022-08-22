document.addEventListener('DOMContentLoaded', () => {
    const COPY_METHODE = 2;

    hljs.initHighlightingOnLoad();
    
    const codeBlock = document.getElementsByClassName('gCode-cell');
    const copyButton = document.getElementsByClassName('gCode-copy-button');
    const copySuccess = document.getElementsByClassName('gCode-copy-success');

    const copyTextHandler = (i_current) => {
        // first version - document.execCommand('copy')
        if(COPY_METHODE == 1) {
            var tempEditor = document.createElement('textarea');
            document.body.appendChild(tempEditor);
            tempEditor.value = codeBlock[i_current].innerText;
            tempEditor.select();
            document.execCommand('copy');
            document.body.removeChild(tempEditor);

            copySuccess[i_current].classList.add('show-message');
            setTimeout(() => {
                copySuccess[i_current].classList.remove('show-message');
            }, 2700);
        }
        else if(COPY_METHODE == 2) { 
            // second version - clipboard API
            navigator.clipboard.writeText(codeBlock[i_current].innerText).then(() => {
                copySuccess[i_current].classList.add('show-message');
                setTimeout(() => {
                    copySuccess[i_current].classList.remove('show-message');
                }, 2700);
            }, () => {
                console.log('Error writing to the clipboard')
            })
        }
    };

    for (let i = 0; i <=copyButton.length-1; ++i) {
        copyButton[i].addEventListener('click', function(){copyTextHandler(i)}, false);
    }
});
