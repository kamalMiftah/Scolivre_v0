module.exports = {
  apps: [
    {
      name: "scolivre-frontend",
      script: "npm",
      args: "start",
      cwd: "./",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      watch: true,
      ignore_watch: ["node_modules", "logs", "build", ".git"],
      max_memory_restart: "500M",
      error_file: "logs/frontend-error.log",
      out_file: "logs/frontend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
    }
  ]
};