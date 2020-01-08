# ReactProject1
My first React project. Trying to use Typescript, React, Nodejs, and Docker/Kubernetes

# Goals
The goals of this project are:
- Become more fluent with React and get the basics
- Get my first experience of Typescript
- Do clean code following some principles in the book 'Clean Code' by Robert C. Martin
- Do my first unit tests for a react web project
- Integrate Docker and Kubernetes to the project.

# Instructions
1. Install the necessary packages to create the project

To create the project, download nodejs and npm. Do:
```
  sudo apt-get install nodejs
  sudo apt-get install npm
```

Note that npm might not be to the latest version, and so the 'npx' command will be unknown. To update your npm, do:
```
  sudo npm install -g npm
  sudo npm install -g npm
```

You have to do it twice. The first call localizes your npm package, and the second updates npm. Now, try to see if typing 'npx' returns something else than 'no package found with name 'npx''.

2. Create the project

Since I want to use typescript for this project, I need to initialize the project differently. Do:
```
  npx create-react-app my-first-app --template typescript
```

Note: A warning may be shown asking you to run a chmod command. If so, run the chmod command.
Note: This command will also download all other packages needed to create a react application (like react-dom).

3. Compiling Typescript code

To start compiling some Typescript code, you have to add a module to your npm, namely 'typescript', using:
```
  sudo npm install -g typescript
```

Then, you can compile all your typescript files at once using:
```
  tsc *.ts
```

More on Typescript in the related directory... (ts-app)
