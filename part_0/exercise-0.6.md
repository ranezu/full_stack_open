sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201
    deactivate server

    Note right of browser: new note added directly to HTML by javascript (even before calling the server!)
    Note right of browser: concurrent users' new notes will NOT be shown until reload of page