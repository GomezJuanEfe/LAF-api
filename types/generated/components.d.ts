import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
    text: Attribute.String;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Images: Attribute.Media;
    header: Attribute.Component<'shared.header'>;
    text: Attribute.String;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface BlocksRecurso extends Schema.Component {
  collectionName: 'components_blocks_recursos';
  info: {
    displayName: 'Recurso';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Text: Attribute.Text & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
    Image: Attribute.Media;
  };
}

export interface BlocksRelatedArticles extends Schema.Component {
  collectionName: 'components_blocks_related_articles';
  info: {
    displayName: 'relatedNews';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    noticias: Attribute.Relation<
      'blocks.related-articles',
      'oneToMany',
      'api::noticia.noticia'
    >;
  };
}

export interface BlocksSponsors extends Schema.Component {
  collectionName: 'components_blocks_sponsors';
  info: {
    displayName: 'Sponsors';
  };
  attributes: {
    sponsors: Attribute.Media;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    members: Attribute.Relation<
      'blocks.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerColumns: Attribute.Component<'shared.footer-columns', true>;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
    button: Attribute.Component<'shared.button'>;
    label: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    leftButton: Attribute.Component<'shared.link'>;
    rightButton: Attribute.Component<'shared.link'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footerColumns';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    label: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'SocialNetwork';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.recurso': BlocksRecurso;
      'blocks.related-articles': BlocksRelatedArticles;
      'blocks.sponsors': BlocksSponsors;
      'blocks.team': BlocksTeam;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.footer-columns': SharedFooterColumns;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-network': SharedSocialNetwork;
    }
  }
}
