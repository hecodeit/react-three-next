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