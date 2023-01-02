import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import DragonsMock from '../repositories/Dragons';
import '@testing-library/jest-dom/extend-expect';

describe("delete dragon", () => {
    let mock : any;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {

    it("should remove a dragon", async () => {
      mock.onDelete(`/api/v1/dragon/${DragonsMock[0].id}`).reply(204, DragonsMock[0].id);
      await axios.delete(`/api/v1/dragon/${DragonsMock[0].id}`)
        .then((response) => {
          expect(response.status).toEqual(204);
      })   
    })
  })
})