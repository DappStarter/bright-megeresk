require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift repeat night uncover include clog suspect genuine'; 
let testAccounts = [
"0x08d83502509566ee53097921f4a83542a322cf6f05a050794a3c7c13f5db9d47",
"0xc829aedcabf01c696645196900c78b1d20b13ea1af630e4068bbe85b4cba3664",
"0x7a33dae6bf4ce0acf82324d46bca8922e6dd4675ee648d823a1bed99354bf03e",
"0x84a1f29a1b104d4a557b2208abca92fb42865f4dd1a23bd72a193e05fb0b3e8d",
"0x9991c3cc4a1e84979e6b727d44e3653e7a53b880cecd672209f2d5238db26b15",
"0xbe98958c76f99136978db047872e9dd25f869606591a4abe37af76eeb6fa7473",
"0xdae85fa3baac2cfd523010cfff38c82f3b9e7e7cbb8fc7b9f65417e9a2b070ce",
"0x00de94a7ac50f2239f60389773ea6efb595e00e8cf03d138336f43eb0f1de656",
"0x8296b71dea8f333e07e279a12885a78a24c294c35e6b2133047f983ac0831f47",
"0xb30b2d6cdeb53ccb14ecbfc7c320659d0bfdf492551d68cc1f92f90f27372d82"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
