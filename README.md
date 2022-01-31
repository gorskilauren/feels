# feels
## Vision
Bring some positivity to your internet surfing! Give this site a url and it will analyze the content on the page to "score" its sentiment. URLs with more positive site content will return a higher score.

*Note: Currently `feels` does not scrub the given URL for malicious content. For that reason, `feels` is not hosted "live" anywhere and can only run if this repo is cloned/forked and ran locally.*

## Package Breakdown

### **ui**
Utilize [react framework](https://reactjs.org/) to build simple user interface to drop URLs for analysis.

### **service**
Utilize typescript and [express](https://www.npmjs.com/package/express) to host the backend. The service uses the npm [sentiment](https://www.npmjs.com/package/sentiment) package for scoring the sentiment analysis. The npm [htmlparser2](https://www.npmjs.com/package/htmlparser2) package is used to parse text content from the given url.