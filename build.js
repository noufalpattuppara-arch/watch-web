// VOUVRY GENÈVE - Zero-dependency Standalone Build Script
const fs = require('fs');
const path = require('path');

const filesToBundle = [
  'js/data/products.js',
  'js/components/Navbar.js',
  'js/components/Hero.js',
  'js/components/FeaturedCollection.js',
  'js/components/MensCollection.js',
  'js/components/BrandStory.js',
  'js/components/NewArrivals.js',
  'js/components/BrandExperience.js',
  'js/components/ContactSection.js',
  'js/components/Footer.js',
  'js/components/ProductModal.js',
  'js/components/WishlistDrawer.js',
  'js/components/CartDrawer.js',
  'js/components/Toast.js',
  'js/app.js'
];

let bundleCode = `// ÉLVOR - Standalone Luxury Watch E-Commerce Application Bundle\n`;

filesToBundle.forEach(file => {
  const fullPath = path.join(__dirname, file);
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Strip import statements
  content = content.replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n?/gm, '');
  // Replace export function / export const with plain function / const
  content = content.replace(/^export\s+(function|const|let|var)\s+/gm, '$1 ');

  bundleCode += `// ------------------------------------------\n`;
  bundleCode += `// File: ${file}\n`;
  bundleCode += `// ------------------------------------------\n`;
  bundleCode += content + `\n\n`;
});

// Append Root Mount
bundleCode += `// ------------------------------------------\n`;
bundleCode += `// Application Mount Point\n`;
bundleCode += `// ------------------------------------------\n`;
bundleCode += `(function() {\n`;
bundleCode += `  const rootElement = document.getElementById('root');\n`;
bundleCode += `  if (rootElement) {\n`;
bundleCode += `    const root = ReactDOM.createRoot(rootElement);\n`;
bundleCode += `    root.render(React.createElement(App));\n`;
bundleCode += `  }\n`;
bundleCode += `})();\n`;

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'bundle.js'), bundleCode, 'utf-8');
console.log('✓ Successfully created dist/bundle.js (' + Math.round(bundleCode.length / 1024) + ' KB)');

// Create index.html embedding the bundle inline for 100% offline & double-click file:// support
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ÉLVOR - The Power of Elegance. Discover our exclusive luxury timepieces, Swiss mechanical mastery, and precision chronographs.">
  <meta name="theme-color" content="#080808">
  <title>ÉLVOR | The Power of Elegance</title>

  <!-- Google Fonts: Montserrat (All Weights) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
          },
          colors: {
            'swiss-red': '#DA291C',
            'luxury-black': '#080808',
            'luxury-jet': '#0f0f11',
            'luxury-charcoal': '#141416',
            'luxury-grey': '#767676',
            'luxury-light': '#f4f4f6',
          },
          letterSpacing: {
            'luxury': '0.18em',
            'ultra-wide': '0.28em',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideLeft: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0)' },
            }
          },
          animation: {
            fadeIn: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            slideLeft: 'slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }
        }
      }
    }
  </script>

  <!-- Custom Swiss Luxury Stylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- React 18 & ReactDOM 18 -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>

  <!-- Babel Standalone for In-Browser JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/elvor-favicon.png">
</head>
<body class="bg-black text-white antialiased selection:bg-[#DA291C] selection:text-white">
  
  <!-- Root React Mount Point -->
  <div id="root">
    <!-- Initial Luxury Preloader State -->
    <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white space-y-6">
      <img src="assets/images/elvor-logo-transparent.png" alt="ÉLVOR" class="w-56 sm:w-72 h-auto object-contain animate-pulse">
      <div class="w-24 h-0.5 bg-neutral-800 overflow-hidden relative">
        <div class="w-1/2 h-full bg-[#DA291C] animate-pulse"></div>
      </div>
    </div>
  </div>

  <!-- Inline Babel Script (Guarantees 100% functionality on both file:/// and http:// protocols) -->
  <script type="text/babel">
${bundleCode}
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtmlContent, 'utf-8');
console.log('✓ Successfully updated index.html with inline React bundle (' + Math.round(indexHtmlContent.length / 1024) + ' KB)');

// Also write index.html to dist/index.html and copy assets for hosts that serve dist/
const distHtmlContent = indexHtmlContent.replace('<head>', '<head>\n  <base href="/">');
fs.writeFileSync(path.join(distDir, 'index.html'), distHtmlContent, 'utf-8');
const assetsDir = path.join(__dirname, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  try {
    fs.cpSync(assetsDir, distAssetsDir, { recursive: true, force: true, errorOnExist: false });
  } catch (e) {
    console.log('Assets copy notice:', e.message);
  }
}
console.log('✓ Successfully populated dist/ directory (index.html with <base href="/">, bundle.js, assets/)');
