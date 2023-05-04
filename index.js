// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (duties = "go to the office"){
    return `This Monday, I will ${duties}.`
}

function wrapAdjective(param1 = "*"){
    return function(param2 = "special"){
        return `You are ${param1}${param2}${param1}!`
    }
}
wrapAdjective("%")("a dedicated programmer");