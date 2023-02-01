import Web3 from 'web3';

let web3, accounts;
window.addEventListener('load', async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      accounts = await web3.eth.getAccounts();
      alert('Signed in with' + accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
    //   } else if (window.web3) {
    //     web3 = new Web3(window.web3.currentProvider);
    //     accounts = await window.web3.eth.getAccounts();
    //     alert('Signed in with' + accounts[0]);
    //     console.log(accounts);
  } else {
    console.log(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
});

const valueinput = document.getElementById('value');
const recepientinput = document.getElementById('recepient');
const sendtxbtn = document.getElementById('sendtxbtn');

sendtxbtn.addEventListener('click', async () => {
  const weivalue = web3.utils.toWei(valueinput.value);
  const recepient = recepientinput.value;

  web3.eth
    .sendTransaction({
      from: accounts[0],
      to: recepient,
      value: weivalue,
    })
    .on('transactionhash', function (hash) {
      alert('tx hash: ' + hash);
    })
    .on('receipt', function (receipt) {
      alert('tx receipt: ' + receipt);
    })

    .on(error, console.error);
});

web3.eth.getTransaction(txHash, function (error, result) {
  if (!error) console.log(result);
  else console.error(error);
});
