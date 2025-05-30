module.exports = {
  apps: [
    {
      name: "scolivre-frontend",
      script: "npm",
      args: "start",
      cwd: "./",
      env: {
        NODE_ENV: "development",
        PORT: 3000, // Ensure port is set
        NODE_NO_WARNINGS: "1",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        NODE_NO_WARNINGS: "1",
      },
      watch: true,
      ignore_watch: ["node_modules", "logs", "build", ".git"],
      max_memory_restart: "3G",
      error_file: "logs/frontend-error.log",
      out_file: "logs/frontend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: 1, // Start with single instance first
      exec_mode: "fork", // Use fork mode instead of cluster
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      restart_delay: 4000,

      // Handle process gracefully
      kill_timeout: 5000,
      listen_timeout: 8000,
      wait_ready: true,
    },
  ],
};
