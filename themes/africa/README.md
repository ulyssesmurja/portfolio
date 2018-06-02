# hugo-africa

A simple and clean blog theme for Hugo.

![](http://www.ulyssesmurja.com/blob/master/images/screenshot.png)

## How to use this theme

To use `hugo-africa` go through the following steps.

### Download

Clone this repository into your Hugo project.

```
git clone https://github.com/Ulyssesdepra/hugo-africa.git themes/africa
```

### Configuration

Add the following lines to your `config.toml`.

```toml
theme = "africa" # set the theme

[params] # theme parameters
    author = "John Doe" # author's name
    info = "Full Stack DevOps and Magician" # author's job title or info
    description = "John Doe's personal website" # site description
    keywords = "blog,developer,personal" # site keywords

    # wether you want to hide copyright and credits in the footer
    hideCredits = false
    hideCopyright = false
    
# Social links
[[params.social]]
    name = "Github"
    weight = 1
    url = "https://github.com/johndoe/"
[[params.social]]
    name = "Twitter"
    weight = 2
    url = "https://twitter.com/johndoe/"
[[params.social]]
    name = "LinkedIn"
    weight = 3
    url = "https://www.linkedin.com/in/johndoe/"

# Menu links
[[menu.main]]
    name = "Blog"
    weight = 1
    url  = "/posts/"
[[menu.main]]
    name = "About"
    weight = 2
    url = "/about/"
```




You can look at full working [`config.toml`](http://www.ulyssesmurja.com/blob/master/exampleSite/config.toml) inside the [exampleSite](http://www.ulyssesmurja.com/tree/master/exampleSite) folder.

### Build & Test

To update or generate the minified CSS file:

```
make build
```

To build your site and test, run:

```
hugo server
```
To preview the exampleSite, run
```
make demo
```
 The above command copies current state of the theme to exampleSite/themes and starts hugo with hugo serve -D (Go does not support Symlink directories)

### Disqus
Add the following line to your config,
```disqusShortname = "yourdiscussshortname"``` When this is set, all posts are disqus enabled   
You can disable comments for a post by adding the following to your page meta data.
```disable_comments: true```


## To Do
- Tags, Categories and Series

## License

africa is licensed under the [MIT license](http://www.ulyssesmurja.com/LICENSE.md).

## Author

[Ulysses Ferreira Murja](https://www.ulyssesmurja.com)
