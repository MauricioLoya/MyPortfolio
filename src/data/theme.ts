import type { TailwindColor } from '@/utils/types/tailwind'

type Theme = {
  colors: {
    primary: TailwindColor
    blur: {
      top: TailwindColor
      bottom: TailwindColor
    }
  }
}

const theme: Theme = {
  colors: {
    primary: 'lime',
    blur: {
      top: 'cyan',
      bottom: 'emerald'
    }
  }
}

export default theme
