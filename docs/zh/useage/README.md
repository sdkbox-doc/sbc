# 使用

## 安装 Installer 本身

你已经安装了 Installer 就不需要再安装, 可以直接路到下一步安装插件了

* 下载自定义插件的安装器 [Mac版](https://github.com/sdkbox/storage/blob/master/sbc/sbc?raw=true) , [Windows版](https://github.com/sdkbox/storage/blob/master/sbc/sbc.exe?raw=true)

* 在命令行中运行它

```bash
sdkboxc install
```

```bash
sdkboxc.exe install
```
* 更新索引仓库

```bash
sdkboxc update
```

## 安装插件

```bash
sdkboxc import appslfyer --project=path/to/your/project
```
这条命令运行完, 就已经把插件安装到你的工程中了.

下一步, 就是根据对应插件的 API 文档, 直接在游戏中调用插件 API 接口.
