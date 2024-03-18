import { filter } from "../utils"
import type { TSources } from "../types"

export const adultiptv_sources: TSources = [
  {
    name: "成人IPTV",
    f_name: "a_chs",
    url: "http://adultiptv.net/chs.m3u",
    filter: filter,
  }
]
