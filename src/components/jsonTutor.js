export const jsonTutor = {
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
            "type": "checkbox",
            "name": "question10",
            "title": "What classes are you qualified to teach?",
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
        "title": "Please answer the following questions about your teaching experience.",
        "elements": [
          {
            "type": "text",
            "name": "question5",
            "title": "Please describe your level of experience overall. Did you do any tutoring in high school? Have you worked as an instructor over the summer?",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question6",
            "title": "Would you be comfortable giving your student advice on managing their time and work, or just how to manage life at NU in general?",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question7",
            "title": "Describe your teaching style. Do you like to do practice problems, dive deep into the conceptual, etc.",
            "isRequired": true
          }
        ]
      }
    ]
  }