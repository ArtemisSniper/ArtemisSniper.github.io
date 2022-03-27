// GET Request function for API
function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


// Start Typer function
function startTyping() {
    var response = httpGet("https://artemis-bot.redstoneradiant.repl.co/api")
    var coolstuff = response.split(" ")
    var discmem = coolstuff[1]
    var stargzr = coolstuff[0]
    new TypeIt("#DiscordMembers", {
        speed: 50,
    })
      .type(discmem, { delay: 1200 })
      .go()
    new TypeIt("#Stargazers", {
        speed: 50,
    })
      .type(stargzr, { delay: 1200 })
      .go()
}
