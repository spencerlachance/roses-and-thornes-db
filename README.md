# roses-and-thornes-db

Since our sophomore years, us and another friend have had a radio show on WRBB. For our Database Design final project, We thought it would be fun to create a database that could hold all of our song selections from all of our episodes over the years. 

Our schema consists of seasons containing episodes containing selections (i.e. songs). The users are the 3 of us, the ones making the selections. Songs are tied to albums (one to many) and artists (many to many). We reified the latter relationship by creating a `Performance` class that maps songs to artists since a song can have multiple artists (e.g. a collaboration) and obviously, an artist can have multiple songs.

In order to explain the `Classification` class, we have to give some more background. Our show is called Roses & Thornes (yes, it's spelled wrong) and every song selected for an episode is either a Rose (a good song), a Thorne (a bad song), or an outro song that we sometimes play at the end of an episode. Every other field should be pretty self-explanatory.

For the primary keys, we use the season number as the key/id for a `Season`. For an `Episode`, we use a composite key/id containing the season number and the episode number. All other tables (except the Enums of course) use the default int id as the key/id.

\- Brian Hughes & Spencer LaChance