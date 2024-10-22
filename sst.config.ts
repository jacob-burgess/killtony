/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "killtony",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile:
            input?.stage === "production" ? "boogie-production" : "boogie-dev",
        },
        cloudflare: true,
        planetscale: true,
      },
    };
  },
  async run() {},
});
