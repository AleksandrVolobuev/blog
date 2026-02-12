const isDev = process.env.NODE_ENV !== 'production'
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'blog'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

if (isGithubPagesBuild) {
  nextConfig.output = 'export'
  nextConfig.basePath = isDev ? '' : `/${repoName}`
  nextConfig.assetPrefix = isDev ? '' : `/${repoName}/`
}

export default nextConfig
