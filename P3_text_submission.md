Brian Hughes & Spencer LaChance  
Section 03  
https://github.com/spencerlachance/roses-and-thornes-db

## Problem statement
###### Describe the problem that your project is trying to solve

The goal of this project was to record information regarding our radio show, Roses and Thornes. The current state of information storage for our radio is based entirely on information saved in Spotify playlists. This is insufficient as it doesn't record information outside of the music, in regards to the show itself such as the season, episode, or semester. Another issue is that Spotify can have unreliable or incomplete data. For example, sometimes  we will add songs on eachothers behalf, causing unrealible data regarding the users who added each song. 

## Solution statement
###### Describe the solution you implemented to solve the problem

The solution this project provides is a centralized source of information for our radio show information, along with a user interface to interact with this database. The database solves the incomplete scope of data by recording everything regarding the actual radio show itself. The user interface fixes the issue of unreliable data, and in reference to the use case above, we would now be able to add a song to a playlist on behalf of another radio host and have this information successfully and accurately recorded.

## User
###### Describe the typical user(s) that would use your solution

The users would be ourselves and our friend (the show's third host). We would be the maintainers of the database but other people who are interested in our show could browse through it read-only. However, this database could very easily be changed to work for other university radio shows. The changes required would be to the classification enum to fit the specific radio show, and the semester enum to fit that university's semester system. 

## Domain objects
###### Describe at least two of the domain objects you implemented in your solution

The first domain object implemented was the `Episode` object. This represents a single episode of one of our radio shows. This captures the date an episode aired as a `Date` and whether an episode is a special episode that strays from our usual format or a season finale, both represented as boolean values. The episode has a many-to-one relationship with `Season`, and a one-to-many relationship with `Selection`. This object also has a composite natural key of both the season and episode fields.

The second domain object is the `Selection` object. This represents a selection of one song by a user for an episode. This object contains all foreign keys plus one enumeration which is how we classified a song as either a Rose (a good song), a Thorne (a bad song), or an Outro song. This object has a many-to-one relationship with `User`, a many-to-one relationship with `Episode`, a one-to-many relationship with `Song`, and a one-to-one relationship with `Classification`.