
# Repos


#### Public
Holds website  
https://github.com/SquidSid/lambo

#### Private
Holds the inner workings  
https://github.com/SquidSid/lambo-private


# Guides

https://hackmd.io/@levicook/HJcDneEWF
https://dev.to/nicholasoxford/an-annotated-guide-to-the-metaplex-candy-machine-tutorial-2ihd
https://dev.to/nicholasoxford/getting-started-with-metaplex-a-solana-nft-journey-pt-1-1jff

## Requirements
  
  nvm install v14.17.6
  npm install -g ts-node
  brew install pkg-config cairo pango libpng jpeg giflib librsvg jq

## Metaplex

  git clone https://github.com/jorgenskogmo/metaplex.git ~/metaplex-foundation/metaplex
  cd ~/metaplex-foundation/metaplex
  yarn install
  yarn build
  
## Install Solana

  sh -c "$(curl -sSfL https://release.solana.com/v1.7.14/install)"
  export PATH="/Users/js/.local/share/solana/install/active_release/bin:$PATH"
  solana --version #solana-cli 1.7.14 (src:5bdb8242; feat:1824749018)
  
  solana config set --url https://api.devnet.solana.com
  solana config set --url https://api.mainnet-beta.solana.com

  solana-keygen new --outfile ~/.config/solana/devnet.json
  used BIP39 Passphrase "cSold5bdf32"

  result:
  Wrote new keypair to /Users/js/.config/solana/devnet.json
  ==============================================================================
  pubkey: 6ifTTUyAEm3kcxnYKmi3LSFF7hwPam2Wcbm11Gr1pP2n
  ==============================================================================
  Save this seed phrase and your BIP39 passphrase to recover your new keypair:
  item fantasy flavor dirt identify feed asset left chronic estate worth peasant
  ==============================================================================

  solana config set --keypair ~/.config/solana/devnet.json

  ### Transfer a single SOL to the devnet account required for the upload to work

  solana balance
  solana airdrop 1

## Prepare assets

see repos/sid/assets

## Upload

cd ~/repos/sid/

ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets --env devnet --keypair ~/.config/solana/devnet.json

## Create candy machine

ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --keypair ~/.config/solana/devnet.json

wallet public key: 6ifTTUyAEm3kcxnYKmi3LSFF7hwPam2Wcbm11Gr1pP2n
create_candy_machine finished. candy machine pubkey: BcJdiKBn1mXeouxJoD3HYTVysQzNZz7D5sjaAKfoqto6

## Verify (TODO)

ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts verify --env devnet --keypair ~/.config/solana/devnet.json

## Update

ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts \
    update_candy_machine \
    --env devnet \
    --keypair ~/.config/solana/devnet.json \
    --price 0.000000001 \
    --date "3 Oct 2021 17:00:00 GMT"

## Get Unix time

Math.round(new Date("3 Oct 2021 17:00:00 GMT").getTime()/1000);

# website 

git clone https://github.com/exiled-apes/candy-machine-mint.git site

// from .cache/devnet-temp
// config value
REACT_APP_CANDY_MACHINE_CONFIG=
// return value from create_candy_machine
// candy machine pubkey
REACT_APP_CANDY_MACHINE_ID=
// I just put my solana wallet address?
REACT_APP_TREASURY_ADDRESS=
// unix date
// see https://www.unixtimestamp.com/
REACT_APP_CANDY_START_DATE=1633254198

REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com