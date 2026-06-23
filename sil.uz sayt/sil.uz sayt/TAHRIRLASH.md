# Singapore International Lyceum (sil.uz) — Saytni tahrirlash qo'llanmasi

Bu sayt **oddiy HTML/CSS/JS** dan iborat. Hech qanday dasturlash bilimisiz ham
matn va rasmlarni o'zgartira olasiz. Quyida hamma narsa qadamma-qadam tushuntirilgan.

---

## 1. Sayt fayllari nima vazifani bajaradi?

| Fayl / papka            | Vazifasi                                                        |
|-------------------------|----------------------------------------------------------------|
| `index.html`            | Bosh sahifa                                                     |
| `about.html`            | "Maktab haqida" sahifasi                                        |
| `programs.html`         | "Dasturlar" sahifasi                                            |
| `admissions.html`       | "Qabul" sahifasi (ariza formasi shu yerda)                     |
| `news.html`             | "Yangiliklar" sahifasi                                          |
| `contacts.html`         | "Kontaktlar" sahifasi (xarita shu yerda)                       |
| `css/styles.css`        | Saytning ranglari va ko'rinishi                                |
| `js/main.js`            | Menyu, forma va animatsiyalar                                  |
| `js/i18n.js`            | **Barcha matnlar 3 tilda (UZ/RU/EN)** — matn shu yerda tahrirlanadi |
| `images/`               | Barcha rasmlar (almashtiriladigan)                            |

---

## 2. Matnni o'zgartirish (MUHIM — diqqat bilan o'qing)

Saytda **3 til** bor: o'zbek (UZ), rus (RU), ingliz (EN). Yuqori o'ng burchakdagi
**UZ / RU / EN** tugmalari matnni darrov almashtiradi. Shu sababli saytdagi
deyarli **barcha matn `js/i18n.js` faylida** — uchala tilda yonma-yon turadi.

➡️ **Matnni o'zgartirish uchun `js/i18n.js` faylini oching** (Bloknot yoki VS Code).
Ichida 3 ta katta bo'lim bor: `uz:` (o'zbekcha), `ru:` (ruscha), `en:` (inglizcha).

Har bir matn shunday ko'rinishda — kalit va matn:

```js
"hero.btn1": "Qabulga yozilish",      // uz bo'limida
"hero.btn1": "Записаться",            // ru bo'limida
"hero.btn1": "Apply now",             // en bo'limida
```

**Misol** — "Qabulga yozilish" tugmasini o'zgartirish:
`js/i18n.js` da `"hero.btn1"` kalitini 3 ta joyda (uz, ru, en) toping va
tirnoq `" "` ichidagi matnni o'zgartiring. Kalitning o'ziga (`hero.btn1`) tegmang.

> ⚠️ **Diqqat:** matnni faqat HTML faylda o'zgartirsangiz, sahifa ochilganda
> til tizimi uni `js/i18n.js` dagi matn bilan almashtirib qo'yadi. Shuning uchun
> matnni **`js/i18n.js` da** o'zgartiring.

**Faqat o'zbekcha kerak bo'lsa** (RU/EN ni o'chirib tashlamoqchi bo'lsangiz),
menga ayting yoki `js/i18n.js` dagi `ru:` va `en:` bo'limlaridagi matnni ham
o'zbekchaga aylantiring.

> 💡 O'zgartirgach faylni **saqlang** (Ctrl+S) va brauzerda sahifani **F5** bilan yangilang.
> Agar o'zgarish ko'rinmasa, **Ctrl+F5** bosing (keshni tozalab yangilash).

### Faqat bitta tildagi alohida narsalar (telefon, ism, narx)
Telefon raqami, email, jamoa a'zolari ismi va narxlar **HTML fayllarda** — ularni
to'g'ridan-to'g'ri `.html` ichida o'zgartirasiz (4-bo'limga qarang).

---

## 3. Rasmlarni almashtirish

Barcha rasmlar `images/` papkasida. Hozir ular vaqtinchalik (placeholder)
rasmlar — har birida qaysi rasm kerakligi yozib qo'yilgan.

**Eng oson usul:** yangi rasmingizni **xuddi shu nom bilan** saqlang, eski faylni
almashtiring. Masalan, `images/hero.svg` o'rniga o'z rasmingizni `hero.svg`
nomi bilan saqlasangiz — sayt avtomatik yangi rasmni ko'rsatadi.

> ⚠️ Agar rasmingiz `.jpg` yoki `.png` bo'lsa (SVG emas), HTML ichidagi
> rasm nomini ham yangilang. Masalan:
> `<img src="images/hero.svg">` ni `<img src="images/hero.jpg">` ga o'zgartiring.

### Qaysi rasm qayerda ishlatiladi:

| Rasm fayli              | Qayerda                                       |
|-------------------------|-----------------------------------------------|
| `images/logo.png`       | Asosiy logotip (sarlavhada) — sizning logoingiz |
| `images/logo.svg`       | Zaxira logotip (logo.png topilmasa) va footer  |
| `images/hero.svg`       | Bosh sahifa katta fon rasmi                   |
| `images/about.svg`      | "Maktab haqida" rasmi                         |
| `images/level-*.svg`    | Bosqichlar (boshlang'ich/o'rta/yuqori)        |
| `images/team-1..4.svg`  | Jamoa a'zolari (direktor, ustozlar)           |
| `images/news-1..3.svg`  | Yangiliklar rasmlari                          |
| `images/favicon.svg`    | Brauzer yorlig'idagi kichik belgi             |

> 📏 Tavsiya: rasmlarni juda katta hajmda yuklamang (1–2 MB dan oshmasin),
> aks holda sayt sekin ochiladi. Rasmlarni siqish uchun: tinypng.com

---

## 4. Telefon, email va manzilni o'zgartirish

