# Cabinet
The Authority Cabinet (formerly Sergio's Personal Cabinet). A lightweight and static html5 page for posts and misc documentation. Hosts The Authority documentation, and XasPos.

## Serving
Install npm dependencies:
```
npm install
```
To serve the web right away:
```
npm run start
```

## Assets
This website is intended to use really lightweight resources (with pages around 12-52 kB without images). There are several stylesheets and scripts so this way only the necessary features are provided for each HTML page.

The main stylesheets are:
* [main.css](/assets/main.css) is the main stylesheet which every page need, defined layout and colors
* [blog.css](/assets/blog.css) is the stylesheet for blog headings, featuring the box with the date, topic and title
* [display.css](/assets/main.css) is a stylesheet for showing different content depending on the orientation and the color theme of the device (horizontal, vertical, light, dark), useful for different tables or images (now merged into main.css).

For JavaScript, the main ones are:
* [lazysizes.min.js](https://github.com/aFarkas/lazysizes) which implements a SEO-friendly and self-initializing lazyloader for images.
* [iframer.js](/assets/iframer.js) is a script for hiding iframes or other content under a button, so it only gets loaded when the user allow it or tap the button for it.

For more information and transparency, browse the repo or visit [assets](/assets).
