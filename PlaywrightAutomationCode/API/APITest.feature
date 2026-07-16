Feature: API Testing

   @regression
    Scenario: perform delete operation
        Given I send a delete request
        Then The response status code of delete should be 204

   @regression
    Scenario: perform get operation
        Given I send a get request
        Then The response status code of get should be 200

   @regression
    Scenario: perform post operation
        Given I send a post request with body
            """
            {
            "name" : "Akash",
            "job": "Test Engineer"
            }
            """
        Then The response status code of post should be 201

   @regression
    Scenario: put post operation
        Given I send a put request with body
            """
            {
            "name" : "Akash",
            "job": "Senior Test Engineer"
            }
            """
        Then The response status code of put should be 200

   @regression
    Scenario: put patch operation
        Given I send a patch request with body
            """
            {
            "name" : "Rohit",
            "job": "Techical Lead"
            }
            """
        Then The response status code of patch should be 200

