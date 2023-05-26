describe('Desktop View', function()
{
    it('Narrow search job results', function()
    {
        cy.visit('/')
        cy.get('[data-testid="findJobsKeywordInput"]').type('Javascript React')
        cy.get('[data-testid="findJobsLocationInput"]').clear().type('New York City')
        cy.get('[data-testid="findJobsSearchSubmit"]').click()
        cy.wait(3000)
        cy.get('[data-testid="dropdown"]').children('span').contains('Job Type').click({force:true})
        cy.get('[data-testid="dropdown-option"]').children('span').contains('Full-time').click()
        cy.wait(5000)
        cy.get('[data-testid="dropdown"]').children('span').contains('Minimum Salary').click({force:true})
        cy.get('[data-testid="dropdown-option"]').children('span').contains('$105,000').click()
        cy.wait(5000)
        cy.get('.chakra-radio').children('span').contains('Date').click({force:true})
        cy.wait(5000)
        cy.get('#job-list').within(() => {
            for(var list = 0; list < 5; list++) 
            {
                cy.get('li').eq(list).within(() =>
                {
                    cy.get('h3').invoke('text').then(txt => {
                        cy.log(txt)
                    })
                })
            }
        })
    })
})