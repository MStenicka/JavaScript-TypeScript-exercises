'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

export function urlFixer() {
  let url: string = 'https//www.reddit.com/r/nevertellmethebots';

  url = url.replace('bots', 'odds');
  url = url.replace('https', 'https:');

  console.log(url);
}

urlFixer(); // print: "https://www.reddit.com/r/nevertellmetheodds"
