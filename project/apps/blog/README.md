### Переменные окружения

POSTGRES_DB=readme.blog - Имя базы данных

POSTGRES_USER=admin - Имя пользователя базы данных

POSTGRES_PASSWORD=123456 - Пароль базы данных

PGADMIN_DEFAULT_EMAIL - Логин pgadmin

PGADMIN_DEFAULT_PASSWORD - Пароль pgadmin 

### Запуск докер контейнера

docker compose --file ./apps/blog/docker-compose.dev.yml --project-name "readme-blog" --env-file ./apps/blog/blog.env up -d