### Переменные окружения

UPLOAD_DIRECTORY_PATH=<path to upload> - путь директории для загрузки

MONGO_DB=readme-file-vault - Имя базы данных

MONGO_HOST=localhost - Имя хоста базы данных

MONGO_PORT=27018 - Порт базы данных

MONGO_USER=admin - Имя пользователя базы данных

MONGO_PASSWORD=123456 - Пароль базы данных

MONGO_AUTH_BASE=admin - Имя базы данных с учетными данными

SERVE_ROOT=/static - директория хранения статики

PORT=3000 - Порт для входящих соединений

NODE_ENV=development - Режим окружения

### Запуск докер контейнера

docker compose --file ./apps/file-vault/docker-compose.dev.yml --project-name "readme-file-vault" --env-file ./apps/file-vault/file-vault.env up -d