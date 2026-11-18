const app=document.querySelector('#app');
app.innerHTML=`<main class="loading"><div class="rocket">🚀</div><h1>ALL×PROJECT V7</h1><p>INITIALIZING SYSTEM...</p></main>`;
setTimeout(()=>{app.innerHTML=`<main class="loading"><h1>ALL×PROJECT V7</h1><p>Login</p><input aria-label="Username" placeholder="Username"><br><br><input aria-label="Password" type="password" placeholder="Password"></main>`},1800);
