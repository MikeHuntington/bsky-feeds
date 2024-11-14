import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as forScience from './for-science'
import * as ausPol from './auspol'
import * as cats from './cats'
import * as twelveWords from './twelve-words'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos = {
  [forScience.shortname]: {
    handler: <AlgoHandler>forScience.handler,
    manager: forScience.manager,
  },
  [ausPol.shortname]: {
    handler: <AlgoHandler>ausPol.handler,
    manager: ausPol.manager,
  },
  [cats.shortname]: {
    handler: <AlgoHandler>cats.handler,
    manager: cats.manager,
  },
  ['aaaolsp7e26zo']: {
    // originally a skyfeed feed, so re-using the key
    handler: <AlgoHandler>twelveWords.handler,
    manager: twelveWords.manager,
  },
}

export default algos
