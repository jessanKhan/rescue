# rescue
its an app for disaster alert and get help

to run this app please follow the instructions of react native official website. 

or go through this process.

You will need Node, the React Native command line interface, a JDK, and Android Studio.

Node: https://nodejs.org/en/download/
JDK: (JDk will be automatically installed when you install Android Studio)
Android Studio: https://developer.android.com/studio?gclid=CjwKCAiAgJWABhArEiwAmNVTB7GRhvnvYdjPeAopsg8WD6HlQS6V5GolUr6IHsz0oe-8CKQJpwGRchoCv1MQAvD_BwE&gclsrc=aw.ds

*Download Node and install it. 
*After that DownLoad and install android studio and also download SDKs after installation.
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

Android Studio Welcome

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

Android SDK Platform 29
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image.
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
ANDROID_HOME Environment Variable

The SDK is installed, by default, at the following location:

%LOCALAPPDATA%\Android\Sdk
You can find the actual location of the SDK in the Android Studio "Settings" dialog, under Appearance & Behavior → System Settings → Android SDK.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

Open powershell
Copy and paste Get-ChildItem -Path Env:\ into powershell
Verify ANDROID_HOME has been added
4. Add platform-tools to Path
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Select the Path variable.
Click Edit.
Click New and add the path to platform-tools to the list.
The default location for this folder is:

%LOCALAPPDATA%\Android\Sdk\platform-tools
React Native Command Line Interface
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.


After All installation done go to the project directory and run the following command "npm install" after finishing that run this command "npx react-native run-android".

Your Project must run smoothly after those steps.

IF you cant run the project at all please watch this video: https://www.youtube.com/watch?v=0DhQd_EK1Ng



