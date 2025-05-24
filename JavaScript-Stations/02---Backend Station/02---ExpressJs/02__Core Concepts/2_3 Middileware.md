

# What Happens If `next()` Is Not Called in Middleware?

## The Role of `next()` in Middleware

In Express.js (and similar frameworks), the `next()` function is **crucial** in middleware functions. It tells the system to **proceed to the next middleware or route handler** in the request-response cycle.

Without `next()`, the request will be **trapped** in the current middleware, and nothing else will happen — no route handler, no response, just a hanging request.

---

## Real-Life Analogy

Think of middleware like a **relay race**:

- Each runner (middleware) must **pass the baton** (call `next()`) to the next runner.
- If one runner holds onto the baton and doesn’t pass it, the race (request) **never finishes**.

---

## Example: Middleware Without `next()`

```js
app.use((req, res) => {
  console.log('This middleware does not call next()');
  // No next(), no res.send(), just stuck...
});

What happens here?

The request is intercepted.

The message is logged.

But since next() or res.send() isn't called, the client waits indefinitely.

The browser might eventually time out.



---

Correct Usage

app.use((req, res, next) => {
  console.log('This middleware works correctly');
  next(); // Moves on to the next middleware or route
});


---

Pro Tip

If you ever face an issue where your server seems to "hang" without responding:

Double-check that all your middleware calls next()

Or make sure the middleware ends the cycle with res.send() / res.json() / res.end()



---

Conclusion

Always ensure that your middleware either:

Passes control using next(), or

Ends the request-response cycle with a response method.


Otherwise, your app will face frozen requests and bad user experiences.
 
