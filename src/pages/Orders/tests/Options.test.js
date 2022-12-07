import { screen, render } from "@testing-library/react";
import Options from "../Options";

describe("Scoop options functionality", () => {
  it("Checks that image for each scoop option is displayed from the server", async () => {
    render(<Options optionTitle="scoops" price={"2"} />);

    // find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // Confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["choclate scoop", "vanilla scoop"]);
  });
});
