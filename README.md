# Lifecycle Bindings for Node.js

## Installation
``` bash
npm install lifecycle
```

## Documentation
Check out the official documentation at https://www.lifecycle.io/docs/campaign.

## API Overview
Identify and Track users via your `lifecycle` instance.

### Identify
Identify users to create, add, and update attributes to user data stored with Lifecycle.
``` js
var lifecycle = require('lifecycle');
lifecycle.identify(uniqueId, [defaultAttributes], [extraAttributes], callback);
```

##### Arguments
**uniqueId** (String): *required*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your unique identifier for the user  
**defaultAttributes** (Object): *optional*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***first_name*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first name of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***last_name*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last name of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***email_address*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The email address of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***phone_number*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The phone number of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***apns_token*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The apns token of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***gcm_token*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The gcm token of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***browser_token*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The browser token of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***street_address*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The street address of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***city*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The city of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***state*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The state of the user  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***zip_code*** (String)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The zip code of the user  
**extraAttributes** (Object): *optional*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any other identifiers you use  
**callback** (Function): *required*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Returns error or result

### Track
Track your events and the users who trigger them.
``` js
var lifecycle = require('lifecycle');
lifecycle.track(eventId, uniqueId, [properties], callback);
```

##### Arguments
**eventId** (String): *required*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name of your event  
**uniqueId** (String): *required*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your unique identifier for the user  
**properties** (Object): *optional*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any properties associated with your event  
**callback** (Function): *required*  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Returns error or result

## Configuration
Set the environment variable `LIFECYCLE_API_KEY` before running your app:
``` bash
export LIFECYCLE_API_KEY='{YOUR_API_KEY}'
```
*Note: On Windows use `SET` instead of `export` for setting the `LIFECYCLE_API_KEY` environment variable.*

## License
This package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).