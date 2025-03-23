# SyncStream

SyncStream is a web application that enables users to create virtual rooms for watching movies and TV shows together, no matter the distance. Whether you're hosting a movie night with friends or catching up with family, SyncStream makes it easy to share your favorite content by generating and sharing unique room links.

## Features

- **Attractive Landing Page:** A modern, engaging interface with a welcoming design.
- **Create Room:** Users can create a room which generates a unique link to share with others.
- **Join Room:** Users can enter a room using an existing link to join the viewing session.
- **Seamless Navigation:** Easily switch between creating and joining rooms using React Router.

## Technologies Used

- **Frontend:** React, JSX, CSS Modules, React Router
- **Backend:** Django (Python)

## Directory Structure

syncstream/ ├── backend/ │ ├── manage.py │ ├── syncstream_backend/ │ │ ├── init.py │ │ ├── settings.py │ │ ├── urls.py │ │ └── wsgi.py │ └── rooms/ │ ├── init.py │ ├── admin.py │ ├── apps.py │ ├── migrations/ │ ├── models.py │ ├── tests.py │ ├── urls.py │ └── views.py └── frontend/ ├── package.json ├── public/ │ └── index.html └── src/ ├── index.js ├── App.jsx ├── components/ │ ├── LandingPage.jsx │ ├── CreateRoom.jsx │ └── JoinRoom.jsx └── styles/ ├── LandingPage.module.css ├── CreateRoom.module.css └── JoinRoom.module.css

## Installation & Setup

### Backend Setup (Django)

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   Create a Python Virtual Environment and Activate It:
   ```

python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
Install Django:

pip install django
Run Migrations and Start the Server:

python manage.py migrate
python manage.py runserver
Frontend Setup (React)
Navigate to the frontend directory:

cd frontend
Install Dependencies:

npm install
Start the Development Server:

npm start
Usage
Landing Page:
Open http://localhost:3000 to see the landing page.

Create Room:
Click the Create Room button to generate a unique room link. The link will be displayed on the page for sharing.

Join Room:
Click the Join Room button and enter a valid room link to join an existing session.

Note: In this initial setup (Part 1), the project focuses on setting up the project structure and creating an attractive UI. Backend integration for room management and real-time functionality will be implemented in subsequent parts.

Future Enhancements
Backend Integration: Connect the React frontend with Django API endpoints for creating and managing rooms.

Real-Time Functionality: Implement real-time synchronization using WebSockets.

User Authentication: Add support for user accounts and authentication.

Deployment: Prepare the application for production deployment with Docker and performance optimizations.

License
This project is licensed under the MIT License.

Acknowledgments
This project was developed as part of a multi-part series to build a collaborative movie streaming experience.

---

Feel free to download the file using the link above or create the file manually using the provided content.
