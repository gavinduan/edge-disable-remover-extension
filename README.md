# 移除删除B站牌子10秒CD - Edge浏览器扩展

<div align="center">
  <img src="https://i.imgur.com/cXNbsC6.png" alt="B站Logo" width="120"/>
  <p><strong>快速删除B站粉丝牌子，跳过10秒冷却时间</strong></p>
</div>

## 🚀 功能介绍

这是一个专为B站(Bilibili)用户设计的Edge浏览器扩展，用于**移除删除粉丝牌子时的10秒冷却时间限制**。

- **自动检测**：智能识别B站粉丝牌子删除按钮
- **即时响应**：立即移除按钮的disabled属性，消除10秒等待
- **实时监控**：持续监听页面变化，确保功能持续有效
- **轻量高效**：仅在B站链接页面激活，不影响其他网站性能

## 📥 安装方法

由于这是一个未发布到Microsoft Edge Add-ons商店的扩展，您需要通过开发者模式进行安装：

1. 下载或克隆本项目到您的本地计算机
2. 打开Edge浏览器，输入 `edge://extensions/` 进入扩展管理页面
3. 开启页面右上角的"开发者模式"
4. 点击"加载解压缩的扩展"按钮
5. 选择包含本项目文件的文件夹
6. 扩展将会被安装并显示在扩展列表中

## 💡 使用说明

安装完成后，扩展会自动在符合条件的页面上运行，无需任何手动操作：

1. 访问B站链接页面（https://link.bilibili.com/p/center/index?spm_id_from=333.1007.0.0#/user-center/wearing-center/my-medal）
2. 进入粉丝牌子管理界面
3. 扩展会自动检测并移除删除按钮的10秒冷却限制
4. 您可以连续快速删除多个粉丝牌子，无需等待

## 📁 项目结构

```
edge-disable-remover-extension/
├── manifest.json    # 扩展配置文件，定义扩展基本信息和权限
├── contentScript.js # 核心功能实现，负责检测和移除disabled属性
└── README.md        # 项目说明文档
```

## ⚙️ 工作原理

扩展通过以下机制实现功能：

1. **内容脚本注入**：扩展在B站链接页面加载时注入JavaScript代码
2. **元素定位**：使用精确的CSS选择器定位到粉丝牌子删除按钮
3. **定期检查**：每300毫秒自动检查目标按钮状态
4. **DOM监听**：使用MutationObserver监听页面结构变化，确保在动态加载内容后仍能正常工作
5. **属性移除**：一旦检测到按钮存在disabled属性，立即将其移除

## ⚠️ 注意事项

使用本扩展时请注意以下几点：

1. **适用范围**：仅针对B站链接页面(`https://link.bilibili.com/p/center/index?spm_id_from=333.1007.0.0#/user-center/wearing-center/my-medal`)的粉丝牌子删除功能设计
2. **页面结构更新**：如果B站更改了页面结构，可能需要更新CSS选择器以确保扩展正常工作
3. **浏览器权限**：扩展需要"activeTab"权限来访问当前标签页的内容
4. **使用频率**：请合理使用本扩展，遵守B站社区规范

## 🔧 开发说明

如果您需要修改或扩展此项目，可以进行以下操作：

1. **更改目标元素**：修改`contentScript.js`文件中的`targetSelector`变量
2. **调整检查频率**：修改`setInterval`函数的时间参数（单位：毫秒）
3. **扩展适用范围**：修改`manifest.json`文件中的`matches`数组，添加更多URL模式
4. **添加新功能**：在保持核心逻辑的基础上，可以扩展更多实用功能

## 📄 许可证

本项目采用MIT许可证开源：

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🌟 免责声明

本扩展仅用于学习和研究目的，使用本扩展请遵守相关法律法规和平台规则。作者不对使用本扩展可能导致的任何后果负责。