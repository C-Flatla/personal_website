# Add ssh key to ssh-agent
printf "STARTING ssh-agent\n"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_circle
printf "FINISHED ssh-add\n\n"

# Instead of git pull: https://stackoverflow.com/a/15316602
printf "STARTING git pull\n"
git remote update -p; git merge --ff-only @{u}
printf "FINISHED git pull\n\n"

# Update packages
printf "STARTING npm install\n"
npm install
printf "FINISHED npm install\n\n"

# Build the files to be served
printf "STARTING ng build\n"
ng build --prod
printf "FINISHED ng build\n\n"

# Remove the old version
printf "STARTING rm old version\n"
rm /var/www/codyflatla.ca/html/*
printf "FINISHED rm old version\n\n"

# Copy the new version
printf "STARTING cp new version\n"
cp ./dist/personal-website/* /var/www/codyflatla.ca/html/
printf "FINISHED cp new version\n\n"

printf "ALL DONE!! YAHOO!\n"
