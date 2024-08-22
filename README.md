<p align="center">
  <img src="https://svgl.app/library/vue.svg" width="20%" alt="VUE-START-logo">
</p>
<p align="center">
    <h1 align="center">VUE-START</h1>
</p>
<p align="center">
    <em>Transforming Vue projects with boundless creativity.</em>
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/romanhrynevych/vue-start?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
  <img src="https://img.shields.io/github/last-commit/romanhrynevych/vue-start?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/romanhrynevych/vue-start?style=default&color=0080ff" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/romanhrynevych/vue-start?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
  <!-- default option, no dependency badges. -->
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
    - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

Vue-start is a comprehensive Vue project setup tool that facilitates efficient Vue app development. It seamlessly integrates TypeScript, Vite, Vue Router, and i18n to enhance code quality and development experience. With pre-configured linting, routing, and global components, Vue-start accelerates project initiation and maintains consistency in styling and type safety. This open-source project simplifies Vue app setup and empowers developers to focus on building robust, scalable applications.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Vite setup with TypeScript for efficient Vue.js development. Separated layouts, components, and services for clear project structure. |
| 🔩 | **Code Quality**  | Strict ESLint rules with tailored configuration for code consistency. Strong type-checking with TypeScript. |
| 📄 | **Documentation** | Detailed comments in code files, README.md for setup and usage instructions. |
| 🔌 | **Integrations**  | Vite, Vue Router, Vue I18n, Tailwind CSS, Pinia for state management. |
| 🧩 | **Modularity**    | Components, layouts, services separated for reusability. Global types and enums for structured data handling. |
| 🧪 | **Testing**       | Jest for unit tests, E2E testing setup missing. |
| ⚡️  | **Performance**   | Vite for fast development and build times. Optimal code structure for efficient rendering. |
| 🛡️ | **Security**      | Authentication flow with token management. Zod for data validation. |
| 📦 | **Dependencies**  | Dependencies on Vite, Vue.js, Tailwind CSS, Zod, vee-validate, i18n libraries. |
| 🚀 | **Scalability**   | Structured codebase supports scalability. Vuex or alternative for complex state management could be considered. |

---

##  Repository Structure

```sh
└── vue-start/
    ├── .github
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── auto-imports.d.ts
    ├── commitlint.config.ts
    ├── components.d.ts
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── public
    │   └── favicon.svg
    ├── shims.d.ts
    ├── src
    │   ├── @core
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── composables
    │   ├── constants
    │   ├── defaults
    │   ├── enums
    │   ├── i18n
    │   ├── icons
    │   ├── layouts
    │   ├── main.ts
    │   ├── pages
    │   ├── plugins
    │   ├── schemas
    │   ├── services
    │   ├── store
    │   ├── types
    │   ├── utils
    │   └── vite-env.d.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── typed-router.d.ts
    └── vite.config.ts
```

---

##  Modules

<details open><summary>.</summary>

