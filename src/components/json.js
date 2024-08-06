export const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "title": "Start by providing some basic information about yourself.",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": "Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question2",
            "title": "Email",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question3",
            "title": "Phone Number"
          },
          {
            "type": "dropdown",
            "name": "question4",
            "title": "What class do you need help with?",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Math"
              },
              {
                "value": "Item 2",
                "text": "Computer Science"
              },
              {
                "value": "Item 3",
                "text": "Biology"
              },
              {
                "value": "Item 4",
                "text": "Chemistry"
              },
              {
                "value": "Item 5",
                "text": "Physics"
              },
              {
                "value": "Item 6",
                "text": "History"
              },
              {
                "value": "Item 7",
                "text": "English"
              }
            ]
          }
        ]
      },
      {
        "name": "page2",
        "title": "Please answer the following questions about your learning experiences.",
        "elements": [
          {
            "type": "text",
            "name": "question5",
            "title": "Describe your learning style (visual, auditory, etc).",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question6",
            "title": "What are things that you typically struggle with in a class? (i.e. paying attention in lecture, not having time to go to office hours, test anxiety, time management, etc).",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question7",
            "title": "What have your past experiences with tutoring been like? Share the good and the bad.",
            "isRequired": true
          }
        ]
      }
    ]
  }