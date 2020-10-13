import { expect, server, BASE_URL } from './setup';

describe('Users', () => {
  it('add users', (done) => {
    const data = { stravaid: 'idforUser', refreshtoken: 'tokenforUser' };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        res.body.users.forEach((user) => {
          expect(user).to.have.property('stravaid');
          expect(user).to.have.property('refreshtoken');
        });
        done();
      });
  });
});
