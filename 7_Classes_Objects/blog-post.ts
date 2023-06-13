'use strict';

// Create a BlogPost class that has the following properties:
//  - authorName
//  - title
//  - text
//  - publicationDate
//
// Make sure to set the default values of properties/fields to be an empty string
//
// Create a few BlogPost instances and set their properties according to the infos below:
//  - John Doe created a post at "2000.05.04." with the title "Lorem Ipsum". It's contents are:
//      "Lorem ipsum dolor sit amet"
//  - Tim Urban created a post at "2010.10.10." with the title "Wait, but why?" with the following content:
//      "A popular long-form, stick-figure-illustrated blog about almost everything."
//  - William Turton wrote "One Engineer Is Trying to Get IBM to Reckon With Trump" at "2017.03.28."
//      "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the
//       center of attention. When I asked to take his picture outside one of IBM’s
//       New York City offices, he told me that he wasn’t really into the whole
//       organizer profile thing."

class BlogPost {
  public authorName: string = '';
  public title: string = '';
  public text: string = '';
  public publicationDate: string = '';
}

export { BlogPost };

const post1 = new BlogPost();
post1.authorName = 'John Doe';
post1.title = 'Lorem Ipsum';
post1.text = 'Lorem ipsum dolor sit amet';
post1.publicationDate = '2000.05.04.';

const post2 = new BlogPost();
post2.authorName = 'Tim Urban';
post2.title = 'Wait, but why?';
post2.text =
  'A popular long-form, stick-figure-illustrated blog about almost everything.';
post2.publicationDate = '2010.10.10.';

const post3 = new BlogPost();
post3.authorName = 'William Turton';
post3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
post3.text =
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
post3.publicationDate = '2017.03.28.';
