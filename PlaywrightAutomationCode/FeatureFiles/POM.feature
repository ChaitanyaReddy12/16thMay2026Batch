Feature:  Page object model

    Background: Orange application launching
        Given I launch the orangeHRM application

    # Examples:
    #     | url                                                                |
    #     | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login |

    @method1
    Scenario: Verify login functionality for the Orange application
        Then I Verify login functionality for the Orange application "<Username>","<Password>"

        Examples:
            | Username | Password |
            | Admin    | admin123 |

    @method
    Scenario: Verify forgot Your password functionality
        Then I Verify forgot Your password functionality "<Username>"

        Examples:
            | Username |
            | Rohit    |