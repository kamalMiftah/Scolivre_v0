module.exports = {
  apps: [
    {
      name: "scolivre-backend",
      script: "manage.py",
      args: "runserver 0.0.0.0:8000",
      interpreter: "python",
      env: {
        NODE_ENV: "development",
        DJANGO_SETTINGS_MODULE: "backend.settings",
      },
      env_production: {
        NODE_ENV: "production",
        DJANGO_SETTINGS_MODULE: "backend.settings",
      },
      watch: true,
      ignore_watch: ["node_modules", "logs", "__pycache__", "*.pyc", "migrations", "venv"],
      max_memory_restart: "500M",
      error_file: "logs/backend-error.log",
      out_file: "logs/backend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
    }
  ]
};