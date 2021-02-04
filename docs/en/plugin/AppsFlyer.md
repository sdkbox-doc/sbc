---
sidebar: auto
---

# AppsFlyer

## Supported platfrom

* Android
* iOS


## API

### init
<ClientOnly>
  <ShowAPI desc="init AppsFlyer"
    cpp="static void init()"
    js="void sdkbox.bb.bridge.init()"
    lua="void sdkbox.bb.bridge.init()"/>
</ClientOnly>

### setListener
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setListener(const std::function<void(const std::string& evt, const std::string& json)&gt;& listener)"
    js="void sdkbox.bb.bridge.setListener(l)"
    lua="void sdkbox.bb.bridge.setListener(l)"/>
</ClientOnly>

### setDevKey
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setDevKey(const std::string& devKey)"
    js="void sdkbox.bb.bridge.setDevKey(devKey)"
    lua="void sdkbox.bb.bridge.setDevKey(devKey)"/>
</ClientOnly>

### setDebug

|  参数   | 属性  |
|  ----  | ----  |
|   b    | bool |

<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setDebug(bool b)"
    js="void sdkbox.bb.bridge.setDebug(b)"
    lua="void sdkbox.bb.bridge.setDebug(b)"/>
</ClientOnly>

### setAdditionalData
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setAdditionalData(const std::string& json)"
    js="void sdkbox.bb.bridge.setAdditionalData(json)"
    lua="void sdkbox.bb.bridge.setAdditionalData(json)"/>
</ClientOnly>

### getAppsFlyerUID
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void getAppsFlyerUID(const std::function<void(const std::string& appsflyerID)&gt;& cb)"
    js="void sdkbox.bb.bridge.getAppsFlyerUID(cb)"
    lua="void sdkbox.bb.bridge.getAppsFlyerUID(cb)"/>
</ClientOnly>

### setCustomerUserID
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setCustomerUserID(const std::string& userID)"
    js="void sdkbox.bb.bridge.setCustomerUserID(userID)"
    lua="void sdkbox.bb.bridge.setCustomerUserID(userID)"/>
</ClientOnly>

### anonymizeUser
<ClientOnly>
  <ShowAPI desc="Anonymize a user's installs, events, and sessions."
    cpp="static void anonymizeUser(bool b)"
    js="void sdkbox.bb.bridge.anonymizeUser(b)"
    lua="void sdkbox.bb.bridge.anonymizeUser(b)"/>
</ClientOnly>

### collectASA
<ClientOnly>
  <ShowAPI desc="/*
  * Starting SDK version 4.8.11, AppsFlyer SDK dynamically loads the Apple iAd.framework. This framework is required to record and measure the performance of Apple Search Ads in your app. If you don't want AppsFlyer to dynamically load this framework, set this property to false.
    *
    * Platfrom: [iOS]
    */"
    cpp="static void collectASA(bool b)"
    js="void sdkbox.bb.bridge.collectASA(b)"
    lua="void sdkbox.bb.bridge.collectASA(b)"/>
</ClientOnly>

### waitForATTUserAuthorizationWithTimeoutInterval
<ClientOnly>
  <ShowAPI desc="/*
 * Used if you want to request user authorization via a popup before accessing app-related data for recording the user or the device (for example, IDFA). If the user opts-in, the IDFA will be passed to the SDK. The timeout interval gives the user a set amount of time to opt-in to IDFA collection. After the timer expires, the IDFA is not collected.
 *
 * Platfrom: [iOS]
 */"
    cpp="static void waitForATTUserAuthorizationWithTimeoutInterval(int seconds)"
    js="void sdkbox.bb.bridge.waitForATTUserAuthorizationWithTimeoutInterval(seconds)"
    lua="void sdkbox.bb.bridge.waitForATTUserAuthorizationWithTimeoutInterval(seconds)"/>
</ClientOnly>

### stop
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void stop()"
    js="void sdkbox.bb.bridge.stop()"
    lua="void sdkbox.bb.bridge.stop()"/>
</ClientOnly>

### start
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void start()"
    js="void sdkbox.bb.bridge.start()"
    lua="void sdkbox.bb.bridge.start()"/>
</ClientOnly>

### logEvent
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void logEvent(const std::string& evt, const std::string& json)"
    js="void sdkbox.bb.bridge.logEvent(evt, json)"
    lua="void sdkbox.bb.bridge.logEvent(evt, json)"/>
</ClientOnly>

