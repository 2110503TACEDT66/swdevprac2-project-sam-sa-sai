import CampgroundCatalog from "@/components/CampgroundCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
  success: true,
  count: 3,
  pagination: {},
  data: [
    {
      _id: "6601a128c6b2856572788642",
      name: "Camp Meating Hub",
      address: "San Phak Wan",
      district: "Mueang Chiang Mai",
      province: "Chiang Mai",
      region: "Thailand",
      postalcode: "50000",
      tel: "0800505900",
      url: "https://www.chiangmaicitylife.com/clg/see-do/outdoor-life/camp-meating-hidden-camp-of-chiang-mai/",
      maxReservations: 5,
      coverpicture:
        "https://drive.google.com/uc?id=1QE7zriq5cZ5I0zDst7rooBwdjjKVspSK",
      picture: [
        "https://drive.google.com/uc?id=1XR5aVCCIxxc_OdEUNJgZk1v-LziLd2eA",
        "https://drive.google.com/uc?id=14_ndF0r3JzgQYmydtjuxrfBsuhlLRux0",
        "https://drive.google.com/uc?id=1wie8MjGFHHRzxDPCY5PFtoMLJFy9pATK",
        "https://drive.google.com/uc?id=1Oi79UN_Y3Xt1Qka44hGFbI_R_ALn5FVv",
        "https://drive.google.com/uc?id=1YmP5s6oK4DFm-Hq2dLyDEQIu6OQT_cff",
      ],
      description:
        "Ex corporis sint dolorum in omnis. Ut maxime harum quam in recusandae itaque quo. Deleniti et accusantium dolorem quo.",
      __v: 0,
      price: 1000,
      rating: 5,
      reservations: [
        {
          _id: "6603ed4a942904c763119175",
          apptDate: "2024-03-29T17:00:00.000Z",
          user: "6602a2f8051d0514cfe27024",
          campground: "6601a128c6b2856572788642",
          createdAt: "2024-03-28T11:36:02.762Z",
          __v: 0,
        },
        {
          _id: "660555861582d26ba3257f41",
          apptDate: "2024-04-09T17:00:00.000Z",
          user: "6602a2f8051d0514cfe27024",
          campground: "6601a128c6b2856572788642",
          createdAt: "2024-03-28T11:33:26.172Z",
          __v: 0,
        },
        {
          _id: "66055615186df42dd60699af",
          apptDate: "2024-03-29T17:00:00.000Z",
          user: "66052fb8279f6b96e39562ce",
          campground: "6601a128c6b2856572788642",
          createdAt: "2024-03-28T11:35:49.258Z",
          __v: 0,
        },
      ],
      id: "6601a128c6b2856572788642",
    },
    {
      _id: "6601b970c6b2856572788656",
      name: "Hintok River Camp",
      address: "Mae Sa",
      district: "Mueang",
      province: "Mae Hong Son",
      region: "Thailand",
      postalcode: "58000",
      tel: "0626425497",
      url: "https://www.hintokrivercamp.com/th/",
      maxReservations: 5,
      coverpicture:
        "https://drive.google.com/uc?id=1UfvfOeP6W5rolvMCzKPoKVoQ3HC7dsR5",
      picture: [
        "https://drive.google.com/uc?id=1Q6dxrXXi52_vITxsM3xpA1bAiaxbnxsh",
        "https://drive.google.com/uc?id=14tShrCE6kkmHqjdXKtdp0BttV5Qo3hEV",
        "https://drive.google.com/uc?id=1cPN2KxJExjck-v6gAI-PaYnLUtoIQqKG",
        "https://drive.google.com/uc?id=1Vx7XOMngBGSvHcPPZspCYpYpxeTv21Sb",
        "https://drive.google.com/uc?id=1Yv7XyyuGcq0UvcBUlT6vjjrjfnncwiHN",
      ],
      description:
        "Ipsam facilis sunt quae maxime sed eum atque. Ut ut consequatur soluta magni sunt fugit sunt. Ut ipsum quis. Quo corporis numquam iure enim culpa. Sunt voluptatibus animi sed qui ea.",
      __v: 0,
      price: 1650,
      rating: 3,
      reservations: [
        {
          _id: "660553fc56c52a032c7b210a",
          apptDate: "2099-05-21T17:00:00.000Z",
          user: "660552e34df4cd21e95ddd46",
          campground: "6601b970c6b2856572788656",
          createdAt: "2024-03-28T11:30:15.070Z",
          __v: 0,
        },
      ],
      id: "6601b970c6b2856572788656",
    },
    {
      _id: "6601ac47c6b285657278864d",
      name: "Khao Sok Riverside Cottages",
      address: "Kanchanadit",
      district: "Krabi",
      province: "Krabi",
      region: "Thailand",
      postalcode: "81130",
      tel: "0836657210",
      url: "https://www.khao-sok-riverside-cottages.com/",
      maxReservations: 5,
      coverpicture:
        "https://drive.google.com/uc?id=1MBM6zvahIoVPPmFwOZnpHE4cGjHHHDIM",
      picture: [
        "https://drive.google.com/uc?id=1GVHgIx2vnVyR9tT0FBIrTIpuUghkNfiL",
        "https://drive.google.com/uc?id=1dDlAQba6Jo1RwV97PHFTTPZ_4OKs-lEV",
        "https://drive.google.com/uc?id=12VIbqwATU97ED3LOt9uI7RdNd0XbkrlJ",
        "https://drive.google.com/uc?id=1c_glH9akmvIOW4Fr2kP3GGN1HoW-kv7p",
        "https://drive.google.com/uc?id=1oavNpehfe0NPdN1ulQ0sIhFv32bEd-dD",
      ],
      description:
        "Perspiciatis quaerat deserunt ratione occaecati commodi et nisi temporibus nihil. Dolores voluptatem suscipit repellat non. Laboriosam repudiandae porro nisi fugit voluptatem expedita fuga qui. Facilis sed impedit totam cupiditate est laudantium.",
      __v: 0,
      price: 4000,
      rating: 2,
      reservations: [],
      id: "6601ac47c6b285657278864d",
    },
  ],
};

describe("CampgroundCatalog", () => {
  it("should have correct number of car iamges", async () => {
    const campgroundCatalog = await CampgroundCatalog({
      campgroundJson: mockResult,
    });
    render(campgroundCatalog);

    await waitFor(() => {
      const campgroundImages = screen.queryAllByRole("img");
      expect(campgroundImages.length).toBe(3);
    });
  });
});
