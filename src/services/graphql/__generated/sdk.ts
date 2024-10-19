import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type IArticleListElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleListCount?: Maybe<Scalars['Int']['output']>;
};


export type IArticleListElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IArticleListElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete?: Maybe<IArticleListElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IArticleListElementFacet>;
  items?: Maybe<Array<Maybe<IArticleListElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IArticleListElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IArticleListElementWhereInput>>>;
};

export type IBlankExperience = IIData & I_IContent & I_IExperience & I_IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings?: Maybe<IPageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type IBlankExperience_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IBlankExperience_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IBlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings?: Maybe<IPageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  composition?: Maybe<ICompositionStructureNodeAutocomplete>;
};

export type IBlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings?: Maybe<IPageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
  composition?: Maybe<ICompositionStructureNodeFacet>;
};

export type IBlankExperienceOrderByInput = {
  BlankExperienceSeoSettings?: InputMaybe<IPageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<ICompositionStructureNodeOrderByInput>;
};

export type IBlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<IBlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IBlankExperienceFacet>;
  items?: Maybe<Array<Maybe<IBlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IBlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IBlankExperienceWhereInput = {
  BlankExperienceSeoSettings?: InputMaybe<IPageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IBlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IBlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IBlankExperienceWhereInput>>>;
  composition?: InputMaybe<ICompositionStructureNodeWhereInput>;
};

export type IBlankSection = IIData & I_IComponent & I_IContent & I_ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type IBlankSection_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IBlankSection_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IBlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  composition?: Maybe<ICompositionStructureNodeAutocomplete>;
};

export type IBlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  composition?: Maybe<ICompositionStructureNodeFacet>;
};

export type IBlankSectionOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<ICompositionStructureNodeOrderByInput>;
};

export type IBlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<IBlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IBlankSectionFacet>;
  items?: Maybe<Array<Maybe<IBlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IBlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IBlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IBlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IBlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IBlankSectionWhereInput>>>;
  composition?: InputMaybe<ICompositionStructureNodeWhereInput>;
};

export type IBlogListingBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'BlogListingBlock';
  BlogListingItemCount?: Maybe<Scalars['Int']['output']>;
  BlogListingShowFilters?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IBlogListingBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IBlogListingBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IBlogListingBlockAutocomplete = {
  __typename?: 'BlogListingBlockAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IBlogListingBlockFacet = {
  __typename?: 'BlogListingBlockFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IBlogListingBlockOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IBlogListingBlockOutput = {
  __typename?: 'BlogListingBlockOutput';
  autocomplete?: Maybe<IBlogListingBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IBlogListingBlockFacet>;
  items?: Maybe<Array<Maybe<IBlogListingBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IBlogListingBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IBlogListingBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IBlogListingBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IBlogListingBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IBlogListingBlockWhereInput>>>;
};

export type IBlogPostPage = IIData & I_IContent & I_IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor?: Maybe<Scalars['String']['output']>;
  ArticleSubHeading?: Maybe<Scalars['String']['output']>;
  BlogPostBody?: Maybe<IRichText>;
  BlogPostPromoImage?: Maybe<IContentReference>;
  Heading?: Maybe<Scalars['String']['output']>;
  SeoSettings?: Maybe<IPageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IBlogPostPageArticleAuthorArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IBlogPostPage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IBlogPostPage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IBlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostBody?: Maybe<IRichTextAutocomplete>;
  BlogPostPromoImage?: Maybe<IContentReferenceAutocomplete>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IBlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor?: Maybe<Array<Maybe<IStringFacet>>>;
  BlogPostBody?: Maybe<IRichTextFacet>;
  BlogPostPromoImage?: Maybe<IContentReferenceFacet>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};


export type IBlogPostPageFacetArticleAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IBlogPostPageOrderByInput = {
  ArticleAuthor?: InputMaybe<IOrderBy>;
  BlogPostBody?: InputMaybe<IRichTextOrderByInput>;
  BlogPostPromoImage?: InputMaybe<IContentReferenceOrderByInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IBlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete?: Maybe<IBlogPostPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IBlogPostPageFacet>;
  items?: Maybe<Array<Maybe<IBlogPostPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IBlogPostPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IBlogPostPageWhereInput = {
  ArticleAuthor?: InputMaybe<ISearchableStringFilterInput>;
  BlogPostBody?: InputMaybe<IRichTextWhereInput>;
  BlogPostPromoImage?: InputMaybe<IContentReferenceWhereInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IBlogPostPageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IBlogPostPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IBlogPostPageWhereInput>>>;
};

export type IButtonBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'ButtonBlock';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<IContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IButtonBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IButtonBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl?: Maybe<IContentUrlAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl?: Maybe<IContentUrlFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IButtonBlockOrderByInput = {
  ButtonUrl?: InputMaybe<IContentUrlOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<IButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IButtonBlockFacet>;
  items?: Maybe<Array<Maybe<IButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IButtonBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<IContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
};

export type IButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl?: Maybe<IContentUrlAutocomplete>;
};

export type IButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl?: Maybe<IContentUrlFacet>;
};

export type IButtonBlockPropertyOrderByInput = {
  ButtonUrl?: InputMaybe<IContentUrlOrderByInput>;
};

export type IButtonBlockPropertyWhereInput = {
  ButtonUrl?: InputMaybe<IContentUrlWhereInput>;
};

export type IButtonBlockWhereInput = {
  ButtonUrl?: InputMaybe<IContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IButtonBlockWhereInput>>>;
};

