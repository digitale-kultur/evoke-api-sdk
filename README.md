# Evoke API SDK

A lightweight, fully type-safe TypeScript client for the Evoke API, generated from our Go/Huma OpenAPI specification. Uses `openapi-fetch` for a minimal (~5 KB) runtime dependency, making it ideal for our static Jekyll sites and React dashboards.

## 📦 Installation

Install the package directly via GitHub:

```bash
npm install github:digitale-kultur/evoke-api-sdk
```

## 🚀 Usage

The client is pre-configured with the correct base URL. Importing it provides immediate autocompletion for all endpoints, parameters, and payloads.

```typescript
import { evokeApi } from "evoke-api-sdk";

async function fetchCategories() {
  const { data, error } = await evokeApi.GET("/contact/categories");

  if (error) {
    console.error("Failed to load categories:", error);
    return;
  }

  // 'data' is fully typed matching the Go structs
  console.log(data.categories?.[0].title);
}
```

Extract standalone types for state management or UI components:

```typescript
import type { paths } from "evoke-api-sdk";

type CategoryList = paths["/contact/categories"]["get"]["responses"]["200"]["content"]["application/json"]["categories"];
type CategoryItem = NonNullable<CategoryList>[number];
```

## 🛠️ Update Workflow

When the Huma API changes in the Go backend, update this SDK:

1. Replace Spec: Overwrite the `openapi.json` in the root directory with the latest version from the backend.
2. Generate Types:

```bash
npm run generate
npm run build
```

3. Publish: Commit and push the updated `openapi.json` and `src/api-schema.ts` to GitHub.
4. Consume: Re-run `npm install github:digitale-kultur/evoke-api-sdk` in your Jekyll or React projects (or pin a specific tag/commit for reproducible builds).