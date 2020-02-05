module.exports = {
  apps: [
    {
      name: 'lp-react8082',
      script: 'yarn',
      args: 'serve -s build -p $PORT -T ',
      env: {
        "PORT": 8082,
        "NODE_ENV": "development",
      }
    },
  ],
};


