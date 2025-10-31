# Tekken 8 Battle Pass Timer

[![Netlify Status](https://api.netlify.com/api/v1/badges/3804135b-cc7a-48dd-8448-6ddca28c7bdf/deploy-status)](https://app.netlify.com/projects/t8-fight-pass-countdown/deploys)

A quick and dirty web application to test the workflow of GitHub agents. 

The site provides a countdown timer to track when the current Tekken 8 fight pass ends. Features include:

- **Live Countdown Timer**: Real-time countdown showing days, hours, minutes, and seconds remaining
- **Progress Bar**: Visual representation of how much time has elapsed since the battle pass started
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Google AdSense Ready**: Includes a dedicated section for advertisement integration
- **Embeddable Timer**: Minimal embed.html page for embedding the timer on external websites

## Demo

Visit [fightpass.gg](https://fightpass.gg) to see the live timer.

## Features

- ⏱️ Real-time countdown to battle pass end date
- 📊 Progress bar showing elapsed time percentage
- 📱 Fully responsive design for all devices
- 🎨 Modern, clean UI with gradient background
- 💰 Google AdSense integration area
- 🎮 Tekken 8 themed color scheme (grey/pink)
- 🔗 Embeddable timer version for external websites

## Updating Battle Pass Dates

To update the dates for a new battle pass season:

1. Open `timer.js`
2. Locate the `fightPassConfig` object at the top of the file
3. Update the `startDate` and `endDate` with the new battle pass dates:

```javascript
const fightPassConfig = {
    startDate: new Date('2025-10-01T00:00:00Z'),  // Update this
    endDate: new Date('2025-12-31T23:59:59Z')      // Update this
};
```

4. Dates should be in ISO 8601 format with UTC timezone (Z suffix)
5. Save the file and refresh the page

Note: Both `index.html` and `embed.html` use the same `timer.js` file, so updating the dates once will update both pages.

## Embedding the Timer

The project includes a minimal `embed.html` page designed specifically for embedding on external websites. This page includes only the timer display without ads, footer, or Ko-fi support links.

### How to Embed

You can embed the timer on your website using an iframe:

```html
<iframe 
  src="https://fightpass.gg/embed.html" 
  width="100%" 
  height="600" 
  frameborder="0"
  style="border: none; max-width: 800px;">
</iframe>
```

### Customization

To customize the embedded timer appearance, you can:
- Adjust the iframe `width` and `height` to fit your layout
- Add CSS styling to the iframe container on your website
- For advanced customization, you can host your own copy of `embed.html` and `timer.js`

## Adding Google AdSense

To add Google AdSense advertisements:

1. Open `index.html`
2. Find the `<div class="ad-container">` section (around line 220)
3. Replace the placeholder content with your Google AdSense code:

```html
<div class="ad-container">
    <!-- Your Google AdSense code here -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
         crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

## Deployment

This is a static website that is currently deployed on Netlify

## Local Development

To test locally:

1. Clone the repository
2. Open `index.html` in your web browser, or
3. Use a local server:
   ```bash
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use and modify for your own purposes.