export type ICtaElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'CTAElement';
  Link?: Maybe<IContentUrl>;
  Text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ICtaElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ICtaElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ICtaElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link?: Maybe<IContentUrlAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ICtaElementFacet = {
  __typename?: 'CTAElementFacet';
  Link?: Maybe<IContentUrlFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ICtaElementOrderByInput = {
  Link?: InputMaybe<IContentUrlOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ICtaElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete?: Maybe<ICtaElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ICtaElementFacet>;
  items?: Maybe<Array<Maybe<ICtaElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ICtaElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ICtaElementWhereInput = {
  Link?: InputMaybe<IContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ICtaElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ICtaElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ICtaElementWhereInput>>>;
};

export type ICardBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'CardBlock';
  CardButton?: Maybe<IButtonBlockProperty>;
  CardColor?: Maybe<Scalars['String']['output']>;
  CardDescription?: Maybe<IRichText>;
  CardHeading?: Maybe<Scalars['String']['output']>;
  CardIcon?: Maybe<IContentReference>;
  CardImage?: Maybe<IContentReference>;
  CardSubHeading?: Maybe<Scalars['String']['output']>;
  ImageLayout?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ICardBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ICardBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ICardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton?: Maybe<IButtonBlockPropertyAutocomplete>;
  CardDescription?: Maybe<IRichTextAutocomplete>;
  CardIcon?: Maybe<IContentReferenceAutocomplete>;
  CardImage?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ICardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton?: Maybe<IButtonBlockPropertyFacet>;
  CardDescription?: Maybe<IRichTextFacet>;
  CardIcon?: Maybe<IContentReferenceFacet>;
  CardImage?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ICardBlockOrderByInput = {
  CardButton?: InputMaybe<IButtonBlockPropertyOrderByInput>;
  CardDescription?: InputMaybe<IRichTextOrderByInput>;
  CardIcon?: InputMaybe<IContentReferenceOrderByInput>;
  CardImage?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ICardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete?: Maybe<ICardBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ICardBlockFacet>;
  items?: Maybe<Array<Maybe<ICardBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ICardBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ICardBlockWhereInput = {
  CardButton?: InputMaybe<IButtonBlockPropertyWhereInput>;
  CardDescription?: InputMaybe<IRichTextWhereInput>;
  CardIcon?: InputMaybe<IContentReferenceWhereInput>;
  CardImage?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ICardBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ICardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ICardBlockWhereInput>>>;
};

export type ICarouselBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ICarouselBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ICarouselBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ICarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea?: Maybe<I_IContentAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ICarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea?: Maybe<I_IContentFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ICarouselBlockOrderByInput = {
  CarouselItemsContentArea?: InputMaybe<I_IContentOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ICarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete?: Maybe<ICarouselBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ICarouselBlockFacet>;
  items?: Maybe<Array<Maybe<ICarouselBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ICarouselBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ICarouselBlockWhereInput = {
  CarouselItemsContentArea?: InputMaybe<I_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ICarouselBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ICarouselBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ICarouselBlockWhereInput>>>;
};

export type ICompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ICompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<IStringFacet>>>;
  value?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type ICompositionDisplaySettingFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ICompositionDisplaySettingFacetValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type ICompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<IOrderBy>;
  value?: InputMaybe<IOrderBy>;
};

export type ICompositionDisplaySettingWhereInput = {
  key?: InputMaybe<IStringFilterInput>;
  value?: InputMaybe<IStringFilterInput>;
};

export type ICompositionElementNode = IICompositionElementNode & IICompositionNode & {
  __typename?: 'CompositionElementNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<I_IElement>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = IICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionStructureNode = IICompositionNode & IICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<IICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<ICompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<IICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName?: Maybe<Array<Maybe<IStringFacet>>>;
  displaySettings?: Maybe<ICompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<IStringFacet>>>;
  key?: Maybe<Array<Maybe<IStringFacet>>>;
  nodeType?: Maybe<Array<Maybe<IStringFacet>>>;
  nodes?: Maybe<IICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type ICompositionStructureNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ICompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ICompositionStructureNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ICompositionStructureNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ICompositionStructureNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type ICompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<IOrderBy>;
  displaySettings?: InputMaybe<ICompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<IOrderBy>;
  key?: InputMaybe<IOrderBy>;
  nodeType?: InputMaybe<IOrderBy>;
  nodes?: InputMaybe<IICompositionNodeOrderByInput>;
  type?: InputMaybe<IOrderBy>;
};

export type ICompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<IStringFilterInput>;
  displaySettings?: InputMaybe<ICompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<IStringFilterInput>;
  key?: InputMaybe<IStringFilterInput>;
  nodeType?: InputMaybe<IStringFilterInput>;
  nodes?: InputMaybe<IICompositionNodeWhereInput>;
  type?: InputMaybe<IStringFilterInput>;
};

export type IContentMetadata = IIContentMetadata & {
  __typename?: 'ContentMetadata';
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IContentRecsBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'ContentRecsBlock';
  BlockDeliveryApiKey?: Maybe<Scalars['String']['output']>;
  BlockRecommendationCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContentRecsBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IContentRecsBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IContentRecsBlockAutocomplete = {
  __typename?: 'ContentRecsBlockAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IContentRecsBlockFacet = {
  __typename?: 'ContentRecsBlockFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IContentRecsBlockOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IContentRecsBlockOutput = {
  __typename?: 'ContentRecsBlockOutput';
  autocomplete?: Maybe<IContentRecsBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IContentRecsBlockFacet>;
  items?: Maybe<Array<Maybe<IContentRecsBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IContentRecsBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IContentRecsBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IContentRecsBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IContentRecsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IContentRecsBlockWhereInput>>>;
};

export type IContentRecsElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey?: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContentRecsElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IContentRecsElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IContentRecsElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete?: Maybe<IContentRecsElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IContentRecsElementFacet>;
  items?: Maybe<Array<Maybe<IContentRecsElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IContentRecsElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IContentRecsElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IContentRecsElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IContentRecsElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IContentRecsElementWhereInput>>>;
};

export type IContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<IContentUrl>;
};

export type IContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrlAutocomplete>;
};


export type IContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<IStringFacet>>>;
  url?: Maybe<IContentUrlFacet>;
};


export type IContentReferenceFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IContentReferenceOrderByInput = {
  key?: InputMaybe<IOrderBy>;
  url?: InputMaybe<IContentUrlOrderByInput>;
};

export type IContentReferenceWhereInput = {
  key?: InputMaybe<IStringFilterInput>;
  url?: InputMaybe<IContentUrlWhereInput>;
};

export type IContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<IStringFacet>>>;
  default?: Maybe<Array<Maybe<IStringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<IStringFacet>>>;
  internal?: Maybe<Array<Maybe<IStringFacet>>>;
  type?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type IContentUrlFacetBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IContentUrlFacetDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IContentUrlFacetHierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IContentUrlFacetInternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IContentUrlFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IContentUrlOrderByInput = {
  base?: InputMaybe<IOrderBy>;
  default?: InputMaybe<IOrderBy>;
  hierarchical?: InputMaybe<IOrderBy>;
  internal?: InputMaybe<IOrderBy>;
  type?: InputMaybe<IOrderBy>;
};

export type IContentUrlWhereInput = {
  base?: InputMaybe<IStringFilterInput>;
  default?: InputMaybe<IStringFilterInput>;
  hierarchical?: InputMaybe<IStringFilterInput>;
  internal?: InputMaybe<IStringFilterInput>;
  type?: InputMaybe<IStringFilterInput>;
};

export type IData = IIData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IDataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IDataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IIData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IDataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IDataWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IDataWhereInput>>>;
};

export type IDateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum IDateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type IDateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<IDecay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type IDecay = {
  origin?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type IGenericMedia = IIData & I_IContent & I_IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IGenericMedia_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IGenericMedia_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IGenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IGenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IGenericMediaOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IGenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<IGenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IGenericMediaFacet>;
  items?: Maybe<Array<Maybe<IGenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IGenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IGenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IGenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IGenericMediaWhereInput>>>;
};

export type IHeadingElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  headingText?: Maybe<Scalars['String']['output']>;
};


export type IHeadingElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IHeadingElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IHeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IHeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IHeadingElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IHeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete?: Maybe<IHeadingElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IHeadingElementFacet>;
  items?: Maybe<Array<Maybe<IHeadingElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IHeadingElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IHeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IHeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IHeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IHeadingElementWhereInput>>>;
};

