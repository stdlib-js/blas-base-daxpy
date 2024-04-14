<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# daxpy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a vector `x` by a constant `alpha` and add the result to `y`.



<section class="usage">

## Usage

```javascript
import daxpy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-daxpy@deno/mod.js';
```

#### daxpy( N, alpha, x, strideX, y, strideY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

daxpy( x.length, alpha, x, 1, y, 1 );
// y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: `numeric` constant.
-   **x**: input [`Float64Array`][mdn-float64array].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float64Array`][mdn-float64array].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to multiply every other value in `x` by `alpha` and add the result to the first `N` elements of `y` in reverse order,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var alpha = 5.0;

daxpy( 3, alpha, x, 2, y, -1 );
// y => <Float64Array>[ 26.0, 16.0, 6.0, 1.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

daxpy( 3, 5.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

#### daxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

daxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to multiply every other value in `x` by a constant `alpha` starting from the second value and add to the last `N` elements in `y` where `x[i] -> y[n]`, `x[i+2] -> y[n-1]`,...,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var alpha = 5.0;

daxpy.ndarray( 3, alpha, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `daxpy()` corresponds to the [BLAS][blas] level 1 function [`daxpy`][daxpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import daxpy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-daxpy@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

daxpy.ndarray( x.length, 5.0, x, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dasum`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas-base/gaxpy`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply x by a constant and add the result to y.</span>
-   <span class="package-name">[`@stdlib/blas-base/saxpy`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector x by a constant and add the result to y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-daxpy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-daxpy

[test-image]: https://github.com/stdlib-js/blas-base-daxpy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-daxpy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-daxpy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-daxpy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-daxpy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-daxpy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-daxpy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-daxpy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-daxpy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-daxpy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-daxpy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-daxpy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-daxpy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-daxpy/main/LICENSE

[blas]: http://www.netlib.org/blas

[daxpy]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/deno

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/deno

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
