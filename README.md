# Installation

**Cypress** 

can be installed in two ways, the first on is by using the terminal and type this command:

```
npm install cypress@latest --save-dev
```

or by [direct download](https://download.cypress.io/desktop) if you want to try it first.

For more information about the installation process you can check this [guide](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

**Nodejs**

After installing Cypress, you need to install the latest or stable version of node . Click this [link](https://github.com/coreybutler/nvm-windows) for your reference.

**Visual Studio Code**

An IDE use for coding and applying git commands since it has a terminal in it. You can check information and download it [here](https://code.visualstudio.com/) 

**Git**

Installation for this is required when you are cloning repositories, pushing codes/changes, and so on that contributes to this repository. you can know more about this and the installation process this by going to this [link](https://git-scm.com/) 

# Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally.

1. You’ll see the clone button under the **Source** heading. Click that button.
2. You can change the git url to **SSH** or **HTTPS**
3. After you have chosen the git url type, copy the link
4. Open your terminal
5. Paste the git url and hit Enter
6. Now you have cloned the repository in your local machine, You can check it by going to the directory

# Running the project

In order to run the project, you need to import dependencies by running:

```
npm install
```

Once the package is done, you need to run a cypress verification command:

```
npx cypress verify
```
if you encounter a message that you need to install cypress, run this command:

```
npx cypress install
```
this will install the cypress with the specified version from package.json

Then you re-run the cypress verification command then you can open and run cypress test files by running:

```
npx cypress open
```

# What needs to improve

Shorter and clean codebase that can still run expected result