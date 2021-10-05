# Worklog

Lets bring two dummy images to the mainnet.

1. Create a wallet 

  solana config set --url https://api.mainnet-beta.solana.com

  solana-keygen new --outfile ./config-solana/test-main.json

  password: cSold5bdf32
  passphrase: venue junk flat predict render play together dress modify blossom family village
  
  * Note: returns wallet pubkey:  
  *3FVZgDq6szHAEDBeXeACfWN3juS2irBSUd8ma9nDrDBE*

2. Use it

  solana config set --keypair ./config-solana/test-main.json

3. Fund it

  Transfer real SOL to the wallet above

  $ solana balance 
  0.000097561 SOL

 
 4. Upload  

 ts-node ./metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets-test --env mainnet-beta --keypair ./config-solana/test-main.json

  'Transfer: insufficient lamports 87561, need 6013440',

  * Note: initialized config for a candy machine with publickey: 
  *F9fLBEzimJ5PHdq9mQnXLsesrmL5CHMYHo7bo7WwV1xE*

 5. Create candy machine

 ts-node ./metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env mainnet-beta --keypair ./config-solana/test-main.json --price 0.00000001

  * Note: Returns candy machine pubkey:
  *29ZKE49kjoHB3uNeRGmmijx5LayNYNBZZSqwS2pbWswA*


 6. Update

 ts-node ./metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine --env mainnet-beta --keypair ./config-solana/test-main.json --price 0.00000001 --date '5 Oct 2021 12:00:00 GMT'

  * Note: Returns startDate timestamp: 
  *1633435200* (5 Oct 2021 12:00:00 GMT)

  6.1. Mint one token

 7. Update site env

REACT_APP_CANDY_MACHINE_CONFIG=*FROM 4*
REACT_APP_CANDY_MACHINE_ID=*FROM 5*
REACT_APP_TREASURY_ADDRESS=*FROM 1*
REACT_APP_CANDY_START_DATE=*FROM 6*

REACT_APP_SOLANA_NETWORK=mainnet-beta
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.mainnet-beta.solana.com


 8. Rebuild site

 9. Upload site