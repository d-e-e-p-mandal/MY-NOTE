
# ASP.NET CORE – RETURN TYPES 

Controller → returns IActionResult → ASP.NET converts to HTTP Response

**Example: :**
```cs
return Ok(data);
```
**Internally becomes :**
- HTTP/1.1 200 OK
- Content-Type: application/json
- { data }


### 3. WHY SO MANY RETURN TYPES?

**Because HTTP works like this: :**

Situation	Status Code
Success	200
Created	201
No data	204
Error	400
Not found	404

**ASP.NET gives helper methods for each. :**


### 4. COMMON DOUBTS (VERY IMPORTANT)


❓ Ok() vs return data

return emp;      // auto 200
return Ok(emp);  // explicit 200

**Difference: :**

Type	Behavior
return emp	only with ActionResult<T>
Ok(emp)	works everywhere

**Best: :**

Use return data (clean)
Use Ok() when using IActionResult


❓ 200 vs 204

return Ok(data);     // 200 → data present
return NoContent();  // 204 → no data

**Rule: :**

If response has data → 200  
If no response body → 204  


❓ Created vs Ok

return Ok(emp);              // ❌ not correct for POST
return CreatedAtAction(...); // ✅ correct

**Rule: :**

POST must return 201 Created (REST standard)


❓ StatusCode() vs Ok()

return Ok(data);              // simple
return StatusCode(200, data); // same but manual

**Use: :**

Use Ok() → simple
Use StatusCode() → custom cases


### 5. REAL LIFE MAPPING (VERY IMPORTANT)


### GET

return Ok(data);      // 200
return NotFound();    // 404

**Meaning: Fetch data :**


### POST

return CreatedAtAction(...); // 201

**Meaning: New resource created :**


### PUT

return NoContent(); // 204

**Meaning: Updated successfully :**


### DELETE

return NoContent(); // 204

**Meaning: Deleted successfully :**


### 6. WHEN TO USE EACH


✔ Use Ok()

* Returning data
* GET APIs


✔ Use CreatedAtAction()

* POST APIs
* Resource created


✔ Use NoContent()

* PUT / DELETE
* No response needed


✔ Use BadRequest()

* Validation fails


✔ Use NotFound()

* Resource missing


✔ Use StatusCode()

* Custom cases


### 7. INTERNAL FLOW (IMPORTANT)

Controller Method
   ↓
Return IActionResult
   ↓
Framework maps to HTTP status
   ↓
Response sent to client


### 8. FINAL SIMPLIFIED TABLE

Ok()              → 200 → success  
Created()         → 201 → created  
Accepted()        → 202 → processing  
NoContent()       → 204 → no data  
BadRequest()      → 400 → invalid  
Unauthorized()    → 401 → login required  
Forbid()          → 403 → no permission  
NotFound()        → 404 → not found  
Conflict()        → 409 → duplicate  
Unprocessable     → 422 → validation  
StatusCode()      → custom  
Content()         → text  
JsonResult        → JSON  
File()            → file  
Redirect()        → redirect  
EmptyResult       → empty  
ObjectResult      → manual control  


💡 FINAL INTERVIEW UNDERSTANDING

“ASP.NET Core return types are abstractions over HTTP responses, allowing developers to return appropriate status codes and data based on API behavior.”


🚀 FINAL CLARITY (REMEMBER THIS)

GET    → Ok / NotFound  
POST   → CreatedAtAction  
PUT    → NoContent  
DELETE → NoContent  


If you want:
👉 I can give MCQs + tricky interview questions (very important 🔥)



---------------------------------------------



Alright—here’s the complete, no-miss master note of ALL predefined ASP.NET Core return type functions (ActionResult helpers).
This includes:

* ✔ Every built-in helper method (ControllerBase / Controller)
* ✔ Status code
* ✔ Parameters
* ✔ Example
* ✔ One-line meaning


📘 ASP.NET CORE – ALL PREDEFINED RETURN TYPE FUNCTIONS (FULL LIST)


### 1. SUCCESS RESPONSES (2xx)


✅ Ok()

