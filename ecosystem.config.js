module.exports = {
    apps : [{
      name: "app",
      script: "backend/server.bundle.js",
      env: {
        TZ: 'America/Bogota'
      }
    }]
  }