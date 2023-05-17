# **The solution**

1. The project has been implemented using a `monorepo` with turborepo and yarn workspaces
2. It has been structured as follows:

- root
  - apps
    - web (the web app)
    - api (the provided express api)
    - ...
  - packages
    - tsconfig
    - eslint-config-react
    - ...

The main idea around it is to make it possible to share code between the projects, especially if a React Native app comes in to the game, therefore it is easier to share some aspects, like helpers, theming, the auth portion and the API client + hooks, to list a few, so that the apps are consistent and maintainable.
This makes the project really scalable and future ready.

3. The stack that I used:

   - vite - a build tool and development server for modern web applications.
   - typescript - The main language used
   - react - The one we love :)
   - react-router - For navigation between pages
   - react-query - Data fetching and caching library for React applications
   - styled-components - CSS-in-js library
   - date-fns - For dealing with dates
   - axios - HTTP Client
   - eslint - Linting
   - stylelint - Linting CSS-in-js
   - prettier - Code formatting

4. A few interesting things in the way I built it:
   - I did implement a storage service that abstracts away the `localStorage` (facade)
   - I'm doing the same with `date-fns`, so that we never use it directly in code
   - There is a `config` that exposes environment variables, so that we don't use vite imports around.
   - I did create an entity adapter with the purpose of transforming rest data in entity data (in the format of `Record<number, TEntity>`) similarly to how the redux toolkit entity adapter does. That way I provide a mechanism that allows entities to be looked up by their ids, as that optimizes lookup performance (instead of a filter or find). Eg.: users[userId], as simple as that :)
   - The authentication has been done in a combination of an authentication service along with React context and provider (exposed by a hook). When the user signs in the app requests from the API and on success they're saved to the local storage. Next time the app is opened, that user will be restored from the local storage (no need to login again).
   - Automatic refetching: Once you send a message using the `usePostMutation` it invalidates the `posts` key, therefore making posts to be refetched automatically.
   - The app has been divided into features, being `posts`, `birthdays` and `auth`, therefore there's a strong and scalable structure in place.
   - A few totally reusable components, like `Button`, `Card` and `Link`.
   - It's all implemented with FP and fully typed with typescript :)

**Running**

`yarn && yarn start`

- Check out the rest of the scripts in `package.json`
- There are linting, formatting and build tasks, and more!
