Feature: Ability to call routes endpoint
  Scenario: Should throw validation error if offset is bigger then 5_000
    When GET routes?offset=50001&limit=3 is called
    Then response should contain validation error

  Scenario: Should give paginated response
    Given Database contains 5 items with sequential id
    When GET routes?offset=0&limit=3 is called
    Then response should contain first 3 items

