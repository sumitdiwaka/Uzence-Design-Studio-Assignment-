# Project Documentation

## 📂 Folder Structure
```
project-root/
│-- .storybook/         # Storybook configuration files
│-- src/
│   │-- components/     # Reusable React components
│   │   │-- InputField/
            |-- InputField.stories.tsx
            |-- InputField.tsx
            |-- InputField.types.ts
│   │   │-- DataTable.tsx/
            |-- DataTable.stories.tsx
            |-- DataTable.tsx
            |-- DataTable.types.ts
│   
│-- package.json        # Project dependencies and scripts
│-- tsconfig.json       # TypeScript configuration
│-- README.md           # Documentation (this file)
```

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd project-root
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Storybook**
   ```bash
   npm run storybook
   ```
   This will start Storybook at [http://localhost:6006](http://localhost:6006).

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Run tests (if configured with Playwright or Jest)**
   ```bash
   npm test
   ```

## 📖 Description of Approach

This project demonstrates **component-driven development** using **React, TypeScript, and Storybook**.

- **InputField Component**  
  A reusable input component with customizable props (e.g., label, type, placeholder).  
  Example usage:
  ```tsx
  <InputField label="Username" placeholder="Enter your name" />
  ```

- **DataTable Component**  
  A dynamic table component that accepts `data` and `columns` props for rendering structured data.  
  Example usage:
  ```tsx
  <DataTable
    data={[
      { id: 1, name: "John Doe", age: 25 },
      { id: 2, name: "Jane Smith", age: 30 }
    ]}
    columns={[
      { header: "ID", accessor: "id" },
      { header: "Name", accessor: "name" },
      { header: "Age", accessor: "age" }
    ]}
  />
  ```

- **Storybook Integration**  
  Each component has an associated `.stories.tsx` file for isolated testing and UI previews.

## ✅ Key Features

- React + TypeScript for strong typing and maintainability.  
- Storybook for visual component development.  
- Scalable folder structure for larger projects.  
- Easy setup and extensibility.  
