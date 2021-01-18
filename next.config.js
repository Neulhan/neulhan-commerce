const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const path = require("path");
require("dotenv").config();

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      webpack(config, options) {
        config.resolve = {
          alias: {
            "@src": path.join(__dirname, "src"),
            "@components": path.join(__dirname, "src", "components"),
            "@containers": path.join(__dirname, "src", "containers"),
            "@lib": path.join(__dirname, "src", "lib"),
            "@store": path.join(__dirname, "src", "store"),
            "@pages": path.join(__dirname, "src", "pages"),
            "@interface": path.join(__dirname, "src", "@types/interface.ts"),
          },
          ...config.resolve,
        };

        // config.resolve.alias['@src'] = path.join(__dirname, 'src')
        // config.resolve.alias['@components'] = path.join(__dirname, 'src', 'components')
        // config.resolve.alias['@interface'] = path.join(__dirname, 'src', '@types/interface.ts')
        // config.resolve.extensions = ['js', 'ts', 'tsx']
        return config;
      },
      env: {
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      },
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
