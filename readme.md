SPAM
state page action model

* aims to address a number of maintinablity and oraganizational issues with the page object model
* heavily influenced by the journeyman/screenplay test pattern


Tasks

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