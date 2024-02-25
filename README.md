# Mantine Parcel

Small example for a mantine web app.
Both vite and parcel are present, see scripts section in package.json

vite is able to successfully start the application.

parcel fails with `@parcel/transformer-postcss: Cannot read properties of undefined (reading 'input')`.
This is somehow caused by mantine's "light-dark" postcss function, see App.module.css.

