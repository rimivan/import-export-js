const func = (param) => {
    sessionStorage.getItem('logSwitcher') ? console.log(`Default function from script_2, ${param}`) : '';
    return `Default function from script_2, ${param}`;
}

const secondFunc = () => {
    sessionStorage.getItem('logSwitcher') ? console.log('Second function from script_2') : '';
    return 'Second function from script_2';
}

export default func;
export { secondFunc };