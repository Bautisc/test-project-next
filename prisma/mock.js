

// Some mock data generated with AI


const users = [
  {
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@mail.com",
    completedSessions: 3,
    remainingSessions: 2,
    sessions: [
      { sessionNumber: 1, sessionDate: "2024-10-01" },
      { sessionNumber: 2, sessionDate: "2024-10-03" },
      { sessionNumber: 3, sessionDate: "2024-10-05" },
    ]
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@mail.com",
    completedSessions: 5,
    remainingSessions: 0,
    sessions: [
      { sessionNumber: 1, sessionDate: "2024-09-20" },
      { sessionNumber: 2, sessionDate: "2024-09-22" },
      { sessionNumber: 3, sessionDate: "2024-09-24" },
      { sessionNumber: 4, sessionDate: "2024-09-26" },
      { sessionNumber: 5, sessionDate: "2024-09-28" },
    ]
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    email: "carol@mail.com",
    completedSessions: 1,
    remainingSessions: 4,
    sessions: [
      { sessionNumber: 1, sessionDate: "2024-10-10" },
    ]
  },
];

const sessions = [
  { sessionNumber: 1, sessionDate: "2024-10-01", userId: 1 },
  { sessionNumber: 2, sessionDate: "2024-10-03", userId: 1 },
  { sessionNumber: 3, sessionDate: "2024-10-05", userId: 1 },
  { sessionNumber: 1, sessionDate: "2024-09-20", userId: 2 },
  { sessionNumber: 2, sessionDate: "2024-09-22", userId: 2 },
  { sessionNumber: 3, sessionDate: "2024-09-24", userId: 2 },
  { sessionNumber: 4, sessionDate: "2024-09-26", userId: 2 },
  { sessionNumber: 5, sessionDate: "2024-09-28", userId: 2 },
  { sessionNumber: 1, sessionDate: "2024-10-10", userId: 3 },
];

export const mock = { sessions, users }