export type IHeroBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'HeroBlock';
  Description?: Maybe<IRichText>;
  Eyebrow?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  HeroButton?: Maybe<IButtonBlockProperty>;
  HeroColor?: Maybe<Scalars['String']['output']>;
  HeroImage?: Maybe<IContentReference>;
  Icon?: Maybe<Scalars['String']['output']>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IHeroBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IHeroBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IHeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description?: Maybe<IRichTextAutocomplete>;
  HeroButton?: Maybe<IButtonBlockPropertyAutocomplete>;
  HeroImage?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IHeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description?: Maybe<IRichTextFacet>;
  HeroButton?: Maybe<IButtonBlockPropertyFacet>;
  HeroImage?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IHeroBlockOrderByInput = {
  Description?: InputMaybe<IRichTextOrderByInput>;
  HeroButton?: InputMaybe<IButtonBlockPropertyOrderByInput>;
  HeroImage?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IHeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<IHeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IHeroBlockFacet>;
  items?: Maybe<Array<Maybe<IHeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IHeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IHeroBlockWhereInput = {
  Description?: InputMaybe<IRichTextWhereInput>;
  HeroButton?: InputMaybe<IButtonBlockPropertyWhereInput>;
  HeroImage?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IHeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IHeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IHeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type IHighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type IHomePageHeroBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'HomePageHeroBlock';
  HomeHeroBlockHeading?: Maybe<Scalars['String']['output']>;
  HomeHeroBlockSubHeading?: Maybe<Scalars['String']['output']>;
  HomeHeroButtonBlock?: Maybe<IButtonBlockProperty>;
  HomeHeroLeftImage?: Maybe<IContentReference>;
  HomeHeroRightImage?: Maybe<IContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IHomePageHeroBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IHomePageHeroBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IHomePageHeroBlockAutocomplete = {
  __typename?: 'HomePageHeroBlockAutocomplete';
  HomeHeroButtonBlock?: Maybe<IButtonBlockPropertyAutocomplete>;
  HomeHeroLeftImage?: Maybe<IContentReferenceAutocomplete>;
  HomeHeroRightImage?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IHomePageHeroBlockFacet = {
  __typename?: 'HomePageHeroBlockFacet';
  HomeHeroButtonBlock?: Maybe<IButtonBlockPropertyFacet>;
  HomeHeroLeftImage?: Maybe<IContentReferenceFacet>;
  HomeHeroRightImage?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IHomePageHeroBlockOrderByInput = {
  HomeHeroButtonBlock?: InputMaybe<IButtonBlockPropertyOrderByInput>;
  HomeHeroLeftImage?: InputMaybe<IContentReferenceOrderByInput>;
  HomeHeroRightImage?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IHomePageHeroBlockOutput = {
  __typename?: 'HomePageHeroBlockOutput';
  autocomplete?: Maybe<IHomePageHeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IHomePageHeroBlockFacet>;
  items?: Maybe<Array<Maybe<IHomePageHeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IHomePageHeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IHomePageHeroBlockWhereInput = {
  HomeHeroButtonBlock?: InputMaybe<IButtonBlockPropertyWhereInput>;
  HomeHeroLeftImage?: InputMaybe<IContentReferenceWhereInput>;
  HomeHeroRightImage?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IHomePageHeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IHomePageHeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IHomePageHeroBlockWhereInput>>>;
};

export type IHtmlBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'HtmlBlock';
  HtmlBlockHeading?: Maybe<Scalars['String']['output']>;
  HtmlContent?: Maybe<IRichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IHtmlBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IHtmlBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IHtmlBlockAutocomplete = {
  __typename?: 'HtmlBlockAutocomplete';
  HtmlContent?: Maybe<IRichTextAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IHtmlBlockFacet = {
  __typename?: 'HtmlBlockFacet';
  HtmlContent?: Maybe<IRichTextFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IHtmlBlockOrderByInput = {
  HtmlContent?: InputMaybe<IRichTextOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IHtmlBlockOutput = {
  __typename?: 'HtmlBlockOutput';
  autocomplete?: Maybe<IHtmlBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IHtmlBlockFacet>;
  items?: Maybe<Array<Maybe<IHtmlBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IHtmlBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IHtmlBlockWhereInput = {
  HtmlContent?: InputMaybe<IRichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IHtmlBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IHtmlBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IHtmlBlockWhereInput>>>;
};

export type IICompositionElementNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<I_IElement>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<ICompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<IStringFacet>>>;
  displaySettings?: Maybe<ICompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<IStringFacet>>>;
  key?: Maybe<Array<Maybe<IStringFacet>>>;
  nodeType?: Maybe<Array<Maybe<IStringFacet>>>;
  type?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type IICompositionNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IICompositionNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IICompositionNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IICompositionNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IICompositionNodeOrderByInput = {
  displayName?: InputMaybe<IOrderBy>;
  displaySettings?: InputMaybe<ICompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<IOrderBy>;
  key?: InputMaybe<IOrderBy>;
  nodeType?: InputMaybe<IOrderBy>;
  type?: InputMaybe<IOrderBy>;
};

export type IICompositionNodeWhereInput = {
  displayName?: InputMaybe<IStringFilterInput>;
  displaySettings?: InputMaybe<ICompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<IStringFilterInput>;
  key?: InputMaybe<IStringFilterInput>;
  nodeType?: InputMaybe<IStringFilterInput>;
  type?: InputMaybe<IStringFilterInput>;
};

export type IICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<ICompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<IICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IIContentMetadata = {
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IIContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IIContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IIContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IIContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IIContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IIContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IIContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IIContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  created?: Maybe<Array<Maybe<IDateFacet>>>;
  displayName?: Maybe<Array<Maybe<IStringFacet>>>;
  key?: Maybe<Array<Maybe<IStringFacet>>>;
  lastModified?: Maybe<Array<Maybe<IDateFacet>>>;
  locale?: Maybe<Array<Maybe<IStringFacet>>>;
  published?: Maybe<Array<Maybe<IDateFacet>>>;
  status?: Maybe<Array<Maybe<IStringFacet>>>;
  types?: Maybe<Array<Maybe<IStringFacet>>>;
  url?: Maybe<IContentUrlFacet>;
  version?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type IIContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<IDateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IIContentMetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IIContentMetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IIContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<IDateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IIContentMetadataFacetLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IIContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<IDateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IIContentMetadataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IIContentMetadataFacetTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type IIContentMetadataFacetVersionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IIContentMetadataOrderByInput = {
  created?: InputMaybe<IOrderBy>;
  displayName?: InputMaybe<IOrderBy>;
  key?: InputMaybe<IOrderBy>;
  lastModified?: InputMaybe<IOrderBy>;
  locale?: InputMaybe<IOrderBy>;
  published?: InputMaybe<IOrderBy>;
  status?: InputMaybe<IOrderBy>;
  types?: InputMaybe<IOrderBy>;
  url?: InputMaybe<IContentUrlOrderByInput>;
  version?: InputMaybe<IOrderBy>;
};

export type IIContentMetadataWhereInput = {
  created?: InputMaybe<IDateFilterInput>;
  displayName?: InputMaybe<ISearchableStringFilterInput>;
  key?: InputMaybe<IStringFilterInput>;
  lastModified?: InputMaybe<IDateFilterInput>;
  locale?: InputMaybe<IStringFilterInput>;
  published?: InputMaybe<IDateFilterInput>;
  status?: InputMaybe<IStringFilterInput>;
  types?: InputMaybe<IStringFilterInput>;
  url?: InputMaybe<IContentUrlWhereInput>;
  version?: InputMaybe<IStringFilterInput>;
};

export type IIData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IIData_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IIData_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IIInstanceMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IIInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IIItemMetadata = {
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IIItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IIMediaMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IIMediaMetadataContentArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IIMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IImageElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<IContentReference>;
};


export type IImageElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IImageElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  imageLink?: Maybe<IContentReferenceAutocomplete>;
};

export type IImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  imageLink?: Maybe<IContentReferenceFacet>;
};

export type IImageElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  imageLink?: InputMaybe<IContentReferenceOrderByInput>;
};

export type IImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete?: Maybe<IImageElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IImageElementFacet>;
  items?: Maybe<Array<Maybe<IImageElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IImageElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IImageElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IImageElementWhereInput>>>;
  imageLink?: InputMaybe<IContentReferenceWhereInput>;
};

export type IImageMedia = IIData & I_IContent & I_IImage & I_IMedia & {
  __typename?: 'ImageMedia';
  AltText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IImageMedia_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IImageMedia_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IImageMediaOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<IImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IImageMediaFacet>;
  items?: Maybe<Array<Maybe<IImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IImageMediaWhereInput>>>;
};

export type IInstanceMetadata = IIContentMetadata & IIInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IItemMetadata = IIContentMetadata & IIItemMetadata & {
  __typename?: 'ItemMetadata';
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type ILandingPage = IIData & I_IContent & I_IPage & {
  __typename?: 'LandingPage';
  MainContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  SeoSettings?: Maybe<IPageSeoSettingsProperty>;
  TopContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ILandingPage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ILandingPage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ILandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea?: Maybe<I_IContentAutocomplete>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyAutocomplete>;
  TopContentArea?: Maybe<I_IContentAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ILandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea?: Maybe<I_IContentFacet>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyFacet>;
  TopContentArea?: Maybe<I_IContentFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ILandingPageOrderByInput = {
  MainContentArea?: InputMaybe<I_IContentOrderByInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyOrderByInput>;
  TopContentArea?: InputMaybe<I_IContentOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ILandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<ILandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ILandingPageFacet>;
  items?: Maybe<Array<Maybe<ILandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ILandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ILandingPageWhereInput = {
  MainContentArea?: InputMaybe<I_IContentWhereInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyWhereInput>;
  TopContentArea?: InputMaybe<I_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ILandingPageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ILandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ILandingPageWhereInput>>>;
};

export type ILayoutContainerBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'LayoutContainerBlock';
  ColumnsCount?: Maybe<Scalars['Int']['output']>;
  ContainerBackgroundColor?: Maybe<Scalars['String']['output']>;
  ContainerBackgroundImage?: Maybe<IContentReference>;
  ContainerMarginBottom?: Maybe<Scalars['String']['output']>;
  ContainerMarginTop?: Maybe<Scalars['String']['output']>;
  ContainerPaddingBottom?: Maybe<Scalars['String']['output']>;
  ContainerPaddingTop?: Maybe<Scalars['String']['output']>;
  GapSize?: Maybe<Scalars['String']['output']>;
  LayoutContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ILayoutContainerBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ILayoutContainerBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ILayoutContainerBlockAutocomplete = {
  __typename?: 'LayoutContainerBlockAutocomplete';
  ContainerBackgroundImage?: Maybe<IContentReferenceAutocomplete>;
  LayoutContentArea?: Maybe<I_IContentAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ILayoutContainerBlockFacet = {
  __typename?: 'LayoutContainerBlockFacet';
  ContainerBackgroundImage?: Maybe<IContentReferenceFacet>;
  LayoutContentArea?: Maybe<I_IContentFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ILayoutContainerBlockOrderByInput = {
  ContainerBackgroundImage?: InputMaybe<IContentReferenceOrderByInput>;
  LayoutContentArea?: InputMaybe<I_IContentOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ILayoutContainerBlockOutput = {
  __typename?: 'LayoutContainerBlockOutput';
  autocomplete?: Maybe<ILayoutContainerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ILayoutContainerBlockFacet>;
  items?: Maybe<Array<Maybe<ILayoutContainerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ILayoutContainerBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ILayoutContainerBlockWhereInput = {
  ContainerBackgroundImage?: InputMaybe<IContentReferenceWhereInput>;
  LayoutContentArea?: InputMaybe<I_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ILayoutContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ILayoutContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ILayoutContainerBlockWhereInput>>>;
};

export type ILink = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<IContentUrl>;
};


export type ILinkTextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type ILinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrlAutocomplete>;
};


export type ILinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ILinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ILinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ILinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<IStringFacet>>>;
  text?: Maybe<Array<Maybe<IStringFacet>>>;
  title?: Maybe<Array<Maybe<IStringFacet>>>;
  url?: Maybe<IContentUrlFacet>;
};


export type ILinkFacetTargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ILinkFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};


export type ILinkFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type ILinkOrderByInput = {
  target?: InputMaybe<IOrderBy>;
  text?: InputMaybe<IOrderBy>;
  title?: InputMaybe<IOrderBy>;
  url?: InputMaybe<IContentUrlOrderByInput>;
};

export enum ILinkTypes {
  Assets = 'ASSETS',
  Default = 'DEFAULT',
  Items = 'ITEMS',
  Path = 'PATH'
}

export type ILinkWhereInput = {
  target?: InputMaybe<IStringFilterInput>;
  text?: InputMaybe<ISearchableStringFilterInput>;
  title?: InputMaybe<IStringFilterInput>;
  url?: InputMaybe<IContentUrlWhereInput>;
};

export enum ILocales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type IMediaMetadata = IIContentMetadata & IIInstanceMetadata & IIMediaMetadata & {
  __typename?: 'MediaMetadata';
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<IContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};

export type IMegaMenuGroupBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  MegaMenuUrl?: Maybe<IContentUrl>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IMegaMenuGroupBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IMegaMenuGroupBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IMegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea?: Maybe<I_IContentAutocomplete>;
  MegaMenuUrl?: Maybe<IContentUrlAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IMegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea?: Maybe<I_IContentFacet>;
  MegaMenuUrl?: Maybe<IContentUrlFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IMegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<I_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<IContentUrlOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IMegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<IMegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IMegaMenuGroupBlockFacet>;
  items?: Maybe<Array<Maybe<IMegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IMegaMenuGroupBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IMegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<I_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<IContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IMegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IMegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IMegaMenuGroupBlockWhereInput>>>;
};

export type IMenuNavigationBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<ILink>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IMenuNavigationBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IMenuNavigationBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IMenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks?: Maybe<ILinkAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IMenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks?: Maybe<ILinkFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IMenuNavigationBlockOrderByInput = {
  NavigationLinks?: InputMaybe<ILinkOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IMenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete?: Maybe<IMenuNavigationBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IMenuNavigationBlockFacet>;
  items?: Maybe<Array<Maybe<IMenuNavigationBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IMenuNavigationBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IMenuNavigationBlockWhereInput = {
  NavigationLinks?: InputMaybe<ILinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IMenuNavigationBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IMenuNavigationBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IMenuNavigationBlockWhereInput>>>;
};

export type IOdpEmbedBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'OdpEmbedBlock';
  ContentId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IOdpEmbedBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IOdpEmbedBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IOdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IOdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IOdpEmbedBlockOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IOdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete?: Maybe<IOdpEmbedBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IOdpEmbedBlockFacet>;
  items?: Maybe<Array<Maybe<IOdpEmbedBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IOdpEmbedBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IOdpEmbedBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IOdpEmbedBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IOdpEmbedBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IOdpEmbedBlockWhereInput>>>;
};

export enum IOrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum IOrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type IPageSeoSettings = IIData & I_IComponent & I_IContent & {
  __typename?: 'PageSeoSettings';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<IContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IPageSeoSettings_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IPageSeoSettings_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IPageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IPageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  SharingImage?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IPageSeoSettingsOrderByInput = {
  SharingImage?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IPageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<IPageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IPageSeoSettingsFacet>;
  items?: Maybe<Array<Maybe<IPageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IPageSeoSettingsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IPageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<IContentReference>;
};

export type IPageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage?: Maybe<IContentReferenceAutocomplete>;
};

export type IPageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  SharingImage?: Maybe<IContentReferenceFacet>;
};

export type IPageSeoSettingsPropertyOrderByInput = {
  SharingImage?: InputMaybe<IContentReferenceOrderByInput>;
};

export type IPageSeoSettingsPropertyWhereInput = {
  SharingImage?: InputMaybe<IContentReferenceWhereInput>;
};

export type IPageSeoSettingsWhereInput = {
  SharingImage?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IPageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IPageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IPageSeoSettingsWhereInput>>>;
};

export type IParagraphElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<IRichText>;
};


export type IParagraphElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IParagraphElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  text?: Maybe<IRichTextAutocomplete>;
};

export type IParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  text?: Maybe<IRichTextFacet>;
};

export type IParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<IRichTextOrderByInput>;
};

export type IParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<IParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IParagraphElementFacet>;
  items?: Maybe<Array<Maybe<IParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IParagraphElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IParagraphElementWhereInput>>>;
  text?: InputMaybe<IRichTextWhereInput>;
};

export type IQuery = {
  __typename?: 'Query';
  ArticleListElement?: Maybe<IArticleListElementOutput>;
  BlankExperience?: Maybe<IBlankExperienceOutput>;
  BlankSection?: Maybe<IBlankSectionOutput>;
  BlogListingBlock?: Maybe<IBlogListingBlockOutput>;
  BlogPostPage?: Maybe<IBlogPostPageOutput>;
  ButtonBlock?: Maybe<IButtonBlockOutput>;
  CTAElement?: Maybe<ICtaElementOutput>;
  CardBlock?: Maybe<ICardBlockOutput>;
  CarouselBlock?: Maybe<ICarouselBlockOutput>;
  ContentRecsBlock?: Maybe<IContentRecsBlockOutput>;
  ContentRecsElement?: Maybe<IContentRecsElementOutput>;
  Data?: Maybe<IDataOutput>;
  GenericMedia?: Maybe<IGenericMediaOutput>;
  HeadingElement?: Maybe<IHeadingElementOutput>;
  HeroBlock?: Maybe<IHeroBlockOutput>;
  HomePageHeroBlock?: Maybe<IHomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<IHtmlBlockOutput>;
  ImageElement?: Maybe<IImageElementOutput>;
  ImageMedia?: Maybe<IImageMediaOutput>;
  LandingPage?: Maybe<ILandingPageOutput>;
  LayoutContainerBlock?: Maybe<ILayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<IMegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<IMenuNavigationBlockOutput>;
  OdpEmbedBlock?: Maybe<IOdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<IPageSeoSettingsOutput>;
  ParagraphElement?: Maybe<IParagraphElementOutput>;
  QuoteBlock?: Maybe<IQuoteBlockOutput>;
  StandardPage?: Maybe<IStandardPageOutput>;
  StartPage?: Maybe<IStartPageOutput>;
  SysContentFolder?: Maybe<ISysContentFolderOutput>;
  TestimonialElement?: Maybe<ITestimonialElementOutput>;
  TextBlock?: Maybe<ITextBlockOutput>;
  Video?: Maybe<IVideoOutput>;
  VideoElement?: Maybe<IVideoElementOutput>;
  VideoMedia?: Maybe<IVideoMediaOutput>;
  _Component?: Maybe<I_ComponentOutput>;
  _Content?: Maybe<I_ContentOutput>;
  _Element?: Maybe<I_ElementOutput>;
  _Experience?: Maybe<I_ExperienceOutput>;
  _Folder?: Maybe<I_FolderOutput>;
  _Image?: Maybe<I_ImageOutput>;
  _Media?: Maybe<I_MediaOutput>;
  _Page?: Maybe<I_PageOutput>;
  _Section?: Maybe<I_SectionOutput>;
  _Video?: Maybe<I_VideoOutput>;
};


export type IQueryArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IArticleListElementWhereInput>;
};


export type IQueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlankExperienceWhereInput>;
};


export type IQueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlankSectionWhereInput>;
};


