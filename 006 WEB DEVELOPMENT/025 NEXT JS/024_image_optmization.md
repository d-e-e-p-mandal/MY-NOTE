## Image Optimization in Next.js

Next.js optimizes images automatically using the next/image component.

Benefits:
	•	Smaller image size
	•	Faster loading
	•	Responsive images
	•	Lazy loading by default

⸻

✅ Basic Image Optimization (with manual quality)
```js
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={300}
      height={300}
      quality={80}   // 👈 manual quality (1–100)
    />
  );
}
```

⸻

🔧 Manual Quality Control
```js
quality={80}   // high quality
quality={60}   // balanced
quality={40}   // smaller size
```
👉 **`Default quality is 75`**

⸻

⚙️ Disable Optimization (if needed)

<Image
  src="/image.png"
  alt="Example"
  width={300}
  height={200}
  unoptimized
/>

⸻

📌 Remote Image Example

<Image
  src="https://example.com/photo.jpg"
  alt="Remote"
  width={400}
  height={250}
  quality={70}
/>

👉 Add domain in next.config.js: by default extarnal disabled
```js
module.exports = {
  images: {
    domains: ["example.com"],
  },
};
```
⸻

⸻

1️⃣ Priority Loading (Above-the-fold images)

import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>

What it does
	•	Loads image immediately
	•	Disables lazy loading
	•	Use only for important images (hero, banner)

⸻

2️⃣ Responsive Sizes (Different screens)

<Image
  src="/banner.jpg"
  alt="Banner"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
/>

Meaning

mobile → 100% width
tablet → 50% width
desktop → 33% width

Next.js automatically serves the best size image.

⸻

3️⃣ Modern Image Formats (WebP / AVIF)

No extra code needed ✅

Next.js automatically:
	•	Converts images to WebP / AVIF
	•	Chooses best format per browser

Optional config (quality control)
```js
// next.config.js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

⸻

🎯 One-line Interview Answers
	•	Priority: Loads critical images first
	•	Sizes: Serves responsive image sizes
	•	Formats: Automatically uses modern formats

⸻

🔁 Simple Summary

priority → speed
sizes → responsiveness
WebP/AVIF → smaller images


⸻

```js
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["example.com"],

    // device widths for responsive images
    deviceSizes: [320, 640, 768, 1024, 1280, 1536],

    // image widths generated
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // modern formats
    formats: ["image/avif", "image/webp"],

    // default quality (optional)
    minimumCacheTTL: 60,
  },
};
```



# Optimaiztion Using Loader :
A loader tells Next.js how to build the image URL.
Used when images come from custom CDNs or APIs.

```js
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
  return (
    <Image
      loader={myLoader}
      src="photo.jpg"
      alt="Photo"
      width={400}
      height={300}
    />
  );
}
```

When to use loader
	•	Custom image CDN
	•	Dynamic image URLs
	•	Third-party image services
	•	When default optimization is not enough