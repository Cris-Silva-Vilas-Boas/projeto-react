import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import DragonsMock from '../repositories/Dragons';
import '@testing-library/jest-dom/extend-expect';

describe("Post Dragon", () => {
    let mock : any;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {

    it("should register a dragon", async () => {
      
      mock.onPost(`/api/v1/dragon`).reply(201, {
        dragons: [
            ...DragonsMock
          ],
        });
                
      await axios.post(`/api/v1/dragon`)
        .then((response) => {
          expect(response.status).toEqual(201);
      })
    })
  })
})
