## **Introduction**

**ER SQL** is a cutting-edge web application built with modern technologies to create, manage, and export Entity-Relationship (ER) diagrams. Designed for database designers and developers, **ER SQL** offers seamless real-time collaboration and a powerful set of tools for database schema design.

---
## **Features**  

### **Core Features**

1. **User Authentication**:
   - Secure sign-up, log-in, and log-out functionality with **Firebase**.
2. **ER Diagram Builder**:
   - Add, edit, and delete entities, attributes, and relationships.
   - Visualize complex database schemas effortlessly.
3. **Export Options**:
   - Save diagrams as PNG, PDF, or SVG using **html2canvas** and **jspdf**.
4. **Real-Time Collaboration**:
   - Work together with your team seamlessly.
5. **Responsive Design**:
   - Built with **Bootstrap** and **Chakra UI** for a modern, mobile-friendly interface.

### **Advanced Features**  
- **Interactive Flow**: Built using **React Flow Renderer** for dynamic diagram management.  
- **State Management**: Centralized state management with **Redux Toolkit**.  
- **Smooth Animations**: Enhanced user experience with **Framer Motion**.  
- **Template Support**: Pre-built templates for common database structures.  

---

## **Deployment**  

- **Live Project**: [ER SQL Live](https://er-sql.netlify.app/)  
- **GitHub Repository**: [GitHub Repo](https://github.com/varad-pawar1/ER-Diagram-Builder)
  
---

## **Tech Stack**

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Styling**: Chakra UI, Bootstrap
- **State Management**: Redux Toolkit
- **Backend**: Firebase (Authentication and Database)
- **Utilities**: Axios, React Router, React Scroll
- **Build Tool**: Vite

---

## **Packages Used**

```json
{
  "dependencies": {
    "@chakra-ui/react": "^2.10.4",
    "@emotion/react": "^11.13.3",
    "@reduxjs/toolkit": "^2.3.0",
    "axios": "^1.7.7",
    "html-to-image": "^1.11.11",
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.2",
    "react": "^18.3.1",
    "react-flow-renderer": "^10.3.17",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.28.0"
  }
}
```

---

## **How to Run Locally**

### Prerequisites

- **Node.js** (v18 or later) and npm installed.
- A Firebase project configured for authentication and Firestore.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/varad-pawar1/ER-Diagram-Builder
   ```

2. Install dependencies:

   ```bash
   cd ER-DIGRAM
   npm install
   ```

3. Set up Firebase:

   - Configure `firebaseConfig` in the project with your Firebase credentials.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.  
---

### Project Folder Structure

This is the folder structure for the **V ER-Diagram-Builder** project.

```
V ER-Diagram-Builder  
│  
├── dist/  
│   └── # Distribution folder (build output)  
│  
├── node_modules/  
│   └── # Installed dependencies  
│  
├── public/  
│   └── # Public assets (HTML, images, etc.)  
│  
└── src/  
    ├── assets/  
    │   └── # Static assets (images, icons, etc.)  
    ├── hooks/  
    │   └── # Custom React hooks  
    ├── pComponent/  
    │   └── # Presentational components  
    ├── scomponents/  
    │   └── # Shared components  
    ├── vcomponents/  
    │   └── # View components  
    ├── App.css  
    │   └── # Global styles for the app  
    ├── App.jsx  
    │   └── # Main App component  
    ├── index.css  
    │   └── # Global CSS  
    └── main.jsx  
        └── # Entry point for React application  
│  
├── .gitignore  
│   └── # Git ignore file  
├── eslint.config.js  
│   └── # ESLint configuration file  
├── index.html  
│   └── # Main HTML file  
├── package-lock.json  
│   └── # Locked dependencies  
├── package.json  
│   └── # Project metadata and dependencies  
├── README.md  
│   └── # Project README file  
└── vite.config.js  
    └── # Vite build configuration  
```

---

## **Screenshots**

### **Sign up**

![Signup](https://github.com/user-attachments/assets/f1c56654-0bb2-4009-895c-4f7991bee648)

### **Login**

![Login](https://github.com/user-attachments/assets/8153063b-5f49-4853-9013-3e3306f3a575)

### **Home Page**

![Home Page](https://github.com/user-attachments/assets/2d9725f0-2602-491a-ac71-6d5336405bba)

### **Diagram Builder Interface**

![Diagram Builder](https://github.com/user-attachments/assets/85aaffaf-94ee-4723-9fa7-96ba13ee5c32)

---

### **Future Enhancements**
1. **Versioning and History Tracking**:  
   - Implement version control for ER diagrams, allowing users to track changes, revert to previous versions, and manage diagram history.
  
2. **Cloud Database Integration**:  
   - Integrate the application with popular cloud databases (e.g., AWS RDS, Google Cloud Firestore) to allow users to generate ER diagrams directly from live databases.
  
3. **Advanced Query Generation**:  
   - Add the ability to generate SQL queries or scripts directly from ER diagrams to automate database creation and updates based on the schema.

4. **Offline Mode**:  
   - Enable offline support for users to continue designing ER diagrams without an active internet connection, syncing changes when the connection is restored.
---

## **Feedback**

Have suggestions or feedback? Open an issue or contact us via email at (varadpawarm@gmail.com).

---

## **License**

This project is licensed under the MIT License.
