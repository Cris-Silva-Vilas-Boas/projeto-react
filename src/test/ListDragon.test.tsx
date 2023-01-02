import axios from 'axios';
import { fireEvent, screen, render } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import DragonsMock from '../repositories/Dragons';
import '@testing-library/jest-dom/extend-expect';
import List from '../pages/List';
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';

describe("get All Dragons", () => {
    let mock : any;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {

    it("should return the list of dragons", async () => {
      mock.onGet(`/api/v1/dragon`).reply(200, {
        dragons: [
          ...DragonsMock
        ],
      });

      await axios.get(`/api/v1/dragon`).then((response) => {
        expect(response.status).toBe(200);
      })
    })

    it("should return an empty list of dragons", async () => {
      mock.onGet("/api/v1/dragon").reply(200, {});
                
      await axios.get("/api/v1/dragon").then((response) => {
        expect(response.data).toEqual({});
      })
    })   
  })
})