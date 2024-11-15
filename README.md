# GitHub JsDelivr Hosting Structure for Webflow Site

This README explains the folder structure, naming conventions, and versioning rules for hosting `index.js` on GitHub JsDelivr for your Webflow site. It also includes guidelines for building and deploying updates with Vite.

## Folder Structure

Your hosting directory should be structured as follows:

```
/my-webflow-site
├── /releases
│   ├── /latest        # Always contains the latest build
│   ├── /v1.0.0        # Versioned release folders
│   ├── /v1.1.0
│   ├── /v1.2.0
│   └── /v2.0.0
├── /assets
│   ├── /css           # Static CSS assets
│   ├── /images        # Images used in the site
│   └── /js            # Other JavaScript files if any
└── README.md
```

### Explanation

- **`/releases/latest`**: Contains the latest deployed build files (e.g., `index.js`). Replace files here with each deployment to ensure your live site always reflects the latest version, addressing caching issues by regularly updating this folder.

- **`/releases/vX.X.X`**: Versioned folders to archive all previous releases. Use these versions for fallback if there are issues with the latest.

- **`/assets`**: Contains static files such as CSS, images, and additional JavaScript files that are not specific to any release version.

## Versioning and Update Rules

We use **semantic versioning** to manage release versions. Update the version number as follows:

1. **Patch Update (vX.X.1)**: Use for minor bug fixes or non-breaking changes that do not alter functionality.
2. **Minor Update (vX.1.0)**: For adding new features in a backward-compatible manner.
3. **Major Update (v2.0.0)**: Use this for changes that break backward compatibility or introduce significant structural changes.

For each update:

1. **Run `yarn build`**: Execute this command in your Vite project to generate a new build for deployment.
2. **Update Version Folder**: After building, create a new version folder under `/releases` if required (e.g., `/releases/v1.1.0` for minor updates).
3. **Update `latest`**: Replace the contents of `/releases/latest` with your new build files to ensure that it reflects the latest changes.

## Caching Recommendations

- **latest**: Set a short cache expiration (e.g., 5 minutes) in GitHub JsDelivr for this folder to avoid caching issues.
- **versioned releases**: These folders can have longer cache expirations as they are not expected to change.

## Example Workflow

1. **Make Changes**: Update your code in the Vite project.
2. **Run `yarn build`**: This will generate the updated `index.js` and other necessary files in the `dist` directory.
3. **Determine the Version**:
   - If a patch: e.g., update to `v1.0.1`
   - If a minor feature: e.g., update to `v1.1.0`
   - If a major change: e.g., update to `v2.0.0`
4. **Deploy**:
   - Create a new version folder under `/releases` with the determined version name.
   - Copy the build files to `/releases/latest` and to the appropriate versioned folder.

This README should provide all the necessary steps for a smooth deployment and version control.
