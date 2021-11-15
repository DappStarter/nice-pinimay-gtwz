require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot alley rescue pizza promote junior light army genre'; 
let testAccounts = [
"0x0f70048e1e76d30d7c99736bc13e4eddd21b7011f96f10b00e074c7d9c231e60",
"0x6e2f4104c8379acf3b827155857307a58bba8d4a9d2ff5eb3c3d021e7fd5e849",
"0x1f749a22a098ab5e9bb77571728fca97f1df22076a8bbd9c4be704c51188a81d",
"0x8692e8addec5b6ca0916489874be3f997d04ca35be855cd16ab24bffdc2b5da8",
"0x8dff9ab86aff8a46a116d0831c7b4032df1b9166776be2ca1d6fa7ca5dfe7539",
"0x3a17c7d3114a63e304a5a15bb96fd7b499f252085c856fd78d0c64b8758f6152",
"0x425d1b77fb781b9fdf9961153415ae3bb01fb3f560d14aab60eb63043d1a14f3",
"0x6db4183f4cae1a4286a138fc84f97508e5b550a5c03dbbbc7881375e253de6d4",
"0xd5a9985ae477cec43879b465f3f1978b4f48bd078b821a86fce5f666c875c0fb",
"0x40dc2b7d71bcfe718a2da92f118b702124d8c1b0a30a3fd38b49a81252d62f94"
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
            version: '^0.8.0'
        }
    }
};

