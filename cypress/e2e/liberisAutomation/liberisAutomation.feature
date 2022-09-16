Feature: Test Get A Demo functionality

    Scenario: Verify the validation message on Partner Selection page

        Given User is on Home page
        When User click on Get A Demo Button in Home page
        Then Verify user has landed on Partner Selection page and it has the required 3 Types of Partners
        When User click on Get A Demo Button in Partner Selection page
        Then Verify the validation message