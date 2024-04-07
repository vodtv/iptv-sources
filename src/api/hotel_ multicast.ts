import { filter } from "../utils"
import type { TSources } from "../types"

export const ss_sources: TSources = [
  {
    name: "全国 酒店组播源",
    f_name: "ss_itv",
    url: "https://raw.githubusercontent.com/ssili126/tv/main/itvlist.m3u",
    filter: filter,
  },
  {
    name: "陕西 移动源",
    f_name: "sx_ydy",
    url: "https://zhuan.dnwx.vip/?url=https%3A%2F%2Fmpimg.cn%2Fdown.php%2F67ed75e5d3486a5dd1122bc6a197cb49.txt",
    filter: filter,
  },
  {
    name: "陕西铜川移动",
    f_name: "sx_tcy",
    url: "https://zhuan.dnwx.vip/?url=https%3A%2F%2Fmpimg.cn%2Fdown.php%2Ffbdb4b22bea4dd8b7efcd9b07e07331e.txt",
    filter: filter,
  },
  {
    name: "广场舞蹈",
    f_name: "vod_gcw",
    url: "https://zhuan.dnwx.vip/?url=https://mpimg.cn/down.php/e4b05c538a0df5e9df5bce8231d4054a.txt",
    filter: filter,
  },
  {
    name: "DJ舞曲",
    f_name: "vod_djw",
    url: "https://zhuan.dnwx.vip/?url=https://mpimg.cn/down.php/ee72db91533fb6a456b3818414cb85f4.txt",
    filter: filter,
  },
]