export type IQueryBlogListingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlogListingBlockWhereInput>;
};


export type IQueryBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlogPostPageWhereInput>;
};


export type IQueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IButtonBlockWhereInput>;
};


export type IQueryCtaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICtaElementWhereInput>;
};


export type IQueryCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICardBlockWhereInput>;
};


export type IQueryCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICarouselBlockWhereInput>;
};


export type IQueryContentRecsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IContentRecsBlockWhereInput>;
};


export type IQueryContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IContentRecsElementWhereInput>;
};


export type IQueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ISystem_Locales>>>;
  orderBy?: InputMaybe<IDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IDataWhereInput>;
};


export type IQueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IGenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IGenericMediaWhereInput>;
};


export type IQueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHeadingElementWhereInput>;
};


export type IQueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHeroBlockWhereInput>;
};


export type IQueryHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHomePageHeroBlockWhereInput>;
};


export type IQueryHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHtmlBlockWhereInput>;
};


export type IQueryImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IImageElementWhereInput>;
};


export type IQueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IImageMediaWhereInput>;
};


export type IQueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ILandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ILandingPageWhereInput>;
};


export type IQueryLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ILayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ILayoutContainerBlockWhereInput>;
};


export type IQueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IMegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IMegaMenuGroupBlockWhereInput>;
};


