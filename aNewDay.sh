#!/bin/bash

clear

echo "Creating and populating new directory for today's JavaScript project."
cd javascriptDailyProject
mkdir DayBlah

cd DayBlah
NEW_PROJECT_DIRECTORY="$PWD"
echo "Now in $NEW_PROJECT_DIRECTORY"

mkdir javascript
echo "Coping jasmine files for testing."
JASMINE_DIR=/c/Users/Tyler/Documents/WebDev/jasmine-standalone-2.0.0
cp -r "$JASMINE_DIR" "$NEW_PROJECT_DIRECTORY"/javascript

mkdir css
echo "Coping Boostrap files for styling."
BOOTSTRAP_DIR=/c/Users/Tyler/Documents/WebDev/bootstrap-3.1.1-dist
cp -r "$BOOTSTRAP_DIR" "$NEW_PROJECT_DIRECTORY"/css

echo "Copying dayBlah.html"
HTML_DIR=/c/Users/Tyler/Documents/WebDev/dayBlah.html
cp "$HTML_DIR" "$NEW_PROJECT_DIRECTORY"

echo "Your directory has been created and populated."