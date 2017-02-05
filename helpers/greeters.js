function regularGreeter(greeting, to, from) {
    return greeting + ', ' + to + "! - " + from;
}

function jsonGreeter(greeting, to, from) {
    return {
        greeting: greeting + ', ' + to + "! - " + from
    };
}

module.exports = {
    regularGreeter: regularGreeter,
    jsonGreeter: jsonGreeter
}
