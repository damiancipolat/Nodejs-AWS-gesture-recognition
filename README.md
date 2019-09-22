# Use Node.js with AWS rekognition to detect gestures in photos.

In this example I show how to create an api rest state-less using nodejs + express with an integration with AWS REKOGNITION.

<img src="https://github.com/damiancipolat/React-for-shitty-webs/blob/master/doc/popo2.png?raw=true" width="180px" align="right" />

### Solution:
After researching I found a good combination of options. Wordpress Headless and React included as script in the <head> section as <script/><link/> tags.

#### Configuration
Go to /config/default.json file and set the configuration values.

- Set server ports.
- Aws credentials.

## Including a full react scaffolding:
Basically this is part of the solution.

**1) HTML**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!--Title-->
    <title>Hello World</title>
    <!--React + React-Dom + Babel-->
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <!--SASS-->    
    <link rel="stylesheet/scss" type="text/css" href="style.scss"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.6.3/sass.min.js"></script>
    <!--Sass loader-->
    <script>
      (async () => {
        const compiled = (await Promise.all(
          [...document.querySelectorAll("link")]
            .filter(l => l.rel === 'stylesheet/scss')
            .map(async l => {
              url = l.href;
              const code = await (await fetch(url)).text();
              const basename = url.substring(url.lastIndexOf("/")+1);
              Sass.writeFile(basename, code);
              return Sass.compile(`@import "${basename}"; `);
            })
        )).join("\n");
        document.head.innerHTML += `<style>${compiled}</style>`;
        console.log(compiled);
      })();
    </script>        
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="home.js"></script>
  </body>
</html>
```

**2) JS REACT**
```javascript
class Hello extends React.Component {
    
  constructor(){
    super();
    this.state = {
      message: "my friend (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({message: "my friend (from changed state)!"});
  }
  
  render() {

     return (
       <div>
         <h1>Hello {this.state.message}!</h1>
         <div className="rojo">
            Hello, world!
            <div className="verde">
              01010101101
            </div>
         </div>
         <div>
            <button onClick={this.updateMessage}>Click me!</button>
         </div>
       </div>
    );

  }

}

ReactDOM.render(<Hello/>, document.getElementById("root"));
```

**3) SCSS**
```css
.rojo{
	background:red;
	color:white;

	.verde{
		background:green;
		color:white;
	}

}
```

## Blockquotes
I know, process react + babel + sass when the web is loading, is'nt the good solutions, but is one aproach to modernize a old project. If is possible is a good idea to have to transpile process and load a bundle.js file.

## Folders:
Take a look of the folder basic and examples with some code ready to be used.

- **Basic**: React + babel + sass + base layout of a website.
- **Examples**: React + babel + sass + componentes examples.

### SASS LOADER:
I have written an adaptation of a sass loader https://github.com/medialize/browser-sass/issues/2 in the base file you can find it in: https://github.com/damiancipolat/React-for-shitty-webs/blob/master/basic/lib/sassLoader.js
