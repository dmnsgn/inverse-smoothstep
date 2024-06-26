# inverse-smoothstep

[![npm version](https://img.shields.io/npm/v/inverse-smoothstep)](https://www.npmjs.com/package/inverse-smoothstep)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/inverse-smoothstep)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/inverse-smoothstep)](https://bundlephobia.com/package/inverse-smoothstep)
[![dependencies](https://img.shields.io/librariesio/release/npm/inverse-smoothstep)](https://github.com/dmnsgn/inverse-smoothstep/blob/main/package.json)
[![types](https://img.shields.io/npm/types/inverse-smoothstep)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/inverse-smoothstep)](https://github.com/dmnsgn/inverse-smoothstep/blob/main/LICENSE.md)

The inverse of the smoothstep function.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

Based on [Inigo Quilez](https://iquilezles.org/articles/ismoothstep/).

![](https://raw.githubusercontent.com/dmnsgn/inverse-smoothstep/main/screenshot.png)

## Installation

```bash
npm install inverse-smoothstep
```

## Usage

```js
import inverseSmoothstep from "inverse-smoothstep";

inverseSmoothstep(0.5);
// => 0.5

inverseSmoothstep(0.75)
// => 0.6736481776669303
```

## API

<!-- api-start -->

<a name="module_inverseSmoothstep"></a>

## inverseSmoothstep

<a name="exp_module_inverseSmoothstep--inverseSmoothstep"></a>

### inverseSmoothstep(x) ⇒ <code>number</code> ⏏

The inverse of the smoothstep function

**Kind**: Exported function

| Param | Type                |
| ----- | ------------------- |
| x     | <code>number</code> |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/inverse-smoothstep/blob/main/LICENSE.md).
