module.exports = {
  apps: [
    {
      name: 'lp-reatc8082',
      script: 'yarn',
      args: 'start',
      env: {
        "PORT": 8082,
        "NODE_ENV": "development",
      },
    },
  ],
};