export type IQueryMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IMenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IMenuNavigationBlockWhereInput>;
};


export type IQueryOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IOdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IOdpEmbedBlockWhereInput>;
};


export type IQueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IPageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IPageSeoSettingsWhereInput>;
};


export type IQueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IParagraphElementWhereInput>;
};


export type IQueryQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IQuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IQuoteBlockWhereInput>;
};


export type IQueryStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IStandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IStandardPageWhereInput>;
};


export type IQueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IStartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IStartPageWhereInput>;
};


export type IQuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ISysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ISysContentFolderWhereInput>;
};


export type IQueryTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ITestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ITestimonialElementWhereInput>;
};


export type IQueryTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ITextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ITextBlockWhereInput>;
};


export type IQueryVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoWhereInput>;
};


export type IQueryVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoElementWhereInput>;
};


export type IQueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoMediaWhereInput>;
};


export type IQuery_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ComponentWhereInput>;
};


export type IQuery_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ContentWhereInput>;
};


export type IQuery_ElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ElementWhereInput>;
};


export type IQuery_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ExperienceWhereInput>;
};


export type IQuery_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_FolderWhereInput>;
};


export type IQuery_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ImageWhereInput>;
};


export type IQuery_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_MediaWhereInput>;
};


export type IQuery_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_PageWhereInput>;
};


export type IQuery_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_SectionWhereInput>;
};


export type IQuery_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_VideoWhereInput>;
};

export type IQueryRef = {
  __typename?: 'QueryRef';
  ArticleListElement?: Maybe<IArticleListElementOutput>;
  BlankExperience?: Maybe<IBlankExperienceOutput>;
  BlankSection?: Maybe<IBlankSectionOutput>;
  BlogListingBlock?: Maybe<IBlogListingBlockOutput>;
  BlogPostPage?: Maybe<IBlogPostPageOutput>;
  ButtonBlock?: Maybe<IButtonBlockOutput>;
  CTAElement?: Maybe<ICtaElementOutput>;
  CardBlock?: Maybe<ICardBlockOutput>;
  CarouselBlock?: Maybe<ICarouselBlockOutput>;
  ContentRecsBlock?: Maybe<IContentRecsBlockOutput>;
  ContentRecsElement?: Maybe<IContentRecsElementOutput>;
  Data?: Maybe<IDataOutput>;
  GenericMedia?: Maybe<IGenericMediaOutput>;
  HeadingElement?: Maybe<IHeadingElementOutput>;
  HeroBlock?: Maybe<IHeroBlockOutput>;
  HomePageHeroBlock?: Maybe<IHomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<IHtmlBlockOutput>;
  ImageElement?: Maybe<IImageElementOutput>;
  ImageMedia?: Maybe<IImageMediaOutput>;
  LandingPage?: Maybe<ILandingPageOutput>;
  LayoutContainerBlock?: Maybe<ILayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<IMegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<IMenuNavigationBlockOutput>;
  OdpEmbedBlock?: Maybe<IOdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<IPageSeoSettingsOutput>;
  ParagraphElement?: Maybe<IParagraphElementOutput>;
  QuoteBlock?: Maybe<IQuoteBlockOutput>;
  StandardPage?: Maybe<IStandardPageOutput>;
  StartPage?: Maybe<IStartPageOutput>;
  SysContentFolder?: Maybe<ISysContentFolderOutput>;
  TestimonialElement?: Maybe<ITestimonialElementOutput>;
  TextBlock?: Maybe<ITextBlockOutput>;
  Video?: Maybe<IVideoOutput>;
  VideoElement?: Maybe<IVideoElementOutput>;
  VideoMedia?: Maybe<IVideoMediaOutput>;
  _Component?: Maybe<I_ComponentOutput>;
  _Content?: Maybe<I_ContentOutput>;
  _Element?: Maybe<I_ElementOutput>;
  _Experience?: Maybe<I_ExperienceOutput>;
  _Folder?: Maybe<I_FolderOutput>;
  _Image?: Maybe<I_ImageOutput>;
  _Media?: Maybe<I_MediaOutput>;
  _Page?: Maybe<I_PageOutput>;
  _Section?: Maybe<I_SectionOutput>;
  _Video?: Maybe<I_VideoOutput>;
};


export type IQueryRefArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IArticleListElementWhereInput>;
};


export type IQueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlankExperienceWhereInput>;
};


export type IQueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlankSectionWhereInput>;
};


export type IQueryRefBlogListingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlogListingBlockWhereInput>;
};


export type IQueryRefBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IBlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IBlogPostPageWhereInput>;
};


export type IQueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IButtonBlockWhereInput>;
};


export type IQueryRefCtaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICtaElementWhereInput>;
};


export type IQueryRefCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICardBlockWhereInput>;
};


export type IQueryRefCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ICarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ICarouselBlockWhereInput>;
};


export type IQueryRefContentRecsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IContentRecsBlockWhereInput>;
};


export type IQueryRefContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IContentRecsElementWhereInput>;
};


