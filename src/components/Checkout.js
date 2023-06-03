import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

// Import necessary libraries
const solanaWeb3 = require('@solana/web3.js');
const splToken = require('@solana/spl-token');

// Connect to the Solana network
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

// Create a wallet keypair
const walletKeyPair = solanaWeb3.Keypair.generate();

// Mint tokens for each item
async function mintToken(item, recipientAddress) {
    const provider = new solanaWeb3.Account(walletKeyPair.secretKey);
    const mint = new splToken.Token(
    connection,
    new solanaWeb3.PublicKey('your-mint-address'),
    splToken.TOKEN_PROGRAM_ID,
    provider
    );

    // Create a transaction to mint the tokens
    const transaction = await mint.createMintToInstruction(
    splToken.TOKEN_PROGRAM_ID,
    new solanaWeb3.PublicKey('your-mint-address'),
    recipientAddress,
    provider.publicKey,
    [],
    item.quantity // Number of tokens to mint for the item
    );

    // Sign and send the transaction
    const { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = provider.publicKey;

    const signedTransaction = await solanaWeb3.sendAndConfirmTransaction(
    connection,
    transaction,
    [provider]
    );

    console.log('Tokens minted for item:', item.name, signedTransaction);
}

// Example usage
const shoppingCart = [
    { name: 'Item 1', quantity: 2 },
    { name: 'Item 2', quantity: 3 },
    // Add more items as needed
];

let totalQuantity = 0;

// Mint tokens for each item in the shopping cart
shoppingCart.forEach((item) => {
    mintToken(item, walletKeyPair.publicKey);
  totalQuantity += item.quantity; // Calculate the total quantity
});

console.log('Total quantity of tokens:', totalQuantity);
