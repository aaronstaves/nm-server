# nm-server

REST backend express server for nm-web. The server proxies to [The TVDB API](https://api.thetvdb.com/swagger) to search shows and display various information relating to the show found.

[DEMO](http://nm-demo.aarons.io)


## Setup
You will need an API key setup from the TVDB.  You can find out how to acquire one [here](https://www.thetvdb.com/?tab=apiregister).  Once you have one just add it to the default.json
```
cp config/default.json.example
config/default.json

# edit file and replace with your API key
vi config/default.json
```

## Build Setup
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn run dev

# build for production with babel 
yarn run build
```


## Deployment
To deploy you can use [nm-ansible](https://github.com/aaronstaves/nm-ansible).  Be sure to specifically look at the [files](https://github.com/aaronstaves/nm-ansible/tree/master/roles/nm-server/files) and edit them to your liking.

## Related Projects
[nm-ansible](https://github.com/aaronstaves/nm-ansible) - Ansible playbooks used to deploy this project

[nm-web](https://github.com/aaronstaves/nm-web) - VueJS frontend that provides access to nm-server
