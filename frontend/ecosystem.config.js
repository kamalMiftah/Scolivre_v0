module.exports = {
  apps: [
    {
      name: "scolivre-frontend",
      script: "npx",
      args: "serve -s build",
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
      watch: false, // Disable watching since we're serving static files
      ignore_watch: ["node_modules", "logs", "build", ".git"],
      max_memory_restart: "1G", // Reduced since static file serving needs less memory
      error_file: "logs/frontend-error.log",
      out_file: "logs/frontend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: 1, 
      exec_mode: "fork", 
      autorestart: true,
      max_restarts: 10,
      min_uptime: "30s", // Increased for better stability
      restart_delay: 5000, // Slightly increased delay between restarts

      // Handle process gracefully
      kill_timeout: 5000,
      listen_timeout: 8000,
      wait_ready: false, // Changed since serve doesn't emit ready event
    },
  ],
};
