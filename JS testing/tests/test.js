chai.use(require('chai-json-pattern').default); 
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.config.truncateThreshold = 1000;
describe('GET', function() {
  describe('get users', function() {
    it('get user should return list of users', function(done) {
      	chai.request('https://reqres.in')
            .get('/api/users')
            .end((err, res) => {
                const pattern = `
      			{
        			"page": 1,
        			"data": [{
          			"id": 1,
          			"email": String,
          			...
        			},
        			...],
        			...
      			}`;
      			
            done();
            });
    });
  });
});

