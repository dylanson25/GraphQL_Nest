# GraphQL + Nest

## Goal

This is my rout to learn GraphQL following Fernando Herrera course

## 01-Nest_TODO

I created a TODO API as a reinforcement method to solidify my knowledge of Nest. This TODO API includes six paths:

- Get all TODO
  - /todo
- Get only one with TODO id
  - /todo/{ id }
- Post to add a new TODO
  - /todo
  ```json
  Body:
  {
      "description": "NEW TODO"
  }
  ```
- Patch update elements of exist element
  - /todo/{ id }
  ```json
  {
    "description": "UPDATE TODD",
    // OR
    "done": false
  }
  ```
- delete Delete a exist element
  - /todo/1
