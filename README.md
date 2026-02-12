# AI Portfolio + Blog (Next.js)

Лендинг-портфолио с блогом на `MDX`, собранный на `Next.js App Router`.
Проект включает SEO-роуты (`sitemap`, `robots`), RSS, динамические OG-изображения и клиентскую форму подписки.

## Что есть в проекте

- `Next.js` (App Router)
- `React` + `TypeScript`
- `Tailwind CSS v4 alpha`
- Контент блога в `MDX` (`app/blog/posts/*.mdx`)
- SEO: `app/sitemap.ts`, `app/robots.ts`
- RSS: `app/rss/route.ts`
- Dynamic OG image: `app/og/route.tsx`
- `@vercel/analytics` и `@vercel/speed-insights`
- UI-компоненты лендинга в `app/components/*`

## Быстрый старт

### 1. Требования

- `Node.js` 18+
- `pnpm` 8+

### 2. Установка

```bash
pnpm install
```

### 3. Запуск в dev-режиме

```bash
pnpm dev
```

Приложение будет доступно по адресу: `http://localhost:3000`.

## Скрипты

```bash
pnpm dev      # локальная разработка
pnpm build    # production build (Turbopack в Next canary)
pnpm start    # запуск production-сборки
```

Дополнительно (если `pnpm build` падает в текущем окружении из-за Turbopack):

```bash
pnpm exec next build --webpack
```

## Структура проекта

```text
app/
  api/subscribe/route.js        # API для формы подписки
  blog/
    posts/*.mdx                 # статьи блога
    [slug]/page.tsx             # страница поста
    page.tsx                    # список постов
    utils.ts                    # парсинг frontmatter + утилиты дат
  components/                   # секции лендинга и UI-компоненты
  og/route.tsx                  # динамическая OG-картинка
  rss/route.ts                  # RSS фид
  sitemap.ts                    # sitemap.xml
  robots.ts                     # robots.txt
  layout.tsx                    # общий layout
  page.tsx                      # главная страница
public/                         # изображения и статика
```

## Как добавить пост в блог

1. Создай файл в `app/blog/posts`, например `my-post.mdx`.
2. Добавь frontmatter в начале файла:

```mdx
---
title: 'My post title'
publishedAt: '2026-02-12'
summary: 'Short description of the post'
image: '/blog/my-post/cover.jpg'
---

Контент поста...
```

3. Пост автоматически появится в списке `/blog` и будет доступен по `/blog/my-post`.

## Форма подписки

- UI: `app/components/ContactForm/ContactForm.tsx`
- API endpoint: `POST /api/subscribe` (`app/api/subscribe/route.js`)
- Сейчас реализована базовая валидация email и возврат JSON-ответа.

## SEO и feed

- `GET /sitemap.xml` генерируется из `app/sitemap.ts`
- `GET /robots.txt` из `app/robots.ts`
- `GET /rss` из `app/rss/route.ts`
- `GET /og` из `app/og/route.tsx`

## Деплой

Рекомендуемый вариант: Vercel.

1. Подключи репозиторий в Vercel.
2. Build command: `pnpm build` (или `pnpm exec next build --webpack`, если нужно обойти Turbopack-падение в вашем окружении).
3. Output: стандартный для Next.js.

## Troubleshooting

- Предупреждение о `multiple lockfiles`:
  - Next может выбрать корень workspace не там, где ожидается.
  - Решение: оставить один lockfile на верхнем уровне monorepo или явно задать root в конфиге Next.
- Ошибка Turbopack в sandbox/ограниченном окружении:
  - Использовать fallback: `pnpm exec next build --webpack`.
