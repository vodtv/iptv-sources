import { filter } from "../utils"
import type { TSources } from "../types"

export const adultiptv_sources: TSources = [
  {
    name: "adultiptv.net chs",
    f_name: "a_chs",
    url: "http://adultiptv.net/chs.m3u",
    filter: filter,
  },
  {
    name: "adultiptv.net vod",
    f_name: "a_vod",
    url: "http://adultiptv.net/videos.m3u8",
    filter: filter,
  }
]
