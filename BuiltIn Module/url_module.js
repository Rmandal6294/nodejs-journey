import url from 'url';

const address = 'https://duckduckgo.com/?t=ffab&q=i+am+leraning+Nodejs&ia=web'
const q = url.parse(address, true);

console.log("Hostname: - " + q.host);
console.log("Pathname: - " + q.pathname);

console.log("Stander url: - " + q.href);
console.log("Search: - " + q.search);

const qdata = q.query;
console.log("Query Data: - ", qdata);
console.log(qdata.ia);