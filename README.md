This is a test of the Gatsby extract of [rakosh](https://github.com/orval/rakosh)'s test data. A running version is deployed [here](https://orval.github.io/rakosh-example).

There are 4444 MDX files in this data set, which will cause memory to run out when doing `gatsby develop`.

Even when the number of files is smaller and the site can be built, it can hit the limit of artefact size configured in GitLab Pages. Each generated `index.html` file gets larger and larger as more pages are added because a variable called `___chunkMapping` gets larger.

I have tried modifying webpack's `splitChunks` configuration to no avail. There could be something fundamentally wrong with this design -- there is a lot of duplication of "Nugget" content in the MDX files.
