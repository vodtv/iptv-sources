import { filter } from "../utils"
import type { TSources } from "../types"

export const fanmingming_live_sources: TSources = [
  {
    name: "fanmingming/live ipv6",
    f_name: "fmml_ipv6",
    url: "https://raw.githubusercontent.com/fanmingming/live/main/tv/m3u/ipv6.m3u",
    filter: filter,
  },
  {
    name: "fanmingming/live domainv6(Invalid)",
    f_name: "fmml_dv6",
    url: "https://raw.githubusercontent.com/fanmingming/live/main/tv/m3u/Invalid/domainv6.m3u",
    filter: filter,
  }
]
