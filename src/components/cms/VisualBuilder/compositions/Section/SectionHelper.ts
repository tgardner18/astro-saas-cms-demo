import { CompositionStructureNode } from "../../../../../services/graphql/__generated/sdk.ts";
import { getDictionaryFromDisplaySettings } from "../../../../../services/shared/displaySettingsHelpers.ts";

export function getSectionStyles(grid: CompositionStructureNode): string[] {
  const displaySettings = grid.displaySettings;
  const dictionary = getDictionaryFromDisplaySettings(displaySettings);

  console.log(dictionary);
  let cssClasses: string[] = [];
  switch (grid.displayTemplateKey) {
    case "DefaultGrid":
      switch (dictionary["gridWidth"]) {
        case "default":
        case "full":
          cssClasses.push("max-w-full");
          break;
        case "narrow":
          cssClasses.push("max-w-xl");
          break;
        case "wide":
          cssClasses.push("max-w-4xl");
          break;
      }
      switch (dictionary["vSpacing"]) {
        case "default":
          cssClasses.push("my-8");
          break;
        case "small":
          cssClasses.push("my-4");
          break;
        case "large":
          cssClasses.push("my-16");
          break;
      }
      switch (dictionary["sectionColor"]) {
        case "black":
          cssClasses.push("bg-gray-950");
          break;
        case "blue":
          cssClasses.push("bg-blue-700");
          break;
        case "large":
          cssClasses.push("my-12");
          break;
      }
      break;
    default:
      cssClasses.push("vb:NoStyles");
      break;
  }

  return cssClasses;
}
