"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}}};var u=v(function(E,g){"use strict";var m=require("@stdlib/math-base-special-hypotf"),c=require("@stdlib/number-float64-base-to-float32");function o(r,e,i,n,a){var s;return s=m(r,e),s===0?(i[a]=r,i[a+n]=e,i):(i[a]=c(r/s),i[a+n]=c(e/s),i)}g.exports=o});var p=v(function(G,d){"use strict";var w=require("@stdlib/complex-float32-ctor"),h=require("@stdlib/array-float32"),A=require("@stdlib/complex-float32-real"),C=require("@stdlib/complex-float32-imag"),F=u(),q=new h(2);function R(r){return F(A(r),C(r),q,1,0),new w(q[0],q[1])}d.exports=R});var l=v(function(H,x){"use strict";var b=u();function j(r,e,i,n,a,s){return b(r[i],r[i+e],n,a,s)}x.exports=j});var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),t=p(),k=u(),B=l();y(t,"assign",k);y(t,"strided",B);module.exports=t;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
