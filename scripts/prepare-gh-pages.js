import { writeFileSync } from 'fs'
import { resolve } from 'path'

const distDir = resolve(process.cwd(), 'dist-react')

const spa404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Liyandah Tebhogo Hela - Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 1;
    var location = window.location;
    location.replace(
      location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') +
      location.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      location.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (location.search ? '&' + location.search.slice(1).replace(/&/g, '~and~') : '') +
      location.hash
    );
  </script>
</head>
<body>
  Redirecting...
</body>
</html>
`

writeFileSync(resolve(distDir, '404.html'), spa404)
writeFileSync(resolve(distDir, '.nojekyll'), '')
console.log('Created dist-react/404.html for GitHub Pages SPA routing')
