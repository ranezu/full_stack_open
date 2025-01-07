sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    send new note
    server-->>browser: 302 to /exampleapp/notes
    redirect to correct place after saving

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    get main page
    server-->>browser: 200 OK
    return main page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    get stylesheet
    server-->>browser: 200 OK
    return stylesheet

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    get javascript content
    server-->>browser: 200 OK
    return javascript content

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    get data as JSON
    server-->>browser: 200 OK
    return data as JSON