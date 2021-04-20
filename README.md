# roses-and-thornes-db

Brian Hughes & Spencer LaChance  
Database Design, Section 03, Team 11

For almost 4 years now, us and another friend have had a radio show on WRBB. For our Database Design final project, We thought it would be fun to create a database that could hold all of our song selections from all of our episodes over the years and a sleek UI to browse through it all.

Link to [UML Diagram](https://drive.google.com/file/d/1AUeBs3_f19komUxPrA1Up7CoEJuqXbzH/view?usp=sharing)

## User Model
Our user model describes one of the show's 3 DJs (us and our friend Sean). We are the ones making the song selections for each episode, and we want to track who picked what song, hence the need for this table. Its fields are just those provided in the project description. 

In the `selections` table, there is a foreign key (`user_id`) pointing to this table, signifying which DJ made that selection (one user <==> many selections).

## Domain Models

### Season
Represents a season of our show. This table's fields keep track of what number season it is, what semester and year it took place, and what weekday and time each of its episodes aired. The `season` field (i.e. the season number) is the primary key/id.

The `episodes` table contains a foreign key (`season`) pointing to this table, signifying which season the episode belongs to (one season <==> many episodes).

### Episode
Represents an episode of our show. This table's fields keep track of what season the episode belongs to, what number episode it is within the season, the date the episode aired, and whether the episode is a season finale or some other special episode that strayed from our usual format. The `season` and `episode` fields (i.e. the season and episode numbers) are a composite key/id for the table.

The `selections` table contains a foreign composite key (`season` and `episode`) pointing to this table, signifying which episode the selection was made for (one episode <==> many selections).

### Selection
Represents a song selection for a given episode. This table's fields keep track of what season and episode the selection belongs to, what song was selected, who made the selection, and what classification the selection falls into (more on this below).

### Song
Represents a song selected for an episode of our show. Contains the song's title and which album it is from.

In the `selections` table, there is a foreign key pointing to this table, signifying which song corresponds to the selection (one song <==> many selections, since a song could be played on multiple episodes).

### Album
Represents an album, from which one or more songs were selected for the show. Contains the album's title and what year it came out.

In the `songs` table, there is a foreign key pointing to this table, signifying which album the song was released on (one album <==> many songs).

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
TBD