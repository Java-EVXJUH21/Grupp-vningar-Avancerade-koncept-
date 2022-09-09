/*
När är det passande att använda async-programmering?
*/

// När man behöver utföra tyngre jobb (spara filer, skicka HTTP etc). Ofta viktigt att jobbet
// använder så lite beroende data som möjligt så att data inte korrupteras.