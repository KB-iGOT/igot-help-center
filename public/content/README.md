# Content Folder Structure

This folder is the **single source of truth** for all Help Center content.
No React code changes are needed to add, update, or remove content.

## Folder Layout

```
public/content/
├── documents/
│   ├── catalog.json          ← Document metadata (edit this to add/remove docs)
│   ├── learner/
│   │   ├── Registration & Login/
│   │   │   ├── register-login-guide.pdf
│   │   │   └── thumbnail.jpg
│   │   ├── Profile Management/
│   │   │   └── ...
│   │   └── ...
│   ├── mdo/
│   │   ├── Organisation Settings/
│   │   │   └── ...
│   │   └── ...
│   └── cbp/
│       └── ...
│
└── videos/
    └── catalog.json          ← Video metadata (edit this to add/remove videos)
```

## How to Add a New Document

1. Place your PDF in the correct folder:
   `public/content/documents/{tab}/{category}/your-document.pdf`

2. (Optional) Add a thumbnail image in the same folder.

3. Open `public/content/documents/catalog.json` and add an entry:
   ```json
   {
     "id": "unique-id",
     "title": "Document Title",
     "titleHi": "Hindi Title",
     "description": "Brief description",
     "icon": "file-text",
     "category": "Category Name",
     "tab": "learner",
     "thumbnail": "/content/documents/learner/Category Name/thumbnail.jpg",
     "pdfFile": "/content/documents/learner/Category Name/your-document.pdf"
   }
   ```

4. Refresh the app — the document appears automatically.

## How to Add a New Video

1. Open `public/content/videos/catalog.json` and add an entry:
   ```json
   {
     "title": "Video Title",
     "url": "https://youtu.be/VIDEO_ID",
     "date": "Mar 24, 2026",
     "tab": "learner",
     "category": "profile-account"
   }
   ```

2. Refresh the app — the video appears automatically.

## How to Add a New Category

### For Documents:
Add a new folder under the tab directory and reference the new category name in catalog.json entries.

### For Videos:
Add a new category entry in the `categories` array inside `catalog.json`.

## Supported Icon Names (for documents)
file-text, calendar, map, arrow-right-left, layout-dashboard, log-in,
key-round, user-circle, graduation-cap, message-square, bot, users,
clipboard-check, book-open, shield
