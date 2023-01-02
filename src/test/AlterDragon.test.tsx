import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import DragonsMock from '../repositories/Dragons';
import '@testing-library/jest-dom/extend-expect';

describe("alter dragon", () => {
    let mock : any;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {

    it("should upgrade a dragon", async () => {
      mock.onPut(`/api/v1/dragon/${DragonsMock[0].id}`).reply(200, {id: 1, name: 'Atualizado Dragão 1', createdAt: '23/11/2022', type: "tipo atualizado"});
      await axios.put(`/api/v1/dragon/${DragonsMock[0].id}`)
        .then((response) => {
          expect(response.status).toEqual(200);
          expect(response.data).toEqual({
            id: 1,
            name: 'Atualizado Dragão 1',
            createdAt: '23/11/2022',
            type: 'tipo atualizado'
          });
      })   
    })
  })
})