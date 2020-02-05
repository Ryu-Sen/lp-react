module.exports = {
  apps: [
    {
      name: 'lp-react8082',
      script: 'npm',
      args: 'start',
      env: {
        "PORT": 8082,
        "NODE_ENV": "development",
      }
    },
  ],
};


