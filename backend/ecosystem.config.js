module.exports = {
  apps: [
    {
      name: "scolivre-backend",
      script: "manage.py",
      args: "runserver 127.0.0.1:8000",
      interpreter: "python",
      env: {
        NODE_ENV: "development",
        DJANGO_SETTINGS_MODULE: "backend.settings",
        PYTHONPATH: "./",
      },
      env_production: {
        NODE_ENV: "production",
        DJANGO_SETTINGS_MODULE: "backend.settings",
      },
      watch: false,
      ignore_watch: ["node_modules", "logs", "__pycache__", "*.pyc", "migrations", "venv"],
      max_memory_restart: "3G",
      error_file: "logs/backend-error.log",
      out_file: "logs/backend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
    }
  ]
};