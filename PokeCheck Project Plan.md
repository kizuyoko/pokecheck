# PokeCheck Project Plan
## API Integration
- **Source**: [PokéAPI](https://pokeapi.co)
- **Endpoints Used**:
  - `/pokemon/{name}` - Retrieve Pokémon data
  - `/type/{id or name}` - Retrieve type effectiveness data

## UI/UX Considerations
- **Typography**: Bungee (logo & title), Baloo 2 (body text)
- **Color Scheme**:
  - Background: #FFFBF4 (Floral White)
  - Card Background: #ffffff (White)
  - Text: #3b3b3b (Black Olive)
  - Primary Accent: #F5542E (Orange Red)
  - Secondary Accent: #1574B3 (Check Blue)  
- **Responsive Design**: Ensure usability on both desktop and mobile devices

## Phase 1: Foundations
- Project setup, UI components, dummy data, basic API integration

### Start Up
(Branch: feature/start-up)
- [X] **Planning** README, Project Planning
- [X] **Wireframe** by Figma
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
- [X] Add **Fallback Data** during API downtime.
- [X] Write **Jest unit tests** for key components and logic.
- [X] Show loading **skeleton** during fetch
- [X] **Fallback Data**

### Optimization
(Branch: feature/optimization)
- [X] **Mock API** calls for test coverage
- [X] **Optimize app** for **performance** (code splitting, lazy loading)
- [x] Run **Lighthouse** audit and achieve 90+ score

### Offline & Error Handling
(Branch: feature/offline-support)
- [X] Retry logic for failed requests (max 3 tries)
- [X] **Cache** Pokémon data in **local storage**
- [X] Display clear **error messages** on failure
- [X] Add **Retry** button

### Accessibility & UX
(Branch: feature/accessibility)
- [X] Add **debouncing** to search
- [X] Implement **screen reader support**
- [X] Make layout touch-friendly and **responsive**

### Analytics & Observability
- [X] **Cross-browser** testing (Chrome, Edge, Firefox)
- [X] Review code for readability and maintainability


## Phase 2: Extended Features
- Type list page, type detail page, additional improvements

### Extended Features
(Branch: feature/additional-improvement)
- [X] **Type List Page** Display all Pokémon types with click-through to a type-specific details page
- [X] **Type Details Page** Show effectiveness against other types


## Phase 3 - Enhancements & Infrastructure
- Server connection, accessibility improvements, Cypress E2E tests, CI/CD setup, documentation optimization

### Server
(Branch: feature/express-api)
- [X] Setup **Express.js** server
- [X] Connect server to PokéAPI
- [X] Performance Improvement after connecting Express

### Accessibility
(Branch: feature/accessibility)
- [X] Run **WAVE accessibility** checks

### Testing
(Branch: feature/cypress)
- [X] Start up Cypress
- [X] Write Search test
- [X] Write favorite test

### CI/CD - GitHub Actions
(Branch: feature/gitHub-actions)
- [X] Setup **GitHub Actions** for automated testing and deployment
- [X] Add workflow file `.github/workflows/ci.yml`
- [X] Add EsLint to GitHub Actions
- [X] Resolve Jest conflicts caused by Cypress installation
- [X] Adjust Cypress setup after resolving Jest conflicts
- [X] Integrate Jest tests into GitHub Actions workflow
- [X] Integrate Cypress tests into GitHub Actions workflow
- [X] Automatic deployment to Vercel via GitHub Actions

### Documentation enhancement
(Branch: feature/documentation)
- [ ] **Update Documentation** README and Planning
- [ ] Update **Storybook** documentation

---

This plan will be iteratively updated based on progress and requirements.
