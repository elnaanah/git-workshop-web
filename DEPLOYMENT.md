# Deployment

## Production Build

```bash
npm ci
npm run build
```

المخرجات في `dist/`.

## GitHub Pages

تمت إضافة workflow:

```text
.github/workflows/deploy.yml
```

الخطوات:

1. ادفع إلى branch `main`.
2. من إعدادات المستودع، فعّل GitHub Pages من GitHub Actions.
3. workflow يبني المشروع وينشر `dist`.

## Vercel

- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- أضف rewrite للـSPA routes عند الحاجة:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Netlify

- Build command: `npm run build`.
- Publish directory: `dist`.
- أضف ملف `_redirects` داخل `public` إذا احتجت دعم refresh لكل المسارات:

```text
/* /index.html 200
```

## Offline Mode

PWA يعمل عبر `vite-plugin-pwa` ويولد:

- `dist/sw.js`
- `dist/manifest.webmanifest`
- `dist/registerSW.js`

افتح الموقع مرة واحدة بعد النشر لتسجيل service worker قبل الاعتماد على offline mode.
