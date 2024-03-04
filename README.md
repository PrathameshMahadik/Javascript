12 Factor App - 
                The 12 Factor App is a set of best practices and principles for building modern, scalable, and maintainable software-as-a-service (SaaS) applications. These principles were formulated by developers at Heroku and have since become widely adopted in the software development community. Here's a brief overview of each factor:

1. Codebase:
-There Should be one codebase per application.
-Version control should be used for tracking changes.

2. Dependencies:
-Explicitly declare and isolate dependencies.
-You should use a dependency manager to handle dependencies.

3. Config:
-Store configuration in the environment.
-Avoid hardcoding configuration values in code.

4. Backing Services:
T-reat backing services (databases, caches, etc.) as attached resources.
-Connect to these services via environment variables.

5. Build, Release, Run:
-Strictly separate the build, release, and run stages.
-Keep the build and release processes idempotent.

6. Processes:
-Execute the app as one or more stateless processes.
-Share nothing between processes (stateless design).

7. Port Binding:
-Export services via port binding.
-Web applications should listen to a port specified by the environment.

8. Concurrency:
-Scale out via the process model.
-Increase concurrency by adding more processes.

9. Disposability:
-Maximize robustness with fast startup and graceful shutdown.
-Aim for statelessness, so processes can be easily disposed of and replaced.

10. Dev/Prod Parity:
-Keep development, staging, and production environments as similar as possible.
-Minimize differences between environments to reduce bugs and improve stability.

11. Logs:
-Treat logs as event streams.
-Store logs in a centralized location and make them accessible for analysis.

12. Admin Processes:
-Run admin/management tasks as one-off processes.
-Avoid incorporating admin tasks into the main application code.

Keeping to these principles can help developers create applications that are more scalable, maintainable, and resilient, making them easier to deploy and manage in various environments. Each factor emphasizes a specific aspect of building modern, cloud-native applications, and collectively they contribute to the overall success of a software project.




Atomic design-
                Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for crafting design systems with five fundamental building blocks, which, when combined, promote consistency, modularity, and scalability.

Atoms:
        Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

Molecules:
        Grouping atoms together, such as combining a button, input and form label to build functionality.

Organisms:
        Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

Templates:
        Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

Pages:
        An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.


