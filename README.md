# 🎂 Cream & Crumb - Cake Website

Welcome! This is a complete, professional cake website ready to customize and publish!

---

## 📁 PROJECT STRUCTURE

```
CakeWebsite/
├── 📄 index.html          ← Main website content (HTML)
├── 📄 style.css           ← All styling and design (CSS)
├── 📄 script.js           ← Interactive features (JavaScript)
├── 🖼️ cake-background.jpg ← Background image
├── 📄 README.md           ← This file
│
└── YOUR IMAGE FOLDER (add your cake photos here):
    ├── cake-hero.jpg      (main hero image)
    ├── cake1.jpg          (showcase 1)
    ├── cake2.jpg          (showcase 2)
    ├── cake3.jpg          (showcase 3)
    ├── birthday-cake.jpg  (offer 1)
    ├── wedding-cake.jpg   (offer 2)
    └── dessert-cake.jpg   (offer 3)
```

---

## 🚀 QUICK START IN VS CODE

### Step 1: Open in VS Code
1. Open VS Code
2. Click `File` → `Open Folder`
3. Select the `CakeWebsite` folder
4. Click `Open`

### Step 2: Install Live Server (Optional but Recommended)
1. Click Extensions icon (left sidebar)
2. Search for "Live Server"
3. Install by Ritwick Dey
4. Click Reload if asked

### Step 3: View Your Website
1. Right-click on `index.html`
2. Click "Open with Live Server"
3. Your website opens in browser automatically! 🎉
4. Any changes you make = instant preview

---

## 📝 HOW TO CUSTOMIZE

### CHANGE BUSINESS NAME

**File:** `index.html`

Find this line (around line 25):
```html
<span>Every Cakes</span>
```

Change to:
```html
<span>Cream & Crumb</span>
```

Save (Ctrl+S) → Website updates instantly! ✓

---

### CHANGE MAIN HEADING

**File:** `index.html`

Find this line (around line 44):
```html
<h1>Handcrafted Cakes for Every Occasion</h1>
```

Change to:
```html
<h1>Your heading here</h1>
```

Save → Updates instantly! ✓

---

### CHANGE DESCRIPTION TEXT

**File:** `index.html`

Find this line (around line 45):
```html
<p>Beautifully designed, freshly baked cakes made with love and care.</p>
```

Change to:
```html
<p>Your description here</p>
```

Save → Updates instantly! ✓

---

### CHANGE COLORS

**File:** `style.css`

Find this section at the top (lines 7-14):
```css
:root {
    --cream: #f5f1ed;
    --light-cream: #faf8f5;
    --beige: #e8e3dd;
    --warm-brown: #a78167;        ← Main color
    --dark-brown: #6b5444;         ← Dark color
    --dark-text: #4a3a30;          ← Text color
    --light-text: #8b7355;         ← Light text
    --gold: #d4af7a;               ← Accent color
}
```

**To change a color:**

