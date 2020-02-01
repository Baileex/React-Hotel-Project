import React from "react";
import renderer from "react-test-renderer";
import { filterHotels } from "../utils/utils";

describe("filterHotels", () => {
  it("returns an array", () => {
    expect(filterHotels([], [])).toEqual([]);
  });
  it("filters hotels by given input", () => {
    expect(
      filterHotels(
        [
          {
            name: "hotelone",
            img:
              "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            starRating: 5,
            facilities: ["car park", "pool"]
          }
        ],
        ["pool", "car park"]
      )
    ).toEqual([
      {
        name: "hotelone",
        img:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        starRating: 5,
        facilities: ["car park", "pool"]
      }
    ]);
    expect(
      filterHotels(
        [
          {
            name: "hotelone",
            img:
              "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            starRating: 5,
            facilities: ["car park", "pool"]
          },
          {
            name: "hoteltwo",
            img:
              "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            starRating: 3,
            facilities: ["car park", "gym"]
          },
          {
            name: "hotelthree",
            img:
              "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            starRating: 3,
            facilities: ["pet friendly"]
          }
        ],
        ["pool", "car park"]
      )
    ).toEqual([
      {
        name: "hotelone",
        img:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        starRating: 5,
        facilities: ["car park", "pool"]
      },
      {
        name: "hoteltwo",
        img:
          "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        starRating: 3,
        facilities: ["car park", "gym"]
      }
    ]);
  });
});
