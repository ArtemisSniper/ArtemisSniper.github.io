const app = require("express")();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.render("index");
});

app.listen(8080, () => {
    console.log("Listening on port 8080\nhttp://localhost:8080");
});
