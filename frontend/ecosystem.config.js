module.exports = {
  apps: [
    {
      name: "scolivre-frontend",
      script: "npm",
      args: "start",
      cwd: "./",
      env: {
        NODE_ENV: "development",
        // Suppress Node.js warnings
        NODE_NO_WARNINGS: "1",
        // Alternative: suppress specific warnings
        // NODE_OPTIONS: "--no-warnings --no-deprecation"
      },
      env_production: {
        NODE_ENV: "production",
        NODE_NO_WARNINGS: "1",
      },
      watch: true,
      ignore_watch: ["node_modules", "logs", "build", ".git"],
      max_memory_restart: "3G",
      error_file: "logs/frontend-error.log",
      out_file: "logs/frontend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: "max",
      exec_mode: "cluster",
      autorestart: false, // Disable automatic restarts
      // Alternative: limit restart attempts
      // max_restarts: 5,
      // min_uptime: "10s",

      // Additional options to handle warnings gracefully
      kill_timeout: 5000,
      listen_timeout: 3000,
      restart_delay: 4000,
    },
  ],
};
