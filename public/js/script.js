// GET Request function for API, Gets the response and returns it.
function httpGet(url) {
    let xhr = new xhrRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin", "xhrRequest")
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
}


// Start Typing function, Calls httpGet to get data from the API and sets up TypeIts' to type in the specified elements.
function startTyping() {
    let response = httpGet("https://artemis-bot.redstoneradiant.repl.co/api")
    let coolstuff = response.split(" ")
    let discmem = coolstuff[1]
    let stargzr = coolstuff[0]
    new TypeIt("#DiscordMembers", {
            speed: 50,
            cursor: false,
        })
        .type(discmem, { delay: 1200 })
        .go()
    new TypeIt("#Stargazers", {
            speed: 50,
            cursor: false,
        })
        .type(stargzr, { delay: 1200 })
        .go()
}

// Event Listener which executes startTyping function when DOM Content finishes getting loaded.
document.addEventListener('DOMContentLoaded', function() {
    //    startTyping();
    console.log("this works!")
});
