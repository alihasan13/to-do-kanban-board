// src/config/constants.js
export const STATUSES = {
  NEW: 'New',
  ONGOING: 'Ongoing',
  DONE: 'Done',
};

export const STATUS_COLORS = {
  [STATUSES.NEW]: '#3498db',     // Blue
  [STATUSES.ONGOING]: '#f39c12', // Orange
  [STATUSES.DONE]: '#2ecc71',     // Green
  OVERDUE: '#e74c3c',            // Red
};

// Column IDs for react-beautiful-dnd should map to statuses
export const COLUMN_IDS = {
  NEW: STATUSES.NEW,
  ONGOING: STATUSES.ONGOING,
  DONE: STATUSES.DONE,
};