# `Stenaline travel design system (STDS(?))`
## `The foundation`
Stenaline travel design system is created to uphold a common design with standardised functionality between projects.

The design system is built with react and html/css. Please be caution if adding new packages. Use bundlephobia to check package size and please think twice if YOU really need it. This helps a lot ot to keep the package size low and the threshold for other projects to use STDS(?).

## `Bundling`
The packages are bundle in their respective rollup.config.js file. Each file - when this readme was written - are the same. This is done to future proof possible smaller bundle files for each package.

## `Available Packages`
All functional components in every corresponding package folder MUST HAVE a `.test` file.

### `Calendar`

Single and range datepicker with locale support.

> - Datepicker

### `Core`

Components that are used in a wide range of possible implementation. Mainly small building blocks when used together creates a greater whole.

> - Buttons
> - Icon
> - Image
> - Modal
> - Price
> - Tab
> - Text

### `Forms`

Components that are used in forms.

> - Checkbox
> - Dropdown
> - Input
> - Radio
### `Icons`

All icons related to travel.

> - Lots of icons

    Todo - Tree shake like the last apple depends on it.

### `Theme`

Themeing functionality that enables the possbility to theme all other components in `packages`.

> - Theme


<br>


## `Available Scripts`

In the project directory, you can run:

### `yarn build:packages`

Builds all packages under `packages` folder.

### `yarn pre:build:check`

Checks all packages and corrects code with prettier, linting and test packages via `yarn test-packages`.

### `yarn storybook`

Runs storybook locally under port: 6006. Stoybook files are localted under `<rootDir>/__stories__`. Storybook functionality is located under `<rootDir>/.storybook`.

### `yarn publish:all`

Builds `packages` to npm.

### `yarn test:packages`

Runs test (jest & testing-library/react) for all `packages`.
