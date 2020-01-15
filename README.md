# Eat-Da-Burger
```
'Eat-Da-Burger!' is a restaurant app that lets users input the names of burgers they'd like 
to eat.
```

### Link: 

https://polar-bastion-93663.herokuapp.com/


```
Designed and Developed by: Kevin Brown
```

# Project Overview
```
Users input the names of burgers they'd like to eat. Whenever a user submits a burger's 
name, the app displays the burger on the left side of the page -- waiting to be devoured. 
Each burger in the waiting area also has a Devour 'it!' button. When the user clicks it, 
the burger moves to the right side of the page. (The app stores every burger in a database,
whether devoured or not.)

```

# Organizational Overview

### Process Flow
```
    - HTTP Request comes in from a client browser
    - The app routes the HTTP Request to the appropriate controller
    - Controller uses the model abstraction to get the needed data from the db
    - Controller populates the appropriate view with the returned data
    - Controller sends an HTTP response back to the client browser

```

### Technologies Used in this application

```
Technology Requirements:
    - HTML/CSS
    - Javascript
    - node.js
    - Express
    - MySQL
    - Source Control: Github
    - Hosting: Heroku
    
```

### Implementation

```
<u>Server</u>
    server.js - listens for requests, sends responses, uses burgers_controller.js for routing

<u>MySQL Database</u>
    schema.sql - creates the burgers_db with one table, burgers that has the following columns:
        - id: an auto incrementing int that serves as the primary key
        - burger_name: string
        - devoured: boolean

    seeds.sql - populates the burgers table of burgers_db with 3 initial burgers

<u>Config</u>
    connection.js - connects Node to the MySQL server and exports the connection

    orm.js - abstraction layer containing the following MySQL functionality for use by the controllers:
        - selectAll()
        - insertOne()
        - updateOne()

<u>Model</u>
    burger.js - uses the methods in orm.js to get the requested burger data from burger_db

<u>Controller</u>
    burgers_controller.js - contains the routing logic for the application

<u>Views</u>
    index.handlebars - main page of the user interface, contains the handlebars rendering template

    layouts/main.handlebars - main page html wrapper

<u>Node Dependencies</u>
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "mysql": "^2.17.1"

<u>Directory Structure</u>
    .
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

```

# How to run the app

### Setup

```
1.) Clone the app to your local system: 'git clone git@github.com:kbrowngithub/Eat-Da-Burger.git'

2.) From a terminal cd into the root directory of your Eat-Da-Burger instance and run
the command:  npm install
This will install the required node packages.

3.) cd into the db directory and start MySQL command line tool and login: mysql -u root -p

4.) At the mysql> prompt run   <i>source schema.sql</i>   then run   <i>source seeds.sql</i>

5.) Type <i>exit</i> at the mysql> prompt

```

### Heroku deployment instructions

```
https://du.bootcampcontent.com/denver-coding-bootcamp/DU-VIRT-FSF-PT-09-2019-U-O/blob/master/01-Class-Content/13-express/03-Supplemental/HerokuGuide.md
```


### Execution

```
To execute the Eat-Da-Burger app locally, from a terminal window cd into the root
directory of the Eat-Da-Burger app and start the server by typing:  
    
    node server.js

You should see something similar to the following output:

    Server listening on: http://localhost:8080
    connected as id 236

Once the server is up and listening, in a web browser browse to http://localhost:8080/
```

