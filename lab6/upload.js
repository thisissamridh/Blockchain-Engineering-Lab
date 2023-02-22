//import { Web3Storage } from 'web3.storage';
//import { getFilesFromPath } from 'web3.storage';
const w3s = require('web3.storage');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJlNjlkMkNmNThCOUUyNzBmOTU5MzYwMjQ4MWEwNDNiODNiMjE2N2QiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzcwNTQyOTg2NDYsIm5hbWUiOiJCTE9DS0NIQUlOTEFCNiJ9.WC37plxo8Cc7P2clr8lPt8QD6jZvEC8ChkcKC4RiUB8';

// async function getFiles(path) {
//   const files = await w3s.getFilesFromPath(path);
//   console.log(`read ${files.length} file(s) from ${path}`);
//   return files;
// }

// async function storeFiles(files) {
//   const client = new w3s.Web3Storage({ token: token });
//   const cid = await client.put(files);
//   console.log('stored files with cid:', cid);
//   return cid;
// }

// storeFiles(getFiles('./data.json'));

async function upload(path) {
  const client = new w3s.Web3Storage({ token: token });

  const obj = {
    message: 'Hello World',
  };
  const buffer = Buffer.from(JSON.stringify(obj));
  const files2 = await w3s.getFilesFromPath(path);
  const files = [new w3s.File([buffer], 'hello.json')];

  const cid = await client.put(files);
  const cid2 = await client.put(files2);
  console.log(cid);
  console.log(cid2);
}
const path = './data.json';
upload(path);
