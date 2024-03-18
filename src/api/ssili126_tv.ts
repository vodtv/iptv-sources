import { filter } from "../utils"
import type { TSources } from "../types"

export const ssili126_tv_sources: TSources = [
  {
    name: "自动获取酒店源",
    f_name: "ss_itv",
    url: "https://raw.githubusercontent.com/ssili126/tv/main/itvlist.m3u",
    filter: filter,
  }
]