export type IQueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ISystem_Locales>>>;
  orderBy?: InputMaybe<IDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IDataWhereInput>;
};


export type IQueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IGenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IGenericMediaWhereInput>;
};


export type IQueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHeadingElementWhereInput>;
};


export type IQueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHeroBlockWhereInput>;
};


export type IQueryRefHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHomePageHeroBlockWhereInput>;
};


export type IQueryRefHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IHtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IHtmlBlockWhereInput>;
};


export type IQueryRefImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IImageElementWhereInput>;
};


export type IQueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IImageMediaWhereInput>;
};


export type IQueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ILandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ILandingPageWhereInput>;
};


export type IQueryRefLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ILayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ILayoutContainerBlockWhereInput>;
};


export type IQueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IMegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IMegaMenuGroupBlockWhereInput>;
};


export type IQueryRefMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IMenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IMenuNavigationBlockWhereInput>;
};


export type IQueryRefOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IOdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IOdpEmbedBlockWhereInput>;
};


export type IQueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IPageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IPageSeoSettingsWhereInput>;
};


export type IQueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IParagraphElementWhereInput>;
};


export type IQueryRefQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IQuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IQuoteBlockWhereInput>;
};


export type IQueryRefStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IStandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IStandardPageWhereInput>;
};


export type IQueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IStartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IStartPageWhereInput>;
};


export type IQueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ISysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ISysContentFolderWhereInput>;
};


export type IQueryRefTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ITestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ITestimonialElementWhereInput>;
};


export type IQueryRefTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<ITextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ITextBlockWhereInput>;
};


export type IQueryRefVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoWhereInput>;
};


export type IQueryRefVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoElementWhereInput>;
};


export type IQueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<IVideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<IVideoMediaWhereInput>;
};


export type IQueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ComponentWhereInput>;
};


export type IQueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ContentWhereInput>;
};


export type IQueryRef_ElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ElementWhereInput>;
};


export type IQueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ExperienceWhereInput>;
};


export type IQueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_FolderWhereInput>;
};


export type IQueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_ImageWhereInput>;
};


export type IQueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_MediaWhereInput>;
};


export type IQueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_PageWhereInput>;
};


export type IQueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_SectionWhereInput>;
};


export type IQueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<ILocales>>>;
  orderBy?: InputMaybe<I_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<I_VideoWhereInput>;
};

export type IQuoteBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'QuoteBlock';
  QuoteActive?: Maybe<Scalars['Boolean']['output']>;
  QuoteColor?: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation?: Maybe<Scalars['String']['output']>;
  QuoteProfileName?: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture?: Maybe<IContentReference>;
  QuoteText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IQuoteBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IQuoteBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IQuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IQuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IQuoteBlockOrderByInput = {
  QuoteProfilePicture?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IQuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete?: Maybe<IQuoteBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IQuoteBlockFacet>;
  items?: Maybe<Array<Maybe<IQuoteBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IQuoteBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IQuoteBlockWhereInput = {
  QuoteProfilePicture?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IQuoteBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IQuoteBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IQuoteBlockWhereInput>>>;
};

export enum IRanking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type IRichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type IRichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IRichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IRichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<IStringFacet>>>;
};


export type IRichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IOrderBy>;
  orderType?: InputMaybe<IOrderByFacetType>;
};

export type IRichTextOrderByInput = {
  html?: InputMaybe<IOrderBy>;
};

export type IRichTextWhereInput = {
  html?: InputMaybe<IStringFilterInput>;
};

export type ISearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<ISynonymSlot>>>;
};

export type IStandardPage = IIData & I_IContent & I_IPage & {
  __typename?: 'StandardPage';
  MainBody?: Maybe<IRichText>;
  SeoSettings?: Maybe<IPageSeoSettingsProperty>;
  StandardPageHeading?: Maybe<Scalars['String']['output']>;
  StandardPromoImage?: Maybe<IContentReference>;
  StandardSubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IStandardPage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IStandardPage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IStandardPageAutocomplete = {
  __typename?: 'StandardPageAutocomplete';
  MainBody?: Maybe<IRichTextAutocomplete>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyAutocomplete>;
  StandardPromoImage?: Maybe<IContentReferenceAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IStandardPageFacet = {
  __typename?: 'StandardPageFacet';
  MainBody?: Maybe<IRichTextFacet>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyFacet>;
  StandardPromoImage?: Maybe<IContentReferenceFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IStandardPageOrderByInput = {
  MainBody?: InputMaybe<IRichTextOrderByInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyOrderByInput>;
  StandardPromoImage?: InputMaybe<IContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IStandardPageOutput = {
  __typename?: 'StandardPageOutput';
  autocomplete?: Maybe<IStandardPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IStandardPageFacet>;
  items?: Maybe<Array<Maybe<IStandardPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IStandardPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IStandardPageWhereInput = {
  MainBody?: InputMaybe<IRichTextWhereInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyWhereInput>;
  StandardPromoImage?: InputMaybe<IContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IStandardPageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IStandardPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IStandardPageWhereInput>>>;
};

export type IStartPage = IIData & I_IContent & I_IPage & {
  __typename?: 'StartPage';
  FooterNavigationContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  FooterNavigationCopyrightText?: Maybe<Scalars['String']['output']>;
  FooterNavigationSubLinks?: Maybe<Array<Maybe<ILink>>>;
  HomePageHeroContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  HomePageMainContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  MainNavigationContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  SeoSettings?: Maybe<IPageSeoSettingsProperty>;
  SiteImageLogo?: Maybe<IContentReference>;
  UtilityNavigationContentArea?: Maybe<Array<Maybe<I_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IStartPage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IStartPage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IStartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  FooterNavigationContentArea?: Maybe<I_IContentAutocomplete>;
  FooterNavigationSubLinks?: Maybe<ILinkAutocomplete>;
  HomePageHeroContentArea?: Maybe<I_IContentAutocomplete>;
  HomePageMainContentArea?: Maybe<I_IContentAutocomplete>;
  MainNavigationContentArea?: Maybe<I_IContentAutocomplete>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyAutocomplete>;
  SiteImageLogo?: Maybe<IContentReferenceAutocomplete>;
  UtilityNavigationContentArea?: Maybe<I_IContentAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IStartPageFacet = {
  __typename?: 'StartPageFacet';
  FooterNavigationContentArea?: Maybe<I_IContentFacet>;
  FooterNavigationSubLinks?: Maybe<ILinkFacet>;
  HomePageHeroContentArea?: Maybe<I_IContentFacet>;
  HomePageMainContentArea?: Maybe<I_IContentFacet>;
  MainNavigationContentArea?: Maybe<I_IContentFacet>;
  SeoSettings?: Maybe<IPageSeoSettingsPropertyFacet>;
  SiteImageLogo?: Maybe<IContentReferenceFacet>;
  UtilityNavigationContentArea?: Maybe<I_IContentFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IStartPageOrderByInput = {
  FooterNavigationContentArea?: InputMaybe<I_IContentOrderByInput>;
  FooterNavigationSubLinks?: InputMaybe<ILinkOrderByInput>;
  HomePageHeroContentArea?: InputMaybe<I_IContentOrderByInput>;
  HomePageMainContentArea?: InputMaybe<I_IContentOrderByInput>;
  MainNavigationContentArea?: InputMaybe<I_IContentOrderByInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyOrderByInput>;
  SiteImageLogo?: InputMaybe<IContentReferenceOrderByInput>;
  UtilityNavigationContentArea?: InputMaybe<I_IContentOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IStartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<IStartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IStartPageFacet>;
  items?: Maybe<Array<Maybe<IStartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IStartPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IStartPageWhereInput = {
  FooterNavigationContentArea?: InputMaybe<I_IContentWhereInput>;
  FooterNavigationSubLinks?: InputMaybe<ILinkWhereInput>;
  HomePageHeroContentArea?: InputMaybe<I_IContentWhereInput>;
  HomePageMainContentArea?: InputMaybe<I_IContentWhereInput>;
  MainNavigationContentArea?: InputMaybe<I_IContentWhereInput>;
  SeoSettings?: InputMaybe<IPageSeoSettingsPropertyWhereInput>;
  SiteImageLogo?: InputMaybe<IContentReferenceWhereInput>;
  UtilityNavigationContentArea?: InputMaybe<I_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<IStartPageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IStartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IStartPageWhereInput>>>;
};

export type IStringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<ISynonymSlot>>>;
};

export enum ISynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type ISysContentFolder = IIData & I_IContent & I_IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ISysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ISysContentFolder_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ISysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ISysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ISysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ISysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<ISysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ISysContentFolderFacet>;
  items?: Maybe<Array<Maybe<ISysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ISysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ISysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ISysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ISysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ISysContentFolderWhereInput>>>;
};

export type ITestimonialElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  customerImage?: Maybe<IContentReference>;
  customerLocation?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  referenceText?: Maybe<IRichText>;
  referenceTitle?: Maybe<Scalars['String']['output']>;
};


export type ITestimonialElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ITestimonialElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ITestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  customerImage?: Maybe<IContentReferenceAutocomplete>;
  referenceText?: Maybe<IRichTextAutocomplete>;
};

export type ITestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  customerImage?: Maybe<IContentReferenceFacet>;
  referenceText?: Maybe<IRichTextFacet>;
};

export type ITestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  customerImage?: InputMaybe<IContentReferenceOrderByInput>;
  referenceText?: InputMaybe<IRichTextOrderByInput>;
};

export type ITestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete?: Maybe<ITestimonialElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ITestimonialElementFacet>;
  items?: Maybe<Array<Maybe<ITestimonialElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ITestimonialElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ITestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ITestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ITestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ITestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<IContentReferenceWhereInput>;
  referenceText?: InputMaybe<IRichTextWhereInput>;
};

export type ITextBlock = IIData & I_IComponent & I_IContent & {
  __typename?: 'TextBlock';
  TextBlockDescription?: Maybe<IRichText>;
  TextBlockHeading?: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize?: Maybe<Scalars['String']['output']>;
  TextBlockOverline?: Maybe<Scalars['String']['output']>;
  TextBlockWidth?: Maybe<Scalars['String']['output']>;
  TextCenter?: Maybe<Scalars['Boolean']['output']>;
  TextClassName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ITextBlock_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type ITextBlock_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type ITextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription?: Maybe<IRichTextAutocomplete>;
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type ITextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription?: Maybe<IRichTextFacet>;
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type ITextBlockOrderByInput = {
  TextBlockDescription?: InputMaybe<IRichTextOrderByInput>;
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ITextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete?: Maybe<ITextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ITextBlockFacet>;
  items?: Maybe<Array<Maybe<ITextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ITextBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ITextBlockWhereInput = {
  TextBlockDescription?: InputMaybe<IRichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ITextBlockWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ITextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ITextBlockWhereInput>>>;
};

export type IVideo = IIData & I_IContent & I_IMedia & I_IVideo & {
  __typename?: 'Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IVideo_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IVideo_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IVideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IVideoElement = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  placeholder?: Maybe<IContentReference>;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<IContentReference>;
};


export type IVideoElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IVideoElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IVideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  placeholder?: Maybe<IContentReferenceAutocomplete>;
  video?: Maybe<IContentReferenceAutocomplete>;
};

export type IVideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  placeholder?: Maybe<IContentReferenceFacet>;
  video?: Maybe<IContentReferenceFacet>;
};

export type IVideoElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<IContentReferenceOrderByInput>;
  video?: InputMaybe<IContentReferenceOrderByInput>;
};

