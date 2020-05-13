
### .ENV File
> Make sure to add the .env file in the below format

### NOTE
> Also, add the following contents in the line 111, 112
> More details [here](https://github.com/fullstackreact/react-native-oauth/pull/228/commits/fbedf8a8d443f3dfc9c430016413916413ca6ea0).

```java
    // node_modules\react-native-oauth\android\src\main\java\io\fullstack\oauth\OAuthManagerDialogFragment.java
    mWebView.getSettings().setDomStorageEnabled(true);
    mWebView.getSettings().setUserAgentString("Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19");
```