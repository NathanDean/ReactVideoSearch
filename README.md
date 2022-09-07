# React and TypeScript Video Search App

Deployed to Heroku <a href = "https://peaceful-atoll-49366.herokuapp.com/">here</a>.

This app uses the YouTube API to retrieve videos matching the query entered by the user.

When the user submits a query, the list of videos returned are displayed in the VideoList component, while the first video in the list is automatically displayed in the VideoDetail component, where the user can play the selected video.

The app is built in React and TypeScript.  It also uses Axios to make requests to the YouTube API.  and he to decode unicode in the video's title to a string.
