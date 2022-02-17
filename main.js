const abi = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTax", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id_", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids_", "type": "uint256[]" }], "name": "claimMany", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "claimable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claims", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "habibi", "outputs": [{ "internalType": "contract ERC721Like", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "impl_", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "habibi_", "type": "address" }, { "internalType": "address", "name": "treasury_", "type": "address" }, { "internalType": "address", "name": "uniPair_", "type": "address" }, { "internalType": "address", "name": "weth_", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minSwap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ruler", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "minter", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setMinter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "paused_", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ruler_", "type": "address" }], "name": "setRuler", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startingTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "swapping", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniPair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }];

var scrollOnCooldown = false;
const iconUrl = document.getElementById('iconUrl').textContent;

const web3obj = new Web3(web3.currentProvider);
const contractInstance = web3obj.eth.contract(abi).at('0x5fe8c486b5f216b9ad83c12958d8a03eb3fd5060');

window.onload = fetchHabibizUnclaimedOil;
window.onscroll = fetchHabibizUnclaimedOil;

function fetchHabibizUnclaimedOil(e) {
    if (scrollOnCooldown)
        return;

    scrollOnCooldown = true;

    setTimeout(function (e) {
        scrollOnCooldown = false;
    }, 500);

    const nfts = document.getElementsByTagName("article");

    Array.from(nfts).forEach(nft => {
        if (nft.lastChild.id == "unclaimedOil")
            return;

        const id = nft.children[0].children[1].children[0].children[0].children[1].textContent.split('#')[1];

        contractInstance.claimable(parseInt(id), function (error, result) {
            let color = 'color: black;';

            if (!result || !result['c'][0] || !result['c'][1])
                return;

            const weiAmount = result['c'][0].toString() + result['c'][1].toString();
            const unclaimedOil = web3obj.fromWei(weiAmount, 'ether').split('.')[0];

            if (unclaimedOil >= 30000 && unclaimedOil < 50000) {
                color = 'color: green;';
            } else if (unclaimedOil >= 50000) {
                color = 'color: red;';
            }

            const div = document.createElement("div");
            div.style = "position: absolute; right: 10px; top: 5px"
            div.id = "unclaimedOil";
            div.innerHTML = `<div style="background-color:lightgray;border-radius:5px;"><strong style="font-size:120%;margin-left:10px;vertical-align:super;${color}">${unclaimedOil}</strong> <img src='${iconUrl}' width='20px' height='20px' style='vertical-align: text-bottom;margin: 5px 7px 5px 0px;'/></div>`;

            insertAfter(div, nft)
        });
    });
}

function insertAfter(newNode, existingNode) {
    existingNode.appendChild(newNode, existingNode.nextSibling);
}