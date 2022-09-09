/*
API:et Jsonplaceholder innehåller ett flertal endpoints. Skriv några kodexempel på hur man
kan använda API:et genom att använda ’fetch’.
*/

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'blablabla',
        body: 'friofoei',
        userId: 4,
    }),
    header: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

fetch ('https://jsonplaceholder.typicode.com/comments?postId=3');

fetch ('https://jsonplaceholder.typicode.com/posts/3', {
    method: 'PUT',
    body: JSON.stringify({
        id: 3,
        title: 'blablabla',
        body: 'friofoei',
        userId: 4,
    }),
    header: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});