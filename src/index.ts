import { Fetcher } from "openapi-typescript-fetch"

import { paths } from "./types"

export const Client = (apiKey: string) => {
  const fetcher = Fetcher.for<paths>()

  fetcher.configure({
    baseUrl: "https://api.dotlas.com",
    init: {
      headers: {
        Authorization: apiKey,
      },
    },
  })

  return fetcher
}
