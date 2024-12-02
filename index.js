// code your solution here
// saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork function
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// wrapAdjective function
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
