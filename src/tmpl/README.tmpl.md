# IPTV - SOURCES

## 目录

- ❓  [如何使用](#如何使用)
- 📺 [IPTV](#IPTV)
- 📚 [EPG](#epg)
- 🚀 [CDN加速](#CDN加速)
- 🛈 [资源出处](#资源出处)
- 📖 [免责申明](#免责申明)

## 如何使用

只需将以下链接之一插入任何支持实时流式传输的视频播放器，然后按打开即可。

## IPTV

| channel | url | list | count | isRollback |
| ------- | --- | ---- | ----- | ---------- |
{update_channels}

## EPG

| epg | url | isRollback |
| --- | --- | ---------- |
{update_epgs}

## CDN加速

:::  details 镜像站(gcore.jsdelivr.net || fastly.jsdelivr.net || cdn.jsdelivr.net) -（国内访问快）
<table>
  <thead>
    <tr>
      <th>格式</th>
      <th>示例 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M3U</td>
      <td>https://fastly.jsdelivr.net/gh/vodtv/raw@gh-pages/cn.m3u</td>
    </tr>
     <tr>
      <td>TXT</td>
      <td>https://fastly.jsdelivr.net/gh/vodtv/raw@gh-pages/txt/cn.txt</td>
    </tr>
    <tr>
      <td>XML</td>
      <td>https://fastly.jsdelivr.net/gh/vodtv/raw@gh-pages/epg/51zmt.xml</td>
    </tr>
    <tr>
      <td>JSON</td>
      <td>https://fastly.jsdelivr.net/gh/vodtv/raw@gh-pages/sources/cn.json</td>
    </tr>
  </tbody>
</table>
:::

:::  details  镜像站(cdn.gitmirror.com ) -（备用）
<details>
<br>
<table>
  <thead>
    <tr>
      <th>格式</th>
      <th>示例 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M3U</td>
      <td>https://cdn.gitmirror.com/gh/vodtv/raw@gh-pages/cn.m3u</td>
    </tr>
     <tr>
      <td>TXT</td>
      <td>https://cdn.gitmirror.com/gh/vodtv/raw@gh-pages/txt/cn.txt</td>
    </tr>
    <tr>
      <td>XML</td>
      <td>https://cdn.gitmirror.com/gh/vodtv/raw@gh-pages/epg/51zmt.xml</td>
    </tr>
    <tr>
      <td>JSON</td>
      <td>https://cdn.gitmirror.com/gh/vodtv/raw@gh-pages/sources/cn.json</td>
    </tr>
  </tbody>
</table>
:::

> 原网址前加（ghproxy.net || mirror.ghproxy.com） -（国内访问快）
<details>
<br>
<table>
  <thead>
    <tr>
      <th>格式</th>
      <th>示例 </th>
    </tr>
  </thead>
   <tbody>
    <tr>
      <td>M3U</td>
      <td>https://ghproxy.net/https://raw.githubusercontent.com/vodtv/raw/gh-pages/cn.m3u</td>
    </tr>
     <tr>
      <td>TXT</td>
      <td>https://ghproxy.net/https://raw.githubusercontent.com/vodtv/raw/gh-pages/txt/cn.txt</td>
    </tr>
    <tr>
      <td>XML</td>
      <td>https://ghproxy.net/https://raw.githubusercontent.com/vodtv/raw/gh-pages/epg/51zmt.xml</td>
    </tr>
    <tr>
      <td>JSON</td>
      <td>https://ghproxy.net/https://raw.githubusercontent.com/vodtv/raw/gh-pages/sources/cn.json</td>
    </tr>
  </tbody>
</table>
</details>

> 原网址前加（ghproxy.cc || cf.ghproxy.cc） -（国内访问快）
<details>
<br>
<table>
  <thead>
    <tr>
      <th>格式</th>
      <th>示例 </th>
    </tr>
  </thead>
   <tbody>
    <tr>
      <td>M3U</td>
      <td>https://ghproxy.cc/https://raw.githubusercontent.com/vodtv/raw/gh-pages/cn.m3u</td>
    </tr>
     <tr>
      <td>TXT</td>
      <td>https://ghproxy.cc/https://raw.githubusercontent.com/vodtv/raw/gh-pages/txt/cn.txt</td>
    </tr>
    <tr>
      <td>XML</td>
      <td>https://ghproxy.cc/https://raw.githubusercontent.com/vodtv/raw/gh-pages/epg/51zmt.xml</td>
    </tr>
    <tr>
      <td>JSON</td>
      <td>https://ghproxy.cc/https://raw.githubusercontent.com/vodtv/raw/gh-pages/sources/cn.json</td>
    </tr>
  </tbody>
</table>
</details>

## 资源出处

本站IPTV资源出处:
- <https://epg.pw/test_channel_page.html>
- [iptv.org](https://github.com/iptv-org/iptv)
- [YueChan/Live](https://github.com/YueChan/Live)
- [YanG-1989/m3u](https://github.com/YanG-1989/m3u)
- [fanmingming/live](https://github.com/fanmingming/live)
- [qwerttvv/Beijing-IPTV](https://github.com/qwerttvv/Beijing-IPTV)
- [joevess/IPTV](https://github.com/joevess/IPTV)

## 免责申明
- 所有播放源均收集于互联网，仅供测试研究使用，不得商用。
- 通过 M3U8 Web Player 测试直播源需使用 https 协议的直播源链接。
- 部分广播电台节目播出具有一定的时效性，需要在指定时段进行收听。
- 本项目不存储任何的流媒体内容，所有的法律责任与后果应由使用者自行承担。
- 您可以 Fork 本项目，但引用本项目内容到其他仓库的情况，务必要遵守开源协议。
- 本项目不保证直播频道的有效性，直播内容可能受直播服务提供商因素影响而失效。
