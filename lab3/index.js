import Web3 from 'web3';


let accounts;
window.addEventListener("load",async()=>{
    if(window.ethereum){
        window.web3 = new Web3(window.ethereum);
        try{
            await window.ethereum.enable();
            accounts = await window.web3.eth.getAccounts();
            alert("Signed in with"+accounts[0])
            console.log(accounts);
        }catch(error){
            console.log(error);
        }
    }else if(window.web3){
        window.web3 = new Web3(window.web3.currentProvider);
        accounts = await window.web3.eth.getAccounts();
        alert("Signed in with"+accounts[0])
        console.log(accounts);
    }else{
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
})
