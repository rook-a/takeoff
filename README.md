# Takeoff

## Стек

- React 18
- Redux / ReduxToolkit
- Typescript
- Axios
- Material UI
- json-server

### Запуск проекта

Версия node: v16.13.0

```bash
  git clone git@github.com:rook-a/takeoff.git

  cd takeoff

  npm install

  npm start
```

`npm start запускает клиентскую и серверную часть приложения в одной консоли, параллельно.`

### Запуск клиентской части

```bash
npm run start:client
```

Приложение доступно по адресу [http://localhost:3000](http://localhost:3000).

### Запуск серверной части

```bash
npm run start:server
```

Сервер доступен по адресу [http://localhost:3001](http://localhost:3001)

### Список роутов

- **GET** http://localhost:3001/contacts — получить список контактов.

- **GET** http://localhost:3001/contacts/1 — получить контакт c идентификатором `id`.

- **PUT** http://localhost:3001/contacts/1 — изменить контакт c идентификатором `id`.

- **DELETE** http://localhost:3001/contacts/1 — удалить контакт c идентификатором `id`.

- **POST** http://localhost:3001/contacts — отправить новый заказ.

- **POST** http://localhost:3001/users — отправить `логин и пароль` для фейковой авторизации.
