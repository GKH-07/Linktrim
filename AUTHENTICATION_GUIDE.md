# 🔐 Authentication Add Karne Ka Simple Guide

Yeh guide mein bataya gaya hai ki kaise aap apne Linktrim project mein authentication add kar sakte ho. Simple steps follow karo aur step by step implement karo.

---

## 📦 DONE\* Step 1: Packages Install Karo

Pehle yeh packages install karo:

```bash
npm install jsonwebtoken bcryptjs dotenv
```

**Kyun chahiye:**

- `jsonwebtoken` - JWT tokens banane aur verify karne ke liye
- `bcryptjs` - Password ko secure tarike se hash karne ke liye
- `dotenv` - Environment variables use karne ke liye

---

## 📁 Step 2: Naye Files Banao

### File 1: `model/user.js`

- User ka model banao
- Fields: name, email, password
- Email unique hona chahiye
- Timestamps add karo

### File 2: `controllers/auth.js`

- `handleUserSignup` function banao - user register karne ke liye
- `handleUserLogin` function banao - user login karne ke liye
- Signup mein password ko bcrypt se hash karo
- Login mein password verify karo
- Dono mein JWT token generate karo aur return karo

### File 3: `routes/auth.js`

- `/register` route banao (POST) - signup ke liye
- `/login` route banao (POST) - login ke liye
- Auth controllers ko connect karo

### File 4: `middleware/auth.js`

- `authenticateToken` function banao
- Request header se token nikalna
- Token verify karna
- Agar valid hai to user info request mein attach karna
- Agar invalid hai to 401/403 error dena

### File 5: `.env` file

- `JWT_SECRET` add karo (strong random string)
- `MONGODB_URI` add karo (optional, agar hardcode nahi karna)
- `PORT` add karo (optional)

**Important:** `.env` file ko `.gitignore` mein add karna mat bhoolna!

---

## ✏️ Step 3: Existing Files Modify Karo

### File 1: `model/url.js`

- `createdBy` field add karo
- Type: ObjectId
- Reference: 'user'
- Required: false (pehle se bane URLs ke liye)

### File 2: `controllers/url.js`

- `handleGenerateNewShortURL` mein:

  - `createdBy: req.user._id` add karo jab URL create ho
  - Ye tab kaam karega jab user authenticated ho

- `handleGetAnalytic` mein:
  - Check karo ki URL usi user ki hai jo request kar raha hai
  - Agar nahi hai to 403 error do
  - Agar URL exist nahi karti to 404 error do

### File 3: `routes/url.js`

- `POST /` route pe `authenticateToken` middleware add karo
- `GET /analytics/:shortId` route pe `authenticateToken` middleware add karo
- Matlab ab ye routes protected ho jayenge

### File 4: `index.js`

- `dotenv` require karo (top pe)
- Auth routes add karo: `app.use("/auth", authRoute)`
- Environment variables use karo (PORT, MONGODB_URI)
- Public redirect route (`GET /:shortId`) ko as it is rakho - ye public hi rahega

---

## 🔄 Step 4: Flow Samjho

### Registration Flow:

1. User `/auth/register` pe POST request karega
2. Name, email, password bhejega
3. Email already exist karta hai to error
4. Password hash hoga
5. User database mein save hoga
6. JWT token generate hoga
7. Token user ko return hoga

### Login Flow:

1. User `/auth/login` pe POST request karega
2. Email aur password bhejega
3. Email se user find hoga
4. Password verify hoga
5. Agar sahi hai to JWT token generate hoga
6. Token user ko return hoga

### Protected Route Flow:

1. User protected route pe request karega
2. Header mein `Authorization: Bearer TOKEN` bhejega
3. Middleware token verify karega
4. Agar valid hai to request aage jayegi
5. Controller mein `req.user` available hoga
6. Agar invalid hai to 401/403 error milega

### URL Creation Flow (After Auth):

1. User authenticated hoga (token header mein)
2. `POST /url/` pe request karega
3. Middleware token verify karega
4. Controller mein `req.user._id` use karke URL create hoga
5. URL user se link ho jayega

---

## 📊 Step 5: Kya Kya Change Hoga

### ✅ Naye Features:

- User register kar sakta hai
- User login kar sakta hai
- JWT token milta hai
- URLs user se link hoti hain
- Users sirf apni URLs ki analytics dekh sakte hain

