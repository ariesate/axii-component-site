function r(...r){return(...e)=>{r.forEach((r=>{r(...e)}))}}function e(r,e){return r.some((r=>e.includes(r)))}function n(r){setTimeout((()=>r()),1)}function t(r,e){const n={};return Object.entries(r).forEach((([r,t])=>{n[r]=e(t,r)})),n}function c(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(r=>(r^crypto.getRandomValues(new Uint8Array(1))[0]&15>>r/4).toString(16)))}function u(){const r=[];return new Proxy({},{get:(e,n)=>"current"===n?e._current?e._current:new Proxy({},{get:(e,n)=>(...e)=>{r.push({method:n,argv:e})}}):e[n],set(e,n,t){if("current"===n){e._current=t;const n=r.splice(0);e._current&&n.forEach((r=>e._current[r.method](...r.argv)))}return!0}})}export{r as a,u as c,e as h,t as m,n,c as u};
