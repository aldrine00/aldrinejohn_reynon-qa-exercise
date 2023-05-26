describe('Mobile View', function()
{
    before(function()
    {
        cy.viewport(360,740)
    })
    it('Narrow search job results', function()
    {
        cy.visit('/')
        cy.get('[data-testid="mobileFindJobsKeywordButtonToggle"]').click()
        cy.get('[data-testid="findJobsKeywordInput"]').type('QA Engineer')
        cy.get('[data-testid="findJobsLocationInput"]').clear().type('New Jersey')
        cy.get('[data-testid="findJobsSearchSubmit"]').click()
        cy.wait(3000)
        cy.get('[data-testid="sorting-filters-mobile-button"]').click()
        cy.get('[data-testid="radio-mobile-li"] > label').children('span').contains('Contract').click()
        cy.wait(5000)
        cy.get('[data-testid="radio-mobile-li"] > label').children('span').contains('$90,000').click()
        cy.wait(5000)
        cy.get('#job-list').within(() => {
            for(var list = 0; list < 5; list++) 
            {
                cy.get('li').eq(list).within(() =>
                {
                    cy.get('[data-testid="searchSerpJob"]').invoke('text').then(txt => {
                        cy.log(txt)
                    })
                })
            }
        })
    })
})