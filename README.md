# 芽庄 5 天旅行手册

无需构建工具的静态 GitHub Pages 项目。

## 本地预览

在项目目录运行：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 部署到 GitHub Pages

1. 新建 GitHub 仓库，将本目录内的文件推送到仓库根目录。
2. 打开仓库 `Settings > Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/(root)`，保存。
5. 等待 GitHub 给出公开访问地址。

也可以把本目录放入已有仓库的 `docs/`，然后在 Pages 设置中选择 `/docs`。

## 文件

- `index.html`：页面结构与可访问性标记
- `styles.css`：响应式视觉样式
- `app.js`：5 天行程、61 个地点、筛选、收藏和 Google Maps 跳转
- `assets/`：本地照片与 Lucide 图标脚本
- `.nojekyll`：避免 GitHub Pages 进行不必要的 Jekyll 处理
- `THIRD_PARTY_NOTICES.md`：第三方图片和图标许可说明
