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
  [cats.shortname]: {
    handler: <AlgoHandler>cats.handler,
    manager: cats.manager,
  },
}

export default algos
