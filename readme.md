# ReScope

[![Build Status](https://travis-ci.org/CaipiLabs/ReScope.svg?branch=master)](https://travis-ci.org/CaipiLabs/ReScope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


## What ?

ReScope is a flexible, effective and easy to use State management system inspired by ReactJS methods.

## How ?

By using independent, specialized & serializable "Data Stores" in a Flux oriented architecture.

### Stores ?

ReScope stores look like "React components for data". <br>
They use determining values and / or others stores data as state,<br>
and maintains the corresponding data accordingly.

Stores can manage part of, or the entire App state's determining values, <br>
maintain intermediate, possibly asynchronous resources, <br>
And/or finals or ready-to-render data. <br>

Theirs data can be propagated to React Components state / props, stores or simple watchers; <br>
ReScope will give synchronized results data (if possible), by instantiating theirs dependencies, or update them as soon as they are ready<br>

Next, when a store receives actions / state mutations, <br>
the same process update the application state.

### Scopes ?

Simple application only need 1 global Scope for its stores .<br>
When we need more, the Scopes allow :
- normalized contexts for modules & views
- to inherit & mix other Scopes,
- automatic & chained destroy
- ...

## What else ?

- React "high order components" factories
- Allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores,
- Easy pairing of remote / webworker based stores
- Easy remapping & aliasing of dependencies data,
- 1 stem super class to rule all the async process
- Semaphores like API ( wait, release, retain, dispose )
- Promise like APIs
- Inheritable ES6 class
- Easy, partial or complete scopes serialization
- Synchronised injection & init (React SSR) (as long as stores transformations stay sync)
- Lazy stores instantiation & active stores auto destroy
- Library agnostic
- Another alternative to Redux & co
- etc..

## Doc ?

### Work in progress doc

#### [About Stores](doc/Store.md)
#### [About Scopes](doc/Scope.md)
#### [About React HOCs](doc/React.md)

### (Dumb) Simple \& working examples [here](src/examples)

\*: The Store's scope is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)

## What's next ?

- Optimize
- Synchrone & Prioritized stabilisation / propagation sequencer
- Possibly some semantic/normalisation updates
- Even better deps definition
- Many more tests
- Cosmetics rewrites & more comments
- better refs management

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)

