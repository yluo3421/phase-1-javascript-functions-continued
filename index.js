// code your solution here
function saturdayFun(activity = 'roller-skate') {
    let answer = `This Saturday, I want to ${activity}!`;
    return answer;
}

function mondayWork(activity = 'go to the office') {
    let answer = `This Monday, I will ${activity}.`;
    return answer;

}

function wrapAdjective(visualFlair = '*') {
    let emphatic = '';
    if (visualFlair === '*') {
           emphatic = 'a hard worker';
    }
    else if (visualFlair === '||') {
        emphatic = 'a dedicated programmer';   
    }
    const inner = function (emphatic) {
        return `You are ${visualFlair}${emphatic}${visualFlair}!`;
    }
    return inner;

}
