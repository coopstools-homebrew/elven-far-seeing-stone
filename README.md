# users_app
A simple app, written with the VueJs framework, for testing a CI/CD pipeline

## Tagging
I'm using a prebuilt tagging action that uses an angular standard syntax. A tag will be created by bumping a value from a previous tag if the commit message follows a set pattern:

`fix: ...` <- hotfix version bump

`feat: ...` <- minor (non-breaking) change

`perf: ...` <- major (breaking) change