export type IVideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete?: Maybe<IVideoElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IVideoElementFacet>;
  items?: Maybe<Array<Maybe<IVideoElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IVideoElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IVideoElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IVideoElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IVideoElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IVideoElementWhereInput>>>;
  placeholder?: InputMaybe<IContentReferenceWhereInput>;
  video?: InputMaybe<IContentReferenceWhereInput>;
};

export type IVideoFacet = {
  __typename?: 'VideoFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IVideoMedia = IIData & I_IContent & I_IMedia & I_IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IVideoMedia_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type IVideoMedia_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type IVideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type IVideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type IVideoMediaOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IVideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<IVideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IVideoMediaFacet>;
  items?: Maybe<Array<Maybe<IVideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IVideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IVideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IVideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IVideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IVideoMediaWhereInput>>>;
};

export type IVideoOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IVideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete?: Maybe<IVideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IVideoFacet>;
  items?: Maybe<Array<Maybe<IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IVideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IVideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IVideoWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IVideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IVideoWhereInput>>>;
};

export type I_Component = IIData & I_IComponent & I_IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Component_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Component_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_ComponentOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<I_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_ComponentFacet>;
  items?: Maybe<Array<Maybe<I_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_ComponentWhereInput>>>;
};

export type I_Content = IIData & I_IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Content_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Content_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_ContentOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<I_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_ContentFacet>;
  items?: Maybe<Array<Maybe<I_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_ContentWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_ContentWhereInput>>>;
};

export type I_Element = IIData & I_IComponent & I_IContent & I_IElement & {
  __typename?: '_Element';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Element_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Element_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ElementAutocomplete = {
  __typename?: '_ElementAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_ElementFacet = {
  __typename?: '_ElementFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_ElementOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_ElementOutput = {
  __typename?: '_ElementOutput';
  autocomplete?: Maybe<I_ElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_ElementFacet>;
  items?: Maybe<Array<Maybe<I_IElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_ElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_ElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_ElementWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_ElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_ElementWhereInput>>>;
};

export type I_Experience = IIData & I_IContent & I_IExperience & I_IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type I_Experience_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Experience_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  composition?: Maybe<ICompositionStructureNodeAutocomplete>;
};

export type I_ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  composition?: Maybe<ICompositionStructureNodeFacet>;
};

export type I_ExperienceOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<ICompositionStructureNodeOrderByInput>;
};

export type I_ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<I_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_ExperienceFacet>;
  items?: Maybe<Array<Maybe<I_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_ExperienceWhereInput>>>;
  composition?: InputMaybe<ICompositionStructureNodeWhereInput>;
};

export type I_Folder = IIData & I_IContent & I_IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Folder_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Folder_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_FolderOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<I_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_FolderFacet>;
  items?: Maybe<Array<Maybe<I_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_FolderWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_FolderWhereInput>>>;
};

export type I_IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IComponent_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IComponent_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IContent_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IContent_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_IContentOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_IContentWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_IContentWhereInput>>>;
};

export type I_IElement = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IElement_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IElement_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type I_IExperience_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IExperience_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IFolder_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IFolder_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IImage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IImage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IMedia_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IMedia_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IPage_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IPage_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type I_ISection_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_ISection_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_IVideo_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_IVideo_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_Image = IIData & I_IContent & I_IImage & I_IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Image_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Image_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_ImageOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<I_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_ImageFacet>;
  items?: Maybe<Array<Maybe<I_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_ImageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_ImageWhereInput>>>;
};

export type I_Media = IIData & I_IContent & I_IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Media_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Media_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_MediaOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<I_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_MediaFacet>;
  items?: Maybe<Array<Maybe<I_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_MediaWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_MediaWhereInput>>>;
};

export type I_Page = IIData & I_IContent & I_IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Page_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Page_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_PageOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<I_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_PageFacet>;
  items?: Maybe<Array<Maybe<I_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_PageWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_PageWhereInput>>>;
};

export type I_Section = IIData & I_IComponent & I_IContent & I_ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<ICompositionStructureNode>;
};


export type I_Section_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Section_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
  composition?: Maybe<ICompositionStructureNodeAutocomplete>;
};

export type I_SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
  composition?: Maybe<ICompositionStructureNodeFacet>;
};

export type I_SectionOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<ICompositionStructureNodeOrderByInput>;
};

export type I_SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<I_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_SectionFacet>;
  items?: Maybe<Array<Maybe<I_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_SectionWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_SectionWhereInput>>>;
  composition?: InputMaybe<ICompositionStructureNodeWhereInput>;
};

