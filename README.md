# Feiyang Xu 个人学术主页

这是一份基于最新 CV 制作的英文主页。借鉴参考主页的信息结构，重新编写了页面与样式。网站是纯静态 HTML/CSS，JavaScript 只负责导航高亮；无需 npm 安装、数据库或构建步骤。

## 文件在哪里

| 文件 | 用途 |
| --- | --- |
| `dist/index.html` | 简介、动态、论文、经历、教育和奖项；日常主要修改这里 |
| `dist/styles.css` | 字体、颜色、间距和手机布局 |
| `dist/main.js` | 滚动时更新导航高亮 |
| `dist/assets/tshmem-overview.svg` | 从 camera-ready 原始 PDF 转出的 TSHMem 矢量框架图 |
| `dist/assets/profile.jpg` | 本人提供的个人照片 |
| `dist/.nojekyll` | 关闭不需要的 Jekyll 处理 |
| `scripts/serve.mjs` | 本地预览服务器，只提供 dist 下的文件 |
| `.github/workflows/pages.yml` | 推送到 main 后自动部署 GitHub Pages |

`dist` 在这个项目中直接存放可发布源码，不是自动生成目录。编辑后即可预览或发布。

## 本地查看

直接双击 `dist/index.html` 即可查看。也可以使用 Node.js 启动本地服务器：

```powershell
cd D:\CV\personal-homepage
node scripts/serve.mjs
```

在浏览器访问 `http://127.0.0.1:4173`。停止服务器用 Ctrl+C。

如果 Node.js 未加入 PATH，可以使用这台电脑已经提供的运行时：

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/serve.mjs
```

## 发布到 GitHub Pages

GitHub 用户名为 `HareetX`，个人站点仓库名为 `hareetx.github.io`，对应访问地址为 `https://hareetx.github.io/`。以下操作会把 `dist` 中的内容发布到互联网。当前交付的是本地代码，尚未创建远程仓库或发布。

1. 在 GitHub 新建一个名为 `hareetx.github.io` 的公开空仓库。初次使用以下命令时，不要预先添加 README。
2. 将本项目推送到该仓库。

```powershell
cd D:\CV\personal-homepage
git init
git branch -M main
git add .
git commit -m "Create academic homepage"
git remote add origin https://github.com/HareetX/hareetx.github.io.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 在 **Actions → Deploy academic homepage** 查看部署；如果首次推送时还没启用 Pages，可以点 **Run workflow** 重跑。
5. 成功后在 **Settings → Pages → Visit site** 打开主页。后续每次推送到 `main` 会自动更新。

不用命令行也可以：创建空仓库后，在网页中选择 **Add file → Upload files**，上传 `dist` 文件夹中的文件到仓库根目录，再在 **Settings → Pages** 中选择 **Deploy from a branch → main → /(root)**。这种方法不需要上传 `scripts` 或配置工作流；以后也直接更新仓库根目录的网页文件。

官方说明：

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 怎么维护

- **更新论文**：编辑 `index.html` 中 `id="publications"` 的部分。重点论文使用 `publication-featured`：左侧框架图，右侧标题、作者、会议信息及简短介绍；左上角的 `conference-label` 直接覆盖图片，不占独立行。其余稿件使用 `compact-publications` 中的简写条目，仅保留标题、作者和状态。当前所有论文与 News 论文名称均不加链接；待正式论文集发布后按需添加。
- **新增动态**：在 `class="news-list"` 的最前面加一个 `<li>`，日期使用 `<time datetime="YYYY-MM">YYYY.MM</time>`，精确到月份。TSHMem 录用时间为 `2026.08`，与参考主页一致。
- **修改个人简介**：编辑 `id="about"` 的段落和 `class="profile"` 的个人信息。
- **更换照片**：替换 `dist/assets/profile.jpg` 即可。主页已使用本人提供的照片，桌面端显示为 150px 圆形头像，手机端自动缩小。
- **更新 GitHub / Scholar**：GitHub 已指向 `https://github.com/HareetX`。Google Scholar 按要求显示为 `coming soon` 文本占位；创建 Scholar 主页后，把 `<span class="link-placeholder">...</span>` 替换为 `<a href="你的 Scholar 主页完整链接">Google Scholar</a>`。
- **提供 CV 下载**：把适合公开的 PDF 放在 `dist/assets/cv.pdf`，再在个人链接区加入 `<a href="./assets/cv.pdf">CV (PDF)</a>`。当前没有把含电话号码的 Word 简历复制到网站。
- **修改颜色**：编辑 `styles.css` 顶部的 `:root` 变量。
- **更新页脚**：修改 `Last updated` 的日期。

所有资源均为本地文件；没有第三方字体、分析脚本或访客追踪。网站不依赖框架升级。页面中的联系方式包括学校邮箱和本人要求展示的电话 `+86 13302383432`；电话链接支持点击拨号。

## 内容来源

- 本人资料：`D:\CV\CV-Feiyang XU-260928.docx`，以及本次会话确认的论文状态与比赛成绩。
- 参考信息结构：https://lvaoao.github.io/
- TSHMem 框架图：`D:\EMNLP2026\EMNLP_2026_TSHMem_Camera_ready\figures\overview_v6.pdf`，由 `latex/acl_latex.tex` 的 `fig:overview` 引用；通过 Poppler/Cairo 转为 SVG，保留矢量文字和线条。原始论文文件未修改。
- TSHMem 录用月份：参考主页 News 标注为 `2026.08`。

没有复制参考网站的人物照片或网页代码。章节标题使用 emoji，侧栏使用本地内嵌 SVG 图标，不依赖外部图标库。论文外部链接已按要求移除。
