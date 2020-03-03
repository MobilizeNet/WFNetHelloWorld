

# WFNetHelloWorld
This is the repository for the 
WebMAP Winforms Hello World Sample.

This sample is meant to provide a small glimpse
of how does a WinForms application that has been upgraded to WebMap looks like.

NOTE: this repo is 
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MobilizeNet/WFNetHelloWorld) 

You can use the https://gitpod.io environment to start coding. 


# Wait, what is a WebMap application?

A WebMap application is a ASP.Net Core + Angular.
The main difference with other applications is that
WebMap provides a framework to handle the data-sync between backend and frontend.


## The Hello World Sample

This sample is made up of simple Windows Forms form with just a button and a label.
When you click the button it will update the label.

![Hello World screenshot](https://mobilizedocs.azurewebsites.net/guide/gettingstarted/img/001.gif)

Building HelloWorld for WinForms
```
cd Source
msbuild
```

Running HelloWorld for WinForms
```
HelloWorld/bin/Debug/HelloWorld.exe
```

To run on mono:
```
mono HelloWorld/bin/Debug/HelloWorld.exe
```


# The Hello World Sample in WebMap

On this same repo under `.\MigratedCode\HelloWorld1` you can find the source code 
for the HelloWorld application migrated to WebMap.

When the application is migrated it is turned into a modern web application. 
This application has two main parts: 

- Backend: this runs on ASP.NET core on the server and it will be C# code. This is where your business logic will be.
- FrontEnd: this runs on the browser, and it will be an Angular SPA that communicates with your backend.

The following diagram shows how the original files are mapped to the target artifacts.
![](https://mobilizedocs.azurewebsites.net/guide/gettingstarted/img/003.png)

## Building the HelloWorld in WebMap

Because modern web applications are made up of Backend and FrontEnd parts we will need to go thru two build steps.

### Building the FrontEnd

Install the Angular CLI, if you haven't already done so. Please open Command Line or PowerShell as administrator.

```
npm install -g @angular/cli
```

Install yarn, if you haven't already done so.

```
npm install -g yarn
```

> NOTE: npm configuration
This repository has an .npmrc file that points to the `Mobilize` NPM registry.
If you want to use another NPM registry update this file.

Now to finish the front end compilation go to `helloworld-angular` folder.
This folder should be under `MigratedCode/HelloWorld1/helloworld/helloworld-angular`
and open a Command Prompt from that folder or open this folder using VisualStudio Code and use the built-in terminal. Then start downloading all the node modules by executing the following command:

```
yarn install
```

Once the packages are successfully resolved, you can build the code using:

```
ng build
```

### Building the Backend

You can just open the command line on the `MigratedCode\HelloWorld1` folder and run:
```
dotnet build
```

You can also start **Visual Studio** and open the `HelloWorld.sln` and select *Build Solution* from the build menu.


## Running the HelloWorld

Once you have build both backend and frontend you are ready to run the application.

### Running from the command line:

You can just open the command line on the `MigratedCode\HelloWorld1\helloworld` folder and run:
```
dotnet run
```
### Running from Visual Studio 

Just click the **Run** button in VisualStudio


# Modifying your migrated application

# How to add a button to an existing screen

Just to illustrate the process of adding new elements to a migrated up, 
we will add a button in spanish to make our HelloWorld up available to a broader audience.

![](https://mobilizedocs.azurewebsites.net/guide/gettingstarted/img/006.png)

We need to do Backend And FrontEnd changes.
We recommend that you copy `HelloWorld1` to `HelloWorldExample` and perform the changes there.


# Backend changes

Programming in WebMap is very very similar to the way you do it in Windows Forms.
So the steps will be very similar.

Assuming that you copied the code to `MigratedCode\HelloWorldExample`
Go to `MigratedCode\HelloWorldExample\helloworld\Form1.Designer.cs`

- First we declare the new button.
```C#
[Intercepted]
private Mobilize.Web.Button button2 { get; set; }
```
> Notice the `Intercepted` attribute. It is used to let the WebMap helpers know that it should track changes on this element.

- Instantiate and initialize the new button. The typical place to put this code is inside the `InitializeComponent` method.

```C#
private void InitializeComponent()
{
  this.button2.Font = new Mobilize.Web.Font("Arial", 14.25F,   Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)  ));
  this.button2.Location = new System.Drawing.Point(134, 78);
  this.button2.Name = "button2";
  this.button2.Text = "Presione";
}
```

- If you want to add some functionality to your button you need to subscribe an event. You can subscribe the event on the `InitializeComponent` method
```
this.button2.Click += new System.EventHandler(this.button2_Click);
```

And write some handler code:
```
private void button2_Click(object sender, System.EventArgs e)
{
  this.label1.Text = "Hola Mundo";
}
```

You can compare your changes with the code at: `MigratedCode\HelloWorld2\helloworld`

# FrontEnd changes

Go to `MigratedCode\HelloWorldExample\helloworld\helloworld-angular\src\app\form1\form1.component.html`, and add the `wm-button` tag.

```html
<wm-button id="button2" class="button2" [model]="model.button2"></wm-button>
```

> WebMap provides a set of winforms equivalent components. They are usually prefixed with `wm-[original component name lowercase]`

> The `[model]` is an one-way binding that waits for some data to be entered. In this case model.button2 provides the data required by the `[model]` of `wm-button` The `id` and `class` could be used for styling purposes.

Now lets add some styles:

Go to `MigratedCode\HelloWorldExample\helloworld\helloworld-angular\src\app\form1\form1.component.css` and add some styles, for example:

```css
.HelloWorld_Form1 .button2 {
    font-family: "Arial";
    font-size: 17.1px;
    left: 134px;
    top: 78px;
    position: absolute;
    width: 116px;
    height: 50px;
    padding: 0px 0px 0px 0px;
    display: table-cell;
    vertical-align: middle;
    display: table-cell;
}
```

You can compare your changes with the code at: `MigratedCode\HelloWorld2\helloworld`


# Building to see changes

Just follow the same steps to compile backend and frontend. And run the application.

# Switch the CSS themes

The look and feel of your application is handle by CSS styles. 
The Angular components for angular are based on [Kendo UI](https://www.telerik.com/kendo-angular-ui).

Kendo provides some base themes:

- Kendo UI Default theme — Available through the `@progress/kendo-theme-default` NPM module.
- Kendo UI Bootstrap theme — Available through the `@progress/kendo-theme-bootstrap` NPM module.
- Kendo UI Material theme — Available through the `@progress/kendo-theme-material` NPM module.

You can also create customized themes using the [Kendo UI Theme Builder](https://www.telerik.com/kendo-angular-ui/components/styling/theme-builder)

Say you want to switch to Bootstrap theme follow this steps:

From the command prompt, go to `MigratedCode\HelloWorldExample\helloworld\helloworld-angular`

```
npm install --save @progress/kendo-theme-bootstrap
```

Next aplpy the theme to your project. That is done by Modifying the `angular.json` file:

Look for the `styles` section

```
{
  ...
  "projects": {
    "angular": {
      ...
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "styles": [
              "src/styles.css",
              "node_modules/@progress/kendo-theme-default/dist/all.css",
              "node_modules/@angular/material/prebuilt-themes/purple-green.css",
              "node_modules/@mobilize/winforms-components/styles/jQueryStyles.css",
              "node_modules/@mobilize/winforms-components/styles/styles.css",
              "node_modules/material-icons/iconfont/material-icons.css"
            ],
```
And change:

```
"node_modules/@progress/kendo-theme-default/dist/all.css",
```

with

```
"node_modules/@progress/kendo-theme-bootstrap/dist/all.css",
```

And now repeat the same instructions to rebuild the frontend. You do not need to rebuild the backend.

Your HelloWorld now has a new look:

![](https://mobilizedocs.azurewebsites.net/guide/gettingstarted/img/008.png)