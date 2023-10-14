# 批量运行文献总结

::: tip
该功能需要依赖 Zotero Tag & Action 插件，可到[Zotero 中文社区插件商店](https://plugins.zotero-chinese.com/#/)下载
:::


## 批量进行Outline Summary 总结

```js
const Zotero = require("Zotero")
const ZoteroPane = require("ZoteroPane")

if (!item) return

const noteItem = new Zotero.Item("note")
noteItem.parentID = item.id;
noteItem.setNote("正在生成中...")
await noteItem.saveTx();
ZoteroPane.selectItem(noteItem.id)
// "[text] Paper Summary Nurese v3.0 method result" 可修改为你想批量运行的模板名称，注意：一字不能差！
const html = await Zotero.BetterNotes.api.template.runTextTemplate("[text] Outline Summary", {
        targetNoteId: noteItem.id
})
noteItem.setNote(html)
await noteItem.saveTx();
```

## 批量进行Paper Summary 总结

```js
const Zotero = require("Zotero")
const ZoteroPane = require("ZoteroPane")

if (!item) return

const noteItem = new Zotero.Item("note")
noteItem.parentID = item.id;
noteItem.setNote("正在生成中...")
await noteItem.saveTx();
ZoteroPane.selectItem(noteItem.id)
// "[text] Paper Summary Nurese v3.0 method result" 可修改为你想批量运行的模板名称，注意：一字不能差！
const html = await Zotero.BetterNotes.api.template.runTextTemplate("[text] Paper Summary", {
        targetNoteId: noteItem.id
})
noteItem.setNote(html)
await noteItem.saveTx();
```

