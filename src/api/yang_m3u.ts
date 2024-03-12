import { filter } from "../utils"
import type { TSources } from "../types"

export const yang_m3u_sources: TSources = [
  {
    name: "YanG-1989 Gather",
    f_name: "y_g",
    url: "https://raw.githubusercontent.com/YanG-1989/m3u/main/Gather.m3u",
    filter: filter,
  },
  {
    name: "YanG_1989 Adult",
    f_name: "y_a",
    url: "https://fastly.jsdelivr.net/gh/YanG-1989/m3u@main/Adult.m3u",
    filter: filter,
  },
]