Bu ma'lumotlar **har bir sahifada** yuqori chiziqда (topbar), footerда va
kontaktlar sahifasida takrorlanadi. Hammasini o'zgartirish kerak.

Quyidagilarni **barcha 6 ta `.html` faylda** topib almashtiring:

- `+998 (71) 123-45-67` → o'z telefon raqamingiz
- `info@sil.uz` → o'z emailingiz
- `Toshkent sh., Yunusobod tumani` → aniq manzilingiz
- `tel:+998711234567` → telefon (bo'shliqsiz, faqat raqamlar)

> 💡 VS Code dasturidа `Ctrl+Shift+H` orqali bir vaqtning o'zida barcha
> fayllarda almashtirib chiqishingiz mumkin.

---

## 5. Xaritani o'zgartirish (Kontaktlar sahifasi)

`contacts.html` faylida xarita `<iframe>` ko'rinishida joylashgan:

```html
<iframe src="https://www.google.com/maps?q=Tashkent,Yunusobod&output=embed" ...></iframe>
```

**O'z manzilingiz xaritasini qo'yish:**
1. [Google Maps](https://maps.google.com) ni oching, manzilingizni toping.
2. `q=` dan keyingi `Tashkent,Yunusobod` o'rniga aniq manzilingizni yozing,
   masalan: `q=41.311,69.279` (koordinatalar) yoki `q=Singapore+International+Lyceum`.

---

## 6. Ariza / Aloqa formasi (muhim!)

Hozir forma to'ldirilganda faqat "Rahmat" degan xabar chiqadi, lekin
ma'lumotlar **hech qayerga yuborilmaydi**. Haqiqiy ishlashi uchun quyidagilardan
birini tanlang:

- **Eng oson:** [Formspree.io](https://formspree.io) (bepul) — ro'yxatdan o'tib,
  forma manzilini olasiz va `admissions.html` / `contacts.html` dagi
  `<form ...>` tegiga qo'shasiz:
  ```html
  <form class="form" action="https://formspree.io/f/SIZNING_KODINGIZ" method="POST">
  ```
  Shuningdek `js/main.js` dagi formani bloklash qismini o'chiring (`e.preventDefault()`).
- **Telegram bot** orqali yuborish — dasturchi yordami kerak bo'ladi.

---

## 7. Ranglarni o'zgartirish

`css/styles.css` faylining eng boshida `:root` qismi bor. Faqat shu yerdagi
rang kodlarini o'zgartirsangiz — butun sayt rangi yangilanadi:

```css
--red: #d62828;     /* Asosiy rang (qizil) */
--navy: #14213d;    /* To'q ko'k (sarlavhalar, footer) */
--gold: #f4a261;    /* Aksent rang */
```

`#d62828` — rang kodi. Yangi rang kodini [colorhunt.co](https://colorhunt.co)
dan tanlab qo'yishingiz mumkin.

---

## 8. Saytni ko'rish (kompyuterда)

**Eng ishonchli usul:** `OCHISH.bat` faylini **ikki marta bosing**. U kichik
lokal server ishga tushiradi va saytni brauzerда avtomatik ochadi. Sayt
to'liq dizayni bilan ko'rinadi. Yopish uchun chiqqan qora oynani yoping.

> ⚠️ `index.html` ni to'g'ridan-to'g'ri ikki marta bossangiz, ba'zi brauzerlar
> `css` papkasini yuklay olmaydi va sayt **dizaynsiz, faqat matn** bo'lib
> ko'rinadi. Shuning uchun `OCHISH.bat` dan foydalaning. Saytni internetga
> joylashtirganingizdan keyin (9-bo'lim) bu muammo umuman bo'lmaydi.

`OCHISH.bat` ishlashi uchun kompyuterда **Python** o'rnatilgan bo'lishi kerak
(python.org dan bepul). Sizда allaqachon o'rnatilgan.

---

## 9. Saytni internetga joylashtirish (ishga tushirish)

Sayt — statik (server kerak emas), shuning uchun bepul joylashtirsa bo'ladi:

- **Netlify** (netlify.com) — eng oson: papkani sichqoncha bilan saytga
  tashlasangiz (drag & drop), tayyor manzil beradi.
- **Vercel** (vercel.com) — shunga o'xshash.
- **GitHub Pages** — `github.com` da repozitoriy ochib yuklash.
- **sil.uz domeni** — domeningizni xosting/Netlify ga ulang (domen sozlamasida
  DNS yozuvlarini ko'rsatasiz).

### Domenni ulash tartibi (qisqacha):
1. Saytni Netlify ga yuklang.
2. Netlify → "Domain settings" → "Add custom domain" → `sil.uz` ni kiriting.
3. Domeningiz sotib olingan joyda (masalan ahost.uz, uzdom) DNS sozlamasida
   Netlify bergan manzilni ko'rsating.

---

## 10. Tez-tez beriladigan savollar

**Matnда `'` belgisi (o', g', ') buzilib ko'rinsa-chi?**
Faylni **UTF-8** kodlashда saqlang. VS Code da bu avtomatik. Bloknotда
"Save As" → Encoding: **UTF-8** ni tanlang.

**O'zgartirish ko'rinmayapti?**
Brauzerда `Ctrl+F5` bosing (keshni tozalab yangilash).

**Logotipni almashtirsam bo'ladimi?**
Ha — `images/logo.svg` ni o'z logotipingizga almashtiring. Agar `.png` bo'lsa,
barcha sahifaларда `images/logo.svg` ni `images/logo.png` ga o'zgartiring.

---

Savol bo'lsa, har bir HTML fayl ichidagi `<!-- izoh -->` ko'rinishidagi
yozuvlar ham yo'l-yo'riq ko'rsatadi. Omad! 🎓
