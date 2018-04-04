/* ------------------------- Internal Dependencies -------------------------- */
import images from './images.js'
import graphics from './graphics.js'
import icons from './icons.js'
import svg from './svg.js'
import shapes from './shapes.js'
import devices from './devices.js'

const assets = {
  devices:{ ...devices},
  graphics: {
    ...graphics
  },
  images: {
    ...images
  },
  icons: {
    ...icons
  },
  svg: {
    ...svg
  }
}

export default assets

