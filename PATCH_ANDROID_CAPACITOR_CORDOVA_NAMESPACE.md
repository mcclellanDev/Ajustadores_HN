# Parche Android Capacitor Cordova Namespace

Este parche corrige el error de Android Gradle Plugin moderno:

```text
Incorrect package="capacitor.android.plugins" found in source AndroidManifest.xml
Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported.
```

Ocurre porque `npx cap sync android` puede regenerar el modulo:

```text
android/capacitor-cordova-android-plugins
```

con un `AndroidManifest.xml` antiguo.

## Archivo 1

Ruta:

```text
android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml
```

Cambiar esto:

```xml
<manifest package="capacitor.android.plugins"
xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:amazon="http://schemas.amazon.com/apk/res/android">
```

Por esto:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:amazon="http://schemas.amazon.com/apk/res/android">
```

## Archivo 2

Ruta:

```text
android/capacitor-cordova-android-plugins/build.gradle
```

Buscar este bloque:

```gradle
android {
    compileSdkVersion project.hasProperty('compileSdkVersion') ? rootProject.ext.compileSdkVersion : 32
```

Cambiarlo por:

```gradle
android {
    namespace "capacitor.android.plugins"
    compileSdkVersion project.hasProperty('compileSdkVersion') ? rootProject.ext.compileSdkVersion : 32
```

## Comando para generar APK debug

Desde la carpeta `android`:

```powershell
.\gradlew.bat assembleDebug
```

El APK queda en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Nota

Si vuelves a correr:

```powershell
npx.cmd cap sync android
```

Capacitor puede regenerar los archivos y perder este parche. En ese caso, reaplica los dos cambios anteriores antes de ejecutar `assembleDebug`.
