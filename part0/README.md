###### 0.1
Review the basics of HTML by reading this tutorial from Mozilla - [HTML tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
###### 0.2
Review the basics of CSS by reading this tutorial from Mozilla - [CSS tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
###### 0.3
Learn about the basics of HTML forms by reading Mozilla's tutorial - [Your first form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
###### 0.4 Sequence diagram to add a note in https://studies.cs.helsinki.fi/exampleapp/notes
```mermaid
sequenceDiagram
    participant Browser
    participant Server
    
    Note left of Browser: Add the note to the form
    
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of Server: Save the note in the notes group (array within the server)
    Server-->>Browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes (status 302 Found)
    
    Note left of Browser: Update automaticly the browser

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>Browser: HTML file (notes.html)

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: CSS file (main.css)

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server-->>Browser: JS file (main.js)

    Note right of Browser: While running the js code, the JSON request is requested from the server 

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: [{content: "HTML test",date: "2024-04-10"},...]

    Note right of Browser: Browser executes the event handler that renders notes to display
 ```
 ###### 0.5 Sequence diagram of https://studies.cs.helsinki.fi/exampleapp/spa (format SPA)
```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: HTML file (spa.html)

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: CSS file (main.css)

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Browser: JS file (spa.js)

    Note right of Browser: While running the js code, the JSON request is requested from the server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: [{content: "HTML test",date: "2024-04-10"},...]

    Note right of Browser: Browser executes the event handler that renders notes to display
 ```
 ###### 0.6 Sequence diagram to add a note in https://studies.cs.helsinki.fi/exampleapp/spa (format SPA)
 ```mermaid
sequenceDiagram
    participant Browser
    participant Server
    
    Note left of Browser: Add the note to the form
    Note left of Browser: Save the note in the notes group
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of Server: New note received
    Server-->>Browser: The request was executed without redirection (status 201 Create)
    Note right of Browser: Browser executes the event handler that renders notes to display
 ```
