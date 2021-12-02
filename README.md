# Bruin-Trading
To get the app working, first clone the repository from Github to your local environment.

Under the repository directory(./Bruin-Trade), rename
the directory `"./Bruin-Trade/client/src/containers/HomePage"`
to `"./Bruin-Trade/client/src/containers/homePage"`

Open up the terminal, change the directory to client of the repository (./Bruin-Trade/client).
To install the icons, use the command:
`npm install --save @fortawesome/fontawesome-free`
Don't close the terminal yet, we will use it shortly.


Next, download MySQL from https://dev.mysql.com/downloads/mysql/.
Make sure to choose the correct operating system and OS version before you download. 
Open the installer you just downloaded, continue through the process until Configuration. 
In Configuration, choose the option of "Use Legacy Password Encryption" and click next
(If you choosed the "Use Strong Password Encryption" option, please make sure to uninstall
MySQL from your local environment before you re-install it, otherwise the installer will
skip the configuration part and use the old configuration). In the next part, set the
password as "password" and you will finish the installation. (For more information,
please refer to https://dev.mysql.com/doc/refman/8.0/en/installing.html)


Now go back to the terminal. Inside the "client" directory of the repository, type the command:
`node index.js`
This should prompt messages as:
'''
SERVER IS RUNNING ON 8080
Database connected...
'''


Finally, open a new terminal and go to the same directory as before (./Bruin-Trade/client). 
Type the command:
`npm start`
which will open your default browser with a new window of the running app!
