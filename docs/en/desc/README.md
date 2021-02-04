# SBC

## Description

SBC is a game plugin sharing platform.

## Implement

We divide SBC into the following modules:

* App Side: this is the plugin working side, run on Android/iOS.
* Installer Side: download plugin, import plugin to project, run on Mac/Windows

### App Side

Below is an SBC invoke flow diagram

<img :src="$withBase('/assets/img/CustomPluginStruct.svg')" alt="CustomPluginStruct">

there have two Plugin in the diagram.

`Bridge` with red background, this is the base plugin, all other plugin should depedency on this.

`Pluign` with orange background, this is the realize specific functions. Custom plug-in development is actually doing this part.

As can be seen from the figure, the custom plug-in is composed of three parts.

* Cpp/Lua/JS Parts: This layer is directly for game developers, and the API is defined in this layer.
* Android Parts: implementation on android
* iOS Parts: implementation on ios

### Installer Side

a dependency manager for game project. named `sdkboxc` . used to import/update plugin.
