
⚙️ UNIT 5: MIDDLEWARE (ASP.NET CORE)

⸻

🔹 1. Middleware Concept

🧠 Definition

👉 Middleware means:

A component that handles request and response

⸻

📌 Simple Idea

👉 Middleware is like a pipeline (chain)

Request → Middleware → Middleware → Controller → Response


⸻

🧠 Real Example

👉 When request comes:
	•	Check authentication
	•	Log request
	•	Then go to controller

⸻

🔹 2. Request-Response Pipeline 🔥

⸻

🧠 Definition

👉 Pipeline = sequence of middleware

⸻

📌 Flow

Request → M1 → M2 → M3 → Controller → M3 → M2 → M1 → Response


⸻

🧠 Important Point

👉 Middleware works in two ways:
	•	Before request
	•	After response

⸻

📌 Example

app.Use(async (context, next) =>
{
    Console.WriteLine("Before");

    await next();

    Console.WriteLine("After");
});


⸻

🔹 3. Built-in Middleware 🔥

⸻

🧠 Definition

👉 Middleware already provided by ASP.NET Core

⸻

📌 Common Built-in Middleware

⸻

🔸 UseRouting()

👉 Finds correct route

app.UseRouting();


⸻

🔸 UseAuthorization()

👉 Checks user permission

app.UseAuthorization();


⸻

🔸 UseAuthentication()

👉 Checks login

app.UseAuthentication();


⸻

🔸 UseStaticFiles()

👉 Serves CSS, JS, images

app.UseStaticFiles();


⸻

🔥 Order is IMPORTANT

👉 Middleware runs in order written in Program.cs

⸻

🔹 4. Custom Middleware 🔥

⸻

🧠 Definition

👉 Middleware created by developer

⸻

📌 Step 1: Create Class

public class MyMiddleware
{
    private readonly RequestDelegate _next;

    public MyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        Console.WriteLine("Before Request");

        await _next(context);

        Console.WriteLine("After Response");
    }
}


⸻

📌 Step 2: Register Middleware

app.UseMiddleware<MyMiddleware>();


⸻

🧠 What happens?

👉 Every request will pass through this middleware

⸻

🔹 5. Types of Middleware Methods

⸻

🔸 Use()

👉 Continue pipeline

app.Use(...);


⸻

🔸 Run()

👉 Ends pipeline (no next middleware)

app.Run(async context =>
{
    await context.Response.WriteAsync("Hello");
});


⸻

🔸 Map()

👉 Branch pipeline

⸻

🔹 6. Real Example Flow

Client Request
   ↓
Logging Middleware
   ↓
Authentication Middleware
   ↓
Routing Middleware
   ↓
Controller
   ↓
Response


⸻

🎯 FINAL SUMMARY
	•	Middleware = handles request/response
	•	Pipeline = chain of middleware
	•	Built-in = already available
	•	Custom = developer creates
	•	Order matters

⸻

💡 INTERVIEW QUESTIONS
	1.	What is middleware?
	2.	What is request pipeline?
	3.	Difference between Use and Run?
	4.	What is custom middleware?
	5.	Why order is important?

⸻
