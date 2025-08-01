import type { Schema, Struct } from '@strapi/strapi';

export interface RecipeIngredient extends Struct.ComponentSchema {
  collectionName: 'components_recipe_ingredients';
  info: {
    description: 'Single recipe ingredient as string (Google Recipe schema compliant)';
    displayName: 'Recipe Ingredient';
    icon: 'restaurant';
  };
  attributes: {
    ingredient: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RecipeInstruction extends Struct.ComponentSchema {
  collectionName: 'components_recipe_instructions';
  info: {
    description: 'Recipe instruction step (Google HowToStep schema compliant)';
    displayName: 'Recipe Instruction';
    icon: 'list';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface RecipeNutrition extends Struct.ComponentSchema {
  collectionName: 'components_recipe_nutrition';
  info: {
    description: 'Nutritional information for recipe (Google Recipe schema compliant)';
    displayName: 'Nutrition Information';
    icon: 'heart';
  };
  attributes: {
    calories: Schema.Attribute.String;
    carbohydrates: Schema.Attribute.String;
    cholesterol: Schema.Attribute.String;
    fat: Schema.Attribute.String;
    fiber: Schema.Attribute.String;
    protein: Schema.Attribute.String;
    saturatedFat: Schema.Attribute.String;
    sodium: Schema.Attribute.String;
    sugar: Schema.Attribute.String;
    unsaturatedFat: Schema.Attribute.String;
  };
}

export interface RecipeRating extends Struct.ComponentSchema {
  collectionName: 'components_recipe_ratings';
  info: {
    description: 'Aggregate rating information for recipe (Google Recipe schema compliant)';
    displayName: 'Aggregate Rating';
    icon: 'star';
  };
  attributes: {
    bestRating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    ratingCount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    ratingValue: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    worstRating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

export interface RecipeVideo extends Struct.ComponentSchema {
  collectionName: 'components_recipe_videos';
  info: {
    description: 'Video information for recipe (Google Recipe schema compliant)';
    displayName: 'Recipe Video';
    icon: 'play';
  };
  attributes: {
    contentUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    embedUrl: Schema.Attribute.String;
    expires: Schema.Attribute.DateTime;
    interactionCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnailUrl: Schema.Attribute.Media<'images', true>;
    uploadDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: 'Call to Action button';
    displayName: 'CTA';
    icon: 'external-link-alt';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    description: 'A Frequently Asked Question with a question and answer';
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'A feature item with a checkbox and text';
    displayName: 'Feature Item';
    icon: 'check-circle';
  };
  attributes: {
    is_checked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heros';
  info: {
    description: 'A hero section with title, subtitle, and up to two CTAs';
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    cta_primary: Schema.Attribute.Component<'shared.cta', false>;
    cta_secondary: Schema.Attribute.Component<'shared.cta', false>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroFeatureImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_feature_images';
  info: {
    description: 'A hero section with title, description, image, and feature checkboxes';
    displayName: 'Hero Feature Image';
    icon: 'image';
  };
  attributes: {
    cta_primary: Schema.Attribute.Component<'shared.cta', false>;
    cta_secondary: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    feature_items: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'recipe.ingredient': RecipeIngredient;
      'recipe.instruction': RecipeInstruction;
      'recipe.nutrition': RecipeNutrition;
      'recipe.rating': RecipeRating;
      'recipe.video': RecipeVideo;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.feature-item': SharedFeatureItem;
      'shared.hero': SharedHero;
      'shared.hero-feature-image': SharedHeroFeatureImage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