export type I_Video = IIData & I_IContent & I_IMedia & I_IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<IQueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<IQueryRef>;
  _metadata?: Maybe<IIContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type I_Video_FulltextArgs = {
  highlight?: InputMaybe<IHighlightOptions>;
};


export type I_Video_LinkArgs = {
  type?: InputMaybe<ILinkTypes>;
};

export type I_VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IIContentMetadataAutocomplete>;
};

export type I_VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IIContentMetadataFacet>;
};

export type I_VideoOrderByInput = {
  _metadata?: InputMaybe<IIContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<IOrderBy>;
  _ranking?: InputMaybe<IRanking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type I_VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<I_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<I_VideoFacet>;
  items?: Maybe<Array<Maybe<I_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type I_VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I_VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<I_VideoWhereInput>>>;
  _fulltext?: InputMaybe<ISearchableStringFilterInput>;
  _metadata?: InputMaybe<IIContentMetadataWhereInput>;
  _modified?: InputMaybe<IDateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<I_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<I_VideoWhereInput>>>;
};

export enum ISystem_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type IVideoElementFragment = { __typename?: 'VideoElement', title?: string | null, placeholder?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, video?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null };

export type ICtaElementFragment = { __typename?: 'CTAElement', Text?: string | null, Link?: { __typename?: 'ContentUrl', default?: string | null } | null };

export type IHeadingElementFragment = { __typename?: 'HeadingElement', headingText?: string | null };

export type IImageElementFragment = { __typename?: 'ImageElement', altText?: string | null, imageLink?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null } | null };

export type IContentByIdQueryVariables = Exact<{
  contentId: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  lang: Array<InputMaybe<ILocales>> | InputMaybe<ILocales>;
  version: Scalars['String']['input'];
}>;


export type IContentByIdQuery = { __typename?: 'Query', _Content?: { __typename?: '_ContentOutput', items?: Array<{ __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogListingBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogPostPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CardBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CarouselBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HomePageHeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HtmlBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LayoutContainerBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'QuoteBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Element', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null> | null } | null };

export type IGetExperienceQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<ILocales>> | InputMaybe<ILocales>>;
}>;


export type IGetExperienceQuery = { __typename?: 'Query', _Experience?: { __typename?: '_ExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', composition?: { __typename?: 'CompositionStructureNode', displaySettings?: Array<(
          { __typename?: 'CompositionDisplaySetting' }
          & IDsFragment
        ) | null> | null, grids?: Array<{ __typename?: 'CompositionElementNode', displayName?: string | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | { __typename?: 'CompositionNode', displayName?: string | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | { __typename?: 'CompositionStructureNode', displayName?: string | null, rows?: Array<{ __typename?: 'CompositionElementNode', displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | { __typename?: 'CompositionStructureNode', columns?: Array<{ __typename?: 'CompositionElementNode', displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | { __typename?: 'CompositionStructureNode', elements?: Array<{ __typename?: 'CompositionElementNode', displayTemplateKey?: string | null, element?: { __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & ICtaElementFragment
                ) | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IHeadingElementFragment
                ) | (
                  { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IImageElementFragment
                ) | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IVideoElementFragment
                ) | { __typename?: '_Element', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null, displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | { __typename?: 'CompositionStructureNode', displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | null> | null, displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | null> | null, displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | null> | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | null> | null } | null, _metadata?: { __typename?: 'ContentMetadata', key?: string | null, version?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null } | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null } | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null } | null } | { __typename?: '_Experience', composition?: { __typename?: 'CompositionStructureNode', displaySettings?: Array<(
          { __typename?: 'CompositionDisplaySetting' }
          & IDsFragment
        ) | null> | null, grids?: Array<{ __typename?: 'CompositionElementNode', displayName?: string | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | { __typename?: 'CompositionNode', displayName?: string | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | { __typename?: 'CompositionStructureNode', displayName?: string | null, rows?: Array<{ __typename?: 'CompositionElementNode', displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | { __typename?: 'CompositionStructureNode', columns?: Array<{ __typename?: 'CompositionElementNode', displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | { __typename?: 'CompositionStructureNode', elements?: Array<{ __typename?: 'CompositionElementNode', displayTemplateKey?: string | null, element?: { __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & ICtaElementFragment
                ) | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IHeadingElementFragment
                ) | (
                  { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IImageElementFragment
                ) | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
                  { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
                  & IVideoElementFragment
                ) | { __typename?: '_Element', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null, displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | { __typename?: 'CompositionNode', displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | { __typename?: 'CompositionStructureNode', displaySettings?: Array<(
                  { __typename?: 'CompositionDisplaySetting' }
                  & IDsFragment
                ) | null> | null } | null> | null, displaySettings?: Array<(
                { __typename?: 'CompositionDisplaySetting' }
                & IDsFragment
              ) | null> | null } | null> | null, displaySettings?: Array<(
              { __typename?: 'CompositionDisplaySetting' }
              & IDsFragment
            ) | null> | null } | null> | null, displaySettings?: Array<(
            { __typename?: 'CompositionDisplaySetting' }
            & IDsFragment
          ) | null> | null } | null> | null } | null, _metadata?: { __typename?: 'ContentMetadata', key?: string | null, version?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null } | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null } | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null } | null } | null> | null } | null };

export type IDsFragment = { __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null };

export const VideoElementFragmentDoc = gql`
    fragment VideoElement on VideoElement {
  placeholder {
    url {
      default
    }
  }
  title
  video {
    url {
      default
    }
  }
}
    `;
export const CtaElementFragmentDoc = gql`
    fragment CTAElement on CTAElement {
  Text
  Link {
    default
  }
}
    `;
export const HeadingElementFragmentDoc = gql`
    fragment HeadingElement on HeadingElement {
  headingText
}
    `;
export const ImageElementFragmentDoc = gql`
    fragment ImageElement on ImageElement {
  altText
  imageLink {
    url {
      base
      default
    }
  }
}
    `;
export const DsFragmentDoc = gql`
    fragment ds on CompositionDisplaySetting {
  key
  value
}
    `;
export const ContentByIdDocument = gql`
    query contentById($contentId: [String]!, $lang: [Locales]!, $version: String!) {
  _Content(
    ids: $contentId
    locale: $lang
    where: {_metadata: {version: {eq: $version}}}
  ) {
    items {
      _metadata {
        types
      }
    }
  }
}
    `;
export const GetExperienceDocument = gql`
    query getExperience($key: String, $version: String, $locale: [Locales]) {
  _Experience(
    locale: $locale
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    items {
      composition {
        displaySettings {
          ...ds
        }
        grids: nodes {
          displaySettings {
            ...ds
          }
          displayName
          ... on CompositionStructureNode {
            rows: nodes {
              displaySettings {
                ...ds
              }
              ... on CompositionStructureNode {
                columns: nodes {
                  displaySettings {
                    ...ds
                  }
                  ... on CompositionStructureNode {
                    elements: nodes {
                      displaySettings {
                        ...ds
                      }
                      ... on CompositionElementNode {
                        displayTemplateKey
                        element {
                          _metadata {
                            types
                          }
                          ...HeadingElement
                          ...ImageElement
                          ...CTAElement
                          ...VideoElement
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _metadata {
        key
        version
      }
    }
  }
}
    ${DsFragmentDoc}
${HeadingElementFragmentDoc}
${ImageElementFragmentDoc}
${CtaElementFragmentDoc}
${VideoElementFragmentDoc}`;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    contentById(variables: IContentByIdQueryVariables, options?: C): Promise<IContentByIdQuery> {
      return requester<IContentByIdQuery, IContentByIdQueryVariables>(ContentByIdDocument, variables, options) as Promise<IContentByIdQuery>;
    },
    getExperience(variables?: IGetExperienceQueryVariables, options?: C): Promise<IGetExperienceQuery> {
      return requester<IGetExperienceQuery, IGetExperienceQueryVariables>(GetExperienceDocument, variables, options) as Promise<IGetExperienceQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;