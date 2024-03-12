import { filter } from "../utils"
import type { TSources } from "../types"

export const meroser_iptv_sources: TSources = [
  {
    name: "Meroser/IPTV IPTV",
    f_name: "m_iptv",
    url: "https://raw.githubusercontent.com/Meroser/IPTV/main/IPTV.m3u",
    filter: filter,
  },
]
