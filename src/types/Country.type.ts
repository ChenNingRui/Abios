import Image from './Image.type'

export default interface Country {
  id: number
  name: string
  abbreviation: string
  images: Array<Image>
}
