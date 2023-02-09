let Web3 = require('web3');
import abi from './abi.json';

let web3,
  accounts,
  addVoter,
  proposal,
  fetchWinner,
  castVote,
  fetchCandidate,
  ballotContract;

window.addEventListener('load', async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (err) {
      console.error(err);
    }
    accounts = await web3.eth.getAccounts();
    ballotContract = new web3.eth.Contract(
      abi.abi,
      '0x65884003870e20d7Cb9F8239E924d7Da55396E81',
      { from: accounts[0] }
    );
    alert('Signed in with: ' + accounts[0]);
  } else {
    alert('Metamask not installed');
  }
});

addVoter = document.getElementById('addVoter');
fetchWinner = document.getElementById('fetchWinner');
fetchCandidate = document.getElementById('candidate_index');
castVote = document.getElementById('castVote');

addVoter.addEventListener('click', async () => {
  await ballotContract.methods
    .giveRightToVote(document.getElementById('voter_new').value)
    .send({
      from: accounts[0],
    })
    .on('transactionHash', function (hash) {
      alert('transactionHash: ' + hash);
    })
    .on('confirmation', function (confirmationNumber, receipt) {})
    .on('receipt', function (receipt) {
      console.log(receipt);
    })
    .on('error', function (error, receipt) {
      console.log(error);
    });
});

fetchWinner.addEventListener('click', async () => {
  const winner = await ballotContract.methods
    .winnerName()
    .call({ from: accounts[0] });
  document.getElementById('winner').innerText = winner;
});

//cast vote
castVote.addEventListener('click', async () => {
  await ballotContract.methods
    .vote(document.getElementById('candidate_index').value)
    .send({
      from: accounts[0],
    })
    .on('transactionHash', function (hash) {
      alert('transactionHash: ' + hash);
    })
    .on('confirmation', function (confirmationNumber, receipt) {})
    .on('receipt', function (receipt) {
      console.log(receipt);
    })
    .on('error', function (error, receipt) {
      console.log(error);
    });
});
