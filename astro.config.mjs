import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Manual para micrositio Memo Plastilina',
      logo: {
        src: './src/assets/icon.svg',
      },
    //   social: {
    //     puntosverdes: 'https://sociopromo.puntosverdes.mx/',
    //   },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '¿Cómo obtengo mi usuario?', link: '/guides/guia-1/' },
            { label: 'Inicia una sesión', link: '/guides/guia-1_1/' },
            { label: '¿De cúantos canjes dispongo?', link: '/guides/guia-2/' },
            { label: 'Validando un CIF', link: '/guides/guia-3/' },
            { label: 'Socio Activo', link: '/guides/guia-4/' },
            { label: 'Socio Nuevo', link: '/guides/guia-5/' },
            { label: 'Elegir una sesión de zoom', link: '/guides/guia-6/' },
            { label: 'Imprimir ficha de canje', link: '/guides/guia-7/' },
            { label: 'El socio ya cuenta con un canje', link: '/guides/guia-8/' },
          ],
        },
        {
          label: 'Referencias',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
