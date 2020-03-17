# SF_assessment
Assessment submission

# Project Title: SALESFORCE OPPORTUNITIES
Salesforce has a very strong sales team and this project helps them to create sales opportunities. The closest representative within 100kms of range is assigned to the customer. 

# Getting Started:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

# Language used:
JavaScript, HTML, CSS

# Prerequisites:
Node JS

# Installation:

1] Download and install Node JS from https://nodejs.org/en/

2] After installation go to command prompt and type bellow commands

> node -v (This command should show you the version of the node installed)

> npm -v (This command should show you the version of the npm installed. The node package manager(npm), automatically comes with Node)

Info: JavaScript is not so much about the language itself. But it's more about the whole JavaScript ecosystem, and environment that we use to write it in. we still write the exact same JavaScript but we use it together with a set of tools that make it easier and better to work with. And the foundation of all these tools is the Node Js and NPM ecosystem. And that's where the node package manager, or NPM, comes in. So NPM is just a simple command line interface that allows us to manage tools.
 
# Project source:
You can clone or download the project from the following git repository url
https://github.com/likhithbp/SF_assessment

# Steps to clone or download the project on local machine for git user:

Note: Please make sure you have Node js and git installed
1. Open command prompt
4. Clone the project from git url provided below
   git clone https://github.com/likhithbp/SF_assessment.git  
5. Step into the assessment folder
   cd SF_assessment
6. Run the application on local machine using the follwing command
   npm run start
7. Application will be up and running on browser

# Steps to clone or download the project on local machine for non-git user:

Note: Please make sure Node js is installed
1. Download the project from git repository https://github.com/likhithbp/SF_assessment
2. Go to Downloads folder
3. Unzip/Extract the zip file (i.e SF_assessment-master.zip)
4. Open command prompt
5. Step into the Downloads folder using the below command
    cd Downloads
6. Step into the "SF_assessment-master" folder
    cd SF_assessment-master
7. Run the application on local machine using the follwing command
   npm run start
8. Application will be up and running on browser

# How Application works:

Website displays a list of opportunities in the left hand side of the browser window. 
Click on any of the opportunities, it will provide the information on Sales Representative and the respective Company details that he/she has to visit.
You can also search for list of customers and representatives by typing inside the search bar.

# Code Overview:

## Dependencies:

#### Babel: Mainly used to convert ES6 code into ES5 that can be run by older JavaScript engines.

#### Webpack: It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included.

#### Jest: Testing Framework to works with babel project

## Application Structure

MVC(Model View Controller) software design pattern has been implemented for developing user interfaces which divides the related program logic into three interconnected elements.

model/: This folder contains the route definitions for our API and logic to assign representative to customers.

views/: To render results into the UI.

index.js: Contains control logic.

# How to run test?

Run the below command in the command prompt

npm run test