### ⚠️ Breaking Changes:

- **Pehle:** Koi bhi URL create kar sakta tha (public)
- **Ab:** Sirf authenticated users hi URL create kar sakte hain
- **Pehle:** Koi bhi analytics dekh sakta tha
- **Ab:** Sirf URL owner hi analytics dekh sakta hai

### ✅ Jo Same Rahega:

- Public redirect (`GET /:shortId`) - koi bhi use kar sakta hai
- Pehle se bane URLs kaam karte rahenge (lekin unka owner nahi hoga)

---

## 🧪 Step 6: Testing Kaise Kare

### 1. Register Test Karo:

- POST request `/auth/register` pe
- Body: `{ "name": "Test", "email": "test@test.com", "password": "123456" }`
- Response mein token aana chahiye

### 2. Login Test Karo:

- POST request `/auth/login` pe
- Body: `{ "email": "test@test.com", "password": "123456" }`
- Response mein token aana chahiye

### 3. Token Ke Bina URL Create Karo:

- POST request `/url/` pe (token ke bina)
- 401 error aana chahiye

### 4. Token Ke Saath URL Create Karo:

- POST request `/url/` pe
- Header: `Authorization: Bearer YOUR_TOKEN`
- Body: `{ "url": "https://example.com" }`
- Success hona chahiye

### 5. Analytics Test Karo:

- GET request `/url/analytics/SHORT_ID` pe
- Token ke saath - agar tumhari URL hai to data milega
- Token ke bina - 401 error
- Dusre user ka token - 403 error (agar URL tumhari nahi hai)

---

## 🔒 Step 7: Security Points

1. **JWT Secret:** Strong random string use karo (minimum 32 characters)
2. **Password:** Bcrypt se hash karo (10 rounds minimum)
3. **Token Expiry:** 7 days set kiya hai, zarurat ke hisab se change karo
4. **Environment Variables:** `.env` file ko git mein commit mat karo
5. **HTTPS:** Production mein HTTPS use karo
6. **Error Messages:** Detailed errors mat do (security risk)

---

## 📝 Quick Checklist

### Files Create Karne Hain:

- [ ] `model/user.js`
- [ ] `controllers/auth.js`
- [ ] `routes/auth.js`
- [ ] `middleware/auth.js`
- [ ] `.env`

### Files Modify Karne Hain:

- [ ] `model/url.js` - `createdBy` field add
- [ ] `controllers/url.js` - user association aur ownership check
- [ ] `routes/url.js` - auth middleware add
- [ ] `index.js` - auth routes add, dotenv require

### Packages Install Karne Hain:

- [ ] `jsonwebtoken`
- [ ] `bcryptjs`
- [ ] `dotenv`

### Testing:

- [ ] Register kaam kar raha hai
- [ ] Login kaam kar raha hai
- [ ] Token ke bina protected routes block ho rahe hain
- [ ] Token ke saath URL create ho rahi hai
- [ ] Analytics sirf owner dekh sakta hai
- [ ] Public redirect abhi bhi kaam kar raha hai

---

## 🎯 Important Notes

1. **Backward Compatibility:** Pehle se bane URLs kaam karte rahenge, lekin unka owner nahi hoga
2. **Migration:** Agar existing URLs hain to unko manually user se link karna padega (optional)
3. **Error Handling:** Har jagah proper error handling add karo
4. **Validation:** Email format, password strength etc. validate karo
5. **Testing:** Har step ke baad test karo, sab kuch ek saath mat karo

---

## 🚀 Implementation Order

1. Pehle packages install karo
2. Phir `.env` file banao
3. User model banao
4. Auth controllers banao
5. Auth routes banao
6. Auth middleware banao
7. URL model modify karo
8. URL controllers modify karo
9. URL routes modify karo
10. Main server file modify karo
11. Test karo sab kuch

---

## 💡 Tips

- Pehle ek simple version banao, phir features add karte jao
- Har step ke baad test karo
- Console.log use karo debugging ke liye
- Error messages clear rakho
- Code ko clean aur readable rakho

---

**Bas itna hi! Step by step follow karo aur authentication add kar do. Agar koi confusion ho to guide dobara padh lo. Good luck! 🎉**
