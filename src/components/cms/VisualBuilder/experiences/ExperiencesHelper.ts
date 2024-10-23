import {
  IBlankExperience,
  ILocales,
} from "../../../../services/graphql/__generated/sdk.ts";
import { optiDraftSdk } from "../../../../services/graphql/getSdk.ts";
import { IContentPayload } from "../../../../services/shared/IContentPayload.ts";

export async function getSeoData(
  isExperienceType: boolean,
  isPageType: boolean,
  previewPayload: IContentPayload,
) {
  let metaTitle: string = "",
    metaDescription: string = "";

  if (isExperienceType || isPageType) {
    const metaResponse = await optiDraftSdk.getExperienceSeo({
      key: previewPayload.key,
      ver: previewPayload.ver,
      loc: previewPayload.loc as ILocales,
    });
    if (
      metaResponse?._Experience?.items[0]?._metadata?.types?.includes(
        "BlankExperience",
      )
    ) {
      const blankExperience = metaResponse?._Experience
        ?.items[0] as IBlankExperience;
      metaTitle = blankExperience?.BlankExperienceSeoSettings?.MetaTitle || "";
      metaDescription =
        blankExperience?.BlankExperienceSeoSettings?.MetaDescription || "";
    }
  }
  return { metaTitle, metaDescription };
}
