### Jessica Martinez technical test.
In this repository you will find the test the Autohero page, this test is made with Javacript and Cypress.io. 
Tools you must install to run this test and how you can run it.
           
----
### Technologies
----

The project was created with:

- **Cypress.io:  **To interact with WebElements on the Webpage;
- **Javascript
- ** NodeJS
- **Project Object Model (POM): ** As a design pattern to create object repositories for web graphic interface elements.

----
###SetUp
----
- **Install NodeJs:  **(lasted stable version);
- **https://nodejs.org/en/


- **Configure environment variables:  **
- **WINDOWS:  **
>Open the Windows explorer or click on "My Computer".
We click on Equipment and with the right mouse button or looking for the icon -> Properties -> Advanced configuration / Change configuration -> Advanced options -> Environment variables -> New (System variables).

> Variable PATH :
Name: PATH
Variable value: C:\Program Files\nodejs\

----
###Execute TestCases
----
- **To Open Cypress Test Runner:  
> in the console > from projecto, type: 
npm run cypress:open

- **To Open Test in Chrome Browser:  
> in the console > from projecto, type: 
npm run cypress:chrome



----
###REPORTS
----

After the execute test to console verify the reports

- **Video report: 
> open folder: 
Project_directory\test_autohero\cypress\videos\

- **html report:
> open folder:
Project_directory/test_autohero/cypress/report/index.html