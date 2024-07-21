///<reference types="cypress" />



describe("Verify people details using API request" , ()=>{

    before(function(){

        cy.fixture("lukeData").then(function(data){
            this.data=data
        })
    })

    it("Verify details of Luke Skywalker",function(){

        cy.request("GET" , this.data.lukeURL).then((lukeInfo)=>{
        expect(lukeInfo.status).to.eql(200)
        expect(lukeInfo.body).to.have.property("name")
        expect(lukeInfo.body.name).to.eql(this.data.lukeName)
        expect(lukeInfo.body.height).to.eql(this.data.lukeHeight)
        expect(lukeInfo.body.mass).to.eql(this.data.lukeMass)
        expect(lukeInfo.body.hair_color).to.eql(this.data.lukeHairColor)
        expect(lukeInfo.body.skin_color).to.eql(this.data.lukeSkinColor)
        expect(lukeInfo.body.eye_color).to.eql(this.data.lukeEyeColor)
        expect(lukeInfo.body.birth_year).to.eql(this.data.lukeBirthYear)
        expect(lukeInfo.body.gender).to.eql(this.data.lukeGender)
        expect(lukeInfo.body.homeworld).to.eql(this.data.lukePlanetURL)
        cy.request(lukeInfo.body.homeworld).then(function(homeW){
            expect(homeW.body.name).to.eql(this.data.lukeHomeWorld)
        })
        expect(lukeInfo.body.species).to.eql(this.data.lukeSpecies)  
        expect(lukeInfo.body.films.length).to.eql(this.data.filmsName.length)
        lukeInfo.body.films.forEach(function($el){
               cy.request("GET" , $el).then(function(films){
                expect(this.data.filmsName).to.include(films.body.title)
               })
        })
    lukeInfo.body.vehicles.forEach(function(veh){
        cy.request("GET" , veh).then(function(vehicleName){
            expect(this.data.vehiclesOfLuke).includes(vehicleName.body.name)
        })
    }) 
    lukeInfo.body.starships.forEach(function(starsh){
        cy.request("GET" , starsh).then(function(starshName){
            expect(this.data.starshipsOfLuke).includes(starshName.body.name)
        })
    })
        
})

    
          
})
})