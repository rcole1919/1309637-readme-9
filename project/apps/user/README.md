### Переменные окружения

MONGO_DB=readme.users - Имя базы данных

MONGO_HOST=localhost - Имя хоста базы данных

MONGO_PORT=27017 - Порт базы данных

MONGO_USER=admin - Имя пользователя базы данных

MONGO_PASSWORD=123456 - Пароль базы данных

MONGO_AUTH_BASE=admin - Имя базы данных с учетными данными

PORT=3000 - Порт для входящих соединений

NODE_ENV=development - Режим окружения

JWT_ACCESS_TOKEN_SECRET - Jwt access токен секрет

JWT_ACCESS_TOKEN_EXPIRES_IN - Время жизни access токена

JWT_REFRESH_TOKEN_SECRET=secret - Jwt refresh токен секрет

JWT_REFRESH_TOKEN_EXPIRES_IN=5m - Время жизни refresh токена

RABBIT_HOST=localhost - хостнейм конфигурации сервиса RabbitMQ

RABBIT_PASSWORD=test - пароль конфигурации сервиса RabbitMQ

RABBIT_PORT=5672 - порт конфигурации сервиса RabbitMQ

RABBIT_USER=admin - имя конфигурации сервиса RabbitMQ

RABBIT_QUEUE=readme.notify.income - название очереди сервиса RabbitMQ

RABBIT_EXCHANGE=readme.notify - название обменника сервиса RabbitMQ

### Запуск докер контейнера

docker compose --file ./apps/user/docker-compose.dev.yml --project-name "readme-user" --env-file ./apps/user/user.env up -d