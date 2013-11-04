Frontend II Breakdown
=====================

A web base application structure, containing:

> App namespace
>
> Anonymous self-invoking function
>
> Micro libraries (vendor)

Handlebars: <a href="https://github.com/wycats/handlebars.js/">handlebars.js</a><br />

Simple ajax library: <a href="https://github.com/pyrsmk/qwest">qwest-0.4.2.min.js</a><br />

Routie: <a href="http://projects.jga.me/routie/">routie.js</a><br />

Hook.js <a href="https://github.com/jordansinger/hook.js/">Hook.js on GitHub</a><br />

Use strict

app.js
------

### var App

> renderpage function
>
> init function
>
> routie function

exports.App = App


poolscontroller.js
-----------------

### var PoolsController

> qwest.get (pools)
>
> success function
>
> getGames function
>
> qwest.get (games)
>
> success function
>
> reverse get results

exports.PoolsController = PoolsController


poolcontroller.js
------------------

### var PoolController

> qwest.get (pool by ID)
>
> success function

exports.PoolController = PoolController


gamecontroller.js
-----------------

### var GameController

> qwest.get (game by ID)
>
> updateGame function
>
> var team1Score
>
> var team2Score
>
> var isFinal
>
> postData = JSON.stringify
>
> var xhr = new XMLHttpRequest

### renderGame function

exports.GameController = GameController


rankingcontroller.js
--------------------

### var RankingController

> index function
> 
> qwest.get (pools)
> 
> success function

exports.RankingController = RankingController


template.js
-----------

### var Template
> render function
>
> var source
>
> var template (handlebars)
>
> var html
>
> var content

exports.Template = Template