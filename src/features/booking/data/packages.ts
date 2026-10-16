/**
 * Packages Data & Re-exports
 *
 * For backward compatibility across the codebase, this module re-exports
 * the typed Package domain types and the development fixtures.
 */

export * from "../types/packages";
export {
  FIXTURE_CATEGORIES as PACKAGE_CATEGORIES,
  FIXTURE_PACKAGES as DEMO_PACKAGES,
  FIXTURE_PROMOTION,
  filterAndPaginateFixturePackages,
} from "./packagesFixture";
