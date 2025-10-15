# The PDAi Development Plan

This document outlines the phased development plan for the Personal Development AI (PDAi) application. We will follow this plan to ensure a structured, iterative development process.

---

### **Phase 1: Foundation & Barebones Framework**
*(This covers the initial setup and the core "Barebones framework" idea)*

1.  **Firebase Project Setup:** Initialize Firebase in our project.
2.  **User Authentication:** Implement secure email/password sign-up and login using Firebase Auth. This is the front door.
3.  **Firestore Database & Security Rules:** Set up the basic database structure and write the essential security rules so a user can only access their own data. We'll create initial "placeholder" collections for the components we plan to build later.
4.  **Core AI Flow (GenKit):** Create the first, simplest GenKit flow. It will be a Cloud Function that can receive text, process it using a foundational model (like Gemini), and write a resulting `userInsight` back to Firestore. This is the heart of the "genius friend."

---

### **Phase 2: Core RAG Components (The Personal Narrative)**
*(This aligns with the first major component group focused on building the user's personal context)*

5.  **Journal Component:** Build the UI for writing and viewing journal entries. Every new entry will be fed into our GenKit flow to generate and store `userInsights`, building the foundation of the personal RAG.
6.  **To-Do List Component:** Create a simple to-do list. We'll enhance it so that adding, completing, or describing tasks also feeds the RAG.
7.  **Calendar Component:** Implement a basic calendar to log events. New events and their descriptions will become data points for the AI.

> **Validation Point:** At the end of this phase, the app should fulfill the core vision for its first user (you). We will pause for thorough testing and a "vibe-check."

---

### **Phase 3: Functional Components (The "Desk")**
*(This aligns with the second component group, focusing on features that are less RAG-dependent)*

8.  **"Desk" Component & Others:** Based on the blueprint, we'll build out organizational features that are useful on their own without heavy AI interpretation.

---

### **Phase 4: Advanced RAG & Expert Knowledge**
*(This is the major power-up, integrating external expertise)*

9.  **Ingest Expert Knowledge:** Create a system to load expert knowledge (documents on habit formation, goal setting, mental health, etc.) into a format the AI can use for RAG.
10. **Build RAG-Heavy Components:**
    *   **Nutrition:** Implement meal tracking. The AI will cross-reference user data with expert nutrition knowledge.
    *   **Fitness:** Track workouts. The AI will connect user activity to goals and expert fitness advice.
    *   **Financial:** Connect sanitized, read-only data feeds. The AI will offer high-level observations based on this data plus expert financial guidance, adhering strictly to the security blueprint.

---

### **Phase 5: The Holistic "Genius Friend"**
*(The final integration and polish phase)*

11. **Cross-Component AI:** Refine the GenKit flows to connect insights across all components, creating a truly holistic and intelligent experience.
12. **UI/UX Polish:** Conduct a final pass on the entire application to ensure it feels cohesive, intuitive, and polished.
