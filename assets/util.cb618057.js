function r(...r){return(...e)=>{r.forEach((r=>{r(...e)}))}}function e(r,e){return r.some((r=>e.includes(r)))}function t(...r){return e=>{r.forEach((r=>{"object"==typeof r?r.current=e:"function"==typeof r&&r(e)}))}}function n(r){setTimeout((()=>r()),1)}function c(r,e){const t={};return Object.entries(r).forEach((([r,n])=>{t[r]=e(n,r)})),t}function o(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(r=>(r^crypto.getRandomValues(new Uint8Array(1))[0]&15>>r/4).toString(16)))}function u(){const r=[];return new Proxy({},{get:(e,t)=>"current"===t?e._current?e._current:new Proxy({},{get:(e,t)=>(...e)=>{r.push({method:t,argv:e})}}):e[t],set(e,t,n){if("current"===t){e._current=n;const t=r.splice(0);e._current&&t.forEach((r=>e._current[r.method](...r.argv)))}return!0}})}export{t as a,r as b,u as c,e as h,c as m,n,o as u};
