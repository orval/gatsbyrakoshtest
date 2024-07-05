This is a test of the Gatsby extract of [rakosh](https://github.com/orval/rakosh)'s test data. A running version is deployed [here](https://orval.github.io/rakosh-example).

There are 173 MDX files in this data set, which will build ok in 4Gb of memory. However, once up to about 1000 files that amount of memory runs out when running `gatsby develop`.

A few more files and I hit the limit of artefact size configured in GitLab Pages, so I can no longer deploy my main site. Each generated `index.html` file gets larger and larger as more pages are added because a variable called `___chunkMapping` gets larger.

I have tried modifying webpack's `splitChunks` configuration to no avail. There could be something fundamentally wrong with this design -- there is a lot of duplication of "Nugget" content in the MDX files.
