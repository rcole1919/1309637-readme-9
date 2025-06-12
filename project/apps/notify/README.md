### Переменные окружения

RABBITMQ_DEFAULT_USER=admin - имя сервиса

RABBITMQ_DEFAULT_PASS=123456 - пароль сервиса

MONGO_DB=readme.notify - Имя базы данных

MONGO_HOST=localhost - Имя хоста базы данных

MONGO_PORT=27019 - Порт базы данных

MONGO_USER=admin - Имя пользователя базы данных

MONGO_PASSWORD=123456 - Пароль базы данных

MONGO_AUTH_BASE=admin - Имя базы данных с учетными данными

RABBIT_HOST=localhost - хостнейм конфигурации сервиса

RABBIT_PASSWORD=test - пароль конфигурации сервиса

RABBIT_PORT=5672 - порт конфигурации сервиса

RABBIT_USER=admin - имя конфигурации сервиса

RABBIT_QUEUE=readme.notify.income - название очереди сервиса

RABBIT_EXCHANGE=readme.notify - название обменника сервиса

PORT=3002 - Порт для входящих соединений

NODE_ENV=development - Режим окружения

### Запуск докер контейнера

docker compose --file ./apps/notify/docker-compose.dev.yml --project-name "readme-notify" --env-file ./apps/notify/notify.env up -d