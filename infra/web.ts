import { database } from "./database";
import { domain } from "./domain";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

export const web = new sst.aws.TanstackStart("Web", {
  domain: {
    name: domain,
    redirects: ["www." + domain],
    dns: sst.cloudflare.dns(),
  },
  path: "./packages/web",
  link: [database],
  environment: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
});

export const outputs = {
  web: web.url,
};
