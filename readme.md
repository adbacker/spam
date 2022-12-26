# SPAM
## state page action model

* the page object model for UI test framework has significant maintaiability issues
https://johnfergusonsmart.com/beyond-page-objects-liberate-chains-ui-think/
https://cucumber.io/blog/bdd/understanding-screenplay-(part-1)/
https://www.slideshare.net/RiverGlide/refactoring-page-objects-the-screenplay-pattern


While SPAM isn't the screenplay pattern, it is heavily influenced by it.  This is an in-progress implementation using SPAM to test the petclinic web app.

https://github.com/spring-projects/spring-petclinic


## Core SPAM concepts:

### Task

Tasks are a logical user goal.  Create an order.  Change a password.  Check employee info.
Tasks are made up of actions and queries.

### Action

Actions change the state of the system under test.  Actions are made up of other actions, interactions, and queries.

### Query

Queries read the state of the system under test.  They shouldn't change state.  Queries are made up of interactions and possibly other queries.

Interaction (abbreviated ixn because we're lazy.  Kinda like i18n for internationalization ;-) )

From a UI perspective, interactions are the atomic system interactions.  Pushing a button, filling in a text box, making a selection from a drop down.

### Page model objects

the only thing kept in the page model files are page selectors.  no business logic, no action, just the bare selectors

### Validator

Validators encapsulate complex compound validation test steps


So how do we even get started?  Well at the beginning of course ... which in this case is at the end.

Looking at our petclinic app example, there's no login, so no users.  Let's assume it's an admin for arguments sake.

admin can add a new owner
admin can edit an existing owner
admin can add a pet to an owner
admin can edit a pet
admin can add a visit for a vet

In the words of the immortal MC Hammer, we can now break it down.

What's the user trying to do?  We'll use BDD's Given-When-Then 

given an admin is logged in
when admin creates a new owner
then owner information page is displayed

What would we like the test itself to look like?  Do we want to have direct clicks on elements in the test itself?  We do not.  (where we == I.  This is our tutorial.  We can use the royal we if we so desire)

it("admin should be able to create a new user", () => 
    // create a new owner object.
    // we'll make a default new owner have a unique first and last name
    const newOwner = new Owner(); 
    new AddNewOwnerTask(newOwner).execute()
    .then( () => {
        // validator does all the asserts and expects
        // validation is simple in this case, but abstracting it out
        // means we can alter it later without touching every test
        // that uses it
        new ValidateOwnerCreated().execute(owner); // validator 
    });
})


So for the first test, we'll need to build out:

model/page/MenuHeader
model/page/FindOwnerPage
model/page/OwnerInfoPage

ixn/page/MenuHeaderIxn
ixn/page/FindOwnePageIxn
ixn/page/OwnerInfoPageIxn

action/CreateOwnerAction

validator/ValidateOwnerCreated


First up ... menu header page!

The menu header is a bit tricky.  If the window is less than 992 pixels wide, a menu button appears.  Wider than 992px and the links show directly - no menu button.

Hrmf.  What to do, what to do, what to do...
First instinct may be to put in an if statement.  "Hey, if the browser window is > threshold then..."  No, no, NO.  (I have "opinions" on this ...)  You should KNOW and CONTROL your inputs as much as possible to make asserting on the results more reliable.


tl;dr -- tl;dr -- tl;dr -- tl;dr

> You might think "but what if I want to test varitions?  Picking randomly from a list means I can accomplish two things at once - test different values AND the primary functionality!"  This can be a really bad idea.  Needing/wanting variation means you don't know that all the inputs === expected outputs.  If you want to test variations, write a test explicitly for testing variation ... so that when the test fails you KNOW that you were testing variations and you know where to start looking if it fails.

> I've been in situations where flaky tests were finally, after weeks, traced down to one opton in a large "random" set of inputs that triggered the fail.  Since it'd run once and fail (in a manner that didn't directly point to the input) and then run again 10-20x just fine it was assumed to be flakiness im the system under test.  <insert facepalm>

> Back to your regularly scheduled test breakdown.  


In order to make sure we're seeing what we expect to see, we'll make sure the browser window is small enough that the menu icon should NOT show up.  If we want to (and we should), later on another test will explicitly check for responsive design elements.



*to be continued...*