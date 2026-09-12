import createClient from "openapi-fetch";
import type { paths } from "./api-schema";

export const evokeApi = createClient<paths>({ 
  baseUrl: "https://api.evoke.eu" 
});

export type { paths };
