export const createDivToDom = (divID, param) => {
    const div = document.createElement('div');
    const text = document.createTextNode(param);
    div.appendChild(text);
    const content = document.querySelector(divID);
    content.appendChild(div);
}

export const enableLog = () => {
    const logBtn = document.querySelector('#logBtn');
    logBtn.addEventListener('click', () => {
        sessionStorage.setItem('logSwitcher','on');
        window.location.reload();
    });
}