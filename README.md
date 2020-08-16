# whyyoushouldvote.com
The website for the Why You Should Vote podcast.

## Installing
The site is an [Eleventy site](https://www.11ty.dev). It was *going* to be a Jekyll site, but Jekyll doesn't know how to keep its mitts off of the assets directory, so I had to use a different static site generator. Anyway, this one uses Node, so you should install that.

```bash
# clone the repo
$ git clone github.com/dispatchrabbi/whyyoushouldvote.com
$ cd whyyoushouldvote.com

# install dependencies
$ npm install

# build the site
$ npx @11ty/eleventy

# serve the site
$ npx @11ty/eleventy --serve
```

You should now be able to see the site at [http://localhost:8080/](http://localhost:8080/).

## Developing

### Making significant layout-type changes
Do them in a feature branch, git flow-style:

```bash
# create the branch
$ git checkout feature/poiuyt-frobnitzing

# do your work
# rebase your commits so they make sense and are atomic
# rebase everything on top of gh-pages:
$ git rebase gh-pages

# commit and push
$ git commit -m "Frobnitz the poiuyt."
$ git push
```

Create a pull request for your branch and have someone who knows what they're doing look it over and approve it. There's no CI, because it probably wouldn't have much to do except check that Jekyll ran without errors... and you did that before you pushed anyway, right?

Once the PR is approved, go ahead and merge it, and delete the branch.

### Making text-only changes
Go ahead and just do them right on gh-pages, unless it's, like, paragraphs and paragraphs of text. We're not barbarians.

## Page Layouts

### page
This is the default page layout. It should be used for just about everything.

```yaml
---
layout: page
title: Why You Should Vote
---
```

### redirect
This page layout actually causes that page to redirect to a specified external URL. We do this so we can capture that we redirected somewhere else in our analytics.

```yaml
---
title: Register to Vote
layout: redirect
redirect_url: http://rockthevote.org/
---
```

`redirect_url`: The URL to redirect to.
