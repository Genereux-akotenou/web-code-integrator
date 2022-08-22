document.addEventListener('DOMContentLoaded', () => {
    hljs.initHighlightingOnLoad();
    
    const codeBlock = document.getElementsByClassName('gCode-cell');
    const copyButton = document.getElementsByClassName('gCode-copy-button');
    const copySuccess = document.getElementsByClassName('gCode-copy-success');
    console.log(codeBlock);
    console.log(copyButton);
    console.log(copySuccess);

    const copyTextHandler = (i_current) => {
        //i_current=1;
        console.log(i_current);
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
        navigator.clipboard.writeText(codeBlock[i_current].innerText).then(() => {
            copySuccess[i_current].classList.add('show-message');
            setTimeout(() => {
                copySuccess[i_current].classList.remove('show-message');
            }, 2700);
        }, () => {
            console.log('Error writing to the clipboard')
        })
    };

    
   
     console.log(copyButton.length);
for (let i = 0; i <=copyButton.length-1; ++i) {
    console.log(i);
    copyButton[i].addEventListener('click', function(){copyTextHandler(i)}, false);
}
    
});
