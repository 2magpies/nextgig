# NextGig

**NextGig** provides a single resource for performers to find upcoming auditions. 

## Project Description
Full CRUD operations are intended to support the needs of the following users:
- Artistic Directors (create, update, and delete auditions)
- Performers (review audition information)

## MVP User Stories
1. As an artistic director, I want add to CREATE a post with audition information to a shared site so that performers unfamiliar with my venue can check us out
2. As an artistic director that has posted an audition that needs to be modified, I want to be able find and UPDATE auditions that I have posted so that I can keep the information correct and relevant
3. As an artistic director that has completed casting for a production, I want to be able to DELETE my posted audition so that irrelevant information is not presented to the live arts community
4. As a performer, I want to use a single site to REVIEW audition information for multiple venues so that I can find out about many auditions and plan accordingly   

##Stretch Goals
- An artistic director can post sides for the auditions
- An artistic director can broadcast a casting call for a specific need (unscheduled audition; “contact me if interested” scenario)
- Secure signup/login for artistic directors
- Social login
- A performer can create a searchable profile / Artistic directors can search profiles
Search and navigation enhancements

## Technologies

Created with React using React Bootstrap and React Router.

### API
API: (https://gigz-be.herokuapp.com/auditions/)   
 
- The API is hosted by a partner backend application running Python/Django, and using Postgres for the SQL database server

- The admin UI can be used to seed data   
- Postman can be used test backend functionality



#### links
https://react-bootstrap.github.io/getting-started/introduction/
https://www.youtube.com/watch?v=tOK9l5uP06U&t=426s
https://styled-components.com/docs/basics#installation
https://www.techiediaries.com/django-cors/
https://www.spiano.dev/djangoTutorial/#deploy
https://medium.com/agatha-codes/9-straightforward-steps-for-deploying-your-django-app-with-heroku-82b952652fb4
https://ultimatedjango.com/learn-django/lessons/push-to-heroku/
https://github.com/Mysta3/django-cors-headers
https://devcenter.heroku.com/articles/heroku-postgresql#migrating-between-plans

https://devcenter.heroku.com/articles/connecting-to-heroku-postgres-databases-from-outside-of-heroku

https://dev.to/shakib609/deploy-your-django-react-js-app-to-heroku-2bck

https://github.com/adamchainz/django-cors-headers#cors_origin_allow_all

#### Links for future approaches
https://tutorial.djangogirls.org/en/deploy/
https://www.pythonanywhere.com/
https://blog.bitsrc.io/reusable-components-in-react-a-practical-guide-ec15a81a4d71


### unsplash credits
Photo by stefano stacchini on Unsplash
Photo by Mareko Tamaleaa on Unsplash


small change