# Markdown Dev Blog

- **Author:** Jamie Roszel
- **Link to Live Site:** https://markdowndev.herokuapp.com/


## Project Summary



## Technology Used
* nodejs
* express
* MongoDB

## Models

Article:
 - title => String
 - description => String
 - markdown => String
 - createdAt => Date
 - slug => String
 - sanitizedHTML => String


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/" | List all Articles (articles/index.ejs) |
|GET| "/sample/:id | Display single Sample (sample/show.ejs)|
|GET| "/sample/new | Render form for New Sample (sample/new.ejs)|
|POST| "/" | Uses Form Submission to Create new Article |
|GET| "/edit/:id" | Render form to edit Article (article/edit.ejs)|
|PUT| "/sample/:id" | Uses Form Submission to edit Sample |
|DELETE| "/:id" | Delete a particular Article |


## Challenges


## Existing Bugs