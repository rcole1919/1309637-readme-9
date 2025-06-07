### Переменные окружения

MONGO_DB=readme.users - Имя базы данных

MONGO_HOST=localhost - Имя хоста базы данных

MONGO_PORT=27017 - Порт базы данных

MONGO_USER=admin - Имя пользователя базы данных

MONGO_PASSWORD=123456 - Пароль базы данных

MONGO_AUTH_BASE=admin - Имя базы данных с учетными данными

PORT=3000 - Порт для входящих соединений

NODE_ENV=development - Режим окружения

JWT_ACCESS_TOKEN_SECRET - Jwt токен секрет

JWT_ACCESS_TOKEN_EXPIRES_IN - Время жизни токена

### Запуск докер контейнера

docker compose --file ./apps/user/docker-compose.dev.yml --project-name "readme-user" --env-file ./apps/user/user.env up -d