Hello!  And welcome to...

# SPAM
## State Page Action Model 

### a test framework pattern implemented with cypress and typescript

This is putting pen to paper (fingers to keyboard) to capture the methodology I've gravitated to in replacement of the page object model.  This project is still in progress  (until this disclaimer is removed) so if it seems incomplete, that's why.  If it looks incomplete and hasn't been updated for months or years I probably won the lottery or died in a horrible industrial accident involving a crate of toothpaste, several unreasonably large tomatoes, and a very disgruntled giraffe.


SPAM came out of a number of frustrations:

* the page object model for UI test framework has significant maintaiability issues
> * https://johnfergusonsmart.com/beyond-page-objects-liberate-chains-ui-think/
> * https://cucumber.io/blog/bdd/understanding-screenplay-(part-1)/
> * https://www.slideshare.net/RiverGlide/refactoring-page-objects-the-screenplay-pattern
* Multiple people contributing to an automation framework put stuff in different places.  Sometimes the same person 
  will put the same kinda stuff in different places depending on the day and whether they remember where they put it last week.
* Given the above, figuring out whether something is already built can be all but impossible sometimes.

SPAM gives concrete guidance on where to put what, how to get at it, and how to build tests with it.  Framework 
coding standards.  Of course, YMMV but it can at least give you some place to start.

 If you're familiar with the screenplay pattern, you'll see some similar verbiage.  That's intentional.  While SPAM 
 isn't the screenplay pattern, it is organization and abstraction building blocks that can be used with the screenplay pattern. 

SPAM came out of frustration with maintaining POM based frameworks as they passed a certain size.  Using the page 
object model with a super simple app can be reasonably maintainable.  But if your apps are of any complexity SPAM will let you scale to thousands of tests without tearing your hair out.  Well, less hair anyway.

