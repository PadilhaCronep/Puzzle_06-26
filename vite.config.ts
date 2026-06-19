import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        software: resolve(__dirname, 'servicos-software.html'),
        marketing: resolve(__dirname, 'servicos-marketing.html'),
        dooh: resolve(__dirname, 'servicos-dooh.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogSoftwareSaas: resolve(__dirname, 'blog-software-sob-medida-ou-saas.html'),
        blogPlataformasWeb: resolve(__dirname, 'blog-plataformas-web-escalaveis.html'),
        blogIntegracoesApi: resolve(__dirname, 'blog-integracoes-api-automacao.html'),
        blogTrafegoLandingCrm: resolve(__dirname, 'blog-trafego-pago-landing-page-crm.html'),
        blogLandingPages: resolve(__dirname, 'blog-landing-pages-que-convertem.html'),
        blogCrmMetricas: resolve(__dirname, 'blog-crm-metricas-funil-comercial.html'),
        blogDoohDigital: resolve(__dirname, 'blog-dooh-integrado-ao-digital.html'),
        blogMidiaUrbana: resolve(__dirname, 'blog-midia-urbana-geolocalizada.html'),
        blogOohPerformance: resolve(__dirname, 'blog-ooh-performance-e-memoria.html'),
        lgpd: resolve(__dirname, 'lgpd.html'),
        contact: resolve(__dirname, 'contato.html'),
      }
    }
  }
});
