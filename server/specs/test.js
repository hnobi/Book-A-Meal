import supertest from 'supertest';
import chai from 'chai';
import app from './../app';

const { expect } = chai;
const request = supertest(app);


describe('All test cases for Book-A-Meal application', () => {
  describe('Test for invalid routes path', () => {
    it('should fail to load Book_A-Meal application home page', (done) => {
      request.get('/home')
        .set('Accept', 'application/json')
        .expect(404)
        .end((err, res) => {
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal('Failed');
          expect(res.body.message).deep.equal('Page not found');
          if (err) done(err);
          done();
        });
    });
    it('Should fail to get the route path', (done) => {
      request.get('/api/v1')
        .set('Accept', 'application/json')
        .expect(404)
        .end((err, res) => {
          expect(res.body).deep.equal({
            status: 'Failed',
            message: 'Page not found'
          });
          if (err) done(err);
          done();
        });
    });
  });
  describe('Test case for loading application home page', () => {
    it('Should load application home page', (done) => {
      request.get('/')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).deep.equal({
            message: 'Welcome to Book-A-Meal'
          });
          if (err) done(err);
          done();
        });
    });
  });
  describe('All test cases for adding menu for the day', () => {
    it('Should  create a menu for a specific day and return `201` status code', (done) => {
      request.post('/api/v1/menu')
        .set('Content-Type', 'application/json')
        .send({
          title: 'tasty fried series',
          meals: 'friend rice,jollof rice,shawama',
          date: '12-4-2017'
        })
        .expect(201)
        .end((err, res) => {
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Successfully added new menus');
          if (err) done(err);
          done();
        });
    });
    it('Should  return `400` status code with error message', (done) => {
      request.post('/api/v1/menu')
        .set('Content-Type', 'application/json')
        .send({})
        .expect(400)
        .end((err, res) => {
          expect(res.body).deep.equal({
            message: 'All or some of the field is/are undefined'
          });
          if (err) done(err);
          done();
        });
    });
  });
  describe('Test cases for getting all menu', () => {
    it('Should get all menus', (done) => {
      request.get('/api/v1/menu')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a('array');
          if (err) done(err);
          done();
        });
    });
  });
  describe('Test case for getting all meal', () => {
    it('Should list all available meal', (done) => {
      request.get('/api/v1/meal')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a('array');
          if (err) done(err);
          done();
        });
    });
  });


  describe('All test cases for updating a meal', () => {
    it('should return `200` status code with `res.body` success messages', (done) => {
      request
        .put('/api/v1/meal/1')
        .set('Content-Type', 'application/json')
        .send({
          title: 'rice',
          description: ' beans rice with a good taste',
          price: 365,
          menuId: 3
        })
        .expect(200)
        .end((err, res) => {
          expect('Success').to.equal(res.body.status);
          expect('Successfully updated  a Meal').to.equal(res.body.message);
          if (err) done(err);
          done();
        });
    });
  });
});

