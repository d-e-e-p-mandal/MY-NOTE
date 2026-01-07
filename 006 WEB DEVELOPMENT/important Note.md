## 1. faker package : FAKE DATA GENERATE
## 2. uuid  : GENERATE INDEX
## 3. ejs mate : EJS TEMPLATE
## 4. awesome font : INCON
## 5. react icons : INCON
## 6. material js / SADCN UI
## 7. joi : MongoDB Validaton
## 8. session - cookies
## 9. connect-flash
## 10. passport/bcrypts : authentication
## 11 EXPRESS ROUTER :
## 12 MVC STRUCTURE
## 13 REDUX
## 14 RTK QUERY

### SECRET FILE : 
- .env : DEVELOPMENT 
    - DOTENV







# Redirecct

1️⃣ Create a file called _redirects

📁 Location:
```
public/_redirects
```
2️⃣ Put THIS single line inside the file
```js
/*    /index.html   200
```
⚠️ No extension
⚠️ Exact spacing
⚠️ Lowercase

⸻

✅ Final folder structure should look like this

public/
├── _redirects
├── favicon.svg
└── other assets


⸻

3️⃣ Commit & push

git add public/_redirects
git commit -m "fix: netlify spa redirect"
git push


⸻

4️⃣ Redeploy on Netlify

Netlify will auto-deploy after push
(or click Retry deploy)

⸻

✅ RESULT (AFTER FIX)

URL	Result
/	✅ Home
/a	✅ Redirects to /
/random	✅ Redirects to /
Refresh page	✅ Works
Direct link	✅ Works


