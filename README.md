# Ember Required Properties

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

## Legal
[Echobind](https://echobind.com?utm_source=github-legal) LLC (c) 2016
[@echobind][twitter]
[Licensed under the MIT license][MIT]

## About Echobind

![Echobind](https://echobind.s3.amazonaws.com/images/echobind-logo-black.svg)

Ember Required Properties is maintained and funded by Echobind.

[@echobind][twitter]

We love open source! See [our other projects][community] or [hire us][hire] to help bring your idea to life.

[twitter]: https://twitter.com/echobind
[community]: https://github.com/echobind
[hire]: https://echobind.com?utm_source=github-hire
[MIT]: http://www.opensource.org/licenses/mit-license.php
