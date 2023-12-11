// stores/grouping.ts
import { defineStore, Store } from 'pinia';

// Define the student type
interface Student {
  id: number;
  name: string;
  isLeader: boolean;
}

// Define the group type
interface Group {
  id: number;
  students: Student[];
  leader: Student;
}

// Define the store state
interface GroupingState {
  students: Student[];
  groups: Group[];
}

// Define the store
export const useGroupingStore = defineStore({
  id: 'grouping',
  state: (): GroupingState => ({
    students: [],
    groups: [],
  }),

  // Actions to update the state
  actions: {
    addStudent(student: Student) {
      this.students.push(student);
    },

    addGroup(group: Group) {
      this.groups.push(group);
    },

    // Action to fetch groups
    fetchGroups() {
      // In a real application, you would fetch groups from an API
      // For now, let's use dummy data
      const dummyGroups: Group[] = [
        {
          id: 1,
          students: [{ id: 1, name: 'Erica', isLeader: true }, { id: 2, name: 'Joel', isLeader: false }],
          leader: { id: 1, name: 'Erica', isLeader: true },
        },
        {
          id: 2,
          students: [{ id: 3, name: 'Jamil', isLeader: true }, { id: 4, name: 'Alex', isLeader: false }],
          leader: { id: 3, name: 'Jamil', isLeader: true },
        },
        {
          id: 3,
          students: [{ id: 5, name: 'Stephen', isLeader: true }, { id: 6, name: 'Alex', isLeader: false }],
          leader: { id: 5, name: 'Stephen', isLeader: true },
        },
      ];

      this.groups = dummyGroups;
    },
  },

  // Getters to compute derived state
  getters: {
    // Example getter to get the total number of students
    totalStudents(): number {
        return this.students.length;
      },
      getFetchedGroups(): Group[] {
        return this.groups;
      },
  },
});

// Export the store definition type
export type GroupingStore = Store<'grouping', GroupingState, typeof useGroupingStore>;
