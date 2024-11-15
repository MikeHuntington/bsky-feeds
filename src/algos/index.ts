import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as beyhive from './beyhive'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos = {
  [beyhive.shortname]: {
    handler: <AlgoHandler>beyhive.handler,
    manager: beyhive.manager,
  },
}

export default algos
