# PokeCheck Project Plan

## Overview
PokeCheck is a Pokémon checker that allows users to search for Pokémon and check type effectiveness. The application will be developed using modern web technologies with a focus on performance, usability, and accessibility.

## Technologies Used
- **Frontend Framework**: React (Next.js)
- **State Management**: Redux
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack Query, Axios
- **Component Library & Documentation**: Storybook
- **Testing**: Jest (unit testing)
- **Version Control**: GitHub (Feature-based branching strategy)
- **UI Design**: Figma

## Features
### Phase 1 (Core Features)
- [X] **Preparation**
  - [X] Planning
  - [X] Wireframe by Figma
- [X] **Home Page**
  - [X] Title and search form
  - [X] Display random recommended Pokémon
- [X] **Search Page**
  - [X] Users can search for Pokémon by name
  - [X] Display search results as a list of images and names
  - [X] Click on a Pokémon to navigate to its details page
- [X] **Pokémon Details Page**
  - [X] Show Pokémon type, stats, and relevant information


### Phase 2 (Additional Features, if time allows)
- [ ] **Type List Page**
  - [ ] Display all Pokémon types with click-through to a type-specific details page
- [ ] **Type Details Page**
  - [ ] Show effectiveness against other types

## API Integration
- **Source**: [PokéAPI](https://pokeapi.co)
- **Endpoints Used**:
  - `/pokemon/{name}` - Retrieve Pokémon data
  - `/type/{id or name}` - Retrieve type effectiveness data

## UI/UX Considerations
- **Typography**: Bungee (logo & title), Baloo 2 (body text)
- **Color Scheme**:
  - Background: #FFFBF4 (Floral White)
  - Card Backgorund: #ffffff (White)
  - Text: #3b3b3b (Blach Olive)
  - Primary Accent: #F5542E (Orange Red)
  - Secondary Accent: #1574B3 (Check Blue)  

- **Responsive Design**: Ensure usability on both desktop and mobile devices

## Development Process
### Start Up
(Branch: feature/start-up)
- [X] **Setup Project Structure** (Next.js, Redux, TypeScript, Tailwind, Axios, Storybook)
- [X] **Implement UI Components** (Header, Search Bar, Pokémon List, Detail Page)
- [X] **Component Documentation with Storybook**
### UI with Fake Data
(Branch: feature/ui-with-fake-data)
- [X] Prepare **Dummy Data** for Pokémon
- [X] Create a **PokemonType** interface in **types/pokemon.ts**
- [X] Build **Type Badge Component** with dummy data
- [X] Show **Recommended Pokémon** on the Home page
- [X] Implement **Search Results List** with fake data
- [X] Create **Pokémon Detail Page** layout with placeholder content
### API Startup & Testing
(Branch: feature/api-startup)
- [X] **Fetch data** from **PokéAPI**
- [X] Connect UI to **Live API Data**
- [X] Display **loading states** and handle **errors**
- [X] Write **unit tests (Jest)** for major components and logic

### Optimization
(Branch: feature/optimization)
- [ ] **Mock API** calls for test coverage
- [X] **Optimize app** for **performance** (code splitting, lazy loading)
- [ ] Run **Lighthouse** audit and achieve 90+ score

### Offline & Error Handling
(Branch: feature/offline-support)
- [ ] Retry logic for failed requests (max 3 tries)
- [ ] **Cache** Pokémon data in **local storage**
- [ ] Display clear **error messages** on failure
- [ ] Add **Retry** button
- [ ] Show loading **skeleton** during fetch

### Accessibility & UX
(Branch: feature/accessibility)
- [X] Add **debouncing** to search
- [X] Implement **screen reader support**
- [X] Make layout touch-friendly and **responsive**

### Analytics & Observability
(Branch: feature/observability)
- [ ] Track **user interactions** (e.g., search usage, click events)
- [ ] Set up **A/B testing** with Statsig
- [ ] **Cross-browser** testing (Chrome, Edge, Firefox)
- [ ] Review code for readability and maintainability


## Deployment
- [X] **Platform**: Vercel
- [X] **Version Control**: GitHub (Feature-based branching strategy)

## Future Work
- [ ] Evolution Checker feature
- [ ] Team Composition Checker feature
- [ ] Progressive Web App (PWA) enhancements

---

This plan will be iteratively updated based on progress and requirements.
