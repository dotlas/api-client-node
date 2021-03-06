# @\_dotlas/api

<!-- Badges -->

![npm](https://img.shields.io/npm/v/@_dotlas/api)
![node-current](https://img.shields.io/node/v/@_dotlas/api)
![GitHub last commit](https://img.shields.io/github/last-commit/dotlas/api-client-node)

A simple client for the [Dotlas REST API](https://api.dotlas.com/docs).

## Installation

### `npm`

```bash
npm i @_dotlas/api
```

### `yarn`

```bash
yarn add @_dotlas/api
```

## Usage

```js
import { Client } from "@_dotlas/api"

// Create a client with your API key
const client = Client("<your-api-key>")

// Create a fetcher for the specific endpoint
const fetcher = client
  .path("/socio-demographics/stats/{city}")
  .method("get")
  .create()

// Call the fetcher
fetcher({ city: "New York" })
  .then(res => res.json())
  .then(res => {
    console.log(res.data)
  })
```