This is an example test framework implementation using cypress, typescript, and  SPAM to test the [petclinic web app]( https://github.com/spring-projects/spring-petclinic ). You'll need the petclinic app running locally in order for the tests to work.  

The easiest way to get petclinic running is to install docker and pull their prebuilt image:
 ```
 docker run -p 8080:8080 springcommunity/spring-framework-petclinic:6.0.3
```


## What's with all the weird "then" stuff??
If you're not familiar with cypress, know that all the "then()" bits are intrinsic to how it does things.  The ".then" means "make sure everything is done before moving on"  (that's not exactly accurate, but it's a useful lie ;-) )  

Even better check out https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.


## Caveats, exceptions, excuses, etc

This isn't intended to be a full test implementation.  The intent is to provide examples for as many scenario categories as I can think of.

If there's a particular scenario in the app you'd like to see ("how would you test/categorize/organize testing xyz?") let me know.


## Core SPAM concepts:

### Task

Tasks are a logical user goal.  Create an order.  Change a password.  Check employee info.
Tasks are made up of actions and queries.  Simple tests may have a single task, or in some cases one or two actions.

My rule of thumb is if there are more than 2 actions, start considering if what you're doing should be a task.


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


## Where to start?
Well at the beginning of course ... which in this case is at the end.

Looking at our petclinic app example, there's no login, so no users.  Let's assume it's an admin for arguments sake.  We want to test:

- admin can add a new owner
- admin can edit an existing owner
- admin can add a pet to an owner
- admin can edit a pet
- admin can add a visit for a vet

In the words of the immortal MC Hammer, we can now break it down.


### What's the user trying to do?  We'll use BDD's Given-When-Then 

- *given an admin is logged in*
- *when admin creates a new owner*
- *then owner information page is displayed*

What would we like the test itself to look like?  Do we want to have direct clicks on elements in the test itself?  We do not.  (where we == I.  This is our tutorial.  We can use the royal we if we so desire)  I try to make the tests expressive enough to be readily understood by anyone.  Tests should show intent and goals, not (necessarily) implementation steps.

```
it("admin should be able to create a new user", () => 

    new AddNewOwnerTask().execute()
    .then( newOwner => {
        // validator does all the asserts and expects
        // validation is simple in this case, but abstracting it out
        // means we can alter it later without touching every test
        // that uses it
        new ValidateOwnerCreated().execute(newOwner); // validator 
    });
})
```

What does our first test touch?  Looking at the pages we nav through, it appears we'll need to build out:

models
* model/page/MenuHeader
* model/page/FindOwnerPage
* model/page/OwnerInfoPage

interactions
* ixn/page/MenuHeaderIxn
* ixn/page/FindOwnePageIxn
* ixn/page/OwnerInfoPageIxn

actions
* action/CreateOwnerAction

validators
* validator/ValidateOwnerCreated


### First up ... menu header page!

The menu header is a bit tricky.  If the window is less than 992 pixels wide, a menu button appears.  Wider than 992px and the links show directly - no menu button.

Hrmf.  What to do, what to do, what to do...
First instinct may be to put in an if statement.  "Hey, if the browser window is > threshold then..."  No, no, NO.  (I have "opinions" on this ...)  You should KNOW and CONTROL your inputs as much as possible to make asserting on the results more reliable.


> ### tl;dr -- tl;dr -- tl;dr -- tl;dr

> You might think "but what if I want to test varitions?  Picking randomly from a list means I can accomplish two things at once - test different values AND the primary functionality!"  
> 
> This can be a really bad idea.  Using variation in this manner means you don't know that all the inputs === expected outputs.  
> *If you want to test variations, write a test explicitly for testing variation ... so that when the test fails you KNOW that you were testing variations and you know where to start looking if it fails!!*

> I've been in situations where flaky tests were finally, after weeks, traced down to one opton in a large "random" set of inputs that triggered the fail.  Since it'd run once and fail (in a manner that didn't directly point to the input) and then run again 10-20x just fine it was assumed to be flakiness in the system under test.  <insert facepalm>

> Back to your regularly scheduled test breakdown.


In order to make sure we're seeing what we expect to see, we'll make sure the browser window is large enough that the menu icon should NOT show up.  We'll use a different test to explicitly check for responsive design elements.

All my page models start in /src/model/page.  From there, it's app dependent as to how organization goes.  In this simple case, we'll stick it at root.  

Take a look at /src/model/page/MenuHeader.ts:

```
export class MenuHeader {
    public static findOwnersSelection = "a[href='/owners/find']";
}
```

That's it. Easy, eh? The selectors are static as further reinforcement that page objects should NOT maintain any sort of state.

Next up...

### Building out FindOwnerPage
```
export class FindOwnerPage {
    public static addOwnerButton = "a[href='/owners/new']";
    // super ugly selector, indeed
    public static findOwnerButton = "#search-owner-form > div:nth-child(2) > div > button";
    public static ownerLastNameTextbox = "input[id='lastName']";
}
```

If this were a real application, I'd likely pitch a fit about the find owner button being so inaccessible.  Also in a real application I'd work harder to build a selector that was at least somewhat more robust.  Maybe we'll come back to that.

Otherwise, again - very straightforward.  Define what you need now, add more later.

Rinse, lather, repeat for the rest of the pages we need for this first test.


## On to interactions!

Interactions are the only thing that should ever touch the page model.  Need to get a value? Write an interaction.  Need to stick something in a textbox?  Interaction.  

"But why??" I hear you cry.  "It's easy enough...we could even put it in the page model.  One file!"  Yes, yes you could.  However, the single responsibility principle (S in SOLID) is there for a reason.  Small is beautiful.  Limit your blast radius.  One file for a page model, one file for page interactions.  Logical separation of concerns.  Trust me on this one.


### ixn/page/MenuHeaderIxn

ixn/page/MenuHeaderIxn
```
export class MenuHeaderIxn {

    public static clickFindOwners(): Cypress.Chainable {
        return cy.get(MenuHeader.findOwnersSelection).click();
    }
}
```
Simple and clear.  No doubt as to what it does.

ixn/page/FindOwnerPageIxn is similarly straightforward so let's move on to something a mite more interesting.


### ixn/page/OwnerInfoPageIxn

The owner info page has a couple of interesting points.  One is that it's got two tables we need to figure out how to deal with. Tables can the proverbial witch with a capital B.  Easy to do poorly, hard to do in a robust and maintainable manner.  So let's detour into...


## Dealing with tables

My current secret sauce leverages the increadibly handy cypress-get-table plugin.  ( https://github.com/roggerfe/cypress-get-table )  This wonderful bit of kit takes in the root of a standard table structure (ie using table, th, tr and td tags) and returns a json representation.  With some helper methods on top it makes for a nicely abstracted way to deal with tables.   

To wit, first we grab the table object itself:
```
    public static getOwnerInfoTable(): Cypress.Chainable {
        return TableIxn.getParsedTable(OwnerInfoPage.ownerInfoTable);
    }
```
and then pass it into a table ixn class
```
export class TableIxn {
    public static getParsedTable(tableLocator: string): Cypress.Chainable {
        // @ts-ignore yes, getTable does work
        return cy.get(tableLocator).getTable();
    }
}
```
the .getTable() is what calls cypress-get-table, which returns the parsed json.

"Ok", you respond, "I still have to munge and fold, spindle, and mutilate"  Well, yes.  Kinda.  But not really.  This is where the magic of TableQuery comes in.


### TableQuery

TableQuery abstracts out querying all manner of combinations of data in rows, data in columns, what's the data in the given column based on the value of a different column, etc.

Look at test/smoke/TableTests.ts for examples.  This loads the tabletest.html in the same directory and exercises the TableQuery logic against it.  

At this point in our journey we've yet to talk about or implement abstracting table column logic.  Looking at src/validator/ValidateOwnerInTableResults we're still using hardcoded column names for validation.  We may abstract that out in a bit.  Maybe not.  We'll see how far it goes.

At this point, we've got the model, the interactions, and a query.

Let's look at 

### ValidateOwnerInTableResults

A validator encapsulates the steps to validate success.  

It's very common to validate the same outcome after different tests, so this gets us a test that conveys intent, as well as a nicely encapsulated set of validation steps that can be reused and updated in a single spot.  Let's face it, sticking "ValidateOwnerInTableResults" IS a bit more obvious then the steps.


### FindOwnersAction

Action - encapsulated and logical set of steps that changes system state.  Nav to the page, enter the name, click the button.

```
export class FindOwnersAction extends Action {
    
    public execute(lastName: string): Cypress.Chainable {
        return FindOwnerPageIxn.navTo()
        .then( () => {
            FindOwnerPageIxn.enterOwnerLastName(lastName);
        }).then( () => {
            FindOwnerPageIxn.clickFindOwnerButton();
        });
    }
}
```

### OwnerSearchTest

```
it.only("owner search with more than one result should show owner list result including owner", () => {
    // given multiple owners with the same last name
    // if we search for that owner last name  
    // then the owner expected should be in the search results table

    // known pre-existing owner in data set
    const owner = new Owner();
    owner.address="638 Cardinal Ave.";
    owner.firstName = "Betty";
    owner.lastName = "Davis";
    owner.phone = "6085551749";

    new FindOwnersAction().execute(owner.lastName)
    .then( () => {
        new ValidateOwnerInTableResults().execute(owner);
    });
})
```

Couple of interesting bits.  Good chance that we'd want to refactor that and pull it up into a "known existing user" fixture of some sort.

This test is short, sweet, and to the point.  Let's look at something (only a bit) more complicated.

### AddOwnerTest

(we'll return to this bit after filling out the API testing examples)

(blame the giraffes)



## Architecting API tests

Testing APIs can be tricky. It's easy to do quick, and easy to do poorly.

Most of the test examples I see are ridiculously simple.  They show how to do calls to an api with few (if any) parameters.  Everything is hard-coded.  And validation is equally simplistic.

You could say (and I am) that these tutorials aren't showing you how to build api test automation, they're simply showing you how to call an api.  The most difficult bit - organizing and architecting so things don't become spaghetti in short order - is left as an exercise to the student.

Note that the usual disclaimers apply.  (your milage may vary, I'm human and make mistakes, past performance is no guarantee of future returns.)

This first example is a GET request with parameters appended to the url.  Later examples will cover apis using form data (ie, a POST with the key/value pairs in the body) as well as when the url path itself contains parameters.


### Testing a simple GET call with URL parameters

Here we'll walk through adding infrastructure to our test project to call the publicly available datausa.io api.

Here's a call example:

```https://datausa.io/api/data?drilldowns=Nation&measures=Population```

In this first case, there are two parameters we'll be architecting for: drilldowns and measures.

These are the bits of SPAM architecture the example depends on.  If you're looking at the sample project, you've already got them.

* src/api/cfgMgt/RunCfg.ts
* src/api/ApiCallMgr.ts
* src/api/ApiClient.ts
* src/api/HttpApiCallMgr.ts
* src/api/HttpApiClient.ts
* src/model/api/ApiCall.ts
* src/model/api/ApiEndpoint.ts
* src/model/api/HttpCallCfg.ts
* src/api/HttpApiEndpoint.ts

Here we go!

### Create the model files

#### src/model/api/datausa/DataUsaParm.ts:
```
type DataUsaParm = "drilldowns" | "measures"
```

This is all the parameter names you'll use for making the api calls.  Note it's *not* the business objects, but the key names you'll use to access the parameters

In the case where the values are part of a key/value pair, make these the actual key names for simplicity.


#### src/model/api/datausa/DataUsaEndpoint.ts
as this is a GET call, the params we pass in will be appended to the URL.

```
export class DataUsaEndpoint extends HttpApiEndpoint {

    parms = new Map<DataUsaParm, string>();
    httpMethod = "GET";
    basePath = `${RunCfg.getInstance().dataUsaHost()}/api/data`;
    getHeaders(): any {
        return {
            'accept': 'text/html,application/xhtml+xml,application/xml'
        }
    }

    getUrl(): string {
        return`${this.basePath}?${this.urlParmMap()}`;
    }
```


Now we have to figure out what our return will look like.

The raw return looks something like this:
```
{
"data": [
{
"ID Nation": "01000US",
"Nation": "United States",
"ID Year": 2014,
"Year": "2014",
"Population": 314107084,
"Slug Nation": "united-states"
},
{
"ID Nation": "01000US",
"Nation": "United States",
"ID Year": 2013,
"Year": "2013",
"Population": 311536594,
"Slug Nation": "united-states"
}
],
"source": [
{
"measures": [
"Population"
],
"annotations": {
"source_name": "Census Bureau",
"source_description": "The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.",
"dataset_name": "ACS 5-year Estimate",
"dataset_link": "http://www.census.gov/programs-surveys/acs/",
"table_id": "B01003",
"topic": "Diversity",
"subtopic": "Demographics"
},
"name": "acs_yg_total_population_5",
"substitutions": []
}
]
}
```

In our case, let's assume we make the call and just want to deal with the Nation, Year, and Population values.  That means we move on and...

### Create the business objects

```
export class NationPopulation {
Nation: string;
Year: number;
Population: number;
}

export class Annotation {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
}

export class Source {
    measures: string[];
    annotations: Annotation;
    name: string;
}
```

We create an implementation of the ApiCall interface to define what our request and response will look like.
Trust me, that'll make it soooo much easier to work with later on.

At this point, we're not feeding a business object into the request that needs any special parsing,
so we make the request: any.

However, we're getting back something that's a bit more complex.  

Depending on the complexity of what's coming back, validating it as an object will be easier than 
pulling out individual fields.

While we could define on the fly in the DataUsaCall itself like so:
response: {
data: NationPopulation[];
source: Source;
}

we're going to pull that up into it's own object.

```
export class DataUseEndpointResponse {
data: NationPopulation[];
source: Source;
}
```

DataUsaApiCall looks like this:

```
export class DataUseApiCall {
request: any;
response: DataUseEndpointResponse;
}
```

The ApiCallMgr interface is implemented to handle the interaction back and forth with the test itself.  To support other types of api calls, we don't implement ApiCallMgr directly.  HttpCallMgr implements the ApiCallMgr and gives us some handy utilities for dealing with the specifics of http api calls

Our next step is to extend HttpCallMgr with DataUsaCallMgr.

This is pretty straightforward in our case.  We just need to give it specifically the type of endpoint and api call we'll be using.

```
export class DataUsaCallMgr extends HttpApiCallMgr {
endpoint: DataUsaEndpoint = new DataUsaEndpoint();
call: ApiCall = new DataUsaApiCall();
}
```

and at that point, our test is pretty straightforward:

```
it("test DataUsaApi endpoint", () => {
    const callMgr: DataUsaCallMgr = new DataUsaCallMgr();
    callMgr.addParm("drilldowns","Nation");
    callMgr.addParm("measures","Population");

    callMgr.submit<DataUsaApiCall>()
        .then( apiCall => {
            const responseData = apiCall.response.data;
            const responseSource = apiCall.response.source;

            // pull out just the 2013 data
            const dataFor2013: NationPopulation = responseData.filter( (nationData) => nationData.Year === "2013")[0];
            expect(dataFor2013.Population === 311536594, "2013 population data retrieved should be as expected").to.be.true;
            expect(responseSource[0].annotations.dataset_name === "ACS 5-year Estimate", "dataset_name in source data should be as expected").to.be.true;
        })
})
```




*to be continued...*


