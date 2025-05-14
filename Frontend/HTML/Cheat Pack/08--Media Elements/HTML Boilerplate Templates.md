
---

html-boilerplates.md

# HTML Boilerplate Templates

A boilerplate is the basic structure of an HTML document. It's a good starting point for any web project.

---

## 1. Basic HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Your Project Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Hello, World!</h1>
  <script src="script.js"></script>

</body>
</html>

Explanation:

<!DOCTYPE html>: Declares HTML5.

<meta charset="UTF-8">: Sets character encoding to UTF-8.

<meta name="viewport"...>: Makes the site responsive.

<title>: Sets the tab name.

<link>: Links to external CSS.

<script>: Links to external JavaScript.



---

2. Responsive Mobile-First Template

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ffffff" />
  <title>Responsive Web App</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <main>
    <h2>Welcome to My Web App</h2>
  </main>

  <script src="app.js"></script>
</body>
</html>

Use Case:

Perfect for progressive web apps (PWAs) or modern single-page apps (SPAs).


---

3. Boilerplate with Tailwind CSS (CDN)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind Setup</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-center p-10">

  <h1 class="text-4xl font-bold text-blue-600">Tailwind Ready!</h1>

</body>
</html>

Ideal For:

Quick Tailwind prototyping without installing Node.js or npm.


---

Pro Tip:

Always validate your HTML using W3C Validator to ensure best practices and compatibility.

---

Let me know if you want this as a downloadable file or integrated with React, Express, or any custom stack.

