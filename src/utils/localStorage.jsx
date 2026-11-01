const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Complete Dashboard UI",
        taskDescription: "Build the dashboard layout using React and Tailwind CSS.",
        taskDate: "2026-10-25",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Identify and fix the login validation issue.",
        taskDate: "2026-10-26",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Create a responsive navigation bar.",
        taskDate: "2026-10-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Submit Project Report",
        taskDescription: "Submit the project report before the deadline.",
        taskDate: "2026-10-20",
        category: "Documentation"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Design a clean and modern landing page.",
        taskDate: "2026-10-25",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Review UI Components",
        taskDescription: "Review reusable UI components.",
        taskDate: "2026-10-27",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for the new dashboard.",
        taskDate: "2026-10-21",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Finalize Color Palette",
        taskDescription: "Finalize the project color palette.",
        taskDate: "2026-10-19",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Mobile Layout",
        taskDescription: "Make the landing page responsive.",
        taskDate: "2026-10-28",
        category: "Development"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Develop API Integration",
        taskDescription: "Integrate the frontend with API endpoints.",
        taskDate: "2026-10-26",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for authentication functions.",
        taskDate: "2026-10-22",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Optimize API Requests",
        taskDescription: "Reduce unnecessary API calls.",
        taskDate: "2026-10-27",
        category: "Optimization"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Prepare Test Cases",
        taskDescription: "Prepare test cases for employee management.",
        taskDate: "2026-10-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Test Login Form",
        taskDescription: "Test login validation.",
        taskDate: "2026-10-22",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Complete Regression Testing",
        taskDescription: "Run regression tests and document issues.",
        taskDate: "2026-10-20",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Report Application Bugs",
        taskDescription: "Document application bugs.",
        taskDate: "2026-10-26",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Verify Dashboard",
        taskDescription: "Verify dashboard elements on different screens.",
        taskDate: "2026-10-23",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Test Task Filters",
        taskDescription: "Verify task filters display correct results.",
        taskDate: "2026-10-28",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update project documentation.",
        taskDate: "2026-10-25",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create User Guide",
        taskDescription: "Write a guide explaining application features.",
        taskDate: "2026-10-22",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Review Project Requirements",
        taskDescription: "Review project requirements.",
        taskDate: "2026-10-26",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Deliver Weekly Report",
        taskDescription: "Prepare and deliver the weekly report.",
        taskDate: "2026-10-20",
        category: "Reporting"
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Prepare Team Meeting",
        taskDescription: "Prepare the team meeting agenda.",
        taskDate: "2026-10-27",
        category: "Planning"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage= ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage= ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}