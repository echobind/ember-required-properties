# ember-required-properties

[![CircleCI](https://circleci.com/gh/echobind/ember-required-properties.svg?style=svg)](https://circleci.com/gh/echobind/ember-required-properties)
[![npm version](https://badge.fury.io/js/ember-required-properties.svg)](http://badge.fury.io/js/ember-required-properties)
[![Code Climate](https://codeclimate.com/github/echobind/ember-required-properties/badges/gpa.svg)](https://codeclimate.com/github/echobind/ember-required-properties)
[![Dependency Status](https://david-dm.org/echobind/ember-required-properties.svg)](https://david-dm.org/echobind/ember-required-properties)
[![Ember Observer Score](http://emberobserver.com/badges/ember-required-properties.svg)](http://emberobserver.com/addons/ember-required-properties)

## Features

This addon enables the following pattern:

```js
// some-component
export default Component.extend(RequiredProperties, {
  requiredProperties: ['thing', 'another', 'on-select-thing']  
});
```

```hbs
{{some-component}}
```

```sh
ERROR: You must provide thing, another, and on-select-thing to some-component.
```

Like `ember-prop-types`, this addon helps ensure required properties are passed to components. This addon is intended to be a much smaller building block. It only verifies required properties are present, not that they are of the correct type.

## Installation

```
ember install ember-required-properties
```

## Usage

Import the mixin anywhere you want to require properties:

```
import RequiredProperties from 'ember-required-properties'

export Component.extend(RequiredProperties, {
  requiredProperties: ['one', 'two']
});
```

Now if you fail to pass all of the required properties you will get an error.

NOTE: since we use `Ember.assert` to throw errors, production will silently fail.


## About Echobind

![Echobind](https://echobind.s3.amazonaws.com/images/echobind-logo-black.svg)

Ember Required Properties is maintained and funded by Echobind.<br>
[@echobind][twitter]

We love open source! See [our other projects][community] or [hire us][hire] to help bring your idea to life.

## Legal
[Echobind](https://echobind.com) LLC (c) 2016 <br>
[@echobind](https://twitter.com/echobind) <br>
[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)

[twitter]: https://twitter.com/echobind
[community]: https://github.com/echobind
[hire]: https://echobind.com?utm_source=github-hire
[MIT]: http://www.opensource.org/licenses/mit-license.php
