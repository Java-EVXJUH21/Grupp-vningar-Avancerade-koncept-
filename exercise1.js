/*

Följande avklippt kod innehåller en funktion som används av ’get’ funktionen. Kopiera och
skriv om koden så att funktionen ’echo’ blir en arrow funktion i stället.

function echo(req, res) {
    res.send(req.body);
}

app.get('/echo', echo);
*/

app.get('/echo', (req, res) => {
    res.send(req.body);
});