### useReceiptValidationSandbox
<ClientOnly>
  <ShowAPI desc="/*
 * When testing purchase validation in the Sandbox environment, set true
 *
 * Platform: iOS
 */"
    cpp="static void useReceiptValidationSandbox(bool b)"
    js="void sdkbox.bb.bridge.useReceiptValidationSandbox(b)"
    lua="void sdkbox.bb.bridge.useReceiptValidationSandbox(b)"/>
</ClientOnly>

### validateAndLogInAppPurchase
<ClientOnly>
  <ShowAPI desc='/*
* validateAndLogInAppPurchase param need a json string, like follow sample.
*
* Android Params Sample:
* {
    "publicKey": "xxx",
    "signature": "xxx",
    "purchaseData": "xxx",
    "price": "xxx",
    "currency": "xxx",
    "parameters": {
        "k1": "v1",
        "k2": "v2"
    }
}
*
* iOS Params Sample:
* {
    "productIdentifier": "xxx",
    "transactionId": "xxx",
    "price": "xxx",
    "currency": "xxx",
    "parameters": {
        "k1": "v1",
        "k2": "v2"
    }
* }
*
*/'
    cpp="static void validateAndLogInAppPurchase(const std::string& purchaseJson)"
    js="void sdkbox.bb.bridge.validateAndLogInAppPurchase(purchaseJson)"
    lua="void sdkbox.bb.bridge.validateAndLogInAppPurchase(purchaseJson)"/>
</ClientOnly>

### setMinTimeBetweenSessions
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setMinTimeBetweenSessions(int seconds)"
    js="void sdkbox.bb.bridge.setMinTimeBetweenSessions(seconds)"
    lua="void sdkbox.bb.bridge.setMinTimeBetweenSessions(seconds)"/>
</ClientOnly>

### setResolveDeepLinkURLs
<ClientOnly>
  <ShowAPI desc=""
    cpp="static void setResolveDeepLinkURLs(const std::vector<std::string&gt;& urls)"
    js="void sdkbox.bb.bridge.setResolveDeepLinkURLs(urls)"
    lua="void sdkbox.bb.bridge.setResolveDeepLinkURLs(urls)"/>
</ClientOnly>

### setImeiData
<ClientOnly>
  <ShowAPI desc="/*
 * Platfrom: [Android]
 */"
    cpp="static void setImeiData(const std::string& data)"
    js="void sdkbox.bb.bridge.setImeiData(data)"
    lua="void sdkbox.bb.bridge.setImeiData(data)"/>
</ClientOnly>

### setAndroidIdData
<ClientOnly>
  <ShowAPI desc="/*
 * Send Android ID to AppsFlyer
 * Platfrom: [Android]
 */"
    cpp="sstatic void setAndroidIdData(const std::string& data)"
    js="void sdkbox.bb.bridge.setAndroidIdData(data)"
    lua="void sdkbox.bb.bridge.setAndroidIdData(data)"/>
</ClientOnly>

### setCollectIMEI
<ClientOnly>
  <ShowAPI desc="/*
 * Platfrom: [Android]
 */"
    cpp="static void setCollectIMEI(bool b)"
    js="void sdkbox.bb.bridge.setCollectIMEI(b)"
    lua="void sdkbox.bb.bridge.setCollectIMEI(b)"/>
</ClientOnly>

### setCollectAndroidID
<ClientOnly>
  <ShowAPI desc="/*
 * Send Android ID to AppsFlyer
 * Platfrom: [Android]
 */"
    cpp="static void setCollectAndroidID(bool b)"
    js="void sdkbox.bb.bridge.setCollectAndroidID(b)"
    lua="void sdkbox.bb.bridge.setCollectAndroidID(b)"/>
</ClientOnly>

### setCollectOaid
<ClientOnly>
  <ShowAPI desc="/*
 * Platfrom: [Android]
 */"
    cpp="static void setCollectOaid(bool b)"
    js="void sdkbox.bb.bridge.setCollectOaid(b)"
    lua="void sdkbox.bb.bridge.setCollectOaid(b)"/>
</ClientOnly>

## Repo

* [PluginSample](https://github.com/hugohuang1111/sdkbox-plugin-appsflyer/)

## References

* AppsFlyer offical document [Android API](
https://support.appsflyer.com/hc/en-us/articles/207032126-AppsFlyer-SDK-Integration-Android#api-reference)
* AppsFlyer offical document [iOS API](
https://support.appsflyer.com/hc/en-us/articles/207032066-iOS-SDK-V6-X-integration-guide-for-developers#api-reference)
