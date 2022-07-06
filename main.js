document.addEventListener('DOMContentLoaded', () => {
    hljs.initHighlightingOnLoad();

    const codeBlock = document.getElementById('gCode-cell');
    const copyButton = document.getElementById('gCode-copy-button');
    const copySuccess = document.getElementById('gCode-copy-success');

    const copyTextHandler = () => {
        // first version - document.execCommand('copy')
        // var tempEditor = document.createElement('textarea');
        // document.body.appendChild(tempEditor);
        // tempEditor.value = codeBlock.innerText;
        // tempEditor.select();
        // document.execCommand('copy');
        // document.body.removeChild(tempEditor);

        // copySuccess.classList.add('show-message');
        // setTimeout(() => {
        //     copySuccess.classList.remove('show-message');
        // }, 2700);

        // second version - clipboard API
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            copySuccess.classList.add('show-message');
            setTimeout(() => {
                copySuccess.classList.remove('show-message');
            }, 2700);
        }, () => {
            console.log('Error writing to the clipboard')
        })
    };

    copyButton.addEventListener('click', copyTextHandler)
});
