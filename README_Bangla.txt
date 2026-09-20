Sakib Personal Website — বাংলায় সহজ নির্দেশিকা
================================================

এই ফোল্ডারটি তোমার Personal Portfolio Website-এর জন্য তৈরি করা হয়েছে।
নিচের বিষয়গুলো বুঝে নিলে সহজেই ওয়েবসাইটের ছবি, ভিডিও, লিংক ও লেখা পরিবর্তন করতে পারবে।

১. ওয়েবসাইট চালু করা
--------------------
ZIP ফাইলটি আগে Extract/Unzip করো।
তারপর ফোল্ডারের ভিতরে index.html ফাইলটি ব্রাউজারে খুললে Home page দেখতে পাবে।

২. ওয়েবসাইটের প্রধান পেজ
------------------------
index.html   = Home
about.html   = About
skills.html  = Skills
photos.html  = Photos
videos.html  = Videos
contact.html = Contact
form.html    = Contact Form

প্রতিটি Navigation button আলাদা HTML page খুলবে।

৩. ছবি কোথায় দিতে হবে
----------------------
assets ফোল্ডারের ভিতরে ছবি রাখবে।

Profile photo:
assets/profile.jpg

Photo Gallery:
assets/photo-1.jpg
assets/photo-2.jpg
assets/photo-3.jpg
...
এভাবে photo-50.jpg পর্যন্ত রাখা যাবে।

৪. ভিডিও কোথায় দিতে হবে
------------------------
ভিডিওগুলো videos.html-এ card আকারে সাজানো আছে।

Landscape ভিডিও = 16:9
Vertical ভিডিও = 9:16

ভিডিও যোগ করার উদাহরণ:

<video controls>
    <source src="assets/video-1.mp4" type="video/mp4">
</video>

৫. Social Media Link
--------------------
contact.html ফাইলে Facebook, Instagram, X/Twitter, TikTok,
LinkedIn, Email, WhatsApp এবং Discord-এর card আছে।

placeholder link-এর জায়গায় নিজের আসল link বসাবে।

Email-এর উদাহরণ:
href="mailto:your@email.com"

৬. Contact Form
---------------
form.html-এ Contact Form আছে।

এটি বর্তমানে Frontend Form।
Visitor তথ্য লিখতে পারবে। সত্যিকার Email পাওয়ার জন্য পরে
Backend বা কোনো Form service যুক্ত করতে হবে।

৭. Logo এবং Favicon
-------------------
assets/logo.svg   = Website Logo
assets/favicon.svg = Browser Tab-এর ছোট Logo

৮. CSS কোথায়
------------
style.css ফাইলে Website-এর মূল Design আছে।

এখান থেকে Background, Glass Effect, Gradient, Button, Card,
Spacing, Font Size এবং Animation পরিবর্তন করা যায়।

৯. JavaScript কোথায়
-------------------
script.js ফাইলে Mobile Menu, Typing Animation এবং অন্যান্য
Interactive/Reveal Effect রাখা হয়েছে।

১০. Gradient লেখা
-----------------
Website-এর গুরুত্বপূর্ণ নাম ও Heading-এ blue/cyan/purple
gradient effect ব্যবহার করা হয়েছে।

এই effect-এর CSS style.css ফাইলে আছে।

১১. Mobile এবং PC
-----------------
Website Responsive করা হয়েছে।
Desktop, Laptop, Tablet এবং Mobile screen অনুযায়ী layout
নিজে থেকে adjust করবে।

১২. গুরুত্বপূর্ণ পরামর্শ
-----------------------
কোনো HTML/CSS/JS ফাইল পরিবর্তন করার আগে একটি backup রাখবে।

একসাথে অনেক কিছু পরিবর্তন না করে একটি একটি করে পরিবর্তন করলে
সমস্যা হলে সহজে বুঝতে পারবে।

শুধু ছবি, ভিডিও বা Social Link পরিবর্তন করতে চাইলে সাধারণত
মূল CSS বা JavaScript পরিবর্তন করার প্রয়োজন নেই।

১৩. ফাইলগুলোর সহজ ধারণা
-----------------------
HTML = Website-এর কাঠামো
CSS = Website-এর Design
JS = Animation ও Interactive কাজ
SVG = Logo/Favicon
Assets = ছবি ও অন্যান্য Media

সহজভাবে:
HTML → কী থাকবে
CSS → দেখতে কেমন হবে
JavaScript → কীভাবে কাজ করবে

১৪. Website Online করতে
-----------------------
Website তৈরি ও পরীক্ষা করার পর Hosting-এ পুরো folder upload
করতে হবে।

index.html যেন main/root directory-তে থাকে।

শেষ কথা
-------
এই Website-এর code readable রাখা হয়েছে, যাতে তুমি line-by-line
দেখে HTML, CSS এবং JavaScript শিখতে পারো।

কোনো অংশ বুঝতে না পারলে সেই HTML/CSS অংশ দেখে ধীরে ধীরে
পরিবর্তন করে পরীক্ষা করতে পারো।
