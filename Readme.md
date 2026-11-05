# VOXA – Real-Time Video Conferencing Platform

VOXA is a browser-based real-time video conferencing and communication platform built to make online meetings and collaboration seamless. It enables users to connect through live video and audio calls, exchange messages, share screens, and manage meetings through a centralized interface.

The application supports both guest access and authenticated users, combining WebRTC for peer-to-peer media communication with Socket.IO for signaling and real-time event handling.

## Features

- **Live Video Calling:** Establish real-time peer-to-peer video communication using WebRTC.
- **Audio Communication:** Enable real-time voice communication between meeting participants.
- **Screen Sharing:** Share your screen during meetings for presentations and collaboration.
- **In-Meeting Chat:** Exchange messages with other participants during active meetings.
- **Microphone Controls:** Enable or disable the microphone during a meeting.
- **Camera Controls:** Turn the camera on or off whenever needed.
- **Guest Access:** Join meetings without requiring user registration.
- **User Authentication:** Register and log in to access authenticated features.
- **Meeting Code:** Join meetings using a meeting code.
- **Meeting History:** Access previously recorded meeting information.
- **Protected Routes:** Secure application routes using authentication-based route guards.
- **Real-Time Event Handling:** Manage signaling and meeting-related events through Socket.IO.

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js 19 | Frontend development |
| React Router DOM | Client-side routing and navigation |
| Material UI | UI components and interface design |
| Emotion | Component styling |
| Axios | HTTP requests and API communication |
| Socket.IO Client | Real-time event communication |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime environment |
| Express.js 5 | REST API and server development |
| MongoDB | Database |
| Mongoose | Database modeling and management |
| Socket.IO | Signaling and real-time event handling |
| Bcrypt | Password hashing |
| HTTP Status | HTTP status code management |
| Nodemon | Development server monitoring |
| PM2 | Process management |

### Real-Time Communication

| Technology | Purpose |
|---|---|
| WebRTC | Peer-to-peer audio and video communication |
| Socket.IO | WebRTC signaling and real-time event exchange |
| Socket.IO Client | Frontend socket communication |

## Application Architecture

VOXA follows a client-server architecture with separate frontend and backend responsibilities.

### Frontend Architecture

- **App.js:** Main application entry point and route configuration.
- **Landing Page:** Initial application interface.
- **Authentication Page:** Handles user registration and login.
- **Home Page:** Provides meeting entry and meeting-code functionality.
- **Meeting History:** Displays previously recorded meeting information.
- **Video Meeting:** Handles the live meeting interface and participant interactions.
- **AuthContext:** Manages authentication-related state and meeting history.
- **WithAuth:** Protects routes that require authentication.
- **Environment Configuration:** Manages frontend server configuration.

### Backend Architecture

- **App.js:** Initializes the Express server and HTTP configuration.
- **User API Routes:** Handles incoming user-related API requests.
- **User Controller:** Processes user operations and business logic.
- **Socket Event Manager:** Manages real-time communication and meeting-related socket events.
- **User Model:** Defines the user database schema.
- **Meeting Model:** Defines the meeting database schema.

## Real-Time Communication Workflow

VOXA uses WebRTC and Socket.IO together to provide real-time meeting functionality.

1. Participants enter a meeting using a meeting code.
2. Socket.IO establishes the signaling channel between connected participants.
3. WebRTC uses signaling information to establish peer-to-peer connections.
4. Audio and video streams are exchanged between participants through WebRTC.
5. Participants can control their microphone and camera during meetings.
6. Screen sharing enables participants to share their screens.
7. Socket.IO handles real-time chat and other meeting-related events.

## Key Benefits

- Enables real-time communication through peer-to-peer media connections.
- Reduces dependency on centralized media streaming for supported WebRTC connections.
- Provides flexible meeting access through guest and authenticated modes.
- Combines video conferencing and instant messaging in one application.
- Separates frontend, backend, authentication, and real-time communication responsibilities.
- Provides a modular architecture that can be extended with additional collaboration features.

## Project Overview

VOXA brings video conferencing, instant messaging, and meeting management together in a single browser-based platform. By combining React.js, Node.js, Express.js, MongoDB, WebRTC, and Socket.IO, it provides a foundation for real-time communication and online collaboration.

**Built with React.js, Node.js, Express.js, MongoDB, WebRTC, and Socket.IO.**