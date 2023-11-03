# Schedules Constructor
A simple app that can make ugly class schedule look ~~even uglier~~ more pleasant and handy
<br/>

## Preview

**Assembled schedule example:**
[screenshot here]


## Demo
Check it out [here](https://to-do) if you interested!

## Tech Stack <i><sub><sup>(click to expand)</sup></sub></i>
 <b>▷ Typescript</b>

 <b>▷ Docker & Docker Compose</b>

 <b>▷ Express</b>

 <b>▷ MongoDB</b>
 
 <details>
   <summary><b>React</b></summary>
  
   - MobX
     > For global state management
   - React Hook Form
     > To create forms with necessary logic such as validation and form state management
   - React Router Dom
     > For dynamic routing and navigation in the app
   - Error Boundary
     > For handling errors and preventing bad user experience
   - i18next
     > For multi-language support (English / Russian)
   - Axios
     > For data fetching
</details>

<details>
  <summary><b>Vitest/Jest</b></summary>
  
   - Unit Testing
     > (React components & utility functions) 
   - Simple snapshot testing
   - Simple End2End testing (⚠️ **Not Yet.** _Currently working on..._ ⚠️)
</details>

 <details>
   <summary><b>CSS</b></summary>

   - Styled Components
     > For general components styling
   - React Spring + Use Gesture
     > Used to add delete/edit swipe animations
   - React transition group
     > To animate navigation in dropdown menu
</details>

## Usage
  1. Log in using your Google account
  2. Add cards of classes that you have
  3. Add class schedule(s) so that app can show you start/end time of each class
  5. Assemble weekly schedule by combining class cards and class schedules for each day individually
  6. Click "Done" and that's it! Now this schedule will be displayed on the main page
   
## Features
  - Each day can have unique class schedule in case if they change throughout the week
  - Progress indicator for ongoing classes
  - Dark and light themes 
  - Multi-language support (English and Russian)
  - Edit any card by swiping it to the right
  - Or delete it by swiping to the left

## Development
1. Clone repo using `git clone` command
2. Add two `.env.dev` files in the `client/config` and `server/config` directories _(look `.env.example`)_
3. Use Docker compose to create images and run containers
```sh
docker-compose -f docker-compose-dev.yml up -d
```
