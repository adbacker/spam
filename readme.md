SPAM
state page action model

* the page object model for UI test framework has significant maintaiability issues
https://johnfergusonsmart.com/beyond-page-objects-liberate-chains-ui-think/
https://cucumber.io/blog/bdd/understanding-screenplay-(part-1)/
https://www.slideshare.net/RiverGlide/refactoring-page-objects-the-screenplay-pattern


While SPAM isn't the screenplay pattern, it is heavily influenced by it.  This is an in-progress implementation using SPAM to test the petclinic web app.

https://github.com/spring-projects/spring-petclinic


Core SPAM concepts:

Task

Tasks are a logical user goal.  Create an order.  Change a password.  Check employee info.
Tasks are made up of actions and queries.

Action

Actions change the state of the system under test.  Actions are made up of other actions, interactions, and queries.

Query

Queries read the state of the system under test.  They shouldn't change state.  Queries are made up of interactions and possibly other queries.

Interaction (ixn)

From a UI perspective, interactions are the atomic system interactions.  Pushing a button, filling in a text box, making a selection from a drop down.

Page model objects

the only thing kept in the page model files are page selectors.  no business logic, no action, just the bare selectors

Validator

Validators encapsulate complex compound validation test steps