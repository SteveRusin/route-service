Feature: Ability to call routes endpoint
  Scenario: Should throw validation error if offset is bigger then 5_000
    When GET routes?offset=5001 is called
    Then response should contain validation error

