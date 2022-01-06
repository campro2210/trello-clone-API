
import { WHITELIST_DOMAIN } from '*/ultilities/constants'


export const corsOptions = {
  origin: function (origin, callback) {
    if (WHITELIST_DOMAIN.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error(`${origin} Not allowed by CORS`))
    }
  }
}