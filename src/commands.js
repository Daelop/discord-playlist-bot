/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const ADD_COMMAND = {
  name: 'add',
  description: 'Add a new song to the playlist',
  options: [
    {
      name: 'url',
      description: 'The URL of the song to add',
      type: 3, // STRING
      required: true,
    },
  ],
};
