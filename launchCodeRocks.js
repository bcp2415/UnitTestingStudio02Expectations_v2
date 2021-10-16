function launchOutput(entry) {
    output = "";
    if (entry%2 === 0){
        output += "Launch";
    } else if (entry%3 === 0){
        output += "Code";
    } else if (entry%5 === 0){
        output += "Rocks";
    }

    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
        output += "Rutabagas! That doesn't work";
    }

    if (output === "Launch Rocks!"){
        output += "(Crash!!!)";
    }
    
    return output;
}

module.exports = {
    createOutput: createOutput
};