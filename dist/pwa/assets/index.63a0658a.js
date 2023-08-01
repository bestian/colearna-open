import{g as zh,a as Za,b as Qh,_ as en,C as tn,r as pt,c as qr,d as Bg,e as Br,E as jr,L as Kr,f as jg,S as Ft,h as ie,j as Kg,k as Hg,l as bt,m as De,F as ns,n as Gg,q as Qn,o as $g,p as fi,t as pi,u as la,v as Yh,w as Xh,D as bi,x as zg,y as Jh,z as v,A as se,B as el,G as Tt,H as Qg,I as Yg,J as Mn,K as nr,M as is,N as tl,O as Zh,P as Xg,Q as Jg,R as Hr,T as Zg,U as em}from"./index.esm.5c1ec681.js";import{e as tm,g as nl,i as ed,r as Ke,u as ve,s as td,b as nd,w as id,j as sd,k as rd,l as od}from"./index.77d05b19.js";function il(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ad(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nm=ad,ld=new jr("auth","Firebase",ad());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Kr("@firebase/auth");function im(n,...e){ir.logLevel<=bt.WARN&&ir.warn(`Auth (${Ft}): ${n}`,...e)}function $s(n,...e){ir.logLevel<=bt.ERROR&&ir.error(`Auth (${Ft}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw sl(n,...e)}function Xe(n,...e){return sl(n,...e)}function cd(n,e,t){const i=Object.assign(Object.assign({},nm()),{[e]:t});return new jr("auth","Firebase",i).create(e,{appName:n.name})}function sm(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Fe(n,"argument-error"),cd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ld.create(n,...e)}function P(n,e,...t){if(!n)throw sl(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $s(e),new Error(e)}function _t(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rm(){return Gc()==="http:"||Gc()==="https:"}function Gc(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rm()||jg()||"connection"in navigator)?navigator.onLine:!0}function am(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=Za()||Qh()}get(){return om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new ss(3e4,6e4);function hn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function dn(n,e,t,i,s={}){return hd(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Qn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ud.fetch()(dd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function hd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},lm),e);try{const s=new um(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw bs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw bs(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cd(n,u,c);Fe(n,u)}}catch(s){if(s instanceof ns)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function rs(n,e,t,i,s={}){const r=await dn(n,e,t,i,s);return"mfaPendingCredential"in r&&Fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function dd(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?rl(n.config,s):`${n.config.apiScheme}://${s}`}class um{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xe(this.auth,"network-request-failed")),cm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function dm(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fm(n,e=!1){const t=ie(n),i=await t.getIdToken(e),s=ol(i);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ti(xo(s.auth_time)),issuedAtTime:Ti(xo(s.iat)),expirationTime:Ti(xo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xo(n){return Number(n)*1e3}function ol(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const s=$g(t);return s?JSON.parse(s):($s("Failed to decode base64 JWT payload"),null)}catch(s){return $s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pm(n){const e=ol(n);return P(e,"internal-error"),P(typeof e.exp!="undefined","internal-error"),P(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ns&&_m(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _m({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Di(n,dm(t,{idToken:i}));P(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vm(r.providerUserInfo):[],a=ym(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function mm(n){const e=ie(n);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ym(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vm(n){return n.map(e=>{var{providerId:t}=e,i=il(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(n,e){const t=await hd(n,{},async()=>{const i=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=dd(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ud.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken!="undefined","internal-error"),P(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Em(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Oi;return i&&(P(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){P(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Xt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Di(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fm(this,e)}reload(){return mm(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await sr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Di(this,hm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,b=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:C,isAnonymous:F,providerData:W,stsTokenManager:ge}=t;P(I&&ge,e,"internal-error");const Pe=Oi.fromJSON(this.name,ge);P(typeof I=="string",e,"internal-error"),It(h,e.name),It(d,e.name),P(typeof C=="boolean",e,"internal-error"),P(typeof F=="boolean",e,"internal-error"),It(f,e.name),It(p,e.name),It(_,e.name),It(g,e.name),It(T,e.name),It(b,e.name);const jt=new Xt({uid:I,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:F,photoURL:p,phoneNumber:f,tenantId:_,stsTokenManager:Pe,createdAt:T,lastLoginAt:b});return W&&Array.isArray(W)&&(jt.providerData=W.map(yn=>Object.assign({},yn))),g&&(jt._redirectEventId=g),jt}static async _fromIdTokenResponse(e,t,i=!1){const s=new Oi;s.updateFromServerResponse(t);const r=new Xt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await sr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map;function at(n){_t(n instanceof Function,"Expected a class definition");let e=$c.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$c.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pd.type="NONE";const zc=pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n,e,t){return`firebase:${n}:${e}:${t}`}class Cn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zs(this.userKey,s.apiKey,r),this.fullPersistenceKey=zs("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cn(at(zc),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||at(zc);const o=zs(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Xt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Cn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Cn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(Ed(e))return"Webos";if(al(e))return"Safari";if((e.includes("chrome/")||gd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _d(n=De()){return/firefox\//i.test(n)}function al(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gd(n=De()){return/crios\//i.test(n)}function md(n=De()){return/iemobile/i.test(n)}function yd(n=De()){return/android/i.test(n)}function vd(n=De()){return/blackberry/i.test(n)}function Ed(n=De()){return/webos/i.test(n)}function Gr(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tm(n=De()){var e;return Gr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Im(){return Gg()&&document.documentMode===10}function Td(n=De()){return Gr(n)||yd(n)||Ed(n)||vd(n)||/windows phone/i.test(n)||md(n)}function wm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,e=[]){let t;switch(n){case"Browser":t=Qc(De());break;case"Worker":t=`${Qc(De())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ft}/${i}`}async function wd(n,e){return dn(n,"GET","/v2/recaptchaConfig",hn(n,e))}function Yc(n){return n!==void 0&&n.enterprise!==void 0}class Rd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Cd(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Xe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Rm().appendChild(i)})}function Cm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Am="https://www.google.com/recaptcha/enterprise.js?render=",Pm="recaptcha-enterprise",Sm="NO_RECAPTCHA";class Ad{constructor(e){this.type=Pm,this.auth=Ut(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{wd(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Rd(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Yc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Sm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Yc(window.grecaptcha))s(a,r,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Cd(Am+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xn(n,e,t,i=!1){const s=new Ad(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xc(this),this.idTokenSubscription=new Xc(this),this.beforeStateQueue=new km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ld,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=am()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await wd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Rd(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Ad(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&im(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ut(n){return ie(n)}class Xc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kg(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,e){const t=qr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Hg(r,e!=null?e:{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function Dm(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Om(n,e,t){const i=Ut(n);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Pd(e),{host:o,port:a}=Mm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xm()}function Pd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mm(n){const e=Pd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Jc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Jc(o)}}}function Jc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Vm(n,e){return dn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e){return rs(n,"POST","/v1/accounts:signInWithPassword",hn(n,e))}async function Sd(n,e){return dn(n,"POST","/v1/accounts:sendOobCode",hn(n,e))}async function Lm(n,e){return Sd(n,e)}async function Lo(n,e){return Sd(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}async function Um(n,e){return rs(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends ll{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Mi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Mi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await xn(e,i,"signInWithPassword");return Vo(e,s)}else return Vo(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await xn(e,i,"signInWithPassword");return Vo(e,r)}else return Promise.reject(s)});case"emailLink":return Fm(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Vm(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Um(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,e){return rs(n,"POST","/v1/accounts:signInWithIdp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="http://localhost";class nn extends ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=il(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new nn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return An(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,An(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,An(e,t)}buildRequest(){const e={requestUri:Wm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bm(n){const e=fi(pi(n)).link,t=e?fi(pi(e)).deep_link_id:null,i=fi(pi(n)).deep_link_id;return(i?fi(pi(i)).link:null)||i||t||e||n}class cl{constructor(e){var t,i,s,r,o,a;const l=fi(pi(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=qm((s=l.mode)!==null&&s!==void 0?s:null);P(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Bm(e);try{return new cl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(e,t){return Mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=cl.parseLink(t);return P(i,"argument-error"),Mi._fromEmailAndCode(e,i.code,i.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends os{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Rt.credential(t,i)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends os{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends os{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return At.credential(t,i)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n,e){return rs(n,"POST","/v1/accounts:signUp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Xt._fromIdTokenResponse(e,i,s),o=Zc(i);return new sn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Zc(i);return new sn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ns{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,rr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new rr(e,t,i,s)}}function kd(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?rr._fromErrorAndOperation(n,r,e,i):r})}async function jm(n,e,t=!1){const i=await Di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Di(n,kd(i,s,e,n),t);P(r.idToken,i,"internal-error");const o=ol(r.idToken);P(o,i,"internal-error");const{sub:a}=o;return P(n.uid===a,i,"user-mismatch"),sn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Fe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(n,e,t=!1){const i="signIn",s=await kd(n,i,e),r=await sn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Hm(n,e){return Nd(Ut(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e,t){var i;P(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),P(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(P(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(P(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(n,e,t){var i;const s=Ut(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await xn(s,r,"getOobCode",!0);t&&Qs(s,o,t),await Lo(s,o)}else t&&Qs(s,r,t),await Lo(s,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xn(s,r,"getOobCode",!0);t&&Qs(s,a,t),await Lo(s,a)}else return Promise.reject(o)})}async function q0(n,e,t){var i;const s=Ut(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await xn(s,r,"signUpPassword");o=Fo(s,c)}else o=Fo(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await xn(s,r,"signUpPassword");return Fo(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await sn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function B0(n,e,t){return Hm(ie(n),Yn.credential(e,t))}async function j0(n,e){const t=ie(n),i=await n.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&Qs(t.auth,s,e);const{email:r}=await Lm(t.auth,s);r!==n.email&&await n.reload()}function bd(n,e,t,i){return ie(n).onIdTokenChanged(e,t,i)}function Gm(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}const or="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(or,"1"),this.storage.removeItem(or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){const n=De();return al(n)||Gr(n)}const zm=1e3,Qm=10;class Od extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$m()&&wm(),this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Im()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Od.type="LOCAL";const Ym=Od;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Md.type="SESSION";const xd=Md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new $r(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Xm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=hl("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Zm(n){Je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){return typeof Je().WorkerGlobalScope!="undefined"&&typeof Je().importScripts=="function"}async function ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ny(){return Vd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="firebaseLocalStorageDb",iy=1,ar="firebaseLocalStorage",Fd="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zr(n,e){return n.transaction([ar],e?"readwrite":"readonly").objectStore(ar)}function sy(){const n=indexedDB.deleteDatabase(Ld);return new as(n).toPromise()}function ua(){const n=indexedDB.open(Ld,iy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ar,{keyPath:Fd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ar)?e(i):(i.close(),await sy(),e(await ua()))})})}async function eu(n,e,t){const i=zr(n,!0).put({[Fd]:e,value:t});return new as(i).toPromise()}async function ry(n,e){const t=zr(n,!1).get(e),i=await new as(t).toPromise();return i===void 0?null:i.value}function tu(n,e){const t=zr(n,!0).delete(e);return new as(t).toPromise()}const oy=800,ay=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>ay)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$r._getInstance(ny()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ey(),!this.activeServiceWorker)return;this.sender=new Jm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await eu(e,or,"1"),await tu(e,or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>eu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ry(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=zr(s,!1).getAll();return new as(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const ly=Ud;new ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,e){return e?at(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,t){return An(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cy(n){return Nd(n.auth,new dl(n),n.bypassAuthState)}function uy(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Km(t,new dl(n),n.bypassAuthState)}async function hy(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),jm(t,new dl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cy;case"linkViaPopup":case"linkViaRedirect":return hy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:Fe(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new ss(2e3,1e4);async function K0(n,e,t){const i=Ut(n);sm(n,e,ul);const s=Wd(i,t);return new Ht(i,"signInViaPopup",e,s).executeNotNull()}class Ht extends qd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dy.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="pendingRedirect",Ys=new Map;class py extends qd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const i=await _y(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _y(n,e){const t=yy(e),i=my(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function gy(n,e){Ys.set(n._key(),e)}function my(n){return at(n._redirectPersistence)}function yy(n){return zs(fy,n.config.apiKey,n.name)}async function vy(n,e,t=!1){const i=Ut(n),s=Wd(i,e),o=await new py(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=10*60*1e3;class Ty{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Iy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ey&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Iy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e={}){return dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cy=/^https?/;async function Ay(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wy(n);for(const t of e)try{if(Py(t))return}catch{}Fe(n,"unauthorized-domain")}function Py(n){const e=ca(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Cy.test(t))return!1;if(Ry.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new ss(3e4,6e4);function iu(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ky(n){return new Promise((e,t)=>{var i,s,r;function o(){iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iu(),t(Xe(n,"network-request-failed"))},timeout:Sy.get()})}if(!((s=(i=Je().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Je().gapi)===null||r===void 0)&&r.load)o();else{const a=Cm("iframefcb");return Je()[a]=()=>{gapi.load?o():t(Xe(n,"network-request-failed"))},Cd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function Ny(n){return Xs=Xs||ky(n),Xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new ss(5e3,15e3),Dy="__/auth/iframe",Oy="emulator/auth/iframe",My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vy(n){const e=n.config;P(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rl(e,Oy):`https://${n.config.authDomain}/${Dy}`,i={apiKey:e.apiKey,appName:n.name,v:Ft},s=xy.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Qn(i).slice(1)}`}async function Ly(n){const e=await Ny(n),t=Je().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:Vy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),a=Je().setTimeout(()=>{r(o)},by.get());function l(){Je().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uy=500,Wy=600,qy="_blank",By="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jy(n,e,t,i=Uy,s=Wy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fy),{width:i.toString(),height:s.toString(),top:r,left:o}),c=De().toLowerCase();t&&(a=gd(c)?qy:t),_d(c)&&(e=e||By,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Tm(c)&&a!=="_self")return Ky(e||"",a),new su(null);const h=window.open(e||"",a,u);P(h,n,"popup-blocked");try{h.focus()}catch{}return new su(h)}function Ky(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="__/auth/handler",Gy="emulator/auth/handler",$y=encodeURIComponent("fac");async function ru(n,e,t,i,s,r){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ft,eventId:s};if(e instanceof ul){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",la(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof os){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${$y}=${encodeURIComponent(l)}`:"";return`${zy(n)}?${Qn(a).slice(1)}${c}`}function zy({config:n}){return n.emulator?rl(n,Gy):`https://${n.authDomain}/${Hy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class Qy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xd,this._completeRedirectFn=vy,this._overrideRedirectResult=gy}async _openPopup(e,t,i,s){var r;_t((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ru(e,t,i,ca(),s);return jy(e,o,hl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await ru(e,t,i,ca(),s);return Zm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(_t(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ly(e),i=new Ty(e);return t.register("authEvent",s=>(P(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uo,{type:Uo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Uo];o!==void 0&&t(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ay(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Td()||al()||Gr()}}const Yy=Qy;var ou="@firebase/auth",au="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zy(n){en(new tn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(n)},c=new Nm(i,s,r,l);return Dm(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),en(new tn("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(i=>new Xy(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(ou,au,Jy(n)),pt(ou,au,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=5*60,tv=zh("authIdTokenMaxAge")||ev;let lu=null;const nv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>tv)return;const s=t==null?void 0:t.token;lu!==s&&(lu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jd(n=Br()){const e=qr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bm(n,{popupRedirectResolver:Yy,persistence:[ly,Ym,xd]}),i=zh("authTokenSyncURL");if(i){const r=nv(i);Gm(t,r,()=>r(t.currentUser)),bd(t,o=>r(o))}const s=Bg("auth");return s&&Om(t,`http://${s}`),t}Zy("Browser");var iv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,fl=fl||{},N=iv||self;function Qr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ls(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function sv(n){return Object.prototype.hasOwnProperty.call(n,Wo)&&n[Wo]||(n[Wo]=++rv)}var Wo="closure_uid_"+(1e9*Math.random()>>>0),rv=0;function ov(n,e,t){return n.call.apply(n.bind,arguments)}function av(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function we(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?we=ov:we=av,we.apply(null,arguments)}function Ds(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function de(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Wt(){this.s=this.s,this.o=this.o}var lv=0;Wt.prototype.s=!1;Wt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lv!=0)&&sv(this)};Wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function pl(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function cu(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Qr(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Re(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var cv=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",()=>{},e),N.removeEventListener("test",()=>{},e)}catch{}return n}();function xi(n){return/^[\s\xa0]*$/.test(n)}function Yr(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ze(n){return Yr().indexOf(n)!=-1}function _l(n){return _l[" "](n),n}_l[" "]=function(){};function uv(n,e){var t=nE;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var hv=ze("Opera"),Vn=ze("Trident")||ze("MSIE"),Hd=ze("Edge"),ha=Hd||Vn,Gd=ze("Gecko")&&!(Yr().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),dv=Yr().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function $d(){var n=N.document;return n?n.documentMode:void 0}var da;e:{var qo="",Bo=function(){var n=Yr();if(Gd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Hd)return/Edge\/([\d\.]+)/.exec(n);if(Vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dv)return/WebKit\/(\S+)/.exec(n);if(hv)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Bo&&(qo=Bo?Bo[1]:""),Vn){var jo=$d();if(jo!=null&&jo>parseFloat(qo)){da=String(jo);break e}}da=qo}var fa;if(N.document&&Vn){var uu=$d();fa=uu||parseInt(da,10)||void 0}else fa=void 0;var fv=fa;function Vi(n,e){if(Re.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Gd){e:{try{_l(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:pv[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Vi.$.h.call(this)}}de(Vi,Re);var pv={2:"touch",3:"pen",4:"mouse"};Vi.prototype.h=function(){Vi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var cs="closure_listenable_"+(1e6*Math.random()|0),_v=0;function gv(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++_v,this.fa=this.ia=!1}function Xr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function gl(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function mv(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function zd(n){const e={};for(const t in n)e[t]=n[t];return e}const hu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qd(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<hu.length;r++)t=hu[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Jr(n){this.src=n,this.g={},this.h=0}Jr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=_a(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new gv(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function pa(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Kd(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Xr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function _a(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var ml="closure_lm_"+(1e6*Math.random()|0),Ko={};function Yd(n,e,t,i,s){if(i&&i.once)return Jd(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yd(n,e[r],t,i,s);return null}return t=El(t),n&&n[cs]?n.O(e,t,ls(i)?!!i.capture:!!i,s):Xd(n,e,t,!1,i,s)}function Xd(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=ls(s)?!!s.capture:!!s,a=vl(n);if(a||(n[ml]=a=new Jr(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=yv(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)cv||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(ef(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function yv(){function n(t){return e.call(n.src,n.listener,t)}const e=vv;return n}function Jd(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Jd(n,e[r],t,i,s);return null}return t=El(t),n&&n[cs]?n.P(e,t,ls(i)?!!i.capture:!!i,s):Xd(n,e,t,!0,i,s)}function Zd(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Zd(n,e[r],t,i,s);else i=ls(i)?!!i.capture:!!i,t=El(t),n&&n[cs]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=_a(r,t,i,s),-1<t&&(Xr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=vl(n))&&(e=n.g[e.toString()],n=-1,e&&(n=_a(e,t,i,s)),(t=-1<n?e[n]:null)&&yl(t))}function yl(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[cs])pa(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(ef(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=vl(e))?(pa(t,n),t.h==0&&(t.src=null,e[ml]=null)):Xr(n)}}}function ef(n){return n in Ko?Ko[n]:Ko[n]="on"+n}function vv(n,e){if(n.fa)n=!0;else{e=new Vi(e,this);var t=n.listener,i=n.la||n.src;n.ia&&yl(n),n=t.call(i,e)}return n}function vl(n){return n=n[ml],n instanceof Jr?n:null}var Ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function El(n){return typeof n=="function"?n:(n[Ho]||(n[Ho]=function(e){return n.handleEvent(e)}),n[Ho])}function he(){Wt.call(this),this.i=new Jr(this),this.S=this,this.J=null}de(he,Wt);he.prototype[cs]=!0;he.prototype.removeEventListener=function(n,e,t,i){Zd(this,n,e,t,i)};function _e(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Re(e,n);else if(e instanceof Re)e.target=e.target||n;else{var s=e;e=new Re(i,n),Qd(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Os(o,i,!0,e)&&s}if(o=e.g=n,s=Os(o,i,!0,e)&&s,s=Os(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Os(o,i,!1,e)&&s}he.prototype.N=function(){if(he.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Xr(t[i]);delete n.g[e],n.h--}}this.J=null};he.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};he.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Os(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&pa(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Tl=N.JSON.stringify;class Ev{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Tv(){var n=Il;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Iv{constructor(){this.h=this.g=null}add(e,t){const i=tf.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var tf=new Ev(()=>new wv,n=>n.reset());class wv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Rv(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Cv(n){N.setTimeout(()=>{throw n},0)}let Li,Fi=!1,Il=new Iv,nf=()=>{const n=N.Promise.resolve(void 0);Li=()=>{n.then(Av)}};var Av=()=>{for(var n;n=Tv();){try{n.h.call(n.g)}catch(t){Cv(t)}var e=tf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Fi=!1};function Zr(n,e){he.call(this),this.h=n||1,this.g=e||N,this.j=we(this.qb,this),this.l=Date.now()}de(Zr,he);E=Zr.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(wl(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wl(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){Zr.$.N.call(this),wl(this),delete this.g};function Rl(n,e,t){if(typeof n=="function")t&&(n=we(n,t));else if(n&&typeof n.handleEvent=="function")n=we(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function sf(n){n.g=Rl(()=>{n.g=null,n.i&&(n.i=!1,sf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Pv extends Wt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sf(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(n){Wt.call(this),this.h=n,this.g={}}de(Ui,Wt);var du=[];function rf(n,e,t,i){Array.isArray(t)||(t&&(du[0]=t.toString()),t=du);for(var s=0;s<t.length;s++){var r=Yd(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function of(n){gl(n.g,function(e,t){this.g.hasOwnProperty(t)&&yl(e)},n),n.g={}}Ui.prototype.N=function(){Ui.$.N.call(this),of(this)};Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function eo(){this.g=!0}eo.prototype.Ea=function(){this.g=!1};function Sv(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function kv(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function wn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+bv(n,t)+(i?" "+i:"")})}function Nv(n,e){n.info(function(){return"TIMEOUT: "+e})}eo.prototype.info=function(){};function bv(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Tl(t)}catch{return e}}var fn={},fu=null;function to(){return fu=fu||new he}fn.Ta="serverreachability";function af(n){Re.call(this,fn.Ta,n)}de(af,Re);function Wi(n){const e=to();_e(e,new af(e))}fn.STAT_EVENT="statevent";function lf(n,e){Re.call(this,fn.STAT_EVENT,n),this.stat=e}de(lf,Re);function Se(n){const e=to();_e(e,new lf(e,n))}fn.Ua="timingevent";function cf(n,e){Re.call(this,fn.Ua,n),this.size=e}de(cf,Re);function us(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var no={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cl(){}Cl.prototype.h=null;function pu(n){return n.h||(n.h=n.i())}function hf(){}var hs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Al(){Re.call(this,"d")}de(Al,Re);function Pl(){Re.call(this,"c")}de(Pl,Re);var ga;function io(){}de(io,Cl);io.prototype.g=function(){return new XMLHttpRequest};io.prototype.i=function(){return{}};ga=new io;function ds(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new Ui(this),this.P=Dv,n=ha?125:void 0,this.V=new Zr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var Dv=45e3,ma={},lr={};E=ds.prototype;E.setTimeout=function(n){this.P=n};function ya(n,e,t){n.L=1,n.v=ro(gt(e)),n.s=t,n.S=!0,ff(n,null)}function ff(n,e){n.G=Date.now(),fs(n),n.A=gt(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Tf(t.i,"t",i),n.C=0,t=n.l.J,n.h=new df,n.g=Bf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new Pv(we(n.Pa,n,n.g),n.O)),rf(n.U,n.g,"readystatechange",n.nb),e=n.I?zd(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Wi(),Sv(n.j,n.u,n.A,n.m,n.W,n.s)}E.nb=function(n){n=n.target;const e=this.M;e&&Qe(n)==3?e.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)e:{const u=Qe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ha||this.g&&(this.h.h||this.g.ja()||yu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Wi(3):Wi(2)),so(this);var t=this.g.da();this.ca=t;t:if(pf(this)){var i=yu(this.g);n="";var s=i.length,r=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gt(this),Ii(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,kv(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xi(a)){var c=a;break t}}c=null}if(t=c)wn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,t);else{this.i=!1,this.o=3,Se(12),Gt(this),Ii(this);break e}}this.S?(_f(this,u,o),ha&&this.i&&u==3&&(rf(this.U,this.V,"tick",this.mb),this.V.start())):(wn(this.j,this.m,o,null),va(this,o)),u==4&&Gt(this),this.i&&!this.J&&(u==4?Ff(this.l,this):(this.i=!1,fs(this)))}else Zv(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Se(12)):(this.o=0,Se(13)),Gt(this),Ii(this)}}}catch{}finally{}};function pf(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function _f(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=Ov(n,t),s==lr){e==4&&(n.o=4,Se(14),i=!1),wn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ma){n.o=4,Se(15),wn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else wn(n.j,n.m,s,null),va(n,s);pf(n)&&s!=lr&&s!=ma&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Se(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ol(e),e.M=!0,Se(11))):(wn(n.j,n.m,t,"[Invalid Chunked Response]"),Gt(n),Ii(n))}E.mb=function(){if(this.g){var n=Qe(this.g),e=this.g.ja();this.C<e.length&&(so(this),_f(this,n,e),this.i&&n!=4&&fs(this))}};function Ov(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?lr:(t=Number(e.substring(t,i)),isNaN(t)?ma:(i+=1,i+t>e.length?lr:(e=e.slice(i,i+t),n.C=i+t,e)))}E.cancel=function(){this.J=!0,Gt(this)};function fs(n){n.Y=Date.now()+n.P,gf(n,n.P)}function gf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=us(we(n.lb,n),e)}function so(n){n.B&&(N.clearTimeout(n.B),n.B=null)}E.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Nv(this.j,this.A),this.L!=2&&(Wi(),Se(17)),Gt(this),this.o=2,Ii(this)):gf(this,this.Y-n)};function Ii(n){n.l.H==0||n.J||Ff(n.l,n)}function Gt(n){so(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,wl(n.V),of(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function va(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ea(t.i,n))){if(!n.K&&Ea(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)hr(t),lo(t);else break e;Dl(t),Se(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=us(we(t.ib,t),6e3));if(1>=Rf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else $t(t,11)}else if((n.K||t.g==n)&&hr(t),!xi(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Sl(r,r.h),r.h=null))}if(i.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,$(i.I,i.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=qf(i,i.J?i.pa:null,i.Y),o.K){Cf(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(so(a),fs(a)),i.g=o}else Vf(i);0<t.j.length&&co(t)}else c[0]!="stop"&&c[0]!="close"||$t(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?$t(t,7):bl(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}Wi(4)}catch{}}function Mv(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Qr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function xv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(Qr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function mf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Qr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=xv(n),i=Mv(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var yf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vv(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Jt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Jt){this.h=n.h,cr(this,n.j),this.s=n.s,this.g=n.g,ur(this,n.m),this.l=n.l;var e=n.i,t=new qi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),_u(this,t),this.o=n.o}else n&&(e=String(n).match(yf))?(this.h=!1,cr(this,e[1]||"",!0),this.s=_i(e[2]||""),this.g=_i(e[3]||"",!0),ur(this,e[4]),this.l=_i(e[5]||"",!0),_u(this,e[6]||"",!0),this.o=_i(e[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}Jt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(gi(e,gu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(gi(e,gu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(gi(t,t.charAt(0)=="/"?Uv:Fv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",gi(t,qv)),n.join("")};function gt(n){return new Jt(n)}function cr(n,e,t){n.j=t?_i(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ur(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function _u(n,e,t){e instanceof qi?(n.i=e,Bv(n.i,n.h)):(t||(e=gi(e,Wv)),n.i=new qi(e,n.h))}function $(n,e,t){n.i.set(e,t)}function ro(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _i(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function gi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Lv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Lv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var gu=/[#\/\?@]/g,Fv=/[#\?:]/g,Uv=/[#\?]/g,Wv=/[#\?@]/g,qv=/#/g;function qi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function qt(n){n.g||(n.g=new Map,n.h=0,n.i&&Vv(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=qi.prototype;E.add=function(n,e){qt(this),this.i=null,n=Xn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function vf(n,e){qt(n),e=Xn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ef(n,e){return qt(n),e=Xn(n,e),n.g.has(e)}E.forEach=function(n,e){qt(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};E.ta=function(){qt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};E.Z=function(n){qt(this);let e=[];if(typeof n=="string")Ef(this,n)&&(e=e.concat(this.g.get(Xn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};E.set=function(n,e){return qt(this),this.i=null,n=Xn(this,n),Ef(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Tf(n,e,t){vf(n,e),0<t.length&&(n.i=null,n.g.set(Xn(n,e),pl(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Xn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Bv(n,e){e&&!n.j&&(qt(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(vf(this,i),Tf(this,s,t))},n)),n.j=e}var jv=class{constructor(n,e){this.g=n,this.map=e}};function If(n){this.l=n||Kv,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kv=10;function wf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Rf(n){return n.h?1:n.g?n.g.size:0}function Ea(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Sl(n,e){n.g?n.g.add(e):n.h=e}function Cf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}If.prototype.cancel=function(){if(this.i=Af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Af(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return pl(n.i)}var Hv=class{stringify(n){return N.JSON.stringify(n,void 0)}parse(n){return N.JSON.parse(n,void 0)}};function Gv(){this.g=new Hv}function $v(n,e,t){const i=t||"";try{mf(n,function(s,r){let o=s;ls(s)&&(o=Tl(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function zv(n,e){const t=new eo;if(N.Image){const i=new Image;i.onload=Ds(Ms,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Ds(Ms,t,i,"TestLoadImage: error",!1,e),i.onabort=Ds(Ms,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ds(Ms,t,i,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Ms(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ps(n){this.l=n.fc||null,this.j=n.ob||!1}de(ps,Cl);ps.prototype.g=function(){return new oo(this.l,this.j)};ps.prototype.i=function(n){return function(){return n}}({});function oo(n,e){he.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=kl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}de(oo,he);var kl=0;E=oo.prototype;E.open=function(n,e){if(this.readyState!=kl)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bi(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||N).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=kl};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Pf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?_s(this):Bi(this),this.readyState==3&&Pf(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,_s(this))};E.Ya=function(n){this.g&&(this.response=n,_s(this))};E.ka=function(){this.g&&_s(this)};function _s(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bi(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Qv=N.JSON.parse;function J(n){he.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sf,this.L=this.M=!1}de(J,he);var Sf="",Yv=/^https?$/i,Xv=["POST","PUT"];E=J.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ga.g(),this.C=this.u?pu(this.u):pu(ga),this.g.onreadystatechange=we(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){mu(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=N.FormData&&n instanceof N.FormData,!(0<=Kd(Xv,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bf(this),0<this.B&&((this.L=Jv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=we(this.ua,this)):this.A=Rl(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){mu(this,r)}};function Jv(n){return Vn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof fl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function mu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,kf(n),ao(n)}function kf(n){n.F||(n.F=!0,_e(n,"complete"),_e(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_e(this,"complete"),_e(this,"abort"),ao(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ao(this,!0)),J.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Nf(this):this.kb())};E.kb=function(){Nf(this)};function Nf(n){if(n.h&&typeof fl!="undefined"&&(!n.C[1]||Qe(n)!=4||n.da()!=2)){if(n.v&&Qe(n)==4)Rl(n.La,0,n);else if(_e(n,"readystatechange"),Qe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(yf)[1]||null;!s&&N.self&&N.self.location&&(s=N.self.location.protocol.slice(0,-1)),i=!Yv.test(s?s.toLowerCase():"")}t=i}if(t)_e(n,"complete"),_e(n,"success");else{n.m=6;try{var r=2<Qe(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",kf(n)}}finally{ao(n)}}}}function ao(n,e){if(n.g){bf(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||_e(n,"ready");try{t.onreadystatechange=i}catch{}}}function bf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function Qe(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Qv(e)}};function yu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Sf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Zv(n){const e={};n=(n.g&&2<=Qe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(xi(n[i]))continue;var t=Rv(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}mv(e,function(i){return i.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Df(n){let e="";return gl(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function Nl(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Df(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):$(n,e,t))}function oi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Of(n){this.Ga=0,this.j=[],this.l=new eo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,n),this.hb=oi("retryDelaySeedMs",1e4,n),this.eb=oi("forwardChannelMaxRetries",2,n),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new If(n&&n.concurrentRequestLimit),this.Ja=new Gv,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Of.prototype;E.ra=8;E.H=1;function bl(n){if(Mf(n),n.H==3){var e=n.W++,t=gt(n.I);if($(t,"SID",n.K),$(t,"RID",e),$(t,"TYPE","terminate"),gs(n,t),e=new ds(n,n.l,e),e.L=2,e.v=ro(gt(t)),t=!1,N.navigator&&N.navigator.sendBeacon)try{t=N.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=Bf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fs(e)}Wf(n)}function lo(n){n.g&&(Ol(n),n.g.cancel(),n.g=null)}function Mf(n){lo(n),n.u&&(N.clearTimeout(n.u),n.u=null),hr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function co(n){if(!wf(n.i)&&!n.m){n.m=!0;var e=n.Na;Li||nf(),Fi||(Li(),Fi=!0),Il.add(e,n),n.C=0}}function eE(n,e){return Rf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=us(we(n.Na,n,e),Uf(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new ds(this,this.l,n);let r=this.s;if(this.U&&(r?(r=zd(r),Qd(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xf(this,s,e),t=gt(this.I),$(t,"RID",n),$(t,"CVER",22),this.F&&$(t,"X-HTTP-Session-Id",this.F),gs(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Df(r)))+"&"+e:this.o&&Nl(t,this.o,r)),Sl(this.i,s),this.bb&&$(t,"TYPE","init"),this.P?($(t,"$req",e),$(t,"SID","null"),s.aa=!0,ya(s,t,null)):ya(s,t,e),this.H=2}}else this.H==3&&(n?vu(this,n):this.j.length==0||wf(this.i)||vu(this))};function vu(n,e){var t;e?t=e.m:t=n.W++;const i=gt(n.I);$(i,"SID",n.K),$(i,"RID",t),$(i,"AID",n.V),gs(n,i),n.o&&n.s&&Nl(i,n.o,n.s),t=new ds(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=xf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Sl(n.i,t),ya(t,i,e)}function gs(n,e){n.na&&gl(n.na,function(t,i){$(e,i,t)}),n.h&&mf({},function(t,i){$(e,i,t)})}function xf(n,e,t){t=Math.min(n.j.length,t);var i=n.h?we(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{$v(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Vf(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Li||nf(),Fi||(Li(),Fi=!0),Il.add(e,n),n.A=0}}function Dl(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=us(we(n.Ma,n),Uf(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,Lf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=us(we(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Se(10),lo(this),Lf(this))};function Ol(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Lf(n){n.g=new ds(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=gt(n.wa);$(e,"RID","rpc"),$(e,"SID",n.K),$(e,"AID",n.V),$(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&$(e,"TO",n.qa),$(e,"TYPE","xmlhttp"),gs(n,e),n.o&&n.s&&Nl(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ro(gt(e)),t.s=null,t.S=!0,ff(t,n)}E.ib=function(){this.v!=null&&(this.v=null,lo(this),Dl(this),Se(19))};function hr(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Ff(n,e){var t=null;if(n.g==e){hr(n),Ol(n),n.g=null;var i=2}else if(Ea(n.i,e))t=e.F,Cf(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=to(),_e(i,new cf(i,t)),co(n)}else Vf(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&eE(n,e)||i==2&&Dl(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:$t(n,5);break;case 4:$t(n,10);break;case 3:$t(n,6);break;default:$t(n,2)}}}function Uf(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function $t(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=we(n.pb,n);t||(t=new Jt("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||cr(t,"https"),ro(t)),zv(t.toString(),i)}else Se(2);n.H=0,n.h&&n.h.za(e),Wf(n),Mf(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Se(2)):(this.l.info("Failed to ping google.com"),Se(1))};function Wf(n){if(n.H=0,n.ma=[],n.h){const e=Af(n.i);(e.length!=0||n.j.length!=0)&&(cu(n.ma,e),cu(n.ma,n.j),n.i.i.length=0,pl(n.j),n.j.length=0),n.h.ya()}}function qf(n,e,t){var i=t instanceof Jt?gt(t):new Jt(t);if(i.g!="")e&&(i.g=e+"."+i.g),ur(i,i.m);else{var s=N.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Jt(null);i&&cr(r,i),e&&(r.g=e),s&&ur(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&$(i,t,e),$(i,"VER",n.ra),gs(n,i),i}function Bf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new J(new ps({ob:!0})):new J(n.va),e.Oa(n.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function jf(){}E=jf.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function dr(){if(Vn&&!(10<=Number(fv)))throw Error("Environmental error: no available transport.")}dr.prototype.g=function(n,e){return new xe(n,e)};function xe(n,e){he.call(this),this.g=new Of(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!xi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Jn(this)}de(xe,he);xe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Se(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=qf(n,null,n.Y),co(n)};xe.prototype.close=function(){bl(this.g)};xe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Tl(n),n=t);e.j.push(new jv(e.fb++,n)),e.H==3&&co(e)};xe.prototype.N=function(){this.g.h=null,delete this.j,bl(this.g),delete this.g,xe.$.N.call(this)};function Kf(n){Al.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}de(Kf,Al);function Hf(){Pl.call(this),this.status=1}de(Hf,Pl);function Jn(n){this.g=n}de(Jn,jf);Jn.prototype.Ba=function(){_e(this.g,"a")};Jn.prototype.Aa=function(n){_e(this.g,new Kf(n))};Jn.prototype.za=function(n){_e(this.g,new Hf)};Jn.prototype.ya=function(){_e(this.g,"b")};function tE(){this.blockSize=-1}function Ge(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}de(Ge,tE);Ge.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Go(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}Ge.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)Go(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){Go(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){Go(this,i),s=0;break}}this.h=s,this.i+=e};Ge.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function j(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var nE={};function Ml(n){return-128<=n&&128>n?uv(n,function(e){return new j([e|0],0>e?-1:0)}):new j([n|0],0>n?-1:0)}function Ye(n){if(isNaN(n)||!isFinite(n))return Pn;if(0>n)return pe(Ye(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Ta;return new j(e,0)}function Gf(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return pe(Gf(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ye(Math.pow(e,8)),i=Pn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Ye(Math.pow(e,r)),i=i.R(r).add(Ye(o))):(i=i.R(t),i=i.add(Ye(o)))}return i}var Ta=4294967296,Pn=Ml(0),Ia=Ml(1),Eu=Ml(16777216);E=j.prototype;E.ea=function(){if(Ve(this))return-pe(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Ta+i)*e,e*=Ta}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(lt(this))return"0";if(Ve(this))return"-"+pe(this).toString(n);for(var e=Ye(Math.pow(n,6)),t=this,i="";;){var s=pr(t,e).g;t=fr(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,lt(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function lt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ve(n){return n.h==-1}E.X=function(n){return n=fr(this,n),Ve(n)?-1:lt(n)?0:1};function pe(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new j(t,~n.h).add(Ia)}E.abs=function(){return Ve(this)?pe(this):this};E.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new j(t,t[t.length-1]&-2147483648?-1:0)};function fr(n,e){return n.add(pe(e))}E.R=function(n){if(lt(this)||lt(n))return Pn;if(Ve(this))return Ve(n)?pe(this).R(pe(n)):pe(pe(this).R(n));if(Ve(n))return pe(this.R(pe(n)));if(0>this.X(Eu)&&0>n.X(Eu))return Ye(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;t[2*i+2*s]+=o*l,xs(t,2*i+2*s),t[2*i+2*s+1]+=r*l,xs(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,xs(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,xs(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new j(t,0)};function xs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ai(n,e){this.g=n,this.h=e}function pr(n,e){if(lt(e))throw Error("division by zero");if(lt(n))return new ai(Pn,Pn);if(Ve(n))return e=pr(pe(n),e),new ai(pe(e.g),pe(e.h));if(Ve(e))return e=pr(n,pe(e)),new ai(pe(e.g),e.h);if(30<n.g.length){if(Ve(n)||Ve(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Ia,i=e;0>=i.X(n);)t=Tu(t),i=Tu(i);var s=vn(t,1),r=vn(i,1);for(i=vn(i,2),t=vn(t,2);!lt(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=vn(i,1),t=vn(t,1)}return e=fr(n,s.R(e)),new ai(s,e)}for(s=Pn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ye(t),o=r.R(e);Ve(o)||0<o.X(n);)t-=i,r=Ye(t),o=r.R(e);lt(r)&&(r=Ia),s=s.add(r),n=fr(n,o)}return new ai(s,n)}E.gb=function(n){return pr(this,n).h};E.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new j(t,this.h&n.h)};E.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new j(t,this.h|n.h)};E.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new j(t,this.h^n.h)};function Tu(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new j(t,n.h)}function vn(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new j(s,n.h)}dr.prototype.createWebChannel=dr.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;no.NO_ERROR=0;no.TIMEOUT=8;no.HTTP_ERROR=6;uf.COMPLETE="complete";hf.EventType=hs;hs.OPEN="a";hs.CLOSE="b";hs.ERROR="c";hs.MESSAGE="d";he.prototype.listen=he.prototype.O;J.prototype.listenOnce=J.prototype.P;J.prototype.getLastError=J.prototype.Sa;J.prototype.getLastErrorCode=J.prototype.Ia;J.prototype.getStatus=J.prototype.da;J.prototype.getResponseJson=J.prototype.Wa;J.prototype.getResponseText=J.prototype.ja;J.prototype.send=J.prototype.ha;J.prototype.setWithCredentials=J.prototype.Oa;Ge.prototype.digest=Ge.prototype.l;Ge.prototype.reset=Ge.prototype.reset;Ge.prototype.update=Ge.prototype.j;j.prototype.add=j.prototype.add;j.prototype.multiply=j.prototype.R;j.prototype.modulo=j.prototype.gb;j.prototype.compare=j.prototype.X;j.prototype.toNumber=j.prototype.ea;j.prototype.toString=j.prototype.toString;j.prototype.getBits=j.prototype.D;j.fromNumber=Ye;j.fromString=Gf;var iE=function(){return new dr},sE=function(){return to()},$o=no,rE=uf,oE=fn,Iu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},aE=ps,Vs=hf,lE=J,cE=Ge,Sn=j;const wu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Kr("@firebase/firestore");function Ru(){return rn.logLevel}function w(n,...e){if(rn.logLevel<=bt.DEBUG){const t=e.map(xl);rn.debug(`Firestore (${Zn}): ${n}`,...t)}}function mt(n,...e){if(rn.logLevel<=bt.ERROR){const t=e.map(xl);rn.error(`Firestore (${Zn}): ${n}`,...t)}}function Ln(n,...e){if(rn.logLevel<=bt.WARN){const t=e.map(xl);rn.warn(`Firestore (${Zn}): ${n}`,...t)}}function xl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+n;throw mt(e),new Error(e)}function z(n,e){n||k()}function O(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends ns{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class hE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dE{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ut)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(z(typeof i.accessToken=="string"),new $f(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new ye(e)}}class fE{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pE{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new fE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _E{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string"),this.R=t.token,new _E(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=mE(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function B(n,e){return n<e?-1:n>e?1:0}function Fn(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ne(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new ne(0,0))}static max(){return new D(new ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,i){t===void 0?t=0:t>e.length&&k(),i===void 0?i=e.length-t:i>e.length-t&&k(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Q extends ji{construct(e,t,i){return new Q(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new R(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const yE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends ji{construct(e,t,i){return new Ie(e,t,i)}static isValidIdentifier(e){return yE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new R(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new R(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(Q.fromString(e))}static fromName(e){return new A(Q.fromString(e).popFirst(5))}static empty(){return new A(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new Q(e.slice()))}}function vE(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=D.fromTimestamp(i===1e9?new ne(t+1,0):new ne(t,i));return new Dt(s,A.empty(),e)}function EE(n){return new Dt(n.readTime,n.key,-1)}class Dt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Dt(D.min(),A.empty(),-1)}static max(){return new Dt(D.max(),A.empty(),-1)}}function TE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=A.comparator(n.documentKey,e.documentKey),t!==0?t:B(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==IE)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new y((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof y?t:y.resolve(t)}catch(t){return y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):y.reject(t)}static resolve(e){return new y((t,i)=>{t(e)})}static reject(e){return new y((t,i)=>{i(e)})}static waitFor(e){return new y((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=y.resolve(!1);for(const i of e)t=t.next(s=>s?y.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new y((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new y((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function ys(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vl.ae=-1;function uo(n){return n==null}function _r(n){return n===0&&1/n==-1/0}function RE(n){return typeof n=="number"&&Number.isInteger(n)&&!_r(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ei(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}}class Ls{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:fe.RED,this.left=s!=null?s:fe.EMPTY,this.right=r!=null?r:fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new fe(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,i,s,r){return this}insert(e,t,i){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Au(this.data.getIterator())}getIteratorFrom(e){return new Au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class Au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new We([])}unionWith(e){let t=new Ce(Ie.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException!="undefined"&&r instanceof DOMException?new Yf("Invalid base64 string: "+r):r}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const CE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(z(!!n),typeof n=="string"){let e=0;const t=CE.exec(n);if(z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fl(n){const e=n.mapValue.fields.__previous_value__;return Ll(e)?Fl(e):e}function Ki(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,i,s,r,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Hi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ll(n)?4:PE(n)?9007199254740991:10:k()}function et(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ki(n).isEqual(Ki(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ot(s.timestampValue),a=Ot(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return on(s.bytesValue).isEqual(on(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return ee(s.geoPointValue.latitude)===ee(r.geoPointValue.latitude)&&ee(s.geoPointValue.longitude)===ee(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ee(s.integerValue)===ee(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ee(s.doubleValue),a=ee(r.doubleValue);return o===a?_r(o)===_r(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Fn(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Cu(o)!==Cu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!et(o[l],a[l])))return!1;return!0}(n,e);default:return k()}}function Gi(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=an(n),i=an(e);if(t!==i)return B(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=ee(r.integerValue||r.doubleValue),l=ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Pu(n.timestampValue,e.timestampValue);case 4:return Pu(Ki(n),Ki(e));case 5:return B(n.stringValue,e.stringValue);case 6:return function(r,o){const a=on(r),l=on(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=B(a[c],l[c]);if(u!==0)return u}return B(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=B(ee(r.latitude),ee(o.latitude));return a!==0?a:B(ee(r.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Un(a[c],l[c]);if(u)return u}return B(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Fs.mapValue&&o===Fs.mapValue)return 0;if(r===Fs.mapValue)return 1;if(o===Fs.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=B(l[h],u[h]);if(d!==0)return d;const f=Un(a[l[h]],c[u[h]]);if(f!==0)return f}return B(l.length,u.length)}(n.mapValue,e.mapValue);default:throw k()}}function Pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=Ot(n),i=Ot(e),s=B(t.seconds,i.seconds);return s!==0?s:B(t.nanos,i.nanos)}function Wn(n){return wa(n)}function wa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ot(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return A.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=wa(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${wa(t.fields[o])}`;return s+"}"}(n.mapValue):k()}function Ra(n){return!!n&&"integerValue"in n}function Ul(n){return!!n&&"arrayValue"in n}function Su(n){return!!n&&"nullValue"in n}function ku(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Js(n){return!!n&&"mapValue"in n}function wi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ei(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=wi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function PE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Js(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(t)}setAll(e){let t=Ie.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=wi(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Js(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ei(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Le(wi(this.value))}}function Xf(n){const e=[];return ei(n.fields,(t,i)=>{const s=new Ie([t]);if(Js(i)){const r=Xf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new We(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,D.min(),D.min(),D.min(),Le.empty(),0)}static newFoundDocument(e,t,i,s){return new Ee(e,1,t,D.min(),i,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,D.min(),D.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,D.min(),D.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function Nu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=A.comparator(A.fromName(o.referenceValue),t.key):i=Un(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function bu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function SE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{}class re extends Jf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new NE(e,t,i):t==="array-contains"?new OE(e,i):t==="in"?new ME(e,i):t==="not-in"?new xE(e,i):t==="array-contains-any"?new VE(e,i):new re(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new bE(e,i):new DE(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tt extends Jf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return Zf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Zf(n){return n.op==="and"}function ep(n){return kE(n)&&Zf(n)}function kE(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function Ca(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Wn(n.value);if(ep(n))return n.filters.map(e=>Ca(e)).join(",");{const e=n.filters.map(t=>Ca(t)).join(",");return`${n.op}(${e})`}}function tp(n,e){return n instanceof re?function(i,s){return s instanceof re&&i.op===s.op&&i.field.isEqual(s.field)&&et(i.value,s.value)}(n,e):n instanceof tt?function(i,s){return s instanceof tt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&tp(o,s.filters[a]),!0):!1}(n,e):void k()}function np(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(np).join(" ,")+"}"}(n):"Filter"}class NE extends re{constructor(e,t,i){super(e,t,i),this.key=A.fromName(i.referenceValue)}matches(e){const t=A.comparator(e.key,this.key);return this.matchesComparison(t)}}class bE extends re{constructor(e,t){super(e,"in",t),this.keys=ip("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DE extends re{constructor(e,t){super(e,"not-in",t),this.keys=ip("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ip(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>A.fromName(i.referenceValue))}class OE extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ul(t)&&Gi(t.arrayValue,this.value)}}class ME extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gi(this.value.arrayValue,t)}}class xE extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gi(this.value.arrayValue,t)}}class VE extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ul(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Gi(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Du(n,e=null,t=[],i=[],s=null,r=null,o=null){return new LE(n,e,t,i,s,r,o)}function Wl(n){const e=O(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ca(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Wn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Wn(i)).join(",")),e.he=t}return e.he}function ql(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bu(n.startAt,e.startAt)&&bu(n.endAt,e.endAt)}function Aa(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function FE(n,e,t,i,s,r,o,a){return new ho(n,e,t,i,s,r,o,a)}function fo(n){return new ho(n)}function Ou(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function UE(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function WE(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function qE(n){return n.collectionGroup!==null}function kn(n){const e=O(n);if(e.Pe===null){e.Pe=[];const t=WE(e),i=UE(e);if(t!==null&&i===null)t.isKeyField()||e.Pe.push(new Ri(t)),e.Pe.push(new Ri(Ie.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ri(Ie.keyField(),r))}}}return e.Pe}function yt(n){const e=O(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Du(e.path,e.collectionGroup,kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of kn(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Ri(r.field,o))}const i=e.endAt?new gr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new gr(e.startAt.position,e.startAt.inclusive):null;e.Ie=Du(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.Ie}function Pa(n,e,t){return new ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function po(n,e){return ql(yt(n),yt(e))&&n.limitType===e.limitType}function sp(n){return`${Wl(yt(n))}|lt:${n.limitType}`}function Sa(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>np(s)).join(", ")}]`),uo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Wn(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Wn(s)).join(",")),`Target(${i})`}(yt(n))}; limitType=${n.limitType})`}function _o(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):A.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of kn(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=Nu(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,kn(i),s)||i.endAt&&!function(o,a,l){const c=Nu(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,kn(i),s))}(n,e)}function BE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rp(n){return(e,t)=>{let i=!1;for(const s of kn(n)){const r=jE(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function jE(n,e,t){const i=n.field.isKeyField()?A.comparator(e.key,t.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Un(l,c):k()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Qf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Y(A.comparator);function vt(){return KE}const op=new Y(A.comparator);function mi(...n){let e=op;for(const t of n)e=e.insert(t.key,t);return e}function ap(n){let e=op;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function zt(){return Ci()}function lp(){return Ci()}function Ci(){return new ti(n=>n.toString(),(n,e)=>n.isEqual(e))}const HE=new Y(A.comparator),GE=new Ce(A.comparator);function L(...n){let e=GE;for(const t of n)e=e.add(t);return e}const $E=new Ce(B);function zE(){return $E}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(e)?"-0":e}}function up(n){return{integerValue:""+n}}function QE(n,e){return RE(e)?up(e):cp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this._=void 0}}function YE(n,e,t){return n instanceof mr?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ll(r)&&(r=Fl(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof $i?dp(n,e):n instanceof zi?fp(n,e):function(s,r){const o=hp(s,r),a=Mu(o)+Mu(s.Te);return Ra(o)&&Ra(s.Te)?up(a):cp(s.serializer,a)}(n,e)}function XE(n,e,t){return n instanceof $i?dp(n,e):n instanceof zi?fp(n,e):t}function hp(n,e){return n instanceof yr?function(i){return Ra(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class mr extends go{}class $i extends go{constructor(e){super(),this.elements=e}}function dp(n,e){const t=pp(e);for(const i of n.elements)t.some(s=>et(s,i))||t.push(i);return{arrayValue:{values:t}}}class zi extends go{constructor(e){super(),this.elements=e}}function fp(n,e){let t=pp(e);for(const i of n.elements)t=t.filter(s=>!et(s,i));return{arrayValue:{values:t}}}class yr extends go{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Mu(n){return ee(n.integerValue||n.doubleValue)}function pp(n){return Ul(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function JE(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof $i&&s instanceof $i||i instanceof zi&&s instanceof zi?Fn(i.elements,s.elements,et):i instanceof yr&&s instanceof yr?et(i.Te,s.Te):i instanceof mr&&s instanceof mr}(n.transform,e.transform)}class ZE{constructor(e,t){this.version=e,this.transformResults=t}}class ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class mo{}function _p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mp(n.key,ht.none()):new vs(n.key,n.data,ht.none());{const t=n.data,i=Le.empty();let s=new Ce(Ie.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new pn(n.key,i,new We(s.toArray()),ht.none())}}function eT(n,e,t){n instanceof vs?function(s,r,o){const a=s.value.clone(),l=Vu(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof pn?function(s,r,o){if(!Zs(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Vu(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(gp(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ai(n,e,t,i){return n instanceof vs?function(r,o,a,l){if(!Zs(r.precondition,o))return a;const c=r.value.clone(),u=Lu(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof pn?function(r,o,a,l){if(!Zs(r.precondition,o))return a;const c=Lu(r.fieldTransforms,l,o),u=o.data;return u.setAll(gp(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(r,o,a){return Zs(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function tT(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=hp(i.transform,s||null);r!=null&&(t===null&&(t=Le.empty()),t.set(i.field,r))}return t||null}function xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Fn(i,s,(r,o)=>JE(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vs extends mo{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pn extends mo{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function gp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Vu(n,e,t){const i=new Map;z(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,XE(o,a,t[s]))}return i}function Lu(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,YE(r,o,e))}return i}class mp extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nT extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&eT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ai(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ai(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=lp();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const l=_p(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(D.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),L())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(t,i)=>xu(t,i))&&Fn(this.baseMutations,e.baseMutations,(t,i)=>xu(t,i))}}class Bl{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){z(e.mutations.length===i.length);let s=function(){return HE}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Bl(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,U;function oT(n){switch(n){default:return k();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function yp(n){if(n===void 0)return mt("GRPC error has no .code"),m.UNKNOWN;switch(n){case Z.OK:return m.OK;case Z.CANCELLED:return m.CANCELLED;case Z.UNKNOWN:return m.UNKNOWN;case Z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Z.INTERNAL:return m.INTERNAL;case Z.UNAVAILABLE:return m.UNAVAILABLE;case Z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Z.NOT_FOUND:return m.NOT_FOUND;case Z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Z.ABORTED:return m.ABORTED;case Z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Z.DATA_LOSS:return m.DATA_LOSS;default:return k()}}(U=Z||(Z={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Us}static getOrCreateInstance(){return Us===null&&(Us=new jl),Us}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Us=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Sn([4294967295,4294967295],0);function Fu(n){const e=aT().encode(n),t=new cE;return t.update(e),new Uint8Array(t.digest())}function Uu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Sn([t,i],0),new Sn([s,r],0)]}class Kl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new yi(`Invalid padding: ${t}`);if(i<0)throw new yi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new yi(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Sn.fromNumber(this.de)}Re(e,t,i){let s=e.add(t.multiply(Sn.fromNumber(i)));return s.compare(lT)===1&&(s=new Sn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=Fu(e),[i,s]=Uu(t);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);if(!this.Ve(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Kl(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=Fu(e),[i,s]=Uu(t);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);this.me(o)}}me(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Es.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new yo(D.min(),s,new Y(B),vt(),L())}}class Es{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Es(i,t,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,i,s){this.fe=e,this.removedTargetIds=t,this.key=i,this.ge=s}}class vp{constructor(e,t){this.targetId=e,this.pe=t}}class Ep{constructor(e,t,i=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Wu{constructor(){this.ye=0,this.we=Bu(),this.Se=Ae.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=L(),t=L(),i=L();return this.we.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:k()}}),new Es(this.Se,this.be,e,t,i)}xe(){this.De=!1,this.we=Bu()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class cT{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=vt(),this.$e=qu(),this.Ue=new Y(B)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Fe(e.resumeToken));break;default:k()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((i,s)=>{this.Je(s)&&t(s)})}Ze(e){var t,i;const s=e.targetId,r=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Aa(a))if(r===0){const l=new A(a.path);this.ze(s,l,Ee.newNoDocument(l,D.min()))}else z(r===1);else{const l=this.et(s);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(t=jl.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,p){var _,g,T,b,I,C;const F={localCacheCount:f,existenceFilterCount:p.count},W=p.unchangedNames;return W&&(F.bloomFilter={applied:h===0,hashCount:(_=W==null?void 0:W.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(b=(T=(g=W==null?void 0:W.bits)===null||g===void 0?void 0:g.bitmap)===null||T===void 0?void 0:T.length)!==null&&b!==void 0?b:0,padding:(C=(I=W==null?void 0:W.bits)===null||I===void 0?void 0:I.padding)!==null&&C!==void 0?C:0},d&&(F.bloomFilter.mightContain=d)),F}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,t){const{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=on(r).toUint8Array()}catch(h){if(h instanceof Yf)return Ln("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Kl(l,o,a)}catch(h){return Ln(h instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const i=this.qe.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{t(r.path.canonicalString())||(this.ze(e,r,null),s++)}),s}st(e){const t=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Aa(a.target)){const l=new A(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ee.newNoDocument(l,e))}r.Ce&&(t.set(o,r.Me()),r.xe())}});let i=L();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const s=new yo(e,t,this.Ue,this.Ke,i);return this.Ke=vt(),this.$e=qu(),this.Ue=new Y(B),s}Ge(e,t){if(!this.Je(e))return;const i=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,i),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const s=this.He(e);this.ot(e,t)?s.Oe(t,1):s.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),i&&(this.Ke=this.Ke.insert(t,i))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Wu,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ce(B),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Wu),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function qu(){return new Y(A.comparator)}function Bu(){return new Y(A.comparator)}const uT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dT=(()=>({and:"AND",or:"OR"}))();class fT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ka(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function vr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pT(n,e){return vr(n,e.toTimestamp())}function Ze(n){return z(!!n),D.fromTimestamp(function(t){const i=Ot(t);return new ne(i.seconds,i.nanos)}(n))}function Hl(n,e){return function(i){return new Q(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function Ip(n){const e=Q.fromString(n);return z(Ap(e)),e}function Na(n,e){return Hl(n.databaseId,e.path)}function zo(n,e){const t=Ip(e);if(t.get(1)!==n.databaseId.projectId)throw new R(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new R(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new A(wp(t))}function ba(n,e){return Hl(n.databaseId,e)}function _T(n){const e=Ip(n);return e.length===4?Q.emptyPath():wp(e)}function Da(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wp(n){return z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ju(n,e,t){return{name:Na(n,e),fields:t.value.mapValue.fields}}function gT(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(z(u===void 0||typeof u=="string"),Ae.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),Ae.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:yp(c.code);return new R(u,c.message||"")}(o);t=new Ep(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=zo(n,i.document.name),r=Ze(i.document.updateTime),o=i.document.createTime?Ze(i.document.createTime):D.min(),a=new Le({mapValue:{fields:i.document.fields}}),l=Ee.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];t=new er(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=zo(n,i.document),r=i.readTime?Ze(i.readTime):D.min(),o=Ee.newNoDocument(s,r),a=i.removedTargetIds||[];t=new er([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=zo(n,i.document),r=i.removedTargetIds||[];t=new er([],r,s,null)}else{if(!("filter"in e))return k();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new rT(s,r),a=i.targetId;t=new vp(a,o)}}return t}function mT(n,e){let t;if(e instanceof vs)t={update:ju(n,e.key,e.value)};else if(e instanceof mp)t={delete:Na(n,e.key)};else if(e instanceof pn)t={update:ju(n,e.key,e.data),updateMask:AT(e.fieldMask)};else{if(!(e instanceof nT))return k();t={verify:Na(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof mr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw k()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:pT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:k()}(n,e.precondition)),t}function yT(n,e){return n&&n.length>0?(z(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?Ze(s.updateTime):Ze(r);return o.isEqual(D.min())&&(o=Ze(r)),new ZE(o,s.transformResults||[])}(t,e))):[]}function vT(n,e){return{documents:[ba(n,e.path)]}}function ET(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=ba(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ba(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return Cp(tt.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Tn(h.field),direction:wT(h.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=ka(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function TT(n){let e=_T(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){z(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(h){const d=Rp(h);return d instanceof tt&&ep(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(p){return new Ri(In(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,uo(d)?null:d}(t.limit));let l=null;t.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new gr(f,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new gr(f,d)}(t.endAt)),FE(e,s,o,r,a,"F",l,c)}function IT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=In(t.unaryFilter.field);return re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=In(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=In(t.unaryFilter.field);return re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=In(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(n):n.fieldFilter!==void 0?function(t){return re.create(In(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(i=>Rp(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return k()}}(t.compositeFilter.op))}(n):k()}function wT(n){return uT[n]}function RT(n){return hT[n]}function CT(n){return dT[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function In(n){return Ie.fromServerFormat(n.fieldPath)}function Cp(n){return n instanceof re?function(t){if(t.op==="=="){if(ku(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(Su(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ku(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(Su(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:RT(t.op),value:t.value}}}(n):n instanceof tt?function(t){const i=t.getFilters().map(s=>Cp(s));return i.length===1?i[0]:{compositeFilter:{op:CT(t.op),filters:i}}}(n):k()}function AT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ap(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,i,s,r=D.min(),o=D.min(),a=Ae.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.ct=e}}function ST(n){const e=TT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this.sn=new NT}addToCollectionParentIndex(e,t){return this.sn.add(t),y.resolve()}getCollectionParents(e,t){return y.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return y.resolve()}deleteFieldIndex(e,t){return y.resolve()}getDocumentsMatchingTarget(e,t){return y.resolve(null)}getIndexType(e,t){return y.resolve(0)}getFieldIndexes(e,t){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,t){return y.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return y.resolve(Dt.min())}updateCollectionGroup(e,t,i){return y.resolve()}updateIndexEntries(e,t){return y.resolve()}}class NT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(Q.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new qn(0)}static On(){return new qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?y.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Ai(i.mutation,s,We.empty(),ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,L()).next(()=>i))}getLocalViewOfDocuments(e,t,i=L()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=mi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,L()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=vt();const o=Ci(),a=function(){return Ci()}();return t.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof pn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ai(u.mutation,c,u.mutation.getFieldMask(),ne.now())):o.set(c.key,We.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new DT(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Ci();let s=new Y((o,a)=>o-a),r=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||We.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||L()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=lp();u.forEach(d=>{if(!r.has(d)){const f=_p(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return y.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(r){return A.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):y.resolve(zt());let a=-1,l=r;return o.next(c=>y.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?y.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,L())).next(u=>({batchId:a,changes:ap(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new A(t)).next(i=>{let s=mi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=mi();return this.indexManager.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const l=function(u,h){return new ho(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ee.newInvalidDocument(c)))});let o=mi();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ai(c.mutation,l,We.empty(),ne.now()),_o(t,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return y.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ze(s.createTime)}}(t)),y.resolve()}getNamedQuery(e,t){return y.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(s){return{name:s.name,query:ST(s.bundledQuery),readTime:Ze(s.readTime)}}(t)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.overlays=new Y(A.comparator),this.cr=new Map}getOverlay(e,t){return y.resolve(this.overlays.get(t))}getOverlays(e,t){const i=zt();return y.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),y.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.cr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(i)),y.resolve()}getOverlaysForCollection(e,t,i){const s=zt(),r=t.length+1,o=new A(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return y.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Y((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=zt(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=zt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return y.resolve(a)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(i.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new sT(t,i));let r=this.cr.get(t);r===void 0&&(r=L(),this.cr.set(t,r)),this.cr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.lr=new Ce(le.hr),this.Pr=new Ce(le.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const i=new le(e,t);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Er(new le(e,t))}dr(e,t){e.forEach(i=>this.removeReference(i,t))}Ar(e){const t=new A(new Q([])),i=new le(t,e),s=new le(t,e+1),r=[];return this.Pr.forEachInRange([i,s],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new A(new Q([])),i=new le(t,e),s=new le(t,e+1);let r=L();return this.Pr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new le(e,0),i=this.lr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class le{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return A.comparator(e.key,t.key)||B(e.mr,t.mr)}static Ir(e,t){return B(e.mr,t.mr)||A.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Ce(le.hr)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iT(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new le(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,t){return y.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.wr(i),r=s<0?0:s;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new le(t,0),s=new le(t,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([i,s],o=>{const a=this.yr(o.mr);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(B);return t.forEach(s=>{const r=new le(s,0),o=new le(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{i=i.add(a.mr)})}),y.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;A.isDocumentKey(r)||(r=r.child(""));const o=new le(new A(r),0);let a=new Ce(B);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),y.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(i=>{const s=this.yr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return y.forEach(t.mutations,s=>{const r=new le(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,t){const i=new le(t,0),s=this.pr.firstAfterOrEqual(i);return y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.Dr=e,this.docs=function(){return new Y(A.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Dr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return y.resolve(i?i.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let i=vt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ee.newInvalidDocument(s))}),y.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=vt();const o=t.path,a=new A(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TE(EE(u),i)<=0||(s.has(u.key)||_o(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,t,i,s){k()}vr(e,t){return y.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new FT(this)}getSize(e){return y.resolve(this.size)}}class FT extends bT{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.sr.addEntry(e,s)):this.sr.removeEntry(i)}),y.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.persistence=e,this.Cr=new ti(t=>Wl(t),ql),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Gl,this.targetCount=0,this.Or=qn.xn()}forEachTarget(e,t){return this.Cr.forEach((i,s)=>t(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Fr&&(this.Fr=t),y.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,y.resolve()}updateTargetData(e,t){return this.Ln(t),y.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(r).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,t){const i=this.Cr.get(t)||null;return y.resolve(i)}addMatchingKeys(e,t,i){return this.Mr.Tr(t,i),y.resolve()}removeMatchingKeys(e,t,i){this.Mr.dr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),y.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Mr.Vr(t);return y.resolve(i)}containsKey(e,t){return y.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Vl(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new UT(this),this.indexManager=new kT,this.remoteDocumentCache=function(s){return new LT(s)}(i=>this.referenceDelegate.qr(i)),this.serializer=new PT(t),this.Qr=new MT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Nr[e.toKey()];return i||(i=new VT(t,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,i){w("MemoryPersistence","Starting transaction:",e);const s=new qT(this.Br.next());return this.referenceDelegate.Kr(),i(s).next(r=>this.referenceDelegate.$r(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ur(e,t){return y.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,t)))}}class qT extends wE{constructor(e){super(),this.currentSequenceNumber=e}}class $l{constructor(e){this.persistence=e,this.Wr=new Gl,this.Gr=null}static zr(e){return new $l(e)}get jr(){if(this.Gr)return this.Gr;throw k()}addReference(e,t,i){return this.Wr.addReference(i,t),this.jr.delete(i.toString()),y.resolve()}removeReference(e,t,i){return this.Wr.removeReference(i,t),this.jr.add(i.toString()),y.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),y.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(s=>this.jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.jr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.jr,i=>{const s=A.fromPath(i);return this.Hr(e,s).next(r=>{r||t.removeEntry(s,D.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(i=>{i?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return y.or([()=>y.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Li=i,this.ki=s}static qi(e,t){let i=L(),s=L();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new zl(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,i,s){return this.$i(e,t).next(r=>r||this.Ui(e,t,s,i)).next(r=>r||this.Wi(e,t))}$i(e,t){if(Ou(t))return y.resolve(null);let i=yt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Pa(t,null,"F"),i=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=L(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(t,a);return this.zi(t,c,o,l.readTime)?this.$i(e,Pa(t,null,"F")):this.ji(e,c,t,l)}))})))}Ui(e,t,i,s){return Ou(t)||s.isEqual(D.min())?this.Wi(e,t):this.Ki.getDocuments(e,i).next(r=>{const o=this.Gi(t,r);return this.zi(t,o,i,s)?this.Wi(e,t):(Ru()<=bt.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sa(t)),this.ji(e,o,t,vE(s,-1)))})}Gi(e,t){let i=new Ce(rp(e));return t.forEach((s,r)=>{_o(e,r)&&(i=i.add(r))}),i}zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Wi(e,t){return Ru()<=bt.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Sa(t)),this.Ki.getDocumentsMatchingQuery(e,t,Dt.min())}ji(e,t,i,s){return this.Ki.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,i,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Y(B),this.Yi=new ti(r=>Wl(r),ql),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OT(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function KT(n,e,t,i){return new jT(n,e,t,i)}async function Pp(n,e){const t=O(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.es(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=L();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function HT(n,e){const t=O(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=y.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(_=>{const g=c.docVersions.get(p);z(g!==null),_.version.compareTo(g)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=L();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Sp(n){const e=O(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function GT(n,e){const t=O(n),i=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ae.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(_,g,T){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(t.kr.updateTargetData(r,f))});let l=vt(),c=L();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($T(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(D.min())){const u=t.kr.getLastRemoteSnapshotVersion(r).next(h=>t.kr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.Ji=s,r))}function $T(n,e,t){let i=L(),s=L();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=vt();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(D.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function zT(n,e){const t=O(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function QT(n,e){const t=O(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.kr.getTargetData(i,e).next(r=>r?(s=r,y.resolve(s)):t.kr.allocateTargetId(i).next(o=>(s=new Pt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.kr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function Oa(n,e,t){const i=O(n),s=i.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ys(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Ku(n,e,t){const i=O(n);let s=D.min(),r=L();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=O(l),d=h.Yi.get(u);return d!==void 0?y.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,yt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?s:D.min(),t?r:L())).next(a=>(YT(i,BE(e),a),{documents:a,ss:r})))}function YT(n,e,t){let i=n.Zi.get(e)||D.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Zi.set(e,i)}class Hu{constructor(){this.activeTargetIds=zE()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XT{constructor(){this.Hs=new Hu,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,i){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Hu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws=null;function Qo(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="WebChannelConnection";class tI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=i+"://"+t.host,this.Eo=`projects/${s}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Ro(){return!1}Vo(t,i,s,r,o){const a=Qo(),l=this.mo(t,i);w("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(t,l,c,s).then(u=>(w("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Ln("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(t,i,s,r,o,a){return this.Vo(t,i,s,r,o)}fo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}mo(t,i){const s=ZT[t];return`${this.To}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,i,s){const r=Qo();return new Promise((o,a)=>{const l=new lE;l.setWithCredentials(!0),l.listenOnce(rE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $o.NO_ERROR:const u=l.getResponseJson();w(me,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case $o.TIMEOUT:w(me,`RPC '${e}' ${r} timed out`),a(new R(m.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const h=l.getStatus();if(w(me,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const T=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(T)>=0?T:m.UNKNOWN}(f.status);a(new R(p,f.message))}else a(new R(m.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new R(m.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{w(me,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);w(me,`RPC '${e}' ${r} sending request:`,s),l.send(t,"POST",c,i,15)})}wo(e,t,i){const s=Qo(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iE(),a=sE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new aE({})),this.fo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=r.join("");w(me,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new eI({so:g=>{f?w(me,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(d||(w(me,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),w(me,`RPC '${e}' stream ${s} sending:`,g),h.send(g))},oo:()=>h.close()}),_=(g,T,b)=>{g.listen(T,I=>{try{b(I)}catch(C){setTimeout(()=>{throw C},0)}})};return _(h,Vs.EventType.OPEN,()=>{f||w(me,`RPC '${e}' stream ${s} transport opened.`)}),_(h,Vs.EventType.CLOSE,()=>{f||(f=!0,w(me,`RPC '${e}' stream ${s} transport closed`),p.Po())}),_(h,Vs.EventType.ERROR,g=>{f||(f=!0,Ln(me,`RPC '${e}' stream ${s} transport errored:`,g),p.Po(new R(m.UNAVAILABLE,"The operation could not be completed")))}),_(h,Vs.EventType.MESSAGE,g=>{var T;if(!f){const b=g.data[0];z(!!b);const I=b,C=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(C){w(me,`RPC '${e}' stream ${s} received error:`,C);const F=C.status;let W=function(jt){const yn=Z[jt];if(yn!==void 0)return yp(yn)}(F),ge=C.message;W===void 0&&(W=m.INTERNAL,ge="Unknown error status: "+F+" with message "+C.message),f=!0,p.Po(new R(W,ge)),h.close()}else w(me,`RPC '${e}' stream ${s} received:`,b),p.Io(b)}}),_(a,oE.STAT_EVENT,g=>{g.stat===Iu.PROXY?w(me,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===Iu.NOPROXY&&w(me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.ho()},0),p}}function Yo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){return new fT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,t-i);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,i,s,r,o,a,l){this.ii=e,this.Bo=i,this.Lo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new kp(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.ko===t&&this.e_(i,s)},i=>{e(()=>{const s=new R(m.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(s)})})}e_(e,t){const i=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{i(()=>this.t_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nI extends Np{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=gT(this.serializer,e),i=function(r){if(!("targetChange"in r))return D.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?D.min():o.readTime?Ze(o.readTime):D.min()}(e);return this.listener.r_(t,i)}i_(e){const t={};t.database=Da(this.serializer),t.addTarget=function(r,o){let a;const l=o.target;if(a=Aa(l)?{documents:vT(r,l)}:{query:ET(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tp(r,o.resumeToken);const c=ka(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(D.min())>0){a.readTime=vr(r,o.snapshotVersion.toTimestamp());const c=ka(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=IT(this.serializer,e);i&&(t.labels=i),this.Ho(t)}s_(e){const t={};t.database=Da(this.serializer),t.removeTarget=e,this.Ho(t)}}class iI extends Np{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=yT(e.writeResults,e.commitTime),i=Ze(e.commitTime);return this.listener.u_(i,t)}return z(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Da(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>mT(this.serializer,i))};this.Ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new R(m.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Vo(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(m.UNKNOWN,s.toString())})}yo(e,t,i,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(m.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class rI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(mt(t),this.d_=!1):w("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{_n(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=O(l);c.y_.add(4),await Ts(c),c.b_.set("Unknown"),c.y_.delete(4),await Eo(c)}(this))})}),this.b_=new rI(i,s)}}async function Eo(n){if(_n(n))for(const e of n.w_)await e(!0)}async function Ts(n){for(const e of n.w_)await e(!1)}function bp(n,e){const t=O(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),Xl(t)?Yl(t):ni(t).Uo()&&Ql(t,e))}function Dp(n,e){const t=O(n),i=ni(t);t.p_.delete(e),i.Uo()&&Op(t,e),t.p_.size===0&&(i.Uo()?i.zo():_n(t)&&t.b_.set("Unknown"))}function Ql(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(D.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ni(n).i_(e)}function Op(n,e){n.D_.Be(e),ni(n).s_(e)}function Yl(n){n.D_=new cT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),ni(n).start(),n.b_.A_()}function Xl(n){return _n(n)&&!ni(n).$o()&&n.p_.size>0}function _n(n){return O(n).y_.size===0}function Mp(n){n.D_=void 0}async function aI(n){n.p_.forEach((e,t)=>{Ql(n,e)})}async function lI(n,e){Mp(n),Xl(n)?(n.b_.m_(e),Yl(n)):n.b_.set("Unknown")}async function cI(n,e,t){if(n.b_.set("Online"),e instanceof Ep&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(n,e)}catch(i){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Er(n,i)}else if(e instanceof er?n.D_.We(e):e instanceof vp?n.D_.Ze(e):n.D_.je(e),!t.isEqual(D.min()))try{const i=await Sp(n.localStore);t.compareTo(i)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(Ae.EMPTY_BYTE_STRING,u.snapshotVersion)),Op(r,l);const h=new Pt(u.target,l,c,u.sequenceNumber);Ql(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){w("RemoteStore","Failed to raise snapshot:",i),await Er(n,i)}}async function Er(n,e,t){if(!ys(e))throw e;n.y_.add(1),await Ts(n),n.b_.set("Offline"),t||(t=()=>Sp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await Eo(n)})}function xp(n,e){return e().catch(t=>Er(n,t,e))}async function To(n){const e=O(n),t=Mt(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;uI(e);)try{const s=await zT(e.localStore,i);if(s===null){e.g_.length===0&&t.zo();break}i=s.batchId,hI(e,s)}catch(s){await Er(e,s)}Vp(e)&&Lp(e)}function uI(n){return _n(n)&&n.g_.length<10}function hI(n,e){n.g_.push(e);const t=Mt(n);t.Uo()&&t.__&&t.a_(e.mutations)}function Vp(n){return _n(n)&&!Mt(n).$o()&&n.g_.length>0}function Lp(n){Mt(n).start()}async function dI(n){Mt(n).l_()}async function fI(n){const e=Mt(n);for(const t of n.g_)e.a_(t.mutations)}async function pI(n,e,t){const i=n.g_.shift(),s=Bl.from(i,e,t);await xp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await To(n)}async function _I(n,e){e&&Mt(n).__&&await async function(i,s){if(function(o){return oT(o)&&o!==m.ABORTED}(s.code)){const r=i.g_.shift();Mt(i).Go(),await xp(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await To(i)}}(n,e),Vp(n)&&Lp(n)}async function $u(n,e){const t=O(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const i=_n(t);t.y_.add(3),await Ts(t),i&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await Eo(t)}async function gI(n,e){const t=O(n);e?(t.y_.delete(2),await Eo(t)):e||(t.y_.add(2),await Ts(t),t.b_.set("Unknown"))}function ni(n){return n.v_||(n.v_=function(t,i,s){const r=O(t);return r.P_(),new nI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{_o:aI.bind(null,n),uo:lI.bind(null,n),r_:cI.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),Xl(n)?Yl(n):n.b_.set("Unknown")):(await n.v_.stop(),Mp(n))})),n.v_}function Mt(n){return n.C_||(n.C_=function(t,i,s){const r=O(t);return r.P_(),new iI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{_o:dI.bind(null,n),uo:_I.bind(null,n),c_:fI.bind(null,n),u_:pI.bind(null,n)}),n.w_.push(async e=>{e?(n.C_.Go(),await To(n)):(await n.C_.stop(),n.g_.length>0&&(w("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Jl(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(n,e){if(mt("AsyncQueue",`${e}: ${n}`),ys(n))return new R(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||A.comparator(t.key,i.key):(t,i)=>A.comparator(t.key,i.key),this.keyedMap=mi(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Nn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.F_=new Y(A.comparator)}track(e){const t=e.doc.key,i=this.F_.get(t);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(t,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(t):e.type===1&&i.type===2?this.F_=this.F_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):k():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Bn{constructor(e,t,i,s,r,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Bn(e,t,Nn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.x_=void 0,this.listeners=[]}}class yI{constructor(){this.queries=new ti(e=>sp(e),po),this.onlineState="Unknown",this.O_=new Set}}async function ec(n,e){const t=O(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new mI),s)try{r.x_=await t.onListen(i)}catch(o){const a=Zl(o,`Initialization of query '${Sa(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.N_(t.onlineState),r.x_&&e.B_(r.x_)&&nc(t)}async function tc(n,e){const t=O(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function vI(n,e){const t=O(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.B_(s)&&(i=!0);o.x_=s}}i&&nc(t)}function EI(n,e,t){const i=O(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function nc(n){n.O_.forEach(e=>{e.next()})}class ic{constructor(e,t,i){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Bn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.key=e}}class Up{constructor(e){this.key=e}}class TI{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=L(),this.mutatedKeys=L(),this.na=rp(e),this.ra=new Nn(this.na)}get ia(){return this.X_}sa(e,t){const i=t?t.oa:new zu,s=t?t.ra:this.ra;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=_o(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==_&&(i.track({type:3,doc:f}),g=!0):this._a(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:r}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return p(d)-p(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Bn(this.query,e.ra,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new zu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=L(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const t=[];return e.forEach(i=>{this.ta.has(i)||t.push(new Up(i))}),this.ta.forEach(i=>{e.has(i)||t.push(new Fp(i))}),t}ha(e){this.X_=e.ss,this.ta=L();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Bn.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class II{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class wI{constructor(e){this.key=e,this.Ia=!1}}class RI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ti(a=>sp(a),po),this.da=new Map,this.Aa=new Set,this.Ra=new Y(A.comparator),this.Va=new Map,this.ma=new Gl,this.fa={},this.ga=new Map,this.pa=qn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function CI(n,e){const t=xI(n);let i,s;const r=t.Ea.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.Pa();else{const o=await QT(t.localStore,yt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await AI(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&bp(t.remoteStore,o)}return s}async function AI(n,e,t,i,s){n.wa=(h,d,f)=>async function(_,g,T,b){let I=g.view.sa(T);I.zi&&(I=await Ku(_.localStore,g.query,!1).then(({documents:W})=>g.view.sa(W,I)));const C=b&&b.targetChanges.get(g.targetId),F=g.view.applyChanges(I,_.isPrimaryClient,C);return Yu(_,g.targetId,F.ca),F.snapshot}(n,h,d,f);const r=await Ku(n.localStore,e,!0),o=new TI(e,r.ss),a=o.sa(r.documents),l=Es.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);Yu(n,t,c.ca);const u=new II(e,t,o);return n.Ea.set(e,u),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),c.snapshot}async function PI(n,e){const t=O(n),i=t.Ea.get(e),s=t.da.get(i.targetId);if(s.length>1)return t.da.set(i.targetId,s.filter(r=>!po(r,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Oa(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Dp(t.remoteStore,i.targetId),Ma(t,i.targetId)}).catch(ms)):(Ma(t,i.targetId),await Oa(t.localStore,i.targetId,!0))}async function SI(n,e,t){const i=VI(n);try{const s=await function(o,a){const l=O(o),c=ne.now(),u=a.reduce((f,p)=>f.add(p.key),L());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=vt(),_=L();return l.Xi.getEntries(f,u).next(g=>{p=g,p.forEach((T,b)=>{b.isValidDocument()||(_=_.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(g=>{h=g;const T=[];for(const b of a){const I=tT(b,h.get(b.key).overlayedDocument);I!=null&&T.push(new pn(b.key,I,Xf(I.value.mapValue),ht.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(g=>{d=g;const T=g.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,g.batchId,T)})}).then(()=>({batchId:d.batchId,changes:ap(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Y(B)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,s.batchId,t),await Is(i,s.changes),await To(i.remoteStore)}catch(s){const r=Zl(s,"Failed to persist write");t.reject(r)}}async function Wp(n,e){const t=O(n);try{const i=await GT(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Va.get(r);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?z(o.Ia):s.removedDocuments.size>0&&(z(o.Ia),o.Ia=!1))}),await Is(t,i,e)}catch(i){await ms(i)}}function Qu(n,e,t){const i=O(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=O(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&nc(l)}(i.eventManager,e),s.length&&i.Ta.r_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function kI(n,e,t){const i=O(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Va.get(e),r=s&&s.key;if(r){let o=new Y(A.comparator);o=o.insert(r,Ee.newNoDocument(r,D.min()));const a=L().add(r),l=new yo(D.min(),new Map,new Y(B),o,a);await Wp(i,l),i.Ra=i.Ra.remove(r),i.Va.delete(e),sc(i)}else await Oa(i.localStore,e,!1).then(()=>Ma(i,e,t)).catch(ms)}async function NI(n,e){const t=O(n),i=e.batch.batchId;try{const s=await HT(t.localStore,e);Bp(t,i,null),qp(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Is(t,s)}catch(s){await ms(s)}}async function bI(n,e,t){const i=O(n);try{const s=await function(o,a){const l=O(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(z(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);Bp(i,e,t),qp(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Is(i,s)}catch(s){await ms(s)}}function qp(n,e){(n.ga.get(e)||[]).forEach(t=>{t.resolve()}),n.ga.delete(e)}function Bp(n,e,t){const i=O(n);let s=i.fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.fa[i.currentUser.toKey()]=s}}function Ma(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.da.get(e))n.Ea.delete(i),t&&n.Ta.Sa(i,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(i=>{n.ma.containsKey(i)||jp(n,i)})}function jp(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(Dp(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),sc(n))}function Yu(n,e,t){for(const i of t)i instanceof Fp?(n.ma.addReference(i.key,e),DI(n,i)):i instanceof Up?(w("SyncEngine","Document no longer in limbo: "+i.key),n.ma.removeReference(i.key,e),n.ma.containsKey(i.key)||jp(n,i.key)):k()}function DI(n,e){const t=e.key,i=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(i)||(w("SyncEngine","New document in limbo: "+t),n.Aa.add(i),sc(n))}function sc(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new A(Q.fromString(e)),i=n.pa.next();n.Va.set(i,new wI(t)),n.Ra=n.Ra.insert(t,i),bp(n.remoteStore,new Pt(yt(fo(t.path)),i,"TargetPurposeLimboResolution",Vl.ae))}}async function Is(n,e,t){const i=O(n),s=[],r=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,t).then(c=>{if((c||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=zl.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Ta.r_(s),await async function(l,c){const u=O(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(c,d=>y.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>y.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ys(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),p=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(d,_)}}}(i.localStore,r))}async function OI(n,e){const t=O(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const i=await Pp(t.localStore,e);t.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new R(m.CANCELLED,o))})}),r.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Is(t,i.ts)}}function MI(n,e){const t=O(n),i=t.Va.get(e);if(i&&i.Ia)return L().add(i.key);{let s=L();const r=t.da.get(e);if(!r)return s;for(const o of r){const a=t.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function xI(n){const e=O(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kI.bind(null,e),e.Ta.r_=vI.bind(null,e.eventManager),e.Ta.Sa=EI.bind(null,e.eventManager),e}function VI(n){const e=O(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bI.bind(null,e),e}class Xu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return KT(this.persistence,new BT,e.initialUser,this.serializer)}createPersistence(e){return new WT($l.zr,this.serializer)}createSharedClientState(e){return new XT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=OI.bind(null,this.syncEngine),await gI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yI}()}createDatastore(e){const t=vo(e.databaseInfo.databaseId),i=function(r){return new tI(r)}(e.databaseInfo);return function(r,o,a,l){return new sI(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,a){return new oI(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Qu(this.syncEngine,t,0),function(){return Gu.v()?new Gu:new JT}())}createSyncEngine(e,t){return function(s,r,o,a,l,c,u){const h=new RI(s,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const i=O(t);w("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await Ts(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=ye.UNAUTHENTICATED,this.clientId=zf.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Zl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Pp(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ju(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WI(n);w("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>$u(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>$u(e.remoteStore,r)),n._onlineComponents=e}function UI(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function WI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!UI(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new Xu)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await Xo(n,new Xu);return n._offlineComponents}async function Kp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await Ju(n,n._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await Ju(n,new LI))),n._onlineComponents}function qI(n){return Kp(n).then(e=>e.syncEngine)}async function Tr(n){const e=await Kp(n),t=e.eventManager;return t.onListen=CI.bind(null,e.syncEngine),t.onUnlisten=PI.bind(null,e.syncEngine),t}function BI(n,e,t={}){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new rc({next:d=>{o.enqueueAndForget(()=>tc(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new R(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new R(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ic(fo(a.path),u,{includeMetadataChanges:!0,W_:!0});return ec(r,h)}(await Tr(n),n.asyncQueue,e,t,i)),i.promise}function jI(n,e,t={}){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new rc({next:d=>{o.enqueueAndForget(()=>tc(r,h)),d.fromCache&&l.source==="server"?c.reject(new R(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ic(a,u,{includeMetadataChanges:!0,W_:!0});return ec(r,h)}(await Tr(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(n,e,t){if(!t)throw new R(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KI(n,e,t,i){if(e===!0&&i===!0)throw new R(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eh(n){if(!A.isDocumentKey(n))throw new R(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function th(n){if(A.isDocumentKey(n))throw new R(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new R(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oc(n);throw new R(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new R(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new uE;switch(i.type){case"firstParty":return new pE(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new R(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Zu.get(t);i&&(w("ComponentProvider","Removing Datastore"),Zu.delete(t),i.terminate())}(this),Promise.resolve()}}function HI(n,e,t,i={}){var s;const r=(n=dt(n,Io))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=ye.MOCK_USER;else{a=Xh(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new R(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ye(c)}n._authCredentials=new hE(new $f(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class Me{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new St(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class St extends ws{constructor(e,t,i){super(e,t,fo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new A(e))}withConverter(e){return new St(this.firestore,e,this._path)}}function z0(n,e,...t){if(n=ie(n),Gp("collection","path",e),n instanceof Io){const i=Q.fromString(e,...t);return th(i),new St(n,null,i)}{if(!(n instanceof Me||n instanceof St))throw new R(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(e,...t));return th(i),new St(n.firestore,null,i)}}function GI(n,e,...t){if(n=ie(n),arguments.length===1&&(e=zf.V()),Gp("doc","path",e),n instanceof Io){const i=Q.fromString(e,...t);return eh(i),new Me(n,null,new A(i))}{if(!(n instanceof Me||n instanceof St))throw new R(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(e,...t));return eh(i),new Me(n.firestore,n instanceof St?n.converter:null,new A(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new kp(this,"async_queue_retry"),this.Xa=()=>{const t=Yo();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=Yo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new ut;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ys(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw mt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ja=!1,i))));return this.Wa=t,t}enqueueAfterDelay(e,t,i){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const s=Jl.createAndSchedule(this,e,t,i,r=>this.ru(r));return this.ja.push(s),s}eu(){this.Ha&&k()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function ih(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class jn extends Io{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new $I}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$p(this),this._firestoreClient.terminate()}}function zI(n,e){const t=typeof n=="object"?n:Br(),i=typeof n=="string"?n:e||"(default)",s=qr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Yh("firestore");r&&HI(s,...r)}return s}function wo(n){return n._firestoreClient||$p(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function $p(n){var e,t,i;const s=n._freezeSettings(),r=function(a,l,c,u){return new AE(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Hp(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new FI(n._authCredentials,n._appCheckCredentials,n._queue,r),((t=s.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((i=s.localCache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Ae.fromBase64String(e))}catch(t){throw new R(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Kn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=/^__.*__$/;class YI{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new vs(e,this.data,t,this.fieldTransforms)}}function Qp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class lc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.cu({path:i,hu:!1});return s.Pu(e),s}Iu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.cu({path:i,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Ir(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Qp(this.uu)&&QI.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class XI{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||vo(e)}Ru(e,t,i,s=!1){return new lc({uu:e,methodName:t,Au:i,path:Ie.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JI(n){const e=n._freezeSettings(),t=vo(n._databaseId);return new XI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZI(n,e,t,i,s,r={}){const o=n.Ru(r.merge||r.mergeFields?2:0,e,t,s);Zp("Data must be an object, but it was:",o,i);const a=Xp(i,o);let l,c;if(r.merge)l=new We(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ew(e,h,t);if(!o.contains(d))throw new R(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nw(u,d)||u.push(d)}l=new We(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new YI(new Le(a),l,c)}function Yp(n,e){if(Jp(n=ie(n)))return Zp("Unsupported field value:",e,n),Xp(n,e);if(n instanceof zp)return function(i,s){if(!Qp(s.uu))throw s.Eu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=Yp(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=ie(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return QE(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ne.fromDate(i);return{timestampValue:vr(s.serializer,r)}}if(i instanceof ne){const r=new ne(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vr(s.serializer,r)}}if(i instanceof Ro)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Kn)return{bytesValue:Tp(s.serializer,i._byteString)};if(i instanceof Me){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hl(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Eu(`Unsupported field value: ${oc(i)}`)}(n,e)}function Xp(n,e){const t={};return Qf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(n,(i,s)=>{const r=Yp(s,e.lu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Jp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof Ro||n instanceof Kn||n instanceof Me||n instanceof zp)}function Zp(n,e,t){if(!Jp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=oc(t);throw i==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+i)}}function ew(n,e,t){if((e=ie(e))instanceof ac)return e._internalPath;if(typeof e=="string")return e_(n,e);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,t)}const tw=new RegExp("[~\\*/\\[\\]]");function e_(n,e,t){if(e.search(tw)>=0)throw Ir(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ac(...e.split("."))._internalPath}catch{throw Ir(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ir(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new R(m.INVALID_ARGUMENT,a+n+l)}function nw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(n_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iw extends t_{data(){return super.data()}}function n_(n,e){return typeof e=="string"?e_(n,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new R(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sw{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw k()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ei(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Ro(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fl(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Q.fromString(e);z(Ap(i));const s=new Hi(i.get(1),i.get(3)),r=new A(i.popFirst(5));return s.isEqual(t)||mt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s_ extends t_{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(n_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class tr extends s_{data(e={}){return super.data(e)}}class r_{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new tr(this._firestore,this._userDataWriter,i.key,i,new vi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new R(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new tr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new tr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ow(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ow(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){n=dt(n,Me);const e=dt(n.firestore,jn);return BI(wo(e),n._key).then(t=>a_(e,n,t))}class cc extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function aw(n){n=dt(n,ws);const e=dt(n.firestore,jn),t=wo(e),i=new cc(e);return i_(n._query),jI(t,n._query).then(s=>new r_(e,i,n,s))}function Q0(n,e){const t=dt(n.firestore,jn),i=GI(n),s=rw(n.converter,e);return lw(t,[ZI(JI(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,ht.exists(!1))]).then(()=>i)}function uc(n,...e){var t,i,s;n=ie(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ih(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ih(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Me)c=dt(n.firestore,jn),u=fo(n._key.path),l={next:h=>{e[o]&&e[o](a_(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=dt(n,ws);c=dt(h.firestore,jn),u=h._query;const d=new cc(c);l={next:f=>{e[o]&&e[o](new r_(c,d,h,f))},error:e[o+1],complete:e[o+2]},i_(n._query)}return function(d,f,p,_){const g=new rc(_),T=new ic(f,g,p);return d.asyncQueue.enqueueAndForget(async()=>ec(await Tr(d),T)),()=>{g.Ca(),d.asyncQueue.enqueueAndForget(async()=>tc(await Tr(d),T))}}(wo(c),u,a,l)}function lw(n,e){return function(i,s){const r=new ut;return i.asyncQueue.enqueueAndForget(async()=>SI(await qI(i),s,r)),r.promise}(wo(n),e)}function a_(n,e,t){const i=t.docs.get(e._key),s=new cc(n);return new s_(n,s,e._key,i,new vi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zn=s})(Ft),en(new tn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new jn(new dE(i.getProvider("auth-internal")),new gE(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new R(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),pt(wu,"4.1.0",e),pt(wu,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Map,uw={activated:!1,tokenObservers:[]};function $e(n){return cw.get(n)||Object.assign({},uw)}const sh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,i,s,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new bi,await dw(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new bi,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function dw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},wr=new jr("appCheck","AppCheck",fw);function l_(n){if(!$e(n).activated)throw wr.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebase-app-check-database",_w=1,xa="firebase-app-check-store";let qs=null;function gw(){return qs||(qs=new Promise((n,e)=>{try{const t=indexedDB.open(pw,_w);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;e(wr.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(xa,{keyPath:"compositeKey"})}}}catch(t){e(wr.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),qs)}function mw(n,e){return yw(vw(n),e)}async function yw(n,e){const i=(await gw()).transaction(xa,"readwrite"),r=i.objectStore(xa).put({compositeKey:n,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(wr.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function vw(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Kr("@firebase/app-check");function rh(n,e){return zg()?mw(n,e).catch(t=>{Va.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={error:"UNKNOWN_ERROR"};function Tw(n){return Jh.encodeString(JSON.stringify(n),!1)}async function La(n,e=!1){const t=n.app;l_(t);const i=$e(t);let s=i.token,r;if(s&&!Ei(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Ei(l)?s=l:await rh(t,void 0))}if(!e&&s&&Ei(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await $e(t).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Va.warn(l.message):Va.error(l),r=l}let a;return s?r?Ei(s)?a={token:s.token,internalError:r}:a=ah(r):(a={token:s.token},i.token=s,await rh(t,s)):a=ah(r),o&&Cw(t,a),a}async function Iw(n){const e=n.app;l_(e);const{provider:t}=$e(e);{const{token:i}=await t.getToken();return{token:i}}}function ww(n,e,t,i){const{app:s}=n,r=$e(s),o={next:t,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ei(r.token)){const a=r.token;Promise.resolve().then(()=>{t({token:a.token}),oh(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>oh(n))}function c_(n,e){const t=$e(n),i=t.tokenObservers.filter(s=>s.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function oh(n){const{app:e}=n,t=$e(e);let i=t.tokenRefresher;i||(i=Rw(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function Rw(n){const{app:e}=n;return new hw(async()=>{const t=$e(e);let i;if(t.token?i=await La(n,!0):i=await La(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=$e(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},sh.RETRIAL_MIN_WAIT,sh.RETRIAL_MAX_WAIT)}function Cw(n,e){const t=$e(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ei(n){return n.expireTimeMillis-Date.now()>0}function ah(n){return{token:Tw(Ew),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=$e(this.app);for(const t of e)c_(this.app,t.next);return Promise.resolve()}}function Pw(n,e){return new Aw(n,e)}function Sw(n){return{getToken:e=>La(n,e),getLimitedUseToken:()=>Iw(n),addTokenListener:e=>ww(n,"INTERNAL",e),removeTokenListener:e=>c_(n.app,e)}}const kw="@firebase/app-check",Nw="0.8.0",bw="app-check",lh="app-check-internal";function Dw(){en(new tn(bw,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return Pw(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(lh).initialize()})),en(new tn(lh,n=>{const e=n.getProvider("app-check").getImmediate();return Sw(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),pt(kw,Nw)}Dw();const u_=Symbol("firebaseApp");function gn(n){return nl()&&ed(u_,null)||Br(n)}const te=()=>{},Ow=typeof window!="undefined";function hc(n,e){return e.split(".").reduce((t,i)=>t&&t[i],n)}function Mw(n,e,t){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],n);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,t):r[s]=t}function Bt(n){return!!n&&typeof n=="object"}const xw=Object.prototype;function Vw(n){return Bt(n)&&Object.getPrototypeOf(n)===xw}function dc(n){return Bt(n)&&n.type==="document"}function h_(n){return Bt(n)&&n.type==="collection"}function Lw(n){return dc(n)||h_(n)}function Fw(n){return Bt(n)&&n.type==="query"}function Uw(n){return Bt(n)&&"ref"in n}function Ww(n){return Bt(n)&&typeof n.bucket=="string"}function qw(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const Bw=Symbol.for("v-scx");function d_(){return!!ed(Bw,0)}const Bs=new WeakMap;function jw(n,e){if(!Bs.has(n)){const t=tm(!0);Bs.set(n,t);const{unmount:i}=e;e.unmount=()=>{i.call(e),t.stop(),Bs.delete(n)}}return Bs.get(n)}const Kw=new WeakMap,js=new WeakMap;function Hw(n){const e=gn(n);if(!js.has(e)){let t;const s=[new Promise(r=>{t=r}),r=>{js.set(e,r),t(r.value)}];js.set(e,s)}return js.get(e)}function Gw(n,e){const t=jd(e);bd(t,i=>{const s=Hw();n.value=i,Array.isArray(s)&&s[1](n)})}const ch="@firebase/database",uh="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_="";function $w(n){f_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:el(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zw(e)}}catch{}return new Qw},Qt=p_("localStorage"),Fa=p_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Kr("@firebase/database"),Yw=function(){let n=1;return function(){return n++}}(),__=function(n){const e=Qg(n),t=new Yg;t.update(e);const i=t.digest();return Jh.encodeByteArray(i)},Rs=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rs.apply(null,i):typeof i=="object"?e+=se(i):e+=i,e+=" "}return e};let Zt=null,hh=!0;const Xw=function(n,e){v(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(bn.logLevel=bt.VERBOSE,Zt=bn.log.bind(bn),e&&Fa.set("logging_enabled",!0)):typeof n=="function"?Zt=n:(Zt=null,Fa.remove("logging_enabled"))},Te=function(...n){if(hh===!0&&(hh=!1,Zt===null&&Fa.get("logging_enabled")===!0&&Xw(!0)),Zt){const e=Rs.apply(null,n);Zt(e)}},Cs=function(n){return function(...e){Te(n,...e)}},Ua=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rs(...n);bn.error(e)},Et=function(...n){const e=`FIREBASE FATAL ERROR: ${Rs(...n)}`;throw bn.error(e),new Error(e)},be=function(...n){const e="FIREBASE WARNING: "+Rs(...n);bn.warn(e)},Jw=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},g_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Zw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Hn="[MIN_NAME]",ln="[MAX_NAME]",ii=function(n,e){if(n===e)return 0;if(n===Hn||e===ln)return-1;if(e===Hn||n===ln)return 1;{const t=dh(n),i=dh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},eR=function(n,e){return n===e?0:n<e?-1:1},li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+se(e))},fc=function(n){if(typeof n!="object"||n===null)return se(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=se(e[i]),t+=":",t+=fc(n[e[i]]);return t+="}",t},m_=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Oe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const y_=function(n){v(!g_(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},tR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iR(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const sR=new RegExp("^-?(0*)\\d{1,10}$"),rR=-2147483648,oR=2147483647,dh=function(n){if(sR.test(n)){const e=Number(n);if(e>=rR&&e<=oR)return e}return null},si=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw be("Exception was thrown by user callback.",t),e},Math.floor(0))}},aR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Dn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="5",v_="v",E_="s",T_="r",I_="f",w_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,R_="ls",C_="p",Wa="ac",A_="websocket",P_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function uR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function k_(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let i;if(e===A_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===P_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uR(n)&&(t.ns=n.namespace);const s=[];return Oe(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.counters_={}}incrementCounter(e,t=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={},Zo={};function _c(n){const e=n.toString();return Jo[e]||(Jo[e]=new hR),Jo[e]}function dR(n,e){const t=n.toString();return Zo[t]||(Zo[t]=e()),Zo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&si(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="start",pR="close",_R="pLPCommand",gR="pRTLPCB",N_="id",b_="pw",D_="ser",mR="cb",yR="seg",vR="ts",ER="d",TR="dframe",O_=1870,M_=30,IR=O_-M_,wR=25e3,RR=3e4;class Rn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=_c(t),this.urlFn=l=>(this.appCheckToken&&(l[Wa]=this.appCheckToken),k_(t,P_,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RR)),Zw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fh)this.id=a,this.password=l;else if(o===pR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fh]="t",i[D_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[v_]=pc,this.transportSessionId&&(i[E_]=this.transportSessionId),this.lastSessionId&&(i[R_]=this.lastSessionId),this.applicationId&&(i[C_]=this.applicationId),this.appCheckToken&&(i[Wa]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&w_.test(location.hostname)&&(i[T_]=I_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rn.forceAllow_=!0}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){return Rn.forceAllow_?!0:!Rn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!tR()&&!nR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=em(t),s=m_(i,IR);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[TR]="t",i[N_]=e,i[b_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Yw(),window[_R+this.uniqueCallbackIdentifier]=e,window[gR+this.uniqueCallbackIdentifier]=t,this.myIFrame=gc.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[N_]=this.myID,e[b_]=this.myPW,e[D_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+M_+i.length<=O_;){const o=this.pendingSegs.shift();i=i+"&"+yR+s+"="+o.seg+"&"+vR+s+"="+o.ts+"&"+ER+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(wR)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=16384,AR=45e3;let Rr=null;typeof MozWebSocket!="undefined"?Rr=MozWebSocket:typeof WebSocket!="undefined"&&(Rr=WebSocket);class Ue{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=_c(t),this.connURL=Ue.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[v_]=pc,typeof location!="undefined"&&location.hostname&&w_.test(location.hostname)&&(o[T_]=I_),t&&(o[E_]=t),i&&(o[R_]=i),s&&(o[Wa]=s),r&&(o[C_]=r),k_(e,A_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let i;Zh(),this.mySock=new Rr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Rr!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=el(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=m_(t,CR);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rn,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ue&&Ue.isAvailable();let i=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ue];else{const s=this.transports_=[];for(const r of Qi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=6e4,SR=5e3,kR=10*1024,NR=100*1024,ea="t",ph="d",bR="s",_h="r",DR="e",gh="o",mh="a",yh="n",vh="p",OR="h";class MR{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new Qi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ea in e){const t=e[ea];t===mh?this.upgradeIfSecondaryHealthy_():t===_h?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=li("t",e),i=li("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=li("t",e),i=li("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=li(ea,e);if(ph in e){const i=e[ph];if(t===OR){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===yh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bR?this.onConnectionShutdown_(i):t===_h?this.onReset_(i):t===DR?Ua("Server Error: "+i):t===gh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ua("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),pc!==i&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends V_{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Za()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cr}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=32,Th=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function q(){return new K("")}function M(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xt(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function L_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function xR(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function F_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function U_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new K(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function ke(n,e){const t=M(n),i=M(e);if(t===null)return e;if(t===i)return ke(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function mc(n,e){if(xt(n)!==xt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function qe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(xt(n)>xt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class VR{constructor(e,t){this.errorPrefix_=t,this.parts_=F_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Hr(this.parts_[i]);W_(this)}}function LR(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hr(e),W_(n)}function FR(n){const e=n.parts_.pop();n.byteLength_-=Hr(e),n.parts_.length>0&&(n.byteLength_-=1)}function W_(n){if(n.byteLength_>Th)throw new Error(n.errorPrefix_+"has a key path longer than "+Th+" bytes ("+n.byteLength_+").");if(n.parts_.length>Eh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eh+") or object contains a cycle "+Kt(n))}function Kt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends V_{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new yc}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,UR=60*5*1e3,Ih=30*1e3,WR=1.3,qR=3e4,BR="server_kill",wh=3;class ft extends x_{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ft.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=UR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(se(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new bi,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ft.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tt(e,"w")){const i=Mn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ih)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ua("Unrecognized action received from server: "+se(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qR&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new MR(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{be(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(BR)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&be(h),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],la(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>fc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wh&&(this.reconnectDelay_=Ih,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+f_.replace(/\./g,"-")]=1,Za()?e["framework.cordova"]=1:Qh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cr.getInstance().currentlyOnline();return la(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(Hn,e),s=new x(Hn,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class q_ extends Co{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,t){return ii(e.name,t.name)}isDefinedOn(e){throw is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(ln,Ks)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Ks)}toString(){return".key"}}const On=new q_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:ce.RED,this.left=s!=null?s:Ne.EMPTY_NODE,this.right=r!=null?r:Ne.EMPTY_NODE}copy(e,t,i,s,r){return new ce(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class jR{copy(e,t,i,s,r){return this}insert(e,t,i){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,t=Ne.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ne(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hs(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new jR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n,e){return ii(n.name,e.name)}function vc(n,e){return ii(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;function HR(n){qa=n}const B_=function(n){return typeof n=="number"?"number:"+y_(n):"string:"+n},j_=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else v(n===qa||n.isEmpty(),"priority of unexpected type.");v(n===qa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh;class ae{constructor(e,t=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),j_(this.priorityNode_)}static set __childrenNodeConstructor(e){Rh=e}static get __childrenNodeConstructor(){return Rh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:M(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=M(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=y_(this.value_):e+=this.value_,this.lazyHash_=__(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ae.VALUE_TYPE_ORDER.indexOf(t),r=ae.VALUE_TYPE_ORDER.indexOf(i);return v(s>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K_,H_;function GR(n){K_=n}function $R(n){H_=n}class zR extends Co{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(ln,new ae("[PRIORITY-POST]",H_))}makePost(e,t){const i=K_(e);return new x(t,new ae("[PRIORITY-POST]",i))}toString(){return".priority"}}const X=new zR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=Math.log(2);class YR{constructor(e){const t=r=>parseInt(Math.log(r)/QR,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ar=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new ce(d,h.node,ce.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),_=s(f+1,c);return h=n[f],d=t?t(h):h,new ce(d,h.node,ce.BLACK,p,_)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,_){const g=h-p,T=h;h-=p;const b=s(g+1,T),I=n[g],C=t?t(I):I;f(new ce(C,I.node,_,null,b))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));_?d(g,ce.BLACK):(d(g,ce.BLACK),d(g,ce.RED))}return u},o=new YR(n.length),a=r(o);return new Ne(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const En={};class ct{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(En&&X,"ChildrenNode.ts has not been loaded"),ta=ta||new ct({".priority":En},{".priority":X}),ta}get(e){const t=Mn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ne?t:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,t){v(e!==On,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ar(i,e.getCompare()):a=En;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ct(u,c)}addToIndexes(e,t){const i=nr(this.indexes_,(s,r)=>{const o=Mn(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),s===En)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ar(a,o.getCompare())}else return En;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new ct(i,this.indexSet_)}removeFromIndexes(e,t){const i=nr(this.indexes_,s=>{if(s===En)return s;{const r=t.get(e.name);return r?s.remove(new x(e.name,r)):s}});return new ct(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class S{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&j_(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ui||(ui=new S(new Ne(vc),null,ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ui:t}}getChild(e){const t=M(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ui:this.priorityNode_;return new S(s,o,r)}}updateChild(e,t){const i=M(e);if(i===null)return t;{v(M(e)!==".priority"||xt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(H(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(X,(o,a)=>{t[o]=a.val(e),i++,r&&S.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B_(this.getPriority().val())+":"),this.forEachChild(X,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":__(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===On||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===On||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(X),s=t.getIterator(X);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===On?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XR extends S{constructor(){super(new Ne(vc),S.EMPTY_NODE,ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const As=new XR;Object.defineProperties(x,{MIN:{value:new x(Hn,S.EMPTY_NODE)},MAX:{value:new x(ln,As)}});q_.__EMPTY_NODE=S.EMPTY_NODE;ae.__childrenNodeConstructor=S;HR(As);$R(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=!0;function ue(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ae(t,ue(e))}if(!(n instanceof Array)&&JR){const t=[];let i=!1;if(Oe(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return S.EMPTY_NODE;const r=Ar(t,KR,o=>o.name,vc);if(i){const o=Ar(t,X.getCompare());return new S(r,ue(e),new ct({".priority":o},{".priority":X}))}else return new S(r,ue(e),ct.Default)}else{let t=S.EMPTY_NODE;return Oe(n,(i,s)=>{if(Tt(n,i)&&i.substring(0,1)!=="."){const r=ue(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ue(e))}}GR(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR extends Co{constructor(e){super(),this.indexPath_=e,v(!V(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}makePost(e,t){const i=ue(e),s=S.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,As);return new x(ln,e)}toString(){return F_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends Co{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ii(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=ue(e);return new x(t,i)}toString(){return".value"}}const tC=new eC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n){return{type:"value",snapshotNode:n}}function Gn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Yi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function nC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Yi(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gn(t,i)):o.trackChildChange(Xi(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(X,(s,r)=>{t.hasChild(s)||i.trackChildChange(Yi(s,r))}),t.isLeafNode()||t.forEachChild(X,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Xi(s,r,o))}else i.trackChildChange(Gn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?S.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.indexedFilter_=new Ec(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ji.getStartPost_(e),this.endPost_=Ji.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new x(t,i))||(i=S.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=S.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(S.EMPTY_NODE);const r=this;return t.forEachChild(X,(o,a)=>{r.matches(new x(o,a))||(s=s.updateImmediateChild(o,S.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new x(t,i))||(i=S.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=S.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=S.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(S.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,S.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new x(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Xi(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Yi(t,h));const _=a.updateImmediateChild(t,S.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Gn(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Yi(c.name,c.node)),r.trackChildChange(Gn(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,S.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sC(n){return n.loadsAllData()?new Ec(n.getIndex()):n.hasLimit()?new iC(n):new Ji(n)}function Ch(n){const e={};if(n.isDefault())return e;let t;if(n.index_===X?t="$priority":n.index_===tC?t="$value":n.index_===On?t="$key":(v(n.index_ instanceof ZR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=se(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=se(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+se(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=se(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+se(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ah(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==X&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends x_{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ch(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Mn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Pr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ch(e._queryParams),i=e._path.toString(),s=new bi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=el(a.responseText)}catch{be("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(){return{value:null,children:new Map}}function $_(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=M(e);n.children.has(i)||n.children.set(i,Sr());const s=n.children.get(i);e=H(e),$_(s,e,t)}}function Ba(n,e,t){n.value!==null?t(e,n.value):oC(n,(i,s)=>{const r=new K(e.toString()+"/"+i);Ba(s,r,t)})}function oC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Oe(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=10*1e3,lC=30*1e3,cC=5*60*1e3;class uC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new aC(e);const i=Ph+(lC-Ph)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Oe(e,(s,r)=>{r>0&&Tt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*cC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Be||(Be={}));function z_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ic(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Be.ACK_USER_WRITE,this.source=z_()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new kr(q(),t,this.revert)}}else return v(M(this.path)===e,"operationForChild called for unrelated child."),new kr(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.source=e,this.path=t,this.type=Be.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Zi(this.source,q()):new Zi(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Be.OVERWRITE}operationForChild(e){return V(this.path)?new cn(this.source,q(),this.snap.getImmediateChild(e)):new cn(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Be.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new cn(this.source,q(),t.value):new es(this.source,q(),t)}else return v(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=M(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nC(o.childName,o.snapshotNode))}),hi(n,s,"child_removed",e,i,t),hi(n,s,"child_added",e,i,t),hi(n,s,"child_moved",r,i,t),hi(n,s,"child_changed",e,i,t),hi(n,s,"value",e,i,t),s}function hi(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>pC(n,a,l)),o.forEach(a=>{const l=fC(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function fC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function pC(n,e,t){if(e.childName==null||t.childName==null)throw is("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n,e){return{eventCache:n,serverCache:e}}function Si(n,e,t,i){return Ao(new Vt(e,t,i),n.serverCache)}function Q_(n,e,t,i){return Ao(n.eventCache,new Vt(e,t,i))}function Nr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function un(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const _C=()=>(na||(na=new Ne(eR)),na);class G{constructor(e,t=_C()){this.value=e,this.children=t}static fromObject(e){let t=new G(null);return Oe(e,(i,s)=>{t=t.set(new K(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:q(),value:this.value};if(V(e))return null;{const i=M(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:oe(new K(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=M(e),i=this.children.get(t);return i!==null?i.subtree(H(e)):new G(null)}}set(e,t){if(V(e))return new G(t,this.children);{const i=M(e),r=(this.children.get(i)||new G(null)).set(H(e),t),o=this.children.insert(i,r);return new G(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=M(e),i=this.children.get(t);if(i){const s=i.remove(H(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const t=M(e),i=this.children.get(t);return i?i.get(H(e)):null}}setTree(e,t){if(V(e))return t;{const i=M(e),r=(this.children.get(i)||new G(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new G(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,q(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(V(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(H(e),oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,q(),t)}foreachOnPath_(e,t,i){if(V(e))return this;{this.value&&i(t,this.value);const s=M(e),r=this.children.get(s);return r?r.foreachOnPath_(H(e),oe(t,s),i):new G(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.writeTree_=e}static empty(){return new He(new G(null))}}function ki(n,e,t){if(V(e))return new He(new G(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ke(s,e);return r=r.updateChild(o,t),new He(n.writeTree_.set(s,r))}else{const s=new G(t),r=n.writeTree_.setTree(e,s);return new He(r)}}}function Sh(n,e,t){let i=n;return Oe(t,(s,r)=>{i=ki(i,oe(e,s),r)}),i}function kh(n,e){if(V(e))return He.empty();{const t=n.writeTree_.setTree(e,new G(null));return new He(t)}}function ja(n,e){return mn(n,e)!=null}function mn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ke(t.path,e)):null}function Nh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(X,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function kt(n,e){if(V(e))return n;{const t=mn(n,e);return t!=null?new He(new G(t)):new He(n.writeTree_.subtree(e))}}function Ka(n){return n.writeTree_.isEmpty()}function $n(n,e){return Y_(q(),n.writeTree_,e)}function Y_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Y_(oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e){return eg(e,n)}function gC(n,e,t,i,s){v(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ki(n.visibleWrites,e,t)),n.lastWriteId=i}function mC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function yC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&vC(a,i.path)?s=!1:qe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return EC(n),!0;if(i.snap)n.visibleWrites=kh(n.visibleWrites,i.path);else{const a=i.children;Oe(a,l=>{n.visibleWrites=kh(n.visibleWrites,oe(i.path,l))})}return!0}else return!1}function vC(n,e){if(n.snap)return qe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&qe(oe(n.path,t),e))return!0;return!1}function EC(n){n.visibleWrites=X_(n.allWrites,TC,q()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TC(n){return n.visible}function X_(n,e,t){let i=He.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)qe(t,o)?(a=ke(t,o),i=ki(i,a,r.snap)):qe(o,t)&&(a=ke(o,t),i=ki(i,q(),r.snap.getChild(a)));else if(r.children){if(qe(t,o))a=ke(t,o),i=Sh(i,a,r.children);else if(qe(o,t))if(a=ke(o,t),V(a))i=Sh(i,q(),r.children);else{const l=Mn(r.children,M(a));if(l){const c=l.getChild(H(a));i=ki(i,q(),c)}}}else throw is("WriteRecord should have .snap or .children")}}return i}function J_(n,e,t,i,s){if(!i&&!s){const r=mn(n.visibleWrites,e);if(r!=null)return r;{const o=kt(n.visibleWrites,e);if(Ka(o))return t;if(t==null&&!ja(o,q()))return null;{const a=t||S.EMPTY_NODE;return $n(o,a)}}}else{const r=kt(n.visibleWrites,e);if(!s&&Ka(r))return t;if(!s&&t==null&&!ja(r,q()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(qe(c.path,e)||qe(e,c.path))},a=X_(n.allWrites,o,e),l=t||S.EMPTY_NODE;return $n(a,l)}}}function IC(n,e,t){let i=S.EMPTY_NODE;const s=mn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(X,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=kt(n.visibleWrites,e);return t.forEachChild(X,(o,a)=>{const l=$n(kt(r,new K(o)),a);i=i.updateImmediateChild(o,l)}),Nh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=kt(n.visibleWrites,e);return Nh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function wC(n,e,t,i,s){v(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,t);if(ja(n.visibleWrites,r))return null;{const o=kt(n.visibleWrites,r);return Ka(o)?s.getChild(t):$n(o,s.getChild(t))}}function RC(n,e,t,i){const s=oe(e,t),r=mn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=kt(n.visibleWrites,s);return $n(o,i.getNode().getImmediateChild(t))}else return null}function CC(n,e){return mn(n.visibleWrites,e)}function AC(n,e,t,i,s,r,o){let a;const l=kt(n.visibleWrites,e),c=mn(l,q());if(c!=null)a=c;else if(t!=null)a=$n(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function PC(){return{visibleWrites:He.empty(),allWrites:[],lastWriteId:-1}}function br(n,e,t,i){return J_(n.writeTree,n.treePath,e,t,i)}function Rc(n,e){return IC(n.writeTree,n.treePath,e)}function bh(n,e,t,i){return wC(n.writeTree,n.treePath,e,t,i)}function Dr(n,e){return CC(n.writeTree,oe(n.treePath,e))}function SC(n,e,t,i,s,r){return AC(n.writeTree,n.treePath,e,t,i,s,r)}function Cc(n,e,t){return RC(n.writeTree,n.treePath,e,t)}function Z_(n,e){return eg(oe(n.treePath,e),n.writeTree)}function eg(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Xi(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Yi(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Gn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Xi(i,e.snapshotNode,s.oldSnap));else throw is("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const tg=new NC;class Ac{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cc(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:un(this.viewCache_),r=SC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n){return{filter:n}}function DC(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function OC(n,e,t,i,s){const r=new kC;let o,a;if(t.type===Be.OVERWRITE){const c=t;c.source.fromUser?o=Ha(n,e,c.path,c.snap,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=Or(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Be.MERGE){const c=t;c.source.fromUser?o=xC(n,e,c.path,c.children,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ga(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Be.ACK_USER_WRITE){const c=t;c.revert?o=FC(n,e,c.path,i,s,r):o=VC(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Be.LISTEN_COMPLETE)o=LC(n,e,t.path,i,r);else throw is("Unknown operation type: "+t.type);const l=r.getChanges();return MC(e,o,l),{viewCache:o,changes:l}}function MC(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Nr(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(G_(Nr(e)))}}function ng(n,e,t,i,s,r){const o=e.eventCache;if(Dr(i,t)!=null)return e;{let a,l;if(V(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=un(e),u=c instanceof S?c:S.EMPTY_NODE,h=Rc(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=br(i,un(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(t);if(c===".priority"){v(xt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=bh(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=H(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=bh(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Cc(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Si(e,a,o.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function Or(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(V(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=M(t);if(!l.isCompleteForPath(t)&&xt(t)>1)return e;const p=H(t),g=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,tg,null)}const h=Q_(e,c,l.isFullyInitialized()||V(t),u.filtersNodes()),d=new Ac(s,h,r);return ng(n,h,t,s,d,a)}function Ha(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ac(s,e,r);if(V(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Si(e,c,!0,n.filter.filtersNodes());else{const h=M(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Si(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=H(t),f=a.getNode().getImmediateChild(h);let p;if(V(d))p=i;else{const _=u.getCompleteChild(h);_!=null?L_(d)===".priority"&&_.getChild(U_(d)).isEmpty()?p=_:p=_.updateChild(d,i):p=S.EMPTY_NODE}if(f.equals(p))l=e;else{const _=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Si(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Dh(n,e){return n.eventCache.isCompleteForChild(e)}function xC(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=oe(t,l);Dh(e,M(u))&&(a=Ha(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=oe(t,l);Dh(e,M(u))||(a=Ha(n,a,u,c,s,r,o))}),a}function Oh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ga(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;V(t)?c=i:c=new G(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Oh(n,f,d);l=Or(n,l,new K(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),_=Oh(n,p,d);l=Or(n,l,new K(h),_,s,r,o,a)}}),l}function VC(n,e,t,i,s,r,o){if(Dr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(V(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Or(n,e,t,l.getNode().getChild(t),s,r,a,o);if(V(t)){let c=new G(null);return l.getNode().forEachChild(On,(u,h)=>{c=c.set(new K(u),h)}),Ga(n,e,t,c,s,r,a,o)}else return e}else{let c=new G(null);return i.foreach((u,h)=>{const d=oe(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ga(n,e,t,c,s,r,a,o)}}function LC(n,e,t,i,s){const r=e.serverCache,o=Q_(e,r.getNode(),r.isFullyInitialized()||V(t),r.isFiltered());return ng(n,o,t,i,tg,s)}function FC(n,e,t,i,s,r){let o;if(Dr(i,t)!=null)return e;{const a=new Ac(i,e,s),l=e.eventCache.getNode();let c;if(V(t)||M(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=br(i,un(e));else{const h=e.serverCache.getNode();v(h instanceof S,"serverChildren would be complete if leaf node"),u=Rc(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=M(t);let h=Cc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,H(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,S.EMPTY_NODE,H(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=br(i,un(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dr(i,q())!=null,Si(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ec(i.getIndex()),r=sC(i);this.processor_=bC(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(S.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(S.EMPTY_NODE,a.getNode(),null),u=new Vt(l,o.isFullyInitialized(),s.filtersNodes()),h=new Vt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ao(h,u),this.eventGenerator_=new hC(this.query_)}get query(){return this.query_}}function WC(n){return n.viewCache_.serverCache.getNode()}function qC(n){return Nr(n.viewCache_)}function BC(n,e){const t=un(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild(M(e)).isEmpty())?t.getChild(e):null}function Mh(n){return n.eventRegistrations_.length===0}function jC(n,e){n.eventRegistrations_.push(e)}function xh(n,e,t){const i=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Vh(n,e,t,i){e.type===Be.MERGE&&e.source.queryId!==null&&(v(un(n.viewCache_),"We should always have a full cache before handling merges"),v(Nr(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=OC(n.processor_,s,e,t,i);return DC(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ig(n,r.changes,r.viewCache.eventCache.getNode(),null)}function KC(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(X,(r,o)=>{i.push(Gn(r,o))}),t.isFullyInitialized()&&i.push(G_(t.getNode())),ig(n,i,t.getNode(),e)}function ig(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return dC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class sg{constructor(){this.views=new Map}}function HC(n){v(!Mr,"__referenceConstructor has already been defined"),Mr=n}function GC(){return v(Mr,"Reference.ts has not been loaded"),Mr}function $C(n){return n.views.size===0}function Pc(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return v(r!=null,"SyncTree gave us an op for an invalid query."),Vh(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Vh(o,e,t,i));return r}}function rg(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=br(t,s?i:null),l=!1;a?l=!0:i instanceof S?(a=Rc(t,i),l=!1):(a=S.EMPTY_NODE,l=!1);const c=Ao(new Vt(a,l,!1),new Vt(i,s,!1));return new UC(e,c)}return o}function zC(n,e,t,i,s,r){const o=rg(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),jC(o,t),KC(o,t)}function QC(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Lt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(xh(c,t,i)),Mh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(xh(l,t,i)),Mh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Lt(n)&&r.push(new(GC())(e._repo,e._path)),{removed:r,events:o}}function og(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Nt(n,e){let t=null;for(const i of n.views.values())t=t||BC(i,e);return t}function ag(n,e){if(e._queryParams.loadsAllData())return So(n);{const i=e._queryIdentifier;return n.views.get(i)}}function lg(n,e){return ag(n,e)!=null}function Lt(n){return So(n)!=null}function So(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;function YC(n){v(!xr,"__referenceConstructor has already been defined"),xr=n}function XC(){return v(xr,"Reference.ts has not been loaded"),xr}let JC=1;class Lh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=PC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cg(n,e,t,i,s){return gC(n.pendingWriteTree_,e,t,i,s),s?Ss(n,new cn(z_(),e,t)):[]}function Yt(n,e,t=!1){const i=mC(n.pendingWriteTree_,e);if(yC(n.pendingWriteTree_,e)){let r=new G(null);return i.snap!=null?r=r.set(q(),!0):Oe(i.children,o=>{r=r.set(new K(o),!0)}),Ss(n,new kr(i.path,r,t))}else return[]}function Ps(n,e,t){return Ss(n,new cn(Ic(),e,t))}function ZC(n,e,t){const i=G.fromObject(t);return Ss(n,new es(Ic(),e,i))}function eA(n,e){return Ss(n,new Zi(Ic(),e))}function tA(n,e,t){const i=kc(n,t);if(i){const s=Nc(i),r=s.path,o=s.queryId,a=ke(r,e),l=new Zi(wc(o),a);return bc(n,r,l)}else return[]}function Vr(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||lg(o,e))){const l=QC(o,e,t,i);$C(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Lt(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=sA(d);for(let p=0;p<f.length;++p){const _=f[p],g=_.query,T=fg(n,_);n.listenProvider_.startListening(Ni(g),ts(n,g),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Ni(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(ko(d));n.listenProvider_.stopListening(Ni(d),f)}))}rA(n,c)}return a}function ug(n,e,t,i){const s=kc(n,i);if(s!=null){const r=Nc(s),o=r.path,a=r.queryId,l=ke(o,e),c=new cn(wc(a),l,t);return bc(n,o,c)}else return[]}function nA(n,e,t,i){const s=kc(n,i);if(s){const r=Nc(s),o=r.path,a=r.queryId,l=ke(o,e),c=G.fromObject(t),u=new es(wc(a),l,c);return bc(n,o,u)}else return[]}function $a(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=ke(d,s);r=r||Nt(f,p),o=o||Lt(f)});let a=n.syncPointTree_.get(s);a?(o=o||Lt(a),r=r||Nt(a,q())):(a=new sg,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=S.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const _=Nt(p,q());_&&(r=r.updateImmediateChild(f,_))}));const c=lg(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ko(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=oA();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Po(n.pendingWriteTree_,s);let h=zC(a,e,t,u,r,l);if(!c&&!o&&!i){const d=ag(a,e);h=h.concat(aA(n,e,d))}return h}function Sc(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ke(o,e),c=Nt(a,l);if(c)return c});return J_(s,e,r,t,!0)}function iA(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=ke(c,t);i=i||Nt(u,h)});let s=n.syncPointTree_.get(t);s?i=i||Nt(s,q()):(s=new sg,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Vt(i,!0,!1):null,a=Po(n.pendingWriteTree_,e._path),l=rg(s,e,a,r?o.getNode():S.EMPTY_NODE,r);return qC(l)}function Ss(n,e){return hg(e,n.syncPointTree_,null,Po(n.pendingWriteTree_,q()))}function hg(n,e,t,i){if(V(n.path))return dg(n,e,t,i);{const s=e.get(q());t==null&&s!=null&&(t=Nt(s,q()));let r=[];const o=M(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Z_(i,o);r=r.concat(hg(a,l,c,u))}return s&&(r=r.concat(Pc(s,n,i,t))),r}}function dg(n,e,t,i){const s=e.get(q());t==null&&s!=null&&(t=Nt(s,q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Z_(i,o),u=n.operationForChild(o);u&&(r=r.concat(dg(u,a,l,c)))}),s&&(r=r.concat(Pc(s,n,i,t))),r}function fg(n,e){const t=e.query,i=ts(n,t);return{hashFn:()=>(WC(e)||S.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?tA(n,t._path,i):eA(n,t._path);{const r=iR(s,t);return Vr(n,t,null,r)}}}}function ts(n,e){const t=ko(e);return n.queryToTagMap.get(t)}function ko(n){return n._path.toString()+"$"+n._queryIdentifier}function kc(n,e){return n.tagToQueryMap.get(e)}function Nc(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function bc(n,e,t){const i=n.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const s=Po(n.pendingWriteTree_,e);return Pc(i,t,s,null)}function sA(n){return n.fold((e,t,i)=>{if(t&&Lt(t))return[So(t)];{let s=[];return t&&(s=og(t)),Oe(i,(r,o)=>{s=s.concat(o)}),s}})}function Ni(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(XC())(n._repo,n._path):n}function rA(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ko(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function oA(){return JC++}function aA(n,e,t){const i=e._path,s=ts(n,e),r=fg(n,t),o=n.listenProvider_.startListening(Ni(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)v(!Lt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!V(c)&&u&&Lt(u))return[So(u).query];{let d=[];return u&&(d=d.concat(og(u).map(f=>f.query))),Oe(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ni(u),ts(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Dc(t)}node(){return this.node_}}class Oc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=oe(this.path_,e);return new Oc(this.syncTree_,t)}node(){return Sc(this.syncTree_,this.path_)}}const lA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fh=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cA(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uA(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cA=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},uA=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const s=e.node();if(v(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},hA=function(n,e,t,i){return Mc(e,new Oc(t,n),i)},pg=function(n,e,t){return Mc(n,new Dc(e),t)};function Mc(n,e,t){const i=n.getPriority().val(),s=Fh(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ae(a,ue(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ae(s))),o.forEachChild(X,(a,l)=>{const c=Mc(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Vc(n,e){let t=e instanceof K?e:new K(e),i=n,s=M(t);for(;s!==null;){const r=Mn(i.node.children,s)||{children:{},childCount:0};i=new xc(s,i,r),t=H(t),s=M(t)}return i}function ri(n){return n.node.value}function _g(n,e){n.node.value=e,za(n)}function gg(n){return n.node.childCount>0}function dA(n){return ri(n)===void 0&&!gg(n)}function No(n,e){Oe(n.node.children,(t,i)=>{e(new xc(t,n,i))})}function mg(n,e,t,i){t&&!i&&e(n),No(n,s=>{mg(s,e,!0,i)}),t&&i&&e(n)}function fA(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ks(n){return new K(n.parent===null?n.name:ks(n.parent)+"/"+n.name)}function za(n){n.parent!==null&&pA(n.parent,n.name,n)}function pA(n,e,t){const i=dA(t),s=Tt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,za(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,za(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=/[\[\].#$\/\u0000-\u001F\u007F]/,gA=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,yg=function(n){return typeof n=="string"&&n.length!==0&&!_A.test(n)},vg=function(n){return typeof n=="string"&&n.length!==0&&!gA.test(n)},mA=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vg(n)},yA=function(n,e,t,i){i&&e===void 0||Lc(tl(n,"value"),e,t)},Lc=function(n,e,t){const i=t instanceof K?new VR(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Kt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Kt(i)+" with contents = "+e.toString());if(g_(e))throw new Error(n+"contains "+e.toString()+" "+Kt(i));if(typeof e=="string"&&e.length>ia/3&&Hr(e)>ia)throw new Error(n+"contains a string greater than "+ia+" utf8 bytes "+Kt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Oe(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yg(o)))throw new Error(n+" contains an invalid key ("+o+") "+Kt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LR(i,o),Lc(n,a,i),FR(i)}),s&&r)throw new Error(n+' contains ".value" child '+Kt(i)+" in addition to actual children.")}},Eg=function(n,e,t,i){if(!(i&&t===void 0)&&!vg(t))throw new Error(tl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vA=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Eg(n,e,t,i)},Tg=function(n,e){if(M(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},EA=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mA(t))throw new Error(tl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fc(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!mc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ig(n,e,t){Fc(n,t),wg(n,i=>mc(i,e))}function nt(n,e,t){Fc(n,t),wg(n,i=>qe(i,e)||qe(e,i))}function wg(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(IA(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function IA(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Zt&&Te("event: "+t.toString()),si(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="repo_interrupt",RA=25;class CA{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sr(),this.transactionQueueTree_=new xc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AA(n,e,t){if(n.stats_=_c(n.repoInfo_),n.forceRestClient_||aR())n.server_=new Pr(n.repoInfo_,(i,s,r,o)=>{Uh(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Wh(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ft(n.repoInfo_,e,(i,s,r,o)=>{Uh(n,i,s,r,o)},i=>{Wh(n,i)},i=>{SA(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=dR(n.repoInfo_,()=>new uC(n.stats_,n.server_)),n.infoData_=new rC,n.infoSyncTree_=new Lh({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ps(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wc(n,"connected",!1),n.serverSyncTree_=new Lh({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);nt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function PA(n){const t=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Uc(n){return lA({timestamp:PA(n)})}function Uh(n,e,t,i,s){n.dataUpdateCount++;const r=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=nr(t,c=>ue(c));o=nA(n.serverSyncTree_,r,l,s)}else{const l=ue(t);o=ug(n.serverSyncTree_,r,l,s)}else if(i){const l=nr(t,c=>ue(c));o=ZC(n.serverSyncTree_,r,l)}else{const l=ue(t);o=Ps(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Do(n,r)),nt(n.eventQueue_,a,o)}function Wh(n,e){Wc(n,"connected",e),e===!1&&bA(n)}function SA(n,e){Oe(e,(t,i)=>{Wc(n,t,i)})}function Wc(n,e,t){const i=new K("/.info/"+e),s=ue(t);n.infoData_.updateSnapshot(i,s);const r=Ps(n.infoSyncTree_,i,s);nt(n.eventQueue_,i,r)}function Rg(n){return n.nextWriteId_++}function kA(n,e,t){const i=iA(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=ue(s).withIndex(e._queryParams.getIndex());$a(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ps(n.serverSyncTree_,e._path,r);else{const a=ts(n.serverSyncTree_,e);o=ug(n.serverSyncTree_,e._path,r,a)}return nt(n.eventQueue_,e._path,o),Vr(n.serverSyncTree_,e,t,null,!0),r},s=>(bo(n,"get for query "+se(e)+" failed: "+s),Promise.reject(new Error(s))))}function NA(n,e,t,i,s){bo(n,"set",{path:e.toString(),value:t,priority:i});const r=Uc(n),o=ue(t,i),a=Sc(n.serverSyncTree_,e),l=pg(o,a,r),c=Rg(n),u=cg(n.serverSyncTree_,e,l,c,!0);Fc(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||be("set at "+e+" failed: "+d);const _=Yt(n.serverSyncTree_,c,!p);nt(n.eventQueue_,e,_),MA(n,s,d,f)});const h=kg(n,e);Do(n,h),nt(n.eventQueue_,h,[])}function bA(n){bo(n,"onDisconnectEvents");const e=Uc(n),t=Sr();Ba(n.onDisconnect_,q(),(s,r)=>{const o=hA(s,r,n.serverSyncTree_,e);$_(t,s,o)});let i=[];Ba(t,q(),(s,r)=>{i=i.concat(Ps(n.serverSyncTree_,s,r));const o=kg(n,s);Do(n,o)}),n.onDisconnect_=Sr(),nt(n.eventQueue_,q(),i)}function DA(n,e,t){let i;M(e._path)===".info"?i=$a(n.infoSyncTree_,e,t):i=$a(n.serverSyncTree_,e,t),Ig(n.eventQueue_,e._path,i)}function qh(n,e,t){let i;M(e._path)===".info"?i=Vr(n.infoSyncTree_,e,t):i=Vr(n.serverSyncTree_,e,t),Ig(n.eventQueue_,e._path,i)}function OA(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wA)}function bo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Te(t,...e)}function MA(n,e,t,i){e&&si(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Cg(n,e,t){return Sc(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function qc(n,e=n.transactionQueueTree_){if(e||Oo(n,e),ri(e)){const t=Pg(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&xA(n,ks(e),t)}else gg(e)&&No(e,t=>{qc(n,t)})}function xA(n,e,t){const i=t.map(c=>c.currentWriteId),s=Cg(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bo(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Yt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Oo(n,Vc(n.transactionQueueTree_,e)),qc(n,n.transactionQueueTree_),nt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)si(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{be("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Do(n,e)}},o)}function Do(n,e){const t=Ag(n,e),i=ks(t),s=Pg(n,t);return VA(n,s,i),i}function VA(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ke(t,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Yt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=RA)u=!0,h="maxretry",s=s.concat(Yt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Cg(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Lc("transaction failed: Data returned ",f,l.path);let p=ue(f);typeof f=="object"&&f!=null&&Tt(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,T=Uc(n),b=pg(p,d,T);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=Rg(n),o.splice(o.indexOf(g),1),s=s.concat(cg(n.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),s=s.concat(Yt(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(Yt(n.serverSyncTree_,l.currentWriteId,!0))}nt(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Oo(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)si(i[a]);qc(n,n.transactionQueueTree_)}function Ag(n,e){let t,i=n.transactionQueueTree_;for(t=M(e);t!==null&&ri(i)===void 0;)i=Vc(i,t),e=H(e),t=M(e);return i}function Pg(n,e){const t=[];return Sg(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Sg(n,e,t){const i=ri(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);No(e,s=>{Sg(n,s,t)})}function Oo(n,e){const t=ri(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,_g(e,t.length>0?t:void 0)}No(e,i=>{Oo(n,i)})}function kg(n,e){const t=ks(Ag(n,e)),i=Vc(n.transactionQueueTree_,e);return fA(i,s=>{sa(n,s)}),sa(n,i),mg(i,s=>{sa(n,s)}),t}function sa(n,e){const t=ri(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Yt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_g(e,void 0):t.length=r+1,nt(n.eventQueue_,ks(e),s);for(let o=0;o<i.length;o++)si(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function FA(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):be(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bh=function(n,e){const t=UA(n),i=t.namespace;t.domain==="firebase.com"&&Et(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Jw();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new S_(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new K(t.pathString)}},UA=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=LA(n.substring(u,h)));const d=FA(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}class bg{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return V(this._path)?null:L_(this._path)}get ref(){return new st(this._repo,this._path)}get _queryIdentifier(){const e=Ah(this._queryParams),t=fc(e);return t==="{}"?"default":t}get _queryObject(){return Ah(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof Bc))return!1;const t=this._repo===e._repo,i=mc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+xR(this._path)}}class st extends Bc{constructor(e,t){super(e,t,new Tc,!1)}get parent(){const e=U_(this._path);return e===null?null:new st(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=Lr(this.ref,e);return new zn(this._node.getChild(t),i,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new zn(s,Lr(this.ref,i),X)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Y0(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?Lr(n._root,e):n._root}function Lr(n,e){return n=ie(n),M(n._path)===null?vA("child","path",e,!1):Eg("child","path",e,!1),new st(n._repo,oe(n._path,e))}function X0(n){return Tg("remove",n._path),WA(n,null)}function WA(n,e){n=ie(n),Tg("set",n._path),yA("set",e,n._path,!1);const t=new bi;return NA(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Og(n){n=ie(n);const e=new Dg(()=>{}),t=new Mo(e);return kA(n._repo,n,t).then(i=>new zn(i,new st(n._repo,n._path),n._queryParams.getIndex()))}class Mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Ng("value",this,new zn(e.snapshotNode,new st(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bg(this,e,t):null}matches(e){return e instanceof Mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bg(this,e,t):null}createEvent(e,t){v(e.childName!=null,"Child events should have a childName.");const i=Lr(new st(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Ng(e.type,this,new zn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ns(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{qh(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Dg(t,r||void 0),a=e==="value"?new Mo(o):new jc(e,o);return DA(n._repo,n,a),()=>qh(n._repo,n,a)}function Mg(n,e,t,i){return Ns(n,"value",e,t,i)}function qA(n,e,t,i){return Ns(n,"child_added",e,t,i)}function BA(n,e,t,i){return Ns(n,"child_changed",e,t,i)}function jA(n,e,t,i){return Ns(n,"child_moved",e,t,i)}function KA(n,e,t,i){return Ns(n,"child_removed",e,t,i)}HC(st);YC(st);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="FIREBASE_DATABASE_EMULATOR_HOST",Qa={};let GA=!1;function $A(n,e,t,i){n.repoInfo_=new S_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function zA(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Bh(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[HA]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Bh(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Dn(Dn.OWNER):new cR(n.name,n.options,e);EA("Invalid Firebase Database URL",o),V(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YA(a,n,u,new lR(n.name,t));return new XA(h,n)}function QA(n,e){const t=Qa[e];(!t||t[n.key]!==n)&&Et(`Database ${e}(${n.repoInfo_}) has already been deleted.`),OA(n),delete t[n.key]}function YA(n,e,t,i){let s=Qa[e.name];s||(s={},Qa[e.name]=s);let r=s[n.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CA(n,GA,t,i),s[n.toURLString()]=r,r}class XA{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new st(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function JA(n=Br(),e){const t=qr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Yh("database");i&&ZA(t,...i)}return t}function ZA(n,e,t,i={}){n=ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Et("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Dn(Dn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Xh(i.mockUserToken,n.app.options.projectId);r=new Dn(o)}$A(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){$w(Ft),en(new tn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zA(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),pt(ch,uh,n),pt(ch,uh,"esm2017")}ft.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ft.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};e0();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="firebasestorage.googleapis.com",t0="storageBucket",n0=2*60*1e3,i0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends ns{constructor(e,t,i=0){super(ra(e),`Firebase Storage: ${t} (${ra(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function ra(n){return"storage/"+n}function s0(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(it.UNKNOWN,n)}function r0(){return new rt(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function o0(){return new rt(it.CANCELED,"User canceled the upload/download.")}function a0(n){return new rt(it.INVALID_URL,"Invalid URL '"+n+"'.")}function l0(n){return new rt(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jh(n){return new rt(it.INVALID_ARGUMENT,n)}function Vg(){return new rt(it.APP_DELETED,"The Firebase app was deleted.")}function c0(n){return new rt(it.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=je.makeFromUrl(e,t)}catch{return new je(e,"")}if(i.path==="")return i;throw l0(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},_=t===xg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",T=new RegExp(`^https?://${_}/${s}/${g}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<I.length;C++){const F=I[C],W=F.regex.exec(e);if(W){const ge=W[F.indices.bucket];let Pe=W[F.indices.path];Pe||(Pe=""),i=new je(ge,Pe),F.postModify(i);break}}if(i==null)throw a0(e);return i}}class u0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,n(f,l())},g)}function d(){r&&clearTimeout(r)}function f(g,...T){if(c){d();return}if(g){d(),u.call(null,g,...T);return}if(l()||o){d(),u.call(null,g,...T);return}i<64&&(i*=2);let I;a===1?(a=2,I=0):I=(i+Math.random())*1e3,h(I)}let p=!1;function _(g){p||(p=!0,d(),!c&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},t),_}function d0(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){return n!==void 0}function Kh(n,e,t,i){if(i<e)throw jh(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw jh(`Invalid value for '${n}'. Expected ${t} or less.`)}function p0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Fr||(Fr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Gs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Fr.NO_ERROR,l=r.getStatus();if(!a||_0(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Fr.ABORT;i(!1,new Gs(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Gs(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());f0(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=s0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Vg():o0();o(l)}else{const l=r0();o(l)}};this.canceled_?t(!1,new Gs(!1,null,!0)):this.backoffId_=h0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gs{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function m0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function y0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function v0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function E0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function T0(n,e,t,i,s,r,o=!0){const a=p0(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return v0(c,e),m0(c,t),y0(c,r),E0(c,i),new g0(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function w0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this._service=e,t instanceof je?this._location=t:this._location=je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ur(e,t)}get root(){const e=new je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w0(this._location.path)}get storage(){return this._service}get parent(){const e=I0(this._location.path);if(e===null)return null;const t=new je(this._location.bucket,e);return new Ur(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw c0(e)}}function Hh(n,e){const t=e==null?void 0:e[t0];return t==null?null:je.makeFromBucketSpec(t,n)}class R0{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=xg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=n0,this._maxUploadRetryTime=i0,this._requests=new Set,s!=null?this._bucket=je.makeFromBucketSpec(s,this._host):this._bucket=Hh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=je.makeFromBucketSpec(this._url,e):this._bucket=Hh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ur(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new u0(Vg());{const o=T0(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Gh="@firebase/storage",$h="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="storage";function A0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new R0(t,i,s,e,Ft)}function P0(){en(new tn(C0,A0,"PUBLIC").setMultipleInstances(!0)),pt(Gh,$h,""),pt(Gh,$h,"esm2017")}P0();const oa=new WeakMap;function Lg(n,e){return oa.has(e)||oa.set(e,n||{f:{},r:{},s:{},u:{}}),oa.get(e)}function Fg(n,e,t,i){if(!n)return t;const[s,r]=Ug(n);if(!s)return t;const o=Lg(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:t}function S0(n,e,t,i){if(!n)return;const[s,r]=Ug(n);if(!s)return;const o=Lg(void 0,i)[s],a=e||r;if(a)return t.then(l=>{o[a]=l}).catch(te),a}function Ug(n){return Lw(n)||Fw(n)?["f",n.path]:Uw(n)?["r",n.toString()]:Ww(n)?["s",n.toString()]:[]}const aa=new WeakMap;function Wg(n,e,t){const i=gn();aa.has(i)||aa.set(i,new Map);const s=aa.get(i),r=S0(e,t,n,i);return r&&s.set(r,n),r?()=>s.delete(r):te}function k0(n){if(!n.exists())return null;const e=n.val();return Bt(e)?Object.defineProperty(e,"id",{value:n.key}):{$value:e,id:n.key}}function di(n,e){for(let t=0;t<n.length;t++)if(n[t].id===e)return t;return-1}const Kc={reset:!1,serialize:k0,wait:!0};function N0(n,e,t,i,s){const r=Object.assign({},Kc,s);let o=te;function a(l){const c=r.serialize(l);n.value=c,t(c)}return r.once?Og(e).then(a).catch(i):o=Mg(e,a,i),l=>{if(o(),l){const c=typeof l=="function"?l():null;n.value=c}}}function b0(n,e,t,i,s){const r=Object.assign({},Kc,s);let o=r.wait?[]:n;r.wait||(n.value=[]);let a=te,l=te,c=te,u=te,h=te;return r.once?Og(e).then(d=>{const f=[];d.forEach(p=>{f.push(r.serialize(p))}),t(n.value=f)}).catch(i):(a=qA(e,(d,f)=>{const p=ve(o),_=f?di(p,f)+1:0;p.splice(_,0,r.serialize(d))},i),c=KA(e,d=>{const f=ve(o);f.splice(di(f,d.key),1)},i),l=BA(e,d=>{const f=ve(o);f.splice(di(f,d.key),1,r.serialize(d))},i),u=jA(e,(d,f)=>{const p=ve(o),_=di(p,d.key),g=p.splice(_,1)[0],T=f?di(p,f)+1:0;p.splice(T,0,g)},i),h=Mg(e,()=>{const d=ve(o);r.wait&&(n.value=d,o=n),t(d),h()},i)),d=>{if(h(),a(),c(),l(),u(),d){const f=typeof d=="function"?d():[];n.value=f}}}function qg(n,e={},t=!1){let i=te;const s=Object.assign({},Kc,e),r=ve(n),o=s.target||Ke();d_()&&(s.once=!0);const l=Fg(r,s.ssrKey,o.value,gn());o.value=l;let u=!(t?(l||[]).length>0:l!==void 0);const h=Ke(),d=Ke(!1),f=td(),p=od();let _=te;function g(){const I=ve(n),C=new Promise((F,W)=>{if(i(s.reset),!I)return i=te,F(null);d.value=u,u=!0,Array.isArray(o.value)?i=b0(o,I,F,W,s):i=N0(o,I,F,W,s)}).catch(F=>{throw f.value===C&&(h.value=F),F}).finally(()=>{f.value===C&&(d.value=!1)});f.value=C}let T=te;nd(n)&&(T=id(n,g)),g(),r&&(_=Wg(f.value,r)),p&&(sd(b),nl()&&rd(()=>f.value));function b(I=s.reset){T(),_(),i(I)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>h},pending:{get:()=>d},promise:{get:()=>f},stop:{get:()=>b}})}function J0(n,e){const t=Ke([]);return qg(n,{target:t,...e},!0)}function Z0(n,e){const t=Ke();return qg(n,{target:t,...e})}function eP(n){return JA(gn(n))}const D0={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Ya(n,e,t,i){if(!Vw(n))return[n,{}];const s=[{},{}],r=Object.keys(t).reduce((a,l)=>{const c=t[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const p=Object.getOwnPropertyDescriptor(a,f);p&&!p.enumerable&&Object.defineProperty(h,f,p)});for(const f in a){const p=a[f];if(p==null||p instanceof Date||p instanceof ne||p instanceof Ro)h[f]=p;else if(dc(p)){const _=c+f;h[f]=_ in t?l[f]:p.path,d[_]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[f]=Array(p.length);for(let _=0;_<p.length;_++){const g=p[_];g&&g.path in r&&(h[f][_]=r[g.path])}o(p,l[f]||h[f],c+f+".",[h[f],d])}else Bt(p)?(h[f]={},o(p,l[f],c+f+".",[h[f],d])):h[f]=p}}return o(n,e,"",s),s}const Hc={reset:!1,wait:!0,maxRefDepth:2,converter:D0,snapshotOptions:{serverTimestamps:"estimate"}};function Wr(n){for(const e in n)n[e].unsub()}function Xa(n,e,t,i,s,r,o,a,l){const[c,u]=Ya(i.data(n.snapshotOptions),hc(e,t),s,n);r.set(e,t,c),Ja(n,e,t,s,u,r,o,a,l)}function O0({ref:n,target:e,path:t,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=te;return a.once?o_(n).then(u=>{u.exists()?Xa(a,e,t,u,l,o,i,s,r):(o.set(e,t,null),s())}).catch(r):c=uc(n,u=>{u.exists()?Xa(a,e,t,u,l,o,i,s,r):(o.set(e,t,null),s())},r),()=>{c(),Wr(l)}}function Ja(n,e,t,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(_=>c.indexOf(_)<0).forEach(_=>{i[_].unsub(),delete i[_]}),!c.length||++o>n.maxRefDepth)return a(t);let h=0;const d=c.length,f=Object.create(null);function p(_){_ in f&&++h>=d&&a(t)}c.forEach(_=>{const g=i[_],T=s[_],b=`${t}.${_}`;if(f[b]=!0,g)if(g.path!==T.path)g.unsub();else return;i[_]={data:()=>hc(e,b),unsub:O0({ref:T,target:e,path:b,depth:o,ops:r,resolve:p.bind(null,b),reject:l},n),path:T.path}})}function M0(n,e,t,i,s,r){const o=Object.assign({},Hc,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Ke(c?[]:n.value);c||t.set(n,h,[]);const f=i;let p,_=te;const g=[],T={added:({newIndex:I,doc:C})=>{g.splice(I,0,Object.create(null));const F=g[I],[W,ge]=Ya(C.data(l),void 0,F,o);t.add(ve(d),I,W),Ja(o,d,`${h}.${I}`,F,ge,t,0,i.bind(null,C),s)},modified:({oldIndex:I,newIndex:C,doc:F})=>{const W=ve(d),ge=g[I],Pe=W[I],[jt,yn]=Ya(F.data(l),Pe,ge,o);g.splice(C,0,ge),t.remove(W,I),t.add(W,C,jt),Ja(o,d,`${h}.${C}`,ge,yn,t,0,i,s)},removed:({oldIndex:I})=>{const C=ve(d);t.remove(C,I),Wr(g.splice(I,1)[0])}};function b(I){const C=I.docChanges(a);if(!p&&C.length){p=!0;let F=0;const W=C.length,ge=Object.create(null);for(let Pe=0;Pe<W;Pe++)ge[C[Pe].doc.id]=!0;i=Pe=>{Pe&&Pe.id in ge&&++F>=W&&(c&&(t.set(n,h,ve(d)),d=n),f(ve(d)),i=te)}}C.forEach(F=>{T[F.type](F)}),C.length||(c&&(t.set(n,h,ve(d)),d=n),i(ve(d)))}return u?aw(e).then(b).catch(s):_=uc(e,b,s),I=>{if(_(),I){const C=typeof I=="function"?I():[];t.set(n,h,C)}g.forEach(Wr)}}function x0(n,e,t,i,s,r){const o=Object.assign({},Hc,r),a="value",l=Object.create(null);i=qw(i,()=>hc(n,a));let c=te;function u(h){h.exists()?Xa(o,n,a,h,l,t,0,i,s):(t.set(n,a,null),i(null))}return o.once?o_(e).then(u).catch(s):c=uc(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;t.set(n,a,d)}Wr(l)}}function V0(n,e){let t=te;const i=Object.assign({},Hc,e),s=ve(n),r=i.target||Ke();d_()&&(i.once=!0);const o=Fg(s,i.ssrKey,r.value,gn());r.value=o;let l=!(h_(s)?(o||[]).length>0:o!==void 0);const c=Ke(!1),u=Ke(),h=td(),d=od();let f=te;function p(){let T=ve(n);const b=new Promise((I,C)=>{if(t(i.reset),!T)return t=te,I(null);c.value=l,l=!0,T.converter||(T=T.withConverter(i.converter)),t=(dc(T)?x0:M0)(r,T,L0,I,C,i)}).catch(I=>(h.value===b&&(u.value=I),Promise.reject(I))).finally(()=>{h.value===b&&(c.value=!1)});h.value=b}let _=te;nd(n)&&(_=id(n,p)),p(),s&&(f=Wg(h.value,s,i.ssrKey)),nl()&&rd(()=>h.value),d&&sd(g);function g(T=i.reset){_(),f(),t(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>g}})}const L0={set:(n,e,t)=>Mw(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function tP(n,e){return V0(n,{target:Ke([]),...e})}function nP(n){return zI(gn(n))}function iP(n){return(e,t)=>{const i=jw(e,t).run(()=>Ke(n));Kw.set(e,i),Gw(i,e)}}function sP(n){return Ow?jd(gn(n)):null}function rP(n,{firebaseApp:e,modules:t=[]}){n.provide(u_,e);for(const i of t)i(e,n)}export{wt as F,Rt as G,rP as V,jd as a,zI as b,z0 as c,iP as d,nP as e,sP as f,JA as g,tP as h,Z0 as i,J0 as j,Q0 as k,Og as l,q0 as m,j0 as n,Mg as o,B0 as p,W0 as q,Y0 as r,WA as s,K0 as t,eP as u,X0 as v};