return Ok();                 // 200
return Ok(object value);     // 200

👉 Meaning: Success with/without data


✅ Created()

return Created(string uri, object value); // 201

👉 Meaning: Resource created with manual URL


✅ CreatedAtAction()

return CreatedAtAction(string action, object routeValues, object value);

👉 Meaning: 201 + auto URL (best for POST)


✅ CreatedAtRoute()

return CreatedAtRoute(string route, object routeValues, object value);

👉 Meaning: 201 + route-based URL


✅ Accepted()

return Accepted();               // 202
return Accepted(object value);   // 202

👉 Meaning: Accepted, processing later


✅ AcceptedAtAction()

return AcceptedAtAction(string action, object routeValues, object value);

👉 Meaning: Async processing reference


✅ AcceptedAtRoute()

return AcceptedAtRoute(string route, object routeValues, object value);

👉 Meaning: Async + route


✅ NoContent()

return NoContent(); // 204

👉 Meaning: Success, no response body


### 2. CLIENT ERROR RESPONSES (4xx)


❌ BadRequest()

return BadRequest();               // 400
return BadRequest(object error);   // 400


❌ Unauthorized()

return Unauthorized(); // 401


❌ Forbid()

return Forbid(); // 403


❌ NotFound()

return NotFound();               // 404
return NotFound(object value);   // 404


❌ Conflict()

return Conflict();               // 409
return Conflict(object value);   // 409


❌ UnprocessableEntity()

return UnprocessableEntity();               // 422
return UnprocessableEntity(object error);   // 422


❌ ValidationProblem()

return ValidationProblem(ModelState);

👉 Meaning: Standard validation error response


❌ Problem()

return Problem("Something went wrong");

👉 Meaning: RFC 7807 error response


### 3. REDIRECTION RESPONSES (3xx)


🔁 Redirect()

return Redirect(string url); // 302


🔁 RedirectPermanent()

return RedirectPermanent(string url); // 301


🔁 RedirectToAction()

return RedirectToAction(string action);


🔁 RedirectToRoute()

return RedirectToRoute(string route);


🔁 LocalRedirect()

return LocalRedirect(string url);


🔁 LocalRedirectPermanent()

return LocalRedirectPermanent(string url);


### 4. SERVER / CUSTOM RESPONSES


⚠️ StatusCode()

return StatusCode(int code);
return StatusCode(int code, object value);


⚠️ ObjectResult

return new ObjectResult(object value)
{
    StatusCode = 500
};


### 5. CONTENT / DATA RESPONSES


📄 Content()

return Content(string text);
return Content(string text, string contentType);


📦 JsonResult

return new JsonResult(object data);


📁 File() (ALL VARIANTS)

return File(byte[] data, string contentType);
return File(Stream stream, string contentType);
return File(string path, string contentType);
return PhysicalFile(string path, string contentType);
return VirtualFile(string path, string contentType);


### 6. EMPTY / SPECIAL


📭 EmptyResult

return new EmptyResult();


📭 Challenge()

return Challenge(); // 401


📭 Forbid() (already above)


📭 SignIn()

return SignIn(principal, scheme);


📭 SignOut()

return SignOut();


### 7. PARTIAL / VIEW (MVC ONLY)


🧾 View()

return View(model);


🧾 PartialView()

return PartialView(model);


### 8. FILE DOWNLOAD ADVANCED


📁 FileContentResult

📁 FileStreamResult

📁 VirtualFileResult

📁 PhysicalFileResult

👉 All are internal types returned by File() helpers


**COMPLETE MASTER SUMMARY :**

200 → Ok  
201 → Created / CreatedAtAction / CreatedAtRoute  
202 → Accepted / AcceptedAtAction / AcceptedAtRoute  
204 → NoContent  
400 → BadRequest / ValidationProblem  
401 → Unauthorized / Challenge  
403 → Forbid  
404 → NotFound  
409 → Conflict  
422 → UnprocessableEntity  
500 → StatusCode / Problem  
3xx → Redirect / RedirectToAction / RedirectToRoute  
Other → Content / Json / File / Empty / View  


