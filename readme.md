# Markdown Dev Blog

- **Author:** Jamie Roszel
- **Link to Live Site:** https://markdowndev.herokuapp.com/


## Project Summary
The main page features a listing of all articles. Clicking 'Read More' will take you to the article itself. All articles are written in markdown format, so they're easy to edit and are easily readable across all browsers. The markdown is then automatically converted to HTML. The URL paths are updated with the title of the article. 


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