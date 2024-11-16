# As mentioned in the setup, I am using Redux with Thunk to manage the store and calling the API.

# I have also used Shimmer effect. Thus, when the data is loading instead of showing any regular loader I am trying to show a Shimmer Effect of the UI.

# Since there was no extra routes mentioned in the assignment so I am not using Router or code splitting in this project.

# For hosting I am using google firebase instead of github hosting link.

# for issues mentioned on the page3.

## a title with very long name- I used word-break for that.
## Image not found for one title- I used the image from your API for 'image not found'
## after page3.json API rest all other APIs are crashing. so I handled it with the status code if 'error' then stop fetching. We can also undo this step but for right now I am only aborting the further calls.
