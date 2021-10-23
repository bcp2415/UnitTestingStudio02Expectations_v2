function launchOutput(entry) {
    output = "";
    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
        output += "Rutabagas! That doesn't work.";
    }

    if (entry%2 === 0 && entry%3 === 0 && entry%5 === 0){
        output += "LaunchCode Rocks!";
    } else if (entry%2 === 0 && entry%3 === 0 ){
        output += "LaunchCode!";
    } else if (entry%3 === 0 && entry%5 === 0){
        output += "Code Rocks!";
    } else if (entry%2 === 0 && entry%5 === 0){
        output += "Launch Rocks! ";
    } else if (entry%2 === 0){
        output += "Launch";
    } else if (entry%3 === 0){
        output += "Code";
    } else if (entry%5 === 0){
        output += "Rocks!";
    }

    if (output === "Launch Rocks! "){
        output += "(CRASH!!!!)";
    }
    
    return output;
}

module.exports = launchOutput;