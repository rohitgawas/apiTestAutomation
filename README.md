ReadMe.md :

Getting started :

1.	Clone the repository in your local storage
2.	Open the repository in any JavaScript supporting IDE.
3.	Open terminal
4.	In terminal , navigate to  root directory where package-lock.json is present
5.	Enter following command :
```
npm install 
```
this command will install all the dependencies required to run the project(Cypress , mochawesome).
6.	Now in terminal enter one of the following command to open the cypress test runner :
```
- node_modules/.bin/cypress open

OR

- npx cypress open
```
7.	Select e2e testing 
8.	Select Browser 
9.	Run the tests one by one 




Folder Structure :
```
cypress
  -downloads
  - e2e
       -> verifyPeopleDetails.js
       -> verifyYavinData.js
  - fixtures
       -> lukeData.json
       -> yavinData.json
  -support
       ->commands.js
   -videos
```

1.	E2e folder contains the test scripts
2.	Fixtures folder contains two data files , lukeData. Json and yavinData.json. This files store expected data for  the test scripts in e2e folder.
3.	Support folder contains commands.ts which can be used to write common utilities.



HTML report generation :
To generate html reports of tests , we use mochawesome.
To generate reports :
1.	In terminal run following command :
```
npx cypress run –reporter “mochawesome” –spec “/enter specfile relative path” –headed
```
This will run tests in headed  mode and will generate the reports in mochawesome-reports folder present under root folder. Recorded videos will get stored in videos subfolder under cypress folder


2.	In terminal run following command :
```
npx cypress run  -- reporter “mochawesome” --spec  “/provide relative path of specfiles” 
```
This will run tests in headless mode and will generate the reports in mochawesome-reports folder present under root folder. Recorded videos will get stored in videos subfolder under cypress folder




Test cases :

1.	verifyPeopleDetails.js :

test steps :

- Create a request with following details :
  ```
   Method – GET , URL - https://swapi.dev/api/people/1/
  ```
 - Take response data and verify following data :
```
"filmsName":["A New Hope",
    "The Empire Strikes Back"
    , "Return of the Jedi"
    , "Revenge of the Sith"] ,

 "vehiclesOfLuke":["Snowspeeder" , "Imperial Speeder Bike"],

 "starshipsOfLuke":["X-wing" , "Imperial shuttle"] ,
 "lukeURL": "https://swapi.dev/api/people/1/",
 "lukePlanetURL": "https://swapi.dev/api/planets/1/",
 "lukeName":"Luke Skywalker",
 "lukeHeight": "172",
 "lukeMass":"77",
 "lukeHairColor":"blond",
 "lukeSkinColor": "fair",
 "lukeEyeColor": "blue",
 "lukeBirthYear":"19BBY",
 "lukeGender" : "male" ,
 "lukeHomeWorld":"Tatooine",
 "lukeSpecies":[]
    

```
-	Response data received from request should match with above data


2.	verifyYavinData.js:


test steps :

- Create a request with following details :
```
   Method – GET , URL - " https://swapi.dev/api/planets/3/ "
```
 - Take response data and verify following data :

   
```
  "yavin_name": "Yavin IV",
  "yavin_rotation_period": "24",
  "yavin_orbital_period": "4818",
  "yavin_diameter": "10200",
  "yavin_climate": "temperate, tropical",
  "yavin_gravity": "1 standard",
  "yavin_terrain": "jungle, rainforests",
  "yavin_surface_water": "8",
  "yavin_population": "1000",
  "yavin_residents": [],
  "yavin_films": [
    "https://swapi.dev/api/films/1/"
  ],
  "yavin_url": "https://swapi.dev/api/planets/3/",
  "yavin_film_title":"A New Hope"
    
```

-	Response data received from request should match with above data

