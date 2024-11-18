![screencapture-er-sql-netlify-app-2024-11-18-12_16_02](https://github.com/user-attachments/assets/2d9725f0-2602-491a-ac71-6d5336405bba)# **ER SQL**  
### **Web-Based ER Diagram Builder**  

![Project Banner](https://via.placeholder.com/1200x300.png?text=ER+SQL+-+Web-Based+ER+Diagram+Builder)  

---

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

## **Screenshots**  

### **Home Page**  
![Home Page](![screencapture-er-sql-netlify-app-2024-11-18-12_16_02](https://github.com/user-attachments/assets/0d0dcce2-c2bd-452b-88fe-5dc8e7c8bd5f))  

### **Diagram Builder Interface**  
![Diagram Builder](![screencapture-er-sql-netlify-app-editercomp-2024-11-18-12_19_07](https://github.com/user-attachments/assets/a858a389-63ec-47ac-8552-1a3e82f6209f))  

### **Real-Time Collaboration**  
![Collaboration](https://via.placeholder.com/800x400.png?text=Real-Time+Collaboration)  

---


## **Deployment**  

- **Live Project**: [ER SQL Live](https://er-sql.netlify.app/)  
- **GitHub Repository**: [GitHub Repo](https://github.com/varad-pawar1/ER-Diagram-Builder)  

---

## **Feedback**  

Have suggestions or feedback? Open an issue or contact us via email at (varadpawarm@gmail.com).  

---

## **License**  

This project is licensed under the MIT License.  
