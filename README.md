# Hi1 Labs — Website Template

## Структура сайта

```
site/
├── index.html              ← Главная страница Hi1 Labs (список всех приложений)
├── myapp/                  ← Папка-шаблон для одного приложения
│   ├── index.html          ← Лендинг приложения (описание, скриншоты, ссылки на сторы)
│   ├── privacy.html        ← Privacy Policy (ОБЯЗАТЕЛЬНО для Apple & Google)
│   └── terms.html          ← Terms of Service (опционально, но рекомендуется)
└── README.md               ← Этот файл
```

## Как добавить новое приложение

1. Скопируйте папку `myapp/` и переименуйте в slug вашего приложения (например `habitpro/`)
2. В каждом файле найдите все комментарии `🔁 REPLACE` и замените плейсхолдеры
3. В `index.html` (главная) скопируйте блок `<!-- APP CARD TEMPLATE -->` и заполните данными нового приложения
4. Измените `--accent` цвет в CSS каждого приложения для уникального брендинга

## Что менять для каждого приложения

### В `myapp/index.html` (лендинг):
- `<title>` — название приложения
- `--accent` цвет в `:root` — уникальный цвет для этого приложения
- Иконка приложения (замените эмодзи на `<img>` с реальной иконкой)
- Заголовок и описание в Hero секции
- Ссылки на App Store и Google Play (реальные URL после публикации)
- Скриншоты (замените плейсхолдеры на `<img>`)
- Фичи — опишите реальные функции приложения
- Email поддержки — можно app-specific (myapp@hi1labs.com)

### В `myapp/privacy.html`:
- ⚠️ **КРИТИЧНО**: Таблица данных ДОЛЖНА точно совпадать с:
  - App Privacy Labels в App Store Connect
  - Data Safety Form в Google Play Console
- Добавьте/удалите третьесторонние сервисы (Firebase, AdMob, RevenueCat и т.д.)
- Обновите дату "Last updated"

### В `myapp/terms.html`:
- Раскомментируйте секции если у приложения есть:
  - Подписки / покупки
  - Аккаунты пользователей
  - Пользовательский контент
- Укажите юрисдикцию в секции "Governing Law"

## Деплой на Cloudflare Pages (бесплатно)

### Вариант 1: Через GitHub
1. Создайте репозиторий на GitHub (можно приватный)
2. Загрузите папку `site/` в репозиторий
3. В Cloudflare Dashboard → Pages → Create a project → Connect to Git
4. Выберите репозиторий, Build output directory: `/` (или путь к site/)
5. Deploy → Привяжите домен hi1labs.com

### Вариант 2: Direct Upload
1. В Cloudflare Dashboard → Pages → Create a project → Direct Upload
2. Загрузите содержимое папки `site/`
3. Привяжите домен hi1labs.com

## Настройка email (Cloudflare Email Routing)

1. Cloudflare Dashboard → hi1labs.com → Email → Email Routing
2. Включите Email Routing
3. Добавьте адреса:
   - `support@hi1labs.com` → `hi1labs.dev@gmail.com`
   - `hello@hi1labs.com` → `hi1labs.dev@gmail.com`
   - `privacy@hi1labs.com` → `hi1labs.dev@gmail.com`
4. Для отправки ОТ ИМЕНИ @hi1labs.com:
   - Gmail → Настройки → Аккаунты → "Отправлять как" → Добавьте support@hi1labs.com

## Чеклист перед публикацией приложения

- [ ] Privacy Policy страница опубликована и доступна по URL
- [ ] Support страница опубликована и работает на мобильных
- [ ] Таблица данных в Privacy Policy совпадает с App Privacy Labels / Data Safety Form
- [ ] Email support@hi1labs.com работает (отправьте тестовое письмо)
- [ ] Ссылки на сторы обновлены (после публикации)
- [ ] Скриншоты добавлены
- [ ] Open Graph мета-теги заполнены (для красивых превью в соцсетях)

## Цвета для разных приложений (примеры)

```css
/* Зелёный (как на главной) */
--accent: #6ee7b7;

/* Индиго (как в шаблоне myapp) */
--accent: #818cf8;

/* Оранжевый */
--accent: #fb923c;

/* Розовый */
--accent: #f472b6;

/* Голубой */
--accent: #38bdf8;

/* Жёлтый */
--accent: #fbbf24;
```
