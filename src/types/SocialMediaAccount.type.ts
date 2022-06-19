interface Platform {
  id: number
  name: string
  slug: string
}

export default interface SocialMediaAccount {
  handle: string
  url: string
  platform: Platform
}
