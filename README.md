# blahg

Jeahn Han's blog, built with [Astro](https://astro.build) and edited with [TinaCMS](https://tina.io). Based on [cassidoo/blahg](https://github.com/cassidoo/blahg).

## Run it yourself

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                                        |
| :-------------------------------- | :------------------------------------------------------------ |
| `npm install`                    | Installs dependencies                                         |
| `npm run dev`                    | Starts local dev server at `localhost:4321`                   |
| `npx tinacms dev -c 'astro dev'` | Manually run local server if the regular command doesn't work |
| `npm run build`                  | Build your production site to `./dist/`                       |
| `npm run preview`                | Preview your build locally, before deploying                  |

You go to `localhost:4321/admin/index.html` to see the CMS and use it. For local dev, you'll need a `.env.development` file with:

```
TINACLIENTID=<from tina.io>
TINATOKEN=<from tina.io>
TINASEARCH=<from tina.io>
```

(Production already has these set as environment variables in Netlify.)
