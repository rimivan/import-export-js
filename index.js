import { variableToExport, variableToExport_2_renamed, newVariable, functionExample } from './src/script/script_1';

import dafaultFunc_1 from './src/script/script_2'; /* default function can be called, in the file where exported, in any name */
import defaultFunc_2 from './src/script/script_2'; /* default function can be called, in the file where exported, in any name */
import {secondFunc} from './src/script/script_2'; /* default function can be called, in the file where exported, in any name */

import randName from './src/script/script_3'; /* default function can be called, in the file where exported, in any name */

import * as allSriptFour from './src/script/script_4'; /* default function can be called, in the file where exported, in any name */

import { createDivToDom, enableLog } from './src/script/utils';
console.log('[INDEX.JS]');

enableLog();
/* from script 1 */
let divId = '#div_1';
createDivToDom(divId, functionExample());
createDivToDom(divId, variableToExport);
createDivToDom(divId, variableToExport_2_renamed);
createDivToDom(divId, newVariable);


/* from script 2 */
divId = '#div_2';
createDivToDom(divId, dafaultFunc_1('number 1'));
createDivToDom(divId, defaultFunc_2('number 2'));
createDivToDom(divId, secondFunc());

/* from script 3 */
divId = '#div_3';
createDivToDom(divId, randName);

/* from script 4 */
createDivToDom(divId, allSriptFour.var_1);
createDivToDom(divId, allSriptFour.var_2);
createDivToDom(divId, allSriptFour.var_3);

if(sessionStorage.getItem('logSwitcher')){
    console.log('---- script_1 START ----');
    console.log(`Variable: ${variableToExport}, ${variableToExport_2_renamed}, ${newVariable}`);
    console.log('---- script_2 START ----');
    console.log('---- script_3 START ----');
    console.log(randName);
    console.log('---- script_4 START ----');
    console.log(allSriptFour);
    console.log(allSriptFour.var_1);
    console.log(allSriptFour.var_2);
    console.log(allSriptFour.var_3);
}