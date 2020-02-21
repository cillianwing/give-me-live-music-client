# Get Me Live Music App - General Notes

## Components

### Potential Containers
- **UpcomingConcerts**: Primary container user will interact with to view and "add" upcoming concerts based on search criteria provided (location, venue, date, etc.).
- **Venues**: Container that will display list of venues based on location provided. User will be able to select venues to "follow" within this container.
- **UserCalendar**: Container housing a calendar of concerts user has marked as "interested" or "going".
- **UserProfile**: Shows user info and allows them to edit their info (email, password, location, etc.).
- **Login**: Allows user to login and sets currentUser.
- **Signup**: Allows user to signup and sets currentUser upon successful signup.

### Potential Components (Stateless)
- **Concert**: Card that will display concert info/data. Data likely to be passed as props from UpcomingConcerts container.
- **Venue**: Card that will display venue info/data. Data likely to be passed as props from Venues container.
- **Form**: General form component to be used across multiple other components (Login, Signup, any sort of search, etc.).
- **Input**: General input component to be used within any Form component that requires it. May need individual input components for specific input type (text, select, etc.).
- **SubmitButton**: General submit button component to be used within any Form component that requires it.

### Potential Store (State Held w/ Redux)
- **currentUser**: Object with user data after login/signup.
- **userConcerts**: Array of concert objects for concerts the user has marked as "interested" or "going". Pulled from backend database and altered as user interacts with the app.
- **userVenues**: Array of venue objects for venues the user has "followed". Pulled from backend database and altered as user interacts with the app.
- **upcomingConcerts**: Array of concert objects that will be listed for user interaction based on whatever criteria is provided (location, venue, search, etc.). Should also contain a "loading" boolean that will flip between true/false as data is being pulled from external API.
- **signupForm**: Form data for signup.
- **loginForm**: Form data for login.
- **searchForm**: Form data for concert searches (if it's decided this is needed).