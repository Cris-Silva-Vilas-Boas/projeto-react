import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import DragonsMock from '../repositories/Dragons';
import '@testing-library/jest-dom/extend-expect';

describe("GetId Dragon", () => {
  let mock : any;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {

    it("should return status code 200 and fetch a dragon", async () => {
      mock.onGet(`/api/v1/dragon/${DragonsMock[0].id}`).reply(200, DragonsMock[0]);
      await axios.get(`/api/v1/dragon/${DragonsMock[0].id}`)
        .then((response) => {
          expect(response.status).toEqual(200);
      })         
    })

    it("should return the dragon", async () => {
      mock.onGet(`/api/v1/dragon/${DragonsMock[0].id}`).reply(200, DragonsMock[0]);
      await axios.get(`/api/v1/dragon/${DragonsMock[0].id}`)
        .then((response) => {
          expect(response.data).toEqual(DragonsMock[0]);
      })         
    })
  })
})
