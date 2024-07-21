///<reference types="cypress" />


describe("Verify planets data" , ()=>{

    before(function(){
        cy.fixture("yavinData").then(function(data){
            this.data=data
        })
    })
    it("Verify Yavin planet data",function(){

        cy.request("GET" , this.data.yavin_url).then(function(yavinInfo){
            expect(yavinInfo.status).to.eql(200)
            expect(yavinInfo.body.name).to.eql(this.data.yavin_name)
            expect(yavinInfo.body.rotation_period).to.eql(this.data.yavin_rotation_period)
            expect(yavinInfo.body.orbital_period).to.eql(this.data.yavin_orbital_period)
            expect(yavinInfo.body.diameter).to.eql(this.data.yavin_diameter)
            expect(yavinInfo.body.climate).to.eql(this.data.yavin_climate)
            expect(yavinInfo.body.gravity).to.eql(this.data.yavin_gravity)
            expect(yavinInfo.body.terrain).to.eql(this.data.yavin_terrain)
            expect(yavinInfo.body.surface_water).to.eql(this.data.yavin_surface_water)
            expect(yavinInfo.body.population).to.eql(this.data.yavin_population)
            expect(yavinInfo.body.residents).to.eql(this.data.yavin_residents)
            expect(yavinInfo.body.films).to.eql(this.data.yavin_films)
            cy.request("GET" , yavinInfo.body.films[0]).then(function(filmsName){
                expect(filmsName.body.title).to.eql(this.data.yavin_film_title)
            })
        })
    })
})