// GET Request function for API
function httpGet(url) {
    let xhr  = new xhrRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin","xhrRequest")
    xhr.open( "GET", url, false );
    xhr.send( null );
    return xhr.responseText;
}


// Start Typing function
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

document.addEventListener('DOMContentLoaded', function () {
//    startTyping();
    console.log("this works!")
});