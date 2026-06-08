# Git Workshop Conference Deck

عرض ويب تفاعلي لورشة العمل الجماعي وإدارة المشاريع البرمجية باستخدام Git وGitHub وGitLab. المشروع مبني كأداة عرض جاهزة للمحاضرة، مع وضع محاضر، وضع عملي، صفحات مساعدة للطلاب، ودعم العمل بدون إنترنت.

## Screenshots

ضع لقطات الشاشة المنتجة من العرض في `docs/screenshots/` عند تجهيز صفحة المستودع:

- `deck.png`: العرض الرئيسي.
- `speaker.png`: وضع المحاضر.
- `live.png`: وضع التطبيق المباشر.
- `student.png`: صفحة الطالب.

## Features

- 35 شريحة بتصميم GitHub Dark مع GitLab Orange accent.
- Keyboard navigation, search, speaker notes, progress, QR, PDF export.
- `/speaker`: لوحة محاضر مع الشريحة الحالية، التالية، الملاحظات، والمؤقت.
- `/lab`: checklist للتطبيق العملي.
- `/live`: واجهة شبيهة VS Code لتجربة أوامر Git ورؤية أثرها على الرسم.
- `/student`: Git cheat sheet، روابط، خطوات lab، بحث، وFAQ.
- Mermaid diagrams يتم تحميلها عند الحاجة فقط عبر `React.lazy` و`Suspense`.
- PWA installable app مع service worker وoffline cache.
- Command Center عبر `Ctrl + K`.

## Keyboard Shortcuts

- `ArrowRight` أو `Space`: التالي.
- `ArrowLeft`: السابق.
- `B`: Black screen mode.
- `F`: Fullscreen.
- `T`: Timer.
- `N`: Toggle notes.
- `L`: Laser pointer mode.
- `/`: Search slides.
- `Ctrl + K`: Command Center.
- `E`: Export PDF.
- `Esc`: إغلاق الطبقات النشطة.

## Routes

- `/`: العرض الرئيسي.
- `/speaker`: وضع المحاضر.
- `/lab`: وضع التطبيق العملي.
- `/live`: live coding mode.
- `/student`: student companion.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

راجع [DEPLOYMENT.md](./DEPLOYMENT.md) لتجهيز GitHub Pages وVercel وNetlify.

## Project Structure

```text
src/
  App.tsx
  components/
  pages/
  slides/
  styles.css
public/
  pwa-icon.svg
.github/workflows/deploy.yml
```
