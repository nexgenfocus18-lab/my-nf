# 🎯 NEXGEN FOCUS WEBSITE - EDITING GUIDE

This guide helps you edit your website without advanced web development knowledge.

## 📍 WHERE TO FIND THINGS

### 🎨 **Main Website File**
- **Location**: `client/src/pages/home.tsx`
- **What it contains**: Your entire website in one file

### 🖼️ **Images & Assets**
- **Logo**: `attached_assets/IG Logo_1755259907946.png`
- **Brochure**: `client/public/nexgen-brochure.pdf`

### 🎨 **Colors & Styling**
- **Location**: `client/src/index.css` and `tailwind.config.ts`
- **Brand Colors**: Blue gradient (#0C2D6B → #0E64A0 → #14B8C6)

---

## ✏️ COMMON EDITS YOU MIGHT WANT TO MAKE

### 💰 **1. Change Program Prices**
**Find this section in home.tsx:**
```jsx
// PROGRAM 1: Basic AI Course
<CourseCard
  price="49" {/* UPDATE PRICE HERE */}
```

**Also update in dropdown:**
```jsx
<option value="1-day-ai">🚀 1 Day AI Masterclass - ₹49</option>
```

### 📞 **2. Update Contact Information**
**Find these sections:**
```jsx
<div>+91 9876543210</div> {/* UPDATE YOUR PHONE NUMBER */}
<div>contact@nexgenfocus.com</div> {/* UPDATE YOUR EMAIL */}
<div>Bangalore, Karnataka, India</div> {/* UPDATE YOUR LOCATION */}
```

### 👨‍🏫 **3. Update Your Name & Photo**
**Find this section:**
```jsx
<h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
<p className="text-brand-teal font-medium">AI & Technology Expert</p>
```

### 🗣️ **4. Add New Testimonial**
**Find the testimonials array and copy this pattern:**
```jsx
{
  quote: "Your testimonial quote here",
  name: "Student Name",
  role: "Their Job Title",
},
```

### 🛠️ **5. Add New AI Tool**
**Find the sliding tools section and copy this pattern:**
```jsx
{/* AI TOOL: Tool Name */}
<div className="flex-shrink-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <div className="mb-4 rounded-xl bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-teal p-3 w-fit">
    <Cpu className="size-6 text-white" />
  </div>
  <h3 className="text-lg font-semibold text-white mb-2">Tool Name</h3>
  <p className="text-sm text-white/70">Tool description</p>
</div>
```

### 📚 **6. Add New Program**
**Copy this entire CourseCard pattern:**
```jsx
<CourseCard 
  icon={Code} 
  title="Program Name"
  price="999"
  bullets={[
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ]}
  cta="Enroll Now"
  isPopular={false} // Set to true for "MOST POPULAR" badge
/>
```

---

## 🚀 DEPLOYMENT TO VERCEL

1. **Push to GitHub**: Upload your code to GitHub
2. **Connect Vercel**: Import your repository to Vercel
3. **Deploy**: Vercel will automatically build and deploy
4. **Live Website**: Get your `.vercel.app` URL

---

## 🆘 GETTING HELP

### **Safe Edits** (Won't break anything):
- Changing text content
- Updating phone/email
- Modifying prices
- Adding testimonials

### **Be Careful With**:
- HTML structure (the `<div>` and `className` parts)
- Import statements at the top
- Function names and brackets

### **If Something Breaks**:
1. Check browser console for errors
2. Make sure all quotes and brackets match
3. Reload the page
4. Ask for help with the specific error message

---

## 📝 QUICK TIPS

- **Save Often**: Your changes update automatically
- **Test on Mobile**: Check how it looks on phones  
- **Keep Backups**: Save working versions before big changes
- **One Change at a Time**: Make small edits to avoid breaking things

Happy editing! 🎉