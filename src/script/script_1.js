const variableToExport = 'exported variable';
const variableToExport_2 = 'exported variable 2';

const functionExample = () => {
    const text = 'Example function from script_1!';
    sessionStorage.getItem('logSwitcher') ? console.log(text) : '';
    return text;
}

export { variableToExport, functionExample, variableToExport_2 as variableToExport_2_renamed };
export let newVariable = 'let variable expoted'; // also var, const, ecc...

