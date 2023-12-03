import { compose } from '@reduxjs/toolkit';
import { Client, Account, ID } from "appwrite";


var userIdArr =[]
// const char = s.split('')

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656b4b7e9ce253111911'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
