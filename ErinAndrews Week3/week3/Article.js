// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, content) {
    // Send what it gets to its parent object
  super(title, author, content);
    //defined values are pushed back to the article class
  }
  

  // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
  render () {
     return `
        <title>${this.props.title}</title>
        <author>${this.props.author}</author>
        <text>${this.props.content}</text>
      `;
    
  }

}

export default Article;
