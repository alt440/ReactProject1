# Setup instructions
You can find all the instructions [here](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

1. Create a new project, and follow this specific setup.
In your project folder, create a 'dist' and 'src' directory using mkdir:
```
mkdir dist
mkdir src
```
Then go in your 'src' folder and create a 'components' folder:
```
cd src
mkdir components
```

2. Go back to the root folder of your project, and add the dependencies.
First initialize the npm json using init:
```
npm init -y
```
Then add the dependencies to compile Typescript into JS:
```
npm install --save-dev webpack webpack-cli
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
npm install --save-dev typescript ts-loader source-map-loader
```

3. Add the required configuration files to compile typescript properly
You have to add 'tsconfig.json' (for Typescript properties) and 'webpack.config.js' (for Webpack properties). Create both files in the root folder of your project with the following code:

tsconfig.json
```
 {
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es6",
        "jsx": "react"
    }
}
```
From this file, you can understand why we are referring our html to the main.js file in the dist folder: it is our Typescript code transformed into JS.

webpack.config.js
```
module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
```

4. Create your components and other .ts files with the extension .tsx and relate them to index.tsx

index.tsx is a file that goes directly under the 'src' folder. Typescript will look for that file, and it is probably because of the 'package.json' configuration.

If you want anything to appear on your page, make sure you use ReactDOM.render in that 'index.tsx' file using a reference to an object created on your html page. For example, second argument of the ReactDOM.render function could be 'document.getElementById('example')' because I have created a 'div' with id 'example' on my html page.

5. Copy the html code of this project (copy index.html)

The code to show a component of react should be very similar to what is in 'index.html'. That is because 'main.js' is all our Typescript converted code and the two other statements are necessary to include the React and ReactDOM modules. The empty 'div's store the content we want them to render from our 'index.tsx' file.

6. Compile the project and run

To compile the project, use:
```
npx webpack
```
If npx is not recognized, follow the steps in the README above this folder.

Then, check out your html page by clicking on 'index.html' from 'Files' using Firefox to see the result.

