import {
  BlankExperience,
  Locales,
} from "../../../../services/graphql/__generated/sdk.ts";
import { getOptimizelySdk } from "../../../../services/graphql/getSdk.ts";
import { ContentPayload } from "../../../../services/shared/ContentPayload.ts";

export async function getSeoData(
  isExperienceType: boolean,
  isPageType: boolean,
  previewPayload: ContentPayload,
) {
  let metaTitle: string = "",
    metaDescription: string = "";

  if (isExperienceType || isPageType) {
    const metaResponse = await getOptimizelySdk(
      previewPayload.ctx,
    ).getExperienceSeo({
      key: previewPayload.key,
      ver: previewPayload.ver,
      loc: previewPayload.loc as Locales,
    });
    if (
      metaResponse?._Experience?.items[0]?._metadata?.types?.includes(
        "BlankExperience",
      )
    ) {
      const blankExperience = metaResponse?._Experience
        ?.items[0] as BlankExperience;
      metaTitle = blankExperience?.BlankExperienceSeoSettings?.MetaTitle || "";
      metaDescription =
        blankExperience?.BlankExperienceSeoSettings?.MetaDescription || "";
    }
  }
  return { metaTitle, metaDescription };
}
