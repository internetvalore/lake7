import { defineConfig } from 'astro/config';

// Replace with your actual Netlify site URL
const siteUrl = "https://coruscating-horse-a5a275.netlify.app"; 

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  // If your site is deployed in a subfolder (e.g., your-site.com/blog/), 
  // uncomment and set the base path:
  // base: '/your-subfolder/', 
});
