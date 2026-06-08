# Presenter Guide

## Before The Session

1. شغل build production:

```bash
npm run build
npm run preview
```

2. افتح العرض الرئيسي من preview.
3. افتح `/speaker` في شاشة المحاضر أو نافذة منفصلة.
4. مر على الشرائح التي تحتوي diagrams مرة واحدة إذا كنت تريد ضمان cache كامل قبل فصل الإنترنت.

## Keyboard Controls

| Key | Action |
| --- | --- |
| `ArrowRight` / `Space` | Next slide |
| `ArrowLeft` | Previous slide |
| `B` | Black screen |
| `F` | Fullscreen |
| `T` | Timer |
| `N` | Speaker notes |
| `L` | Laser pointer |
| `/` | Search slides |
| `Ctrl + K` | Command Center |
| `E` | Export PDF |
| `Esc` | Close overlays / blackout |

## Routes

- `/`: deck mode.
- `/speaker`: presenter dashboard.
- `/lab`: lab checklist.
- `/live`: live coding mode.
- `/student`: student companion.

## Projection Notes

- استخدم Full HD إن أمكن.
- اختبر `F` fullscreen قبل بداية المحاضرة.
- اجعل `/student` متاحا عبر QR أو رابط مختصر للطلاب.
- في وضع offline، افتح التطبيق مرة واحدة online بعد build/preview حتى يسجل service worker.
