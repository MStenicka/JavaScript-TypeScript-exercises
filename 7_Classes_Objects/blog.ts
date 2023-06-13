import { BlogPost } from './blog-post';

class Blog {
  private listOfPosts: BlogPost[] = [];

  add(blogPost: BlogPost): void {
    this.listOfPosts.push(blogPost);
  }

  delete(index: number): void {
    this.listOfPosts.splice(index, 1);
  }

  update(index: number, blogPost: BlogPost): void {
    if (index >= 0 && index < this.listOfPosts.length) {
      this.listOfPosts.splice(index, 1, blogPost);
    }
  }
}

const testPost = new BlogPost();
testPost.authorName = 'Test';
testPost.publicationDate = '1970.07.15.';
testPost.title = 'TEST';
testPost.text = 'Lorem ipsum dolor sit amet...';

const postWithTypo = new BlogPost();
postWithTypo.authorName = 'Joe Frost';
postWithTypo.publicationDate = '2020.01.01.';
postWithTypo.title = 'Happy new ear!';
postWithTypo.text = 'Welcome to the new year to everyone!';

const blog = new Blog();
blog.add(testPost);
blog.add(postWithTypo);

const correctPost = new BlogPost();
correctPost.authorName = 'Joe Frost';
correctPost.publicationDate = '2020.01.01.';
correctPost.title = 'Happy new year!';
correctPost.text = 'Welcome to the new year to everyone!';

blog.update(1, correctPost);
blog.delete(0);

export { Blog };