| File | Summary |
| --- | --- |
| [postcss.config.js](https://github.com/romanhrynevych/vue-start/blob/main/postcss.config.js) | Implements unit parsing and responsive font sizing using a CSS clamp function. Enables dynamic font scaling within specified screen width ranges. |
| [typed-router.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/typed-router.d.ts) | Defines auto-generated route names and configurations for the Vue router in the Vue project. Ensures correct typings and structure for routing within the application. Vital for maintaining consistency and accuracy in routing functionalities across the project. |
| [tsconfig.node.json](https://github.com/romanhrynevych/vue-start/blob/main/tsconfig.node.json) | Enables Node-specific TypeScript compilation with ESNext modules and strict type checking, contributing to seamless integration within the Vite setup. |
| [eslint.config.js](https://github.com/romanhrynevych/vue-start/blob/main/eslint.config.js) | Configures ESLint with @antfu/eslint-config and tailwindcss plugin, extending recommended configs. Disables custom class rule, specifies Tailwind config, and whitelist callees for dynamic class names. Enhances code quality and enforces consistent styling in Vue project. |
| [tsconfig.json](https://github.com/romanhrynevych/vue-start/blob/main/tsconfig.json) | Configures TypeScript settings for Vite bundler, enabling strict type-checking and module resolution for the Vue project. Handles paths aliases, defines type dependencies, and references TypeScript files for compilation, enhancing code quality and project organization. |
| [pnpm-lock.yaml](https://github.com/romanhrynevych/vue-start/blob/main/pnpm-lock.yaml) | Code SummaryThis code file `auto-imports.d.ts` in the `vue-start` repository serves a crucial role in automatically importing TypeScript type definitions for components throughout the project. By centralizing these import statements, it ensures consistency in type declarations and enhances the maintainability of the codebase. This feature simplifies the development process for engineers working on Vue components by providing a standardized approach for managing TypeScript type imports. |
| [package.json](https://github.com/romanhrynevych/vue-start/blob/main/package.json) | The package.json file defines project dependencies, scripts for development tasks, and version compatibility settings. It plays a pivotal role in managing the projects build, linting, and release processes within the Vue-start repository structure. |
| [vite.config.ts](https://github.com/romanhrynevych/vue-start/blob/main/vite.config.ts) | Orchestrates Vite configuration for Vue app-Auto-imports, Vue Router, Vue DevTools, layouts, components, Vue I18n, and TypeScript checker plugins-Defines aliases and server settings to streamline development environment. |
| [commitlint.config.ts](https://github.com/romanhrynevych/vue-start/blob/main/commitlint.config.ts) | Defines commitlint configuration extending conventional rules, customizable ignores, prompts, and help URL for commit message linting. Enhances consistency and clarity in Git commit messages. |
| [shims.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/shims.d.ts) | Defines Vue component types for editor linting integration and third-party libraries Vue Prism Component and Vue Shepherd in the parent repositorys Vue.js project structure. |
| [index.html](https://github.com/romanhrynevych/vue-start/blob/main/index.html) | Defines the main structure of the Vue Start app, including the title and viewport meta tags. Links the main TypeScript file to initialize the application and sets up the favicon. |
| [auto-imports.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/auto-imports.d.ts) | The `auto-imports.d.ts` file in the `vue-start` repository serves as a configuration file that suppresses linting errors and enables type checking for specific code sections. By disabling ESLint, Prettier, and TypeScript checks, this file allows for flexibility in managing imports without strict adherence to coding standards and type safety. It plays a crucial role in customizing the linting and type checking behavior within the projects architecture. |
| [tailwind.config.ts](https://github.com/romanhrynevych/vue-start/blob/main/tailwind.config.ts) | Defines Tailwind CSS configuration with custom theme colors, typography, ARIA attributes, and animations for scoped UI components. Integrates container queries and animate plugin, enabling responsive design and intuitive interactions. Encapsulates design system principles while tailoring styles for project components. |
| [components.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/components.d.ts) | Defines global components for Vue, specifying imports for key components. Facilitates component usage across the project, enhancing code organization and maintainability. Integrates with Vue Router and custom UI components for seamless development experience. |

</details>

<details open><summary>src</summary>

| File | Summary |
| --- | --- |
| [vite-env.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/vite-env.d.ts) | Defines Vite client types to enable seamless development environment integration within the Vue project. Enhances Vite build tool functionality and optimizes the development workflow for increased productivity and smoother debugging. |
| [App.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/App.vue) | Implements UI components and routing logic for the Vue application. Renders UiSonner component and manages the dynamic rendering of different views through RouterView. Key for UI/UX navigation in the Vue application architecture. |
| [main.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/main.ts) | Initializes Vue app with plugins, i18n setup, and global assets. Registers core plugins, mounts the app, and initializes i18n. Builds app structure using Vue components and utilities from the specified paths in repository structure. |

</details>

<details open><summary>src.schemas</summary>

| File | Summary |
| --- | --- |
| [auth.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/schemas/auth.ts) | Defines authentication schemas for registration, login, and code verification. Utilizes Zod for type validation. Contributes to enforcing data integrity and consistency within the Vue apps authentication flow. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/schemas/index.ts) | Exports auth schema from the schemas module to facilitate structured data handling in the Vue project. |

</details>

<details open><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [HelloClient.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/components/HelloClient.vue) | Displays Vue Start in a large, bold font. |

</details>

<details open><summary>src.components.ui.language-toggle</summary>

| File | Summary |
| --- | --- |
| [UiLanguageToggle.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/components/ui/language-toggle/UiLanguageToggle.vue) | Enables users to toggle between available languages in the UI. Renders a dropdown with language options and updates the UI language based on user selection. Contributes to creating a multilingual user experience in the Vue application. |

</details>

<details open><summary>src.components.ui.button</summary>

| File | Summary |
| --- | --- |
| [UiButton.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/components/ui/button/UiButton.vue) | Enables dynamic rendering of customizable button components with loading state and block-level display in the Vue.js application. Utilizes type-safe props and variant styling to enhance UI flexibility and reusability. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/components/ui/button/index.ts) | Defines button variants with specific styles for different variants and sizes, enhancing UI consistency across the application. |

</details>

<details open><summary>src.components.ui.sonner</summary>

| File | Summary |
| --- | --- |
| [UiSonner.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/components/ui/sonner/UiSonner.vue) | Implements a custom notification component with Vue-Sonner integration. Renders styled toasts at the top-right, enhancing user experience with customizable toast options to display messages elegantly. |

</details>

<details open><summary>src.layouts</summary>

| File | Summary |
| --- | --- |
| [default.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/layouts/default.vue) | Defines default layout for app with logo, language toggle, and router view. Organizes content in centered, vertically aligned manner. Key feature is the usage of Vue Router for dynamic content rendering. |
| [empty.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/layouts/empty.vue) | Empowers a layout to display a logo and dynamic content in a flexible, centered design. It enhances user experience by rendering content within a responsive and visually appealing structure. |

</details>

<details open><summary>src.icons</summary>

| File | Summary |
| --- | --- |
| [setup.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/icons/setup.ts) | Registers a custom icon collection for the turbo prefix in the Vue application. This setup file defines a unique loader icon with specified dimensions and styling properties to enhance the visual experience across the repository's user interface components. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/icons/index.ts) | Exports Icon component and its props for Vue project from @iconify/vue, centralizing icon functionality for consistent usage throughout the repository's frontend architecture. |

</details>

<details open><summary>src.@core.utils</summary>

| File | Summary |
| --- | --- |
| [plugins.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/@core/utils/plugins.ts) | Facilitates dynamic registration of Vue plugins from the `src/plugins` directory in the Vue app. Enhances code modularity and extensibility by automating the plugin registration process, following a structured approach akin to Nuxt. |

</details>

<details open><summary>src.enums</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/enums/index.ts) | Exports enums related to mock data for easy access across the Vue project. The file simplifies the usage and management of mock data by exposing them through a single entry point. |
| [mock.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/enums/mock.ts) | Defines mock and test values in an Enums file. |

</details>

<details open><summary>src.pages</summary>

| File | Summary |
| --- | --- |
| [index.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/pages/index.vue) | Defines page metadata and components for the default layout. Renders the HelloClient component and displays translated text. Enforces unauthenticated access restriction. |
| [login.vue](https://github.com/romanhrynevych/vue-start/blob/main/src/pages/login.vue) | Defines login page metadata for the authentication layout with restricted access. Displays a simple login form component organized within the Vue.js-based projects structured src/pages' directory. |

</details>

<details open><summary>src.types</summary>

| File | Summary |
| --- | --- |
| [google-auth.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/google-auth.ts) | CredentialPopupResponse`, `TokenPopupResponse`, `CodePopupResponse`, `ErrorPopupResponse`. Specifies key properties like client ID, credentials, access token, errors, and user prompts. |
| [user.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/user.ts) | Defines the structure for a User entity with properties like UUID, avatar, first/last name, telephone, and email. This file plays a crucial role in standardizing user data representation across the applications various modules. |
| [auth.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/auth.ts) | GeneralResponse for messages and success status, ErrorResponse extends GeneralResponse with error strings, and Auth for token details. Integrates with the Vue projects API and store modules. |
| [helpers.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/helpers.ts) | Enhances TypeScript types for @tanstack/vue-table, providing paths to nested properties, removing readonly fields, prettifying objects, creating optional properties. Improves intellisense and readability for defining table columns. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/index.ts) | Exports authentication, general, helper, user types, and Google authentication related types from separate files in the src/types directory, simplifying type management and ensuring centralized access across the Vue project. |
| [general.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/types/general.ts) | Defines SelectOption and Pagination interfaces for managing data and pagination in Vue components within the repository. |

</details>

<details open><summary>src.defaults</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/defaults/index.ts) | Exports general default values for the project from the defaults module within the Vue Start repositorys source directory. |
| [general.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/defaults/general.ts) | Defines default country as UK for global settings and configurations. Centralizes default values for internationalization and localization throughout the Vue project. |

</details>

<details open><summary>src.composables</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/composables/index.ts) | Orchestrates reusable logic across Vue components for enhanced maintainability. Encapsulates shared functionality and state management concerns to promote code reusability and scalability in the Vue application architecture. |

</details>

<details open><summary>src.services</summary>

| File | Summary |
| --- | --- |
| [auth.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/services/auth.ts) | Defines authentication service functions for sending and verifying codes, Google login, token verification, and refresh, as well as user registration. It interacts with the API to manage user authentication processes within the Vue.js web application. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/services/index.ts) | Handles API authentication and token refreshing dynamically. Uses ofetch library, checks token expiration, refreshes tokens, and handles unauthorized errors. Integrated with Auth Store and Router. |

</details>

<details open><summary>src.i18n.mock</summary>

| File | Summary |
| --- | --- |
| [uk.json](https://github.com/romanhrynevych/vue-start/blob/main/src/i18n/mock/uk.json) | Defines mock translations for the Ukrainian language in the i18n module. |
| [en.json](https://github.com/romanhrynevych/vue-start/blob/main/src/i18n/mock/en.json) | Defines mock data for the i18n module, containing localized strings for testing purposes. |

</details>

<details open><summary>src.plugins.3-i18n</summary>

| File | Summary |
| --- | --- |
| [vue-i18n.d.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/3-i18n/vue-i18n.d.ts) | Defines i18n resources using TypeScript interfaces in Vue.js project for type safety. Enables defining locale messages with imported interfaces, enhancing i18n management within the app. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/3-i18n/index.ts) | Enables internationalization support with custom pluralization rules. Initializes and provides a global Vue instance with localization settings based on environmental variables. Integrates Vue I18n plugin to manage multilingual content efficiently in the Vue application. |

</details>

<details open><summary>src.plugins.1-router</summary>

| File | Summary |
| --- | --- |
| [guards.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/1-router/guards.ts) | Defines navigation guards for Vue Router ensuring authentication and access control, redirecting users based on login status and route permissions. Handles public routes and redirects users to the login page if necessary. Improves user experience and security in the web application. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/1-router/index.ts) | Implements Vue router with dynamic layouts and smooth scrolling behavior. Integrates routes, layouts generated at build time, and navigation guards. Enables seamless navigation within the Vue app. |

</details>

<details open><summary>src.plugins.2-pinia</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/2-pinia/index.ts) | Implements Pinia store with persisted state plugin for Vue app, enhancing state management and persistence. Integrates Pinia with Vue app for global state management via a plugin. |

</details>

<details open><summary>src.plugins.4-tanstack-queries</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/plugins/4-tanstack-queries/index.ts) | Enables Vue integration with @tanstack/vue-query via a plugin to enhance query management capabilities within the repositorys architecture. |

</details>

<details open><summary>src.constants</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/constants/index.ts) | Defines essential constants used throughout the Vue application. Centralizes configuration values for easy access and maintenance. Supports consistent usage and easy updates across different parts of the codebase. |

</details>

<details open><summary>src.utils</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/index.ts) | Exports utility functions for general purposes, toast notifications, schema validation with Zod, phone number formatting, and Tailwind CSS integration to enhance code modularity and reusability in the Vue Start repository architecture. |

</details>

<details open><summary>src.utils.tailwind</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/tailwind/index.ts) | Enhances Tailwind CSS utility classes merging for dynamic font sizes, leveraging Tailwind Merge and the projects preset config. |

</details>

<details open><summary>src.utils.toast</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/toast/index.ts) | Implements promise-based toast notifications. Handles loading, success, and error states with custom components. Integrated with vue-sonner for toast display. Enhances user experience during asynchronous operations. |

</details>

<details open><summary>src.utils.zod</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/zod/index.ts) | Initialize i18n localization for Zod validation messages by syncing with Vue locale changes. Import i18n resources for English and French languages. Implement custom error messages mapping and language switching logic. |

</details>

<details open><summary>src.utils.general</summary>

| File | Summary |
| --- | --- |
| [string.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/general/string.ts) | Implements string manipulation functions for text capitalization and title casing in the Vue projects utility module. Enhances UI readability and consistency throughout the application by standardizing text formatting. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/general/index.ts) | Exports utility functions for handling strings and generating unique IDs for use throughout the Vue application. Facilitates code reusability and maintainability by providing a centralized location for commonly used general-purpose functions. |
| [id.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/general/id.ts) | Generates unique IDs for entities using nanoid library, one alphanumeric and another using custom letters. Enhances application by ensuring globally unique identifier generation. |

</details>

<details open><summary>src.utils.phonenumber</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/utils/phonenumber/index.ts) | Extracts phone data using libphonenumber-js, providing details like country code, carrier code, validity, and formatting. Enhances phone number input functionality for internationalization within the Vue application's utility module. |

</details>

<details open><summary>src.store</summary>

| File | Summary |
| --- | --- |
| [auth.store.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/store/auth.store.ts) | Implements authentication state management including login, logout, and authentication verification. Utilizes local storage for persistent storage of user authentication details. |
| [index.ts](https://github.com/romanhrynevych/vue-start/blob/main/src/store/index.ts) | Exports authentication store for seamless authentication handling across components, services, and plugins in the Vue project. Centralizes state management and actions related to user authentication, ensuring a consistent user experience throughout the application. |

</details>

<details open><summary>.github.workflows</summary>

| File | Summary |
| --- | --- |
| [release.yml](https://github.com/romanhrynevych/vue-start/blob/main/.github/workflows/release.yml) | Automate GitHub release workflow. Ensures seamless release cycles, including linting, testing, and deploying. Manages versioning, changelogs, and notifications for efficient project maintenance. |
| [auto-sync.yml](https://github.com/romanhrynevych/vue-start/blob/main/.github/workflows/auto-sync.yml) | Automates synchronizing localization changes, ensuring consistency across language files in the Vue project. Scheduled to run on a defined recurring basis. Facilitates streamlined internationalization process and improves project maintainability. |

</details>

---

##  Getting Started

###  Prerequisites

**TypeScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the vue-start repository:
```sh
❯ git clone https://github.com/romanhrynevych/vue-start
```

2. Navigate to the project directory:
```sh
❯ cd vue-start
```

3. Install the required dependencies:
```sh
❯ pnpm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ pnpm run dev
```
