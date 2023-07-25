# Basis for a development with React Native, using Expo as a development emulator

# Getting Started

>**Note**: It is necessary to have the **Expo Go application** installed on the desired device, it is available on the [App Store](https://apps.apple.com/br/app/expo-go/id982107779) and [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

## Step 1: Cloning Github Repository

First to clone the Github repository

```bash
git clone https://github.com/Juan-Severiano/react-native-base-project.git (your project name)

# Example

git clone https://github.com/Juan-Severiano/react-native-base-project.git my_app
```

## Step 2: Change name

For framework syntax reasons, you need to change the name in `package.json` to the name of the folder where you cloned the repository

```json
{
  // "name": "old-name",
  "name" : "new_name",
  "version": "0.0.1",
  "private": true,
  "main": "node_modules/expo/AppEntry.js",

   // more code
}
```


## Step 3: Installing Dependencies

To install the necessary dependencies for the React-App to work correctly, you need to run the command below

```bash
npm i

# or
npm install

```

After a while, all necessary dependencies for the project will be installed.

## Step 4: Start your Application

After these basic configurations you can see how the project is performing, and then finally run your application

To finally see your application running you must open the terminal inside your project folder, and type the following command

```bash

npx expo start

```

Your output in the terminal after this command should look something like this

```bash
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █ ▀▀▄ ▄██ █ ▄▄▄▄▄ █
█ █   █ ███ ▄▄ ▄▄ █ █   █ █
█ █▄▄▄█ █ ▄▄ █▄▀█▄█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ █ ▀ █ ▀ █▄▄▄▄▄▄▄█
█▄ ▄█▀ ▄▀   ██▀ ▀▄▄ ▄▄██  █
██▀█▄▄█▄▀█▀█▄██▄▄▄█▀▄█▄▄█▄█
█▄▄▄██▀▄▄█▄█▄ █  █  ███▀ ▀█
█▄▄▄  █▄▀█ █▀ ▄    ▄█ ▄█▀▄█
█▄▄▄▄▄▄▄█▀▀▀█▄▀ █ ▄▄▄  ▀█ █
█ ▄▄▄▄▄ █▀ ▄▄▄▄ █ █▄█ ██▀▄█
█ █   █ ██ █ ██ ▄▄▄▄   ▀ ██
█ █▄▄▄█ █ ▄ ▄▄▄▄ ▀▀█ ▄██▄▄█
█▄▄▄▄▄▄▄█▄▄█▄██▄▄▄▄█▄▄███▄█

› Metro waiting on exp://your_andress_ip:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
```

From there, you take the device on which you will run the application and open **Expo Go**, then click on `Scan QR code`, and point the camera at the QR code that is in your terminal

As this project is only to run with the expo, this `README` is not the focus of the process of running in emulators such as **Android Studio**, However, as you can see in the terminal output, if you press the `a` key, you open an android emulator (if you have one installed on your computer)

## Step 5: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. To reload the App after these changes, press `r` in your terminal so that the App is reloaded

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

Remember, with **great power** comes **great responsibility.**


# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
