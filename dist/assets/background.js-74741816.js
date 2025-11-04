import{S as Qs,D as Ys,_ as Nn,a as Dt,s as C,A as Zs,b as eo,c as to,d as no,e as Fn,I as ao,t as ro,T as Cn,p as at,g as tn,f as Xe,h as Rn,i as Me,j as We,k as He,l as En,m as so,n as oo,o as uo,q as io,r as co,u as lo,v as po,w as Pn,x as rt,y as mo,z as Nt,B as fo,C as ho,R as go,E as bo,F as ge,G as Tn,H as _o,J as yo,K as Io,L as fe,M as wo,N as wn,O as ko,P as On,Q as Bn,U as Wn,V as So,W as Mo,X as Hn,Y as vo,Z as Ao,$ as xo,a0 as Do,a1 as $n,a2 as No,a3 as Fo,a4 as Ut,a5 as Co,a6 as Ro,a7 as Ln,a8 as Vn,a9 as st,aa as zn,ab as Un,ac as nn,ad as Gn,ae as jn,af as Eo,ag as Po,ah as qn,ai as Xn,aj as Kn,ak as Jn,al as To,am as Qn,an as Yn,ao as Oo,ap as Zn,aq as an,ar as ea,as as ta,at as Bo,au as na,av as Wo,aw as Ho,ax as $o,ay as Lo,az as Vo,aA as zo,aB as Uo,aC as aa,aD as Go,aE as jo,aF as ra,aG as sa,aH as oa,aI as ua,aJ as qo,aK as Xo,aL as Ko,aM as Jo,aN as Qo,aO as Yo,aP as Zo,aQ as eu,aR as ia,aS as tu,aT as nu,aU as ca,aV as au,aW as ru,aX as su,aY as ou,aZ as uu,a_ as iu,a$ as da,b0 as la,b1 as pa,b2 as cu,b3 as ma,b4 as du,b5 as lu,b6 as pu,b7 as mu,b8 as fu,b9 as fa,ba as ha,bb as hu,bc as ga,bd as ba,be as _a,bf as gu,bg as bu,bh as _u,bi as ya,bj as Ia,bk as wa,bl as yu,bm as ka,bn as Iu,bo as wu,bp as ku,bq as Sa,br as Su,bs as Ma,bt as va,bu as Mu,bv as vu,bw as Au,bx as xu,by as Du,bz as Nu,bA as Aa,bB as xa,bC as Da,bD as Na,bE as Fa,bF as Ca,bG as Fu,bH as Cu,bI as Ru,bJ as Ra,bK as rn,bL as Ea,bM as Eu,bN as Pu,bO as Tu,bP as Ou,bQ as Bu,bR as Wu,bS as Hu,bT as $u,bU as Lu,bV as Vu,bW as zu,bX as Uu,bY as Pa,bZ as Gu,b_ as ju,b$ as qu,c0 as Xu,c1 as Ku,c2 as kn,c3 as Ju,c4 as Qu,c5 as Yu,c6 as Zu,c7 as ei,c8 as Ta,c9 as ti,ca as ni,cb as ai,cc as ri,cd as si,ce as Oa,cf as Ba,cg as oi,ch as ui,ci as ii,cj as ci,ck as di,cl as li,cm as pi,cn as mi,co as fi,cp as Wa,cq as hi,cr as gi,cs as Ha,ct as $a,cu as La,cv as Va,cw as bi,cx as _i,cy as yi,cz as Ii,cA as wi,cB as Xt,cC as Oe,cD as ki,cE as Si,cF as Mi,cG as Sn,cH as Mn,cI as vi,cJ as Ai,cK as xi,cL as Kt,cM as Di,cN as Ni,cO as za,cP as Fi,cQ as Ci}from"./register_all_kernels-d68f181a.js";import{c as vn,g as Ua}from"./_commonjsHelpers-de833af9.js";function Ga(a,n){for(var s=0;s<n.length;s++){const o=n[s];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in a)){const t=Object.getOwnPropertyDescriptor(o,r);t&&Object.defineProperty(a,r,t.get?t:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gt{constructor(n){this.modelArtifacts=n}load(){return this.modelArtifacts}}class Ri{constructor(n){this.saveHandler=n}save(n){return this.saveHandler(n)}}class Ei{constructor(n){n.load&&(this.load=()=>Promise.resolve(n.load())),n.save&&(this.save=s=>Promise.resolve(n.save(s)))}}function Pi(a,n,s,o){const r=arguments;return new Ei(Ti(...r))}function Ti(a,n,s,o){return arguments.length===1?a.modelTopology!=null||a.weightSpecs!=null?new Gt(a):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Gt({modelTopology:a})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Gt({modelTopology:a,weightSpecs:n,weightData:s,trainingConfig:o}))}function Oi(a){return new Ri(a)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Bi(a){return new Qs(a)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function An(a){return new Ys(a)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var V;(function(a){a[a.float32=0]="float32",a[a.int32=1]="int32",a[a.bool=2]="bool",a[a.string=3]="string",a[a.complex64=4]="complex64"})(V||(V={}));var nt;(function(a){a[a.linear=0]="linear",a[a.relu=1]="relu",a[a.relu6=2]="relu6",a[a.prelu=3]="prelu",a[a.leakyrelu=4]="leakyrelu",a[a.sigmoid=5]="sigmoid",a[a.elu=6]="elu"})(nt||(nt={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ja;function Wi(a){ja=a.wasm.cwrap(Nn,null,["number","array","number","number","array","number","number","number","number","number","number","number","number"])}function Hi(a){const{inputs:n,backend:s,attrs:o}=a,{a:r,b:t,bias:i,preluActivationWeights:c}=n;if(r.dtype!=="float32"||t.dtype!=="float32")throw new Error("_FusedMatMul for non non-float32 tensors not yet supported.");const{transposeA:d,transposeB:u,activation:e,leakyreluAlpha:m}=o,b=s.dataIdMap.get(r.dataId).id,p=s.dataIdMap.get(t.dataId).id;let f=0;if(i!=null){const L=s.dataIdMap.get(i.dataId);if(L.shape.length!==1)throw new Error(`_FusedMatMul only supports rank-1 bias but got rank ${L.shape.length}.`);f=L.id}const g=c==null?0:s.dataIdMap.get(c.dataId).id,w=nt[e];if(w==null)throw new Error(`${e} activation not yet supported for FusedConv2D in the wasm backend.`);const k=d?r.shape[2]:r.shape[1],y=u?t.shape[1]:t.shape[2],_=Dt(r.shape.slice(0,-2),t.shape.slice(0,-2)),v=s.makeOutput([..._,k,y],r.dtype),E=s.dataIdMap.get(v.dataId).id,R=new Uint8Array(new Int32Array(r.shape).buffer),B=new Uint8Array(new Int32Array(t.shape).buffer);return ja(b,R,r.shape.length,p,B,t.shape.length,d,u,w,f,g,m||0,E),v}const $i={kernelName:Nn,backendName:"wasm",setupFunc:Wi,kernelFunc:Hi};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $(a,n){let s;function o(t){s=t.wasm.cwrap(a,null,["number","number","number"])}function r(t){const{backend:i,inputs:{x:c}}=t,d=i.dataIdMap.get(c.dataId).id,u=i.makeOutput(c.shape,n||c.dtype),e=i.dataIdMap.get(u.dataId).id;return C(u.shape)===0||s(d,V[c.dtype],e),u}return{kernelName:a,backendName:"wasm",setupFunc:o,kernelFunc:r}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Li=$(Zs);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vi=$(eo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zi=$(to);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(a,n,s){let o;function r(i){o=i.wasm.cwrap(a,null,["number","array","number","number","array","number","number","number"])}function t(i){const{backend:c,inputs:d}=i,{a:u,b:e}=d,m=c.dataIdMap.get(u.dataId).id,b=c.dataIdMap.get(e.dataId).id,p=s??u.dtype,f=Dt(u.shape,e.shape),g=c.makeOutput(f,p);if(C(f)===0)return g;const w=new Uint8Array(new Int32Array(u.shape).buffer),k=new Uint8Array(new Int32Array(e.shape).buffer),y=c.dataIdMap.get(g.dataId).id;return(()=>o(m,w,u.shape.length,b,k,e.shape.length,V[u.dtype],y))(),g}return{kernelName:a,backendName:"wasm",setupFunc:r,kernelFunc:t}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ui=ee(no);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let qa;function Gi(a){qa=a.wasm.cwrap(Fn,null,["array","number","number","number"])}function ji(a){const{inputs:n,backend:s}=a,o=s.makeOutput(n[0].shape,n[0].dtype);if(C(o.shape)===0)return o;const r=n.map(c=>s.dataIdMap.get(c.dataId).id),t=new Uint8Array(new Int32Array(r).buffer),i=s.dataIdMap.get(o.dataId).id;return qa(t,r.length,V[o.dtype],i),o}const qi={kernelName:Fn,backendName:"wasm",setupFunc:Gi,kernelFunc:ji};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ft(a){const{inputs:{x:n},backend:s}=a;if(n.dtype==="string")return ro(s.readSync(n.dataId),n.shape,n.dtype);const o=s.makeOutput(n.shape,n.dtype),r=s.typedArrayFromHeap(n);return s.typedArrayFromHeap(o).set(r),o}const Xi={kernelName:ao,backendName:"wasm",kernelFunc:Ft};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Xa;function Ki(a){Xa=a.wasm.cwrap(Cn,null,["number","array","number","number","number","array","number"])}function xe(a){const{inputs:n,backend:s,attrs:o}=a,[r,t]=Qi(n.x.shape,o.perm);let i=!0;for(let f=0;f<t.length;f++)t[f]!==f&&(i=!1);const c=Ji(n.x.shape,o.perm),d={dataId:n.x.dataId,shape:r,dtype:n.x.dtype};if(i){const f=Ft({inputs:n,backend:s});return f.shape=c,f}const u=s.makeOutput(c,d.dtype),e=s.dataIdMap.get(d.dataId).id,m=s.dataIdMap.get(u.dataId).id,b=new Uint8Array(new Int32Array(t).buffer),p=new Uint8Array(new Int32Array(d.shape).buffer);return Xa(e,p,d.shape.length,V[d.dtype],m,b,t.length),u}function Ji(a,n){const s=new Array(a.length);for(let o=0;o<s.length;o++)s[o]=a[n[o]];return s}function Qi(a,n){const s=[],o=[];for(let r=0;r<a.length;++r)a[r]!==1&&s.push(a[r]),a[n[r]]!==1&&o.push(n[r]);for(let r=0;r<o.length;++r){let t=-1;for(let i=0;i<o.length;++i)o[i]>=r&&(t===-1||o[t]>o[i])&&(t=i);o[t]=r}return[s,o]}const Yi={kernelName:Cn,backendName:"wasm",kernelFunc:xe,setupFunc:Ki};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(a,n,s){const o=a.shape,r=a.shape.length,t=at(n,o);let i=t;const c=tn(i,r);let d=null,u=!1;if(c!=null){const e=new Array(r);for(let p=0;p<e.length;p++)e[p]=o[c[p]];i=Xe(i.length,r),d=xe({inputs:{x:a},attrs:{perm:c},backend:s});const m=s.dataIdMap.get(a.dataId).id;s.dataIdMap.get(d.dataId).id!==m&&(u=!0)}return{transposed:d,originalAxes:t,axes:i,inputWasTransposed:u}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ka;function Zi(a){Ka=a.wasm.cwrap(Rn,null,["number, number, number"])}function ec(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s;let d=n.dataIdMap.get(i.dataId).id,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);if(p){const _=n.dataIdMap.get(e.dataId).id;u=e,d=_}const f=u.shape.length;Me("all",m,f);const[g,w]=We(u.shape,m),k=C(w),y=n.makeOutput(g,i.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;Ka(d,k,_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const tc={kernelName:Rn,backendName:"wasm",setupFunc:Zi,kernelFunc:ec};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ja;function nc(a){Ja=a.wasm.cwrap(En,null,["number, number, number"])}function ac(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s;let d=n.dataIdMap.get(i.dataId).id,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);if(p){const _=n.dataIdMap.get(e.dataId).id;u=e,d=_}const f=u.shape.length;Me("any",m,f);const[g,w]=We(u.shape,m),k=C(w),y=n.makeOutput(g,i.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;Ja(d,k,_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const rc={kernelName:En,backendName:"wasm",setupFunc:nc,kernelFunc:ac};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qa(a){let n;function s(r){n=r.wasm.cwrap(a,null,["number","number","number","number","number"])}function o(r){const{backend:t,inputs:i,attrs:c}=r,{axis:d}=c,{x:u}=i,e=t.dataIdMap.get(u.dataId).id;let m=e,b=u;const{transposed:p,axes:f,inputWasTransposed:g}=De(u,d,t);if(g){const E=t.dataIdMap.get(p.dataId).id;E!==e&&(b=p,m=E)}const w=b.shape.slice(0,-1),k=t.makeOutput(w,"int32"),y=t.dataIdMap.get(k.dataId).id,_=C(k.shape),v=b.shape[f[0]];return n(m,V[b.dtype],_,v,y),g&&t.disposeData(p.dataId),k}return{kernelName:a,backendName:"wasm",setupFunc:s,kernelFunc:o}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sc=Qa(so);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oc=Qa(oo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uc=$(uo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ic=$(io);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cc=$(co);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dc=ee(lo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lc=$(po);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ya;function pc(a){Ya=a.wasm.cwrap(Pn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function mc(a){const{inputs:n,attrs:s,backend:o}=a,r=n.x,t=o.dataIdMap.get(r.dataId).id,{filterSize:i,strides:c,pad:d,dimRoundingMode:u}=s,e=rt(r.shape,i,c,1,d,u),m=e.filterHeight,b=e.filterWidth,p=e.padInfo.top,f=e.padInfo.right,g=e.padInfo.bottom,w=e.padInfo.left,k=e.strideHeight,y=e.strideWidth,_=e.inChannels;if(e.dataFormat!=="channelsLast")throw new Error(`wasm backend does not support dataFormat:'${e.dataFormat}'. Please use 'channelsLast'.`);if(e.dilationWidth!==1||e.dilationHeight!==1)throw new Error(`was backend only supports average pooling with dilation = [1, 1], got [${e.dilationHeight}, ${e.dilationWidth}].`);const v=o.makeOutput(e.outShape,"float32"),E=o.dataIdMap.get(v.dataId).id;return Ya(t,r.shape[0],r.shape[1],r.shape[2],m,b,p,f,g,w,k,y,_,E),v}const fc={kernelName:Pn,backendName:"wasm",setupFunc:pc,kernelFunc:mc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Za;function hc(a){Za=a.wasm.cwrap("AvgPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function gc(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{filterSize:t,strides:i,pad:c,dimRoundingMode:d,dataFormat:u}=o,e=Nt(r.shape,t,i,1,c,d,u),m=s.makeOutput(e.outShape,r.dtype);return Za(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,e.batchSize,e.inChannels,e.inDepth,e.inHeight,e.inWidth,e.outDepth,e.outHeight,e.outWidth,e.strideDepth,e.strideHeight,e.strideWidth,e.dilationDepth,e.dilationHeight,e.dilationWidth,e.effectiveFilterDepth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.front,e.padInfo.top,e.padInfo.left),m}const bc={kernelName:mo,backendName:"wasm",setupFunc:hc,kernelFunc:gc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let er;function _c(a){er=a.wasm.cwrap("AvgPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function yc(a){const{inputs:n,backend:s,attrs:o}=a,{dy:r,input:t}=n,{filterSize:i,strides:c,pad:d,dimRoundingMode:u}=o,e=Nt(t.shape,i,c,1,d,u),m=s.makeOutput(t.shape,t.dtype);return er(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,e.batchSize,e.inChannels,e.inDepth,e.inHeight,e.inWidth,e.outDepth,e.outHeight,e.outWidth,e.strideDepth,e.strideHeight,e.strideWidth,e.dilationDepth,e.dilationHeight,e.dilationWidth,e.effectiveFilterDepth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.front,e.padInfo.top,e.padInfo.left,e.filterDepth,e.filterHeight,e.filterWidth),m}const Ic={kernelName:fo,backendName:"wasm",setupFunc:_c,kernelFunc:yc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let tr;function wc(a){tr=a.wasm.cwrap("AvgPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function kc(a){const{inputs:n,backend:s,attrs:o}=a,{dy:r,input:t}=n,{filterSize:i,strides:c,pad:d}=o,u=rt(t.shape,i,c,1,d),e=s.makeOutput(t.shape,t.dtype);return tr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(e.dataId).id,u.batchSize,u.inChannels,u.inHeight,u.inWidth,u.outHeight,u.outWidth,u.strideHeight,u.strideWidth,u.dilationHeight,u.dilationWidth,u.effectiveFilterHeight,u.effectiveFilterWidth,u.padInfo.top,u.padInfo.left,u.filterHeight,u.filterWidth),e}const Sc={kernelName:ho,backendName:"wasm",setupFunc:wc,kernelFunc:kc};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ue(a){const{inputs:n,attrs:s}=a,{x:o}=n,{shape:r}=s,t=C(o.shape),i=bo(r,t);return ge(t===C(i),()=>`new shape: ${i}, old shape: ${o.shape}. New shape and old shape must have the same number of elements.`),a.backend.incRef(o.dataId),{dataId:o.dataId,shape:i,dtype:o.dtype}}const Mc={kernelName:go,backendName:"wasm",kernelFunc:ue};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let nr;function vc(a){nr=a.wasm.cwrap(Tn,null,["number","array","number","number","array","number","number","number","number"])}function Ac(a){const{inputs:n,backend:s,attrs:o}=a,{a:r,b:t}=n,{transposeA:i,transposeB:c}=o;if(r.dtype!=="float32"||t.dtype!=="float32")throw new Error("BatchMatMul for non non-float32 tensors not yet supported.");const d=r.shape.length,u=t.shape.length,e=i?r.shape[d-2]:r.shape[d-1],m=c?t.shape[u-1]:t.shape[u-2],b=i?r.shape[d-1]:r.shape[d-2],p=c?t.shape[u-2]:t.shape[u-1],f=r.shape.slice(0,-2),g=t.shape.slice(0,-2),w=C(f),k=C(g),_=Dt(r.shape.slice(0,-2),t.shape.slice(0,-2)).concat([b,p]);ge(e===m,()=>`Error in matMul: inner shapes (${e}) and (${m}) of Tensors with shapes ${r.shape} and ${t.shape} and transposeA=${i} and transposeB=${c} must match.`);const v=i?[w,e,b]:[w,b,e],E=c?[k,p,m]:[k,m,p],R=ue({inputs:{x:r},backend:s,attrs:{shape:v}}),B=ue({inputs:{x:t},backend:s,attrs:{shape:E}}),L=s.dataIdMap.get(R.dataId).id,z=s.dataIdMap.get(B.dataId).id,H=i?R.shape[2]:R.shape[1],G=c?B.shape[1]:B.shape[2],q=Math.max(w,k),Q=s.makeOutput([q,H,G],R.dtype),oe=s.dataIdMap.get(Q.dataId).id,X=new Uint8Array(new Int32Array(R.shape).buffer),te=new Uint8Array(new Int32Array(B.shape).buffer);return nr(L,X,R.shape.length,z,te,B.shape.length,i,c,oe),s.disposeData(R.dataId),s.disposeData(B.dataId),Q.shape=_,Q}const xc={kernelName:Tn,backendName:"wasm",setupFunc:vc,kernelFunc:Ac};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Be(a){const{inputs:{x:n},attrs:{begin:s,size:o},backend:r}=a,[t,i]=yo(n,s,o),c=Io(n.shape,t,i),d=r.readSync(n.dataId),u=r.makeOutput(i,n.dtype),e=fe(n.shape),m=r.dataIdMap.get(u.dataId);if(c){const f=wo(t,e);return n.dtype==="string"?m.stringBytes=d.slice(f,f+C(i)):r.typedArrayFromHeap(u).set(d.subarray(f,f+C(i))),u}if(n.dtype==="string"){const f=wn(d,t,i,n.shape,n.dtype);return m.stringBytes=f,u}const b=r.typedArrayFromHeap(u),p=n.shape.length;if(p===2)Dc(d,e[0],b,t,i);else if(p===3)Nc(d,e[0],e[1],b,t,i);else if(p===4)Fc(d,e[0],e[1],e[2],b,t,i);else{const f=wn(d,t,i,n.shape,n.dtype);b.set(f)}return u}function Dc(a,n,s,o,r){let t=0;const i=o[0],c=o[1],d=i+r[0];for(let u=i;u<d;u++){const e=u*n+c;s.set(a.subarray(e,e+r[1]),t),t+=r[1]}}function Nc(a,n,s,o,r,t){let i=0;const c=r[0],d=r[1],u=r[2],e=c+t[0],m=d+t[1];for(let b=c;b<e;b++)for(let p=d;p<m;p++){const f=b*n+p*s+u;o.set(a.subarray(f,f+t[2]),i),i+=t[2]}}function Fc(a,n,s,o,r,t,i){let c=0;const d=t[0],u=t[1],e=t[2],m=d+i[0],b=u+i[1],p=e+i[2],f=t[3];for(let g=d;g<m;g++)for(let w=u;w<b;w++)for(let k=e;k<p;k++){const y=g*n+w*s+k*o+f;r.set(a.subarray(y,y+i[3]),c),c+=i[3]}}const Cc={kernelName:_o,backendName:"wasm",kernelFunc:Be};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rc(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{blockShape:t,crops:i}=o,c=t.reduce((k,y)=>k*y),d=On(r.shape,t,c),u=Bn(d.length,t.length),e=Wn(r.shape,t,c),m=So(i,t.length),b=Mo(e,i,t.length),p=ue({inputs:{x:r},backend:s,attrs:{shape:d}}),f=xe({inputs:{x:p},backend:s,attrs:{perm:u}}),g=ue({inputs:{x:f},backend:s,attrs:{shape:e}}),w=Be({inputs:{x:g},backend:s,attrs:{begin:m,size:b}});return s.disposeData(p.dataId),s.disposeData(f.dataId),s.disposeData(g.dataId),w}const Ec={kernelName:ko,backendName:"wasm",kernelFunc:Rc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ar;function Pc(a){ar=a.wasm.cwrap(Hn,null,["number","number","boolean","number","number","number"])}function Tc(a){const{backend:n,inputs:s,attrs:o}=a,{x:r,weights:t}=s,{size:i}=o,c=t.shape.reduce((m,b)=>m*b,1)!==0,d=r.shape.length===1?[i]:[r.shape[0],i],u=n.makeOutput(d,t.dtype);function e(m){return n.dataIdMap.get(m.dataId).id}return ar(e(r),i,c,e(t),V[t.dtype],e(u)),u}const Oc={kernelName:Hn,backendName:"wasm",setupFunc:Pc,kernelFunc:Tc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bc=ee(vo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wc(a){const{inputs:n,backend:s}=a,{s0:o,s1:r}=n,t=s.typedArrayFromHeap(o),i=s.typedArrayFromHeap(r),c=Dt(Array.from(t),Array.from(i));return s.makeOutput([c.length],"int32",void 0,new Int32Array(c))}const Hc={kernelName:Ao,backendName:"wasm",kernelFunc:Wc};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(a){const{inputs:{x:n},attrs:{dtype:s},backend:o}=a,r=o.makeOutput(n.shape,s),t=o.typedArrayFromHeap(n);return o.typedArrayFromHeap(r).set(t),r}const $c={kernelName:xo,backendName:"wasm",kernelFunc:Ne};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lc=$(Do);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let rr;function Vc(a){rr=a.wasm.cwrap($n,null,["number","number","number","number"])}function zc(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{clipValueMin:t,clipValueMax:i}=o,c=s.dataIdMap.get(r.dataId).id,d=s.makeOutput(r.shape,r.dtype),u=s.dataIdMap.get(d.dataId).id;return rr(c,t,i,u),d}const Uc={kernelName:$n,backendName:"wasm",setupFunc:Vc,kernelFunc:zc};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sr(a){const{inputs:n,backend:s}=a,o=at(a.attrs.axis,n[0].shape)[0],r=n.map(p=>p.shape);Fo(r,o);let t=Ut(n.map(p=>p.shape),o);const i=n.filter(p=>C(p.shape)>0);if(i.length===1)return Ft({inputs:{x:i[0]},backend:s});const c=s.makeOutput(t,n[0].dtype);if(C(t)===0)return c;if(i[0].dtype==="string"){const p=i.map(_=>{const E=[-1,C(_.shape.slice(o))];return ue({inputs:{x:_},backend:s,attrs:{shape:E}})}),f=p.map(_=>({vals:s.readSync(_.dataId),shape:_.shape}));t=Ut(p.map(_=>_.shape),1);const g=p[0].shape[0]===1,w=Co(f,t,n[0].dtype,g),k=Ut(i.map(_=>_.shape),o);c.shape=k;const y=s.dataIdMap.get(c.dataId);return y.stringBytes=Ro(w),p.forEach(_=>s.disposeData(_.dataId)),c}const d=C(i[0].shape.slice(0,o));let u=0;const e=i.map(p=>{const f=C(p.shape.slice(o));return u+=f,f}),m=i.map(p=>s.typedArrayFromHeap(p)),b=s.typedArrayFromHeap(c);for(let p=0;p<d;p++){let f=p*u;for(let g=0;g<m.length;g++){const w=e[g],k=p*w,y=m[g].subarray(k,k+w);b.set(y,f),f+=w}}return c}const Gc={kernelName:No,backendName:"wasm",kernelFunc:sr};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let or;function jc(a){or=a.wasm.cwrap(Ln,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function qc(a){const{inputs:n,attrs:s,backend:o}=a,{x:r,filter:t}=n,i=o.dataIdMap.get(r.dataId).id,c=o.dataIdMap.get(t.dataId).id,{strides:d,dilations:u,pad:e,dimRoundingMode:m,dataFormat:b}=s,p=Vn(b),f=st(r.shape,t.shape,d,u,e,m,!1,p),g=f.filterHeight,w=f.filterWidth,k=f.padInfo.top,y=f.padInfo.right,_=f.padInfo.bottom,v=f.padInfo.left,E=f.dilationHeight,R=f.dilationWidth,B=f.strideHeight,L=f.strideWidth,z=f.inChannels,H=f.outChannels,G=f.padInfo.type==="SAME"?1:0;if(f.dataFormat!=="channelsLast")throw new Error(`wasm backend Conv2D does not support dataFormat:'${f.dataFormat}'. Please use 'channelsLast'.`);const q=o.makeOutput(f.outShape,"float32"),Q=o.dataIdMap.get(q.dataId).id;return or(i,r.shape[0],r.shape[1],r.shape[2],c,g,w,k,y,_,v,G,E,R,B,L,z,H,Q),q}const Xc={kernelName:Ln,backendName:"wasm",setupFunc:jc,kernelFunc:qc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ur;function Kc(a){ur=a.wasm.cwrap(zn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Jc(a){const{backend:n,inputs:s,attrs:o}=a,{dy:r,filter:t}=s,{strides:i,pad:c,dataFormat:d,dimRoundingMode:u,inputShape:e}=o,m=1,b=Vn(d),p=st(e,t.shape,i,m,c,u,!1,b),{batchSize:f,filterHeight:g,filterWidth:w,inChannels:k,inHeight:y,inWidth:_,outChannels:v,outHeight:E,outWidth:R,strideHeight:B,strideWidth:L}=p,z=g-1-p.padInfo.top,H=w-1-p.padInfo.left,G=p.dataFormat==="channelsLast",q=fe(p.inShape),Q=fe(r.shape),[oe,X,te]=fe(t.shape),le=q[0],U=G?q[1]:q[2],he=G?q[2]:1,ie=G?1:q[1],ce=Q[0],_e=G?Q[1]:Q[2],ne=G?Q[2]:1,$e=G?1:Q[1],Le=n.makeOutput(p.inShape,"float32"),Ke=n.dataIdMap.get(Le.dataId).id,Je=n.dataIdMap.get(r.dataId).id,Y=n.dataIdMap.get(t.dataId).id;return ur(Je,Y,f,g,w,y,_,k,E,R,v,B,L,z,H,oe,X,te,le,U,he,ie,ce,_e,ne,$e,Ke),Le}const Qc={kernelName:zn,backendName:"wasm",setupFunc:Kc,kernelFunc:Jc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ir;function Yc(a){ir=a.wasm.cwrap(Un,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Zc(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,filter:t}=n,{strides:i,pad:c,dilations:d}=o;if(r.dtype!=="float32")throw new Error(`Tensor x must have dtype float32, got ${r.dtype}`);if(t.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${t.dtype}`);const u=nn(r.shape,t.shape,i,d,c),e=s.makeOutput(u.outShape,r.dtype);return ir(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(e.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),e}const ed={kernelName:Un,backendName:"wasm",setupFunc:Yc,kernelFunc:Zc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let cr;function td(a){cr=a.wasm.cwrap(Gn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function nd(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,dy:t}=n,{strides:i,pad:c,filterShape:d}=o;if(r.dtype!=="float32")throw new Error(`Tensor dy must have dtype float32, got ${r.dtype}`);if(t.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${t.dtype}`);const u=nn(r.shape,d,i,1,c),e=s.makeOutput(u.filterShape,t.dtype);return cr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(e.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),e}const ad={kernelName:Gn,backendName:"wasm",setupFunc:td,kernelFunc:nd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let dr;function rd(a){dr=a.wasm.cwrap(jn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function sd(a){const{inputs:n,backend:s,attrs:o}=a,{dy:r,filter:t}=n,{pad:i,strides:c,inputShape:d}=o;if(r.dtype!=="float32")throw new Error(`Tensor dy must have dtype float32, got ${r.dtype}`);if(t.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${t.dtype}`);const u=nn(d,t.shape,c,1,i),e=s.makeOutput(u.inShape,r.dtype);return dr(s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(e.dataId).id,u.batchSize,u.inDepth,u.inHeight,u.inWidth,u.inChannels,u.outDepth,u.outHeight,u.outWidth,u.outChannels,u.strideDepth,u.strideHeight,u.strideWidth,u.dilationDepth,u.dilationHeight,u.dilationWidth,u.filterDepth,u.filterHeight,u.filterWidth,u.padInfo.front,u.padInfo.top,u.padInfo.left),e}const od={kernelName:jn,backendName:"wasm",setupFunc:rd,kernelFunc:sd};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ud=$(Eo);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const id=$(Po);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Jt;(function(a){a[a.bilinear=0]="bilinear",a[a.nearest=1]="nearest"})(Jt||(Jt={}));let lr;function cd(a){lr=a.wasm.cwrap(qn,null,["number","number","number","number","array","number","number","number","number","number"])}function dd(a){const{backend:n,inputs:s,attrs:o}=a,{method:r,extrapolationValue:t,cropSize:i}=o,{image:c,boxes:d,boxInd:u}=s,e=d.shape[0],[m,b]=i,p=[e,m,b,c.shape[3]];let f=n.dataIdMap.get(c.dataId),g;c.dtype!=="float32"&&(g=Ne({backend:n,inputs:{x:c},attrs:{dtype:"float32"}}),f=n.dataIdMap.get(g.dataId));const w=f.id,k=n.dataIdMap.get(d.dataId).id,y=n.dataIdMap.get(u.dataId).id,_=n.makeOutput(p,"float32"),v=n.dataIdMap.get(_.dataId).id,E=new Uint8Array(new Int32Array(c.shape).buffer);return lr(w,k,y,e,E,m,b,Jt[r],t,v),g!=null&&n.disposeData(g.dataId),_}const ld={kernelName:qn,backendName:"wasm",setupFunc:cd,kernelFunc:dd};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let pr;function pd(a){pr=a.wasm.cwrap(Xn,null,["number","number","number","number","number","number"])}function md(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{axis:t,exclusive:i,reverse:c}=o,d=r.shape.length;ge(r.dtype==="float32"||r.dtype==="int32",()=>`cumprod does not support ${r.dtype} tensors in the WASM backend`);const u=tn([t],d);let e=r;u!==null&&(e=xe({inputs:{x:r},attrs:{perm:u},backend:s}));const m=Xe(1,d)[0];Me("cumprod",[m],d);const b=s.makeOutput(e.shape,e.dtype),p=e.shape[m],f=s.dataIdMap.get(e.dataId).id,g=s.dataIdMap.get(b.dataId).id;pr(f,i?1:0,c?1:0,p,g,V[r.dtype]);let w=b;if(u!==null){const k=Kn(u);w=xe({inputs:{x:b},attrs:{perm:k},backend:s}),s.disposeData(e.dataId),s.disposeData(b.dataId)}return w}const fd={kernelName:Xn,backendName:"wasm",setupFunc:pd,kernelFunc:md};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let mr;function hd(a){mr=a.wasm.cwrap(Jn,null,["number","number","number","number","number","number"])}function gd(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{axis:t,exclusive:i,reverse:c}=o,d=r.shape.length;ge(r.dtype==="float32"||r.dtype==="int32",()=>`cumsum does not support ${r.dtype} tensors in the WASM backend`);const u=tn([t],d);let e=r;u!==null&&(e=xe({inputs:{x:r},attrs:{perm:u},backend:s}));const m=Xe(1,d)[0];Me("cumsum",[m],d);const b=s.makeOutput(e.shape,e.dtype),p=e.shape[m],f=s.dataIdMap.get(e.dataId).id,g=s.dataIdMap.get(b.dataId).id;mr(f,i?1:0,c?1:0,p,g,V[r.dtype]);let w=b;if(u!==null){const k=Kn(u);w=xe({inputs:{x:b},attrs:{perm:k},backend:s}),s.disposeData(e.dataId),s.disposeData(b.dataId)}return w}const bd={kernelName:Jn,backendName:"wasm",setupFunc:hd,kernelFunc:gd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fr;function _d(a){fr=a.wasm.cwrap("DenseBincount",null,["number","array","number","number","boolean","number","number","boolean","number"])}function yd(a){const{backend:n,inputs:s,attrs:o}=a,{x:r,weights:t}=s,{size:i,binaryOutput:c}=o,d=t.shape.reduce((b,p)=>b*p,1)!==0,u=r.shape.length===1?[i]:[r.shape[0],i],e=n.makeOutput(u,t.dtype);function m(b){return n.dataIdMap.get(b.dataId).id}return fr(m(r),new Uint8Array(new Int32Array(r.shape).buffer),r.shape.length,i,d,m(t),V[t.dtype],c,m(e)),e}const Id={kernelName:To,backendName:"wasm",setupFunc:_d,kernelFunc:yd};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let hr;function wd(a){hr=a.wasm.cwrap(Qn,null,["number","number","number","array","number","array","array","number","number"])}function kd(a){const{backend:n,inputs:s,attrs:o}=a,{x:r}=s,{blockSize:t,dataFormat:i}=o,c=r.shape[0],d=i==="NHWC"?r.shape[1]:r.shape[2],u=i==="NHWC"?r.shape[2]:r.shape[3],e=i==="NHWC"?r.shape[3]:r.shape[1],m=d*t,b=u*t,p=e/(t*t),f=i==="NHWC"?[c,m,b,p]:[c,p,m,b],g=n.makeOutput(f,"float32"),k=n.dataIdMap.get(r.dataId).id,y=new Uint8Array(new Int32Array(fe(r.shape)).buffer),_=new Uint8Array(new Int32Array(f).buffer),v=new Uint8Array(new Int32Array(fe(f)).buffer),E=n.dataIdMap.get(g.dataId).id;return hr(k,t,i==="NHWC"?1:0,y,r.shape.length-1,_,v,f.length,E),g}const Sd={kernelName:Qn,backendName:"wasm",setupFunc:wd,kernelFunc:kd};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let gr;function Md(a){gr=a.wasm.cwrap(Yn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function vd(a){const{inputs:n,attrs:s,backend:o}=a,{x:r,filter:t}=n,i=o.dataIdMap.get(r.dataId).id,c=o.dataIdMap.get(t.dataId).id,{strides:d,dilations:u,pad:e,dimRoundingMode:m}=s,b=u??[1,1],p=st(r.shape,t.shape,d,b,e,m,!0),f=p.filterHeight,g=p.filterWidth,w=p.padInfo.top,k=p.padInfo.right,y=p.padInfo.bottom,_=p.padInfo.left,v=p.dilationHeight,E=p.dilationWidth,R=p.strideHeight,B=p.strideWidth,L=p.inChannels,z=p.outChannels,H=p.padInfo.type==="SAME"?1:0;if(p.dataFormat!=="channelsLast")throw new Error(`wasm backend DepthwiseConv2dNative does not support dataFormat:'${p.dataFormat}'. Please use 'channelsLast'.`);const G=o.makeOutput(p.outShape,"float32"),q=o.dataIdMap.get(G.dataId).id;return gr(i,r.shape[0],r.shape[1],r.shape[2],c,f,g,w,k,y,_,H,v,E,R,B,L,z,q),G}const Ad={kernelName:Yn,backendName:"wasm",setupFunc:Md,kernelFunc:vd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let br;function xd(a){br=a.wasm.cwrap("Diag",null,["number","number","number","number"])}function Dd(a){const{inputs:n,backend:s}=a,{x:o}=n,r=C(o.shape),t=s.makeOutput([...o.shape,...o.shape],o.dtype);return br(s.dataIdMap.get(o.dataId).id,V[o.dtype],r,s.dataIdMap.get(t.dataId).id),t}const Nd={kernelName:Oo,backendName:"wasm",setupFunc:xd,kernelFunc:Dd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let _r;function Fd(a){_r=a.wasm.cwrap(Zn,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Cd(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,filter:t}=n,{strides:i,pad:c,dilations:d}=o;if(r.dtype!==t.dtype)throw new Error(`Dilation2D error: x must have the same dtype as filter. Got ${r.dtype} and ${t.dtype}`);const u=an(r.shape,t.shape,i,c,"NHWC",d),e=s.makeOutput(u.outShape,r.dtype);return _r(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(e.dataId).id,V[r.dtype],u.batchSize,u.inChannels,u.inHeight,u.inWidth,u.outHeight,u.outWidth,u.strideHeight,u.strideWidth,u.dilationHeight,u.dilationWidth,u.filterHeight,u.filterWidth,u.padInfo.top,u.padInfo.left),e}const Rd={kernelName:Zn,backendName:"wasm",setupFunc:Fd,kernelFunc:Cd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let yr;function Ed(a){yr=a.wasm.cwrap(ea,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Pd(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,filter:t,dy:i}=n,{strides:c,pad:d,dilations:u}=o;if(r.dtype!==t.dtype||r.dtype!==i.dtype)throw new Error(`Dilation2DBackpropFilter error: x must have the same dtype as filter and dy. Got ${r.dtype}, ${t.dtype}, and ${i.dtype}`);const e=an(r.shape,t.shape,c,d,"NHWC",u),m=s.makeOutput(t.shape,t.dtype);return yr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(i.dataId).id,s.dataIdMap.get(m.dataId).id,V[r.dtype],e.batchSize,e.inChannels,e.inHeight,e.inWidth,e.outHeight,e.outWidth,e.strideHeight,e.strideWidth,e.dilationHeight,e.dilationWidth,e.filterHeight,e.filterWidth,e.padInfo.top,e.padInfo.left),m}const Td={kernelName:ea,backendName:"wasm",setupFunc:Ed,kernelFunc:Pd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ir;function Od(a){Ir=a.wasm.cwrap(ta,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Bd(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,filter:t,dy:i}=n,{strides:c,pad:d,dilations:u}=o;if(r.dtype!==t.dtype||r.dtype!==i.dtype)throw new Error(`Dilation2DBackpropInput error: x must have the same dtype as filter and dy. Got ${r.dtype}, ${t.dtype}, and ${i.dtype}`);const e=an(r.shape,t.shape,c,d,"NHWC",u),m=s.makeOutput(r.shape,r.dtype);return Ir(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(i.dataId).id,s.dataIdMap.get(m.dataId).id,V[r.dtype],e.batchSize,e.inChannels,e.inHeight,e.inWidth,e.outHeight,e.outWidth,e.strideHeight,e.strideWidth,e.dilationHeight,e.dilationWidth,e.filterHeight,e.filterWidth,e.padInfo.top,e.padInfo.left),m}const Wd={kernelName:ta,backendName:"wasm",setupFunc:Od,kernelFunc:Bd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hd=$(Bo);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let wr;function $d(a){wr=a.wasm.cwrap(na,null,["number","number","number"])}function Ld(a){const{inputs:n,backend:s}=a,{dy:o,y:r}=n,t=s.makeOutput(r.shape,"float32"),i=c=>s.dataIdMap.get(c.dataId).id;return wr(i(r),i(o),i(t)),t}const Vd={kernelName:na,backendName:"wasm",setupFunc:$d,kernelFunc:Ld};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zd=!1,Ud=ee(Wo,zd,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gd=$(Ho);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jd=$($o,"float32");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qt(a){const{inputs:n,attrs:s,backend:o}=a,{input:r}=n,{dim:t}=s,i=r.shape.length,c=r.shape.slice();let d=t;return t<0&&(ge(-(i+1)<=t,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),d=i+t+1),c.splice(d,0,1),ue({inputs:{x:r},backend:o,attrs:{shape:c}})}const qd={kernelName:Lo,backendName:"wasm",kernelFunc:Qt};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xd=$(Vo,"float32");/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kr(a){const{attrs:{shape:n,value:s},backend:o}=a;let{attrs:{dtype:r}}=a;r=r||Uo(s);const t=o.makeOutput(n,r);return o.typedArrayFromHeap(t).fill(s),t}const Kd={kernelName:zo,backendName:"wasm",kernelFunc:kr};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Sr;function Jd(a){Sr=a.wasm.cwrap(aa,null,["number","number","number","number","number","number"])}function Qd(a){const{inputs:n,backend:s}=a,{image:o}=n,r=s.makeOutput(o.shape,o.dtype),t=s.dataIdMap.get(o.dataId).id,i=s.dataIdMap.get(r.dataId).id,[c,d,u,e]=o.shape;return Sr(t,c,d,u,e,i),r}const Yd={kernelName:aa,backendName:"wasm",kernelFunc:Qd,setupFunc:Jd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zd=$(Go);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const el=ee(jo);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Mr;function tl(a){Mr=a.wasm.cwrap(ra,null,["number","number","number","number","number","number","number"])}function nl(a){const{backend:n,inputs:s,attrs:o}=a,{varianceEpsilon:r}=o,{x:t,mean:i,variance:c,offset:d,scale:u}=s,e=n.dataIdMap.get(t.dataId).id,m=n.dataIdMap.get(i.dataId).id,b=n.dataIdMap.get(c.dataId).id,p=d!=null?n.dataIdMap.get(d.dataId).id:0,f=u!=null?n.dataIdMap.get(u.dataId).id:0,g=n.makeOutput(t.shape,t.dtype);if(C(t.shape)===0)return g;const w=n.dataIdMap.get(g.dataId).id;return Mr(e,m,b,p,f,r,w),g}const al={kernelName:ra,backendName:"wasm",setupFunc:tl,kernelFunc:nl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let vr;function rl(a){vr=a.wasm.cwrap(sa,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function sl(a){const{inputs:n,attrs:s,backend:o}=a,{x:r,filter:t,bias:i,preluActivationWeights:c}=n,{strides:d,pad:u,dilations:e,dataFormat:m,dimRoundingMode:b,activation:p,leakyreluAlpha:f}=s,g=st(r.shape,t.shape,d,e,u,b),w=nt[p];if(w==null)throw new Error(`${p} activation not yet supported for FusedConv2D in the wasm backend.`);const k=o.dataIdMap.get(r.dataId).id,y=o.dataIdMap.get(t.dataId).id,_=g.outChannels;let v=0;if(i!=null){const ne=o.dataIdMap.get(i.dataId);if(ne.shape.length!==1)throw new Error(`FusedConv2D only supports rank-1 bias but got rank ${ne.shape.length}.`);if(ne.shape[0]!==_)throw new Error(`FusedConv2D bias shape (${ne.shape}) does not match the number of output channels (${_})`);v=ne.id}const E=g.filterHeight,R=g.filterWidth,B=g.padInfo.top,L=g.padInfo.right,z=g.padInfo.bottom,H=g.padInfo.left,G=g.dilationHeight,q=g.dilationWidth,Q=g.strideHeight,oe=g.strideWidth,X=g.inChannels,te=g.padInfo.type==="SAME"?1:0,le=g.batchSize,U=g.inHeight,he=g.inWidth;if(m!=="NHWC")throw new Error(`wasm backend FusedConv2D does not support dataFormat:'${m}'. Please use 'NHWC'.`);const ie=o.makeOutput(g.outShape,"float32"),ce=o.dataIdMap.get(ie.dataId).id,_e=c==null?0:o.dataIdMap.get(c.dataId).id;return vr(k,le,U,he,y,E,R,v,B,L,z,H,te,G,q,Q,oe,X,_,w,_e,f||0,ce),ie}const ol={kernelName:sa,backendName:"wasm",setupFunc:rl,kernelFunc:sl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ar;function ul(a){Ar=a.wasm.cwrap(oa,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function il(a){const{inputs:n,attrs:s,backend:o}=a,{x:r,filter:t,bias:i,preluActivationWeights:c}=n,{strides:d,pad:u,dilations:e,dataFormat:m,dimRoundingMode:b,activation:p,leakyreluAlpha:f}=s,g=st(r.shape,t.shape,d,e,u,b,!0),w=nt[p];if(w==null)throw new Error(`${p} activation not yet supported for FusedDepthwiseConv2D in the wasm backend.`);const k=o.dataIdMap.get(r.dataId).id,y=o.dataIdMap.get(t.dataId).id,_=g.outChannels;let v=0;if(i!=null){const ne=o.dataIdMap.get(i.dataId);if(ne.shape.length!==1)throw new Error(`FusedDepthwiseConv2D only supports rank-1 bias but got rank ${ne.shape.length}.`);if(ne.shape[0]!==_)throw new Error(`FusedDepthwiseConv2D bias shape (${ne.shape}) does not match the number of output channels (${_})`);v=ne.id}const E=g.filterHeight,R=g.filterWidth,B=g.padInfo.top,L=g.padInfo.right,z=g.padInfo.bottom,H=g.padInfo.left,G=g.dilationHeight,q=g.dilationWidth,Q=g.strideHeight,oe=g.strideWidth,X=g.inChannels,te=g.padInfo.type==="SAME"?1:0,le=g.batchSize,U=g.inHeight,he=g.inWidth;if(m!=="NHWC")throw new Error(`wasm backend FusedDepthwiseConv2D does not support dataFormat:'${m}'. Please use 'NHWC'.`);const ie=o.makeOutput(g.outShape,"float32"),ce=o.dataIdMap.get(ie.dataId).id,_e=c==null?0:o.dataIdMap.get(c.dataId).id;return Ar(k,le,U,he,y,E,R,v,B,L,z,H,te,G,q,Q,oe,X,_,w,_e,f||0,ce),ie}const cl={kernelName:oa,backendName:"wasm",setupFunc:ul,kernelFunc:il};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let xr;function dl(a){xr=a.wasm.cwrap(ua,null,["number","number","number","number","number","number","array","number"])}function ll(a){const{backend:n,inputs:s}=a,{params:o,indices:r}=s,[t,i,c,d]=qo(o,r),u=n.makeOutput(t,o.dtype);if(i===0)return u;const e=r.shape,m=e[e.length-1],p=n.dataIdMap.get(o.dataId).id,g=n.dataIdMap.get(r.dataId).id,w=new Uint8Array(new Int32Array(d).buffer),k=n.dataIdMap.get(u.dataId).id;return xr(p,V[o.dtype],g,i,m,c,w,k),u}const pl={kernelName:ua,backendName:"wasm",setupFunc:dl,kernelFunc:ll};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Dr;function ml(a){Dr=a.wasm.cwrap("Gather",null,["number","number","array","number","number","number","array","number"])}function fl(a){const{backend:n,inputs:s,attrs:o}=a,{x:r,indices:t}=s,{axis:i,batchDims:c}=o,d=at(i,r.shape)[0],u=n.readSync(t.dataId),e=r.shape[d];for(let z=0;z<u.length;++z){const H=u[z];ge(H<=e-1&&H>=0,()=>`GatherV2: the index value ${H} is not in [0, ${e-1}]`)}const m=Ko(r,t,d,c),b=ue({inputs:{x:r},attrs:{shape:[m.batchSize,m.outerSize,m.dimSize,m.sliceSize]},backend:n}),p=C(t.shape),f=ue({inputs:{x:t},attrs:{shape:[m.batchSize,p/m.batchSize]},backend:n}),g=[m.batchSize,m.outerSize,p/m.batchSize,m.sliceSize],w=n.makeOutput(g,r.dtype);if(C(r.shape)===0)return w;const k=b.shape.length-1,_=n.dataIdMap.get(b.dataId).id,E=n.dataIdMap.get(f.dataId).id,R=n.dataIdMap.get(w.dataId).id,B=new Uint8Array(new Int32Array(fe(b.shape)).buffer),L=new Uint8Array(new Int32Array(fe(g)).buffer);return Dr(_,V[r.dtype],B,k,E,m.batchSize,L,R),n.disposeData(b.dataId),n.disposeData(f.dataId),w.shape=m.outputShape,w}const hl={kernelName:Xo,backendName:"wasm",setupFunc:ml,kernelFunc:fl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gl=!1,bl=ee(Jo,gl,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _l=!1,yl=ee(Qo,_l,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Il=$(Yo,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wl=$(Zo,"bool");/**
 * @license
 * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kl=$(eu,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Nr;function Sl(a){Nr=a.wasm.cwrap(ia,null,["number","number","number","number"])}function Ml(a){const{inputs:{x:n},attrs:{alpha:s},backend:o}=a,r=o.dataIdMap.get(n.dataId).id,t=o.makeOutput(n.shape,"float32");if(C(n.shape)!==0){const i=o.dataIdMap.get(t.dataId).id;Nr(r,V[n.dtype],s,i)}return t}const vl={kernelName:ia,backendName:"wasm",setupFunc:Sl,kernelFunc:Ml};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Al=!1,xl=ee(tu,Al,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dl=!1,Nl=ee(nu,Dl,"bool");/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Fr;function Fl(a){Fr=a.wasm.cwrap(ca,null,["number","number","number","number"])}function Cl(a){const{attrs:n,backend:s}=a,{start:o,stop:r,num:t}=n,i=Math.floor(t),c=s.makeOutput([i],"float32");return Fr(s.dataIdMap.get(c.dataId).id,o,r,i),c}const Rl={kernelName:ca,backendName:"wasm",setupFunc:Fl,kernelFunc:Cl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=$(au);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pl=$(ru);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=!1,Ol=ee(su,Tl,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bl=$(ou);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=!1,Hl=ee(uu,Wl,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $l=!1,Ll=ee(iu,$l,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Cr;function Vl(a){Cr=a.wasm.cwrap(da,null,["number","number","number","number","number","number","number"])}function zl(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{depthRadius:t,bias:i,alpha:c,beta:d}=o;if(r.dtype!=="float32")throw new Error("LRN error: x must have dtype float32");const u=s.makeOutput(r.shape,r.dtype);return Cr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(u.dataId).id,r.shape[3],t,i,c,d),u}const Ul={kernelName:da,backendName:"wasm",setupFunc:Vl,kernelFunc:zl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Rr;function Gl(a){Rr=a.wasm.cwrap(la,null,["number","number","number","number","number","number","number","number","number"])}function jl(a){const{inputs:n,backend:s,attrs:o}=a,{x:r,y:t,dy:i}=n,{depthRadius:c,bias:d,alpha:u,beta:e}=o;if(r.dtype!=="float32"||t.dtype!=="float32"||i.dtype!=="float32")throw new Error("LRNGrad error: x, y, and dy must have dtype float32");const m=s.makeOutput(r.shape,r.dtype);return Rr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(i.dataId).id,s.dataIdMap.get(m.dataId).id,i.shape[3],c,d,u,e),m}const ql={kernelName:la,backendName:"wasm",setupFunc:Gl,kernelFunc:jl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Er;function Xl(a){Er=a.wasm.cwrap(pa,null,["number","number","number","number"])}function Kl(a){const{backend:n,inputs:s,attrs:o}=a,{reductionIndices:r,keepDims:t}=o,{x:i}=s;let d=n.dataIdMap.get(i.dataId).id,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);if(p){const _=n.dataIdMap.get(e.dataId).id;u=e,d=_}const f=u.shape.length;Me("max",m,f);const[g,w]=We(u.shape,m),k=C(w),y=n.makeOutput(g,i.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;Er(d,V[i.dtype],k,_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const Jl={kernelName:pa,backendName:"wasm",setupFunc:Xl,kernelFunc:Kl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ql=ee(cu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Pr;function Yl(a){Pr=a.wasm.cwrap(ma,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Zl(a){const{inputs:n,attrs:s,backend:o}=a,r=n.x,t=o.dataIdMap.get(r.dataId).id;ge(r.dtype==="float32",()=>`Error in MaxPool: only float32 input is supported. Got ${r.dtype}.`);const{filterSize:i,strides:c,pad:d,dimRoundingMode:u}=s,e=rt(r.shape,i,c,1,d,u),m=e.filterHeight,b=e.filterWidth,p=e.padInfo.top,f=e.padInfo.right,g=e.padInfo.bottom,w=e.padInfo.left,k=e.dilationHeight,y=e.dilationWidth,_=e.strideHeight,v=e.strideWidth,E=e.inChannels,R=e.outChannels;if(e.dataFormat!=="channelsLast")throw new Error(`wasm backend does not support dataFormat:'${e.dataFormat}'. Please use 'channelsLast'.`);const B=o.makeOutput(e.outShape,"float32"),L=o.dataIdMap.get(B.dataId).id;return Pr(t,r.shape[0],r.shape[1],r.shape[2],m,b,p,f,g,w,k,y,_,v,E,R,L),B}const ep={kernelName:ma,backendName:"wasm",setupFunc:Yl,kernelFunc:Zl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Tr;function tp(a){Tr=a.wasm.cwrap("MaxPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function np(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{filterSize:t,strides:i,pad:c,dimRoundingMode:d,dataFormat:u}=o,e=Nt(r.shape,t,i,1,c,d,u),m=s.makeOutput(e.outShape,r.dtype);return Tr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,e.batchSize,e.inChannels,e.inDepth,e.inHeight,e.inWidth,e.outDepth,e.outHeight,e.outWidth,e.strideDepth,e.strideHeight,e.strideWidth,e.dilationDepth,e.dilationHeight,e.dilationWidth,e.effectiveFilterDepth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.front,e.padInfo.top,e.padInfo.left),m}const ap={kernelName:du,backendName:"wasm",setupFunc:tp,kernelFunc:np};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Or;function rp(a){Or=a.wasm.cwrap("MaxPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function sp(a){const{inputs:n,backend:s,attrs:o}=a,{dy:r,input:t}=n,{filterSize:i,strides:c,pad:d,dimRoundingMode:u}=o,e=Nt(t.shape,i,c,1,d,u),m=s.makeOutput(t.shape,t.dtype);return Or(s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,e.batchSize,e.inChannels,e.inDepth,e.inHeight,e.inWidth,e.outDepth,e.outHeight,e.outWidth,e.strideDepth,e.strideHeight,e.strideWidth,e.dilationDepth,e.dilationHeight,e.dilationWidth,e.effectiveFilterDepth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.front,e.padInfo.top,e.padInfo.left),m}const op={kernelName:lu,backendName:"wasm",setupFunc:rp,kernelFunc:sp};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Br;function up(a){Br=a.wasm.cwrap("MaxPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function ip(a){const{inputs:n,backend:s,attrs:o}=a,{dy:r,input:t}=n,{filterSize:i,strides:c,pad:d,dimRoundingMode:u}=o,e=rt(t.shape,i,c,1,d,u),m=s.makeOutput(t.shape,t.dtype);return Br(s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,e.batchSize,e.inChannels,e.inHeight,e.inWidth,e.outHeight,e.outWidth,e.strideHeight,e.strideWidth,e.dilationHeight,e.dilationWidth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.top,e.padInfo.left),m}const cp={kernelName:pu,backendName:"wasm",setupFunc:up,kernelFunc:ip};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Wr;function dp(a){Wr=a.wasm.cwrap("MaxPoolWithArgmax",null,["number","number","number","number","boolean","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function lp(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{filterSize:t,strides:i,pad:c,includeBatchInIndex:d}=o;ge(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);const u=[1,1];ge(fu(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const e=rt(r.shape,t,i,[1,1],c),m=s.makeOutput(e.outShape,r.dtype),b=s.makeOutput(e.outShape,"int32");return Wr(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(m.dataId).id,s.dataIdMap.get(b.dataId).id,V[r.dtype],d,e.batchSize,e.inChannels,e.inHeight,e.inWidth,e.outHeight,e.outWidth,e.strideHeight,e.strideWidth,e.dilationHeight,e.dilationWidth,e.effectiveFilterHeight,e.effectiveFilterWidth,e.padInfo.top,e.padInfo.left),[m,b]}const pp={kernelName:mu,backendName:"wasm",setupFunc:dp,kernelFunc:lp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Hr;function mp(a){Hr=a.wasm.cwrap(fa,null,["number, number, number"])}function fp(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s,c=n.dataIdMap.get(i.dataId).id;let d=c,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);let f=m;if(p){const v=n.dataIdMap.get(e.dataId).id;v!==c&&(u=e,d=v,f=Xe(f.length,u.shape.length))}Me("mean",f,u.shape.length);const[g,w]=We(u.shape,f),k=C(w);let y=u;u.dtype!=="float32"&&(y=Ne({backend:n,inputs:{x:u},attrs:{dtype:"float32"}}),d=n.dataIdMap.get(y.dataId).id);const _=n.makeOutput(g,"float32");if(C(u.shape)!==0){const v=n.dataIdMap.get(_.dataId).id;Hr(d,k,v)}if(p&&n.disposeData(e.dataId),t){const v=He(_.shape,b);_.shape=v}return u.dtype!=="float32"&&n.disposeData(y.dataId),_}const hp={kernelName:fa,backendName:"wasm",setupFunc:mp,kernelFunc:fp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let $r;function gp(a){$r=a.wasm.cwrap(ha,null,["number","number","number","number"])}function bp(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s,c=n.dataIdMap.get(i.dataId).id;let d=c,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);if(p){const _=n.dataIdMap.get(e.dataId).id;_!==c&&(u=e,d=_)}const f=u.shape.length;Me("min",m,f);const[g,w]=We(u.shape,m),k=C(w),y=n.makeOutput(g,u.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;$r(d,V[i.dtype],k,_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const _p={kernelName:ha,backendName:"wasm",setupFunc:gp,kernelFunc:bp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yp=ee(hu);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Yt;(function(a){a[a.reflect=0]="reflect",a[a.symmetric=1]="symmetric"})(Yt||(Yt={}));let Lr;function Ip(a){Lr=a.wasm.cwrap(ga,null,["number","array","number","number","array","array","number","number"])}function wp(a){const{inputs:{x:n},backend:s,attrs:{paddings:o,mode:r}}=a,t=o.map((f,g)=>f[0]+n.shape[g]+f[1]),i=s.dataIdMap.get(n.dataId).id,c=s.makeOutput(t,n.dtype),d=s.dataIdMap.get(c.dataId).id,u=new Uint8Array(new Int32Array(n.shape).buffer),e=o.map(f=>f[0]),m=o.map(f=>f[1]),b=new Uint8Array(new Int32Array(e).buffer),p=new Uint8Array(new Int32Array(m).buffer);return Lr(i,u,n.shape.length,V[n.dtype],b,p,Yt[r],d),c}const kp={kernelName:ga,backendName:"wasm",kernelFunc:wp,setupFunc:Ip};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vr;function Sp(a){Vr=a.wasm.cwrap(ba,null,["number","number","number","number"])}function zr(a){const{backend:n,inputs:{logits:s},attrs:{dim:o}}=a,r=n.dataIdMap.get(s.dataId).id,t=n.makeOutput(s.shape,s.dtype),i=n.dataIdMap.get(t.dataId).id,c=s.shape[o],d=C(s.shape)/c;return C(t.shape)===0||Vr(r,i,c,d),t}const Mp={kernelName:ba,backendName:"wasm",setupFunc:Sp,kernelFunc:zr};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ur;function vp(a){Ur=a.wasm.cwrap(_a,null,["number","number","number","number","number","number"])}function Ap(a){const{inputs:n,backend:s,attrs:o}=a,{logits:r}=n,{numSamples:t,seed:i,normalized:c}=o;if(r.dtype!=="float32")throw new Error(`Tensor logits must have dtype float32, got ${r.dtype}`);const d=c?r:zr({inputs:{logits:r},backend:s,attrs:{dim:r.shape.length-1}}),[u,e]=d.shape,m=s.makeOutput([u,t],"int32");return Ur(s.dataIdMap.get(d.dataId).id,u,e,t,i,s.dataIdMap.get(m.dataId).id),c||s.disposeData(d.dataId),m}const xp={kernelName:_a,backendName:"wasm",setupFunc:vp,kernelFunc:Ap};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dp=ee(gu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Np=ee(bu);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fp=$(_u);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sn(a,n){const s=new Int32Array(a.wasm.HEAPU8.buffer,n,4),o=s[0],r=s[1],t=s[2],i=s[3];return a.wasm._free(n),{pSelectedIndices:o,selectedSize:r,pSelectedScores:t,pValidOutputs:i}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Gr;function Cp(a){Gr=a.wasm.cwrap(ya,"number",["number","number","number","number","number"])}function Rp(a){const{backend:n,inputs:s,attrs:o}=a,{iouThreshold:r,maxOutputSize:t,scoreThreshold:i}=o,{boxes:c,scores:d}=s,u=n.dataIdMap.get(c.dataId).id,e=n.dataIdMap.get(d.dataId).id,m=Gr(u,e,t,r,i),{pSelectedIndices:b,selectedSize:p,pSelectedScores:f,pValidOutputs:g}=sn(n,m);return n.wasm._free(f),n.wasm._free(g),n.makeOutput([p],"int32",b)}const Ep={kernelName:ya,backendName:"wasm",setupFunc:Cp,kernelFunc:Rp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let jr;function Pp(a){jr=a.wasm.cwrap(Ia,"number",["number","number","number","number","number","bool"])}function Tp(a){const{backend:n,inputs:s,attrs:o}=a,{iouThreshold:r,maxOutputSize:t,scoreThreshold:i,padToMaxOutputSize:c}=o,{boxes:d,scores:u}=s,e=n.dataIdMap.get(d.dataId).id,m=n.dataIdMap.get(u.dataId).id,b=jr(e,m,t,r,i,c),{pSelectedIndices:p,selectedSize:f,pSelectedScores:g,pValidOutputs:w}=sn(n,b);n.wasm._free(g);const k=n.makeOutput([f],"int32",p),y=n.makeOutput([],"int32",w);return[k,y]}const Op={kernelName:Ia,backendName:"wasm",setupFunc:Pp,kernelFunc:Tp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let qr;function Bp(a){qr=a.wasm.cwrap(wa,"number",["number","number","number","number","number","number"])}function Wp(a){const{backend:n,inputs:s,attrs:o}=a,{iouThreshold:r,maxOutputSize:t,scoreThreshold:i,softNmsSigma:c}=o,{boxes:d,scores:u}=s,e=n.dataIdMap.get(d.dataId).id,m=n.dataIdMap.get(u.dataId).id,b=qr(e,m,t,r,i,c),{pSelectedIndices:p,selectedSize:f,pSelectedScores:g,pValidOutputs:w}=sn(n,b);n.wasm._free(w);const k=n.makeOutput([f],"int32",p),y=n.makeOutput([f],"float32",g);return[k,y]}const Hp={kernelName:wa,backendName:"wasm",setupFunc:Bp,kernelFunc:Wp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $p=!1,Lp=ee(yu,$p,"bool");/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Xr;function Vp(a){Xr=a.wasm.cwrap(ka,null,["number","number","number","number","number"])}function zp(a){const{inputs:n,backend:s,attrs:o}=a,{indices:r}=n,{dtype:t,depth:i,onValue:c,offValue:d}=o,u=s.makeOutput([...r.shape,i],t),e=s.dataIdMap.get(u.dataId).id,b=s.dataIdMap.get(r.dataId).id;return Xr(b,i,c,d,e),u}const Up={kernelName:ka,backendName:"wasm",setupFunc:Vp,kernelFunc:zp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(a){const{inputs:{x:n},backend:s}=a,o=s.makeOutput(n.shape,n.dtype);return s.typedArrayFromHeap(o).fill(1),o}const jp={kernelName:Iu,backendName:"wasm",kernelFunc:Gp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qp(a){const{inputs:n,backend:s,attrs:o}=a,{axis:r}=o;if(n.length===1)return Qt({inputs:{input:n[0]},backend:s,attrs:{dim:r}});const t=n[0].shape,i=n[0].dtype;n.forEach(e=>{ku(t,e.shape,"All tensors passed to stack must have matching shapes"),ge(i===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],d=n.map(e=>{const m=Qt({inputs:{input:e},backend:s,attrs:{dim:r}});return c.push(m),m}),u=sr({inputs:d,backend:s,attrs:{axis:r}});return c.forEach(e=>s.disposeData(e.dataId)),u}const Xp={kernelName:wu,backendName:"wasm",kernelFunc:qp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Kr;function Kp(a){Kr=a.wasm.cwrap(Sa,null,["number","array","number","number","array","array","number","number"])}function Jp(a){const{inputs:{x:n},backend:s,attrs:{paddings:o,constantValue:r}}=a,t=o.map((g,w)=>g[0]+n.shape[w]+g[1]);if(C(n.shape)===0)return kr({backend:s,attrs:{shape:t,value:r,dtype:n.dtype}});const i=s.dataIdMap.get(n.dataId).id,c=s.makeOutput(t,n.dtype),u=s.dataIdMap.get(c.dataId).id,e=new Uint8Array(new Int32Array(n.shape).buffer),m=o.map(g=>g[0]),b=o.map(g=>g[1]),p=new Uint8Array(new Int32Array(m).buffer),f=new Uint8Array(new Int32Array(b).buffer);return Kr(i,e,n.shape.length,V[n.dtype],p,f,r,u),c}const Jr={kernelName:Sa,backendName:"wasm",kernelFunc:Jp,setupFunc:Kp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qp=ee(Su);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Qr;function Yp(a){Qr=a.wasm.cwrap(Ma,null,["number","number","number"])}function Zp(a){const{inputs:n,backend:s}=a,{x:o,alpha:r}=n,t=s.dataIdMap.get(o.dataId).id,i=s.dataIdMap.get(r.dataId).id;let c=t;const d=o;let u=d;d.dtype!=="float32"&&(u=Ne({backend:s,inputs:{x:o},attrs:{dtype:"float32"}}),c=s.dataIdMap.get(u.dataId).id);const e=s.makeOutput(o.shape,"float32"),m=s.dataIdMap.get(e.dataId).id;return Qr(c,i,m),d.dtype!=="float32"&&s.disposeData(u.dataId),e}const em={kernelName:Ma,backendName:"wasm",setupFunc:Yp,kernelFunc:Zp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Yr;function tm(a){Yr=a.wasm.cwrap(va,null,["number","number","number","number"])}function nm(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s,c=n.dataIdMap.get(i.dataId).id;let d=c,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);let f=m;if(p){const _=n.dataIdMap.get(e.dataId).id;_!==c&&(u=e,d=_,f=Xe(f.length,u.shape.length))}Me("prod",f,u.shape.length);const[g,w]=We(u.shape,f),k=C(w),y=n.makeOutput(g,u.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;Yr(d,k,V[y.dtype],_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const am={kernelName:va,backendName:"wasm",setupFunc:tm,kernelFunc:nm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rm=a=>{const{backend:n,attrs:s}=a,{start:o,stop:r,step:t,dtype:i}=s,c=vu(o,r,t,i),d=n.makeOutput([c.length],i);return n.typedArrayFromHeap(d).set(c),d},sm={kernelName:Mu,backendName:"wasm",kernelFunc:rm};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const om=ee(Au);/**
 * @license
 * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const um=$(xu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const im=$(Du);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cm=$(Nu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Zr;function dm(a){Zr=a.wasm.cwrap(Aa,null,["number","number","number","number","number","number","number","number","number","number"])}function lm(a){const{backend:n,inputs:s,attrs:o}=a,{images:r}=s,{alignCorners:t,halfPixelCenters:i,size:c}=o,[d,u]=c,[e,m,b,p]=r.shape,f=[e,d,u,p];let g=n.dataIdMap.get(r.dataId),w;g.dtype!=="float32"&&(w=Ne({backend:n,inputs:{x:r},attrs:{dtype:"float32"}}),g=n.dataIdMap.get(w.dataId));const k=g.id,y=n.makeOutput(f,"float32");if(C(r.shape)===0)return y;const _=n.dataIdMap.get(y.dataId).id;return Zr(k,e,m,b,p,d,u,t?1:0,i?1:0,_),w!=null&&n.disposeData(w.dataId),y}const pm={kernelName:Aa,backendName:"wasm",setupFunc:dm,kernelFunc:lm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let es;function mm(a){es=a.wasm.cwrap(xa,null,["number","number","number","array","array","boolean"])}function fm(a){const{inputs:n,backend:s,attrs:o}=a,{images:r,dy:t}=n,{alignCorners:i}=o,c=s.makeOutput(r.shape,"float32");let d=s.dataIdMap.get(r.dataId),u;return d.dtype!=="float32"&&(u=Ne({backend:s,inputs:{x:r},attrs:{dtype:"float32"}}),d=s.dataIdMap.get(u.dataId)),es(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(c.dataId).id,new Uint8Array(new Int32Array(r.shape).buffer),new Uint8Array(new Int32Array(t.shape).buffer),i),u!=null&&s.disposeData(u.dataId),c}const hm={kernelName:xa,backendName:"wasm",setupFunc:mm,kernelFunc:fm};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ts;function gm(a){ts=a.wasm.cwrap(Da,null,["number","number","number","number","number","number","number","number","number","number"])}function bm(a){const{backend:n,inputs:s,attrs:o}=a,{images:r}=s,{alignCorners:t,halfPixelCenters:i,size:c}=o,[d,u]=c,[e,m,b,p]=r.shape,f=[e,d,u,p],g=n.makeOutput(f,"float32");if(C(r.shape)===0)return g;let w=n.dataIdMap.get(r.dataId),k;w.dtype!=="float32"&&(k=Ne({backend:n,inputs:{x:r},attrs:{dtype:"float32"}}),w=n.dataIdMap.get(k.dataId));const y=w.id,_=n.dataIdMap.get(g.dataId).id;return ts(y,e,m,b,p,d,u,t?1:0,i?1:0,_),k!=null&&n.disposeData(k.dataId),g}const _m={kernelName:Da,backendName:"wasm",setupFunc:gm,kernelFunc:bm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ns;function ym(a){ns=a.wasm.cwrap(Na,null,["number","number","number","array","array","boolean"])}function Im(a){const{inputs:n,backend:s,attrs:o}=a,{images:r,dy:t}=n,{alignCorners:i}=o,c=s.makeOutput(r.shape,"float32");let d=s.dataIdMap.get(r.dataId),u;return d.dtype!=="float32"&&(u=Ne({backend:s,inputs:{x:r},attrs:{dtype:"float32"}}),d=s.dataIdMap.get(u.dataId)),ns(s.dataIdMap.get(r.dataId).id,s.dataIdMap.get(t.dataId).id,s.dataIdMap.get(c.dataId).id,new Uint8Array(new Int32Array(r.shape).buffer),new Uint8Array(new Int32Array(t.shape).buffer),i),u!=null&&s.disposeData(u.dataId),c}const wm={kernelName:Na,backendName:"wasm",setupFunc:ym,kernelFunc:Im};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let as;function km(a){as=a.wasm.cwrap(Fa,null,["number","array","number","array","number","number"])}function Sm(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{dims:t}=o,i=at(t,r.shape);if(r.shape.length===0)return Ft({inputs:{x:r},backend:s});const c=s.makeOutput(r.shape,r.dtype),d=s.dataIdMap.get(r.dataId).id,u=s.dataIdMap.get(c.dataId).id,e=new Uint8Array(new Int32Array(i).buffer),m=new Uint8Array(new Int32Array(r.shape).buffer);as(d,e,i.length,m,r.shape.length,u);const b=ue({inputs:{x:c},attrs:{shape:r.shape},backend:s});return s.disposeData(c.dataId),b}const Mm={kernelName:Fa,backendName:"wasm",kernelFunc:Sm,setupFunc:km};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let rs;function vm(a){rs=a.wasm.cwrap(Ca,null,["number","number","number","number","number","number","number","number","array","number","number"])}function Am(a){const{inputs:n,backend:s,attrs:o}=a,{image:r}=n,{radians:t,fillValue:i,center:c}=o,d=s.makeOutput(r.shape,r.dtype),u=s.dataIdMap.get(r.dataId).id,e=s.dataIdMap.get(d.dataId).id,[m,b,p,f]=r.shape,[g,w]=Fu(c,b,p),k=i===0,y=255,_=typeof i=="number"?[i,i,i,k?0:y]:[...i,y],v=new Uint8Array(new Int32Array(_).buffer);return rs(u,m,b,p,f,t,g,w,v,_.length,e),d}const xm={kernelName:Ca,backendName:"wasm",kernelFunc:Am,setupFunc:vm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dm=$(Cu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nm=$(Ru);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ss;function Fm(a){ss=a.wasm.cwrap(Ra,null,["number","number","number","number","number","number","array","number","number"])}function Cm(a){const{backend:n,inputs:s,attrs:o}=a,{indices:r,updates:t}=s,{shape:i}=o,c=n.makeOutput(i,t.dtype);if(C(i)===0)return c;const{sliceRank:d,numUpdates:u,sliceSize:e,strides:m,outputSize:b}=rn(t,r,i),f=n.dataIdMap.get(r.dataId).id,w=n.dataIdMap.get(t.dataId).id,k=new Uint8Array(new Int32Array(m).buffer),y=n.dataIdMap.get(c.dataId).id;return ss(f,w,V[t.dtype],d,u,e,k,b,y),c}const Rm={kernelName:Ra,backendName:"wasm",setupFunc:Fm,kernelFunc:Cm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let os;function Em(a){os=a.wasm.cwrap(Ea,null,["number","number","number","number","number","number","bool","number"])}function Pm(a){const{inputs:n,backend:s,attrs:o}=a,{sortedSequence:r,values:t}=n,{side:i}=o;if(r.dtype!==t.dtype)throw new Error(`SearchSorted error: sorted_sequence must have the same dtype as values. Got ${r.dtype} and ${t.dtype}`);const c=s.makeOutput(t.shape,"int32");function d(u){return s.dataIdMap.get(u.dataId).id}return os(d(r),d(t),r.shape[0],r.shape[1],t.shape[1],V[r.dtype],i==="left",d(c)),c}const Tm={kernelName:Ea,backendName:"wasm",setupFunc:Em,kernelFunc:Pm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let us;function Om(a){us=a.wasm.cwrap("SelectV2",null,["number","number","number","number","number"])}function Bm(a){const{inputs:n,backend:s}=a,{condition:o,t:r,e:t}=n,i=s.dataIdMap.get(o.dataId).id,c=s.dataIdMap.get(r.dataId).id,d=s.dataIdMap.get(t.dataId).id,u=s.makeOutput(r.shape,r.dtype),e=s.dataIdMap.get(u.dataId).id,m=o.shape.length,b=r.shape.length,p=m===0||m>1||b===1?1:C(r.shape.slice(1));return us(i,c,d,p,e),u}const Wm={kernelName:Eu,backendName:"wasm",kernelFunc:Bm,setupFunc:Om};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hm=$(Pu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let is;function $m(a){is=a.wasm.cwrap(Tu,null,["number","number"])}function Lm(a){const{backend:n,inputs:{x:s}}=a,o=n.dataIdMap.get(s.dataId).id,r=n.makeOutput(s.shape,s.dtype),t=n.dataIdMap.get(r.dataId).id;return C(r.shape)===0||is(o,t),r}const Vm={kernelName:"Sigmoid",backendName:"wasm",setupFunc:$m,kernelFunc:Lm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zm=$(Ou);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Um=$(Bu);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gm=$(Wu);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jm=$(Hu);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,{blockShape:t,paddings:i}=o,c=C(t),d=[[0,0]];d.push(...i);for(let R=1+t.length;R<r.shape.length;++R)d.push([0,0]);const u=Jr.kernelFunc({inputs:{x:r},backend:s,attrs:{paddings:d,constantValue:0}}),e=On(u.shape,t,c,!1),m=Bn(e.length,t.length,!1),b=Wn(u.shape,t,c,!1),g=ue({inputs:{x:u},backend:s,attrs:{shape:e}}),y=xe({inputs:{x:g},backend:s,attrs:{perm:m}}),E=ue({inputs:{x:y},backend:s,attrs:{shape:b}});return s.disposeData(u.dataId),s.disposeData(g.dataId),s.disposeData(y.dataId),E}const Xm={kernelName:$u,backendName:"wasm",kernelFunc:qm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let cs;function Km(a){cs=a.wasm.cwrap("SparseFillEmptyRows","number",["number","number","number","number","number","number","number","number","number","number","number","number"])}function Jm(a){const{backend:n,inputs:s}=a,{indices:o,values:r,denseShape:t,defaultValue:i}=s,c=o.shape[0],d=o.shape[1],u=n.readSync(t.dataId)[0],e=[c+u,d],m=n.dataIdMap.get(o.dataId).id,b=n.dataIdMap.get(r.dataId).id,p=n.dataIdMap.get(i.dataId).id,f=n.makeOutput(e,o.dtype),g=n.dataIdMap.get(f.dataId).id,w=n.makeOutput(e.slice(0,1),r.dtype),k=n.dataIdMap.get(w.dataId).id,y=n.makeOutput([u],"bool"),_=n.dataIdMap.get(y.dataId).id,v=n.makeOutput([c],o.dtype),E=n.dataIdMap.get(v.dataId).id,R=n.makeOutput([4],"int32"),B=n.dataIdMap.get(R.dataId).id,L=cs(m,b,V[r.dtype],c,u,d,p,g,k,_,E,B),z=n.readSync(R.dataId);let H;switch(z[0]){case 1:{H=Uu(z[1]);break}case 2:{H=zu(z[1],z[2]);break}case 3:H=Vu(z[1],z[2],z[3]);break;default:H=""}if(n.disposeData(R.dataId),H)throw n.disposeData(f.dataId),n.disposeData(w.dataId),n.disposeData(y.dataId),n.disposeData(v.dataId),new Error(H);let G=f,q=w;return L!==e[0]&&(G=Be({inputs:{x:f},attrs:{begin:0,size:[L,d]},backend:n}),q=Be({inputs:{x:w},attrs:{begin:0,size:L},backend:n}),n.disposeData(f.dataId),n.disposeData(w.dataId)),[G,q,y,v]}const Qm={kernelName:Lu,backendName:"wasm",setupFunc:Km,kernelFunc:Jm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ds;function Ym(a){ds=a.wasm.cwrap(Pa,null,["number","number","number","number","number","number","number"])}function Zm(a){const{backend:n,inputs:s}=a,{inputIndices:o,inputShape:r,newShape:t}=s;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(t.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${t.shape}`);const i=n.dataIdMap.get(o.dataId).id,c=n.dataIdMap.get(r.dataId).id,d=n.dataIdMap.get(t.dataId).id,u=o.shape[0],e=C(t.shape),m=n.makeOutput([u,e],o.dtype),b=n.dataIdMap.get(m.dataId).id,p=n.makeOutput([e],t.dtype),f=n.dataIdMap.get(p.dataId).id,g=n.makeOutput([3],"int32"),w=n.dataIdMap.get(g.dataId).id;ds(i,c,d,u,b,f,w);const k=n.readSync(g.dataId);let y;switch(k[0]){case 0:{y=Xu(k[1],k[2]);break}case 1:{y=qu(k[1],k[2]);break}case 2:y=Ku();break;case 3:{const _=Array.from(n.readSync(r.dataId)),v=Array.from(n.readSync(p.dataId));y=ju(_,v);break}case 4:{const _=Array.from(n.readSync(r.dataId)),v=Array.from(n.readSync(p.dataId));y=Gu(_,v);break}default:y=""}if(n.disposeData(g.dataId),y)throw n.disposeData(m.dataId),n.disposeData(p.dataId),new Error(y);return[m,p]}const ef={kernelName:Pa,backendName:"wasm",setupFunc:Ym,kernelFunc:Zm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ls;function ps(a){ls=a.wasm.cwrap("SparseSegmentReduction",null,["number","number","number","number","number","number","number","number","number"])}function ms(a,n){const{backend:s,inputs:o}=a,{data:r,indices:t,segmentIds:i}=o,c=t.shape[0],d=s.readSync(i.dataId,c-1,c)[0],e=c>0?d+1:0;if(e<0)throw new Error(kn());const m=r.shape.slice();m[0]=e;const b=s.dataIdMap.get(r.dataId).id,p=s.dataIdMap.get(t.dataId).id,f=s.dataIdMap.get(i.dataId).id,g=s.makeOutput(m,r.dtype),w=s.dataIdMap.get(g.dataId).id,k=s.makeOutput([4],"int32"),y=s.dataIdMap.get(k.dataId).id;ls(b,V[r.dtype],r.shape[0],p,f,w,y,n,0);const _=s.readSync(k.dataId);let v;switch(_[0]){case 0:{v=kn();break}case 1:{v=Yu();break}case 2:v=Qu(_[1],_[2]);break;case 3:v=Ju(_[1],_[2],_[3]);break;default:v=""}if(s.disposeData(k.dataId),v)throw s.disposeData(g.dataId),new Error(v);return g}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(a){return ms(a,!0)}const nf={kernelName:Zu,backendName:"wasm",setupFunc:ps,kernelFunc:tf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(a){return ms(a,!1)}const rf={kernelName:ei,backendName:"wasm",setupFunc:ps,kernelFunc:af};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fs;function sf(a){fs=a.wasm.cwrap(Ta,null,["number","number","number","number","number","number","number","number","array","number","number"])}function of(a){const{backend:n,inputs:s,attrs:o}=a,{sparseIndices:r,sparseValues:t,defaultValue:i}=s,{outputShape:c}=o,d=n.makeOutput(c,i.dtype);if(C(c)===0)return d;const{sliceRank:u,numUpdates:e,sliceSize:m,strides:b,outputSize:p}=rn(t,r,c),f=n.dataIdMap.get(r.dataId).id,g=n.dataIdMap.get(t.dataId).id,w=n.dataIdMap.get(i.dataId).id,k=new Uint8Array(new Int32Array(b).buffer),y=n.dataIdMap.get(d.dataId).id;return fs(f,g,t.shape.length,w,V[i.dtype],u,e,m,k,p,y),d}const uf={kernelName:Ta,backendName:"wasm",setupFunc:sf,kernelFunc:of};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(a){const{inputs:n,attrs:s,backend:o}=a,{x:r}=n,{numOrSizeSplits:t,axis:i}=s,c=at(i,r.shape)[0],d=ni(r,t,c),u=new Array(r.shape.length).fill(0),e=r.shape.slice();return d.map(m=>{const b=[...e];b[c]=m;const p=Be({inputs:{x:r},attrs:{begin:u,size:b},backend:o});return u[c]+=m,p})}const df={kernelName:ti,backendName:"wasm",kernelFunc:cf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lf=$(ai);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pf=$(ri);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mf=ee(si);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let hs;function ff(a){hs=a.wasm.cwrap(Oa,null,["number","number","number","number"])}function hf(a){const{backend:n,inputs:s,attrs:o}=a,{alpha:r}=o,{x:t}=s,i=n.dataIdMap.get(t.dataId).id,c=n.makeOutput(t.shape,t.dtype),d=n.dataIdMap.get(c.dataId).id;return hs(i,r,V[t.dtype],d),c}const gf={kernelName:Oa,backendName:"wasm",setupFunc:ff,kernelFunc:hf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let gs;function bf(a){gs=a.wasm.cwrap(Ba,null,["number","array","number","array","array","array","array","array","number","number"])}function _f(a){const{backend:n,inputs:s,attrs:o}=a,{x:r}=s,{begin:t,end:i,strides:c,beginMask:d,endMask:u,ellipsisMask:e,newAxisMask:m,shrinkAxisMask:b}=o,{finalShapeSparse:p,finalShape:f,isIdentity:g,sliceDim0:w,isSimpleSlice:k,begin:y,end:_,strides:v}=oi(r.shape,t,i,c,d,u,e,m,b);let E;if(g)E=ue({inputs:{x:r},backend:n,attrs:{shape:f}});else if(w||k){ge(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const R=ui(y,_,v),B=Be({inputs:{x:r},backend:n,attrs:{begin:y,size:R}});E=ue({inputs:{x:B},backend:n,attrs:{shape:f}}),n.disposeData(B.dataId)}else{const R=n.makeOutput(p,"float32"),B=n.dataIdMap.get(r.dataId).id,L=new Uint8Array(new Int32Array(fe(r.shape)).buffer),z=new Uint8Array(new Int32Array(y).buffer),H=new Uint8Array(new Int32Array(_).buffer),G=new Uint8Array(new Int32Array(v).buffer),q=new Uint8Array(new Int32Array(p).buffer),Q=new Uint8Array(new Int32Array(fe(p)).buffer),oe=n.dataIdMap.get(R.dataId).id;gs(B,L,r.shape.length,z,H,G,q,Q,p.length,oe),E=ue({inputs:{x:R},backend:n,attrs:{shape:f}}),n.disposeData(R.dataId)}return E}const yf={kernelName:Ba,backendName:"wasm",setupFunc:bf,kernelFunc:_f};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function If(a){const{backend:n,inputs:s,attrs:o}=a,{data:r,dataSplits:t}=s,{separator:i,nGramWidths:c,leftPad:d,rightPad:u,padWidth:e,preserveShortSequences:m}=o,b=n.readSync(r.dataId),p=n.readSync(t.dataId),[f,g]=ci(b,p,i,c,d,u,e,m),w=n.makeOutput([f.length],"string"),k=n.dataIdMap.get(w.dataId);k.stringBytes=f;const y=n.makeOutput(t.shape,"int32");return n.typedArrayFromHeap(y).set(g),[w,y]}const wf={kernelName:ii,backendName:"wasm",kernelFunc:If};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(a){const{backend:n,inputs:s,attrs:o}=a,{input:r,delimiter:t}=s,{skipEmpty:i}=o,c=n.readSync(r.dataId),d=n.readSync(t.dataId),[u,e,m]=li(c,d[0],i),b=e.length,p=n.makeOutput([b,2],"int32");n.typedArrayFromHeap(p).set(u);const g=n.makeOutput([b],"string"),w=n.dataIdMap.get(g.dataId);w.stringBytes=e;const k=n.makeOutput([2],"int32");return n.typedArrayFromHeap(k).set(m),[p,g,k]}const Sf={kernelName:di,backendName:"wasm",kernelFunc:kf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(a){const{backend:n,inputs:s,attrs:o}=a,{input:r}=s,{numBuckets:t}=o,i=n.readSync(r.dataId),c=mi(i,t),d=n.makeOutput(r.shape,"int32");return n.typedArrayFromHeap(d).set(c),d}const vf={kernelName:pi,backendName:"wasm",kernelFunc:Mf};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Af=ee(fi);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let bs;function xf(a){bs=a.wasm.cwrap(Wa,null,["number","number","number","number"])}function Df(a){const{backend:n,inputs:s,attrs:o}=a,{axis:r,keepDims:t}=o,{x:i}=s,c=n.dataIdMap.get(i.dataId).id;let d=c,u=i;const{transposed:e,axes:m,originalAxes:b,inputWasTransposed:p}=De(i,r,n);let f=m;if(p){const _=n.dataIdMap.get(e.dataId).id;_!==c&&(u=e,d=_,f=Xe(f.length,u.shape.length))}Me("sum",f,u.shape.length);const[g,w]=We(u.shape,f),k=C(w),y=n.makeOutput(g,u.dtype);if(C(u.shape)!==0){const _=n.dataIdMap.get(y.dataId).id;bs(d,k,V[y.dtype],_)}if(p&&n.disposeData(e.dataId),t){const _=He(y.shape,b);y.shape=_}return y}const Nf={kernelName:Wa,backendName:"wasm",setupFunc:xf,kernelFunc:Df};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ff=$(hi);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cf=$(gi);/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let _s;function Rf(a){_s=a.wasm.cwrap(Ha,null,["number","number","number","number","number","number","array","number","number","number"])}function Ef(a){const{backend:n,inputs:s,attrs:o}=a,{tensor:r,indices:t,updates:i}=s,c=n.makeOutput(r.shape,r.dtype);if(C(r.shape)===0)return c;const{sliceRank:d,numUpdates:u,sliceSize:e,strides:m,outputSize:b}=rn(i,t,r.shape),f=n.dataIdMap.get(t.dataId).id,w=n.dataIdMap.get(i.dataId).id,y=n.dataIdMap.get(r.dataId).id,_=new Uint8Array(new Int32Array(m).buffer),v=n.dataIdMap.get(c.dataId).id;return _s(f,w,V[i.dtype],d,u,e,_,b,v,y),c}const Pf={kernelName:Ha,backendName:"wasm",setupFunc:Rf,kernelFunc:Ef};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ys;function Tf(a){ys=a.wasm.cwrap($a,null,["number","array","number","array","number","number"])}function Of(a){const{inputs:n,backend:s,attrs:o}=a,{x:r}=n,t=s.dataIdMap.get(r.dataId).id,{reps:i}=o,c=new Array(r.shape.length);for(let b=0;b<c.length;b++)c[b]=r.shape[b]*i[b];const d=new Uint8Array(new Int32Array(r.shape).buffer),u=new Uint8Array(new Int32Array(c).buffer),e=s.makeOutput(c,r.dtype),m=s.dataIdMap.get(e.dataId).id;return ys(t,d,r.shape.length,u,c.length,V[e.dtype],m),e}const Bf={kernelName:$a,backendName:"wasm",setupFunc:Tf,kernelFunc:Of};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Is;function Wf(a){Is=a.wasm.cwrap(La,null,["number","array","number","number","number","bool","number","number"])}const Hf=({inputs:a,backend:n,attrs:s})=>{const{x:o}=a,{k:r,sorted:t}=s,i=n.dataIdMap.get(o.dataId).id,c=new Uint8Array(new Int32Array(o.shape).buffer),d=o.shape.slice();d[d.length-1]=r;const u=n.makeOutput(d,o.dtype),e=n.dataIdMap.get(u.dataId).id,m=n.makeOutput(d,"int32"),b=n.dataIdMap.get(m.dataId).id;return Is(i,c,o.shape.length,V[o.dtype],r,t,e,b),[u,m]},$f={kernelName:La,backendName:"wasm",setupFunc:Wf,kernelFunc:Hf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ws;function Lf(a){ws=a.wasm.cwrap(Va,null,["number","number","bool","number","number","number","number","number","number","array","number","array","number","number","number","number","number"])}function Vf(a){const{backend:n,inputs:s,attrs:o}=a,{image:r,transforms:t}=s,{interpolation:i,fillMode:c,fillValue:d,outputShape:u}=o,[e,m,b,p]=r.shape,[f,g]=u??[m,b],w=[e,f,g,p],k=new Uint8Array(new Int32Array(fe(r.shape)).buffer),y=new Uint8Array(new Int32Array(fe(w)).buffer),_=n.makeOutput(w,r.dtype),v=n.dataIdMap.get(_.dataId).id,R=n.dataIdMap.get(r.dataId).id,L=n.dataIdMap.get(t.dataId).id,z=i==="nearest"?1:2;let H;switch(c){case"constant":H=1;break;case"reflect":H=2;break;case"wrap":H=3;break;case"nearest":H=4;break;default:H=1;break}return ws(R,L,t.shape[0]>1,e,f,g,p,b,m,k,r.shape.length-1,y,w.length-1,z,H,d,v),_}const zf={kernelName:Va,backendName:"wasm",setupFunc:Lf,kernelFunc:Vf};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uf(a){const{inputs:n,attrs:s,backend:o}=a,{axis:r}=s,{x:t}=n,{outputValues:i,outputShape:c,indices:d}=_i(o.readSync(t.dataId),r,t.shape,t.dtype);return[o.makeOutput(c,t.dtype,void 0,i),o.makeOutput([d.length],"int32",void 0,d)]}const Gf={kernelName:bi,backendName:"wasm",kernelFunc:Uf};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(a){const{inputs:n,backend:s,attrs:o}=a,{value:r}=n;let{axis:t}=o;t<0&&(t+=r.shape.length);const i=r.shape[t],c=r.shape.length,d=new Array(c-1);let u=0;for(let p=0;p<c;p++)p!==t&&(d[u++]=r.shape[p]);const e=new Array(i),m=new Array(c).fill(0),b=r.shape.slice();b[t]=1;for(let p=0;p<e.length;p++)m[t]=p,e[p]=Be({inputs:{x:r},attrs:{begin:m,size:b},backend:s});return e.map(({dataId:p,dtype:f})=>({dataId:p,dtype:f,shape:d}))}const qf={kernelName:yi,backendName:"wasm",kernelFunc:jf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xf(a){const{inputs:{x:n},backend:s}=a,o=s.makeOutput(n.shape,n.dtype);return s.typedArrayFromHeap(o).fill(0),o}const Kf={kernelName:Ii,backendName:"wasm",kernelFunc:Xf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jf=[$i,Li,Vi,zi,Ui,qi,tc,rc,sc,oc,uc,ic,cc,dc,lc,fc,Sc,bc,Ic,xc,Ec,Oc,Bc,Hc,$c,Lc,Uc,Gc,Xc,Qc,ed,ad,od,ud,id,ld,fd,bd,Id,Sd,Ad,Nd,Rd,Td,Wd,Hd,Vd,Ud,Gd,jd,qd,Xd,Kd,Yd,Zd,el,al,ol,cl,pl,hl,bl,yl,Xi,Il,wl,kl,vl,xl,Nl,Rl,Pl,El,Ol,Bl,Hl,Ll,Ul,ql,Jl,Ql,ep,ap,op,cp,pp,hp,_p,yp,kp,xp,Dp,Np,Fp,Ep,Op,Hp,Lp,Up,jp,Xp,Jr,Qp,em,am,sm,om,um,im,cm,Mc,pm,hm,_m,wm,Mm,xm,Dm,Nm,Rm,Tm,Wm,Hm,Vm,zm,Um,Gm,Cc,Mp,jm,Xm,Qm,ef,nf,rf,uf,df,lf,pf,mf,gf,yf,wf,Sf,vf,Af,Nf,Ff,Cf,Pf,Bf,$f,zf,Yi,Gf,qf,Kf];for(const a of Jf)wi(a);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zt=Xt();Zt.registerFlag("WASM_HAS_SIMD_SUPPORT",async()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))}catch{return!1}});Zt.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT",async()=>{if(Zt.get("IS_NODE"))return!1;try{return new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}});var ks={exports:{}};(function(a,n){var s=(()=>{var o=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(o=o||__filename),function(r){r=r||{};function t(){return U.buffer!=Y&&be(U.buffer),ve}function i(){return U.buffer!=Y&&be(U.buffer),ot}function c(){return U.buffer!=Y&&be(U.buffer),ut}function d(){return U.buffer!=Y&&be(U.buffer),Fe}function u(){return U.buffer!=Y&&be(U.buffer),it}var e=typeof r<"u"?r:{},m,b;e.ready=new Promise(function(l,h){m=l,b=h});var p;typeof process<"u"&&process.listeners&&(p={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var f=Object.assign({},e),g=(l,h)=>{throw h},w=typeof window=="object",k=typeof importScripts=="function",y=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",_=e.ENVIRONMENT_IS_PTHREAD||!1,v="";function E(l){return e.locateFile?e.locateFile(l,v):v+l}var R,B,L;function z(l){if(l instanceof Ie)return;X("exiting due to exception: "+l)}if(y){var H=Oe,G=Oe;k?v=G.dirname(v)+"/":v=__dirname+"/",R=(h,M)=>(h=ze(h)?new URL(h):G.normalize(h),H.readFileSync(h,M?void 0:"utf8")),L=h=>{var M=R(h,!0);return M.buffer||(M=new Uint8Array(M)),M},B=(h,M,F)=>{h=ze(h)?new URL(h):G.normalize(h),H.readFile(h,function(P,O){P?F(P):M(O.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(h){if(!(h instanceof Ie))throw h}),process.on("unhandledRejection",function(h){throw h}),g=(h,M)=>{if(Ve())throw process.exitCode=h,M;z(M),process.exit(h)},e.inspect=function(){return"[Emscripten Module object]"};let l;try{l=Oe}catch(h){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),h}vn.Worker=l.Worker}else(w||k)&&(k?v=self.location.href:typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),typeof o<"u"&&o&&(v=o),v.indexOf("blob:")!==0?v=v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):v="",y||(R=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.send(null),h.responseText},k&&(L=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),B=(l,h,M)=>{var F=new XMLHttpRequest;F.open("GET",l,!0),F.responseType="arraybuffer",F.onload=()=>{if(F.status==200||F.status==0&&F.response){h(F.response);return}M()},F.onerror=M,F.send(null)}));y&&typeof performance>"u"&&(vn.performance=Oe.performance);var q=console.log.bind(console),Q=console.warn.bind(console);y&&(q=l=>H.writeSync(1,l+`
`),Q=l=>H.writeSync(2,l+`
`));var oe=e.print||q,X=e.printErr||Q;Object.assign(e,f),f=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&(g=e.quit);var te;e.wasmBinary&&(te=e.wasmBinary);var le=e.noExitRuntime||!0;typeof WebAssembly!="object"&&Ee("no native wasm support detected");var U,he,ie=!1,ce;function _e(l,h){l||Ee(h)}var ne=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function $e(l,h,M){h>>>=0;for(var F=h+M,P=h;l[P]&&!(P>=F);)++P;if(P-h>16&&l.buffer&&ne)return ne.decode(l.buffer instanceof SharedArrayBuffer?l.slice(h,P):l.subarray(h,P));for(var O="";h<P;){var x=l[h++];if(!(x&128)){O+=String.fromCharCode(x);continue}var D=l[h++]&63;if((x&224)==192){O+=String.fromCharCode((x&31)<<6|D);continue}var J=l[h++]&63;if((x&240)==224?x=(x&15)<<12|D<<6|J:x=(x&7)<<18|D<<12|J<<6|l[h++]&63,x<65536)O+=String.fromCharCode(x);else{var me=x-65536;O+=String.fromCharCode(55296|me>>10,56320|me&1023)}}return O}function Le(l,h){return l>>>=0,l?$e(i(),l,h):""}function Ke(l,h,M,F){if(M>>>=0,!(F>0))return 0;for(var P=M,O=M+F-1,x=0;x<l.length;++x){var D=l.charCodeAt(x);if(D>=55296&&D<=57343){var J=l.charCodeAt(++x);D=65536+((D&1023)<<10)|J&1023}if(D<=127){if(M>=O)break;h[M++>>>0]=D}else if(D<=2047){if(M+1>=O)break;h[M++>>>0]=192|D>>6,h[M++>>>0]=128|D&63}else if(D<=65535){if(M+2>=O)break;h[M++>>>0]=224|D>>12,h[M++>>>0]=128|D>>6&63,h[M++>>>0]=128|D&63}else{if(M+3>=O)break;h[M++>>>0]=240|D>>18,h[M++>>>0]=128|D>>12&63,h[M++>>>0]=128|D>>6&63,h[M++>>>0]=128|D&63}}return h[M>>>0]=0,M-P}function Je(l,h,M){return Ke(l,i(),h,M)}var Y,ve,ot,ut,Fe,it;_&&(Y=e.buffer);function be(l){Y=l,e.HEAP8=ve=new Int8Array(l),e.HEAP16=new Int16Array(l),e.HEAP32=ut=new Int32Array(l),e.HEAPU8=ot=new Uint8Array(l),e.HEAPU16=new Uint16Array(l),e.HEAPU32=Fe=new Uint32Array(l),e.HEAPF32=new Float32Array(l),e.HEAPF64=it=new Float64Array(l)}var Ce=e.INITIAL_MEMORY||16777216;if(_)U=e.wasmMemory,Y=e.buffer;else if(e.wasmMemory)U=e.wasmMemory;else if(U=new WebAssembly.Memory({initial:Ce/65536,maximum:65536,shared:!0}),!(U.buffer instanceof SharedArrayBuffer))throw X("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),y&&X("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");U&&(Y=U.buffer),Ce=Y.byteLength,be(Y);var ae,Qe=[],ct=[],dt=[];function Ve(){return le}function Ye(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Rt(e.preRun.shift());j(Qe)}function lt(){_||j(ct)}function pt(){if(!_){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Pt(e.postRun.shift());j(dt)}}function Rt(l){Qe.unshift(l)}function Et(l){ct.unshift(l)}function Pt(l){dt.unshift(l)}var ye=0,Re=null;function Tt(l){ye++,e.monitorRunDependencies&&e.monitorRunDependencies(ye)}function Ot(l){if(ye--,e.monitorRunDependencies&&e.monitorRunDependencies(ye),ye==0&&Re){var h=Re;Re=null,h()}}function Ee(l){e.onAbort&&e.onAbort(l),l="Aborted("+l+")",X(l),ie=!0,ce=1,l+=". Build with -sASSERTIONS for more info.";var h=new WebAssembly.RuntimeError(l);throw b(h),h}var Bt="data:application/octet-stream;base64,";function Ze(l){return l.startsWith(Bt)}function ze(l){return l.startsWith("file://")}var se;se="tfjs-backend-wasm-threaded-simd.wasm",Ze(se)||(se=E(se));function mt(l){try{if(l==se&&te)return new Uint8Array(te);if(L)return L(l);throw"both async and sync fetching of the wasm failed"}catch(h){Ee(h)}}function ft(){if(!te&&(w||k)){if(typeof fetch=="function"&&!ze(se))return fetch(se,{credentials:"same-origin"}).then(function(l){if(!l.ok)throw"failed to load wasm binary file at '"+se+"'";return l.arrayBuffer()}).catch(function(){return mt(se)});if(B)return new Promise(function(l,h){B(se,function(M){l(new Uint8Array(M))},h)})}return Promise.resolve().then(function(){return mt(se)})}function ht(){var l={env:pn,wasi_snapshot_preview1:pn};function h(x,D){var J=x.exports;if(e.asm=J,we(e.asm._emscripten_tls_init),ae=e.asm.__indirect_function_table,Et(e.asm.__wasm_call_ctors),he=D,!_){var me=A.unusedWorkers.length;A.unusedWorkers.forEach(function(ke){A.loadWasmModuleToWorker(ke,function(){--me||Ot()})})}}_||Tt();function M(x){h(x.instance,x.module)}function F(x){return ft().then(function(D){return WebAssembly.instantiate(D,l)}).then(function(D){return D}).then(x,function(D){X("failed to asynchronously prepare wasm: "+D),Ee(D)})}function P(){return!te&&typeof WebAssembly.instantiateStreaming=="function"&&!Ze(se)&&!ze(se)&&!y&&typeof fetch=="function"?fetch(se,{credentials:"same-origin"}).then(function(x){var D=WebAssembly.instantiateStreaming(x,l);return D.then(M,function(J){return X("wasm streaming compile failed: "+J),X("falling back to ArrayBuffer instantiation"),F(M)})}):F(M)}if(e.instantiateWasm)try{var O=e.instantiateWasm(l,h);return O}catch(x){X("Module.instantiateWasm callback failed with error: "+x),b(x)}return P().catch(b),{}}var gt={};function Ie(l){this.name="ExitStatus",this.message="Program terminated with exit("+l+")",this.status=l}function Ue(l){var h=A.pthreads[l];delete A.pthreads[l],h.terminate(),Lt(l),A.runningWorkers.splice(A.runningWorkers.indexOf(h),1),h.pthread_ptr=0}function bt(l){var h=A.pthreads[l];h.postMessage({cmd:"cancel"})}function Pe(l){var h=A.pthreads[l];_e(h),A.returnWorkerToPool(h)}function Te(l){var h=A.getNewWorker();if(!h)return 6;A.runningWorkers.push(h),A.pthreads[l.pthread_ptr]=h,h.pthread_ptr=l.pthread_ptr;var M={cmd:"run",start_routine:l.startRoutine,arg:l.arg,pthread_ptr:l.pthread_ptr};return h.runPthread=()=>{y&&h.ref(),h.postMessage(M,l.transferList),delete h.runPthread},h.loaded&&h.runPthread(),0}function _t(l){if(_)return Ge(1,1,l);ce=l,Ve()||(A.terminateAllThreads(),e.onExit&&e.onExit(l),ie=!0),g(l,new Ie(l))}function I(l,h){if(ce=l,!h&&_)throw W(l),"unwind";_t(l)}var S=I;function N(l){if(l instanceof Ie||l=="unwind")return ce;g(1,l)}var A={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){_?A.initWorker():A.initMainThread()},initMainThread:function(){for(var l=8;l--;)A.allocateUnusedWorker()},initWorker:function(){le=!1},setExitStatus:function(l){ce=l},terminateAllThreads:function(){for(var l of Object.values(A.pthreads))A.returnWorkerToPool(l);for(var l of A.unusedWorkers)l.terminate();A.unusedWorkers=[]},returnWorkerToPool:function(l){var h=l.pthread_ptr;delete A.pthreads[h],A.unusedWorkers.push(l),A.runningWorkers.splice(A.runningWorkers.indexOf(l),1),l.pthread_ptr=0,y&&l.unref(),Lt(h)},receiveObjectTransfer:function(l){},threadInitTLS:function(){A.tlsInitFunctions.forEach(l=>l())},loadWasmModuleToWorker:function(l,h){l.onmessage=O=>{var x=O.data,D=x.cmd;if(l.pthread_ptr&&(A.currentProxiedOperationCallerThread=l.pthread_ptr),x.targetThread&&x.targetThread!=kt()){var J=A.pthreads[x.targetThread];J?J.postMessage(x,x.transferList):X('Internal error! Worker sent a message "'+D+'" to target pthread '+x.targetThread+", but that thread no longer exists!"),A.currentProxiedOperationCallerThread=void 0;return}D==="processProxyingQueue"?Wt(x.queue):D==="spawnThread"?Te(x):D==="cleanupThread"?Pe(x.thread):D==="killThread"?Ue(x.thread):D==="cancelThread"?bt(x.thread):D==="loaded"?(l.loaded=!0,y&&l.unref(),h&&h(l),l.runPthread&&l.runPthread()):D==="print"?oe("Thread "+x.threadId+": "+x.text):D==="printErr"?X("Thread "+x.threadId+": "+x.text):D==="alert"?alert("Thread "+x.threadId+": "+x.text):x.target==="setimmediate"?l.postMessage(x):D==="callHandler"?e[x.handler](...x.args):D&&X("worker sent an unknown command "+D),A.currentProxiedOperationCallerThread=void 0},l.onerror=O=>{var x="worker sent an error!";throw X(x+" "+O.filename+":"+O.lineno+": "+O.message),O},y&&(l.on("message",function(O){l.onmessage({data:O})}),l.on("error",function(O){l.onerror(O)}),l.on("detachedExit",function(){}));var M=[],F=["onExit","onAbort","print","printErr"];for(var P of F)e.hasOwnProperty(P)&&M.push(P);l.postMessage({cmd:"load",handlers:M,urlOrBlob:e.mainScriptUrlOrBlob||o,wasmMemory:U,wasmModule:he})},allocateUnusedWorker:function(){var l,h=E("tfjs-backend-wasm-threaded-simd.worker.js");l=new Worker(h),A.unusedWorkers.push(l)},getNewWorker:function(){return A.unusedWorkers.length==0&&(A.allocateUnusedWorker(),A.loadWasmModuleToWorker(A.unusedWorkers[0])),A.unusedWorkers.pop()}};e.PThread=A;function j(l){for(;l.length>0;)l.shift()(e)}function K(){var l=kt(),h=c()[l+52>>>2],M=c()[l+56>>>2],F=h-M;bn(h,F),St(h)}e.establishStackSpace=K;function W(l){if(_)return Ge(2,0,l);try{S(l)}catch(h){N(h)}}var T=[];function Z(l){var h=T[l];return h||(l>=T.length&&(T.length=l+1),T[l]=h=ae.get(l)),h}function pe(l,h){var M=Z(l)(h);Ve()?A.setExitStatus(M):gn(M)}e.invokeEntryPoint=pe;function we(l){A.tlsInitFunctions.push(l)}function yt(l){mn(l,!k,1,!w),A.threadInitTLS()}function et(l){_?postMessage({cmd:"cleanupThread",thread:l}):Pe(l)}function It(l,h,M,F){return _?Ge(3,1,l,h,M,F):re(l,h,M,F)}function re(l,h,M,F){if(typeof SharedArrayBuffer>"u")return X("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var P=[],O=0;if(_&&(P.length===0||O))return It(l,h,M,F);var x={startRoutine:M,pthread_ptr:l,arg:F,transferList:P};return _?(x.cmd="spawnThread",postMessage(x,P),0):Te(x)}function Ae(){return 65536}var wt=!0;function Ns(){return wt}function Wt(l){Atomics.store(c(),l>>2,1),kt()&&hn(l),Atomics.compareExchange(c(),l>>2,1,0)}e.executeNotifiedProxyingQueue=Wt;function Fs(l,h,M,F){if(l==h)setTimeout(()=>Wt(F));else if(_)postMessage({targetThread:l,cmd:"processProxyingQueue",queue:F});else{var P=A.pthreads[l];if(!P)return;P.postMessage({cmd:"processProxyingQueue",queue:F})}return 1}function Cs(l,h,M){return-1}function Rs(){Ee("")}function tt(l){tt.shown||(tt.shown={}),tt.shown[l]||(tt.shown[l]=1,y&&(l="warning: "+l),X(l))}function Es(){y||k||tt("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")}function Ps(){return Date.now()}function on(){return 4294901760}function Ts(){return on()}var Ht;y?Ht=()=>{var l=process.hrtime();return l[0]*1e3+l[1]/1e6}:Ht=()=>performance.timeOrigin+performance.now();function Os(l,h,M){i().copyWithin(l>>>0,h>>>0,h+M>>>0)}function Bs(){return y?Oe.cpus().length:navigator.hardwareConcurrency}function Ws(l){var h=Vt(),M=l();return St(h),M}function Ge(l,h){var M=arguments.length-2,F=arguments;return Ws(()=>{for(var P=M,O=Mt(P*8),x=O>>3,D=0;D<M;D++){var J=F[2+D];u()[x+D>>>0]=J}return fn(l,P,O,h)})}var $t=[];function Hs(l,h,M){$t.length=h;for(var F=M>>3,P=0;P<h;P++)$t[P]=u()[F+P>>>0];var O=l<0,x=O?gt[-l-1]:Xs[l];return x.apply(null,$t)}function $s(l){try{return U.grow(l-Y.byteLength+65535>>>16),be(U.buffer),1}catch{}}function Ls(l){var h=i().length;if(l=l>>>0,l<=h)return!1;var M=on();if(l>M)return!1;let F=(J,me)=>J+(me-J%me)%me;for(var P=1;P<=4;P*=2){var O=h*(1+.2/P);O=Math.min(O,l+100663296);var x=Math.min(M,F(Math.max(l,O),65536)),D=$s(x);if(D)return!0}return!1}function Vs(){throw"unwind"}function un(l){return _?Ge(4,1,l):52}function cn(l,h,M,F,P){return _?Ge(5,1,l,h,M,F,P):70}var zs=[null,[],[]];function Us(l,h){var M=zs[l];h===0||h===10?((l===1?oe:X)($e(M,0)),M.length=0):M.push(h)}function dn(l,h,M,F){if(_)return Ge(6,1,l,h,M,F);for(var P=0,O=0;O<M;O++){var x=d()[h>>>2],D=d()[h+4>>>2];h+=8;for(var J=0;J<D;J++)Us(l,i()[x+J>>>0]);P+=D}return d()[F>>>2]=P,0}function ln(l){var h=e["_"+l];return h}function Gs(l,h){t().set(l,h>>>0)}function js(l,h,M,F,P){var O={string:de=>{var je=0;if(de!=null&&de!==0){var In=(de.length<<2)+1;je=Mt(In),Je(de,je,In)}return je},array:de=>{var je=Mt(de.length);return Gs(de,je),je}};function x(de){return h==="string"?Le(de):h==="boolean"?!!de:de}var D=ln(l),J=[],me=0;if(F)for(var ke=0;ke<F.length;ke++){var yn=O[M[ke]];yn?(me===0&&(me=Vt()),J[ke]=yn(F[ke])):J[ke]=F[ke]}var zt=D.apply(null,J);function Js(de){return me!==0&&St(me),x(de)}return zt=Js(zt),zt}function qs(l,h,M,F){M=M||[];var P=M.every(x=>x==="number"||x==="boolean"),O=h!=="string";return O&&P&&!F?ln(l):function(){return js(l,h,M,arguments)}}A.init();var Xs=[null,_t,W,It,un,cn,dn],pn={__emscripten_init_main_thread_js:yt,__emscripten_thread_cleanup:et,__pthread_create_js:re,_emscripten_default_pthread_stack_size:Ae,_emscripten_get_now_is_monotonic:Ns,_emscripten_notify_task_queue:Fs,_emscripten_set_offscreencanvas_size:Cs,abort:Rs,emscripten_check_blocking_allowed:Es,emscripten_date_now:Ps,emscripten_get_heap_max:Ts,emscripten_get_now:Ht,emscripten_memcpy_big:Os,emscripten_num_logical_cores:Bs,emscripten_receive_on_main_thread_js:Hs,emscripten_resize_heap:Ls,emscripten_unwind_to_js_event_loop:Vs,exit:S,fd_close:un,fd_seek:cn,fd_write:dn,memory:U||e.wasmMemory};ht(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)},e._init=function(){return(e._init=e.asm.init).apply(null,arguments)},e._init_with_threads_count=function(){return(e._init_with_threads_count=e.asm.init_with_threads_count).apply(null,arguments)},e._get_threads_count=function(){return(e._get_threads_count=e.asm.get_threads_count).apply(null,arguments)},e._register_tensor=function(){return(e._register_tensor=e.asm.register_tensor).apply(null,arguments)},e._dispose_data=function(){return(e._dispose_data=e.asm.dispose_data).apply(null,arguments)},e._dispose=function(){return(e._dispose=e.asm.dispose).apply(null,arguments)},e._Abs=function(){return(e._Abs=e.asm.Abs).apply(null,arguments)},e._Acos=function(){return(e._Acos=e.asm.Acos).apply(null,arguments)},e._Acosh=function(){return(e._Acosh=e.asm.Acosh).apply(null,arguments)},e._Add=function(){return(e._Add=e.asm.Add).apply(null,arguments)},e._AddN=function(){return(e._AddN=e.asm.AddN).apply(null,arguments)},e._All=function(){return(e._All=e.asm.All).apply(null,arguments)},e._Any=function(){return(e._Any=e.asm.Any).apply(null,arguments)},e._ArgMax=function(){return(e._ArgMax=e.asm.ArgMax).apply(null,arguments)},e._ArgMin=function(){return(e._ArgMin=e.asm.ArgMin).apply(null,arguments)},e._Asin=function(){return(e._Asin=e.asm.Asin).apply(null,arguments)},e._Asinh=function(){return(e._Asinh=e.asm.Asinh).apply(null,arguments)},e._Atan=function(){return(e._Atan=e.asm.Atan).apply(null,arguments)},e._Atan2=function(){return(e._Atan2=e.asm.Atan2).apply(null,arguments)},e._Atanh=function(){return(e._Atanh=e.asm.Atanh).apply(null,arguments)},e._AvgPool=function(){return(e._AvgPool=e.asm.AvgPool).apply(null,arguments)},e._AvgPool3D=function(){return(e._AvgPool3D=e.asm.AvgPool3D).apply(null,arguments)},e._AvgPool3DGrad=function(){return(e._AvgPool3DGrad=e.asm.AvgPool3DGrad).apply(null,arguments)},e._AvgPoolGrad=function(){return(e._AvgPoolGrad=e.asm.AvgPoolGrad).apply(null,arguments)},e._BatchMatMul=function(){return(e._BatchMatMul=e.asm.BatchMatMul).apply(null,arguments)},e._Bincount=function(){return(e._Bincount=e.asm.Bincount).apply(null,arguments)},e._BitwiseAnd=function(){return(e._BitwiseAnd=e.asm.BitwiseAnd).apply(null,arguments)},e._Ceil=function(){return(e._Ceil=e.asm.Ceil).apply(null,arguments)},e._ClipByValue=function(){return(e._ClipByValue=e.asm.ClipByValue).apply(null,arguments)},e._Conv2D=function(){return(e._Conv2D=e.asm.Conv2D).apply(null,arguments)},e._Conv2DBackpropInput=function(){return(e._Conv2DBackpropInput=e.asm.Conv2DBackpropInput).apply(null,arguments)},e._Conv3D=function(){return(e._Conv3D=e.asm.Conv3D).apply(null,arguments)},e._Conv3DBackpropFilterV2=function(){return(e._Conv3DBackpropFilterV2=e.asm.Conv3DBackpropFilterV2).apply(null,arguments)},e._Conv3DBackpropInputV2=function(){return(e._Conv3DBackpropInputV2=e.asm.Conv3DBackpropInputV2).apply(null,arguments)},e._Cos=function(){return(e._Cos=e.asm.Cos).apply(null,arguments)},e._Cosh=function(){return(e._Cosh=e.asm.Cosh).apply(null,arguments)},e._CropAndResize=function(){return(e._CropAndResize=e.asm.CropAndResize).apply(null,arguments)},e._Cumprod=function(){return(e._Cumprod=e.asm.Cumprod).apply(null,arguments)},e._Cumsum=function(){return(e._Cumsum=e.asm.Cumsum).apply(null,arguments)},e._DenseBincount=function(){return(e._DenseBincount=e.asm.DenseBincount).apply(null,arguments)},e._DepthToSpace=function(){return(e._DepthToSpace=e.asm.DepthToSpace).apply(null,arguments)},e._DepthwiseConv2dNative=function(){return(e._DepthwiseConv2dNative=e.asm.DepthwiseConv2dNative).apply(null,arguments)},e._Diag=function(){return(e._Diag=e.asm.Diag).apply(null,arguments)},e._Dilation2D=function(){return(e._Dilation2D=e.asm.Dilation2D).apply(null,arguments)},e._Dilation2DBackpropFilter=function(){return(e._Dilation2DBackpropFilter=e.asm.Dilation2DBackpropFilter).apply(null,arguments)},e._Dilation2DBackpropInput=function(){return(e._Dilation2DBackpropInput=e.asm.Dilation2DBackpropInput).apply(null,arguments)},e._Elu=function(){return(e._Elu=e.asm.Elu).apply(null,arguments)},e._EluGrad=function(){return(e._EluGrad=e.asm.EluGrad).apply(null,arguments)},e._Equal=function(){return(e._Equal=e.asm.Equal).apply(null,arguments)},e._Erf=function(){return(e._Erf=e.asm.Erf).apply(null,arguments)},e._Exp=function(){return(e._Exp=e.asm.Exp).apply(null,arguments)},e._Expm1=function(){return(e._Expm1=e.asm.Expm1).apply(null,arguments)},e._FlipLeftRight=function(){return(e._FlipLeftRight=e.asm.FlipLeftRight).apply(null,arguments)},e._Floor=function(){return(e._Floor=e.asm.Floor).apply(null,arguments)},e._FloorDiv=function(){return(e._FloorDiv=e.asm.FloorDiv).apply(null,arguments)},e._FusedBatchNorm=function(){return(e._FusedBatchNorm=e.asm.FusedBatchNorm).apply(null,arguments)},e._FusedConv2D=function(){return(e._FusedConv2D=e.asm.FusedConv2D).apply(null,arguments)},e._FusedDepthwiseConv2D=function(){return(e._FusedDepthwiseConv2D=e.asm.FusedDepthwiseConv2D).apply(null,arguments)},e._Gather=function(){return(e._Gather=e.asm.Gather).apply(null,arguments)},e._GatherNd=function(){return(e._GatherNd=e.asm.GatherNd).apply(null,arguments)},e._Greater=function(){return(e._Greater=e.asm.Greater).apply(null,arguments)},e._GreaterEqual=function(){return(e._GreaterEqual=e.asm.GreaterEqual).apply(null,arguments)},e._IsFinite=function(){return(e._IsFinite=e.asm.IsFinite).apply(null,arguments)},e._IsInf=function(){return(e._IsInf=e.asm.IsInf).apply(null,arguments)},e._IsNan=function(){return(e._IsNan=e.asm.IsNan).apply(null,arguments)},e._LRN=function(){return(e._LRN=e.asm.LRN).apply(null,arguments)},e._LRNGrad=function(){return(e._LRNGrad=e.asm.LRNGrad).apply(null,arguments)},e._LeakyRelu=function(){return(e._LeakyRelu=e.asm.LeakyRelu).apply(null,arguments)},e._Less=function(){return(e._Less=e.asm.Less).apply(null,arguments)},e._LessEqual=function(){return(e._LessEqual=e.asm.LessEqual).apply(null,arguments)},e._LinSpace=function(){return(e._LinSpace=e.asm.LinSpace).apply(null,arguments)},e._Log=function(){return(e._Log=e.asm.Log).apply(null,arguments)},e._Log1p=function(){return(e._Log1p=e.asm.Log1p).apply(null,arguments)},e._LogicalAnd=function(){return(e._LogicalAnd=e.asm.LogicalAnd).apply(null,arguments)},e._LogicalNot=function(){return(e._LogicalNot=e.asm.LogicalNot).apply(null,arguments)},e._LogicalOr=function(){return(e._LogicalOr=e.asm.LogicalOr).apply(null,arguments)},e._LogicalXor=function(){return(e._LogicalXor=e.asm.LogicalXor).apply(null,arguments)},e._Max=function(){return(e._Max=e.asm.Max).apply(null,arguments)},e._MaxPool=function(){return(e._MaxPool=e.asm.MaxPool).apply(null,arguments)},e._MaxPool3D=function(){return(e._MaxPool3D=e.asm.MaxPool3D).apply(null,arguments)},e._MaxPool3DGrad=function(){return(e._MaxPool3DGrad=e.asm.MaxPool3DGrad).apply(null,arguments)},e._MaxPoolGrad=function(){return(e._MaxPoolGrad=e.asm.MaxPoolGrad).apply(null,arguments)},e._MaxPoolWithArgmax=function(){return(e._MaxPoolWithArgmax=e.asm.MaxPoolWithArgmax).apply(null,arguments)},e._Maximum=function(){return(e._Maximum=e.asm.Maximum).apply(null,arguments)},e._Mean=function(){return(e._Mean=e.asm.Mean).apply(null,arguments)},e._Min=function(){return(e._Min=e.asm.Min).apply(null,arguments)},e._Minimum=function(){return(e._Minimum=e.asm.Minimum).apply(null,arguments)},e._MirrorPad=function(){return(e._MirrorPad=e.asm.MirrorPad).apply(null,arguments)},e._Mod=function(){return(e._Mod=e.asm.Mod).apply(null,arguments)},e._Multinomial=function(){return(e._Multinomial=e.asm.Multinomial).apply(null,arguments)},e._Multiply=function(){return(e._Multiply=e.asm.Multiply).apply(null,arguments)},e._Neg=function(){return(e._Neg=e.asm.Neg).apply(null,arguments)},e._NonMaxSuppressionV3=function(){return(e._NonMaxSuppressionV3=e.asm.NonMaxSuppressionV3).apply(null,arguments)},e._NonMaxSuppressionV4=function(){return(e._NonMaxSuppressionV4=e.asm.NonMaxSuppressionV4).apply(null,arguments)},e._NonMaxSuppressionV5=function(){return(e._NonMaxSuppressionV5=e.asm.NonMaxSuppressionV5).apply(null,arguments)},e._NotEqual=function(){return(e._NotEqual=e.asm.NotEqual).apply(null,arguments)},e._OneHot=function(){return(e._OneHot=e.asm.OneHot).apply(null,arguments)},e._PadV2=function(){return(e._PadV2=e.asm.PadV2).apply(null,arguments)},e._Pow=function(){return(e._Pow=e.asm.Pow).apply(null,arguments)},e._Prelu=function(){return(e._Prelu=e.asm.Prelu).apply(null,arguments)},e._Prod=function(){return(e._Prod=e.asm.Prod).apply(null,arguments)},e._RealDiv=function(){return(e._RealDiv=e.asm.RealDiv).apply(null,arguments)},e._Reciprocal=function(){return(e._Reciprocal=e.asm.Reciprocal).apply(null,arguments)},e._Relu=function(){return(e._Relu=e.asm.Relu).apply(null,arguments)},e._Relu6=function(){return(e._Relu6=e.asm.Relu6).apply(null,arguments)},e._ResizeBilinear=function(){return(e._ResizeBilinear=e.asm.ResizeBilinear).apply(null,arguments)},e._ResizeBilinearGrad=function(){return(e._ResizeBilinearGrad=e.asm.ResizeBilinearGrad).apply(null,arguments)},e._ResizeNearestNeighbor=function(){return(e._ResizeNearestNeighbor=e.asm.ResizeNearestNeighbor).apply(null,arguments)},e._ResizeNearestNeighborGrad=function(){return(e._ResizeNearestNeighborGrad=e.asm.ResizeNearestNeighborGrad).apply(null,arguments)},e._Reverse=function(){return(e._Reverse=e.asm.Reverse).apply(null,arguments)},e._RotateWithOffset=function(){return(e._RotateWithOffset=e.asm.RotateWithOffset).apply(null,arguments)},e._Round=function(){return(e._Round=e.asm.Round).apply(null,arguments)},e._Rsqrt=function(){return(e._Rsqrt=e.asm.Rsqrt).apply(null,arguments)},e._ScatterNd=function(){return(e._ScatterNd=e.asm.ScatterNd).apply(null,arguments)},e._SearchSorted=function(){return(e._SearchSorted=e.asm.SearchSorted).apply(null,arguments)},e._SelectV2=function(){return(e._SelectV2=e.asm.SelectV2).apply(null,arguments)},e._Selu=function(){return(e._Selu=e.asm.Selu).apply(null,arguments)},e._Sigmoid=function(){return(e._Sigmoid=e.asm.Sigmoid).apply(null,arguments)},e._Sign=function(){return(e._Sign=e.asm.Sign).apply(null,arguments)},e._Sin=function(){return(e._Sin=e.asm.Sin).apply(null,arguments)},e._Sinh=function(){return(e._Sinh=e.asm.Sinh).apply(null,arguments)},e._Softmax=function(){return(e._Softmax=e.asm.Softmax).apply(null,arguments)},e._Softplus=function(){return(e._Softplus=e.asm.Softplus).apply(null,arguments)},e._SparseFillEmptyRows=function(){return(e._SparseFillEmptyRows=e.asm.SparseFillEmptyRows).apply(null,arguments)},e._SparseReshape=function(){return(e._SparseReshape=e.asm.SparseReshape).apply(null,arguments)},e._SparseSegmentReduction=function(){return(e._SparseSegmentReduction=e.asm.SparseSegmentReduction).apply(null,arguments)},e._SparseToDense=function(){return(e._SparseToDense=e.asm.SparseToDense).apply(null,arguments)},e._Sqrt=function(){return(e._Sqrt=e.asm.Sqrt).apply(null,arguments)},e._Square=function(){return(e._Square=e.asm.Square).apply(null,arguments)},e._SquaredDifference=function(){return(e._SquaredDifference=e.asm.SquaredDifference).apply(null,arguments)},e._Step=function(){return(e._Step=e.asm.Step).apply(null,arguments)},e._StridedSlice=function(){return(e._StridedSlice=e.asm.StridedSlice).apply(null,arguments)},e._Sub=function(){return(e._Sub=e.asm.Sub).apply(null,arguments)},e._Sum=function(){return(e._Sum=e.asm.Sum).apply(null,arguments)},e._Tan=function(){return(e._Tan=e.asm.Tan).apply(null,arguments)},e._Tanh=function(){return(e._Tanh=e.asm.Tanh).apply(null,arguments)},e._TensorScatterUpdate=function(){return(e._TensorScatterUpdate=e.asm.TensorScatterUpdate).apply(null,arguments)},e._Tile=function(){return(e._Tile=e.asm.Tile).apply(null,arguments)},e._TopK=function(){return(e._TopK=e.asm.TopK).apply(null,arguments)},e._Transform=function(){return(e._Transform=e.asm.Transform).apply(null,arguments)},e._Transpose=function(){return(e._Transpose=e.asm.Transpose).apply(null,arguments)},e.__FusedMatMul=function(){return(e.__FusedMatMul=e.asm._FusedMatMul).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.malloc).apply(null,arguments)},e._free=function(){return(e._free=e.asm.free).apply(null,arguments)},e.__emscripten_tls_init=function(){return(e.__emscripten_tls_init=e.asm._emscripten_tls_init).apply(null,arguments)};var kt=e._pthread_self=function(){return(kt=e._pthread_self=e.asm.pthread_self).apply(null,arguments)};e.___errno_location=function(){return(e.___errno_location=e.asm.__errno_location).apply(null,arguments)};var mn=e.__emscripten_thread_init=function(){return(mn=e.__emscripten_thread_init=e.asm._emscripten_thread_init).apply(null,arguments)};e.__emscripten_thread_crashed=function(){return(e.__emscripten_thread_crashed=e.asm._emscripten_thread_crashed).apply(null,arguments)},e._emscripten_main_thread_process_queued_calls=function(){return(e._emscripten_main_thread_process_queued_calls=e.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},e._emscripten_main_browser_thread_id=function(){return(e._emscripten_main_browser_thread_id=e.asm.emscripten_main_browser_thread_id).apply(null,arguments)};var fn=e._emscripten_run_in_main_runtime_thread_js=function(){return(fn=e._emscripten_run_in_main_runtime_thread_js=e.asm.emscripten_run_in_main_runtime_thread_js).apply(null,arguments)};e._emscripten_dispatch_to_thread_=function(){return(e._emscripten_dispatch_to_thread_=e.asm.emscripten_dispatch_to_thread_).apply(null,arguments)};var hn=e.__emscripten_proxy_execute_task_queue=function(){return(hn=e.__emscripten_proxy_execute_task_queue=e.asm._emscripten_proxy_execute_task_queue).apply(null,arguments)},Lt=e.__emscripten_thread_free_data=function(){return(Lt=e.__emscripten_thread_free_data=e.asm._emscripten_thread_free_data).apply(null,arguments)},gn=e.__emscripten_thread_exit=function(){return(gn=e.__emscripten_thread_exit=e.asm._emscripten_thread_exit).apply(null,arguments)},bn=e._emscripten_stack_set_limits=function(){return(bn=e._emscripten_stack_set_limits=e.asm.emscripten_stack_set_limits).apply(null,arguments)},Vt=e.stackSave=function(){return(Vt=e.stackSave=e.asm.stackSave).apply(null,arguments)},St=e.stackRestore=function(){return(St=e.stackRestore=e.asm.stackRestore).apply(null,arguments)},Mt=e.stackAlloc=function(){return(Mt=e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)};e.dynCall_iijjiiii=function(){return(e.dynCall_iijjiiii=e.asm.dynCall_iijjiiii).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)},e.keepRuntimeAlive=Ve,e.wasmMemory=U,e.cwrap=qs,e.ExitStatus=Ie,e.PThread=A;var vt;Re=function l(){vt||_n(),vt||(Re=l)};function _n(l){if(ye>0)return;if(_){m(e),lt(),startWorker(e);return}if(Ye(),ye>0)return;function h(){vt||(vt=!0,e.calledRun=!0,!ie&&(lt(),m(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),pt()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),h()},1)):h()}if(e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();_n();var At;p&&(At={uncaughtException:process.listeners("uncaughtException").filter(function(l){return!p.uncaughtException.indexOf(l)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(l){return!p.unhandledRejection.indexOf(l)>-1})});var xt;if(typeof WasmBackendModule<"u")xt=WasmBackendModule;else if(typeof r<"u")xt=r;else throw new Error("Could not find wasm module in post.js");if(At){var Ks=xt._dispose;xt._dispose=function(){Ks(),At.uncaughtException.forEach(function(l){process.removeListener("uncaughtException",l)}),At.unhandledRejection.forEach(function(l){process.removeListener("unhandledRejection",l)})}}return r.ready}})();a.exports=s})(ks);var Ss=ks.exports;const Ms=Ua(Ss),Qf=Ga({__proto__:null,default:Ms},[Ss]);var Yf=`"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"
");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WasmBackendModuleThreadedSimd(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,0,0,1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};`,vs={exports:{}};(function(a,n){var s=(()=>{var o=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(o=o||__filename),function(r){r=r||{};var t=typeof r<"u"?r:{},i,c;t.ready=new Promise(function(I,S){i=I,c=S});var d;typeof process<"u"&&process.listeners&&(d={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var u=Object.assign({},t),e=typeof window=="object",m=typeof importScripts=="function",b=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",p="";function f(I){return t.locateFile?t.locateFile(I,p):p+I}var g,w,k;if(b){var y=Oe,_=Oe;m?p=_.dirname(p)+"/":p=__dirname+"/",g=(I,S)=>(I=Ce(I)?new URL(I):_.normalize(I),y.readFileSync(I,S?void 0:"utf8")),k=I=>{var S=g(I,!0);return S.buffer||(S=new Uint8Array(S)),S},w=(I,S,N)=>{I=Ce(I)?new URL(I):_.normalize(I),y.readFile(I,function(A,j){A?N(A):S(j.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(I){if(!(I instanceof Ve))throw I}),process.on("unhandledRejection",function(I){throw I}),t.inspect=function(){return"[Emscripten Module object]"}}else(e||m)&&(m?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),o&&(p=o),p.indexOf("blob:")!==0?p=p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):p="",g=I=>{var S=new XMLHttpRequest;return S.open("GET",I,!1),S.send(null),S.responseText},m&&(k=I=>{var S=new XMLHttpRequest;return S.open("GET",I,!1),S.responseType="arraybuffer",S.send(null),new Uint8Array(S.response)}),w=(I,S,N)=>{var A=new XMLHttpRequest;A.open("GET",I,!0),A.responseType="arraybuffer",A.onload=()=>{if(A.status==200||A.status==0&&A.response){S(A.response);return}N()},A.onerror=N,A.send(null)});var v=t.print||console.log.bind(console),E=t.printErr||console.warn.bind(console);Object.assign(t,u),u=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var R;t.wasmBinary&&(R=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&Fe("no native wasm support detected");var B,L=!1,z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function H(I,S,N){S>>>=0;for(var A=S+N,j=S;I[j]&&!(j>=A);)++j;if(j-S>16&&I.buffer&&z)return z.decode(I.subarray(S,j));for(var K="";S<j;){var W=I[S++];if(!(W&128)){K+=String.fromCharCode(W);continue}var T=I[S++]&63;if((W&224)==192){K+=String.fromCharCode((W&31)<<6|T);continue}var Z=I[S++]&63;if((W&240)==224?W=(W&15)<<12|T<<6|Z:W=(W&7)<<18|T<<12|Z<<6|I[S++]&63,W<65536)K+=String.fromCharCode(W);else{var pe=W-65536;K+=String.fromCharCode(55296|pe>>10,56320|pe&1023)}}return K}function G(I,S){return I>>>=0,I?H(te,I,S):""}function q(I,S,N,A){if(N>>>=0,!(A>0))return 0;for(var j=N,K=N+A-1,W=0;W<I.length;++W){var T=I.charCodeAt(W);if(T>=55296&&T<=57343){var Z=I.charCodeAt(++W);T=65536+((T&1023)<<10)|Z&1023}if(T<=127){if(N>=K)break;S[N++>>>0]=T}else if(T<=2047){if(N+1>=K)break;S[N++>>>0]=192|T>>6,S[N++>>>0]=128|T&63}else if(T<=65535){if(N+2>=K)break;S[N++>>>0]=224|T>>12,S[N++>>>0]=128|T>>6&63,S[N++>>>0]=128|T&63}else{if(N+3>=K)break;S[N++>>>0]=240|T>>18,S[N++>>>0]=128|T>>12&63,S[N++>>>0]=128|T>>6&63,S[N++>>>0]=128|T&63}}return S[N>>>0]=0,N-j}function Q(I,S,N){return q(I,te,S,N)}var oe,X,te,le;function U(I){oe=I,t.HEAP8=X=new Int8Array(I),t.HEAP16=new Int16Array(I),t.HEAP32=new Int32Array(I),t.HEAPU8=te=new Uint8Array(I),t.HEAPU16=new Uint16Array(I),t.HEAPU32=le=new Uint32Array(I),t.HEAPF32=new Float32Array(I),t.HEAPF64=new Float64Array(I)}t.INITIAL_MEMORY;var he=[],ie=[],ce=[];function _e(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Le(t.preRun.shift());Ye(he)}function ne(){Ye(ie)}function $e(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Je(t.postRun.shift());Ye(ce)}function Le(I){he.unshift(I)}function Ke(I){ie.unshift(I)}function Je(I){ce.unshift(I)}var Y=0,ve=null;function ot(I){Y++,t.monitorRunDependencies&&t.monitorRunDependencies(Y)}function ut(I){if(Y--,t.monitorRunDependencies&&t.monitorRunDependencies(Y),Y==0&&ve){var S=ve;ve=null,S()}}function Fe(I){t.onAbort&&t.onAbort(I),I="Aborted("+I+")",E(I),L=!0,I+=". Build with -sASSERTIONS for more info.";var S=new WebAssembly.RuntimeError(I);throw c(S),S}var it="data:application/octet-stream;base64,";function be(I){return I.startsWith(it)}function Ce(I){return I.startsWith("file://")}var ae;ae="tfjs-backend-wasm.wasm",be(ae)||(ae=f(ae));function Qe(I){try{if(I==ae&&R)return new Uint8Array(R);if(k)return k(I);throw"both async and sync fetching of the wasm failed"}catch(S){Fe(S)}}function ct(){if(!R&&(e||m)){if(typeof fetch=="function"&&!Ce(ae))return fetch(ae,{credentials:"same-origin"}).then(function(I){if(!I.ok)throw"failed to load wasm binary file at '"+ae+"'";return I.arrayBuffer()}).catch(function(){return Qe(ae)});if(w)return new Promise(function(I,S){w(ae,function(N){I(new Uint8Array(N))},S)})}return Promise.resolve().then(function(){return Qe(ae)})}function dt(){var I={env:ft,wasi_snapshot_preview1:ft};function S(W,T){var Z=W.exports;t.asm=Z,B=t.asm.memory,U(B.buffer),t.asm.__indirect_function_table,Ke(t.asm.__wasm_call_ctors),ut()}ot();function N(W){S(W.instance)}function A(W){return ct().then(function(T){return WebAssembly.instantiate(T,I)}).then(function(T){return T}).then(W,function(T){E("failed to asynchronously prepare wasm: "+T),Fe(T)})}function j(){return!R&&typeof WebAssembly.instantiateStreaming=="function"&&!be(ae)&&!Ce(ae)&&!b&&typeof fetch=="function"?fetch(ae,{credentials:"same-origin"}).then(function(W){var T=WebAssembly.instantiateStreaming(W,I);return T.then(N,function(Z){return E("wasm streaming compile failed: "+Z),E("falling back to ArrayBuffer instantiation"),A(N)})}):A(N)}if(t.instantiateWasm)try{var K=t.instantiateWasm(I,S);return K}catch(W){E("Module.instantiateWasm callback failed with error: "+W),c(W)}return j().catch(c),{}}function Ve(I){this.name="ExitStatus",this.message="Program terminated with exit("+I+")",this.status=I}function Ye(I){for(;I.length>0;)I.shift()(t)}function lt(){Fe("")}function pt(){return 4294901760}function Rt(){return pt()}function Et(I,S,N){te.copyWithin(I>>>0,S>>>0,S+N>>>0)}function Pt(I){try{return B.grow(I-oe.byteLength+65535>>>16),U(B.buffer),1}catch{}}function ye(I){var S=te.length;I=I>>>0;var N=pt();if(I>N)return!1;let A=(Z,pe)=>Z+(pe-Z%pe)%pe;for(var j=1;j<=4;j*=2){var K=S*(1+.2/j);K=Math.min(K,I+100663296);var W=Math.min(N,A(Math.max(I,K),65536)),T=Pt(W);if(T)return!0}return!1}function Re(I){return 52}function Tt(I,S,N,A,j){return 70}var Ot=[null,[],[]];function Ee(I,S){var N=Ot[I];S===0||S===10?((I===1?v:E)(H(N,0)),N.length=0):N.push(S)}function Bt(I,S,N,A){for(var j=0,K=0;K<N;K++){var W=le[S>>>2],T=le[S+4>>>2];S+=8;for(var Z=0;Z<T;Z++)Ee(I,te[W+Z>>>0]);j+=T}return le[A>>>2]=j,0}function Ze(I){var S=t["_"+I];return S}function ze(I,S){X.set(I,S>>>0)}function se(I,S,N,A,j){var K={string:re=>{var Ae=0;if(re!=null&&re!==0){var wt=(re.length<<2)+1;Ae=Ie(wt),Q(re,Ae,wt)}return Ae},array:re=>{var Ae=Ie(re.length);return ze(re,Ae),Ae}};function W(re){return S==="string"?G(re):S==="boolean"?!!re:re}var T=Ze(I),Z=[],pe=0;if(A)for(var we=0;we<A.length;we++){var yt=K[N[we]];yt?(pe===0&&(pe=ht()),Z[we]=yt(A[we])):Z[we]=A[we]}var et=T.apply(null,Z);function It(re){return pe!==0&&gt(pe),W(re)}return et=It(et),et}function mt(I,S,N,A){N=N||[];var j=N.every(W=>W==="number"||W==="boolean"),K=S!=="string";return K&&j&&!A?Ze(I):function(){return se(I,S,N,arguments)}}var ft={abort:lt,emscripten_get_heap_max:Rt,emscripten_memcpy_big:Et,emscripten_resize_heap:ye,fd_close:Re,fd_seek:Tt,fd_write:Bt};dt(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.__wasm_call_ctors).apply(null,arguments)},t._init=function(){return(t._init=t.asm.init).apply(null,arguments)},t._init_with_threads_count=function(){return(t._init_with_threads_count=t.asm.init_with_threads_count).apply(null,arguments)},t._get_threads_count=function(){return(t._get_threads_count=t.asm.get_threads_count).apply(null,arguments)},t._register_tensor=function(){return(t._register_tensor=t.asm.register_tensor).apply(null,arguments)},t._dispose_data=function(){return(t._dispose_data=t.asm.dispose_data).apply(null,arguments)},t._dispose=function(){return(t._dispose=t.asm.dispose).apply(null,arguments)},t._Abs=function(){return(t._Abs=t.asm.Abs).apply(null,arguments)},t._Acos=function(){return(t._Acos=t.asm.Acos).apply(null,arguments)},t._Acosh=function(){return(t._Acosh=t.asm.Acosh).apply(null,arguments)},t._Add=function(){return(t._Add=t.asm.Add).apply(null,arguments)},t._AddN=function(){return(t._AddN=t.asm.AddN).apply(null,arguments)},t._All=function(){return(t._All=t.asm.All).apply(null,arguments)},t._Any=function(){return(t._Any=t.asm.Any).apply(null,arguments)},t._ArgMax=function(){return(t._ArgMax=t.asm.ArgMax).apply(null,arguments)},t._ArgMin=function(){return(t._ArgMin=t.asm.ArgMin).apply(null,arguments)},t._Asin=function(){return(t._Asin=t.asm.Asin).apply(null,arguments)},t._Asinh=function(){return(t._Asinh=t.asm.Asinh).apply(null,arguments)},t._Atan=function(){return(t._Atan=t.asm.Atan).apply(null,arguments)},t._Atan2=function(){return(t._Atan2=t.asm.Atan2).apply(null,arguments)},t._Atanh=function(){return(t._Atanh=t.asm.Atanh).apply(null,arguments)},t._AvgPool=function(){return(t._AvgPool=t.asm.AvgPool).apply(null,arguments)},t._AvgPool3D=function(){return(t._AvgPool3D=t.asm.AvgPool3D).apply(null,arguments)},t._AvgPool3DGrad=function(){return(t._AvgPool3DGrad=t.asm.AvgPool3DGrad).apply(null,arguments)},t._AvgPoolGrad=function(){return(t._AvgPoolGrad=t.asm.AvgPoolGrad).apply(null,arguments)},t._BatchMatMul=function(){return(t._BatchMatMul=t.asm.BatchMatMul).apply(null,arguments)},t._Bincount=function(){return(t._Bincount=t.asm.Bincount).apply(null,arguments)},t._BitwiseAnd=function(){return(t._BitwiseAnd=t.asm.BitwiseAnd).apply(null,arguments)},t._Ceil=function(){return(t._Ceil=t.asm.Ceil).apply(null,arguments)},t._ClipByValue=function(){return(t._ClipByValue=t.asm.ClipByValue).apply(null,arguments)},t._Conv2D=function(){return(t._Conv2D=t.asm.Conv2D).apply(null,arguments)},t._Conv2DBackpropInput=function(){return(t._Conv2DBackpropInput=t.asm.Conv2DBackpropInput).apply(null,arguments)},t._Conv3D=function(){return(t._Conv3D=t.asm.Conv3D).apply(null,arguments)},t._Conv3DBackpropFilterV2=function(){return(t._Conv3DBackpropFilterV2=t.asm.Conv3DBackpropFilterV2).apply(null,arguments)},t._Conv3DBackpropInputV2=function(){return(t._Conv3DBackpropInputV2=t.asm.Conv3DBackpropInputV2).apply(null,arguments)},t._Cos=function(){return(t._Cos=t.asm.Cos).apply(null,arguments)},t._Cosh=function(){return(t._Cosh=t.asm.Cosh).apply(null,arguments)},t._CropAndResize=function(){return(t._CropAndResize=t.asm.CropAndResize).apply(null,arguments)},t._Cumprod=function(){return(t._Cumprod=t.asm.Cumprod).apply(null,arguments)},t._Cumsum=function(){return(t._Cumsum=t.asm.Cumsum).apply(null,arguments)},t._DenseBincount=function(){return(t._DenseBincount=t.asm.DenseBincount).apply(null,arguments)},t._DepthToSpace=function(){return(t._DepthToSpace=t.asm.DepthToSpace).apply(null,arguments)},t._DepthwiseConv2dNative=function(){return(t._DepthwiseConv2dNative=t.asm.DepthwiseConv2dNative).apply(null,arguments)},t._Diag=function(){return(t._Diag=t.asm.Diag).apply(null,arguments)},t._Dilation2D=function(){return(t._Dilation2D=t.asm.Dilation2D).apply(null,arguments)},t._Dilation2DBackpropFilter=function(){return(t._Dilation2DBackpropFilter=t.asm.Dilation2DBackpropFilter).apply(null,arguments)},t._Dilation2DBackpropInput=function(){return(t._Dilation2DBackpropInput=t.asm.Dilation2DBackpropInput).apply(null,arguments)},t._Elu=function(){return(t._Elu=t.asm.Elu).apply(null,arguments)},t._EluGrad=function(){return(t._EluGrad=t.asm.EluGrad).apply(null,arguments)},t._Equal=function(){return(t._Equal=t.asm.Equal).apply(null,arguments)},t._Erf=function(){return(t._Erf=t.asm.Erf).apply(null,arguments)},t._Exp=function(){return(t._Exp=t.asm.Exp).apply(null,arguments)},t._Expm1=function(){return(t._Expm1=t.asm.Expm1).apply(null,arguments)},t._FlipLeftRight=function(){return(t._FlipLeftRight=t.asm.FlipLeftRight).apply(null,arguments)},t._Floor=function(){return(t._Floor=t.asm.Floor).apply(null,arguments)},t._FloorDiv=function(){return(t._FloorDiv=t.asm.FloorDiv).apply(null,arguments)},t._FusedBatchNorm=function(){return(t._FusedBatchNorm=t.asm.FusedBatchNorm).apply(null,arguments)},t._FusedConv2D=function(){return(t._FusedConv2D=t.asm.FusedConv2D).apply(null,arguments)},t._FusedDepthwiseConv2D=function(){return(t._FusedDepthwiseConv2D=t.asm.FusedDepthwiseConv2D).apply(null,arguments)},t._Gather=function(){return(t._Gather=t.asm.Gather).apply(null,arguments)},t._GatherNd=function(){return(t._GatherNd=t.asm.GatherNd).apply(null,arguments)},t._Greater=function(){return(t._Greater=t.asm.Greater).apply(null,arguments)},t._GreaterEqual=function(){return(t._GreaterEqual=t.asm.GreaterEqual).apply(null,arguments)},t._IsFinite=function(){return(t._IsFinite=t.asm.IsFinite).apply(null,arguments)},t._IsInf=function(){return(t._IsInf=t.asm.IsInf).apply(null,arguments)},t._IsNan=function(){return(t._IsNan=t.asm.IsNan).apply(null,arguments)},t._LRN=function(){return(t._LRN=t.asm.LRN).apply(null,arguments)},t._LRNGrad=function(){return(t._LRNGrad=t.asm.LRNGrad).apply(null,arguments)},t._LeakyRelu=function(){return(t._LeakyRelu=t.asm.LeakyRelu).apply(null,arguments)},t._Less=function(){return(t._Less=t.asm.Less).apply(null,arguments)},t._LessEqual=function(){return(t._LessEqual=t.asm.LessEqual).apply(null,arguments)},t._LinSpace=function(){return(t._LinSpace=t.asm.LinSpace).apply(null,arguments)},t._Log=function(){return(t._Log=t.asm.Log).apply(null,arguments)},t._Log1p=function(){return(t._Log1p=t.asm.Log1p).apply(null,arguments)},t._LogicalAnd=function(){return(t._LogicalAnd=t.asm.LogicalAnd).apply(null,arguments)},t._LogicalNot=function(){return(t._LogicalNot=t.asm.LogicalNot).apply(null,arguments)},t._LogicalOr=function(){return(t._LogicalOr=t.asm.LogicalOr).apply(null,arguments)},t._LogicalXor=function(){return(t._LogicalXor=t.asm.LogicalXor).apply(null,arguments)},t._Max=function(){return(t._Max=t.asm.Max).apply(null,arguments)},t._MaxPool=function(){return(t._MaxPool=t.asm.MaxPool).apply(null,arguments)},t._MaxPool3D=function(){return(t._MaxPool3D=t.asm.MaxPool3D).apply(null,arguments)},t._MaxPool3DGrad=function(){return(t._MaxPool3DGrad=t.asm.MaxPool3DGrad).apply(null,arguments)},t._MaxPoolGrad=function(){return(t._MaxPoolGrad=t.asm.MaxPoolGrad).apply(null,arguments)},t._MaxPoolWithArgmax=function(){return(t._MaxPoolWithArgmax=t.asm.MaxPoolWithArgmax).apply(null,arguments)},t._Maximum=function(){return(t._Maximum=t.asm.Maximum).apply(null,arguments)},t._Mean=function(){return(t._Mean=t.asm.Mean).apply(null,arguments)},t._Min=function(){return(t._Min=t.asm.Min).apply(null,arguments)},t._Minimum=function(){return(t._Minimum=t.asm.Minimum).apply(null,arguments)},t._MirrorPad=function(){return(t._MirrorPad=t.asm.MirrorPad).apply(null,arguments)},t._Mod=function(){return(t._Mod=t.asm.Mod).apply(null,arguments)},t._Multinomial=function(){return(t._Multinomial=t.asm.Multinomial).apply(null,arguments)},t._Multiply=function(){return(t._Multiply=t.asm.Multiply).apply(null,arguments)},t._Neg=function(){return(t._Neg=t.asm.Neg).apply(null,arguments)},t._NonMaxSuppressionV3=function(){return(t._NonMaxSuppressionV3=t.asm.NonMaxSuppressionV3).apply(null,arguments)},t._NonMaxSuppressionV4=function(){return(t._NonMaxSuppressionV4=t.asm.NonMaxSuppressionV4).apply(null,arguments)},t._NonMaxSuppressionV5=function(){return(t._NonMaxSuppressionV5=t.asm.NonMaxSuppressionV5).apply(null,arguments)},t._NotEqual=function(){return(t._NotEqual=t.asm.NotEqual).apply(null,arguments)},t._OneHot=function(){return(t._OneHot=t.asm.OneHot).apply(null,arguments)},t._PadV2=function(){return(t._PadV2=t.asm.PadV2).apply(null,arguments)},t._Pow=function(){return(t._Pow=t.asm.Pow).apply(null,arguments)},t._Prelu=function(){return(t._Prelu=t.asm.Prelu).apply(null,arguments)},t._Prod=function(){return(t._Prod=t.asm.Prod).apply(null,arguments)},t._RealDiv=function(){return(t._RealDiv=t.asm.RealDiv).apply(null,arguments)},t._Reciprocal=function(){return(t._Reciprocal=t.asm.Reciprocal).apply(null,arguments)},t._Relu=function(){return(t._Relu=t.asm.Relu).apply(null,arguments)},t._Relu6=function(){return(t._Relu6=t.asm.Relu6).apply(null,arguments)},t._ResizeBilinear=function(){return(t._ResizeBilinear=t.asm.ResizeBilinear).apply(null,arguments)},t._ResizeBilinearGrad=function(){return(t._ResizeBilinearGrad=t.asm.ResizeBilinearGrad).apply(null,arguments)},t._ResizeNearestNeighbor=function(){return(t._ResizeNearestNeighbor=t.asm.ResizeNearestNeighbor).apply(null,arguments)},t._ResizeNearestNeighborGrad=function(){return(t._ResizeNearestNeighborGrad=t.asm.ResizeNearestNeighborGrad).apply(null,arguments)},t._Reverse=function(){return(t._Reverse=t.asm.Reverse).apply(null,arguments)},t._RotateWithOffset=function(){return(t._RotateWithOffset=t.asm.RotateWithOffset).apply(null,arguments)},t._Round=function(){return(t._Round=t.asm.Round).apply(null,arguments)},t._Rsqrt=function(){return(t._Rsqrt=t.asm.Rsqrt).apply(null,arguments)},t._ScatterNd=function(){return(t._ScatterNd=t.asm.ScatterNd).apply(null,arguments)},t._SearchSorted=function(){return(t._SearchSorted=t.asm.SearchSorted).apply(null,arguments)},t._SelectV2=function(){return(t._SelectV2=t.asm.SelectV2).apply(null,arguments)},t._Selu=function(){return(t._Selu=t.asm.Selu).apply(null,arguments)},t._Sigmoid=function(){return(t._Sigmoid=t.asm.Sigmoid).apply(null,arguments)},t._Sign=function(){return(t._Sign=t.asm.Sign).apply(null,arguments)},t._Sin=function(){return(t._Sin=t.asm.Sin).apply(null,arguments)},t._Sinh=function(){return(t._Sinh=t.asm.Sinh).apply(null,arguments)},t._Softmax=function(){return(t._Softmax=t.asm.Softmax).apply(null,arguments)},t._Softplus=function(){return(t._Softplus=t.asm.Softplus).apply(null,arguments)},t._SparseFillEmptyRows=function(){return(t._SparseFillEmptyRows=t.asm.SparseFillEmptyRows).apply(null,arguments)},t._SparseReshape=function(){return(t._SparseReshape=t.asm.SparseReshape).apply(null,arguments)},t._SparseSegmentReduction=function(){return(t._SparseSegmentReduction=t.asm.SparseSegmentReduction).apply(null,arguments)},t._SparseToDense=function(){return(t._SparseToDense=t.asm.SparseToDense).apply(null,arguments)},t._Sqrt=function(){return(t._Sqrt=t.asm.Sqrt).apply(null,arguments)},t._Square=function(){return(t._Square=t.asm.Square).apply(null,arguments)},t._SquaredDifference=function(){return(t._SquaredDifference=t.asm.SquaredDifference).apply(null,arguments)},t._Step=function(){return(t._Step=t.asm.Step).apply(null,arguments)},t._StridedSlice=function(){return(t._StridedSlice=t.asm.StridedSlice).apply(null,arguments)},t._Sub=function(){return(t._Sub=t.asm.Sub).apply(null,arguments)},t._Sum=function(){return(t._Sum=t.asm.Sum).apply(null,arguments)},t._Tan=function(){return(t._Tan=t.asm.Tan).apply(null,arguments)},t._Tanh=function(){return(t._Tanh=t.asm.Tanh).apply(null,arguments)},t._TensorScatterUpdate=function(){return(t._TensorScatterUpdate=t.asm.TensorScatterUpdate).apply(null,arguments)},t._Tile=function(){return(t._Tile=t.asm.Tile).apply(null,arguments)},t._TopK=function(){return(t._TopK=t.asm.TopK).apply(null,arguments)},t._Transform=function(){return(t._Transform=t.asm.Transform).apply(null,arguments)},t._Transpose=function(){return(t._Transpose=t.asm.Transpose).apply(null,arguments)},t.__FusedMatMul=function(){return(t.__FusedMatMul=t.asm._FusedMatMul).apply(null,arguments)},t._malloc=function(){return(t._malloc=t.asm.malloc).apply(null,arguments)},t._free=function(){return(t._free=t.asm.free).apply(null,arguments)},t.___errno_location=function(){return(t.___errno_location=t.asm.__errno_location).apply(null,arguments)};var ht=t.stackSave=function(){return(ht=t.stackSave=t.asm.stackSave).apply(null,arguments)},gt=t.stackRestore=function(){return(gt=t.stackRestore=t.asm.stackRestore).apply(null,arguments)},Ie=t.stackAlloc=function(){return(Ie=t.stackAlloc=t.asm.stackAlloc).apply(null,arguments)};t.dynCall_iijjiiii=function(){return(t.dynCall_iijjiiii=t.asm.dynCall_iijjiiii).apply(null,arguments)},t.dynCall_jiji=function(){return(t.dynCall_jiji=t.asm.dynCall_jiji).apply(null,arguments)},t.cwrap=mt;var Ue;ve=function I(){Ue||bt(),Ue||(ve=I)};function bt(I){if(Y>0||(_e(),Y>0))return;function S(){Ue||(Ue=!0,t.calledRun=!0,!L&&(ne(),i(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),$e()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),S()},1)):S()}if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();bt();var Pe;d&&(Pe={uncaughtException:process.listeners("uncaughtException").filter(function(I){return!d.uncaughtException.indexOf(I)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(I){return!d.unhandledRejection.indexOf(I)>-1})});var Te;if(typeof r<"u")Te=r;else if(typeof WasmBackendModuleThreadedSimd<"u")Te=WasmBackendModuleThreadedSimd;else throw new Error("Could not find wasm module in post.js");if(Pe){var _t=Te._dispose;Te._dispose=function(){_t(),Pe.uncaughtException.forEach(function(I){process.removeListener("uncaughtException",I)}),Pe.unhandledRejection.forEach(function(I){process.removeListener("unhandledRejection",I)})}}return r.ready}})();a.exports=s})(vs);var As=vs.exports;const xs=Ua(As),Zf=Ga({__proto__:null,default:xs},[As]);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xn=Ms||Qf,eh=xs||Zf;class th extends ki{constructor(n){super(),this.wasm=n,this.dataIdNextNumber=1,this.wasm.tfjs.initWithThreadsCount(oh),this.wasm.tfjs.getThreadsCount(),this.dataIdMap=new Si(this,Mi())}write(n,s,o){const r={id:this.dataIdNextNumber++};return this.move(r,n,s,o,1),r}numDataIds(){return this.dataIdMap.numDataIds()}async time(n){const s=Sn();return n(),{kernelMs:Sn()-s}}move(n,s,o,r,t){const i=this.dataIdNextNumber++;if(r==="string"){const e=s;this.dataIdMap.set(n,{id:i,stringBytes:e,shape:o,dtype:r,memoryOffset:null,refCount:t});return}const c=C(o),d=c*Mn(r),u=this.wasm._malloc(d)>>>0;this.dataIdMap.set(n,{id:i,memoryOffset:u,shape:o,dtype:r,refCount:t}),this.wasm.tfjs.registerTensor(i,c,u),s!=null&&this.wasm.HEAPU8.set(new Uint8Array(s.buffer,s.byteOffset,d),u)}async read(n){return this.readSync(n)}readSync(n,s,o){const{memoryOffset:r,dtype:t,shape:i,stringBytes:c}=this.dataIdMap.get(n);if(t==="string")return(s==null||s===0)&&(o==null||o>=c.length)?c:c.slice(s,o);s=s||0,o=o||C(i);const d=Mn(t),u=this.wasm.HEAPU8.slice(r+s*d,r+o*d);return rh(u.buffer,t)}disposeData(n,s=!1){if(this.dataIdMap.has(n)){const o=this.dataIdMap.get(n);if(o.refCount--,!s&&o.refCount>0)return!1;this.wasm._free(o.memoryOffset),this.wasm.tfjs.disposeData(o.id),this.dataIdMap.delete(n)}return!0}refCount(n){return this.dataIdMap.has(n)?this.dataIdMap.get(n).refCount:0}incRef(n){const s=this.dataIdMap.get(n);s!=null&&s.refCount++}floatPrecision(){return 32}getMemoryOffset(n){return this.dataIdMap.get(n).memoryOffset}dispose(){this.wasm.tfjs.dispose(),"PThread"in this.wasm&&this.wasm.PThread.terminateAllThreads(),this.wasm=null}memory(){return{unreliable:!1}}makeOutput(n,s,o,r){let t;if(o==null)t=this.write(r??null,n,s);else{const i=this.dataIdNextNumber++;t={id:i},this.dataIdMap.set(t,{id:i,memoryOffset:o,shape:n,dtype:s,refCount:1});const c=C(n);this.wasm.tfjs.registerTensor(i,c,o)}return{dataId:t,shape:n,dtype:s}}typedArrayFromHeap({shape:n,dtype:s,dataId:o}){const r=this.wasm.HEAPU8.buffer,{memoryOffset:t}=this.dataIdMap.get(o),i=C(n);switch(s){case"float32":return new Float32Array(r,t,i);case"int32":return new Int32Array(r,t,i);case"bool":return new Uint8Array(r,t,i);default:throw new Error(`Unknown dtype ${s}`)}}}function nh(a,n,s){let o="tfjs-backend-wasm.wasm";return a&&n?o="tfjs-backend-wasm-threaded-simd.wasm":a&&(o="tfjs-backend-wasm-simd.wasm"),jt!=null&&jt[o]!=null?jt[o]:s+o}async function ah(){const[a,n]=await Promise.all([Xt().getAsync("WASM_HAS_SIMD_SUPPORT"),Xt().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")]);return new Promise((s,o)=>{const r={};r.locateFile=(c,d)=>{if(c.endsWith(".worker.js")){const u=Yf.replace(/\n/g,"\\n"),e=new Blob([u],{type:"application/javascript"});return URL.createObjectURL(e)}return c.endsWith(".wasm")?nh(a,n,d):d+c};let t=!1;r.onAbort=()=>{if(t||qt)return;qt=!0,o({message:"Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers"})};let i;n&&a&&sh==null?(r.mainScriptUrlOrBlob=new Blob(["var WasmBackendModuleThreadedSimd = "+xn.toString()],{type:"text/javascript"}),i=xn(r)):i=eh(r),i.then(c=>{t=!0,qt=!1;const d=null;c.tfjs={init:c.cwrap("init",null,[]),initWithThreadsCount:c.cwrap("init_with_threads_count",null,["number"]),getThreadsCount:c.cwrap("get_threads_count","number",[]),registerTensor:c.cwrap("register_tensor",null,["number","number","number"]),disposeData:c.cwrap("dispose_data",d,["number"]),dispose:c.cwrap("dispose",d,[])},s({wasm:c})}).catch(o)})}function rh(a,n){switch(n){case"float32":return new Float32Array(a);case"int32":return new Int32Array(a);case"bool":return new Uint8Array(a);default:throw new Error(`Unknown dtype ${n}`)}}let sh=null,jt={},qt=!1,oh=-1;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uh=2;vi("wasm",async()=>{const{wasm:a}=await ah();return new th(a)},uh);Ai("wasm").then(()=>console.log("ReelSense: TF.js backend set to WASM.")).catch(a=>console.error("ReelSense: Failed to set WASM backend:",a));const en={enabled:!0,mindlessThreshold:70,genreFatigueLimit:15,scrollSpeedThreshold:5,minWatchTime:3,dailyLimit:120,showStats:!0};let Se=null;const qe=["scrollSpeed","avgWatchTime","skipRate","genreDiversity","sessionMinutes"];chrome.tabs.onRemoved.addListener(a=>{console.log(`Cleaned up session for closed tab: ${a}`)});chrome.runtime.onInstalled.addListener(async a=>{console.log("ReelSense installed/updated:",a.reason),a.reason==="install"&&(await chrome.storage.local.set({settings:en}),await chrome.storage.local.set({trainingData:[]})),await Ct(),await Ds(),chrome.alarms.create("dailyReset",{when:ch(),periodInMinutes:1440})});Ds();chrome.alarms.onAlarm.addListener(async a=>{a.name==="dailyReset"&&await ih()});async function Ct(){const a=new Date().toDateString(),n=await chrome.storage.local.get(["dailyStats","lastStatsDate"]);if(n.lastStatsDate!==a||!n.dailyStats){console.log("Initializing daily stats for",a);const s={date:a,instagram:{time:0,videos:0,interventions:0},youtube:{time:0,videos:0,interventions:0},totalMindlessScore:0,highestMindlessScore:0};await chrome.storage.local.set({dailyStats:s,lastStatsDate:a})}}async function ih(){console.log("Resetting daily stats via alarm."),await Ct()}function ch(){const a=new Date;return a.setDate(a.getDate()+1),a.setHours(0,0,0,0),a.getTime()}chrome.runtime.onMessage.addListener((a,n,s)=>{switch(a.action){case"TRAIN_MODEL":return console.log("ReelSense: Manual training trigger received."),Dn().then(()=>s({success:!0,message:"Model training complete!"})).catch(o=>{console.error("ReelSense: Training failed",o),s({success:!1,error:o.message})}),!0;case"logTrainingData":return dh(a.features,a.label).then(o=>{s({success:!0}),o>30&&o%5===0&&(console.log(`ReelSense: Auto-training model at ${o} samples.`),Dn().catch(r=>console.error("Auto-train failed:",r)))}).catch(o=>{console.error("Error logging training data:",o),s({success:!1,error:"Failed to log data"})}),!0;case"PREDICT_BEHAVIOR":if(!Se)return console.log("Prediction requested, but model not loaded."),s({success:!1,error:"Model not loaded"}),!1;try{const o=lh(a.features);s({success:!0,prediction:o})}catch(o){console.error("Prediction error:",o),s({success:!1,error:o.message})}return!1;case"updateStats":return mh(a.platform,a.data).then(()=>s({success:!0})).catch(o=>{console.error("Error updating stats:",o),s({success:!1,error:"Failed to update stats"})}),!0;case"getSettings":return chrome.storage.local.get("settings").then(o=>s(o.settings||en)).catch(o=>{console.error("Error getting settings:",o),s(en)}),!0;case"recordIntervention":return fh(a.platform,a.type).then(()=>s({success:!0})).catch(o=>{console.error("Error recording intervention:",o),s({success:!1,error:"Failed to record intervention"})}),!0;default:return console.log("Unknown action received:",a.action),s({success:!1,error:"Unknown action"}),!1}});async function dh(a,n){var s;try{const r=(await chrome.storage.local.get("trainingData")).trainingData||[];if(typeof a!="object"||typeof n!="number"||n<0||n>1)return console.warn("Invalid training data received:",{features:a,label:n}),r.length;if(!qe.every(d=>typeof a[d]=="number"&&Number.isFinite(a[d])))return console.warn("Invalid features received:",a),r.length;const i={features:a,label:n};r.push(i);const c=500;return r.length>c&&r.splice(0,r.length-c),await chrome.storage.local.set({trainingData:r}),console.log(`Logged sample ${r.length}: L=${n} F=${JSON.stringify(a)}`),r.length}catch(o){return console.error("Error logging training data:",o),((s=(await chrome.storage.local.get("trainingData")).trainingData)==null?void 0:s.length)||0}}function lh(a){if(!Se)throw new Error("Model not loaded for prediction.");const n=qe.map(o=>Number(a[o])||0);if(n.some(o=>!Number.isFinite(o))){console.error("Invalid feature vector contains non-finite values:",n,"Original features:",a);const o=n.map(r=>Number.isFinite(r)?r:0);console.warn("Using cleaned vector:",o),n=o}return za(()=>{try{const o=Kt([n]),r=Se.predict(o);if(r instanceof Ci){const t=r.dataSync()[0];return r.dispose(),t}else throw console.error("Prediction result was not a Tensor:",r),new Error("Prediction failed internally (result not a Tensor).")}catch(o){throw console.error("Error during prediction inside tf.tidy:",o),o}})}async function Dn(){console.log("ReelSense: Starting model training...");const n=(await chrome.storage.local.get("trainingData")).trainingData;if(!n||n.length<20)throw new Error(`Not enough training data (${(n==null?void 0:n.length)||0}/20). Keep using the extension!`);const s=n.filter(u=>u&&typeof u.label=="number"&&typeof u.features=="object"&&qe.every(e=>typeof u.features[e]=="number"&&Number.isFinite(u.features[e])));if(s.length<20)throw new Error(`Not enough valid training data (${s.length}/20) after filtering.`);xi(s);const o=s.map(u=>qe.map(e=>u.features[e])),r=s.map(u=>u.label),t=Kt(o),i=Kt(r,[r.length,1]),c=Bi();c.add(An({inputShape:[qe.length],units:10,activation:"relu"})),c.add(An({units:1,activation:"sigmoid"})),c.compile({optimizer:Di.adam(.001),loss:"binaryCrossentropy",metrics:["accuracy"]}),console.log(`Training on ${s.length} valid samples...`);const d=await c.fit(t,i,{epochs:30,batchSize:16,shuffle:!0,validationSplit:.2,callbacks:{onEpochEnd:(u,e)=>console.log(`Epoch ${u+1}/30: loss=${e.loss.toFixed(3)}, acc=${e.acc.toFixed(3)}, val_loss=${e.val_loss.toFixed(3)}, val_acc=${e.val_acc.toFixed(3)}`)}});console.log("Training history:",d.history),await ph(c),Se=c,console.log("ReelSense: Model trained and saved successfully."),t.dispose(),i.dispose()}async function ph(a){try{const n=await a.save(Oi(async s=>s));await chrome.storage.local.set({"reelsense-model-artifacts":n}),console.log("Model artifacts saved to chrome.storage.local")}catch(n){console.error("Error saving model:",n)}}async function Ds(){try{const n=(await chrome.storage.local.get("reelsense-model-artifacts"))["reelsense-model-artifacts"];n&&n.modelTopology&&n.weightData?(Se=await Ni(Pi(n.modelTopology,n.weightSpecs,n.weightData)),console.log("ReelSense: AI Model loaded from chrome.storage.local."),Se&&(za(()=>{Se.predict(Fi([1,qe.length]))}),console.log("Model warmed up."))):(console.log("ReelSense: No valid saved model artifacts found in storage."),Se=null)}catch(a){console.error("Error loading model from storage:",a),Se=null,console.log("Clearing potentially corrupted model data from storage."),await chrome.storage.local.remove("reelsense-model-artifacts")}}async function mh(a,n){try{await Ct();const o=(await chrome.storage.local.get("dailyStats")).dailyStats;o&&o[a]?(n.time&&(o[a].time=(o[a].time||0)+n.time),n.videos&&(o[a].videos=(o[a].videos||0)+n.videos),n.mindlessScore&&(o.totalMindlessScore=(o.totalMindlessScore||0)+n.mindlessScore,o.highestMindlessScore=Math.max(o.highestMindlessScore||0,n.mindlessScore)),await chrome.storage.local.set({dailyStats:o})):console.warn("Could not update stats, platform data missing:",a,o)}catch(s){console.error("Error in updateDailyStats:",s)}}async function fh(a,n){try{await Ct();const o=(await chrome.storage.local.get("dailyStats")).dailyStats;o&&o[a]?(o[a].interventions=(o[a].interventions||0)+1,await chrome.storage.local.set({dailyStats:o}),console.log(`Intervention recorded for ${a}. Total: ${o[a].interventions}`)):console.warn("Could not record intervention, platform data missing:",a,o)}catch(s){console.error("Error in recordIntervention:",s)}}
