# Meetup Clone with React Native, Expo, and Supabase

## Project Overview

This project provides a comprehensive guide to building a full-stack event application similar to Meetup. It covers fundamental mobile development concepts, backend integration, and advanced features for a robust and scalable application.

---

## Key Features

* **User Authentication:** Secure user sign-up, sign-in, and session management.
* **Event Listing & Details:** Display a list of events with detailed views for each.
* **RSVP Functionality:** Allow users to join events and track their attendance.
* **User Profiles:** Manage and update user profile information.
* **Event Creation:** Enable users to create and manage their own events.
* **Image Uploads:** Integrate cloud storage for event images and user avatars.
* **Geospatial Filtering:** Fetch and display nearby events based on user location.
* **Map Integration:** Visualize events on an interactive map.
* **Advanced Data Handling:** Implement filtering, sorting, and pagination for large datasets.

---

## Development Stack

* **Mobile Framework:** **React Native** for building cross-platform iOS and Android applications from a single codebase.
* **Development Workflow:** **Expo** for streamlined development, including tooling and services for React Native projects.
* **Navigation:** **Expo Router** for intuitive and seamless navigation within the app.
* **Styling:** **Nativewind** for utility-first CSS styling in React Native.
* **Backend:** **Supabase** for a powerful open-source backend alternative to Firebase, offering:
    * **Authentication:** User management and security.
    * **Database:** PostgreSQL-based database for structured data storage.
    * **Real-time Capabilities:** Instant updates for a dynamic user experience.
    * **Storage:** Cloud storage for media assets like images.
    * **Edge Functions:** Serverless functions for custom backend logic.
    * **PostGIS Extension:** For advanced geospatial queries and location-based features.

---

## Setup & Running

1.  **Project Initialization:**
    ```bash
    npx create-expo-stack@latest MeetupClone --expo-router --tabs --nativewind --supabase
    ```
2.  **Run Development Server:**
    ```bash
    npm start
    ```

---

## Data Management

Initial UI development utilizes **dummy JSON data** (`assets/events.json`). This will be replaced with real-time data fetched from the **Supabase backend**, including:

* **Events Table:** Structured storage for event details.
* **User Profiles Table:** Managing user-specific data.
* **Attendance Tracking:** A many-to-many relationship to track which users are attending which events.

---

## Geospatial Capabilities

Leveraging **Supabase with PostGIS**, the application implements:

* **Location Storage:** Storing geographical coordinates for events.
* **`nearby_events` Function:** A custom PostgreSQL function to efficiently query events within a specified radius from a given latitude and longitude.

```sql
