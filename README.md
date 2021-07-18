# users_app
A simple app, written with the VueJs framework, for testing a CI/CD pipeline

## Tagging
I'm using a prebuilt tagging action that uses an angular standard syntax. A tag will be created by bumping a value from a previous tag if the commit message follows a set pattern:

`fix(pencil): ...` <- hotfix version bump

`feat(pencil): ...` <- minor (non-breaking) change

`perf(pencil): ...` <- major (breaking) change
