# create app
```
yarn create next-app --typescript
```

# vscode config, setting.json
```
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.validate": ["javascript"],
  "eslint.workingDirectories": [{ "mode": "auto" }]
}
```

# fix next image at next.config.js
```
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}
```

# remove api folder

# export and serve script
```
"export": "next build && next export",
"serve": "serve -d out"
```

# move pages and styles folder to src

# config basePath at next.config.js
Why? Fix the nextjs project on not root.

# config paths at tsconfig.json
Why? import source use @/**

# add ANALYZE PWA plugin

## install
```
yarn add -D @next/bundle-analyzer cross-env
yarn add next-pwa
```

## set script
```
"export": "cross-env EXPORT=true next build && cross-env EXPORT=true next export",
"analyze": "cross-env ANALYZE=true next build"
```

## next.config.js

```
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

// module.exports = nextConfig
const KEYS_TO_OMIT = ['webpackDevMiddleware', 'configOrigin', 'target', 'analyticsId', 'webpack5', 'amp', 'assetPrefix']

module.exports = (_phase, { defaultConfig }) => {
  delete defaultConfig.experimental.outputFileTracingRoot;
  delete defaultConfig.i18n;

  const plugins = [[withPWA], [withBundleAnalyzer, {}]]

  const wConfig = plugins.reduce((acc, [plugin, config]) => plugin({ ...acc, ...config }), {
    ...defaultConfig,
    ...nextConfig,
  })

  const finalConfig = {}
  Object.keys(wConfig).forEach((key) => {
    if (!KEYS_TO_OMIT.includes(key)) {
      finalConfig[key] = wConfig[key]
    }
  })

  return finalConfig
}

```

## add manifest file and icons

# sync to server
rsync --chown=artexb:nginx --delete -avz -e "ssh -i ./felixAdmin2021.pem" ./next root@39.105.95.136:/www/html/wordpress/lab/

# install ThreeFiber
yarn add three @types/three @react-three/fiber

# create index and scroll page
index page only render dom
scroll page rend dom and canvas both