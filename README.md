# Jan Milosh portfolio website

This site is built in Jekyll and hosted on GitHub. Because it has a custom plugin, it must be rendered locally before deployment. There is a rake task in place to easily do this.

From the root of the project folder:

To build the site:

```sh
$ jekyll build
```

To run a local server:

```sh
$ jekyll serve -w --config _dev_config.yml
```

To publish:

```sh
$ bundle exec rake blog:publish
 ```

References:

[http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.html](http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.html)

[http://www.jaredwolff.com/blog/jekyll-local-preview/](http://www.jaredwolff.com/blog/jekyll-local-preview/)