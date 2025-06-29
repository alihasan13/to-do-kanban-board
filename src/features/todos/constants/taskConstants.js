// features/todos/constants/taskConstants.js
export const STATUSES = {
  NEW: 'New',
  ONGOING: 'Ongoing',
  DONE: 'Done',
};

export const STATUS_COLORS = {
  [STATUSES.NEW]: '#3498db',
  [STATUSES.ONGOING]: '#f39c12',
  [STATUSES.DONE]: '#2ecc71',
  OVERDUE: '#e74c3c',
};

export const COLUMN_IDS = {
  NEW: STATUSES.NEW,
  ONGOING: STATUSES.ONGOING,
  DONE: STATUSES.DONE,
};
