{
    "builds": [
      {
        "src": "package.json",
        "use": "@vercel/static-build",
        "config": {
          "distDir": "dist",
          "buildCommand": "npm run build"
        }
      }
    ],
    "routes" : [
      {
        "src": "/(.*)",
        "dest": "/index.html"
      }
    ]
  }
  