1. Find a color you like at https://colorpicker.com
2. Copy the hex code (like #ff6b9d)
3. Replace the color code in style.css
4. Save → All colors update automatically! ✓

**Example:** Change main color from brown to pink:
```css
--warm-brown: #ff6b9d;  ← Changed!
```

---

### ADD YOUR CAKE PHOTOS

**File:** `index.html`

You need these image files in your folder:
- `cake-hero.jpg` - Main hero image
- `cake1.jpg`, `cake2.jpg`, `cake3.jpg` - Showcase cards
- `birthday-cake.jpg`, `wedding-cake.jpg`, `dessert-cake.jpg` - Offers

The HTML code is already set up for them! Just:
1. Save your cake photos as JPG files
2. Put them in the `CakeWebsite` folder
3. Name them exactly as shown above
4. Save the HTML file
5. Website updates automatically! ✓

**Don't have photos yet?** 
- Use free stock photos from:
  - https://unsplash.com (search "cake")
  - https://pexels.com (search "cake")
  - https://pixabay.com (search "cake")
- Download and rename them
- Add to your folder

---

### CHANGE CAKE DESCRIPTIONS

**File:** `index.html`

Find these sections (around lines 81-93):

```html
<h3>Birthday Cakes</h3>
<p>Celebratory cakes for special moments</p>
```

Change the text to whatever you want:

```html
<h3>Custom Birthday Cakes</h3>
<p>Delicious and beautiful cakes for your celebration!</p>
```

Same for Wedding Cakes and Dessert Cakes sections.

---

### CHANGE CONTACT INFORMATION

**File:** `index.html`

Find the footer (around line 103):
```html
<p>&copy; 2026 Every Cakes. All rights reserved. | Watford, UK | Email: hello@everycakes.com | Phone: +44 1923 123456</p>
```

Change to your information:
```html
<p>&copy; 2026 Cream & Crumb. All rights reserved. | [Your City], UK | Email: [your email] | Phone: [your phone]</p>
```

---

### CHANGE FONT SIZE (If text is too big/small)

**File:** `style.css`

Find the section you want to change. For example:

**Large heading (h1):**
```css
.hero-content h1 {
    font-size: 3.5rem;  ← Change this number
}
```

- Bigger number = bigger text
- Smaller number = smaller text

Common sizes:
- `2rem` = regular
- `2.5rem` = larger
- `3.5rem` = very large
- `1.2rem` = small

---

### CHANGE SPACING/PADDING

**File:** `style.css`

Find the section, for example:
```css
.hero {
    padding: 4rem 5%;  ← This is spacing
}
```

- Bigger number = more space
- Smaller number = less space

Example:
```css
padding: 2rem 5%;  ← Less space
padding: 6rem 5%;  ← More space
```

---

## 📸 FILE GUIDE

### index.html
- Contains: HTML structure and content
- Change: Business name, headings, descriptions, text
- DON'T change: `<head>`, `<link>`, `<script>` tags

### style.css
- Contains: All colors, fonts, sizes, spacing
- Change: Colors, font sizes, spacing, backgrounds
- All changes apply instantly!

### script.js
- Contains: Smooth scrolling and animations
- Advanced users only - don't touch if not sure!

### cake-background.jpg
- The background image for the hero section
- Can replace with your own image (keep the name)

---

## 🎨 DESIGN TIPS

### Color Palette Ideas

**Warm & Romantic:**
```css
--warm-brown: #d4a574;  (warm tan)
--dark-brown: #8b6f47;  (deep brown)
--gold: #f4d03f;        (gold)
```

**Modern & Elegant:**
```css
--warm-brown: #b8956a;  (taupe)
--dark-brown: #6b5b44;  (charcoal)
--gold: #d4af37;        (bright gold)
```

**Soft & Pastels:**
```css
--warm-brown: #d8a9a0;  (dusty rose)
--dark-brown: #8b6b5f;  (soft brown)
--gold: #f4d9c4;        (cream gold)
```

### Font Ideas

Current fonts:
- Headings: `'Playfair Display'` (elegant, classic)
- Body: `'Lora'` (readable, professional)

To change fonts, go to `style.css` and find:
```css
font-family: 'Playfair Display', serif;
```

Other elegant fonts from Google Fonts:
- `'Cormorant Garamond'` - Very elegant
- `'Libre Baskerville'` - Classic
- `'Abril Fatface'` - Bold & dramatic

---

## 🐛 TROUBLESHOOTING

### Images not showing?
✓ Make sure images are in the CakeWebsite folder
✓ Check filenames match exactly (case-sensitive)
✓ Try refreshing browser (F5 or Ctrl+R)

### Website looks broken?
✓ Check that you didn't accidentally delete code
✓ Check for red error messages in browser console (F12)
✓ Undo changes (Ctrl+Z) and try again

### Colors not changing?
✓ Make sure you edited `style.css` not `index.html`
✓ Save the file (Ctrl+S)
✓ Refresh browser (F5)

### Can't find something?
✓ Use Ctrl+F to search in the file
✓ Search for the text you're looking for
✓ VS Code will highlight it

---

## 🌐 PUBLISHING YOUR WEBSITE

### Option 1: GitHub Pages (FREE, PERMANENT)

1. Go to https://github.com
2. Create account and new repository
3. Upload all files from CakeWebsite folder
4. Rename HTML file to `index.html`
5. Enable GitHub Pages in Settings
6. Your site is live! 🎉

### Option 2: Netlify (FREE, INSTANT)

1. Go to https://netlify.com
2. Drag and drop your CakeWebsite folder
3. Your site is live instantly! 🎉

### Option 3: Replit (FREE, EASY)

1. Go to https://replit.com
2. Create HTML project
3. Upload all files
4. Click Run
5. Share the link! 🎉

---

## 📝 EDITING CHECKLIST

- [ ] Changed business name from "Every Cakes" to yours
- [ ] Updated main heading
- [ ] Updated description
- [ ] Changed colors to match your brand
- [ ] Added your cake photos
- [ ] Updated all text (headings, descriptions)
- [ ] Updated contact info (email, phone)
- [ ] Tested all links work
- [ ] Checked website on mobile
- [ ] Ready to publish!

---

## 🎓 FILE LOCATIONS QUICK REFERENCE

| What to Change | Where | File | Line |
|---|---|---|---|
| Business name | Logo | index.html | 25 |
| Main heading | Hero section | index.html | 44 |
| Description | Hero section | index.html | 45 |
| Cake titles | Offer cards | index.html | 75-95 |
| Contact info | Footer | index.html | 103 |
| Colors | :root | style.css | 7-14 |
| Font sizes | Various | style.css | (search "font-size") |
| Spacing/padding | Various | style.css | (search "padding") |

---

## ✨ YOU'RE ALL SET!

Your website is ready to customize and publish. Pick your favorite platform (Replit, GitHub Pages, or Netlify) and go live! 🚀

**Questions?**
- Check the troubleshooting section above
- Use Ctrl+F to find text in files
- Google is your friend for CSS color codes!

---

**Happy cake website building!** 🎂✨
