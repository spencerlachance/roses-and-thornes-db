# roses-and-thornes-db

Brian Hughes & Spencer LaChance  
Database Design, Section 03, Team 11

For almost 4 years now, us and another friend have had a radio show on WRBB. For our Database Design final project, We thought it would be fun to create a database that could hold all of our song selections from all of our episodes over the years and a sleek UI to browse through it all.

Link to [UML Diagram](https://drive.google.com/file/d/1AUeBs3_f19komUxPrA1Up7CoEJuqXbzH/view?usp=sharing)

## Setup
In `src/main/resources/application.properties`, replace the `{{URL}}`, `{{USERNAME}}`, and `{{PASSWORD}}` placeholders with the corresponding values from your MySQL setup.

## User Model
Our user model describes one of the show's 3 DJs (us and our friend Sean). We are the ones making the song selections for each episode, and we want to track who picked what song, hence the need for this table. Its fields are just those provided in the project description. 

In the `selections` table, there is a foreign key (`user_id`) pointing to this table, signifying which DJ made that selection (one user <==> many selections). A user can exist without a selection.

## Domain Models

### Season
Represents a season of our show. This table's fields keep track of what number season it is, what semester and year it took place, and what weekday and time each of its episodes aired. The `season` field (i.e. the season number) is the primary key/id.

The `episodes` table contains a foreign key (`season`) pointing to this table, signifying which season the episode belongs to (one season <==> many episodes) An episode cannot exist without a season.

### Episode
Represents an episode of our show. This table's fields keep track of what season the episode belongs to, what number episode it is within the season, the date the episode aired, and whether the episode is a season finale or some other special episode that strayed from our usual format. The `season` and `episode` fields (i.e. the season and episode numbers) are a composite key/id for the table.

The `selections` table contains a foreign composite key (`season` and `episode`) pointing to this table, signifying which episode the selection was made for (one episode <==> many selections). A selection cannot exist without an episode.

### Selection
Represents a song selection for a given episode. This table's fields keep track of what season and episode the selection belongs to, what song was selected, who made the selection, and what classification the selection falls into (more on this below).

### Song
Represents a song selected for an episode of our show. Contains the song's title and which album it is from.

In the `selections` table, there is a foreign key pointing to this table, signifying which song corresponds to the selection (one song <==> many selections, since a song could be played on multiple episodes). A song can exist without a selection.

### Album
Represents an album, from which one or more songs were selected for the show. Contains the album's title and what year it came out.

In the `songs` table, there is a foreign key pointing to this table, signifying which album the song was released on (one album <==> many songs). A song cannot exist without an album.

### Artist
Represents an artist whose song(s) have been played on the show. Contains the artist's name.

Since a song can have multiple artists (e.g. a collaboration) and of course an artist can have many songs, there is a many-to-many relationship between songs and artists. To reify this relationship, we created a `performances` table that maps songs to artists.

## Enumerations

### DayOfWeek
Contains the seven possible days of the week. Every season, our show has a specific weekly time slot, so one of the values from this Enum is included in each record in the `seasons` table.

### Semester
Contains the 4 possible semesters (`FALL`, `SPRING`, `SUMMER I`, `SUMMER II`) that a season of our show could've ran during. One of these values is included in each record in the `seasons` table.

### Classification
This one requires some more background. Our show is called Roses & Thornes (yes, it's spelled wrong) and every song selected for an episode is either a Rose (a good song), a Thorne (a bad song), or an outro song that we sometimes play at the end of an episode. So this Enum contains the values: `ROSE`, `THORNE`, and `OUTRO`, and one of them will be included in each record in the `selections` table.

## User Interface

### P2
The user object that we implemented a user interface for is `User`, our only user object. The domain object that we chose to implement user interfaces for are `Episode` and `Selection`. 

Accordingly, in the Java backend for each of the 3 objects, we implemented:
* model classes with fields that match those of the corresponding database table 
* repository classes that extend `CrudRepository` with additional `findAll<Object>s` and `find<Object>ById` methods with custom SQL queries
* DAO classes with `create<Object>`, `findAll<Object>s`, `find<Object>ById`, `update<Object>`, and `delete<Object>` methods that are each mapped to a different HTTP request

For the React frontend, we created the following files for each of the 3 objects:
* `<object>s-app.js` - React App that renders different components based on the user's web address
* `<object>s.html` - parent page where the aforementioned React App and its other components are rendered
* `<object>-service.js` - contains functions that send HTTP requests to the backend telling it to perform certain operations on the database. Each function in this file corresponds to a method in the DAO class.
* `<object>-editor.js` - React Component that renders forms to edit each of the object's fields (excluding the id if it's an arbitrary, auto-incremented number). It is here where the user can CRUD a record via the UI.
* `<object>-list.js` - React Component that renders a list of records in the object's table as well as a button to create a new record. Included with each record is a link to the Editor for that record.

There is also an `index.html` file that is the landing page for our entire project. It contains 3 links to the list pages for each object. `index.css` contains the CSS styles for the entire web app.

### Additional List Details
The Users List page just displays the first name of each user that links to its editor. For the Episodes List page, we took it a step further and displayed the values for every field in the table organized into a sort of grid. 

For the Selections List page, since each selection is tied to a song, we took things another step further by using each selection's song ID to fetch the song title, artist name(s), album titles, and year from their corresponding tables and add them to the grid. We also used the selections' user IDs to fetch the corresponding user first names and added those to the grid as well. In order to pull this off, we had to write stripped-down models, repositories, and DAOs for `Song`, `Album`, `Performance`, and `Artist` that are only capable of retrieving data from these tables (as opposed to CRUDing them). We also added functions to the `service.js` files to communicate with the appropriate DAOs.

Additionally, we had to write a model, repository, DAO, and service function for the Classification enum so all of its possible values could be fetched from the database and displayed in a dropdown on the Selection Editor page.

### P3
Per the additional P3 UI requirments, we added the following links:
* In the User Editor, there is a link to a Selections List containing the selections that the user made (one user <==> many selections)
* In the Episode Editor, there is link to a Selections List containing the selections made for that episode (one episode <==> many selections)
* In the Selection Editor, there is a link to the Editor for the episode that the selection was made for (many selections <==> one episode)
* In the Selection Editor, there is a link to the Editor for the user that made the selection (many selections <==> one user)

The first 2 links forced us to add new functions to the Selection service file, DAO, and repository so that selections can be queried from the database according to their episode and user IDs.