export default class Api{
    constructor(options) {
        this.options = options;
    }

    shortLink(link){
        this.link = link;
        return fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                authorization: 'aa0400aad11d6a934d5063bbb1ddb504f3994352',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                long_url: `${this.link}`,
            }),
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
        
                return Promise.reject(` ${res.status}`);
          })
          .then((data) => {
  
            return data;
          })                  

    }




}